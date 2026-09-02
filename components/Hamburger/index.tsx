'use client';

import { useMobileMenu } from '@/context/MobileMenuContext';
import styles from './index.module.scss';

export default function Hamburger() {
    const { showMobileMenu, setShowMobileMenu } = useMobileMenu();

    return (
        <button
            type="button"
            className={`${styles.hamburger} ${showMobileMenu ? styles.open : ''}`}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMobileMenu}
            aria-controls="mobile-navigation"
        >
            <span />
            <span />
            <span />
        </button>
    );
}
