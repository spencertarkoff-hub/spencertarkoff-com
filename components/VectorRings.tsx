"use client";

import { useEffect, useMemo, useRef } from "react";

const COLORS = [
  "rgba(184,197,255,0.18)",
  "rgba(184,197,255,0.32)",
  "rgba(255,230,210,0.22)",
];

type RingMeta = {
  tiltY: number;
  orbitR: number;
  ratio: number;
  color: string;
  strokeWidth: number;
};

type NodeStart = {
  cx: number;
  cy: number;
  angle: number;
  speed: number;
};

function buildMeta(rings: number): RingMeta[] {
  return Array.from({ length: rings }, (_, i) => ({
    tiltY: (i * 23 + 12) % 75,
    orbitR: 80 + i * 18,
    ratio: 0.2 + (i % 3) * 0.15,
    color: COLORS[i % COLORS.length],
    strokeWidth: 0.6 + (i % 2) * 0.4,
  }));
}

function nodeStartPos(index: number, rings: number, meta: RingMeta): NodeStart {
  const angle = (index / rings) * Math.PI * 2;
  const tiltRad = (meta.tiltY * Math.PI) / 180;
  const rx = meta.orbitR;
  const ry = meta.orbitR * meta.ratio;
  const x = Math.cos(angle) * rx;
  const y = Math.sin(angle) * ry;
  return {
    cx: x * Math.cos(tiltRad) - y * Math.sin(tiltRad),
    cy: x * Math.sin(tiltRad) + y * Math.cos(tiltRad),
    angle,
    speed: 0.005 + (index / rings) * 0.005,
  };
}

type Props = {
  rings?: number;
  className?: string;
};

export default function VectorRings({ rings = 7, className }: Props) {
  const ringRefs = useRef<(SVGEllipseElement | null)[]>([]);
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);

  const meta = useMemo(() => buildMeta(rings), [rings]);
  const nodeStarts = useMemo(
    () => meta.map((m, i) => nodeStartPos(i, rings, m)),
    [meta, rings],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const angles = nodeStarts.map((n) => n.angle);
    let frame = 0;
    let rafId: number | null = null;

    const animate = () => {
      frame++;
      const rotation = frame * 0.06;

      for (let idx = 0; idx < meta.length; idx++) {
        const el = ringRefs.current[idx];
        if (!el) continue;
        const m = meta[idx];
        el.setAttribute(
          "transform",
          `rotate(${rotation * (1 + idx * 0.05) + m.tiltY})`,
        );
      }

      for (let idx = 0; idx < nodeRefs.current.length; idx++) {
        const node = nodeRefs.current[idx];
        if (!node) continue;
        const m = meta[idx];
        angles[idx] += nodeStarts[idx].speed;
        const rx = m.orbitR;
        const ry = m.orbitR * m.ratio;
        const x = Math.cos(angles[idx]) * rx;
        const y = Math.sin(angles[idx]) * ry;
        const tilt =
          ((rotation * (1 + idx * 0.05) + m.tiltY) * Math.PI) / 180;
        const xt = x * Math.cos(tilt) - y * Math.sin(tilt);
        const yt = x * Math.sin(tilt) + y * Math.cos(tilt);
        node.setAttribute("cx", String(xt));
        node.setAttribute("cy", String(yt));
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [meta, nodeStarts]);

  return (
    <svg
      viewBox="-200 -200 400 400"
      className={className}
      aria-hidden="true"
    >
      <g>
        {meta.map((m, i) => (
          <ellipse
            key={`ring-${i}`}
            ref={(el) => {
              ringRefs.current[i] = el;
            }}
            cx={0}
            cy={0}
            rx={m.orbitR}
            ry={m.orbitR * m.ratio}
            fill="none"
            stroke={m.color}
            strokeWidth={m.strokeWidth}
            transform={`rotate(${m.tiltY})`}
          />
        ))}
        <circle cx={0} cy={0} r={2} fill="rgba(184,197,255,0.7)" />
        {nodeStarts.map((ns, i) => (
          <circle
            key={`node-${i}`}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            cx={ns.cx}
            cy={ns.cy}
            r={1.8}
            fill="rgba(255,230,210,0.85)"
          />
        ))}
      </g>
    </svg>
  );
}
