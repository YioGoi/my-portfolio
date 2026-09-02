import type { Metadata } from "next";
import { FaArrowRight } from "react-icons/fa";

import SectionWrapper from "@/components/SectionWrapper";
import { writing } from "@/content/writing";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Writing about Next.js rendering, React, type-safe frontend boundaries, and performance.",
};

export default function WritingPage() {
  return (
    <SectionWrapper variant="slideUp" customSectionClass={styles.writingPage}>
      <header>
        <p className={styles.eyebrow}>Selected writing</p>
        <h1>Engineering ideas in practical terms</h1>
        <p>
          Notes on rendering architecture, React, type-safe boundaries, performance, and the
          decisions that shape maintainable products.
        </p>
      </header>

      <section className={styles.articleList} aria-label="Articles by Yiğit Doğan">
        {writing.map((article, index) => (
          <a href={article.url} target="_blank" rel="noopener noreferrer" key={article.title}>
            <span className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className={styles.topic}>{article.topic}</p>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
              <span className={styles.readLink}>
                Read on Medium <FaArrowRight aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </div>
          </a>
        ))}
      </section>
    </SectionWrapper>
  );
}
