import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

import styles from './page.module.scss';
import Link from 'next/link';

export default function HomePage() {
  return (
    <SectionWrapper variant="slideUp">
      <section className={styles.profileContainer}>
        <Image
          src="/images/profile.png"
          alt="Yiğit Doğan"
          className={styles.profileImage}
          width={248}
          height={248}
        />
      </section>
      <h1 className={styles.welcomeTitle}>
        Hello, I&apos;am <span className={styles.name}>Yiğit Doğan</span>
        <br />
        Welcome to my portfolio!
      </h1>
      <p>
        Hi, I’m Yiğit Doğan — a frontend-focused software engineer with a strong foundation in JavaScript, React, and Next.js. I also work confidently on the backend, especially with Python and Django.
      </p>
      <p>
        Use the navigation bar above to explore my projects, skills, background, and how to get in touch.
      </p>
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
