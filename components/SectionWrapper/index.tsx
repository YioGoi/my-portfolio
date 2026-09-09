'use client';

import { useEffect, useRef, useState } from 'react';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import TouchRotatablePlatonicObjects from '@/components/TouchRotatablePlatonicObjects';
import { useObjectScene } from '@/context/ObjectSceneContext';

import styles from './index.module.scss';

interface SectionWrapperProps {
    children: React.ReactNode;
    variant?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'fade';
    customSectionClass?: string;
}

const variants = {
    slideUp: { opacity: 0, y: 30 },
    slideLeft: { opacity: 0, x: 50 },
    slideRight: { opacity: 0, x: -50 },
    scaleUp: { opacity: 0, scale: 0.95 },
    fade: { opacity: 0 },
};

export default function SectionWrapper({
    children,
    variant = 'slideLeft',
    customSectionClass = '',
}: SectionWrapperProps) {
    const reducedMotion = useReducedMotion();
    const { expanded, interactive, registerAnchor } = useObjectScene();
    const [scrollHint, setScrollHint] = useState({ visible: false, left: 0, width: 0 });
    const [showTopButton, setShowTopButton] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        let frame = 0;
        const measure = () => {
            const bounds = content.getBoundingClientRect();
            const visible = bounds.height > window.innerHeight && bounds.bottom > window.innerHeight + 48;
            setScrollHint(previous => (
                previous.visible === visible && previous.left === bounds.left && previous.width === bounds.width
                    ? previous
                    : { visible, left: bounds.left, width: bounds.width }
            ));
            setShowTopButton(window.scrollY > 300);
        };
        const scheduleMeasure = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(measure);
        };
        const observer = new ResizeObserver(scheduleMeasure);
        observer.observe(content);
        scheduleMeasure();
        window.addEventListener('scroll', scheduleMeasure, { passive: true });
        window.addEventListener('resize', scheduleMeasure);
        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener('scroll', scheduleMeasure);
            window.removeEventListener('resize', scheduleMeasure);
        };
    }, []);

    const scrollToBottom = () => {
        const content = contentRef.current;
        if (!content) return;
        window.scrollTo({
            top: window.scrollY + content.getBoundingClientRect().bottom - window.innerHeight,
            behavior: reducedMotion ? 'instant' : 'smooth',
        });
    };

    return (
        <div className={styles.sectionWrapper} data-content-expanded={expanded}>
            <div className={styles.objectAnchor} ref={registerAnchor}>
                {!interactive && (
                    <div className={styles.passiveObject}>
                        <TouchRotatablePlatonicObjects />
                    </div>
                )}
            </div>

            <div className={styles.contentFrame} ref={contentRef}>
                <motion.section
                    initial={reducedMotion ? false : variants[variant]}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    className={`${styles.contentSection} ${customSectionClass}`}
                    transition={{ duration: reducedMotion ? 0 : 0.6, ease: 'easeOut' }}
                >
                    {children}
                </motion.section>
            </div>

            {scrollHint.visible && (
                <div className={styles.scrollHint} style={{ left: scrollHint.left, width: scrollHint.width }}>
                    <button type="button" onClick={scrollToBottom} className={styles.arrowButton} aria-label="Scroll to end of content">
                        <FaChevronDown aria-hidden="true" />
                    </button>
                </div>
            )}
            {showTopButton && (
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })}
                    className={styles.backToTop}
                    aria-label="Back to top"
                >
                    <BsChevronDoubleUp aria-hidden="true" />
                </button>
            )}
        </div>
    );
}
