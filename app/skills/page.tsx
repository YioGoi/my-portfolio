import type { Metadata } from "next";

import SectionWrapper from "@/components/SectionWrapper";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Engineering Capabilities",
  description:
    "Senior frontend engineering capabilities across React, TypeScript, Next.js, real-time systems, performance, accessibility, testing, and technical leadership.",
};

const capabilities = [
  {
    index: "01",
    title: "React and TypeScript",
    description:
      "Typed component APIs, state architecture, complex product interfaces, reusable hooks, and incremental modernisation.",
    skills: ["React", "TypeScript", "JavaScript", "React Query", "Redux", "RxJS"],
  },
  {
    index: "02",
    title: "Next.js architecture",
    description:
      "Rendering strategy selected per route and data lifecycle, with explicit server/client boundaries, URL state, streaming, metadata, and SEO.",
    skills: ["Server Components", "SSR", "SSG", "CSR", "Suspense", "Structured data"],
  },
  {
    index: "03",
    title: "Real-time and data-intensive UI",
    description:
      "Ordered event application, snapshot recovery, connection-state UX, reactive streams, and predictable rendering under frequent updates.",
    skills: ["Server-Sent Events", "WebSockets", "Typed reducers", "REST", "GraphQL"],
  },
  {
    index: "04",
    title: "Performance and accessibility",
    description:
      "Measured performance budgets, focused rendering updates, semantic HTML, keyboard interaction, visible focus, and WCAG-aligned delivery.",
    skills: ["Lighthouse", "Web Vitals", "axe", "WCAG 2.1 AA", "Responsive UI"],
  },
  {
    index: "05",
    title: "Testing and delivery",
    description:
      "Tests placed at the boundary that can prove the behavior, backed by static checks and repeatable CI workflows.",
    skills: ["Vitest", "Jest", "React Testing Library", "Playwright", "Cypress", "GitHub Actions"],
  },
  {
    index: "06",
    title: "Components and technical leadership",
    description:
      "Design-system governance, shared component foundations, architectural standards, code review, mentoring, and cross-functional delivery.",
    skills: ["Design systems", "Storybook", "SCSS", "Code review", "Mentoring"],
  },
] as const;

export default function SkillsPage() {
  return (
    <SectionWrapper variant="scaleUp" customSectionClass={styles.skillsPage}>
      <header>
        <p className={styles.eyebrow}>Engineering capabilities</p>
        <h1>Depth over a catalogue of tools</h1>
        <p>
          The core capabilities I use to design, ship, measure, and evolve frontend products.
        </p>
      </header>
      <section className={styles.capabilityList} aria-label="Frontend engineering capabilities">
        {capabilities.map((capability) => (
          <article key={capability.title}>
            <span className={styles.index} aria-hidden="true">
              {capability.index}
            </span>
            <div>
              <h2>{capability.title}</h2>
              <p>{capability.description}</p>
              <ul aria-label={`${capability.title} technologies and practices`}>
                {capability.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </SectionWrapper>
  );
}
