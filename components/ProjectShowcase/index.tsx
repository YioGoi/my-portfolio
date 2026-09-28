import { FaArrowRight, FaCheck } from "react-icons/fa";

import type { ProjectShowcase as Showcase } from "@/content/projects";

import styles from "./index.module.scss";

export default function ProjectShowcase({
  showcase,
  slug,
}: {
  showcase: Showcase;
  slug: string;
}) {
  return (
    <>
      <section className={styles.flow} aria-labelledby={`${slug}-workflow`}>
        <h3 id={`${slug}-workflow`}>From intent to a reviewable candidate</h3>
        <ol>
          {showcase.workflow.map((step, index) => (
            <li key={step}>
              {index > 0 && <FaArrowRight aria-hidden="true" />}
              {step}
            </li>
          ))}
        </ol>
        <p className={styles.outcome}>
          <span>Final handoff</span>
          <code>{showcase.outcome}</code>
        </p>
        <p>Human review and integration remain explicit. No auto-merge or auto-deploy.</p>
      </section>

      <div className={styles.contextGrid}>
        {showcase.sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`${slug}-context-${index}`}>
            <h3 id={`${slug}-context-${index}`}>{section.title}</h3>
            <p>{section.body}</p>
          </section>
        ))}
      </div>

      <ul className={styles.highlights} aria-label="Engineering highlights">
        {showcase.highlights.map((highlight) => (
          <li key={highlight}><FaCheck aria-hidden="true" />{highlight}</li>
        ))}
      </ul>

      <aside className={styles.verification} aria-labelledby={`${slug}-verification`}>
        <h3 id={`${slug}-verification`}>Verification scope</h3>
        <p>{showcase.verification}</p>
      </aside>
    </>
  );
}
