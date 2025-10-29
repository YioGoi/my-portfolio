import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';

import styles from './page.module.scss';

export default function EducationPage() {
  return (
    <SectionWrapper variant="slideUp" customSectionClass={styles.educationSection}>
      <h1 className="underline-title">Education</h1>
      <section className={styles.educationList}>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2024</span>
            <h2>Meta Back-End Developer Professional Certificate</h2>
            <p>Taught by Meta Staff</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2023</span>
            <h2>Node.js, Express, MongoDB & More: The Complete Bootcamp</h2>
            <p>Jonas Schmedtmann</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2018 - 2022</span>
            <h2>Software Engineering</h2>
            <p>Technical University of America – Bachelor’s in Software Engineering</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2018</span>
            <h2>Next.js 15 & React - The Complete Guide</h2>
            <p>Udemy - Maximilian Schwarzmüller</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2017</span>
            <h2>React - The Complete Guide</h2>
            <p>Udemy - Maximilian Schwarzmüller</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2015</span>
            <h2>JavaScript - The Complete Guide</h2>
            <p>Udemy - Maximilian Schwarzmüller</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2012 - 2013</span>
            <h2>Web Design and Programming</h2>
            <p>BEMAR Career School – Web Design and Programming Certification</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2005 - 2008</span>
            <h2>Political Sciences</h2>
            <p>Istanbul University – Master’s in Political Sciences</p>
          </div>
        </div>
        <div className={styles.educationItem}>
          <div>
            <Image
              src="/images/education.png"
              alt="Education Icon"
              width={50}
              height={50}
              className={styles.educationIcon}
            />
          </div>
          <div>
            <span className={styles.date}>2000 - 2005</span>
            <h2>Political Sciences</h2>
            <p>Istanbul University – Bachelor’s in Political Sciences</p>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

