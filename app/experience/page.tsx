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
        <h2>The Lab – New York</h2>
      </article>
      <p><strong>Senior Frontend Engineer</strong> (2023 – Present) · Remote</p>
      <p><strong>Stack:</strong> React, TypeScript, Python, Django, SCSS, Storybook, Playwright</p>
      <ul>
        <li>Define technical standards and Design System governance for white-labeled e-commerce platforms across distributed engineering teams.</li>
        <li>Built shared component library using TypeScript, React, and SCSS with Storybook documentation, enabling consistent user experience and accelerated development cycles.</li>
        <li>Integrated Python/Django server-side rendering with modern React patterns (useMemo, useCallback, React.memo) for optimized performance.</li>
        <li>Established automated testing practices with Playwright and Cypress, strengthening product stability and deployment confidence.</li>
        <li>Enforced WCAG 2.1 AA accessibility compliance and CI/CD workflows with GitHub Actions.</li>
      </ul>
      <div className={styles.link}>
        <a href='https://www.thelab.co/' target='_blank'>
          <article>
            <GoRocket /> thelab.co
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/ammega-logo.png" alt="Ammega logo" width={50} height={16} />
        <h2>Ammega Group – Amsterdam</h2>
      </article>
      <p><strong>Senior Frontend Engineer</strong> (2023 – 2024) · Remote</p>
      <p><strong>Stack:</strong> React, Next.js, TypeScript, .NET, React Query, Ant Design</p>
      <ul>
        <li>Directed technical strategy for production monitoring dashboards supporting 200+ manufacturing facilities globally.</li>
        <li>Led migration of legacy jQuery application to modern React with TypeScript through incremental adoption, maintaining product stability.</li>
        <li>Designed role-based access control system using React Router and Redux, collaborating with security teams to ensure compliant workflows.</li>
        <li>Integrated .NET backend APIs using React Query for real-time data visualization with optimized state management.</li>
      </ul>
      <div className={styles.link}>
        <a href='https://ammega.com/' target='_blank'>
          <article>
            <GoRocket /> ammega.com
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/mds-logo.png" alt="MDS logo" width={40} height={40} />
        <h2>MDS Translation – Istanbul</h2>
      </article>
      <p><strong>Frontend Engineer</strong> (2024) · Remote</p>
      <p><strong>Stack:</strong> Next.js, TypeScript, SCSS, i18n</p>
      <ul>
        <li>Architected multilingual marketing platform using Next.js 14, TypeScript, and Static Site Generation across 3 European locales.</li>
        <li>Implemented internationalization (i18n) strategy with next-intl, designing locale management system to support future market expansion.</li>
        <li>Built headless CMS-agnostic architecture enabling flexible content management integration.</li>
      </ul>
      <div className={styles.link}>
        <a href='https://mdstercume.com' target='_blank'>
          <article>
            <GoRocket /> mdstercume.com
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/path-logo.png" alt="Path logo" width={40} height={40} />
        <h2>Path Product – Istanbul</h2>
      </article>
      <p><strong>Senior Frontend Developer</strong> (2022 – 2023) · Remote</p>
      <p><strong>Stack:</strong> React, Next.js, RxJS, WebSocket, MongoDB</p>
      <ul>
        <li>Architected Scalable Architecture for high-traffic real-time platform supporting complex user interactions and live data synchronization.</li>
        <li>Engineered reactive data streams with RxJS and WebSocket, supporting concurrent users through optimized React rendering patterns.</li>
        <li>Implemented Next.js rendering strategies (SSR, CSR, SSG) to meet performance and SEO objectives.</li>
        <li>Coordinated across product, backend, and compliance teams to deliver solutions meeting regulatory requirements.</li>
      </ul>
      <div className={styles.link}>
        <a href='https://path.com.tr/' target='_blank'>
          <article>
            <GoRocket /> path.com.tr
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/kafein-logo.png" alt="Kafein logo" width={40} height={40} />
        <h2>Kafein Software – Istanbul</h2>
      </article>
      <p><strong>Lead Frontend Developer</strong> (2021 – 2022) · Remote</p>
      <p><strong>Stack:</strong> React, Redux, Redux-Saga</p>
      <ul>
        <li>Directed technical decisions and development team for enterprise React applications, establishing component patterns and architectural standards.</li>
        <li>Designed modular architecture using React and Redux-Saga, enabling code reuse across multiple product lines.</li>
        <li>Built custom form builder and data visualization systems for enterprise reporting.</li>
        <li>Mentored engineering team through code reviews and pair programming, improving code quality and team velocity.</li>
      </ul>
      <div className={styles.link}>
        <a href='https://www.kafein.com.tr/' target='_blank'>
          <article>
            <GoRocket /> www.kafein.com.tr
          </article>
        </a>
      </div>

      <article className={styles.headerWithLogo}>
        <Image src="/images/nttdata-logo.png" alt="NTT Data logo" width={40} height={40} />
        <h2>NTT Data – Istanbul</h2>
      </article>
      <p><strong>Senior Frontend Developer</strong> (2019 – 2021) · Hybrid</p>
      <p><strong>Stack:</strong> React, React Native, Redux, .NET, JWT, SSO</p>
      <ul>
        <li>Built enterprise Single Page Applications using React and React Native integrated with .NET backend systems for finance and insurance products.</li>
        <li>Designed secure authentication architecture including role-based access control, SSO, and JWT token management.</li>
        <li>Established React Router and Redux patterns for Performance Management System, supporting product evolution and team scalability.</li>
        <li>Led incremental modernization of legacy components to modern React standards, maintaining business continuity across international teams.</li>
      </ul>
      <div className={styles.link}>
        <a href='https://nttdata-solutions.com/tr/' target='_blank'>
          <article>
            <GoRocket /> nttdata-solutions.com/tr
          </article>
        </a>
      </div>

      <h2>Bulut Software – Istanbul</h2>
      <p><strong>React Developer</strong> (2019) · Hybrid</p>
      <ul>
        <li>Developed vendor management interfaces using React for inventory and supplier workflows.</li>
        <li>Built custom checkout and payment UIs integrated with legacy PHP APIs.</li>
      </ul>

      <h2>Tıkla Kutla – Istanbul</h2>
      <p><strong>Frontend Developer</strong> (2018 – 2019) · Onsite</p>
      <ul>
        <li>Built dynamic vendor management modules using AngularJS for event booking and campaign management.</li>
        <li>Developed responsive interfaces for vendors and end-users, improving user experience across platforms.</li>
      </ul>

      <h2>Noviente – Izmir</h2>
      <p><strong>Frontend Developer & Co-Founder</strong> (2015 – 2018) · Onsite</p>
      <ul>
        <li>Built vendor systems, Instagram campaign tools, and billing platforms using React, WordPress, and WooCommerce.</li>
        <li>Led product design and client communication from concept to deployment across multiple sectors.</li>
      </ul>

      <h2>ROS Construction – Izmir</h2>
      <p><strong>Frontend Developer</strong> (2015 – 2017) · Onsite</p>
      <ul>
        <li>Designed and developed company website with Google Maps integration and SEO optimization.</li>
      </ul>

      <h2>Ofism.com – Izmir</h2>
      <p><strong>Fullstack Developer</strong> (2013 – 2015) · Onsite</p>
      <ul>
        <li>Built complete e-commerce platform using PHP, OpenCart, and JavaScript, managing cart logic, payment integration, and inventory.</li>
        <li>Started working with React in 2013 for interactive frontend components.</li>
      </ul>

      <h2>Doğan Defter – Izmir</h2>
      <p><strong>Web Developer</strong> (2008 – 2013) · Onsite</p>
      <ul>
        <li>Developed company website with custom CMS, multilingual support, and SEO-friendly markup for international visibility.</li>
      </ul>
    </SectionWrapper>
  );
}
