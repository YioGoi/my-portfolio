"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsMoon, BsSun } from "react-icons/bs";

import DownloadResumeButton from "@/components/DownloadResumeButton";
import Hamburger from "@/components/Hamburger";
import { useTheme } from "@/context/ThemeContext";

import styles from "./index.module.scss";

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  items: NavItem[];
}

export default function NavBar({ items }: NavBarProps) {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <div className={styles.navbarContent}>
        <div className={styles.hamburgerContainer}>
          <Hamburger />
        </div>

        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            {`<YD/>`}
            <span className="sr-only"> Home</span>
          </Link>
        </div>

        <div className={styles.navItems}>
          {items.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className={styles.actions}>
          <DownloadResumeButton />
          <div className={styles.themeToggle}>
            <button
              onClick={toggleTheme}
              className={styles.toggleBtn}
              type="button"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <BsSun aria-hidden="true" /> : <BsMoon aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
