import SectionWrapper from '@/components/SectionWrapper';
import styles from './page.module.scss';

export default function SkillsPage() {
  return (
    <SectionWrapper variant="scaleUp">
      <h1 className="underline-title">Skills</h1>
      <section className={styles.skillsList}>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>📜</div>
          <div className={styles.skillsContainer}>
            <span>Javascript</span>
            <span>Typescript</span>
            <span>ES6</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>⚛️</div>
          <div className={styles.skillsContainer}>
            <span>React</span>
            <span>React Native</span>
            <span>Next</span>
            <span>Redux</span>
            <span>Redux Saga</span>
            <span>RxJS</span>
            <span>Zustand</span>
            <span>React Query</span>
            <span>React Hook Form / Formik</span>
            <span>React Navigation</span>
            <span>Framer Motion</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🎨</div>
          <div className={styles.skillsContainer}>
            <span>CSS</span>
            <span>Sass/SCSS</span>
            <span>Tailwind</span>
            <span>Module Scss</span>
            <span>Styled Components</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Ant Design</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>📦</div>
          <div className={styles.skillsContainer}>
            <span>Webpack</span>
            <span>Vite</span>
            <span>Babel</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🧪</div>
          <div className={styles.skillsContainer}>
            <span>Jest</span>
            <span>Storybook</span>
            <span>Puppeteer</span>
            <span>Playwright</span>
            <span>Jest</span>
            <span>Vitest</span>
            <span>React Testing Library</span>
            <span>Cypress</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🔧</div>
          <div className={styles.skillsContainer}>
            <span>ESLint</span>
            <span>Prettier</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🚀</div>
          <div className={styles.skillsContainer}>
            <span>SEO Optimization</span>
            <span>Lighthouse</span>
            <span>Web Vitals</span>
            <span>Next.js Image Optimization</span>
            <span>Lazy Loading</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🖥️</div>
          <div className={styles.skillsContainer}>
            <span>Python</span>
            <span>Django</span>
            <span>Wagtail</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>RESTful API</span>
            <span>MySQL</span>
            <span>MongoDB</span>
            <span>REST</span>
            <span>GraphQL</span>
            <span>PostgreSQL</span>
            <span>Firebase</span>
            <span>JWT</span>
            <span>OAuth2</span>
            <span>Auth0</span>
            <span>NextAuth.js</span>
            <span>SSO</span>
            <span>SignalR</span>
            <span>PHP</span>
            <span>.NET</span>
            <span>.NET Core</span>
            <span>C#</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>☁️</div>
          <div className={styles.skillsContainer}>
            <span>GitHub</span>
            <span>GitLab</span>
            <span>Bitbucket</span>
            <span>Vercel</span>
            <span>Netlify</span>
            <span>Docker</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>✏️</div>
          <div className={styles.skillsContainer}>
            <span>UI/UX Design</span>
            <span>Responsive/Adaptive Design</span>
            <span>Adobe XD</span>
            <span>Figma</span>
            <span>Sketch</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>🤖</div>
          <div className={styles.skillsContainer}>
            <span>Claude Sonnet 4</span>
            <span>OpenAI API</span>
            <span>ChatGPT 4.1</span>
            <span>Github Copilot</span>
            <span>Cursor</span>
            <span>Langchain</span>
            <span>LangGraph</span>
            <span>CrewAI</span>
            <span>Agentic Frameworks</span>
          </div>
        </div>
        <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>⛓️</div>
          <div className={styles.skillsContainer}>
            <span>Web3</span>
            <span>Blockchain</span>
            <span>Smart Contracts</span>
            <span>Solidity</span>
            <span>ethers.js</span>
            <span>hardhat</span>
            <span>polygon</span>
            <span>ipfs</span>
          </div>
        </div>
         <div className={styles.skillCategory}>
          <div className={styles.categoryIcon}>📋</div>
          <div className={styles.skillsContainer}>
            <span>Agile</span>
            <span>Scrum</span>
            <span>Jira</span>
            <span>Kanban</span>
            <span>Planio</span>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}
