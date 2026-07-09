"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

const SCALE = 0.01; // mm → scene units (~1.2 units across)
const EXPLODE_DIST = 35; // mm of explosion offset at peak

function ExplodingModel({ url }: { url: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  // Clone scene and compute explosion vectors per child
  const { cloned, explodeDirs } = useMemo(() => {
    const cloned = scene.clone(true);
    const dirs: THREE.Vector3[] = [];
    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        // Explosion direction: from world origin (assembly center) to mesh position
        const worldPos = new THREE.Vector3();
        child.getWorldPosition(worldPos);
        const dir = worldPos.clone().normalize();
        // Magnitude: proportional to distance from center (further parts fly more)
        const mag = Math.max(worldPos.length() / 30, 0.3);
        dirs.push(dir.multiplyScalar(mag * EXPLODE_DIST));

        // Ensure material renders properly
        if (child.material) {
          child.material = child.material.clone();
          child.material.metalness = 0.3;
          child.material.roughness = 0.6;
          child.material.envMapIntensity = 0.8;
        }
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
    return { cloned, explodeDirs: dirs };
  }, [scene]);

  // Collect mesh refs for animation
  const meshData = useMemo(() => {
    const data: { mesh: THREE.Mesh; dir: THREE.Vector3; basePos: THREE.Vector3 }[] = [];
    let dirIdx = 0;
    cloned.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        data.push({
          mesh: child,
          dir: explodeDirs[dirIdx] || new THREE.Vector3(0, 1, 0),
          basePos: child.position.clone(),
        });
        dirIdx++;
      }
    });
    return data;
  }, [cloned, explodeDirs]);

  useFrame(({ clock }) => {
    // Explosion cycle: 6s total (3s explode, 3s reassemble)
    const cycleTime = 6;
    const t = (clock.elapsedTime % cycleTime) / cycleTime; // 0 → 1
    // Smooth ease in/out using cosine
    const explodeAmount = 0.5 - 0.5 * Math.cos(t * Math.PI * 2); // 0→1→0

    for (const { mesh, dir, basePos } of meshData) {
      mesh.position.x = basePos.x + dir.x * explodeAmount * SCALE;
      mesh.position.y = basePos.y + dir.y * explodeAmount * SCALE;
      mesh.position.z = basePos.z + dir.z * explodeAmount * SCALE;
    }
  });

  return (
    <group ref={groupRef} scale={SCALE}>
      <primitive object={cloned} />
    </group>
  );
}

export function ExplosionViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-lg">
      <Canvas
        camera={{ position: [1.5, 1, 2], fov: 40 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 5, 3]} intensity={0.8} />
        <Suspense fallback={null}>
          <ExplodingModel url={modelUrl} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minDistance={1}
          maxDistance={6}
          autoRotate
          autoRotateSpeed={0.8}
          enableDamping
          dampingFactor={0.1}
        />
      </Canvas>
    </div>
  );
}
