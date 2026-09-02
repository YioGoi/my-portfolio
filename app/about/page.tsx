import type { Metadata } from "next";
import Link from "next/link";

import SectionWrapper from "@/components/SectionWrapper";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior frontend engineering experience across React architecture, component systems, real-time interfaces, accessibility, testing, and technical leadership.",
};

const principles = [
  {
    title: "Start with the product constraint",
    description:
      "Rendering, state, transport, and component boundaries should follow the user journey and failure model—not the popularity of a tool.",
  },
  {
    title: "Keep decisions explainable",
    description:
      "I make consequential choices visible through architecture notes, trade-offs, tests, and measurements that another engineer can reproduce.",
  },
  {
    title: "Treat quality as architecture",
    description:
      "Accessibility, performance, testing, and operability work best when they shape component APIs and delivery workflows from the beginning.",
  },
] as const;

export default function AboutPage() {
  return (
    <SectionWrapper variant="slideLeft" customSectionClass={styles.about}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>About</p>
        <h1>Hands-on engineering with architectural ownership</h1>
        <p>
          I&apos;ve been building web applications with React since 2013, evolving with the
          ecosystem from interactive components to server rendering, typed application
          boundaries, and production-scale frontend foundations.
        </p>
      </header>

      <section className={styles.narrative} aria-labelledby="current-focus">
        <h2 id="current-focus">What I do now</h2>
        <p>
          As a Senior Frontend Engineer at The Lab, I define technical standards for
          white-labelled e-commerce platforms and work across distributed teams on component
          foundations, maintainability, testing, and accessibility.
        </p>
        <p>
          Earlier roles include production monitoring dashboards, incremental jQuery-to-React
          modernisation, multilingual Next.js platforms, real-time product interfaces, and
          enterprise component architecture. The consistent thread is making complex systems
          easier to reason about and safer to evolve.
        </p>
      </section>

      <section className={styles.principles} aria-labelledby="engineering-principles">
        <h2 id="engineering-principles">How I approach engineering</h2>
        <div>
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <p className={styles.nextLink}>
        <Link href="/projects">See these principles in the case studies →</Link>
      </p>
    </SectionWrapper>
  );
}
