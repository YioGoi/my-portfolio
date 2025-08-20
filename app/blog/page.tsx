"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './page.module.scss';

const variants = {
    slideUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
    }
};

const articles = [
    {
        id: 0,
        title: "React Native in 2025: Best Package Decisions for Building a Mobile App",
        content: "React Native gives us the power to build cross-platform apps with a single codebase. But while the framework itself provides the…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*7Ist7q8EJvij2k08Gf_bXQ.png",
        url: "https://medium.com/@ydogan.dev/react-native-in-2025-best-package-decisions-for-building-a-mobile-app-c582efd4fa57"
    },
    {
        id: 1,
        title: "Next.js Beyond the Buzzwords: Choosing Between SSR, CSR, and SSG in Real Projects",
        content: "If you’ve touched React in the last few years, chances are you’ve worked with Next.js. It’s become the go-to framework for React developers…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*HgH6RdztNuAfW10J4uxyEQ.png",
        url: "https://medium.com/@ydogan.dev/next-js-beyond-the-buzzwords-choosing-between-ssr-csr-and-ssg-in-real-projects-cd37ada70fc5"
    },
    {
        id: 2,
        title: "React v19.1 and the Power of Functional Programming",
        content: "React and functional programming (FP) have always shared DNA. From the very beginning, React emphasised declarative UI and pure rendering…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*bCfrQLSO8jVDDR7TFEBACA.png",
        url: "https://medium.com/@ydogan.dev/react-v19-1-and-the-power-of-functional-programming-08a31136694a"
    }
]

export default function BlogPage() {
    const motionVariant = variants['slideUp'];
    return (
        <section className={styles.blog}>
            <motion.section
                initial={motionVariant.initial}
                animate={motionVariant.animate}
                exit={motionVariant.exit}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h1 className='underline-title'>Blog</h1>
                <div
                    className={styles.articles}
                >
                    {articles.map(article => (
                        <a
                            className={styles.article}
                            key={article.id}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <h2>{article.title}</h2>
                                <p>{article.content}</p>
                            </div>
                            <div>
                                <Image src={article.thumbnail} width={160} height={107} alt={article.title} />
                            </div>
                        </a>
                    ))}
                </div>
            </motion.section>
        </section>
    );
}
