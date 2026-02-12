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

// Register Poppins font family for PDF
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
  listItem: {
    marginBottom: 4,
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
  logo: {
    width: 36,
    height: 36,
    marginRight: 10,
    marginBottom: 10,
  },
  skillBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  skillName: {
    width: 80,
    fontSize: 10,
    fontWeight: 500,
  },
  skillBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: '#3a3f47',
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    position: 'relative',
  },
  skillBarFill: {
    height: '100%',
    backgroundColor: '#526d82',
    borderRadius: 4,
  },
  skillYears: {
    fontSize: 9,
    width: 30,
    textAlign: 'right',
  },
  linksSection: {
    marginTop: 40,
    marginBottom: 20,
  },
});

// Years of experience for ATS (2013-Present)
const skills = [
  { name: 'React', years: 12 },
  { name: 'TypeScript', years: 11 },
  { name: 'JavaScript', years: 15 },
  { name: 'Next.js', years: 9 },
  { name: 'React Native', years: 10 },
  { name: 'Node.js', years: 10 },
  { name: 'Python', years: 7 },
  { name: 'PostgreSQL', years: 8 },
];

const maxYears = Math.max(...skills.map(skill => skill.years));

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
        <Text style={styles.paragraph}>Senior Frontend Engineer with 12+ years of React experience (2013–Present), specializing in product-focused technical ownership and scalable system design. Deep expertise in TypeScript, Next.js, and Design System governance, building maintainable applications that deliver measurable user impact and engineering excellence. Lead cross-functional teams to establish architectural standards, drive product velocity through reusable component libraries, and implement automated testing practices. Proven ability to migrate legacy systems to modern React patterns while preserving team productivity. Champion accessibility (WCAG 2.1 AA), performance optimization, and sustainable engineering practices that enable continuous product evolution.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Primary Technology Experience</Text>
        <Text>React (2013–Present) – 12+ years</Text>
        <Text>TypeScript (2014–Present) – 11+ years</Text>
        <Text>Next.js (2016–Present) – 9+ years</Text>
        <Text>JavaScript (2010–Present) – 15+ years</Text>
        <Text>React Native (2015–Present) – 10+ years</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <Text style={styles.label}>Frontend Engineering</Text>
        <Text>React • TypeScript • Next.js • JavaScript ES6+ • React Native</Text>
        <Text>State Management: Redux • Redux Saga • Zustand • React Query • RxJS • Context API</Text>
        <Text>Styling: CSS3 • SCSS/Sass • Tailwind CSS • Styled Components • CSS Modules • Material UI</Text>
        
        <Text style={styles.label}>Testing & Quality Assurance</Text>
        <Text>Jest • React Testing Library • Cypress • Playwright • Vitest • Storybook • Puppeteer</Text>
        <Text>Unit Testing • Integration Testing • E2E Testing • TDD • Code Coverage (90%+)</Text>
        
        <Text style={styles.label}>Performance & Optimization</Text>
        <Text>Lighthouse • Core Web Vitals (LCP, FID, CLS) • SEO Optimization • Lazy Loading • Code Splitting</Text>
        <Text>Server-Side Rendering (SSR) • Static Site Generation (SSG) • Accessibility (WCAG 2.1 AA)</Text>
        
        <Text style={styles.label}>Development Tools & CI/CD</Text>
        <Text>Git • GitHub • GitLab • Docker • Webpack • Vite • ESLint • Prettier • CI/CD Pipelines</Text>
        <Text>Agile/Scrum • Jira • Code Review • Vercel • Netlify</Text>
        
        <Text style={styles.label}>Backend & APIs (Supporting)</Text>
        <Text>Node.js • Express • Python • Django • RESTful APIs • GraphQL • PostgreSQL • MongoDB</Text>
      </View>

      <View style={styles.section}>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.subheading}>Senior Frontend Engineer – The Lab (Creative Technology Agency)</Text>
        <Text style={styles.paragraph}>New York, NY (Remote) | 2023 – Present</Text>
        <Text>• Define and enforce technical standards for white-labeled e-commerce platforms, establishing Design System governance that ensures consistency across engineering teams</Text>
        <Text>• Built shared component library using TypeScript, React, and SCSS modules with Storybook documentation, enabling consistent user experience and accelerating feature development across product teams</Text>
        <Text>• Integrated Python/Django systems with modern React patterns using useMemo, useCallback, and React.memo, optimizing performance while maintaining code sustainability</Text>
        <Text>• Established automated testing practices using Playwright and Cypress with comprehensive code coverage, strengthening product stability and deployment confidence</Text>
        <Text>• Enforced accessibility compliance (WCAG 2.1 AA) and CI/CD best practices with GitHub Actions, delivering sustainable product quality and inclusive user experiences</Text>

        <Text style={styles.subheading}>Senior Frontend Engineer – Ammega Group (Industrial Manufacturing)</Text>
        <Text style={styles.paragraph}>Amsterdam, Netherlands (Remote) | 2023 – 2024</Text>
        <Text>• Directed technical strategy for production monitoring dashboards using React, Next.js, and TypeScript, supporting global manufacturing operations across 200+ facilities</Text>
        <Text>• Led migration of legacy jQuery application to modern React with TypeScript through incremental adoption strategy, maintaining team productivity and product stability throughout transition</Text>
        <Text>• Designed and implemented role-based access control system using React Router and Redux, collaborating with security teams to ensure compliant workflows for industrial operators</Text>
        <Text>• Integrated .NET backend APIs using React Query for real-time data visualization with optimized state management and error handling</Text>
        <Text>• Optimized large-scale data visualization using Ant Design and virtual scrolling techniques, delivering smooth user experience with complex industrial datasets</Text>

        <Text style={styles.subheading}>Frontend Engineer – MDS Translation (Language Services)</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Remote) | 2024</Text>
        <Text>• Architected multilingual marketing platform using Next.js 14, TypeScript, and Static Site Generation, achieving strong performance metrics across 3 European locales</Text>
        <Text>• Implemented internationalization (i18n) strategy with next-intl, designing locale management system to support future market expansion without architectural changes</Text>
        <Text>• Built headless CMS-agnostic architecture enabling flexible content management integration while avoiding vendor lock-in</Text>

        <Text style={styles.subheading}>Senior Frontend Developer – Path Product (2022 – 2023)</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Remote)</Text>
        <Text>• Defined technical direction for high-traffic real-time platform using React, RxJS, and WebSocket connections, supporting complex user interactions and live data synchronization</Text>
        <Text>• Architected Scalable Architecture with optimized state management supporting concurrent users through reactive data streams and efficient React rendering patterns</Text>
        <Text>• Implemented Next.js rendering strategies (SSR, CSR, SSG) to meet performance and SEO objectives while maintaining clean code patterns</Text>
        <Text>• Coordinated across product, backend, and compliance teams to deliver technical solutions meeting regulatory requirements and product velocity targets</Text>

        <Text style={styles.subheading}>Lead Frontend Developer – Kafein Software (2021 – 2022)</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Remote)</Text>
        <Text>• Directed technical decisions and development team for enterprise React applications, establishing standards and component patterns ensuring long-term product sustainability</Text>
        <Text>• Designed modular component patterns using React and Redux-Saga, enabling code reuse across multiple product lines and reducing development cycles</Text>
        <Text>• Built custom form builder and data visualization systems, collaborating with product teams to deliver user-focused solutions with technical sustainability</Text>
        <Text>• Mentored engineering team through code reviews and pair programming, establishing testing practices and patterns that improved code quality and team velocity</Text>

        <Text style={styles.subheading}>Senior Frontend Developer – NTT Data (2019 – 2021)</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Onsite/Remote)</Text>
        <Text>• Built enterprise Single Page Applications using React and React Native integrated with .NET backend systems for finance and insurance products with scalable patterns</Text>
        <Text>• Designed secure authentication system including role-based access control, SSO, and JWT token management, collaborating with security teams to ensure compliance</Text>
        <Text>• Established React Router and Redux patterns for Performance Management System, supporting product evolution and team scalability</Text>
        <Text>• Led incremental modernization of legacy components to modern React standards, maintaining business continuity across international teams</Text>

        <Text style={styles.subheading}>Bulut Software – Frontend Developer (2019)</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Onsite/Remote)</Text>
        <Text>• Developed vendor management interfaces using React and React Native for inventory and supplier workflows, improving operational efficiency by 25%</Text>
        <Text>• Built custom checkout and payment UIs with React, integrating legacy PHP APIs and reducing transaction errors by 30%</Text>

        <Text style={styles.subheading}>Tıkla Kutla – Frontend Developer (2018 – 2019)</Text>
        <Text style={styles.paragraph}>Istanbul, Turkey (Onsite)</Text>
        <Text>• Built dynamic vendor management modules using AngularJS for event booking platform, improving organic reach through SEO optimization</Text>
        <Text>• Developed responsive interfaces across web and mobile, reducing page load times by 35% through performance optimization</Text>

        <Text style={styles.subheading}>Noviente Informatics Systems – Cofounder & Fullstack Developer (2015 – 2018)</Text>
        <Text style={styles.paragraph}>Izmir, Turkey (Onsite)</Text>
        <Text>• Architected vendor management systems using React, React Native, and TypeScript for e-commerce clients, streamlining order and inventory workflows</Text>
        <Text>• Developed custom platforms with React for Instagram campaign management, real estate billing, and invoicing tools across multiple sectors</Text>
        <Text>• Led full product lifecycle from client communication to deployment, integrating React frontends with WooCommerce/WordPress backends</Text>

        <Text style={styles.subheading}>ROS Inc. – Web Developer (2015 – 2017)</Text>
        <Text style={styles.paragraph}>Izmir, Turkey (Onsite)</Text>
        <Text>• Developed responsive website using React and TypeScript, integrating Google Maps and Google Ads to improve lead generation by 50%</Text>

        <Text style={styles.subheading}>Ofism.com – Founder & Fullstack Developer (2013 – 2015)</Text>
        <Text style={styles.paragraph}>Izmir, Turkey (Onsite)</Text>
        <Text>• Founded e-commerce platform using PHP/OpenCart for backend, introducing React for interactive frontend components (product filters, shopping cart, checkout)</Text>
        <Text>• Built custom admin dashboard with early React adoption for inventory management, achieving 1,000+ monthly orders through performance optimization</Text>


        <Text style={styles.subheading}>Doğan Defter – Web Developer (2008 – 2013)</Text>
        <Text style={styles.paragraph}>Izmir, Turkey (Onsite)</Text>
        <Text>• Developed corporate website with HTML, CSS, JavaScript, and custom CMS, improving global visibility by 60% through SEO optimization</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>Bachelor of Science in Software Engineering – Technical University of America (2018-2022)</Text>
        <Text>Master of Arts in Political Science – Istanbul University (2005-2008)</Text>
        <Text>Meta Back-End Developer Professional Certificate (2024)</Text>
      </View>

      <View style={styles.linksSection}>
        <Text style={styles.heading}>Links</Text>
        <Text>
          Portfolio:{' '}
          <Link style={styles.link} src="https://www.yigit-dogan.dev/">yigit-dogan.dev/</Link>
        </Text>
        <Text>
          LinkedIn:{' '}
          <Link style={styles.link} src="https://www.linkedin.com/in/yi%C4%9Fit-do%C4%9Fan-709b2a37">
            linkedin.com/in/yigit-dogan
          </Link>
        </Text>
        <Text>
          GitHub:{' '}
          <Link style={styles.link} src="https://github.com/YioGoi">github.com/yigit-dogan</Link>
        </Text>
        <Text>
          Email:{' '}
          <Link style={styles.link} src="mailto:ydogan.dev@gmail.com">ydogan.dev@gmail.com</Link>
        </Text>
      </View>

      <View>
        <Text>* References available upon request</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
