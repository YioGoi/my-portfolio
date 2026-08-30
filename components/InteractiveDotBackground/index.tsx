'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

import styles from './index.module.scss';

const GRID_GAP = 34;
const INFLUENCE_RADIUS = 150;
const MAX_DISPLACEMENT = 20;

type Point = {
  x: number;
  y: number;
};

const palettes = {
  dark: {
    dot: 'rgba(241, 244, 248, 0.18)',
    activeDot: '241, 244, 248',
    glowInner: 'rgba(113, 148, 174, 0.2)',
    glowMiddle: 'rgba(82, 109, 130, 0.1)',
  },
  light: {
    dot: 'rgba(34, 40, 49, 0.18)',
    activeDot: '34, 40, 49',
    glowInner: 'rgba(255, 255, 255, 0.72)',
    glowMiddle: 'rgba(82, 109, 130, 0.1)',
  },
};

export default function InteractiveDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointerQuery = window.matchMedia('(pointer: fine) and (min-width: 769px)');
    const palette = palettes[theme];

    let width = window.innerWidth;
    let height = window.innerHeight;
    let points: Point[] = [];
    let animationFrame: number | null = null;
    let isRunning = false;

    const cursor = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      opacity: 0,
      targetOpacity: 0,
    };

    const createGrid = () => {
      const nextPoints: Point[] = [];
      const horizontalOffset = (width % GRID_GAP) / 2;
      const verticalOffset = (height % GRID_GAP) / 2;

      for (let y = verticalOffset; y <= height; y += GRID_GAP) {
        for (let x = horizontalOffset; x <= width; x += GRID_GAP) {
          nextPoints.push({ x, y });
        }
      }

      points = nextPoints;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      if (cursor.opacity > 0.002) {
        const glow = context.createRadialGradient(
          cursor.x,
          cursor.y,
          0,
          cursor.x,
          cursor.y,
          INFLUENCE_RADIUS * 1.2,
        );
        glow.addColorStop(0, palette.glowInner);
        glow.addColorStop(0.48, palette.glowMiddle);
        glow.addColorStop(1, 'rgba(82, 109, 130, 0)');

        context.save();
        context.globalAlpha = cursor.opacity;
        context.fillStyle = glow;
        context.fillRect(
          cursor.x - INFLUENCE_RADIUS * 1.2,
          cursor.y - INFLUENCE_RADIUS * 1.2,
          INFLUENCE_RADIUS * 2.4,
          INFLUENCE_RADIUS * 2.4,
        );
        context.restore();
      }

      context.beginPath();

      const activePoints: Array<Point & { strength: number }> = [];

      for (const point of points) {
        let drawX = point.x;
        let drawY = point.y;
        let strength = 0;

        if (cursor.opacity > 0.002) {
          const deltaX = point.x - cursor.x;
          const deltaY = point.y - cursor.y;
          const distance = Math.hypot(deltaX, deltaY);

          if (distance < INFLUENCE_RADIUS) {
            strength = (1 - distance / INFLUENCE_RADIUS) ** 2 * cursor.opacity;
            const safeDistance = Math.max(distance, 0.001);
            const displacement = strength * MAX_DISPLACEMENT;

            drawX += (deltaX / safeDistance) * displacement;
            drawY += (deltaY / safeDistance) * displacement;
            activePoints.push({ x: drawX, y: drawY, strength });
          }
        }

        context.moveTo(drawX + 1.05, drawY);
        context.arc(drawX, drawY, 1.05, 0, Math.PI * 2);
      }

      context.fillStyle = palette.dot;
      context.fill();

      for (const point of activePoints) {
        context.beginPath();
        context.arc(point.x, point.y, 1.05 + point.strength * 1.35, 0, Math.PI * 2);
        context.fillStyle = `rgba(${palette.activeDot}, ${0.12 + point.strength * 0.62})`;
        context.fill();
      }

    };

    const animate = () => {
      cursor.x += (cursor.targetX - cursor.x) * 0.16;
      cursor.y += (cursor.targetY - cursor.y) * 0.16;
      cursor.opacity += (cursor.targetOpacity - cursor.opacity) * 0.14;

      draw();

      const isMoving =
        Math.abs(cursor.targetX - cursor.x) > 0.05 ||
        Math.abs(cursor.targetY - cursor.y) > 0.05 ||
        Math.abs(cursor.targetOpacity - cursor.opacity) > 0.005;

      if (isMoving) {
        animationFrame = window.requestAnimationFrame(animate);
      } else {
        cursor.opacity = cursor.targetOpacity;
        isRunning = false;
        animationFrame = null;
        draw();
      }
    };

    const startAnimation = () => {
      if (isRunning || document.hidden) return;
      isRunning = true;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const isTouch = event.pointerType === 'touch';
      if ((!isTouch && !finePointerQuery.matches) || reducedMotionQuery.matches) return;

      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.targetX = event.clientX;
      cursor.targetY = event.clientY;
      cursor.targetOpacity = 1;
      startAnimation();
    };

    const handlePointerEnd = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        handlePointerLeave();
      }
    };

    const handlePointerLeave = () => {
      cursor.targetOpacity = 0;
      startAnimation();
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createGrid();
      draw();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationFrame !== null) {
          window.cancelAnimationFrame(animationFrame);
        }
        animationFrame = null;
        isRunning = false;
        return;
      }

      cursor.targetOpacity = 0;
      startAnimation();
    };

    const handleInteractionPreferenceChange = () => {
      if (!finePointerQuery.matches || reducedMotionQuery.matches) {
        handlePointerLeave();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('pointerdown', handlePointerMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerEnd, { passive: true });
    window.addEventListener('pointercancel', handlePointerEnd, { passive: true });
    window.addEventListener('blur', handlePointerLeave);
    document.documentElement.addEventListener('pointerleave', handlePointerLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    finePointerQuery.addEventListener('change', handleInteractionPreferenceChange);
    reducedMotionQuery.addEventListener('change', handleInteractionPreferenceChange);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointerdown', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerEnd);
      window.removeEventListener('pointercancel', handlePointerEnd);
      window.removeEventListener('blur', handlePointerLeave);
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      finePointerQuery.removeEventListener('change', handleInteractionPreferenceChange);
      reducedMotionQuery.removeEventListener('change', handleInteractionPreferenceChange);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.background} aria-hidden="true" />;
}
