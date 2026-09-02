import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaBookOpen, FaGithub } from "react-icons/fa";

import SectionWrapper from "@/components/SectionWrapper";
import { featuredProjects, supportingProjects } from "@/content/projects";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Frontend Architecture Case Studies",
  description:
    "Atlas and Signal Ops: senior frontend engineering case studies covering Next.js rendering, ordered Server-Sent Events, performance, accessibility, and testing.",
};

export default function ProjectsPage() {
  return (
    <SectionWrapper
      variant="slideUp"
      customLeftWrapperClass={styles.projectsLeftWrapper}
      customSectionClass={styles.projectsSection}
      customRightWrapperClass={styles.projectsVisual}
    >
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Selected engineering work</p>
        <h1>Frontend architecture case studies</h1>
        <p>
          Two focused systems showing how I define boundaries, choose rendering and live-data
          models, design failure recovery, and turn quality requirements into executable evidence.
        </p>
      </header>

      <nav className={styles.projectIndex} aria-label="Case studies on this page">
        {featuredProjects.map((project, index) => (
          <a href={`#${project.slug}`} key={project.slug}>
            <span>0{index + 1}</span>
            {project.title}
          </a>
        ))}
      </nav>

      <div className={styles.caseStudies}>
        {featuredProjects.map((project, projectIndex) => (
          <article className={styles.caseStudy} id={project.slug} key={project.slug}>
            <header className={styles.caseHeader}>
              <div>
                <p className={styles.eyebrow}>
                  0{projectIndex + 1} · {project.category}
                </p>
                <h2>{project.title}</h2>
              </div>
              <span className={styles.status}>{project.status}</span>
            </header>

            <p className={styles.summary}>{project.summary}</p>

            <div className={styles.contextGrid}>
              <section aria-labelledby={`${project.slug}-problem`}>
                <h3 id={`${project.slug}-problem`}>Engineering problem</h3>
                <p>{project.problem}</p>
              </section>
              <section aria-labelledby={`${project.slug}-architecture`}>
                <h3 id={`${project.slug}-architecture`}>Architecture</h3>
                <p>{project.architecture}</p>
              </section>
            </div>

            <section className={styles.decisionSection} aria-labelledby={`${project.slug}-decisions`}>
              <p className={styles.sectionLabel}>Decision record</p>
              <h3 id={`${project.slug}-decisions`}>Choices and trade-offs</h3>
              <div className={styles.decisionList}>
                {project.decisions.map((item, index) => (
                  <article key={item.title}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.decision}</p>
                      <p className={styles.tradeoff}>
                        <strong>Trade-off:</strong> {item.tradeoff}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.evidenceSection} aria-labelledby={`${project.slug}-evidence`}>
              <div>
                <p className={styles.sectionLabel}>Reproducible evidence</p>
                <h3 id={`${project.slug}-evidence`}>Measured locally, scoped explicitly</h3>
              </div>
              <dl>
                {project.evidence.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p>{project.evidenceNote}</p>
            </section>

            <ul className={styles.techList} aria-label={`${project.title} technology stack`}>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div className={styles.caseLinks}>
              <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub aria-hidden="true" /> View source
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
              <Link href={project.documentationUrl} target="_blank" rel="noopener noreferrer">
                <FaBookOpen aria-hidden="true" /> Read project documentation
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className={styles.supportingSection} aria-labelledby="supporting-work">
        <p className={styles.eyebrow}>Supporting work</p>
        <h2 id="supporting-work">Additional frontend architecture samples</h2>
        <p>
          Smaller repositories retained for the specific boundary or browser-system problem they
          explore.
        </p>
        <div className={styles.supportingGrid}>
          {supportingProjects.map((project) => (
            <article key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.focus}</p>
              <ul aria-label={`${project.title} technology stack`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                Source <FaArrowRight aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
