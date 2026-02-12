import SectionWrapper from '@/components/SectionWrapper';

export default function AboutPage() {
  return (
    <SectionWrapper variant="slideLeft">
      <h1 className="underline-title">About Me</h1>
      <p>
        I've been building web applications with React since 2013, evolving alongside the ecosystem as it matured into a foundation for modern frontend architecture. Today, I focus on scalable systems, design system governance, and building products designed for long-term evolution.
      </p>
      <p>
        Currently a Senior Frontend Engineer at The Lab (New York), I define technical standards for white-labeled e-commerce platforms and collaborate across distributed teams to ensure architectural consistency and maintainability. Previously, I worked with Ammega Group in Amsterdam and product teams across Europe, delivering real-time dashboards, industrial monitoring systems, and high-traffic interfaces.
      </p>
      <p>
        My work centers on architectural decisions that support sustainable product growth—migrating legacy systems to modern React patterns, establishing shared component libraries, and ensuring accessibility compliance (WCAG 2.1 AA). I treat frontend engineering as a systems discipline: clarity in structure, predictable state management, and performance that scales with complexity.
      </p>
      <p>
        Beyond React and TypeScript, I work with Next.js, Python/Django, and modern testing frameworks. I value thoughtful collaboration, pragmatic decision-making, and building software that remains understandable years after it ships.
      </p>
    </SectionWrapper>
  );
}
