"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { projectAreas, projectItems } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  children: ReactNode;
}

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
      <div className="bg-rust">
        <div className="mx-auto flex max-w-container flex-wrap justify-between">
          {projectAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              onClick={() => selectArea(area.id)}
              className={cn(
                "min-w-[33%] flex-1 cursor-pointer px-1.5 py-2 text-center font-head text-[0.9rem] font-bold text-[#f3d9c6] transition-colors hover:text-white nav:min-w-[120px] nav:px-2.5 nav:py-3 nav:text-[1.1rem]",
                area.id === activeId && "bg-black/[0.14] text-white",
              )}
            >
              {area.label}
            </button>
          ))}
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
              areaProjects.map((item) => (
                <div key={item.title} className="mb-7">
                  <h4 className="mb-1.5 font-mono text-base font-bold text-gold">
                    {item.title}
                  </h4>
                  <p className="max-w-[80ch] font-mono text-[0.9rem] text-[#cfcfcf]">
                    {item.description}
                  </p>
                </div>
              ))
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
