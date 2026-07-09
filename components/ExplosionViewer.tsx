"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

const SCALE = 0.006;
const EXPLODE_STRENGTH = 60; // mm — quanto a estrutura abre

// Structural / enclosure parts that should explode a lot
const STRUCTURE_KEYWORDS = [
  "topo", "fundo", "lateral", "canto", "suporte",
  "pcb", "corpo", "distans", "federleiste",
];

function isStructure(name: string): boolean {
  const n = name.toLowerCase();
  return STRUCTURE_KEYWORDS.some((k) => n.includes(k));
}

function ExplodedModel({ url }: { url: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  const cloned = useMemo(() => {
    const cloned = scene.clone(true);

    // First pass: compute overall bounding box center
    const box = new THREE.Box3();
    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        box.expandByObject(child);
      }
    });
    const center = new THREE.Vector3();
    box.getCenter(center);

    // Second pass: explode each mesh
    cloned.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const meshCenter = new THREE.Vector3();
      child.getWorldPosition(meshCenter);

      // Direction from assembly center to this part
      const dir = meshCenter.clone().sub(center);
      const dist = dir.length();
      if (dist > 0.01) dir.normalize();
      else dir.set(0, 1, 0);

      // All remaining parts are internal components — uniform moderate explosion
      const mag = EXPLODE_STRENGTH * Math.max(dist / 50, 0.3);

      const offset = dir.multiplyScalar(mag);

      // Apply offset — works because trimesh GLB has flat hierarchy
      child.position.add(offset);

      // Material fix
      if (child.material) {
        child.material = child.material.clone();
        child.material.metalness = 0.15;
        child.material.roughness = 0.8;
        child.material.envMapIntensity = 0.4;
      }
    });

    return cloned;
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={SCALE} rotation={[0.3, 0, 0]}>
      <primitive object={cloned} />
    </group>
  );
}

export function ExplosionViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg">
      <Canvas
        camera={{ position: [1.0, 0.6, 1.6], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 3]} intensity={0.6} />
        <Suspense fallback={null}>
          <ExplodedModel url={modelUrl} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={0.8}
          maxDistance={5}
          enableDamping
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
}
