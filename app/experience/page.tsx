import SectionWrapper from '@/components/SectionWrapper';
import { GoRocket } from 'react-icons/go';
import Image from 'next/image';
import styles from './page.module.scss';

export default function ExperiencePage() {
  return (
    <SectionWrapper variant="slideRight">
      <h1 className='underline-title'>Experience</h1>

      <article className={styles.headerWithLogo}>
        <div style={{ backgroundColor: '#f0ece7', display: 'flex', borderRadius: 6 }}>
          <Image src="/images/thelab-logo.png" alt="the Lab logo" width={39} height={39} />
        </div>
        <h2>The Lab – New York, USA</h2>
      </article>
      <p><strong>Fullstack Senior Software Developer</strong> (2023 – Present)</p>
      <p><strong>Stack:</strong> React, Python, Django</p>
      <p>The Lab is a New York-based creative technology agency delivering digital experiences for major retail and consumer brands.</p>
      <ul>
        <li>Led frontend architecture across 10+ white-labeled retail websites, ensuring performance, accessibility, and consistency.</li>
        <li>Developed reusable components and design systems with React and SCSS modules, cutting development time by 40%.</li>
        <li>Integrated backend APIs using Django and DRF, enabling dynamic pricing, multi-language, and inventory syncing.</li>
        <li>Collaborated with designers and PMs to launch responsive, SEO-optimized interfaces across desktop and mobile.</li>
        <li>Implemented CI/CD workflows and testing pipelines to improve code quality and reduce regression bugs by 30%.</li>
        <li>New York - Remote</li>
      </ul>
      <div className={styles.link}>
        <a href='https://www.thelab.co/' target='_blank'>
          <article>
            <GoRocket /> thelab.co
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/ammega-logo.png" alt="the Lab logo" width={50} height={16} />
        <h2>Ammega Group</h2>
      </article>
      <p><strong>Senior Frontend Developer</strong> (2023 – 2024)</p>
      <p><strong>Stack:</strong> React, Next.js, .NET</p>
      <p>Ammega Group is a global leader in industrial manufacturing, specializing in conveyor belts and power transmission systems across multiple sectors.</p>
      <ul>
        <li>Built internal dashboards and production interfaces using React and Next.js, improving operational visibility across factories.</li>
        <li>Collaborated with .NET backend team to integrate complex APIs for real-time data visualization and machine telemetry.</li>
        <li>Developed role-based access systems and component-level authorization for secure industrial workflows.</li>
        <li>Refactored legacy frontends into modular, maintainable codebases, reducing future dev effort by 35%.</li>
        <li>Worked directly with engineers and operations leads to map UI features to real-world production processes.</li>
        <li>Amsterdam - Remote</li>
      </ul>
      <div className={styles.link}>
        <a href='https://ammega.com/' target='_blank'>
          <article>
            <GoRocket /> ammega.com
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/mds-logo.png" alt="the Lab logo" width={40} height={40} />
        <h2>MDS Translation</h2>
      </article>
      <p><strong>Fullstack Developer</strong> (2024)</p>
      <p><strong>Stack:</strong> Next.js, React, TypeScript, SCSS Modules, i18n</p>
      <p>
        MDS Translation is a boutique language services provider focused on delivering professional translations across Europe.
      </p>
      <ul>
        <li>Designed and developed a multilingual marketing site using Next.js, TypeScript, and i18n routing.</li>
        <li>Achieved high SEO scores (90+ Lighthouse, indexed in 3 languages) without dedicated SEO work, thanks to server-rendered, semantically structured pages.</li>
        <li>Implemented dynamic routing with locale-based content, improving UX and engagement across target markets.</li>
        <li>Used Next.js Image Optimization and static generation to ensure fast load times across all geographies.</li>
        <li>Built CMS-agnostic content structure for future integration with a headless backend.</li>
        <li>İstanbul - Remote</li>
      </ul>
      <div className={styles.link}>
        <a href='https://mdstercume.com' target='_blank'>
          <article>
            <GoRocket /> mdstercume.com
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/path-logo.png" alt="the Lab logo" width={40} height={40} />
        <h2>Path Product and Software House</h2>
      </article>
      <p><strong>Senior Frontend Developer</strong> (2022 – 2023)</p>
      <p><strong>Stack:</strong> React, Next.js, RxJS, Node.js, MongoDB, Socket Connection</p>
      <p>
        Path is an Istanbul-based technology company delivering high-performance, real-time software solutions for finance, betting, and e-commerce sectors.
      </p>
      <ul>
        <li>Contributed to <b>Tuttur.com</b>, one of Turkiye’s largest online sports betting platforms, building real-time betting interfaces and user flows.</li>
        <li>Developed dynamic UI components for live match data, odds tracking, and bet slip management using React, RxJS, and Socket Connection.</li>
        <li>Engineered reactive data streams to support thousands of simultaneous users with minimal latency and consistent state.</li>
        <li>Optimized frontend performance under high traffic (~100k+ concurrent users), reducing interaction lag and memory usage.</li>
        <li>Collaborated with cross-functional teams to ensure compliance with industry regulations and transactional accuracy.</li>
        <li>İstanbul - Remote</li>
      </ul>
      <div className={styles.link}>
        <a href='https://path.com.tr/' target='_blank'>
          <article>
            <GoRocket /> path.com.tr
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/kafein-logo.png" alt="the Lab logo" width={40} height={40} />
        <h2>Kafein Software</h2>
      </article>
      <p><strong>Senior Frontend Developer</strong> (2021 – 2022)</p>
      <p><strong>Stack:</strong> React, Redux, Redux-Saga</p>
      <p>
        Kafein is a Turkish software and consultancy company providing enterprise-level solutions in telecom, finance, and IT security domains.
      </p>
      <ul>
        <li>Built modular and scalable UI components using React and Redux-Saga for enterprise applications.</li>
        <li>Developed async workflows and complex state management logic to handle nested user interactions.</li>
        <li>Created custom form builders and data visualization components tailored to enterprise reporting needs.</li>
        <li>Contributed to frontend architecture decisions to support long-term maintainability across teams.</li>
        <li>Participated in code reviews and mentored junior developers on best practices for clean, testable code.</li>
        <li>İstanbul - Remote</li>
      </ul>
      <div className={styles.link}>
        <a href='https://www.kafein.com.tr/' target='_blank'>
          <article>
            <GoRocket /> www.kafein.com.tr
          </article>
        </a>
      </div>

      <h2>NTT Data</h2>
      <article className={styles.headerWithLogo}>
        <Image src="/images/nttdata-logo.png" alt="the Lab logo" width={40} height={40} />
        <h2>NTT Data</h2>
      </article>
      <p><strong>Senior Frontend Developer</strong> (2019 – 2021)</p>
      <p><strong>Stack:</strong> React, Redux, .NET, JWT, SignalR, SSO</p>
      <p>
        NTT Data is a global IT services provider delivering enterprise solutions in sectors such as finance, insurance, and telecommunications.
      </p>
      <ul>
        <li>Developed Single Page Applications (SPA) using React and integrated them with .NET-based backend systems.</li>
        <li>Built secure authentication flows including role-based access, SSO, and JWT token management.</li>
        <li>Collaborated with backend teams to design RESTful API contracts for frontend integration.</li>
        <li>Maintained and refactored legacy components to align with modern frontend standards and accessibility guidelines.</li>
        <li>Participated in agile ceremonies and collaborated with international teams in a distributed environment.</li>
        <li>İstanbul - Onsite / Remote</li>
      </ul>
      <div className={styles.link}>
        <a href='https://nttdata-solutions.com/tr/' target='_blank'>
          <article>
            <GoRocket /> nttdata-solutions.com/tr
          </article>
        </a>
      </div>

      <h2>Bulut Software</h2>
      <p><strong>React Developer</strong> (2019)</p>
      <p><strong>Stack:</strong> React, Context API, JWT</p>
      <p>
        Bulut Software is a Turkish tech company building vendor systems and online payment platforms for SMEs.
      </p>
      <ul>
        <li>Developed vendor management interfaces using React, tailored for inventory and supplier workflows.</li>
        <li>Integrated frontend with legacy PHP APIs, working with tools like Postman to test and debug data exchanges.</li>
        <li>Built custom checkout and payment UIs to support seamless online transactions and order submissions.</li>
        <li>Refactored input flows to reduce user errors and improve data accuracy in critical payment and order forms.</li>
        <li>İstanbul - Onsite / Remote</li>
      </ul>

      <h2>Tıkla Kutla Information Technologies</h2>
      <p><strong>Frontend Developer</strong> (2018 – 2019)</p>
      <p><strong>Stack:</strong> AngularJS</p>
      <p>
        Tıkla Kutla was a startup serving the event and entertainment industry, providing vendor management tools for organizing campaigns, parties, and experiences.
      </p>
      <ul>
        <li>Built dynamic frontend modules using AngularJS for managing vendors, bookings, and event listings.</li>
        <li>Focused on SEO-friendly markup and routing to maximize organic reach and indexability in Google Search.</li>
        <li>Created responsive interfaces tailored for both vendors and end-users across web and mobile.</li>
        <li>Collaborated with backend developers to improve page speed and optimize crawlable content.</li>
        <li>İstanbul - Onsite</li>
      </ul>

      <h2>Noviente Informatics Systems</h2>
      <p><strong>Frontend Developer</strong> (2015 – 2018)</p>
      <p><strong>Stack:</strong> React, WordPress, WooCommerce</p>
      <p>
        Noviente is a boutique tech company I co-founded, delivering tailored software solutions across sectors including accounting, social media management, real estate, and e-commerce.
      </p>
      <ul>
        <li>Built vendor systems for creative brands like Creafity, enabling streamlined order, inventory, and delivery workflows.</li>
        <li>Developed custom platforms for Instagram campaign management, apartment billing systems, and small business invoicing tools.</li>
        <li>Used React for frontend components and WooCommerce/WordPress for e-commerce integrations.</li>
        <li>Led product design and client communication from concept to deployment across multiple verticals.</li>
        <li>Oversaw infrastructure setup and deployment for scalable, client-ready applications.</li>
        <li>İzmir - Onsite</li>
      </ul>

      <h2>ROS Construction Inc.</h2>
      <p><strong>Frontend Developer</strong> (2015 – 2017)</p>
      <p><strong>Stack:</strong> HTML, CSS, JS</p>
      <p>
        ROS Inc. is a construction company for which I built a complete digital presence from scratch, including a modern website and marketing integrations.
      </p>
      <ul>
        <li>Designed and developed the company website using HTML, CSS, and JavaScript, optimized for mobile and desktop.</li>
        <li>Integrated Google Maps for location visibility and Google Ads for targeted traffic acquisition.</li>
        <li>Improved the company’s online discoverability and credibility through SEO best practices and Google Business setup.</li>
        <li>Enabled measurable growth in web traffic and lead generation through analytics-driven iteration.</li>
        <li>İzmir - Onsite</li>
      </ul>

      <h2>Ofism.com</h2>
      <p><strong>Fullstack Developer</strong> (2013 – 2015)</p>
      <p><strong>Stack:</strong> PHP, JavaScript, OpenCart</p>
      <p>
        Ofism.com was an online stationery e-commerce platform I independently designed and developed from the ground up.
      </p>
      <ul>
        <li>Built the entire system using PHP and OpenCart, including custom theming, cart logic, and payment integration.</li>
        <li>Designed the UI/UX, product categorization, and checkout flows to provide a smooth shopping experience.</li>
        <li>Handled backend features such as inventory management, shipping rules, and order tracking.</li>
        <li>Managed hosting, database configuration, and ongoing site maintenance independently.</li>
        <li>Gained hands-on experience in running a tech-driven product—from development to customer support.</li>
        <li>İzmir - Onsite</li>
      </ul>

      <h2>Dogan Defter San. ve Ticaret</h2>
      <p><strong>Web Developer</strong> (2008 – 2013)</p>
      <p><strong>Stack:</strong> HTML, CSS, CMS</p>
      <p>
        Doğan Defter is a Turkish manufacturer and exporter of notebooks and stationery products, serving both local and international markets.
      </p>
      <ul>
        <li>Designed and developed the company’s official website to showcase products and support global outreach.</li>
        <li>Built a custom CMS to allow the internal team to manage product catalogs, announcements, and inquiries with ease.</li>
        <li>Structured the site with multilingual support and SEO-friendly markup to attract international buyers.</li>
        <li>Contributed to increasing the brand’s global visibility and inbound requests through improved digital presence.</li>
        <li>İzmir - Onsite</li>
      </ul>
    </SectionWrapper>
  );
}
