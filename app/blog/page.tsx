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

const myArticles = [
    {
        id: 0,
        title: "Building Next‑Gen AI Agents with LangChain, LangGraph & LangSmith — A Python + React Demo",
        content: "Over the past couple of years, LangChain has emerged as one of the go-to frameworks for building applications around large language models (LLMs). But recently,…",
        thumbnail: "https://miro.medium.com/v2/resize:fit:0/1*OWZLff-hQ4Q1_TMo1ZWDLQ.png",
        url: "https://medium.com/@ydogan.dev/building-next-gen-ai-agents-with-langchain-langgraph-langsmith-a-python-react-demo-27aadb2affd2"
    },
    {
        id: 1,
        title: "React Native in 2025: Best Package Decisions for Building a Mobile App",
        content: "React Native gives us the power to build cross-platform apps with a single codebase. But while the framework itself provides the…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*7Ist7q8EJvij2k08Gf_bXQ.png",
        url: "https://medium.com/@ydogan.dev/react-native-in-2025-best-package-decisions-for-building-a-mobile-app-c582efd4fa57"
    },
    {
        id: 2,
        title: "Next.js Beyond the Buzzwords: Choosing Between SSR, CSR, and SSG in Real Projects",
        content: "If you’ve touched React in the last few years, chances are you’ve worked with Next.js. It’s become the go-to framework for React developers…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*HgH6RdztNuAfW10J4uxyEQ.png",
        url: "https://medium.com/@ydogan.dev/next-js-beyond-the-buzzwords-choosing-between-ssr-csr-and-ssg-in-real-projects-cd37ada70fc5"
    },
    {
        id: 3,
        title: "React v19.1 and the Power of Functional Programming",
        content: "React and functional programming (FP) have always shared DNA. From the very beginning, React emphasised declarative UI and pure rendering…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*bCfrQLSO8jVDDR7TFEBACA.png",
        url: "https://medium.com/@ydogan.dev/react-v19-1-and-the-power-of-functional-programming-08a31136694a"
    },
    {
        id: 4,
        title: "Fullstack Type Safety with Django, React, and Reactivated",
        content: "If you’ve ever built a Django + React app, you’ve probably run into this:",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*wKq_Y-rbaVzJiZ4g41qF9Q.jpeg",
        url: "https://medium.com/@ydogan.dev/fullstack-type-safety-with-django-react-and-reactivated-ceaa9633e73a"
    },
    {
        id: 5,
        title: "From Zero to Insight: Logging & Performance Monitoring in React Native (Emulator + Real Device)",
        content: "If you build React Native apps, two things make or break your day: seeing the right logs and knowing where your frames go to die. This…",
        thumbnail: "https://miro.medium.com/v2/resize:fill:160:107/1*OHeqAEVUVabg6FSUVok78A.png",
        url: "https://medium.com/@ydogan.dev/from-zero-to-insight-logging-performance-monitoring-in-react-native-emulator-real-device-9fb49eb43b44"
    }
]

const otherArticles = [
    {
        id: 0,
        title: "Impossible Components",
        content: "Suppose I want to greet you in my favorite color. This would require combining information from two different computers. Your name would be coming from your computer. The color would be on my computer.",
        thumbnail: "/images/overreacted.png",
        url: "https://overreacted.io/impossible-components/"
    },
    {
        id: 1,
        title: "What Does 'use client' Do?",
        content: "React Server Components (in?)famously has no API surface. It’s an entire programming paradigm largely stemming from two directives:",
        thumbnail: "/images/dan.jpg",
        url: "https://overreacted.io/what-does-use-client-do/"
    },
    {
        id: 2,
        title: "Before You memo()",
        content: "There are many articles written about React performance optimizations. In general, if some state update is slow, you need to:",
        thumbnail: "/images/memo.png",
        url: "https://overreacted.io/before-you-memo/"
    }, 
    {
        id: 3,
        title: "What Are the React Team Principles?",
        content: "During my time on the React team, I’ve been lucky to see how Jordan, Sebastian, Sophie and other tenured team members approach problems. In this post, I’m distilling what I learned from them into a few high-level technical principles.",
        thumbnail: "/images/react.jpg",
        url: "https://overreacted.io/what-are-the-react-team-principles/"
    },
    {
        id: 4,
        title: "A Complete Guide to useEffect",
        content: "You wrote a few components with Hooks. Maybe even a small app. You’re mostly satisfied. You’re comfortable with the API and picked up a few tricks along the way.",
        thumbnail: "/images/useEffect.png",
        url: "https://overreacted.io/a-complete-guide-to-useeffect/"
    },
    {
        id: 5,
        title: "Making setInterval Declarative with React Hooks",
        content: "If you played with React Hooks for more than a few hours, you probably ran into an intriguing problem: using setInterval just doesn’t work as you’d expect.",
        thumbnail: "/images/setInterval.jpg",
        url: "https://overreacted.io/making-setinterval-declarative-with-react-hooks/"
    },
    {
        id: 6,
        title: "The Elements of UI Engineering",
        content: "In my previous post, I talked about admitting our knowledge gaps. You might conclude that I suggest settling for mediocrity. I don’t! This is a broad field.",
        thumbnail: "/images/ui-engineering.png",
        url: "https://overreacted.io/the-elements-of-ui-engineering/"
    }
]

export default function BlogPage() {
    const motionVariant = variants['slideUp'];
    return (
        <section className={styles.blog}>
            <h1 className='underline-title'>Blog</h1>
            <div className={styles.content}>
                <motion.section
                    initial={motionVariant.initial}
                    animate={motionVariant.animate}
                    exit={motionVariant.exit}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2>What I focus on</h2>
                    <div
                        className={styles.articles}
                    >
                        {myArticles.map(article => (
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
                <motion.section
                    initial={motionVariant.initial}
                    animate={motionVariant.animate}
                    exit={motionVariant.exit}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h2>Popular Articles I Read</h2>
                    <div
                        className={styles.articles}
                    >
                        {otherArticles.map(article => (
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
            </div>
        </section>
    );
}
