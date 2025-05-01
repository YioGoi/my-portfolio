/* eslint-disable jsx-a11y/alt-text */
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';

// Optional: Register Rubik if custom
Font.register({
  family: 'Rubik',
  fonts: [
    { src: '/fonts/Rubik-Regular.ttf', fontWeight: 'normal' },
    { src: '/fonts/Rubik-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/Rubik-Bold.ttf', fontWeight: 700 },
  ]
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Rubik',
    padding: 40,
    fontSize: 11,
    backgroundColor: '#161616',
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
    marginBottom: 2,
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
    color: '#60a5fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 10,
    marginBottom: 10,
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.section}>
        <View style={styles.header}>
          <Image src="/images/logo-white.png" style={styles.logo}/>
          <Text style={styles.heading}>Yiğit Doğan</Text>
        </View>
        <Text>Email: ydogan.dev@gmail.com</Text>
        <Text>Phone: +90 532 510 1204</Text>
        <Text>Location: Istanbul, Türkiye</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>About</Text>
        <Text style={styles.paragraph}>My journey into software development began with a deep curiosity about how websites and applications function. This fascination led me to immerse myself in coding, where I found joy in bringing ideas to life through code.</Text>
        <Text style={styles.paragraph}>Over the years, I&apos;ve honed my skills in JavaScript, React, and Next.js, building scalable and high-performance web applications. My passion for creating intuitive user experiences has driven me to explore the depths of frontend development, ensuring that each project not only functions seamlessly but also delights users.</Text>
        <Text style={styles.paragraph}>Currently, I am part of the talented team at The Lab in New York, where I contribute to expanding full-stack capabilities using React, Python, and Django within a complex multi-site ecosystem. My role involves leading frontend performance optimization efforts and conducting thorough code reviews to maintain high-quality standards.</Text>
        <Text style={styles.paragraph}>Beyond my professional endeavors, I continuously seek opportunities to learn and grow, staying updated with the latest technologies and best practices in the ever-evolving world of web development.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.subheading}>The Lab – Fullstack Senior Software Developer (2023 – Present)</Text>
        <Text>React, Python, Django — Led frontend across 10+ websites, with a focus on scalability and quality.</Text>

        <Text style={styles.subheading}>Ammega Group – Senior Frontend Developer (2023 – 2024)</Text>
        <Text>React, Next.js, .NET — Built interfaces for manufacturing and production systems.</Text>

        <Text style={styles.subheading}>MDS Translation – Fullstack Developer (2024)</Text>
        <Text>Next.js, TypeScript, i18n — Delivered SEO-optimized multilingual site for a translation business.</Text>

        <Text style={styles.subheading}>Path Product – Senior Frontend Developer (2022 – 2023)</Text>
        <Text>React, RxJS, SignalR — Implemented real-time features with robust observable patterns.</Text>

        <Text style={styles.subheading}>Kafein Software (2021 – 2022)</Text>
        <Text>React, Redux-Saga — Architected reusable UI components and async flows.</Text>

        <Text style={styles.subheading}>NTT Data (2019 – 2021)</Text>
        <Text>React, .NET — Built SPA features and secure auth layers.</Text>

        <Text style={styles.subheading}>Earlier roles:</Text>
        <Text>- Bulut Software (2019): React + JWT</Text>
        <Text>- Tıkla Kutla (2018 – 2019): AngularJS + SEO</Text>
        <Text>- Creafity (2015 – 2018): React + WooCommerce</Text>
        <Text>- ROS Inc. (2015 – 2017): HTML/CSS/JS</Text>
        <Text>- Ofism.com (2013 – 2015): PHP + OpenCart</Text>
        <Text>- Doğan Defter (2008 – 2013): CMS</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text>- React, React Native, Next, Redux, Redux Saga, RxJS</Text>
        <Text>- Typescript, Javascript, ES6</Text>
        <Text>- CSS, SASS, Tailwind, Module Scss</Text>
        <Text>- Webpack, Jest, Storybook, Puppeteer, Playwright, Eslint, Prettier</Text>
        <Text>- Python, Django, Node.js, Express.js, MySQL, MongoDB, REST, GraphQL, JWT, SSO, SignalR, SEO Optimization</Text>
        <Text>- GitHub, GitLab, Bitbucket</Text>
        <Text>- UI/UX Design, Responsive/Adaptive Design, Adobe XD, Figma, Sketch</Text>
        <Text>- Agile, Scrum, Jira, Kanban, Planio</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>- Technical University of America (2018 - 2022) – Bachelor’s in Software Engineering</Text>
        <Text>- Istanbul University (2005 - 2008) – Master’s in Political Science</Text>
        <Text>- Istanbul University (2000 - 2005) – Bachelor’s in Political Science</Text>
        <Text>- BEMAR Career School (2013) – Web Design and Programming Certification</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
