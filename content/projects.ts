export type ProjectDecision = {
  title: string;
  decision: string;
  tradeoff: string;
};

export type ProjectEvidence = {
  value: string;
  label: string;
};

export type FeaturedProject = {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  architecture: string;
  technologies: readonly string[];
  decisions: readonly ProjectDecision[];
  evidence: readonly ProjectEvidence[];
  evidenceNote: string;
  sourceUrl: string;
  documentationUrl: string;
};

export const featuredProjects = [
  {
    slug: "atlas",
    title: "Atlas",
    category: "Next.js rendering architecture",
    status: "Architecture case study",
    summary:
      "A compact accommodation marketplace built to make server-first frontend decisions, failure ownership, performance budgets, SEO, and accessibility visible in one focused vertical slice.",
    problem:
      "Search filters need to survive refresh, history, and sharing; invalid URL state must not reach domain code; listing content must remain indexable; and secondary latency must not block critical results.",
    architecture:
      "A dynamic search route resolves URL state before streaming, Server Components render results inside isolated Suspense boundaries, and known listing details are statically generated with route-specific metadata and structured data.",
    technologies: [
      "Next.js",
      "React Server Components",
      "TypeScript",
      "Vitest",
      "Playwright",
      "axe",
      "Lighthouse CI",
    ],
    decisions: [
      {
        title: "URL state over client state",
        decision:
          "Native GET controls make the complete search state shareable and progressively enhanced without filter providers or effect synchronisation.",
        tradeoff:
          "Navigation-relevant filters belong in the URL; ephemeral interaction state would not.",
      },
      {
        title: "Resolve before streaming",
        decision:
          "URL parsing, normalisation, and validation complete before Suspense starts rendering data regions.",
        tradeoff:
          "This delays the first streamed boundary until validity is known, but preserves real HTTP 307 redirects instead of streamed 200 responses with meta refreshes.",
      },
      {
        title: "Narrow client boundaries",
        decision:
          "Application-owned search and listing UI remains server-rendered; only route recovery boundaries require client components.",
        tradeoff:
          "The design deliberately favours native form submission over instant filter updates to keep hydration narrow and behavior predictable.",
      },
    ],
    evidence: [
      { value: "0.97 / 0.99", label: "Lighthouse performance" },
      { value: "1.00", label: "Accessibility score" },
      { value: "3 ms", label: "Total blocking time" },
    ],
    evidenceNote:
      "Median of three local production-mode mobile Lighthouse runs per route on 1 September 2026. Scores cover /search and a generated listing detail; they are synthetic lab results, not field data.",
    sourceUrl: "https://github.com/YioGoi/atlas",
    documentationUrl: "https://github.com/YioGoi/atlas/tree/main/docs",
  },
  {
    slug: "signal-ops",
    title: "Signal Ops",
    category: "Real-time, data-intensive frontend",
    status: "Local v0.1 release candidate",
    summary:
      "An operations control plane for live service health and incident investigation, designed around explicit failure states, versioned contracts, deterministic evidence, and an ordered, resumable Server-Sent Events stream.",
    problem:
      "An operator needs a trustworthy current snapshot, visible connection freshness, and ordered live updates that can recover from duplicates, disconnects, gaps, or expired history without treating the stream as the source of truth.",
    architecture:
      "The React client starts from a consistent REST snapshot and cursor, then applies validated SSE events through a typed reducer. PostgreSQL state changes and event-log records commit atomically; unresolvable gaps trigger a fresh snapshot.",
    technologies: [
      "React",
      "TypeScript",
      "Server-Sent Events",
      "Fastify",
      "PostgreSQL",
      "Vitest",
      "Playwright",
      "axe",
    ],
    decisions: [
      {
        title: "SSE over WebSockets",
        decision:
          "The initial live channel uses ordered event IDs, heartbeat comments, and cursor-based recovery because v0.1 communication is server-to-browser.",
        tradeoff:
          "The simpler HTTP transport fits one-way updates; full-duplex messaging, binary payloads, or materially higher event rates would require a different or additional transport.",
      },
      {
        title: "Snapshot plus ordered events",
        decision:
          "The dashboard hydrates from a consistent snapshot and applies only later idempotent events; continuity failures resynchronise rather than speculate.",
        tradeoff:
          "The backend must own cursor ordering, retention, and consistency, while the client must reject invalid transitions and recover explicitly.",
      },
      {
        title: "Modular monolith first",
        decision:
          "Catalog, Telemetry, Health, Incidents, Live Stream, and Simulation keep explicit boundaries inside one backend process.",
        tradeoff:
          "Transactions, debugging, and end-to-end proof stay manageable, while process-level failures remain shared until evidence justifies extraction.",
      },
    ],
    evidence: [
      { value: "75 ms", label: "Event-to-UI p95" },
      { value: "8 ms", label: "Interaction p95" },
      { value: "0", label: "axe violations" },
    ],
    evidenceNote:
      "Recorded 28 August 2026 in a same-host, single-user Chromium baseline with 100 seeded services and 10 metric events per second. This is reproducible local evidence, not hosted or multi-user production capacity.",
    sourceUrl: "https://github.com/YioGoi/signal-ops",
    documentationUrl: "https://github.com/YioGoi/signal-ops/tree/main/docs",
  },
] as const satisfies readonly FeaturedProject[];

export const supportingProjects = [
  {
    title: "Reactivated Sample",
    focus: "Server rendering and type-safe backend/frontend boundaries",
    technologies: ["Django", "React", "TypeScript", "Reactivated", "SSR"],
    sourceUrl: "https://github.com/YioGoi/reactivated-sample",
  },
  {
    title: "Headless CMS Architecture",
    focus: "Structured content delivery with Strapi and Next.js",
    technologies: ["Next.js", "React", "Strapi", "PostgreSQL", "REST"],
    sourceUrl: "https://github.com/YioGoi/strapi-app",
  },
  {
    title: "Graphics Canvas",
    focus: "Collaborative Canvas rendering and cursor synchronisation",
    technologies: ["React", "TypeScript", "Canvas API", "WebSocket", "Node.js"],
    sourceUrl: "https://github.com/YioGoi/graphics-canvas",
  },
] as const;

