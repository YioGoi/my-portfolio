import type { Metadata } from "next";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import NavBar from "@/components/NavBar";
import MobileNavMenu from "@/components/MobileNavMenu";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Yiğit Doğan – Portfolio",
  description: "Personal portfolio of Yiğit Doğan",
};

const navItems = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MobileMenuProvider>
            <NavBar items={navItems} />
            <main style={{ paddingTop: "80px" }}>{children}</main>
            <MobileNavMenu items={navItems} />
          </MobileMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}