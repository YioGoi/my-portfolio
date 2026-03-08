import SectionWrapper from '@/components/SectionWrapper';
import styles from './page.module.scss';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

interface Demo {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  keyFocus: string[];
}

const demos: Demo[] = [
  {
    title: "Translation Agent App",
    keyFocus: ["AI", "LLM", "Translation Workflow"],
    description:
      "An AI-powered translation platform designed to explore context-aware translation workflows. The application integrates large language models and external APIs to generate more accurate translations while preserving contextual meaning across multiple languages.",
    technologies: [
      "React",
      "TypeScript",
      "AI/ML",
      "API Integration",
      "LLM",
      "Prompt Engineering",
    ],
    githubUrl: "https://github.com/YioGoi/translation-agent-app",
  },
  {
    title: "ContextLang",
    keyFocus: ["Language Design", "Context Systems", "Interpreter"],
    description:
      "An experimental programming language designed for context-aware applications. The project explores how contextual information can influence execution flow, enabling adaptive state management and behavior in complex software systems.",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Language Design",
      "Interpreter",
      "Groq",
      "HuggingFace",
      "Ollama",
      "DeepL",
      "React",
      "Axios",
      "Electron",
      "TypeScript",
    ],
    githubUrl: "https://github.com/YioGoi/ContextLang",
  },
  {
    title: "Reactivated Sample",
    keyFocus: ["Django + React", "SSR", "Type-safe APIs"],
    description:
      "A fullstack example demonstrating the integration of Django with React using the Reactivated framework. The project showcases server-side rendering, shared typing between backend and frontend, and type-safe communication across the application stack.",
    technologies: ["Django", "React", "Python", "TypeScript", "Reactivated", "SSR"],
    githubUrl: "https://github.com/YioGoi/reactivated-sample",
  },
  {
    title: "Headless CMS Architecture (Strapi + Next.js)",
    keyFocus: ["Headless CMS", "API-driven frontend", "Content architecture"],
    description:
      "A headless CMS architecture built with Strapi and Next.js, demonstrating how structured content can be delivered through APIs and rendered dynamically in a modern React-based frontend.",
    technologies: [
      "Next.js",
      "React",
      "Strapi",
      "PostgreSQL",
      "REST API",
      "Headless CMS",
    ],
    githubUrl: "https://github.com/YioGoi/strapi-app",
  },
  {
    title: "Graphics Canvas",
    keyFocus: ["Real-time Collaboration", "Canvas Rendering", "WebSockets"],
    description:
      "A real-time collaborative canvas application built to explore high-performance graphics rendering in the browser. The project implements multi-user interaction, cursor synchronization, and efficient drawing tools using the Canvas API and WebSocket communication.",
    technologies: [
      "TypeScript",
      "React 18",
      "Canvas API",
      "WebSocket",
      "Node.js",
      "Express",
      "Webpack 5",
    ],
    githubUrl: "https://github.com/YioGoi/graphics-canvas",
  },
  {
    title: "Next Notes App",
    keyFocus: ["Markdown Editing", "Next.js UI Architecture"],
    description:
      "A lightweight note-taking application built with Next.js to explore markdown-based content editing and modern React UI patterns.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/YioGoi/next-notes-app",
  },
  {
    title: "GraphQL Fundamentals with React",
    keyFocus: ["GraphQL APIs", "Apollo Client", "CRUD Patterns"],
    description:
      "A small learning project demonstrating CRUD operations using GraphQL with React and Apollo Client, focusing on query-based data fetching and schema-driven API design.",
    technologies: ["Apollo Client", "GraphQL", "React", "Express", "Express GraphQL"],
    githubUrl: "https://github.com/YioGoi/grapql-fundamentals",
  },
  {
    title: "Spring Boot Microservice",
    keyFocus: ["Microservices", "Event-driven Architecture", "Kafka"],
    description:
      "A microservice architecture example exploring event-driven design using Kafka, relational persistence with PostgreSQL, and object storage integration with AWS S3.",
    technologies: [
      "Java 17",
      "Spring Boot",
      "Spring Data JPA",
      "Apache Kafka",
      "PostgreSQL",
      "AWS S3",
      "Docker",
      "Maven",
    ],
    githubUrl: "https://github.com/YioGoi/spring-boot-kafka-postgres",
  },
  {
    title: "My Portfolio",
    keyFocus: ["Interactive UI", "3D Visualization", "Developer Portfolio"],
    description:
      "This portfolio website built with Next.js to showcase projects, technical experience, and interactive UI experiments including Three.js visualizations.",
    technologies: ["Next.js", "React", "TypeScript", "SCSS", "Framer Motion", "Three.js"],
    githubUrl: "https://github.com/YioGoi/my-portfolio",
  },
];

export default function DemosPage() {
  return (
    <SectionWrapper
      variant="slideUp"
      customLeftWrapperClass={styles.demosLeftWrapper}
      customSectionClass={styles.demosSection}
    >
      <h1>Projects</h1>
      <p className={styles.intro}>
        Here are some of my personal projects and code samples that showcase different technologies and approaches to solving various problems.
      </p>

      <div className={styles.demosGrid}>
        {demos.map((demo, index) => (
          <article key={index} className={styles.demoCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.demoTitle}>{demo.title}</h2>
              <div className={styles.links}>
                <Link
                  href={demo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                  aria-label={`View ${demo.title} on GitHub`}
                >
                  <FaGithub />
                </Link>
                {demo.liveUrl && (
                  <Link
                    href={demo.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.iconLink}
                    aria-label={`View ${demo.title} live demo`}
                  >
                    <FaExternalLinkAlt />
                  </Link>
                )}
              </div>
            </div>

            <p className={styles.description}>{demo.description}</p>

            <p className={styles.keyFocus}>
              Key Focus: {demo.keyFocus.join(" · ")}
            </p>

            <div className={styles.techStack}>
              <h3 className={styles.techTitle}>Tech Stack:</h3>
              <div className={styles.techTags}>
                {demo.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
