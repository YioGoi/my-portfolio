import SectionWrapper from '@/components/SectionWrapper';
import { GoRocket } from 'react-icons/go';
import Image from 'next/image';
import styles from './page.module.scss';

export default function ExperiencePage() {
  return (
    <SectionWrapper variant="slideRight">
      <h1>Experience</h1>

      <article className={styles.headerWithLogo}>
        <Image src="/images/thelab-logo.png" alt="the Lab logo" width={39} height={39} />
        <h2>The Lab – New York, USA</h2>
      </article>
      <p><strong>Fullstack Senior Software Developer</strong> (2023 – Present)</p>
      <p><strong>Stack:</strong> React, Python, Django</p>
      <p>
        Led frontend development and fullstack contributions across ~10 unified websites.
        Focused on scalability, performance, and code quality through reviews and best practices.
      </p>
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
      <p>
        Built user interfaces for manufacturing and production systems, focusing on operational clarity and usability in industrial workflows.
      </p>
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
        Designed and developed the full multilingual website for MDS Tercüme, a translation and consulting business,
        using Next.js internationalization (i18n) features. Focused on clean UI/UX, SEO optimization, and responsive performance across all modern devices.
      </p>
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
      <p><strong>Stack:</strong> React, Next.js, RxJS, Node.js, MongoDB, SignalR</p>
      <p>
        Built real-time features using SignalR and WebSockets.
        Maintained stable subscriptions and observable patterns for live data.
      </p>
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
        Architected reusable components and handled async flows with sagas.
      </p>
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
      <p><strong>Stack:</strong> React, Redux, .NET, JWT</p>
      <p>
        Developed SPA features and secure authentication layers using React Hooks.
      </p>
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
        Rebuilt the Tıkla Kutla platform and implemented authentication workflows.
      </p>

      <h2>Tıkla Kutla Information Technologies</h2>
      <p><strong>Frontend Developer</strong> (2018 – 2019)</p>
      <p><strong>Stack:</strong> AngularJS</p>
      <p>
        Focused on frontend performance, SEO, and UI responsiveness for vendor e-commerce.
      </p>

      <h2>Noviente Informatics Systems / Creafity</h2>
      <p><strong>Frontend Developer</strong> (2015 – 2018)</p>
      <p><strong>Stack:</strong> React, WordPress, WooCommerce</p>
      <p>
        Co-founded a custom vendor platform with an advanced UI/UX builder.
      </p>

      <h2>ROS Construction Inc.</h2>
      <p><strong>Frontend Developer</strong> (2015 – 2017)</p>
      <p><strong>Stack:</strong> HTML, CSS, JS</p>
      <p>
        Maintained corporate web presence and ensured scalability with business growth.
      </p>

      <h2>Ofism.com</h2>
      <p><strong>Fullstack Developer</strong> (2013 – 2015)</p>
      <p><strong>Stack:</strong> PHP, JavaScript, OpenCart</p>
      <p>
        Customized e-commerce workflows, added B2B features, and integrated SEO tools.
      </p>

      <h2>Dogan Defter San. ve Ticaret</h2>
      <p><strong>Web Developer</strong> (2008 – 2013)</p>
      <p><strong>Stack:</strong> HTML, CSS, CMS</p>
      <p>
        Built and updated the corporate website, including design and content management.
      </p>
    </SectionWrapper>
  );
}
