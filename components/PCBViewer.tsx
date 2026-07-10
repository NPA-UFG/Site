"use client";

import { useEffect, useRef, useState } from "react";

export function PCBViewer({ modelUrl }: { modelUrl: string }) {
  const ref = useRef<HTMLElement>(null);
  const [key, setKey] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    import("@google/model-viewer").then(() => setLoaded(true));
    setKey((k) => k + 1);
  }, [modelUrl]);

  if (!loaded) {
    return <div className="flex h-[280px] w-full items-center overflow-hidden rounded-lg" />;
  }

  return (
    <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-lg">
      {/* @ts-expect-error model-viewer is a web component */}
      <model-viewer
        key={key}
        ref={ref}
        src={modelUrl}
        alt="PCB 3D Model"
        auto-rotate
        auto-rotate-delay="0"
        rotation-per-second="25deg"
        camera-controls
        interaction-prompt="none"
        environment-image="neutral"
        exposure="1.0"
        shadow-intensity="0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}