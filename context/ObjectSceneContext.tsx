'use client';

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore } from 'react';
import type { ReactNode } from 'react';
import FloatingPlatonicObjects from '@/components/FloatingPlatonicObjects';

const desktopPointerQuery = '(min-width: 769px) and (pointer: fine)';
const subscribeToDesktopPointer = (onChange: () => void) => {
  const query = window.matchMedia(desktopPointerQuery);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
};
const getDesktopPointer = () => window.matchMedia(desktopPointerQuery).matches;
const getServerPointer = () => false;

interface ObjectSceneState {
  expanded: boolean;
  interactive: boolean;
  registerAnchor: (element: HTMLDivElement | null) => void;
}

const ObjectSceneContext = createContext<ObjectSceneState | null>(null);

export function ObjectSceneProvider({ children }: { children: ReactNode }) {
  const [anchor, setAnchor] = useState<HTMLDivElement | null>(null);
  const [expanded, setExpanded] = useState(false);
  const interactive = useSyncExternalStore(subscribeToDesktopPointer, getDesktopPointer, getServerPointer);
  const registerAnchor = useCallback((element: HTMLDivElement | null) => setAnchor(element), []);
  const expandContent = useCallback(() => setExpanded(true), []);
  const restoreLayout = useCallback(() => setExpanded(false), []);
  const value = useMemo(() => ({
    expanded: expanded && interactive,
    interactive,
    registerAnchor,
  }), [expanded, interactive, registerAnchor]);

  return (
    <ObjectSceneContext.Provider value={value}>
      {children}
      <FloatingPlatonicObjects anchor={anchor} onMoveStart={expandContent} onReset={restoreLayout} />
    </ObjectSceneContext.Provider>
  );
}

export function useObjectScene() {
  const scene = useContext(ObjectSceneContext);
  if (!scene) throw new Error('useObjectScene must be used within ObjectSceneProvider');
  return scene;
}
