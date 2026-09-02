import type { Metadata } from "next";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import NavBar from "@/components/NavBar";
import MobileNavMenu from "@/components/MobileNavMenu";
import InteractiveDotBackground from "@/components/InteractiveDotBackground";
import { navigation, profile } from "@/content/profile";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(profile.portfolio),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Senior Frontend Engineer specialising in React, TypeScript, Next.js rendering architecture, real-time systems, performance, accessibility, and technical leadership.",
  applicationName: `${profile.name} Portfolio`,
  openGraph: {
    type: "website",
    url: "/",
    title: `${profile.name} | ${profile.title}`,
    description:
      "React · TypeScript · Next.js · Frontend Architecture · Real-time Systems · Performance · Technical Leadership",
    siteName: `${profile.name} Portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.portfolio,
    jobTitle: profile.title,
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: [...profile.primaryStack, ...profile.focusAreas],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <ThemeProvider>
          <MobileMenuProvider>
            <InteractiveDotBackground />
            <NavBar items={[...navigation]} />
            <main id="main-content">{children}</main>
            <MobileNavMenu items={[...navigation]} />
          </MobileMenuProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
