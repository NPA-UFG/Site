import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pillars } from "@/data/about";

export function Missao() {
  return (
    <Section noTop>
      <Container>
        <SectionHeading className="mb-6">Missão</SectionHeading>
        <p className="mb-10 max-w-[60ch] font-mono">
          Nossa missão é construída sobre três pilares fundamentais que se
          interconectam para criar uma experiência de aprendizado completa e
          impactante:
        </p>

        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="mb-9 grid grid-cols-1 items-stretch gap-9 nav:grid-cols-2"
          >
            <div className="rounded-[10px] bg-card px-10 py-[38px] shadow-card">
              <h3 className="mb-[18px] font-head text-2xl font-bold">
                {pillar.title}
              </h3>
              <p className="font-mono text-[0.98rem]">{pillar.description}</p>
            </div>
            <div className="relative order-first min-h-[220px] overflow-hidden rounded-[10px] nav:order-none nav:min-h-[240px]">
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                sizes="(max-width: 860px) 100vw, 585px"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}
