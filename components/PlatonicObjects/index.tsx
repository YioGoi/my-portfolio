'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { usePathname } from 'next/navigation';
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState, type Ref } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Group, Quaternion, Raycaster, Vector2, Vector3 } from 'three';
import Tetrahedron from '../Tetrahedron';
import Cube from '../Cube';
import Octahedron from '../Octahedron';
import Dodecahedron from '../Dodecahedron';
import Icosahedron from '../Icosahedron';
import TriangularPrism from '../TriangularPrism';

import styles from './index.module.scss';

export type SolidOrientation = [number, number, number, number];

export interface PlatonicObjectsHandle {
  hitTest(clientX: number, clientY: number): boolean;
  getOrientation(): SolidOrientation;
  setOrientation(orientation: SolidOrientation): void;
  rotateFrom(start: SolidOrientation, deltaX: number, deltaY: number): void;
  setManipulating(active: boolean): void;
}

type SolidName = 'tetrahedron' | 'cube' | 'octahedron' | 'dodecahedron' | 'triangularPrism' | 'icosahedron';

interface SolidSceneProps {
  solid: SolidName;
  reducedMotion: boolean;
  handleRef: Ref<PlatonicObjectsHandle>;
  onManipulatingChange: (active: boolean) => void;
}

function SolidScene({ solid, reducedMotion, handleRef, onManipulatingChange }: SolidSceneProps) {
  const groupRef = useRef<Group>(null);
  const manipulatingRef = useRef(false);
  const { camera, gl, invalidate, setFrameloop } = useThree();
  const raycaster = useMemo(() => new Raycaster(), []);
  const pointer = useMemo(() => new Vector2(), []);
  const rotation = useMemo(() => ({
    yaw: new Quaternion(),
    pitch: new Quaternion(),
    start: new Quaternion(),
    horizontalAxis: new Vector3(0, 1, 0),
    verticalAxis: new Vector3(1, 0, 0),
  }), []);

  useEffect(() => {
    setFrameloop(reducedMotion || manipulatingRef.current ? 'demand' : 'always');
    invalidate();
  }, [reducedMotion, setFrameloop, invalidate]);

  useImperativeHandle(handleRef, () => ({
    hitTest(clientX, clientY) {
      const group = groupRef.current;
      if (!group) return false;

      const bounds = gl.domElement.getBoundingClientRect();
      if (!bounds.width || !bounds.height ||
          clientX < bounds.left || clientX > bounds.right ||
          clientY < bounds.top || clientY > bounds.bottom) return false;

      pointer.set(
        ((clientX - bounds.left) / bounds.width) * 2 - 1,
        -((clientY - bounds.top) / bounds.height) * 2 + 1,
      );
      group.updateWorldMatrix(true, true);
      camera.updateMatrixWorld();
      raycaster.setFromCamera(pointer, camera);
      return raycaster.intersectObject(group, true).length > 0;
    },
    getOrientation() {
      return groupRef.current?.quaternion.toArray() ?? [0, 0, 0, 1];
    },
    setOrientation(orientation) {
      groupRef.current?.quaternion.fromArray(orientation);
      invalidate();
    },
    rotateFrom(start, deltaX, deltaY) {
      const group = groupRef.current;
      if (!group) return;

      rotation.yaw.setFromAxisAngle(rotation.horizontalAxis, deltaX * 0.008);
      rotation.pitch.setFromAxisAngle(rotation.verticalAxis, deltaY * 0.008);
      rotation.start.fromArray(start);
      group.quaternion.copy(rotation.yaw).multiply(rotation.pitch).multiply(rotation.start);
      invalidate();
    },
    setManipulating(active) {
      manipulatingRef.current = active;
      onManipulatingChange(active);
      setFrameloop(reducedMotion || active ? 'demand' : 'always');
      invalidate();
    },
  }), [camera, gl, invalidate, onManipulatingChange, pointer, raycaster, reducedMotion, rotation, setFrameloop]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group || reducedMotion || manipulatingRef.current) return;

    const step = Math.min(delta, 0.05) * (solid === 'triangularPrism' ? 0.48 : 0.6);
    if (solid === 'cube' || solid === 'octahedron' || solid === 'icosahedron') {
      group.rotation.x += step;
    }
    if (solid !== 'octahedron') group.rotation.y += step;
  });

  return (
    <group ref={groupRef}>
      {solid === 'tetrahedron' && <Tetrahedron autoRotate={false} />}
      {solid === 'cube' && <Cube autoRotate={false} />}
      {solid === 'octahedron' && <Octahedron autoRotate={false} />}
      {solid === 'dodecahedron' && <Dodecahedron autoRotate={false} />}
      {solid === 'triangularPrism' && <TriangularPrism autoRotate={false} />}
      {solid === 'icosahedron' && <Icosahedron autoRotate={false} />}
    </group>
  );
}

const PlatonicObjects = forwardRef<PlatonicObjectsHandle>(function PlatonicObjects(_, ref) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [manipulating, setManipulating] = useState(false);

  const solid: SolidName = pathname === '/about' ? 'cube'
    : pathname === '/experience' ? 'octahedron'
    : pathname === '/skills' ? 'tetrahedron'
    : pathname === '/education' ? 'triangularPrism'
    : pathname === '/contact' ? 'icosahedron'
    : 'dodecahedron';

  const solidName = solid === 'triangularPrism' ? 'triangular prism' : solid;

  return (
    <Canvas
      className={styles.canvas}
      style={{ pointerEvents: 'none' }}
      frameloop={reducedMotion || manipulating ? 'demand' : 'always'}
      role="img"
      aria-label={`Wireframe ${solidName}`}
      fallback={<span>Wireframe {solidName}</span>}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <SolidScene
        solid={solid}
        reducedMotion={Boolean(reducedMotion)}
        handleRef={ref}
        onManipulatingChange={setManipulating}
      />
    </Canvas>
  );
});

export default PlatonicObjects;
