import SectionWrapper from '@/components/SectionWrapper';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <SectionWrapper variant="slideUp">
      <h1 className={styles.welcomeTitle}>Welcome to My Portfolio !</h1>
      <p>
        Hi, I’m Yiğit Doğan — a frontend-focused software engineer with a strong foundation in JavaScript, React, and Next.js. I also work confidently on the backend, especially with Python and Django.
      </p>
      <p>
        Use the navigation bar above to explore my projects, skills, background, and how to get in touch.
      </p>
    </SectionWrapper>
  );
}
