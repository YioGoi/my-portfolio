import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';

Font.register({
  family: 'Poppins',
  fonts: [
    { src: '/fonts/Poppins-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/Poppins-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/Poppins-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/Poppins-Bold.ttf', fontWeight: 700 },
  ],
});

// Prevent react-pdf from inserting hyphens into words at line breaks.
// This keeps extracted PDF text cleaner for ATS parsers.
Font.registerHyphenationCallback((word: string) => [word]);

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Poppins',
    paddingTop: 30,
    paddingRight: 34,
    paddingBottom: 30,
    paddingLeft: 34,
    fontSize: 8.8,
    lineHeight: 1.34,
    backgroundColor: '#ffffff',
    color: '#26313d',
  },
  header: {
    marginBottom: 11,
    paddingBottom: 9,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 1.1,
    color: '#111827',
    marginBottom: 3,
  },
  title: {
    fontSize: 11.8,
    fontWeight: 600,
    color: '#25364a',
    marginBottom: 6,
  },
  locationLine: {
    fontSize: 8.8,
    fontWeight: 500,
    color: '#374151',
    marginBottom: 2,
  },
  contactLine: {
    fontSize: 8.3,
    color: '#4b5563',
  },
  link: {
    color: '#075985',
    textDecoration: 'none',
  },
  section: {
    marginBottom: 10,
  },
  sectionHeading: {
    fontSize: 10.8,
    fontWeight: 700,
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 0.35,
    paddingBottom: 3,
    marginBottom: 6,
    borderBottomWidth: 0.7,
    borderBottomColor: '#dbe3ea',
  },
  summary: {
    fontSize: 8.9,
    lineHeight: 1.38,
  },
  skillGroup: {
    marginBottom: 3,
  },
  skillLabel: {
    fontWeight: 600,
    color: '#111827',
  },
  skillText: {
    fontSize: 8.45,
    lineHeight: 1.32,
  },
  experienceItem: {
    marginBottom: 7,
  },
  compactExperienceItem: {
    marginBottom: 5,
  },
  roleLine: {
    fontSize: 9.45,
    fontWeight: 600,
    color: '#111827',
    lineHeight: 1.25,
  },
  compactRoleLine: {
    fontSize: 9.05,
  },
  experienceMeta: {
    fontSize: 8.05,
    color: '#5b6775',
    marginTop: 1,
    marginBottom: 2.5,
  },
  bullet: {
    fontSize: 8.55,
    lineHeight: 1.34,
    marginBottom: 1.6,
    paddingLeft: 7,
  },
  compactDescription: {
    fontSize: 8.35,
    lineHeight: 1.32,
    marginTop: 1.5,
  },
  educationItem: {
    fontSize: 8.65,
    marginBottom: 2.5,
  },
  educationDegree: {
    fontWeight: 600,
    color: '#111827',
  },
});

