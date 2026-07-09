"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

const SCALE = 0.008; // mm → scene units
const EXPLODE_FACTOR = 1.8; // how far parts spread

function ExplodedModel({ url }: { url: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  const meshData = useMemo(() => {
    const cloned = scene.clone(true);
    const data: { mesh: THREE.Mesh; offset: THREE.Vector3 }[] = [];

    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const worldPos = new THREE.Vector3();
        child.getWorldPosition(worldPos);

        // Explosion direction: from center outward
        const dir = worldPos.clone();
        const dist = dir.length();
        if (dist < 0.01) {
          dir.set(0, 1, 0);
        } else {
          dir.normalize();
        }
        // Parts further from center explode more
        const mag = Math.max(dist / 40, 0.4) * EXPLODE_FACTOR * 40; // in mm
        const offset = dir.multiplyScalar(mag);

        // Apply material fixups for proper rendering
        if (child.material) {
          child.material = child.material.clone();
          child.material.metalness = 0.2;
          child.material.roughness = 0.75;
          child.material.envMapIntensity = 0.5;
        }

        // Bake the explosion offset into position
        child.position.x += offset.x;
        child.position.y += offset.y;
        child.position.z += offset.z;

        data.push({ mesh: child, offset });
      }
    });

    return { cloned, meshData: data };
  }, [scene]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={SCALE}>
      <primitive object={meshData.cloned} />
    </group>
  );
}

export function ExplosionViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg">
      <Canvas
        camera={{ position: [1.2, 0.8, 1.8], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 3]} intensity={0.7} />
        <Suspense fallback={null}>
          <ExplodedModel url={modelUrl} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={1}
          maxDistance={6}
          enableDamping
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
}
