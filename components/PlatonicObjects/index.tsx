// components/PlatonicObjects.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { OrbitControls } from '@react-three/drei';
import Tetrahedron from '../Tetrahedron';
import Cube from '../Cube';
import Octahedron from '../Octahedron';
import Dodecahedron from '../Dodecahedron';
import Icosahedron from '../Icosahedron';
import TriangularPrism from '../TriangularPrism';
import { isTablet } from '@/utilities/responsive';

import styles from './index.module.scss';

const PlatonicObjects = () => {
  const pathname = usePathname();

  // Determine which solid to display based on the current route
  const solid = useMemo(() => {
    switch (pathname) {
      case '/':
        return 'dodecahedron';
      case '/about':
        return 'cube';
      case '/experience':
        return 'octahedron';
      case '/skills':
        return 'tetrahedron';
      case '/education':
        return 'triangularPrism';
      case '/contact':
        return 'icosahedron';
      default:
        return 'dodecahedron';
    }
  }, [pathname]);

  // Map solid names to their corresponding geometry components
  const SolidComponent = useMemo(() => {
    switch (solid) {
      case 'tetrahedron':
        return <Tetrahedron />;
      case 'cube':
        return <Cube />;
      case 'octahedron':
        return <Octahedron />;
      case 'dodecahedron':
        return <Dodecahedron />;
      case 'triangularPrism':
        return <TriangularPrism />;
      case 'icosahedron':
        return <Icosahedron />;
      default:
        return <Tetrahedron />;
    }
  }, [solid]);

  return (
    <Canvas
      style={{ 
        width: `${isTablet() ? '250px' : '300px'}`, 
        height: '400px',
      }}
      className={styles.canvas}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} />
      {SolidComponent}
    </Canvas>
  );
};

export default PlatonicObjects;
