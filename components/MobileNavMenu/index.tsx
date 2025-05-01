'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useMobileMenu } from '@/context/MobileMenuContext';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './index.module.scss';

interface NavItem {
    label: string;
    href: string;
}

export default function MobileNavMenu({ items }: { items: NavItem[] }) {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenu();
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // On pathname change, close menu AFTER mount
        setTimeout(() => {
            setShowMobileMenu(false);
        }, 10); // allow new page render before animation
    }, [pathname, setShowMobileMenu]);

    const overlayVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.5, ease: 'easeIn' } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.1 + i * 0.05, duration: 0.3 },
        }),
    };

    const handleClick = (href: string) => {
        if (href === pathname) {
            // Close the menu manually if it's the same page
            setTimeout(() => setShowMobileMenu(false), 10);
        } else {
            router.push(href); // triggers pathname change
        }
    };

    return (
        <AnimatePresence>
            {showMobileMenu && (
                <motion.div
                    className={styles.overlay}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={overlayVariants}
                >
                    <motion.nav className={styles.menu}>
                        {items.map((item, i) => (
                            <motion.div
                                key={item.href}
                                custom={i}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            >
                                <article className={styles.link} onClick={() => handleClick(item.href)}>
                                    {item.label}
                                </article>
                            </motion.div>
                        ))}
                    </motion.nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
