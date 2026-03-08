/* eslint-disable jsx-a11y/alt-text */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
} from '@react-pdf/renderer';

Font.register({
  family: 'Poppins',
  fonts: [
    { src: '/fonts/Poppins-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/Poppins-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/Poppins-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/Poppins-Bold.ttf', fontWeight: 700 },
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Poppins',
    padding: 40,
    fontSize: 11,
    backgroundColor: '#222831',
    color: '#f1f4f8de',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
    color: '#ffffff',
  },
  subheading: {
    fontSize: 14,
    fontWeight: 600,
    marginTop: 12,
    marginBottom: 5,
    color: '#f1f4f8de',
  },
  paragraph: {
    marginBottom: 8,
  },
  label: {
    fontWeight: 600,
    color: '#ffffff',
  },
  link: {
    color: '#526d82',
    textDecoration: 'none',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    border: '4px solid #526d82',
    marginRight: 15,
  },
  linksSection: {
    marginTop: 40,
    marginBottom: 20,
  },
});

const skills = [
  { name: 'React', years: 12 },
  { name: 'TypeScript', years: 9 },
  { name: 'JavaScript', years: 15 },
  { name: 'Next.js', years: 8 },
  { name: 'React Native', years: 8 },
  { name: 'Node.js', years: 9 },
  { name: 'Python', years: 5 },
  { name: 'PostgreSQL', years: 6 },
];

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.section}>
        <View style={styles.header}>
          <Image src="/images/profile.png" style={styles.profileImage} />
          <View>
            <Text style={styles.heading}>Yiğit Doğan</Text>
            <Text>Email: ydogan.dev@gmail.com</Text>
            <Text>Phone: +90 532 510 1204</Text>
            <Text>Location: Istanbul, Türkiye</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Frontend-leaning Fullstack Engineer with 12+ years of experience building scalable web products using React, Next.js, TypeScript, Node.js, and API-driven architectures. Experienced in designing maintainable frontend systems while contributing across backend integrations, service architecture, and product delivery. Strong background in modern web performance, technical ownership, and modernizing legacy platforms into scalable product ecosystems.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Primary Technology Experience</Text>
        <Text>JavaScript (2010–Present) – 15+ years</Text>
        <Text>React (2013–Present) – 12+ years</Text>
        <Text>TypeScript (2014–Present) – 9+ years</Text>
        <Text>Node.js (2014–Present) – 9+ years</Text>
        <Text>Next.js (2016–Present) – 8+ years</Text>
        <Text>Python (2017–Present) – 5+ years</Text>
        <Text>PostgreSQL (2016–Present) – 6+ years</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>

        <Text style={styles.label}>Frontend Engineering</Text>
        <Text>React • TypeScript • Next.js • JavaScript ES6+ • React Native</Text>
        <Text>State Management: Redux • Redux Saga • Zustand • React Query • RxJS • Context API</Text>
        <Text>Styling: CSS3 • SCSS/Sass • Tailwind CSS • Styled Components • CSS Modules • Material UI</Text>

        <Text style={styles.label}>Backend Engineering & APIs</Text>
        <Text>Node.js • Express • Python • Django • REST APIs • GraphQL • PostgreSQL • MongoDB • Authentication • API Integration • WebSockets • Event-driven systems • API orchestration</Text>

        <Text style={styles.label}>Architecture & Product Engineering</Text>
        <Text>Scalable Web Applications • Component Architecture • API-driven Systems • Technical Ownership • Performance Optimization • Design Systems</Text>

        <Text style={styles.label}>Testing & Quality Assurance</Text>
        <Text>Jest • React Testing Library • Cypress • Playwright • Vitest • Storybook</Text>

        <Text style={styles.label}>Development Tools & CI/CD</Text>
        <Text>Git • GitHub • GitLab • Docker • Webpack • Vite • ESLint • Prettier • CI/CD Pipelines</Text>
        <Text>Agile/Scrum • Jira • Code Review • Vercel • Netlify</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>

        <Text style={styles.subheading}>Senior Software Engineer – The Lab (Creative Technology Agency)</Text>
        <Text style={styles.paragraph}>New York, NY (Remote) | 2023 – Present</Text>
        <Text>• Defined technical standards for white-labeled e-commerce platforms and established reusable component patterns using React, TypeScript, and SCSS modules</Text>
        <Text>• Built shared UI component libraries documented with Storybook, improving development velocity and cross-team consistency</Text>
        <Text>• Integrated Django backend services with modern React architecture, enabling type-safe data flow and scalable frontend patterns</Text>
        <Text>• Implemented automated testing workflows using Playwright and Cypress, strengthening product reliability and CI/CD confidence</Text>

        <Text style={styles.subheading}>Senior Frontend Engineer – Ammega Group</Text>
        <Text style={styles.paragraph}>Amsterdam, Netherlands (Remote) | 2023 – 2024</Text>
        <Text>• Directed architecture of production monitoring dashboards using React, Next.js, and TypeScript for global manufacturing operations</Text>
        <Text>• Led migration of legacy jQuery applications to modern React architecture through incremental refactoring strategy</Text>
        <Text>• Integrated .NET backend APIs using React Query to deliver real-time operational data visualization</Text>
        <Text>• Optimized large-scale data rendering and dashboard performance using virtual scrolling and component memoization techniques</Text>

        <Text style={styles.subheading}>Frontend Engineer – MDS Translation</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Remote) | 2024</Text>
        <Text>• Built multilingual marketing platform using Next.js 14, TypeScript, and static generation strategies</Text>
        <Text>• Implemented scalable internationalization architecture with next-intl supporting multiple European locales</Text>
        <Text>• Designed CMS-agnostic content architecture allowing flexible integration with headless CMS platforms</Text>

        <Text style={styles.subheading}>Senior Frontend Developer – Path Product</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Remote) | 2022 – 2023</Text>
        <Text>• Architected real-time product features using React, RxJS, and WebSocket integrations</Text>
        <Text>• Designed scalable state management strategies enabling responsive UI updates across concurrent users</Text>
        <Text>• Implemented multiple Next.js rendering strategies (SSR, CSR, SSG) to balance SEO, performance, and developer ergonomics</Text>
        <Text>• Collaborated with backend teams to integrate API services and maintain reliable data pipelines</Text>

        <Text style={styles.subheading}>Lead Frontend Developer – Kafein Software</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Remote) | 2021 – 2022</Text>
        <Text>• Led frontend engineering decisions for enterprise React applications used across multiple internal products</Text>
        <Text>• Built modular UI architecture using React and Redux-Saga enabling scalable code reuse across teams</Text>
        <Text>• Mentored frontend developers through code reviews and architectural guidance improving overall code quality</Text>

        <Text style={styles.subheading}>Senior Frontend Developer – NTT Data</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Onsite/Remote) | 2019 – 2021</Text>
        <Text>• Developed enterprise SPA applications using React and React Native integrated with .NET backend systems</Text>
        <Text>• Implemented secure authentication workflows including JWT token handling and role-based access control</Text>
        <Text>• Established scalable routing and state management patterns across large product modules</Text>

        <Text style={styles.subheading}>Frontend Developer – Bulut Software</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey | 2019</Text>
        <Text>• Developed vendor management interfaces using React and React Native for inventory and supplier workflows</Text>
        <Text>• Built checkout and payment UI integrations connected to legacy PHP backend services</Text>

        <Text style={styles.subheading}>Frontend Developer – Tıkla Kutla</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey | 2018 – 2019</Text>
        <Text>• Developed booking and vendor management modules using AngularJS for event marketplace platform</Text>
        <Text>• Optimized responsive UI performance improving mobile load times and SEO visibility</Text>

        <Text style={styles.subheading}>Cofounder & Fullstack Developer – Noviente Informatics Systems</Text>
        <Text style={styles.paragraph}>Izmir, Turkey | 2015 – 2018</Text>
        <Text>• Built full-stack platforms using React, React Native, Node.js and API-driven services</Text>
        <Text>• Developed admin dashboards and custom workflows for e-commerce and marketing automation tools</Text>
        <Text>• Led product development lifecycle from client requirements to deployment</Text>

        <Text style={styles.subheading}>Web Developer – ROS Inc.</Text>
        <Text style={styles.paragraph}>Izmir, Turkey | 2015 – 2017</Text>
        <Text>• Developed responsive websites using React and TypeScript integrated with Google Maps and advertising APIs</Text>
        <Text>• Improved lead generation through SEO optimization and frontend performance improvements</Text>

        <Text style={styles.subheading}>Founder & Fullstack Developer – Ofism.com</Text>
        <Text style={styles.paragraph}>Izmir, Turkey | 2013 – 2015</Text>
        <Text>• Founded and developed e-commerce platform integrating OpenCart backend with custom React frontend components</Text>
        <Text>• Built admin dashboards and checkout workflows improving inventory and order management</Text>
        <Text>• Achieved 1000+ monthly orders through performance optimization and improved UX flows</Text>

        <Text style={styles.subheading}>Web Developer – Doğan Defter</Text>
        <Text style={styles.paragraph}>Izmir, Turkey | 2008 – 2013</Text>
        <Text>• Developed corporate website and custom CMS using HTML, CSS, and JavaScript</Text>
        <Text>• Improved global visibility through SEO optimization and structured content architecture</Text>

      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>Bachelor of Science in Software Engineering – Technical University of America</Text>
        <Text>Master of Arts in Political Science – Istanbul University</Text>
        <Text>Meta Back-End Developer Professional Certificate – Meta (2024)</Text>
      </View>

      <View style={styles.linksSection}>
        <Text style={styles.heading}>Links</Text>

        <Text>
          Portfolio: <Link style={styles.link} src="https://www.yigit-dogan.dev/">https://yigit-dogan.dev</Link>
        </Text>

        <Text>
          LinkedIn: <Link style={styles.link} src="https://www.linkedin.com/in/yigit-dogan-709b2a37">linkedin.com/in/yigit-dogan-709b2a37</Link>
        </Text>

        <Text>
          GitHub: <Link style={styles.link} src="https://github.com/YioGoi">github.com/YioGoi</Link>
        </Text>

        <Text>
          Email: <Link style={styles.link} src="mailto:ydogan.dev@gmail.com">ydogan.dev@gmail.com</Link>
        </Text>

      </View>

      <View>
        <Text>* References available upon request</Text>
      </View>

    </Page>
  </Document>
);

export default ResumePDF;