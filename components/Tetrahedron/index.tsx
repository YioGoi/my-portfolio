// components/solids/Tetrahedron.tsx
'use client';

import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Tetrahedron = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={`${theme === 'dark' ? 'white' : 'black'}`} transparent opacity={1} wireframe  />
    </mesh>
  );
};

export default Tetrahedron;
