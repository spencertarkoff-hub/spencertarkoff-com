"use client";

import { useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) video.pause();
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intro" className="border-t border-line w-full">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-16 md:py-28">
        <SectionLabel number="01" title="Intro" />

        <div className="relative mt-10 md:mt-16 mx-auto max-w-[1100px] aspect-video rounded-lg overflow-hidden border border-line-strong bg-bg-2">
          <video
            ref={videoRef}
            src="https://uxyzqo7ssx7lmh7m.public.blob.vercel-storage.com/intro.mp4"
            controls
            playsInline
            preload="metadata"
            aria-label="Spencer Tarkoff intro video"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
