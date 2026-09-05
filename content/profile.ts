export const profile = {
  name: "Yiğit Doğan",
  title: "Senior Frontend Engineer",
  currentLocation: "Istanbul, Türkiye",
  relocationTarget: "Arnhem, Netherlands",
  email: "ydogan.dev@gmail.com",
  phone: "+90 532 510 1204",
  portfolio: "https://www.yigit-dogan.dev",
  github: "https://github.com/YioGoi",
  linkedin: "https://www.linkedin.com/in/yigit-dogan-709b2a37",
  primaryStack: ["React", "TypeScript", "Next.js"],
  focusAreas: [
    "Frontend Architecture",
    "Real-time Systems",
    "Performance",
    "Technical Leadership",
  ],
  summary:
    "I design and evolve frontend systems that make complex products reliable, accessible, and easier for teams to change.",
  contactLocation: "Arnhem, Netherlands",
} as const;

export const navigation = [
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const productionFoundations = [
  {
    title: "Component foundations",
    employer: "The Lab",
    description:
      "Technical standards and design-system governance for white-labelled e-commerce platforms, including a shared React and TypeScript component library documented in Storybook.",
    signals: ["Design systems", "Storybook", "React", "TypeScript"],
  },
  {
    title: "Quality built into delivery",
    employer: "The Lab",
    description:
      "Automated browser testing with Playwright and Cypress, WCAG 2.1 AA practices, and GitHub Actions workflows as part of the delivery foundation.",
    signals: ["Playwright", "Cypress", "Accessibility", "CI/CD"],
  },
  {
    title: "Incremental modernisation",
    employer: "Ammega Group",
    description:
      "A staged migration from a legacy jQuery application to React and TypeScript while maintaining the stability of production monitoring dashboards.",
    signals: ["Migration strategy", "React Query", "TypeScript", ".NET APIs"],
  },
  {
    title: "Architecture and technical direction",
    employer: "Kafein Software",
    description:
      "Frontend architecture, reusable component patterns, code review, and mentoring for enterprise React applications.",
    signals: ["Technical leadership", "Code review", "Mentoring", "Redux-Saga"],
  },
] as const;

