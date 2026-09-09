'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

import PlatonicObjects from '@/components/PlatonicObjects';
import type { PlatonicObjectsHandle, SolidOrientation } from '@/components/PlatonicObjects';

import MobileRotationHint from './MobileRotationHint';
import styles from './index.module.scss';

type TouchRotation = {
  identifier: number;
  x: number;
  y: number;
  orientation: SolidOrientation;
  solid: PlatonicObjectsHandle;
};

function hasForegroundControl(clientX: number, clientY: number) {
  const topElement = document.elementsFromPoint(clientX, clientY)[0];
  if (!topElement) return true;

  for (let element: Element | null = topElement; element; element = element.parentElement) {
    if (element.matches(
      'a[href], button, input, select, textarea, summary, [role="button"], [role="link"], [role="dialog"], [aria-modal="true"], [contenteditable="true"], [data-object-interaction-blocked], nav[aria-label="Primary navigation"], #mobile-navigation',
    )) return true;

    const style = getComputedStyle(element);
    if (style.position !== 'static' && Number.parseInt(style.zIndex, 10) > 0) return true;
  }
  return false;
}

export default function TouchRotatablePlatonicObjects() {
  const pathname = usePathname();
  const sceneRef = useRef<HTMLDivElement>(null);
  const solidRef = useRef<PlatonicObjectsHandle>(null);
  const rotationRef = useRef<TouchRotation | null>(null);
  const ignoreUntilLiftRef = useRef(false);
  const touchCountRef = useRef(0);
  const [rotating, setRotating] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);
  const instructionsId = useId();
  const setSolid = useCallback((solid: PlatonicObjectsHandle | null) => {
    solidRef.current = solid;
    setSceneReady(Boolean(solid));
  }, []);

  const finishRotation = useCallback(() => {
    const rotation = rotationRef.current;
    rotationRef.current = null;
    if (!rotation) return;
    rotation.solid.setManipulating(false);
    setRotating(false);
  }, []);

  useEffect(() => {
    const interrupt = () => {
      finishRotation();
      ignoreUntilLiftRef.current = touchCountRef.current > 0;
    };

    const touchStart = (event: TouchEvent) => {
      touchCountRef.current = event.touches.length;
      // A fresh sequence also recovers if the previous touch ended outside the window.
      if (event.touches.length === event.changedTouches.length) {
        finishRotation();
        ignoreUntilLiftRef.current = false;
      }
      if (event.touches.length !== 1) {
        finishRotation();
        ignoreUntilLiftRef.current = true;
        return;
      }
      if (ignoreUntilLiftRef.current) return;
      const touch = event.touches.item(0);
      const solid = solidRef.current;
      if (!event.cancelable || !touch || !solid ||
          hasForegroundControl(touch.clientX, touch.clientY) ||
          !solid.hitTest(touch.clientX, touch.clientY)) {
        ignoreUntilLiftRef.current = true;
        return;
      }

      event.preventDefault();
      rotationRef.current = {
        identifier: touch.identifier,
        x: touch.clientX,
        y: touch.clientY,
        orientation: solid.getOrientation(),
        solid,
      };
      solid.setManipulating(true);
      setRotating(true);
    };

    const touchMove = (event: TouchEvent) => {
      touchCountRef.current = event.touches.length;
      if (event.touches.length !== 1) {
        interrupt();
        return;
      }
      const rotation = rotationRef.current;
      if (!rotation) return;
      const touch = event.touches.item(0);
      if (!event.cancelable || !touch || touch.identifier !== rotation.identifier) {
        interrupt();
        return;
      }
      event.preventDefault();
      rotation.solid.rotateFrom(
        rotation.orientation,
        touch.clientX - rotation.x,
        touch.clientY - rotation.y,
      );
    };

    const touchEnd = (event: TouchEvent) => {
      touchCountRef.current = event.touches.length;
      if (event.touches.length === 0) {
        finishRotation();
        ignoreUntilLiftRef.current = false;
        return;
      }
      const rotation = rotationRef.current;
      if (rotation && !Array.from(event.touches).some(touch => touch.identifier === rotation.identifier)) {
        interrupt();
      }
    };

    const touchCancel = (event: TouchEvent) => {
      touchCountRef.current = event.touches.length;
      interrupt();
    };
    const visibilityChange = () => {
      if (document.hidden) interrupt();
    };

    document.addEventListener('touchstart', touchStart, { capture: true, passive: false });
    document.addEventListener('touchmove', touchMove, { capture: true, passive: false });
    document.addEventListener('touchend', touchEnd, true);
    document.addEventListener('touchcancel', touchCancel, true);
    document.addEventListener('visibilitychange', visibilityChange);
    window.addEventListener('blur', interrupt);
    window.addEventListener('resize', interrupt);
    return () => {
      document.removeEventListener('touchstart', touchStart, true);
      document.removeEventListener('touchmove', touchMove, true);
      document.removeEventListener('touchend', touchEnd, true);
      document.removeEventListener('touchcancel', touchCancel, true);
      document.removeEventListener('visibilitychange', visibilityChange);
      window.removeEventListener('blur', interrupt);
      window.removeEventListener('resize', interrupt);
      interrupt();
    };
  }, [finishRotation, pathname]);

  const rotateWithKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || rotationRef.current) return;
    const solid = solidRef.current;
    if (!solid) return;
    const deltas: Record<string, [number, number]> = {
      ArrowLeft: [-20, 0],
      ArrowRight: [20, 0],
      ArrowUp: [0, -20],
      ArrowDown: [0, 20],
    };
    const delta = deltas[event.key];
    if (!delta) return;
    event.preventDefault();
    const orientation = solid.getOrientation();
    solid.setManipulating(true);
    solid.rotateFrom(orientation, delta[0], delta[1]);
    solid.setManipulating(false);
  };

  return (
    <div
      className={styles.scene}
      ref={sceneRef}
      data-touch-rotatable
      data-touch-rotating={rotating}
      role="group"
      aria-label="Rotatable 3D object"
      aria-describedby={instructionsId}
      tabIndex={0}
      onKeyDown={rotateWithKeyboard}
    >
      <PlatonicObjects ref={setSolid} />
      <p className="sr-only" id={instructionsId}>
        Swipe on the object to rotate. Use the arrow keys to rotate with a keyboard.
      </p>
      <MobileRotationHint sceneRef={sceneRef} ready={sceneReady} />
    </div>
  );
}
