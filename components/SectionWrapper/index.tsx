'use client';

import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FaChevronDown } from 'react-icons/fa';
import { TbCube } from 'react-icons/tb';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { motion } from 'framer-motion';
import PlatonicObjects from '@/components/PlatonicObjects';
import Tooltip from '../Tooltip';
import { isTablet, isSmallLaptop } from '@/utilities/responsive';


import styles from './index.module.scss';

interface SectionWrapperProps {
    children: React.ReactNode;
    variant?: 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp' | 'fade';
}

const variants = {
    slideUp: {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
    },
    slideLeft: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    },
    slideRight: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    },
    scaleUp: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.05 },
    },
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    },
};

export default function SectionWrapper({
    children,
    variant = 'slideUp', // default variant
}: SectionWrapperProps) {
    const { theme } = useTheme();
    const [showHint, setShowHint] = useState(false);
    const [leftPos, setLeftPos] = useState({ left: 0, width: 0 });
    const [showTopButton, setShowTopButton] = useState(false);
    const motionVariant = variants[variant];
    const contentRef = useRef<HTMLDivElement>(null);
    const rightSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const yOffset = window.pageYOffset;
            setShowTopButton(yOffset > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const el = contentRef.current;
        const rightEl = rightSectionRef.current;
        if (!el || !rightEl) return;

        const checkOverflowAndScroll = () => {
            const bounds = el.getBoundingClientRect();

            // Save left width/position
            setLeftPos(prev => {
                const same = prev.left === bounds.left && prev.width === bounds.width;
                return same ? prev : { left: bounds.left, width: bounds.width };
            });

            const offsetHeight = isTablet() ? el.offsetHeight + rightEl.offsetHeight : el.offsetHeight;
            const overflows = offsetHeight > window.innerHeight;
            const bottomVisible = bounds.bottom <= window.innerHeight;
            const shouldShow = overflows && !bottomVisible;

            setShowHint(prev => (prev !== shouldShow ? shouldShow : prev));
        };

        checkOverflowAndScroll();

        window.addEventListener('scroll', checkOverflowAndScroll);
        window.addEventListener('resize', checkOverflowAndScroll);
        return () => {
            window.removeEventListener('scroll', checkOverflowAndScroll);
            window.removeEventListener('resize', checkOverflowAndScroll);
        };
    }, []);

    const scrollToTop = () => {
        if (typeof window === 'undefined') {
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        if (typeof window === 'undefined') {
            return;
        }
        if (contentRef.current) {
            window.scrollTo({
                top: contentRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={styles.sectionWrapper}>
            <div className={`${styles.section} ${styles.leftSection}`} ref={contentRef}>
                <motion.section
                    initial={motionVariant.initial}
                    animate={motionVariant.animate}
                    exit={motionVariant.exit}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    {children}
                </motion.section>

                {showHint && (
                    <div
                        className={styles.scrollHint}
                        style={{
                            left: leftPos.left,
                            width: leftPos.width,
                        }}
                    >
                        <button onClick={scrollToBottom} className={styles.arrowButton}>
                            <FaChevronDown style={{ color: `${theme === 'dark' ? 'white' : 'black'}` }} />
                        </button>
                    </div>
                )}
            </div>
            <div className={`${styles.section} ${styles.rightSection}`} ref={rightSectionRef}>
                <span>
                    <Tooltip 
                        content={<><TbCube /> You can interact with the Platonic objects by clicking and dragging them.</>} 
                        position="bottom"
                        oneTime={true}
                        autoShow={isSmallLaptop()}
                        id="platonic-objects-tooltip"
                        objectsTooltip={true}
                    >
                        <PlatonicObjects />
                    </Tooltip>
                </span>
            </div>
            {showTopButton && (
                <button onClick={scrollToTop} className={styles.backToTop}>
                    <BsChevronDoubleUp />
                </button>
            )}
        </div>
    );
}
