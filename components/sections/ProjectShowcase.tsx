"use client";

import { type ReactNode, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { projectAreas } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectShowcaseProps {
  children: ReactNode;
}

export function ProjectShowcase({ children }: ProjectShowcaseProps) {
  const [activeId, setActiveId] = useState(projectAreas[0].id);
  const activeArea =
    projectAreas.find((area) => area.id === activeId) ?? projectAreas[0];

  return (
    <>
      <div className="bg-rust">
        <div className="mx-auto flex max-w-container flex-wrap justify-between">
          {projectAreas.map((area) => (
            <button
              key={area.id}
              type="button"
              onClick={() => setActiveId(area.id)}
              className={cn(
                "min-w-[33%] flex-1 cursor-pointer px-1.5 py-4 text-center font-head text-[1.05rem] font-bold text-[#f3d9c6] transition-colors hover:text-white nav:min-w-[120px] nav:px-2.5 nav:py-[26px] nav:text-[1.4rem]",
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

          {children}
        </Container>
      </section>
    </>
  );
}
