'use client';

import { useMobileMenu } from '@/context/MobileMenuContext';
import styles from './index.module.scss';

export default function Hamburger() {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenu();

    return (
        <article
            className={`${styles.hamburger} ${showMobileMenu ? styles.open : ''}`}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label="Toggle menu"
        >
            <span />
            <span />
            <span />
        </article>
    );
}
