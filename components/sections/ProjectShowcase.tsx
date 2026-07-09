"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  RadioTower,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { PCBViewer } from "@/components/PCBViewer";
import { Container } from "@/components/ui/Container";
import { projectAreas, projectItems } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  children: ReactNode;
}

const areaIcons: Record<number, LucideIcon> = {
  1: Cpu,
  2: GraduationCap,
  3: Code2,
  4: BrainCircuit,
  5: RadioTower,
  6: Telescope,
};

export function ProjectShowcase({ children }: ProjectShowcaseProps) {
  const [activeId, setActiveId] = useState(projectAreas[0].id);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const applyHash = () => {
      const match = window.location.hash.match(/area-(\d+)/);
      if (!match) return;
      const id = Number(match[1]);
      if (!projectAreas.some((area) => area.id === id)) return;
      setActiveId(id);
      rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const activeArea =
    projectAreas.find((area) => area.id === activeId) ?? projectAreas[0];
  const areaProjects = projectItems.filter((item) => item.area === activeId);

  const selectArea = (id: number) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#area-${id}`);
  };

  return (
    <div ref={rootRef}>
      <div className="bg-rust px-5 pt-4 sm:px-8 nav:px-0 nav:pt-0">
        <div className="mx-auto grid max-w-container grid-cols-3 gap-2 pb-4 nav:flex nav:flex-wrap nav:justify-between nav:gap-0 nav:pb-0">
          {projectAreas.map((area) => {
            const Icon = areaIcons[area.id];
            return (
              <button
                key={area.id}
                type="button"
                onClick={() => selectArea(area.id)}
                className={cn(
                  "flex cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border px-2 py-3 text-center font-head text-[0.72rem] font-bold leading-tight transition-colors nav:min-w-[120px] nav:flex-1 nav:rounded-none nav:border-0 nav:bg-transparent nav:px-2.5 nav:py-3 nav:text-[1.1rem] nav:leading-normal",
                  area.id === activeId
                    ? "border-white bg-white text-rust shadow-sm nav:border-transparent nav:bg-black/[0.14] nav:text-white nav:shadow-none"
                    : "border-white/25 bg-black/15 text-[#f3d9c6] hover:border-white/40 hover:bg-black/25 hover:text-white nav:border-transparent nav:bg-transparent nav:hover:bg-transparent",
                )}
              >
                <Icon className="h-5 w-5 nav:hidden" strokeWidth={2} />
                <span>{area.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <section className="bg-dark py-[52px] text-white nav:py-[72px]">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 nav:grid-cols-2">
            <div className="rounded-xl bg-white px-11 py-12 text-ink shadow-panel">
              <h3 className="mb-[22px] text-center font-head text-[2rem] font-bold">
                {activeArea.title}
              </h3>
              <p className="font-mono text-[0.98rem]">{activeArea.text}</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/projects-area.jpg"
                alt="Área de atuação"
                width={1070}
                height={714}
                sizes="(max-width: 860px) 100vw, 560px"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-14">
            <h3 className="mb-6 font-head text-[1.6rem] font-bold text-gold">
              Projetos em {activeArea.title}
            </h3>
            {areaProjects.length > 0 ? (
              areaProjects.map((item) =>
                item.model ? (
                  <div key={item.title} className="mb-10 grid grid-cols-1 gap-6 nav:grid-cols-2 nav:items-center">
                    <div>
                      <h4 className="mb-1.5 font-mono text-base font-bold text-gold">
                        {item.title}
                      </h4>
                      <p className="max-w-[80ch] font-mono text-[0.9rem] text-[#cfcfcf]">
                        {item.description}
                      </p>
                    </div>
                    <PCBViewer modelUrl={item.model} />
                  </div>
                ) : (
                  <div key={item.title} className="mb-7">
                    <h4 className="mb-1.5 font-mono text-base font-bold text-gold">
                      {item.title}
                    </h4>
                    <p className="max-w-[80ch] font-mono text-[0.9rem] text-[#cfcfcf]">
                      {item.description}
                    </p>
                  </div>
                ),
              )
            ) : (
              <p className="font-mono text-[0.9rem] text-[#cfcfcf]">
                Novos projetos desta área serão divulgados em breve.
              </p>
            )}
          </div>

          {children}
        </Container>
      </section>
    </div>
  );
}
