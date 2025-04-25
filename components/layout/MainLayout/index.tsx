'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import SpaceBackgroundFallback from '../../three/SpaceBackgroundFallback';
import styles from './index.module.scss';

// Dynamically import SpaceBackground with ssr disabled
const SpaceBackground = dynamic(() => import('../../three/SpaceBackground'), {
  ssr: false,
  loading: () => <SpaceBackgroundFallback />
});

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.mainContainer}>
      <Suspense fallback={<SpaceBackgroundFallback />}>
        <SpaceBackground />
      </Suspense>
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
}