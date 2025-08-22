"use client";

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { BsMoon, BsSun } from 'react-icons/bs';
import Link from "next/link";
import { isSmallLaptop } from '@/utilities/responsive';
import Hamburger from '@/components/Hamburger';
import DownloadResumeButton from '@/components/DownloadResumeButton';
import styles from "./index.module.scss";
import Tooltip from '../Tooltip';

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  items: NavItem[];
}

export default function NavBar({ items }: NavBarProps) {
  const { theme, toggleTheme } = useTheme();
  const [_isSmallLaptop, _setIsSmallLaptop] = useState<boolean | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Track component lifecycle
  useEffect(() => {
    setIsClient(true); // Mark as client-side
  }, []);

  useEffect(() => {
    let debounceTimer: NodeJS.Timeout;

    const handleResize = () => {
      // Clear existing timer
      clearTimeout(debounceTimer);
      
      // Debounce the resize handling
      debounceTimer = setTimeout(() => {
        const newIsSmallLaptop = isSmallLaptop();
        _setIsSmallLaptop(newIsSmallLaptop);
      }, 100); // 100ms debounce
    }

    // Initial check without debounce
    const initialIsSmallLaptop = isSmallLaptop();
    _setIsSmallLaptop(initialIsSmallLaptop);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(debounceTimer);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const ThemeSwitch = () => {
    return (
      <div className={styles.themeToggle}>
        <button 
          onClick={toggleTheme}
          className={styles.toggleBtn}
        >
          {theme === 'dark' ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    )
  }

  // Don't render until client-side hydration is complete
  if (!isClient || _isSmallLaptop === null) {
    return null;
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {_isSmallLaptop ? (
          <>
            <div className={styles.hamburgerContainer}>
              <Hamburger />
            </div>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoLink}>
                {`<YD/>`}
              </Link>
            </div>
            <div className={styles.actions}>
              <Tooltip
                content="Download CV"
                position="bottom"
                oneTime
                autoShow
                id="download-cv-tooltip"
                resumeTooltip={true}
              >
                <DownloadResumeButton />
              </Tooltip>
              <ThemeSwitch />
            </div>
          </>
        ) : (
          <>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoLink}>
                {`<YD/>`}
              </Link>
            </div>
            <div className={styles.navItems}>
              {items.map((item, idx) => (
                <Link key={`${item.href}-${idx}`} href={item.href ?? '/'} className={styles.navItem}>
                  {item.label}
                </Link>
              ))}
              <DownloadResumeButton />
              <ThemeSwitch />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}