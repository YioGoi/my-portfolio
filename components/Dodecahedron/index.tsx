'use client';

import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Dodecahedron = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={`${theme === 'dark' ? 'white' : 'black'}`} transparent opacity={0.8} wireframe />
    </mesh>
  );
};

export default Dodecahedron;
