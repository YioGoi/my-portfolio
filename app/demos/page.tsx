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
}

const demos: Demo[] = [
  {
    title: "Graphics Canvas",
    description: "A real-time collaborative canvas application with high-performance graphics rendering, featuring drawing tools, multi-user cursor tracking, and WebSocket-based synchronization.",
    technologies: ["TypeScript", "React 18", "Canvas API", "WebSocket", "Node.js", "Express", "Webpack 5"],
    githubUrl: "https://github.com/YioGoi/graphics-canvas",
  },
  {
    title: "GraphQL Fundamentals with React",
    description: "A simple example demonstrating CRUD operations using GraphQL with React and Apollo Client.",
    technologies: ["Apollo Client", "GraphQL", "React", "Express", "Express GraphQL"],
    githubUrl: "https://github.com/YioGoi/grapql-fundamentals",
  },
  {
    title: "Spring Boot Microservice",
    description: "A modern microservice architecture demonstrating integration with Apache Kafka for messaging, PostgreSQL for data persistence, and AWS S3 for file storage. Features user and order management with event-driven architecture.",
    technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "Apache Kafka", "PostgreSQL", "AWS S3", "Docker", "Maven"],
    githubUrl: "https://github.com/YioGoi/spring-boot-kafka-postgres",
  },
  {
    title: "Next Notes App",
    description: "A modern note-taking application built with Next.js, featuring real-time updates, markdown support, and a clean user interface for organizing your thoughts and ideas.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/YioGoi/next-notes-app",
  },
  {
    title: "Reactivated Sample",
    description: "A sample project demonstrating the integration of Django with React using the Reactivated library, showcasing server-side rendering and type-safe communication between frontend and backend.",
    technologies: ["Django", "React", "Python", "TypeScript", "Reactivated"],
    githubUrl: "https://github.com/YioGoi/reactivated-sample",
  },
  {
    title: "My Portfolio",
    description: "This portfolio website showcasing my work and experience. Built with modern web technologies, featuring smooth animations, responsive design, and interactive 3D elements.",
    technologies: ["Next.js", "React", "TypeScript", "SCSS", "Framer Motion", "Three.js"],
    githubUrl: "https://github.com/YioGoi/my-portfolio",
  },
  {
    title: "ContextLang",
    description: "A programming language designed for context-aware applications, providing unique features for handling contextual information and state management in complex systems.",
    technologies: ["Python", "FastAPI", "LangChain", "Language Design", "Interpreter", "Groq", "HuggingFace", "Ollama", "DeepL", "React", "Axios", "Electron", "TypeScript"],
    githubUrl: "https://github.com/YioGoi/ContextLang",
  },
  {
    title: "Translation Agent App",
    description: "An intelligent translation application leveraging AI to provide accurate and context-aware translations, with support for multiple languages and customizable translation preferences.",
    technologies: ["React", "TypeScript", "AI/ML", "API Integration"],
    githubUrl: "https://github.com/YioGoi/translation-agent-app",
  },
];

export default function DemosPage() {
  return (
    <SectionWrapper 
        variant="slideUp"
        customLeftWrapperClass={styles.demosLeftWrapper}
        customSectionClass={styles.demosSection}
    >
      <h1 className="underline-title">Demos</h1>
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
