'use client';

import { useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useFrame } from '@react-three/fiber';
import { BufferGeometry, Float32BufferAttribute, Mesh } from 'three';

const TriangularPrism = () => {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();

  // Vertices for a simple triangular prism
  const vertices = [
    // Front triangle
    -1, -1,  1,  // 0
     1, -1,  1,  // 1
     0,  1,  1,  // 2

    // Back triangle
    -1, -1, -1,  // 3
     1, -1, -1,  // 4
     0,  1, -1,  // 5
  ];

  const indices = [
    // Front face
    0, 1, 2,
    // Back face
    3, 5, 4,
    // Bottom face
    0, 3, 1,
    1, 3, 4,
    // Right rectangle face
    1, 4, 2,
    2, 4, 5,
    // Left rectangle face
    2, 5, 0,
    0, 5, 3,
  ];

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={[1, 1, 1]}>
      <meshStandardMaterial color={`${theme === 'dark' ? 'white' : 'black'}`} transparent opacity={0.9} wireframe />
    </mesh>
  );
};

export default TriangularPrism;
