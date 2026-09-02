export const writing = [
  {
    title: "Next.js Beyond the Buzzwords: Choosing Between SSR, CSR, and SSG in Real Projects",
    topic: "Next.js architecture",
    summary:
      "A practical look at choosing rendering strategies from product and delivery constraints.",
    url: "https://medium.com/@ydogan.dev/next-js-beyond-the-buzzwords-choosing-between-ssr-csr-and-ssg-in-real-projects-cd37ada70fc5",
    selected: true,
  },
  {
    title: "React v19.1 and the Power of Functional Programming",
    topic: "React",
    summary:
      "How functional programming ideas shape predictable components and modern React code.",
    url: "https://medium.com/@ydogan.dev/react-v19-1-and-the-power-of-functional-programming-08a31136694a",
    selected: true,
  },
  {
    title: "Fullstack Type Safety with Django, React, and Reactivated",
    topic: "Type-safe boundaries",
    summary:
      "An exploration of shared types and server rendering across Django and React.",
    url: "https://medium.com/@ydogan.dev/fullstack-type-safety-with-django-react-and-reactivated-ceaa9633e73a",
    selected: true,
  },
  {
    title: "From Zero to Insight: Logging & Performance Monitoring in React Native",
    topic: "Performance",
    summary:
      "A practical workflow for understanding logs and runtime performance across emulators and devices.",
    url: "https://medium.com/@ydogan.dev/from-zero-to-insight-logging-performance-monitoring-in-react-native-emulator-real-device-9fb49eb43b44",
    selected: false,
  },
  {
    title: "React Native in 2025: Package Decisions for Building a Mobile App",
    topic: "Technical decisions",
    summary:
      "A decision-oriented guide to selecting foundations for a cross-platform application.",
    url: "https://medium.com/@ydogan.dev/react-native-in-2025-best-package-decisions-for-building-a-mobile-app-c582efd4fa57",
    selected: false,
  },
] as const;

export const selectedWriting = writing.filter((article) => article.selected);

