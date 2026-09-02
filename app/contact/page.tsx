import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

import SectionWrapper from "@/components/SectionWrapper";
import { profile } from "@/content/profile";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Yiğit Doğan about senior frontend engineering opportunities in Spain.",
};

export default function ContactPage() {
  return (
    <SectionWrapper variant="fade" customSectionClass={styles.contactPage}>
      <header>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Let&apos;s talk about the frontend systems behind your product</h1>
        <p>
          I&apos;m interested in senior frontend roles where React, TypeScript, architecture,
          product quality, and hands-on technical leadership are central to the work.
        </p>
      </header>

      <section className={styles.contactCard} aria-label="Contact details">
        <p className={styles.location}>{profile.contactLocation}</p>
        <Link className={styles.email} href={`mailto:${profile.email}`}>
          {profile.email} <FaArrowRight aria-hidden="true" />
        </Link>
        <div className={styles.links}>
          <Link href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden="true" /> LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
          <Link href={profile.github} target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden="true" /> GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>
      </section>
    </SectionWrapper>
  );
}
