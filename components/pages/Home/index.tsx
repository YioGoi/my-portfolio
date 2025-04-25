'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './index.module.scss';

const sections = [
  {
    id: 'profile',
    title: 'Profile',
    content: (
      <div className={styles.section}>
        <h1>YIĞIT DOĞAN</h1>
        <p>+90 532 510 1204 | Istanbul, Türkiye | ydogan8989@gmail.com</p>
        <h2>Software Engineer</h2>
        <p>
          Experienced Software Developer specializing in JavaScript, React, Next.js, and other modern frontend technologies.
          Proficient in developing scalable, high-performance web applications with a focus on frontend architecture.
          Currently expanding full-stack capabilities at The Lab, utilizing React, Python, and Django in a complex multi-site environment.
          Skilled in optimizing frontend performance, designing user interfaces, and integrating seamless user experiences across platforms.
        </p>
      </div>
    )
  },
  {
    id: 'skills',
    title: 'Skills',
    content: (
      <div className={styles.section}>
        <h2>Skills</h2>
        <ul>
          <li>React / React Native</li>
          <li>JavaScript (ES6+), Next.js</li>
          <li>Redux, Redux Saga, RxJS</li>
          <li>SASS, Tailwind, Webpack</li>
          <li>Jest, Storybook, Puppeteer, Playwright</li>
          <li>Python, Django, Node.js, Express.js</li>
          <li>MySQL, MongoDB, GraphQL, RESTful APIs, JWT</li>
          <li>C#, .NET, PHP</li>
          <li>Git, Bitbucket, Jira, Agile (Scrum)</li>
          <li>Responsive Design, SEO Optimization, UI/UX Design</li>
        </ul>
      </div>
    )
  },
  {
    id: 'experience',
    title: 'Work Experience',
    content: (
      <div className={styles.section}>
        <h2>Work Experience</h2>
        <ul>
          <li><strong>Web Developer</strong> (2008–2013) at Doğan Defter San. ve Ticaret</li>
          <li><strong>Fullstack Developer</strong> (2013–2015) at Ofism.com</li>
          <li><strong>Frontend Developer</strong> (2015–2017) at ROS Construction Inc.</li>
          <li><strong>Frontend Developer</strong> (2015–2018) at Noviente Informatics Systems</li>
          <li><strong>Frontend Developer</strong> (2018–2019) at Tıkla Kutla Information Technologies</li>
          <li><strong>React Developer</strong> (2019) at Bulut Software</li>
          <li><strong>Senior Frontend Developer</strong> (2019–2021) at NTT Data</li>
          <li><strong>Senior Frontend Developer</strong> (2021–2022) at Kafein Software</li>
          <li><strong>Senior Frontend Developer</strong> (2022–2023) at Path Product and Software House</li>
          <li><strong>Fullstack Senior Software Developer</strong> (2023–Present) at The Lab, New York, USA</li>
        </ul>
      </div>
    )
  },
  {
    id: 'education',
    title: 'Education',
    content: (
      <div className={styles.section}>
        <h2>Education</h2>
        <ul>
          <li>Programming Certification, BEMAR Career School (2013)</li>
          <li>Bachelor’s Degree in Political Science, Istanbul University (2000–2005)</li>
          <li>Master’s Degree in Political Science, Borcelle University (2005–2008)</li>
          <li>Bachelor’s Degree in Software Engineering, Technical University of America (Ongoing)</li>
        </ul>
      </div>
    )
  }
];

const Home = () => {
  const [active, setActive] = useState(sections[0].id);

  return (
    <div className={styles.appContainer}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            {sections.map(
              section =>
                section.id === active && (
                  <motion.div
                    key={section.id}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ type: 'tween', duration: 0.8 }}
                    className={styles.section}
                  >
                    {section.content}
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.map(({ id, title }) => (
              <li
                key={id}
                className={`${styles.navItem} ${id === active ? styles.active : ''}`}
                onClick={() => setActive(id)}
              >
                {title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