interface ExperienceEntryProps {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

interface EarlierExperienceEntryProps {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

const ExperienceEntry = ({
  role,
  company,
  location,
  period,
  bullets,
}: ExperienceEntryProps) => (
  <View style={styles.experienceItem} wrap={false}>
    <Text style={styles.roleLine}>
      {role} — {company}
    </Text>
    <Text style={styles.experienceMeta}>
      {location} | {period}
    </Text>
    {bullets.map((bullet) => (
      <Text key={bullet} style={styles.bullet}>
        • {bullet}
      </Text>
    ))}
  </View>
);

const EarlierExperienceEntry = ({
  role,
  company,
  location,
  period,
  description,
}: EarlierExperienceEntryProps) => (
  <View
    style={[styles.experienceItem, styles.compactExperienceItem]}
    wrap={false}
  >
    <Text style={[styles.roleLine, styles.compactRoleLine]}>
      {role} — {company}
    </Text>
    <Text style={styles.experienceMeta}>
      {location} | {period}
    </Text>
    <Text style={styles.compactDescription}>{description}</Text>
  </View>
);

const ResumePDF = () => (
  <Document
    title="Yiğit Doğan - Senior Frontend Engineer"
    author="Yiğit Doğan"
    subject="Senior Frontend Engineer Resume"
    keywords="Senior Frontend Engineer, React, TypeScript, Next.js, Arnhem, Netherlands, EMEA Remote"
    language="en"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Yiğit Doğan</Text>
        <Text style={styles.title}>
          Senior Frontend Engineer | React, TypeScript, Next.js
        </Text>
        <Text style={styles.locationLine}>
          Technical Leadership · Mentoring · Product Ownership
        </Text>
        <Text style={styles.locationLine}>
          Arnhem, Netherlands | Open to Remote & Hybrid Roles
        </Text>
        <Text style={styles.contactLine}>
          Email:{' '}
          <Link style={styles.link} src="mailto:ydogan.dev@gmail.com">
            ydogan.dev@gmail.com
          </Link>
          {' | '}Phone:{' '}
          <Link style={styles.link} src="tel:+905325101204">
            +90 532 510 1204
          </Link>
          {' | '}Portfolio:{' '}
          <Link style={styles.link} src="https://www.yigit-dogan.dev/">
            yigit-dogan.dev
          </Link>
        </Text>
        <Text style={styles.contactLine}>
          LinkedIn:{' '}
          <Link
            style={styles.link}
            src="https://www.linkedin.com/in/yigit-dogan-709b2a37"
          >
            linkedin.com/in/yigit-dogan-709b2a37
          </Link>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Summary</Text>
        <Text style={styles.summary}>
          Senior Frontend Engineer with 12+ years of experience building web
          products with React, TypeScript and Next.js. Experience includes
          frontend leadership at Kafein and NTT Data, developer mentoring, and
          founding Noviente and Ofism.com. Combines hands-on engineering with
          architectural decisions, product delivery, and teaching React and
          functional programming.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.skillText}>
          <Text style={styles.skillLabel}>Teaching & Mentoring: </Text>
          Delivered regular presentations and training sessions on React and
          functional programming to different teams.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Core Technical Skills</Text>

        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Frontend: </Text>
            React, TypeScript, Next.js, JavaScript ES6+, React Native, HTML,
            CSS3, SCSS/Sass, CSS Modules, Tailwind CSS, Styled Components,
            Material UI
          </Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Architecture & State: </Text>
            Frontend Architecture, Component Architecture, Design Systems, SSR,
            SSG, CSR, Redux, Redux-Saga, Zustand, React Query, RxJS, Context API
          </Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Performance & Quality: </Text>
            Performance Optimization, Accessibility, Jest, React Testing
            Library, Vitest, Playwright, Cypress, Storybook
          </Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>
              API Integration & Server-side Familiarity:{' '}
            </Text>
            REST APIs, GraphQL, WebSockets, Authentication, Third-party API
            Integration, Node.js, Express, Python, Django, PostgreSQL, MongoDB
          </Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>Tooling & Delivery: </Text>
            Git, GitHub, GitLab, Docker, Vite, Webpack, ESLint, Prettier, CI/CD,
            Vercel, Netlify, Jira, Agile/Scrum, Code Review
          </Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillText}>
            <Text style={styles.skillLabel}>AI-assisted Workflow: </Text>
            Claude Code, OpenAI Codex, Cursor, GitHub Copilot
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Experience</Text>

        <ExperienceEntry
          role="Senior Software Engineer"
          company="The Lab (Creative Technology Agency)"
          location="New York, NY, USA (Remote)"
          period="2023 - Present"
          bullets={[
            'Define frontend standards and reusable component patterns for white-label e-commerce platforms using React, TypeScript, and SCSS Modules.',
            'Build and maintain shared UI components documented in Storybook, improving consistency across brands and delivery teams.',
            'Integrate Django services with React applications through clear, type-safe API boundaries and scalable data-flow patterns.',
            'Implement automated testing workflows with Playwright and Cypress to strengthen product reliability and CI/CD confidence.',
          ]}
        />

        <ExperienceEntry
          role="Senior Frontend Engineer"
          company="Ammega Group"
          location="Amsterdam, Netherlands (Remote)"
          period="2023 - 2024"
          bullets={[
            'Designed frontend architecture for production-monitoring dashboards used across global manufacturing operations with React, Next.js, and TypeScript.',
            'Modernized legacy jQuery applications through an incremental migration to reusable React components.',
            'Integrated .NET backend APIs with React Query to deliver real-time operational data visualization.',
            'Improved performance for large data sets through virtualized rendering, memoization, and targeted component updates.',
          ]}
        />

