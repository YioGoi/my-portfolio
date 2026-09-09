'use client';

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { FiRotateCw, FiX } from 'react-icons/fi';

import styles from './index.module.scss';

const storageKey = 'portfolio:mobile-rotation-hint-seen';
const mobileQuery = '(max-width: 768px), (pointer: coarse)';
let shownThisSession = false;

function hasSeenHint() {
  if (shownThisSession) return true;
  try {
    return window.localStorage.getItem(storageKey) === 'true';
  } catch {
    return false;
  }
}

function rememberHint() {
  shownThisSession = true;
  try {
    window.localStorage.setItem(storageKey, 'true');
  } catch {
    // The in-memory flag still prevents repeats during client-side navigation.
  }
}

interface MobileRotationHintProps {
  sceneRef: RefObject<HTMLDivElement | null>;
  ready: boolean;
}

export default function MobileRotationHint({ sceneRef, ready }: MobileRotationHintProps) {
  const [visible, setVisible] = useState(false);
  const hintRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    if (hintRef.current?.contains(document.activeElement)) {
      sceneRef.current?.focus({ preventScroll: true });
    }
    setVisible(false);
  }, [sceneRef]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene || !ready) return;

    const media = window.matchMedia(mobileQuery);
    let active = true;
    let inView = false;
    let hideTimer: number | undefined;
    const show = () => {
      // The touch scene also briefly mounts during desktop hydration.
      if (!active || !media.matches || !inView || document.hidden || hasSeenHint()) return;
      rememberHint();
      setVisible(true);
      hideTimer = window.setTimeout(dismiss, 5000);
    };
    // Start only once the scene is on screen, including visits to deep links.
    // The asynchronous observer also avoids consuming the hint in StrictMode cleanup.
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting && entry.intersectionRatio >= 0.5;
      show();
    }, { threshold: 0.5 });
    observer.observe(scene);
    document.addEventListener('visibilitychange', show);
    media.addEventListener('change', show);

    return () => {
      active = false;
      observer.disconnect();
      window.clearTimeout(hideTimer);
      document.removeEventListener('visibilitychange', show);
      media.removeEventListener('change', show);
    };
  }, [dismiss, ready, sceneRef]);

  if (!visible) return null;

  return (
    <div className={styles.hintPosition}>
      <div className={styles.hint} ref={hintRef} role="note" aria-label="Rotation tip" data-object-interaction-blocked>
        <FiRotateCw className={styles.hintIcon} aria-hidden="true" />
        <span>Swipe to rotate</span>
        <button type="button" className={styles.dismissHint} onClick={dismiss} aria-label="Dismiss rotation tip">
          <FiX aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
