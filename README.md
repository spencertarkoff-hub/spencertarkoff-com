# spencertarkoff.com

Personal site of Spencer Tarkoff. Live at [spencertarkoff.com](https://spencertarkoff.com).

Built with Claude Code as a working portfolio that demonstrates the same kind of AI integration I do at work. Visitors can read about my background, watch a short intro video, or talk directly to an AI agent trained on my work history and how I think about building.

## What's here

- **Talk to Spencer agent** — streaming chat backed by Claude Sonnet 4.5 with prompt caching. System prompt speaks in first person, calibrated through several rounds of voice tuning. Trained on my work, my background, and how I approach problems.
- **Synthesia avatar intro video** — a ~50-second hello rendered through Synthesia, hosted on Vercel Blob, embedded with native browser controls.
- **"In the field" photo carousel** — manually-advanced, three photos from real work (AI training, conference panel) plus one personal.
- **Vector design system** — custom dark aesthetic, blue-violet accent (`#b8c5ff`), Inter + JetBrains Mono, hand-tuned spacing.

## Stack

- **Framework:** Next.js 16 with Turbopack, App Router
- **Styling:** Tailwind CSS v4 (`@theme inline` in globals.css)
- **TypeScript** strict mode
- **AI:** `@anthropic-ai/sdk` with streaming responses and prompt caching on the system prompt
- **Storage:** Vercel Blob for video and image assets (kept out of the git repo)
- **Deployment:** Vercel, auto-deploys from `main` branch
- **Domain:** spencertarkoff.com via Network Solutions DNS pointing at Vercel

## Notable implementation details

**Streaming chat agent.** The Talk to Spencer endpoint at `app/api/chat/route.ts` streams Claude's responses token-by-token using server-sent events. The system prompt is cached at the API level so subsequent turns in the same conversation are faster and cheaper. The agent speaks as me in first person, with calibration examples in the system prompt covering register, rhythm, and what to say when asked about confidential client work.

**Scroll-aware FAB.** The header has a prominent Talk to Spencer CTA in the hero. Once the visitor scrolls past the hero, that CTA replaces itself with a smaller floating button (FAB) in the bottom-right via IntersectionObserver. Two access points, but only one visible at a time.

**Media handled via Vercel Blob, not git.** The intro video is 28MB and three photos are several MB each. Keeping them out of the git repo means clones stay small, deploys stay fast, and assets get Vercel's CDN automatically.

**No traditional database.** The agent doesn't store conversation history server-side. Each turn includes the full context, kept in client state. Simpler, no PII to manage.

## Why I built this

I'm a business performance improvement consultant at Protiviti and I help lead our AI training. Most of my paid work is confidential client engagements, which means I can't show it in a portfolio. This site is the workaround: a real production app, built end-to-end with Claude Code, that demonstrates the kind of integration work I actually do — including a working agent visitors can interact with.

It's also a stress test for me. If I can't ship my own site with these tools, I shouldn't be teaching other people to ship theirs.

## Running locally

```bash
git clone https://github.com/spencertarkoff-hub/spencertarkoff-com.git
cd spencertarkoff-com
npm install
cp .env.local.example .env.local
# Add your ANTHROPIC_API_KEY to .env.local
npm run dev
```

The site runs at `localhost:3000`. The Talk to Spencer agent requires an Anthropic API key.

## Contact

- Site: [spencertarkoff.com](https://spencertarkoff.com)
- Email: spencertarkoff@gmail.com
- LinkedIn: [spencer-tarkoff-7aa52624b](https://www.linkedin.com/in/spencer-tarkoff-7aa52624b/)