        <ExperienceEntry
          role="Frontend Engineer"
          company="MDS Translation"
          location="Istanbul, Türkiye (Remote)"
          period="2024"
          bullets={[
            'Built a multilingual marketing platform with Next.js 14, TypeScript, and static generation.',
            'Created a scalable next-intl localization architecture and CMS-agnostic content model for multiple European locales.',
          ]}
        />

      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Professional Experience — Continued
        </Text>

        <ExperienceEntry
          role="Senior Frontend / Product Engineer"
          company="Path Product"
          location="Istanbul, Türkiye (Remote)"
          period="2022 - 2023"
          bullets={[
            'Architected real-time product features with React, RxJS, and WebSocket integrations.',
            'Designed state-management patterns for responsive UI updates across concurrent users.',
            'Applied SSR, SSG, and CSR strategically to balance SEO, runtime performance, and developer experience.',
            'Collaborated with backend engineers on API contracts and reliable data flows.',
          ]}
        />

        <ExperienceEntry
          role="Lead Frontend Developer"
          company="Kafein Software"
          location="Istanbul, Türkiye (Remote)"
          period="2021 - 2022"
          bullets={[
            'Led frontend technical decisions and defined reusable architecture for enterprise React applications across multiple internal products.',
            'Mentored frontend developers through code reviews, pair programming and architectural guidance.',
            'Built modular UI architecture with React and Redux-Saga to support scalable reuse across teams.',
          ]}
        />

        <ExperienceEntry
          role="Senior Frontend Developer"
          company="NTT Data"
          location="Istanbul, Türkiye (Onsite / Remote)"
          period="2019 - 2021"
          bullets={[
            'Served as frontend lead for enterprise React applications integrated with .NET services, guiding frontend technical decisions and establishing shared routing and state-management patterns.',
            'Developed mobile interfaces with React Native integrated with .NET services.',
            'Implemented JWT-based authentication and role-based access control for secure product workflows.',
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Product & Entrepreneurship</Text>

        <ExperienceEntry
          role="Co-founder & Full-stack Developer"
          company="Noviente Informatics Systems"
          location="Izmir, Türkiye"
          period="2015 - 2018"
          bullets={[
            'Co-founded the company and delivered client products from concept to deployment, combining product design, client communication and hands-on development.',
            'Built React and React Native interfaces, Node.js services, admin dashboards and e-commerce automation workflows.',
          ]}
        />

        <ExperienceEntry
          role="Founder & Full-stack Developer"
          company="Ofism.com"
          location="Izmir, Türkiye"
          period="2013 - 2015"
          bullets={[
            'Founded and built an e-commerce platform, taking responsibility for development and product delivery.',
            'Developed the platform with OpenCart and custom frontend components, supporting growth to 1,000+ monthly orders.',
          ]}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Earlier Experience</Text>

        <EarlierExperienceEntry
          role="Frontend Developer"
          company="Bulut Software"
          location="Istanbul, Türkiye"
          period="2019"
          description="Built React and React Native interfaces for vendor, inventory, checkout, and payment workflows connected to legacy PHP services."
        />

        <EarlierExperienceEntry
          role="Frontend Developer"
          company="Tıkla Kutla"
          location="Istanbul, Türkiye"
          period="2018 - 2019"
          description="Developed AngularJS booking and vendor-management modules and optimized responsive performance and SEO for an event marketplace."
        />

        <EarlierExperienceEntry
          role="Web Developer"
          company="ROS Inc."
          location="Izmir, Türkiye"
          period="2015 - 2017"
          description="Built responsive React and TypeScript websites with Google Maps and advertising API integrations, focusing on SEO and lead generation."
        />

        <EarlierExperienceEntry
          role="Web Developer"
          company="Doğan Defter"
          location="Izmir, Türkiye"
          period="2008 - 2013"
          description="Developed a corporate website and custom CMS with HTML, CSS, and JavaScript and improved international visibility through SEO and structured content."
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Education & Professional Development
        </Text>
        <Text style={styles.educationItem}>
          <Text style={styles.educationDegree}>
            B.Sc. in Software Engineering
          </Text>
          {' — '}Technical University of America
        </Text>
        <Text style={styles.educationItem}>
          <Text style={styles.educationDegree}>M.A. in Political Science</Text>
          {' — '}Istanbul University
        </Text>
        <Text style={styles.educationItem}>
          <Text style={styles.educationDegree}>
            Meta Back-End Developer Professional Certificate
          </Text>
          {' — '}Meta, 2024
        </Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;