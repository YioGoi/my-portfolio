'use client';

import { motion, useMotionValue } from 'framer-motion';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';
import { FiEye, FiEyeOff, FiRotateCcw } from 'react-icons/fi';

import PlatonicObjects from '@/components/PlatonicObjects';
import type { PlatonicObjectsHandle, SolidOrientation } from '@/components/PlatonicObjects';

import styles from './index.module.scss';

interface FloatingPlatonicObjectsProps {
  anchor: HTMLElement | null;
  onMoveStart: () => void;
  onReset: () => void;
}

type Position = { x: number; y: number };
type Gesture = {
  pointerId: number;
  origin: Position;
  position: Position;
  orientation: SolidOrientation;
  rotate: boolean;
  moved: boolean;
};

const viewportQuery = '(min-width: 769px) and (pointer: fine)';
const subscribeToViewport = (onChange: () => void) => {
  const query = window.matchMedia(viewportQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};
const getDesktopViewport = () => window.matchMedia(viewportQuery).matches;
const getServerViewport = () => false;

function isCovered(clientX: number, clientY: number, layer: HTMLElement) {
  const topElement = document.elementsFromPoint(clientX, clientY)[0];
  if (!topElement || layer.contains(topElement)) return true;

  for (let element: Element | null = topElement; element; element = element.parentElement) {
    if (element.matches('[role="dialog"], [aria-modal="true"], [data-object-interaction-blocked], nav[aria-label="Primary navigation"], #mobile-navigation')) {
      return true;
    }
    const style = getComputedStyle(element);
    if (style.position !== 'static' && Number.parseInt(style.zIndex, 10) > 2) return true;
  }
  return false;
}

export default function FloatingPlatonicObjects({
  anchor,
  onMoveStart,
  onReset,
}: FloatingPlatonicObjectsProps) {
  const desktop = useSyncExternalStore(subscribeToViewport, getDesktopViewport, getServerViewport);
  const pathname = usePathname();
  const hasAnchor = anchor !== null;
  const layerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const solidRef = useRef<PlatonicObjectsHandle>(null);
  const gestureRef = useRef<Gesture | null>(null);
  const detachedRef = useRef(false);
  const anchorRef = useRef(anchor);
  const showButtonRef = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pointerFocus, setPointerFocus] = useState(false);
  const [gestureMode, setGestureMode] = useState<'move' | 'rotate' | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const instructionsId = useId();

  useEffect(() => {
    anchorRef.current = anchor;
  }, [anchor]);

  const clearCursor = useCallback(() => {
    document.documentElement.classList.remove(styles.grabCursor, styles.activeCursor);
  }, []);

  const clampPosition = useCallback((position: Position): Position => {
    const panel = panelRef.current;
    const width = panel?.offsetWidth ?? 280;
    const height = panel?.offsetHeight ?? 320;
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;
    const header = document.querySelector('nav[aria-label="Primary navigation"]');
    const headerBottom = header?.getBoundingClientRect().bottom ?? 70;
    const top = Math.min(Math.max(16, headerBottom + 16), Math.max(16, viewportHeight - height - 16));
    return {
      x: Math.max(16, Math.min(position.x, viewportWidth - width - 16)),
      y: Math.max(top, Math.min(position.y, viewportHeight - height - 16)),
    };
  }, []);

  const place = useCallback((position: Position) => {
    const next = clampPosition(position);
    x.set(next.x);
    y.set(next.y);
  }, [clampPosition, x, y]);

  const trackAnchor = useCallback(() => {
    if (detachedRef.current || gestureRef.current) return;
    const bounds = anchorRef.current?.getBoundingClientRect();
    if (bounds) place({ x: bounds.left, y: bounds.top });
  }, [place]);

  const finishGesture = useCallback((cancelled: boolean) => {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    if (!gesture) return;

    if (cancelled) {
      if (gesture.rotate) solidRef.current?.setOrientation(gesture.orientation);
      else place(gesture.position);
    }
    solidRef.current?.setManipulating(false);
    const panel = panelRef.current;
    if (panel?.hasPointerCapture(gesture.pointerId)) panel.releasePointerCapture(gesture.pointerId);
    setGestureMode(null);
    setHovered(false);
    clearCursor();
    if (cancelled) setAnnouncement('Object gesture cancelled.');
  }, [clearCursor, place]);

  const reset = useCallback(() => {
    finishGesture(true);
    detachedRef.current = false;
    onReset();
    setHidden(false);
    setAnnouncement('Object returned to the split layout.');
    requestAnimationFrame(() => {
      trackAnchor();
      panelRef.current?.focus({ preventScroll: true });
    });
  }, [finishGesture, onReset, trackAnchor]);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      if (!getDesktopViewport()) {
        finishGesture(true);
        clearCursor();
        if (detachedRef.current || hidden) {
          detachedRef.current = false;
          onReset();
        }
        x.set(0);
        y.set(0);
        setHidden(false);
        return;
      }
      if (!anchor || hidden) return;
      if (detachedRef.current) place({ x: x.get(), y: y.get() });
      else trackAnchor();
    };
    const scheduleMeasure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    const query = window.matchMedia(viewportQuery);
    const observer = new ResizeObserver(scheduleMeasure);
    if (anchor) observer.observe(anchor);
    if (panelRef.current) observer.observe(panelRef.current);
    scheduleMeasure();
    query.addEventListener('change', scheduleMeasure);
    window.addEventListener('resize', scheduleMeasure);
    window.addEventListener('scroll', scheduleMeasure, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      query.removeEventListener('change', scheduleMeasure);
      window.removeEventListener('resize', scheduleMeasure);
      window.removeEventListener('scroll', scheduleMeasure);
    };
  }, [anchor, desktop, hidden, clearCursor, finishGesture, onReset, place, trackAnchor, x, y]);

  useEffect(() => {
    if (!desktop || hidden || !hasAnchor) return;

    let suppressClick: { x: number; y: number; until: number } | null = null;
    let ownedPointerId: number | null = null;
    let hoverWithinPanel = false;
    const isObjectAt = (clientX: number, clientY: number) => {
      const layer = layerRef.current;
      return Boolean(layer && !isCovered(clientX, clientY, layer) && solidRef.current?.hitTest(clientX, clientY));
    };

    const pointerDown = (event: PointerEvent) => {
      if (gestureRef.current) return;
      ownedPointerId = null;
      suppressClick = null;
      if (event.button !== 0 || !event.isPrimary || !isObjectAt(event.clientX, event.clientY)) return;
      const solid = solidRef.current;
      const panel = panelRef.current;
      if (!solid || !panel) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      panel.focus({ preventScroll: true });
      setPointerFocus(true);
      ownedPointerId = event.pointerId;
      gestureRef.current = {
        pointerId: event.pointerId,
        origin: { x: event.clientX, y: event.clientY },
        position: { x: x.get(), y: y.get() },
        orientation: solid.getOrientation(),
        rotate: event.shiftKey,
        moved: false,
      };
      solid.setManipulating(true);
      panel.setPointerCapture(event.pointerId);
      setGestureMode(event.shiftKey ? 'rotate' : 'move');
      document.documentElement.classList.remove(styles.grabCursor);
      document.documentElement.classList.add(styles.activeCursor);
    };

    const pointerMove = (event: PointerEvent) => {
      const gesture = gestureRef.current;
      if (!gesture) {
        const overObject = isObjectAt(event.clientX, event.clientY);
        const bounds = panelRef.current?.getBoundingClientRect();
        const inPanel = Boolean(bounds && event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom);
        hoverWithinPanel = overObject || (hoverWithinPanel && inPanel);
        setHovered(hoverWithinPanel);
        document.documentElement.classList.toggle(styles.grabCursor, overObject);
        return;
      }
      if (event.pointerId !== gesture.pointerId) return;
      if ((event.buttons & 1) === 0) {
        finishGesture(false);
        return;
      }
      event.preventDefault();
      event.stopImmediatePropagation();
      const dx = event.clientX - gesture.origin.x;
      const dy = event.clientY - gesture.origin.y;
      if (gesture.rotate) {
        solidRef.current?.rotateFrom(gesture.orientation, dx, dy);
        return;
      }
      if (!gesture.moved && Math.hypot(dx, dy) < 8) return;
      if (!gesture.moved) {
        gesture.moved = true;
        if (!detachedRef.current) {
          detachedRef.current = true;
          onMoveStart();
        }
      }
      place({ x: gesture.position.x + dx, y: gesture.position.y + dy });
    };

    const pointerUp = (event: PointerEvent) => {
      if (ownedPointerId !== event.pointerId) return;
      ownedPointerId = null;
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressClick = { x: event.clientX, y: event.clientY, until: performance.now() + 500 };
      finishGesture(false);
    };
    // Losing browser input ends the gesture at its last valid position.
    // Only an explicit cancellation (Escape/reset/navigation) rolls it back.
    const pointerInterrupted = (event: PointerEvent) => {
      if (gestureRef.current?.pointerId === event.pointerId) finishGesture(false);
    };
    const lostPointerCapture = (event: PointerEvent) => {
      if (event.target === panelRef.current) pointerInterrupted(event);
    };
    const blur = () => finishGesture(false);
    const cancel = () => finishGesture(true);
    const keyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && gestureRef.current) {
        event.preventDefault();
        cancel();
      }
    };
    const click = (event: MouseEvent) => {
      if (!suppressClick) return;
      const { x: clickX, y: clickY, until } = suppressClick;
      suppressClick = null;
      if (performance.now() <= until && Math.abs(event.clientX - clickX) < 4 && Math.abs(event.clientY - clickY) < 4) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };

    document.addEventListener('pointerdown', pointerDown, true);
    document.addEventListener('pointermove', pointerMove, true);
    document.addEventListener('pointerup', pointerUp, true);
    document.addEventListener('pointercancel', pointerInterrupted, true);
    document.addEventListener('lostpointercapture', lostPointerCapture, true);
    document.addEventListener('keydown', keyDown, true);
    document.addEventListener('click', click, true);
    window.addEventListener('blur', blur);
    return () => {
      document.removeEventListener('pointerdown', pointerDown, true);
      document.removeEventListener('pointermove', pointerMove, true);
      document.removeEventListener('pointerup', pointerUp, true);
      document.removeEventListener('pointercancel', pointerInterrupted, true);
      document.removeEventListener('lostpointercapture', lostPointerCapture, true);
      document.removeEventListener('keydown', keyDown, true);
      document.removeEventListener('click', click, true);
      window.removeEventListener('blur', blur);
      finishGesture(true);
      setHovered(false);
      setPointerFocus(false);
      clearCursor();
    };
  }, [desktop, hasAnchor, hidden, pathname, clearCursor, finishGesture, onMoveStart, place, x, y]);

  const moveWithKeyboard = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;
    // Modifier keys alone belong to the pointer gesture, not keyboard navigation.
    if (!['Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) setPointerFocus(false);
    if (event.key === 'Home') {
      event.preventDefault();
      reset();
      return;
    }
    if (event.key === 'Escape') {
      finishGesture(true);
      return;
    }
    const step = event.shiftKey ? 40 : 10;
    const deltas: Record<string, Position> = {
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 },
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
    };
    const delta = deltas[event.key];
    if (!delta || gestureRef.current) return;
    event.preventDefault();
    if (!detachedRef.current) {
      detachedRef.current = true;
      onMoveStart();
    }
    place({ x: x.get() + delta.x, y: y.get() + delta.y });
    setAnnouncement(`Object position: ${Math.round(x.get())} pixels from the left, ${Math.round(y.get())} pixels from the top.`);
  };

  if (!desktop || !hasAnchor) return null;

  return createPortal(
    <div className={styles.layer} ref={layerRef}>
      {hidden ? (
        <button
          type="button"
          className={styles.showButton}
          ref={showButtonRef}
          onClick={(event) => {
            setPointerFocus(event.detail > 0);
            if (!detachedRef.current) {
              reset();
              return;
            }
            setHidden(false);
            requestAnimationFrame(() => panelRef.current?.focus({ preventScroll: true }));
          }}
        >
          <FiEye aria-hidden="true" /> Show object
        </button>
      ) : (
        <motion.div
          ref={panelRef}
          className={styles.panel}
          style={{ x, y }}
          data-hovered={hovered}
          data-pointer-focus={pointerFocus}
          data-gesture={gestureMode ?? undefined}
          role="group"
          aria-label="3D object"
          aria-describedby={instructionsId}
          tabIndex={0}
          onKeyDown={moveWithKeyboard}
          onBlur={(event) => {
            if (event.target === event.currentTarget) setPointerFocus(false);
          }}
        >
          <div className={styles.objectBody}>
            <PlatonicObjects ref={solidRef} />
          </div>
          <div className={styles.controls}>
            <span className={styles.hint}>Drag to move · Shift+drag to rotate</span>
            <button
              type="button"
              onClick={(event) => {
                setPointerFocus(event.detail > 0);
                reset();
              }}
              aria-label="Reset object and restore split view"
              title="Reset object"
            >
              <FiRotateCcw aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Hide object"
              title="Hide object"
              onClick={() => {
                finishGesture(true);
                onMoveStart();
                setHidden(true);
                setAnnouncement('Object hidden. Content expanded.');
                requestAnimationFrame(() => showButtonRef.current?.focus({ preventScroll: true }));
              }}
            >
              <FiEyeOff aria-hidden="true" />
            </button>
          </div>
          <p id={instructionsId} className="sr-only">
            Drag to move. Hold Shift before dragging to rotate. Arrow keys move the object;
            Shift and arrow keys move farther. Home resets the split layout. Escape cancels a gesture.
          </p>
        </motion.div>
      )}
      <span className="sr-only" role="status">{announcement}</span>
    </div>,
    document.body,
  );
}
