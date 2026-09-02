'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { useMobileMenu } from '@/context/MobileMenuContext';

import styles from './index.module.scss';

interface NavItem {
  label: string;
  href: string;
}

export default function MobileNavMenu({ items }: { items: NavItem[] }) {
  const { showMobileMenu, setShowMobileMenu } = useMobileMenu();

  const overlayVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.06 + index * 0.04, duration: 0.2 },
    }),
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
          <motion.nav id="mobile-navigation" className={styles.menu} aria-label="Mobile navigation">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Link
                  className={styles.link}
                  href={item.href}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
