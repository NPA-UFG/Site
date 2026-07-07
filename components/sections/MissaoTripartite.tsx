import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { tripartite } from "@/data/about";

export function MissaoTripartite() {
  return (
    <Section noTop>
      <Container>
        <SectionHeading className="mb-6">Missão Tripartite</SectionHeading>
        <div className="grid grid-cols-1 gap-7 nav:grid-cols-3">
          {tripartite.map((item) => (
            <div key={item.title}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 860px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
              <h4 className="mb-2 mt-4 font-head text-[1.1rem] font-bold">
                {item.title}
              </h4>
              <p className="font-mono text-[0.9rem] text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
