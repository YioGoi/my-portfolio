import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';
import DownloadResumeButton from '@/components/DownloadResumeButton';

import styles from './page.module.scss';

export default function HomePage() {
  return (
    <SectionWrapper variant="slideUp">
      <section className={styles.profileContainer}>
        <Image
          src="/images/profile.png"
          alt="Yiğit Doğan"
          className={styles.profileImage}
          loading="eager"
          width={248}
          height={248}
        />
      </section>
      <h1 className={styles.welcomeTitle}>
        Senior Frontend / Fullstack Engineer
        <br />
        <span className={styles.name}>Yiğit Doğan</span>
      </h1>
      <p className={styles.description}>
        Designing scalable product experiences with React, Next.js and Node.js
      </p>
      <section className={styles.actionButtons}>
        <Link
          className={styles.buttonStyle}
          href="/projects"
        >
          View Projects
        </Link>
        <div className={styles.resumeButtonWrapper}>
          <DownloadResumeButton />
        </div>
      </section>
      <section className={styles.socialLinks}>
        <Link href="https://www.linkedin.com/in/yi%C4%9Fit-do%C4%9Fan-709b2a37" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://github.com/YioGoi" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/github.png"
            alt="GitHub"
            width={32}
            height={32}
          />
        </Link>
        <Link href="mailto:ydogan.dev@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/email.png"
            alt="Email"
            width={32}
            height={32}
          />
        </Link>
      </section>
    </SectionWrapper>
  );
}
