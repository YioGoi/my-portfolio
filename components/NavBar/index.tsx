"use client";

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { BsMoon, BsSun } from 'react-icons/bs';
import Link from "next/link";
import Image from 'next/image';
import { isTablet } from '@/utilities/responsive';
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
  const [_isTablet, _setIsTablet] = useState<boolean | null>(null);

  const isDarkMode = theme === 'dark';
  const logoImage = isDarkMode ? '/images/logo-white.png' : '/images/logo.png';

  useEffect(() => {
    const handleResize = () => {
      _setIsTablet(isTablet());
    }
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [_isTablet]);

  const ThemeSwitch = () => {
    return (
      <div className={styles.themeToggle}>
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {theme === 'dark' ? <BsSun /> : <BsMoon />}
        </button>
      </div>
    )
  }

  if (_isTablet === null) return null; // Prevent rendering until the state is set

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        {_isTablet ? (
          <>
            <div className={styles.hamburgerContainer}>
              <Hamburger />
            </div>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src={logoImage}
                  alt="Flower of Life Logo"
                  width={60}
                  height={60}
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <div className={styles.actions}>
              <Tooltip content="Download CV" position="left">
                <DownloadResumeButton />
              </Tooltip>
              <ThemeSwitch />
            </div>
          </>
        ) : (
          <>
            <div className={styles.logo}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src={logoImage}
                  alt="Flower of Life Logo"
                  width={60}
                  height={60}
                  className={styles.logoImage}
                />
                Yiğit Doğan
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