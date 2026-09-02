import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa";

import DownloadResumeButton from "@/components/DownloadResumeButton";
import SectionWrapper from "@/components/SectionWrapper";
import { featuredProjects } from "@/content/projects";
import { productionFoundations, profile } from "@/content/profile";
import { selectedWriting } from "@/content/writing";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <SectionWrapper
      variant="slideUp"
      customLeftWrapperClass={styles.homeLeftWrapper}
      customSectionClass={styles.homeContent}
      customRightWrapperClass={styles.homeVisual}
    >
      <header className={styles.hero}>
        <div className={styles.identityRow}>
          <Image
            src="/images/profile.png"
            alt="Portrait of Yiğit Doğan"
            className={styles.profileImage}
            priority
            width={104}
            height={104}
          />
          <div>
            <p className={styles.eyebrow}>{profile.name}</p>
            <h1>{profile.title}</h1>
          </div>
        </div>

        <p className={styles.stackLine}>{profile.primaryStack.join(" · ")}</p>
        <p className={styles.focusLine}>{profile.focusAreas.join(" · ")}</p>
        <p className={styles.heroSummary}>{profile.summary}</p>

        <div className={styles.actionButtons}>
          <Link className={styles.primaryButton} href="/projects">
            Explore case studies <FaArrowRight aria-hidden="true" />
          </Link>
          <Link className={styles.secondaryButton} href="/contact">
            Start a conversation
          </Link>
          <div className={styles.resumeButtonWrapper}>
            <DownloadResumeButton />
          </div>
        </div>

        <nav className={styles.socialLinks} aria-label="Professional profiles">
          <Link href={profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
          <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
          <Link href={`mailto:${profile.email}`}>Email</Link>
        </nav>
      </header>

      <section className={styles.sectionBlock} aria-labelledby="featured-work">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Selected engineering work</p>
            <h2 id="featured-work">Architecture made visible</h2>
          </div>
          <Link href="/projects" className={styles.textLink}>
            All case-study details <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <article className={styles.projectCard} key={project.slug}>
              <div className={styles.cardMeta}>
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className={styles.architecturePreview}>
                <strong>Architecture</strong>
                <span>{project.architecture}</span>
              </div>
              <dl className={styles.evidenceGrid}>
                {project.evidence.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.evidenceNote}>{project.evidenceNote}</p>
              <div className={styles.cardLinks}>
                <Link href={`/projects#${project.slug}`}>
                  Read decisions <FaArrowRight aria-hidden="true" />
                </Link>
                <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" /> Source
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionBlock} aria-labelledby="production-foundations">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Production ownership</p>
            <h2 id="production-foundations">The foundations behind delivery</h2>
          </div>
          <Link href="/experience" className={styles.textLink}>
            Experience <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.foundationGrid}>
          {productionFoundations.map((item) => (
            <article className={styles.foundationCard} key={item.title}>
              <p className={styles.cardEyebrow}>{item.employer}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul aria-label={`${item.title} technologies and practices`}>
                {item.signals.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.sectionBlock} aria-labelledby="selected-writing">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>Selected writing</p>
            <h2 id="selected-writing">Engineering choices, explained</h2>
          </div>
          <Link href="/blog" className={styles.textLink}>
            More writing <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.writingList}>
          {selectedWriting.map((article) => (
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={article.title}
            >
              <span>{article.topic}</span>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
              <span className={styles.readArticle}>
                Read article <FaArrowRight aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.contactCta} aria-labelledby="contact-heading">
        <p className={styles.eyebrow}>Let&apos;s build dependable frontend systems</p>
        <h2 id="contact-heading">Looking for senior frontend engineering leadership?</h2>
        <p>
          I&apos;m interested in opportunities where architecture, product quality, and hands-on
          delivery all matter.
        </p>
        <Link className={styles.primaryButton} href="/contact">
          Contact me <FaArrowRight aria-hidden="true" />
        </Link>
      </section>
    </SectionWrapper>
  );
}
