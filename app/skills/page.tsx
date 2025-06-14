import SectionWrapper from '@/components/SectionWrapper';
import styles from './page.module.scss';

export default function SkillsPage() {
    return (
      <SectionWrapper variant="scaleUp">
        <h1>Skills</h1>
        <ul className={styles.skillsList}>
          <li>React, React Native, Next, Redux, Redux Saga, RxJS</li>
          <li>Typescript, Javascript, ES6</li>
          <li>CSS, SASS, Tailwind, Module Scss</li>
          <li>Webpack, Jest, Storybook, Puppeteer, Playwright, Eslint, Prettier</li>
          <li>Python, Django, Node.js, Express.js, MySQL, MongoDB, REST, GraphQL, JWT, SSO, SignalR, SEO Optimization</li>
          <li>GitHub, GitLab, Bitbucket</li>
          <li>UI/UX Design, Responsive/Adaptive Design, Adobe XD, Figma, Sketch</li>
          <li>Agile, Scrum, Jira, Kanban, Planio</li>
        </ul>
      </SectionWrapper>
    );
  }
  