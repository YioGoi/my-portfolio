import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';

const SpaceBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    // Check if container is available
    if (!container) {
      return;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xefd1b5);
    scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 10000);
    camera.position.set(100, 800, -800);
    camera.lookAt(new THREE.Vector3(-100, 810, -800));

    // Generate terrain data
    const worldWidth = 256;
    const worldDepth = 256;
    const data = generateHeight(worldWidth, worldDepth);

    // Geometry
    const geometry = new THREE.PlaneGeometry(7500, 7500, worldWidth - 1, worldDepth - 1);
    geometry.rotateX(-Math.PI / 2);
    const vertices = geometry.attributes.position.array;
    for (let i = 0, j = 0; i < vertices.length; i += 3, j++) {
      vertices[i + 1] = data[j] * 10;
    }

    // Texture
    const texture = new THREE.CanvasTexture(generateTexture(data, worldWidth, worldDepth));
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;

    // Mesh
    const mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({ map: texture })
    );
    scene.add(mesh);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new FirstPersonControls(camera, renderer.domElement);
    controls.movementSpeed = 150;
    controls.lookSpeed = 0.1;

    // Stats
    const stats = new Stats();
    container.appendChild(stats.dom);

    const clock = new THREE.Clock();

    // Handle resize
    function onWindowResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      controls.handleResize();
    }
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);
      controls.update(clock.getDelta());
      renderer.render(scene, camera);
      stats.update();
    }
    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
      container.removeChild(stats.dom);
      geometry.dispose();
      texture.dispose();
      mesh.material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

function generateHeight(width: number, height: number) {
  let seed = Math.PI / 4;
  function random() {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }
  const size = width * height;
  const data = new Uint8Array(size);
  const perlin = new ImprovedNoise();
  const z = random() * 100;
  let quality = 1;

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < size; i++) {
      const x = i % width;
      const y = Math.floor(i / width);
      data[i] += Math.abs(perlin.noise(x / quality, y / quality, z) * quality * 1.75);
    }
    quality *= 5;
  }

  return data;
}

function generateTexture(data: Uint8Array<ArrayBuffer> | number[], width: number, height: number) {
  const vector3 = new THREE.Vector3();
  const sun = new THREE.Vector3(1, 1, 1).normalize();

  // Base canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  if (!context) {
    return;
  }
  context.fillStyle = '#000';
  context.fillRect(0, 0, width, height);
  let image = context.getImageData(0, 0, width, height);
  let imageData = image.data;

  for (let i = 0, j = 0; i < imageData.length; i += 4, j++) {
    vector3.x = data[j - 2] - data[j + 2];
    vector3.y = 2;
    vector3.z = data[j - width * 2] - data[j + width * 2];
    vector3.normalize();
    const shade = vector3.dot(sun);

    imageData[i] = (96 + shade * 128) * (0.5 + data[j] * 0.007);
    imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.007);
    imageData[i + 2] = (shade * 96) * (0.5 + data[j] * 0.007);
  }

  context.putImageData(image, 0, 0);

  // Scaled 4x
  const canvasScaled = document.createElement('canvas');
  canvasScaled.width = width * 4;
  canvasScaled.height = height * 4;
  const contextScaled = canvasScaled.getContext('2d');
  if (!contextScaled) {
    return;
  }
  contextScaled.scale(4, 4);
  contextScaled.drawImage(canvas, 0, 0);
  image = contextScaled.getImageData(0, 0, canvasScaled.width, canvasScaled.height);
  imageData = image.data;

  for (let i = 0; i < imageData.length; i += 4) {
    const v = Math.floor(Math.random() * 5);
    imageData[i] += v;
    imageData[i + 1] += v;
    imageData[i + 2] += v;
  }

  contextScaled.putImageData(image, 0, 0);

  return canvasScaled;
}

export default SpaceBackground;
