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
});

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
        <Text style={styles.paragraph}>Over the years, I&apos;ve honed my skills in JavaScript, React, and Next.js, building scalable and high-performance web applications. My passion for creating intuitive user experiences has driven me to explore the depths of frontend development, ensuring that each project not only functions seamlessly but also delights users.</Text>
        <Text style={styles.paragraph}>Currently, I am part of the talented team at The Lab in New York, where I contribute to expanding full-stack capabilities using React, Python, and Django within a complex multi-site ecosystem. My role involves leading frontend performance optimization efforts and conducting thorough code reviews to maintain high-quality standards.</Text>
        <Text style={styles.paragraph}>Beyond my professional endeavors, I continuously seek opportunities to learn and grow, staying updated with the latest technologies and best practices in the ever-evolving world of web development.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text>- Javascript, Typescript, ES6</Text>
        <Text>- React, React Native, Next, Redux, Redux Saga, RxJS, Zustand, React Query, React Hook Form, Formik, Framer Motion</Text>
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
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.subheading}>The Lab – Fullstack Senior Software Developer (2023 – Present)</Text>
        <Text style={styles.paragraph}>The Lab is a New York-based creative technology agency delivering digital experiences for major retail and consumer brands.</Text>
        <Text>• Led frontend architecture across 10+ white-labeled retail websites, ensuring performance, accessibility, and consistency.</Text>
        <Text>• Developed reusable components and design systems with React and SCSS modules, cutting development time by 40%.</Text>
        <Text>• Integrated backend APIs using Django and DRF, enabling dynamic pricing, multi-language, and inventory syncing.</Text>
        <Text>• Collaborated with designers and PMs to launch responsive, SEO-optimized interfaces across desktop and mobile.</Text>
        <Text>• Implemented CI/CD workflows and testing pipelines to improve code quality and reduce regression bugs by 30%.</Text>
        <Text>New York - Remote</Text>

        <Text style={styles.subheading}>Ammega Group – Senior Frontend Developer (2023 – 2024)</Text>
        <Text style={styles.paragraph}>Ammega Group is a global leader in industrial manufacturing, specializing in conveyor belts and power transmission systems across multiple sectors.</Text>
        <Text>• Built internal dashboards and production interfaces using React and Next.js, improving operational visibility across factories.</Text>
        <Text>• Collaborated with .NET backend team to integrate complex APIs for real-time data visualization and machine telemetry.</Text>
        <Text>• Developed role-based access systems and component-level authorization for secure industrial workflows.</Text>
        <Text>• Refactored legacy frontends into modular, maintainable codebases, reducing future dev effort by 35%.</Text>
        <Text>• Worked directly with engineers and operations leads to map UI features to real-world production processes.</Text>
        <Text>Amsterdam - Remote</Text>

        <Text style={styles.subheading}>MDS Translation – Fullstack Developer (2024)</Text>
        <Text style={styles.paragraph}>MDS Translation is a boutique language services provider focused on delivering professional translations across Europe.</Text>
        <Text>• Designed and developed a multilingual marketing site using Next.js, TypeScript, and i18n routing.</Text>
        <Text>• Achieved high SEO scores (90+ Lighthouse, indexed in 3 languages) without dedicated SEO work, thanks to server-rendered, semantically structured pages.</Text>
        <Text>• Implemented dynamic routing with locale-based content, improving UX and engagement across target markets.</Text>
        <Text>• Used Next.js Image Optimization and static generation to ensure fast load times across all geographies.</Text>
        <Text>• Built CMS-agnostic content structure for future integration with a headless backend.</Text>
        <Text>İstanbul - Remote</Text>

        <Text style={styles.subheading}>Path Product – Senior Frontend Developer (2022 – 2023)</Text>
        <Text style={styles.paragraph}>Path is an Istanbul-based technology company delivering high-performance, real-time software solutions for finance, betting, and e-commerce sectors.</Text>
        <Text>• Contributed to <Text style={{ fontWeight: 'bold' }}>Tuttur.com</Text>, one of Turkey’s largest online sports betting platforms, building real-time betting interfaces and user flows.</Text>
        <Text>• Developed dynamic UI components for live match data, odds tracking, and bet slip management using React, RxJS, and Socket Connection.</Text>
        <Text>• Engineered reactive data streams to support thousands of simultaneous users with minimal latency and consistent state.</Text>
        <Text>• Optimized frontend performance under high traffic (~100k+ concurrent users), reducing interaction lag and memory usage.</Text>
        <Text>• Collaborated with cross-functional teams to ensure compliance with industry regulations and transactional accuracy.</Text>
        <Text>İstanbul - Remote</Text>

        <Text style={styles.subheading}>Kafein Software (2021 – 2022)</Text>
        <Text style={styles.paragraph}>Kafein is a Turkish software and consultancy company providing enterprise-level solutions in telecom, finance, and IT security domains.</Text>
        <Text>• Built modular and scalable UI components using React and Redux-Saga for enterprise applications.</Text>
        <Text>• Developed async workflows and complex state management logic to handle nested user interactions.</Text>
        <Text>• Created custom form builders and data visualization components tailored to enterprise reporting needs.</Text>
        <Text>• Contributed to frontend architecture decisions to support long-term maintainability across teams.</Text>
        <Text>• Participated in code reviews and mentored junior developers on best practices for clean, testable code.</Text>
        <Text>İstanbul - Remote</Text>

        <Text style={styles.subheading}>NTT Data (2019 – 2021)</Text>
        <Text style={styles.paragraph}>NTT Data is a global IT services provider delivering enterprise solutions in sectors such as finance, insurance, and telecommunications.</Text>
        <Text>• Developed Single Page Applications (SPA) using React and integrated them with .NET-based backend systems.</Text>
        <Text>• Built secure authentication flows including role-based access, SSO, and JWT token management.</Text>
        <Text>• Collaborated with backend teams to design RESTful API contracts for frontend integration.</Text>
        <Text>• Maintained and refactored legacy components to align with modern frontend standards and accessibility guidelines.</Text>
        <Text>• Participated in agile ceremonies and collaborated with international teams in a distributed environment.</Text>
        <Text>İstanbul - Onsite / Remote</Text>

        <Text style={styles.subheading}>Bulut Software – Frontend Developer (2019)</Text>
        <Text style={styles.paragraph}>Bulut Software is a Turkish tech company building vendor systems and online payment platforms for SMEs.</Text>
        <Text>• Developed vendor management interfaces using React, tailored for inventory and supplier workflows.</Text>
        <Text>• Integrated frontend with legacy PHP APIs, working with tools like Postman to test and debug data exchanges.</Text>
        <Text>• Built custom checkout and payment UIs to support seamless online transactions and order submissions.</Text>
        <Text>• Refactored input flows to reduce user errors and improve data accuracy in critical payment and order forms.</Text>
        <Text>İstanbul - Onsite / Remote</Text>

        <Text style={styles.subheading}>Tıkla Kutla – Frontend Developer (2018 – 2019)</Text>
        <Text style={styles.paragraph}>Tıkla Kutla was a startup serving the event and entertainment industry, providing vendor management tools for organizing campaigns, parties, and experiences.</Text>
        <Text>• Built dynamic frontend modules using AngularJS for managing vendors, bookings, and event listings.</Text>
        <Text>• Focused on SEO-friendly markup and routing to maximize organic reach and indexability in Google Search.</Text>
        <Text>• Created responsive interfaces tailored for both vendors and end-users across web and mobile.</Text>
        <Text>• Collaborated with backend developers to improve page speed and optimize crawlable content.</Text>
        <Text>İstanbul - Onsite</Text>

        <Text style={styles.subheading}>Noviente Informatics Systems – Cofounder & Fullstack Developer (2015 – 2018)</Text>
        <Text style={styles.paragraph}>Noviente is a boutique tech company I co-founded, delivering tailored software solutions across sectors including accounting, social media management, real estate, and e-commerce.</Text>
        <Text>• Built vendor systems for creative brands like Creafity, enabling streamlined order, inventory, and delivery workflows.</Text>
        <Text>• Developed custom platforms for Instagram campaign management, apartment billing systems, and small business invoicing tools.</Text>
        <Text>• Used React for frontend components and WooCommerce/WordPress for e-commerce integrations.</Text>
        <Text>• Led product design and client communication from concept to deployment across multiple verticals.</Text>
        <Text>• Oversaw infrastructure setup and deployment for scalable, client-ready applications.</Text>
        <Text>İzmir - Onsite</Text>

        <Text style={styles.subheading}>ROS Inc. – Web Developer (2015 – 2017)</Text>
        <Text style={styles.paragraph}>ROS Inc. is a construction company for which I built a complete digital presence from scratch, including a modern website and marketing integrations.</Text>
        <Text>• Designed and developed the company website using HTML, CSS, and JavaScript, optimized for mobile and desktop.</Text>
        <Text>• Integrated Google Maps for location visibility and Google Ads for targeted traffic acquisition.</Text>
        <Text>• Improved the company’s online discoverability and credibility through SEO best practices and Google Business setup.</Text>
        <Text>• Enabled measurable growth in web traffic and lead generation through analytics-driven iteration.</Text>
        <Text>İzmir - Onsite</Text>

        <Text style={styles.subheading}>Ofism.com – Founder & Fullstack Developer (2013 – 2015)</Text>
        <Text style={styles.paragraph}>Ofism.com was an online stationery e-commerce platform I independently designed and developed from the ground up.</Text>
        <Text>• Built the entire system using PHP and OpenCart, including custom theming, cart logic, and payment integration.</Text>
        <Text>• Designed the UI/UX, product categorization, and checkout flows to provide a smooth shopping experience.</Text>
        <Text>• Handled backend features such as inventory management, shipping rules, and order tracking.</Text>
        <Text>• Managed hosting, database configuration, and ongoing site maintenance independently.</Text>
        <Text>• Gained hands-on experience in running a tech-driven product—from development to customer support.</Text>
        <Text>İzmir - Onsite</Text>


        <Text style={styles.subheading}>Doğan Defter – Web Developer (2008 – 2013)</Text>
        <Text style={styles.paragraph}>Doğan Defter is a Turkish manufacturer and exporter of notebooks and stationery products, serving both local and international markets.</Text>
        <Text>• Designed and developed the company’s official website to showcase products and support global outreach.</Text>
        <Text>• Built a custom CMS to allow the internal team to manage product catalogs, announcements, and inquiries with ease.</Text>
        <Text>• Structured the site with multilingual support and SEO-friendly markup to attract international buyers.</Text>
        <Text>• Contributed to increasing the brand’s global visibility and inbound requests through improved digital presence.</Text>
        <Text>İzmir - Onsite</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>- Technical University of America (2018 - 2022) – Bachelor’s in Software Engineering</Text>
        <Text>- Istanbul University (2005 - 2008) – Master’s in Political Science</Text>
        <Text>- Istanbul University (2000 - 2005) – Bachelor’s in Political Science</Text>
        <Text>- BEMAR Career School (2013) – Web Design and Programming Certification</Text>
      </View>

      <View style={styles.section}>
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
