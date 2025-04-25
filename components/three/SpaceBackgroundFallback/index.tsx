import React from 'react';
import styles from './index.module.scss';

export default function SpaceBackgroundFallback() {
  return (
    <div className={styles.spaceBackground}>
      {/* Simple dark gradient background as fallback */}
    </div>
  );
}