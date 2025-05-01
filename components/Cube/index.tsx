'use client';

import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Cube = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 2]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={`${theme === 'dark' ? 'white' : 'black'}`} transparent opacity={0.8} wireframe />
    </mesh>
  );
};

export default Cube;
