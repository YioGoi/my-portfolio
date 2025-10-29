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

// Calculate years of experience (starting from 2015 for React, etc.)
const currentYear = 2025;
const skills = [
  { name: 'JavaScript', years: currentYear - 2010, startYear: 2010 },
  { name: 'React', years: currentYear - 2013, startYear: 2013 },
  { name: 'TypeScript', years: currentYear - 2014, startYear: 2014 },
  { name: 'React Native', years: currentYear - 2015, startYear: 2015 },
  { name: 'Node.js', years: currentYear - 2015, startYear: 2015 },
  { name: 'Next.js', years: currentYear - 2016, startYear: 2016 },
  { name: 'Python', years: currentYear - 2018, startYear: 2018 },
  { name: 'Django', years: currentYear - 2018, startYear: 2018 },
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
        <Text style={styles.heading}>About</Text>
        <Text style={styles.paragraph}>My journey into software development began with a deep curiosity about how websites and applications function. This fascination led me to immerse myself in coding, where I found joy in bringing ideas to life through code.</Text>
        <Text style={styles.paragraph}>Experienced Senior Software Developer with expertise in JavaScript, React, and Next.js, specializing in building scalable and high-performance web applications.</Text>
        <Text style={styles.paragraph}>Currently leading frontend performance optimization at The Lab, contributing to full-stack capabilities using React, Python, and Django.</Text>
        <Text style={styles.paragraph}>Proven track record in developing reusable components and design systems, enhancing development efficiency by 40%.</Text>
        <Text style={[styles.paragraph, { marginBottom: 0 }]}>Eager to leverage skills in React development to create intuitive user experiences and drive project success.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Core Technologies</Text>
        {skills.map((skill, index) => (
          <View key={index} style={styles.skillBar}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <View style={styles.skillBarContainer}>
              <View
                style={[
                  styles.skillBarFill,
                  { width: `${(skill.years / maxYears) * 100}%` }
                ]}
              />
            </View>
            <Text style={styles.skillYears}>{skill.years}y</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text>- Javascript, Typescript, ES6</Text>
        <Text>- React, React Native, Next, Redux, Redux Saga, RxJS, Zustand, React Query, React Hook Form, Formik, React Navigation, Framer Motion</Text>
        <Text>- CSS, Sass/SCSS, Tailwind, Module Scss, Styled Components, Material UI, Bootstrap, Ant Design</Text>
        <Text>- Webpack, Vite, Babel</Text>
        <Text>- Jest, Storybook, Puppeteer, Playwright, Vitest, React Testing Library, Cypress</Text>
        <Text>- ESLint, Prettier</Text>
        <Text>- SEO Optimization, Lighthouse, Web Vitals, Next.js Image Optimization, Lazy Loading</Text>
        <Text>- Python, Django, Wagtail, Node.js, Express.js, RESTful API, MySQL, MongoDB, REST, GraphQL, PostgreSQL, Firebase, JWT, OAuth2, Auth0, NextAuth.js, SSO, SignalR, PHP, .NET, .NET Core, C#</Text>
        <Text>- GitHub, GitLab, Bitbucket, Vercel, Netlify, Docker</Text>
        <Text>- UI/UX Design, Responsive/Adaptive Design, Adobe XD, Figma, Sketch</Text>
        <Text>- Claude Sonnet 4, OpenAI API, ChatGPT 4.1, Github Copilot, Cursor, Langchain, LangGraph, CrewAI, Agentic Frameworks</Text>
        <Text>- Web3, Blockchain, Smart Contracts, Solidity, ethers.js, hardhat, polygon, ipfs</Text>
        <Text>- Agile, Scrum, Jira, Kanban, Planio</Text>
      </View>

      <View style={styles.section}>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.subheading}>The Lab – Fullstack Senior Software Developer (2023 – Present)</Text>
        <Text style={styles.paragraph}>The Lab is a New York-based creative technology agency delivering digital experiences for major retail and consumer brands.</Text>
        <Text>• Led frontend architecture across 10+ white-labeled retail websites, ensuring performance, accessibility, and consistency.</Text>
        <Text>• Implement SSR components with the power of Python, reactivated and React, retrieve data from html literals directly and reduce rendering times by 35%.</Text>
        <Text>• Created Server Side utilities and React&apos;s hooks like memo, useMemo, useCallback, useLayoutEffect etc. to optimize performance and reduce client-side rendering.</Text>
        <Text>• Developed reusable components and our own component library and design systems with React and SCSS modules, cutting development time by 40%.</Text>
        <Text>• Integrated backend AWS APIs using Django and DRF, enabling dynamic pricing, multi-language, and inventory syncing.</Text>
        <Text>• Collaborated with designers and PMs to launch responsive, SEO-optimized, and WCAG-compliant accessible interfaces across desktop and mobile.</Text>
        <Text>• Implemented CI/CD workflows and testing pipelines with Playwright and Puppeteer to improve code quality and reduce regression bugs by 30%.</Text>
        <Text>• Built up and operated all projects database and client-side with Docker.</Text>
        <Text>New York - Remote</Text>

        <Text style={styles.subheading}>Ammega Group (Contractor) – Lead Senior Frontend Developer (2023 – 2024)</Text>
        <Text style={styles.paragraph}>Ammega Group is a global leader in industrial manufacturing, specializing in conveyor belts and power transmission systems across multiple sectors.</Text>
        <Text>• Built internal dashboards and production interfaces using React and Next.js, improving operational visibility across factories.</Text>
        <Text>• Collaborated with .NET backend team to integrate complex APIs for real-time data visualization and machine telemetry.</Text>
        <Text>• Developed role-based access systems and component-level authorization for secure industrial workflows, implemented with React Router and Redux.</Text>
        <Text>• Refactored legacy frontends into modular, maintainable codebases, resolved bugs that were increasing rendering times in initial rendering process and reduced future dev effort by 35%.</Text>
        <Text>• Worked directly with engineers and operations leads to map UI features to real-world production processes, including charts and data visualizations, graphics rendering with Ant Design UI Package.</Text>
        <Text>Amsterdam - Remote</Text>

        <Text style={styles.subheading}>MDS Translation (Contractor) – Lead Fullstack Developer (2024)</Text>
        <Text style={styles.paragraph}>MDS Translation is a boutique language services provider focused on delivering professional translations across Europe.</Text>
        <Text>• Designed and developed a multilingual marketing site using React-Native, TypeScript, and React Navigation routing.</Text>
        <Text>• Achieved high SEO scores (90+ Lighthouse, indexed in 3 languages) without dedicated SEO work, thanks to server-rendered, semantically structured pages.</Text>
        <Text>• Implemented dynamic routing with locale-based content, improving UX and engagement across target markets.</Text>
        <Text>• Created snap-scroll and animation transition effects with Sass in Home Page for visually engaging experiences.</Text>
        <Text>• Used Next.js Image Optimization and static generation to ensure fast load times across all geographies.</Text>
        <Text>• Built CMS-agnostic content structure for future integration with a headless backend.</Text>
        <Text>İstanbul - Remote</Text>

        <Text style={styles.subheading}>Path Product – Senior Frontend Developer (2022 – 2023)</Text>
        <Text style={styles.paragraph}>Path is an Istanbul-based technology company delivering high-performance, real-time software solutions for finance, betting, and e-commerce sectors.</Text>
        <Text>• Contributed to <Text style={{ fontWeight: 'bold' }}>Tuttur.com</Text>, one of Turkey’s largest online sports betting platforms, building real-time betting interfaces and user flows.</Text>
        <Text>• Developed dynamic UI components for live match data, odds tracking, and bet slip management using React, RxJS, and Socket Connection.</Text>
        <Text>• Engineered reactive data streams to support thousands of simultaneous users with minimal latency and consistent state.</Text>
        <Text>• Optimized frontend performance with React rendering strategies under high traffic (~100k+ concurrent users), reducing interaction lag and memory usage.</Text>
        <Text>• Structured Next.js application and used SSR, CSR and SSG with getServerSideProps and getStaticProps to ensure optimal performance and SEO.</Text>
        <Text>• Collaborated with cross-functional teams to ensure compliance with industry regulations and transactional accuracy.</Text>
        <Text>İstanbul - Remote</Text>

        <Text style={styles.subheading}>Kafein Software - Lead Senior Frontend Developer (2021 – 2022)</Text>
        <Text style={styles.paragraph}>Kafein is a Turkish software and consultancy company providing enterprise-level solutions in telecom, finance, and IT security domains.</Text>
        <Text>• Led the frontend development team in building scalable web applications. Determined the structure of the frontend architecture.</Text>
        <Text>• Built modular and scalable UI components using React and Redux-Saga for enterprise applications.</Text>
        <Text>• Developed async workflows and complex state management logic to handle nested user interactions.</Text>
        <Text>• Created custom form builders and data visualization components tailored to enterprise reporting needs.</Text>
        <Text>• Contributed to frontend architecture decisions to support long-term maintainability across teams.</Text>
        <Text>• Participated in code reviews and mentored junior developers on best practices for clean, testable code.</Text>
        <Text>İstanbul - Remote</Text>

        <Text style={styles.subheading}>NTT Data - Senior Frontend Developer (2019 – 2021)</Text>
        <Text style={styles.paragraph}>NTT Data is a global IT services provider delivering enterprise solutions in sectors such as finance, insurance, and telecommunications.</Text>
        <Text>• Developed Single Page Applications (SPA) using React and React-Native and integrated them with .NET-based backend systems.</Text>
        <Text>• Built secure authentication flows including role-based access, SSO, and JWT token management.</Text>
        <Text>• Collaborated with backend teams to design RESTful API contracts for frontend integration.</Text>
        <Text>• Implemented React Router and Redux State Management for seamless navigation and state handling in order to create Performance Management System for the leader company of Türkiye</Text>
        <Text>• Maintained and refactored legacy components to align with modern frontend standards and accessibility guidelines.</Text>
        <Text>• Participated in agile ceremonies and collaborated with international teams in a distributed environment.</Text>
        <Text>İstanbul - Onsite / Remote</Text>

        <Text style={styles.subheading}>Bulut Software – Frontend Developer (2019)</Text>
        <Text style={styles.paragraph}>Bulut Software is a Turkish tech company building vendor systems and online payment platforms for SMEs.</Text>
        <Text>• Developed vendor management interfaces using React and React-Native, tailored for inventory and supplier workflows, which improved operational efficiency and user satisfaction.</Text>
        <Text>• Integrated frontend with legacy PHP APIs, working with tools like Postman to test and debug data exchanges, resulting in smoother data flow and reduced system downtime.</Text>
        <Text>• Built custom checkout and payment UIs to support seamless online transactions and order submissions, enhancing user experience and increasing transaction success rates.</Text>
        <Text>• Refactored input flows to reduce user errors and improve data accuracy in critical payment and order forms, leading to fewer transaction errors and improved customer satisfaction.</Text>
        <Text>İstanbul - Onsite / Remote</Text>

        <Text style={styles.subheading}>Tıkla Kutla – Frontend Developer (2018 – 2019)</Text>
        <Text style={styles.paragraph}>Tıkla Kutla was a startup serving the event and entertainment industry, providing vendor management tools for organizing campaigns, parties, and experiences.</Text>
        <Text>• Built dynamic frontend modules using AngularJS for managing vendors, bookings, and event listings.</Text>
        <Text>• Enhanced SEO-friendly markup and routing, leading to improved organic reach and better indexability in Google Search.</Text>
        <Text>• Developed responsive interfaces for vendors and end-users, improving user experience across web and mobile platforms.</Text>
        <Text>• Collaborated with backend developers to enhance page speed and optimize crawlable content, resulting in faster load times and improved search engine rankings.</Text>
        <Text>İstanbul - Onsite</Text>

        <Text style={styles.subheading}>Noviente Informatics Systems – Cofounder & Fullstack Developer (2015 – 2018)</Text>
        <Text style={styles.paragraph}>Noviente is a boutique tech company I co-founded, delivering tailored software solutions across sectors including accounting, social media management, real estate, and e-commerce.</Text>
        <Text>• Built vendor systems with React, React-Native and TypeScript for creative brands like Creafity, enabling streamlined order, inventory, and delivery workflows.</Text>
        <Text>• Developed custom platforms for Instagram campaign management, apartment billing systems, and small business invoicing tools.</Text>
        <Text>• Used React for frontend components and WooCommerce/WordPress for e-commerce integrations.</Text>
        <Text>• Led product design and client communication from concept to deployment across multiple verticals.</Text>
        <Text>• Oversaw infrastructure setup and deployment for scalable, client-ready applications.</Text>
        <Text>İzmir - Onsite</Text>

        <Text style={styles.subheading}>ROS Inc. – Web Developer (2015 – 2017)</Text>
        <Text style={styles.paragraph}>ROS Inc. is a construction company for which I built a complete digital presence from scratch, including a modern website and marketing integrations.</Text>
        <Text>• Designed and developed the company website using React, React-Native and TypeScript, optimized for mobile and desktop.</Text>
        <Text>• Integrated Google Maps for location visibility and Google Ads for targeted traffic acquisition.</Text>
        <Text>• Improved the company’s online discoverability and credibility through SEO best practices and Google Business setup.</Text>
        <Text>• Enabled measurable growth in web traffic and lead generation through analytics-driven iteration.</Text>
        <Text>İzmir - Onsite</Text>

        <Text style={styles.subheading}>Ofism.com – Founder & Fullstack Developer (2013 – 2015)</Text>
        <Text style={styles.paragraph}>Ofism.com was an online stationery e-commerce platform I independently designed and developed from the ground up.</Text>
        <Text>• Built the entire system using PHP and OpenCart, including custom theming, cart logic, and payment integration, resulting in a fully functional e-commerce platform.</Text>
        <Text>• Designed the UI/UX, product categorization, and checkout flows to provide a smooth shopping experience, enhancing user satisfaction and engagement.</Text>
        <Text>• Handled backend features such as inventory management, shipping rules, and order tracking, ensuring efficient operations and accurate order processing.</Text>
        <Text>• Managed hosting, database configuration, and ongoing site maintenance independently, ensuring high availability and performance of the platform.</Text>
        <Text>• Gained hands-on experience in running a tech-driven product, from development to customer support, improving my ability to manage end-to-end processes effectively.</Text>
        <Text>İzmir - Onsite</Text>


        <Text style={styles.subheading}>Doğan Defter – Web Developer (2008 – 2013)</Text>
        <Text style={styles.paragraph}>Doğan Defter is a Turkish manufacturer and exporter of notebooks and stationery products, serving both local and international markets.</Text>
        <Text>• Designed and developed the company’s official website to showcase products and support global outreach with HTML, CSS and Javascript.</Text>
        <Text>• Built a custom CMS to allow the internal team to manage product catalogs, announcements, and inquiries with ease.</Text>
        <Text>• Structured the site with multilingual support and SEO-friendly markup to attract international buyers.</Text>
        <Text>• Contributed to increasing the brand’s global visibility and inbound requests through improved digital presence.</Text>
        <Text>İzmir - Onsite</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>- Meta Back-End Developer Professional Certificate (2024) – Taught by Meta Staff</Text>
        <Text>- Node.js, Express, MongoDB & More: The Complete Bootcamp (2023) – Jonas Schmedtmann</Text>
        <Text>- Technical University of America (2018 - 2022) – Bachelor’s in Software Engineering</Text>
        <Text>- Next.js 15 & React - The Complete Guide (2018) – Udemy - Maximilian Schwarzmüller</Text>
        <Text>- React - The Complete Guide (2017) – Udemy - Maximilian Schwarzmüller</Text>
        <Text>- JavaScript - The Complete Guide (2015) – Udemy - Maximilian Schwarzmüller</Text>
        <Text>- BEMAR Career School (2012 - 2013) – Web Design and Programming Certification</Text>
        <Text>- Istanbul University (2005 - 2008) – Master’s in Political Science</Text>
        <Text>- Istanbul University (2000 - 2005) – Bachelor’s in Political Science</Text>
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
