import SectionWrapper from '@/components/SectionWrapper';
import styles from './page.module.scss';

export default function SkillsPage() {
  return (
    <SectionWrapper variant="scaleUp">
      <h1>Skills</h1>
      <section className={styles.skillsList}>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>📜</div>
          <div className={styles.skillsContainer}>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>ES6+</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>⚛️</div>
          <div className={styles.skillsContainer}>
            <span>React</span>
            <span>Next.js</span>
            <span>React Native</span>
            <span>Redux</span>
            <span>Redux Saga</span>
            <span>Zustand</span>
            <span>React Query</span>
            <span>React Hook Form</span>
            <span>Frontend Architecture</span>
            <span>Component Systems</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🎨</div>
          <div className={styles.skillsContainer}>
            <span>CSS</span>
            <span>Sass / SCSS</span>
            <span>Styled Components</span>
            <span>Material UI</span>
            <span>Responsive UI</span>
            <span>Design Systems</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🖥️</div>
          <div className={styles.skillsContainer}>
            <span>Fullstack Engineering</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>Python</span>
            <span>Django</span>
            <span>Reactivated</span>
            <span>REST APIs</span>
            <span>GraphQL</span>
            <span>PostgreSQL</span>
            <span>MongoDB</span>
            <span>Authentication</span>
            <span>SSO</span>
            <span>JWT</span>
            <span>.NET Integration</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🧪</div>
          <div className={styles.skillsContainer}>
            <span>Jest</span>
            <span>React Testing Library</span>
            <span>Playwright</span>
            <span>Cypress</span>
            <span>Storybook</span>
            <span>Quality Engineering</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🤖</div>
          <div className={styles.skillsContainer}>
            <span>AI-Assisted Engineering</span>
            <span>OpenAI Codex</span>
            <span>Cursor</span>
            <span>Claude Code</span>
            <span>GitHub Copilot</span>
            <span>Prompt Engineering</span>
            <span>Code Review Acceleration</span>
            <span>Refactoring Workflows</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🚀</div>
          <div className={styles.skillsContainer}>
            <span>Performance Optimization</span>
            <span>Web Vitals</span>
            <span>Lighthouse</span>
            <span>Accessibility</span>
            <span>SEO</span>
            <span>AI Optimization</span>
            <span>AI-Readable Products</span>
            <span>AI Indexability</span>
            <span>Structured Data</span>
            <span>llms.txt</span>
            <span>Incremental Modernization</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>☁️</div>
          <div className={styles.skillsContainer}>
            <span>Git</span>
            <span>GitHub</span>
            <span>GitLab</span>
            <span>Docker</span>
            <span>CI/CD</span>
            <span>Vercel</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>⛓️</div>
          <div className={styles.skillsContainer}>
            <span>Blockchain</span>
            <span>Web3</span>
            <span>Solidity</span>
            <span>Smart Contracts</span>
            <span>ethers.js</span>
            <span>Hardhat</span>
            <span>IPFS</span>
            <span>Self-directed Projects</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>📋</div>
          <div className={styles.skillsContainer}>
            <span>Product Collaboration</span>
            <span>Technical Leadership</span>
            <span>Code Review</span>
            <span>Mentoring</span>
            <span>Agile</span>
            <span>Jira</span>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
