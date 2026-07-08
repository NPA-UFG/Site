"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export function StarfieldBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];
    let w = 0;
    let h = 0;

    const STAR_COUNT = 500;
    const DEPTH = 1000;

    function initStars() {
      stars = Array.from({ length: STAR_COUNT }, () => {
        const z = Math.random() * DEPTH;
        return {
          x: (Math.random() - 0.5) * 2000,
          y: (Math.random() - 0.5) * 2000,
          z,
          pz: z,
        };
      });
    }

    function resize() {
      if (!container || !canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      w = container.clientWidth;
      h = container.clientHeight;

      if (w === 0 || h === 0) return;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initStars();
    }

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    function animate() {
      if (!ctx) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      for (const s of stars) {
        s.pz = s.z;
        s.z -= 4;

        if (s.z <= 1) {
          s.x = (Math.random() - 0.5) * 2000;
          s.y = (Math.random() - 0.5) * 2000;
          s.z = DEPTH;
          s.pz = DEPTH;
          continue;
        }

        const k = 300 / s.z;
        const sx = s.x * k + cx;
        const sy = s.y * k + cy;

        if (sx < 0 || sx >= w || sy < 0 || sy >= h) continue;

        const pk = 300 / s.pz;
        const psx = s.x * pk + cx;
        const psy = s.y * pk + cy;

        const size = Math.max(0.3, (1 - s.z / DEPTH) * 2.5);
        const alpha = Math.max(0.1, (1 - s.z / DEPTH) * 1.2);

        ctx.beginPath();
        ctx.moveTo(psx, psy);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = size;
        ctx.stroke();
      }

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
    </div>
  );
}
