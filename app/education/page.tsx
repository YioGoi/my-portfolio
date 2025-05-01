import SectionWrapper from '@/components/SectionWrapper';
import styles from './page.module.scss';

export default function EducationPage() {
    return (
      <SectionWrapper variant="slideUp">
        <h1>Education</h1>
        <ul className={styles.educationList}>
          <li>Technical University of America (2018 - 2022) – Bachelor’s in Software Engineering</li>
          <li>Istanbul University (2005 - 2008) – Master’s in Political Science</li>
          <li>Istanbul University (2000 - 2005) – Bachelor’s in Political Science</li>
          <li>BEMAR Career School (2013) – Web Design and Programming Certification</li>
        </ul>
      </SectionWrapper>
    );
  }
  