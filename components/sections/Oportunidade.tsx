import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { growthItems } from "@/data/about";

export function Oportunidade() {
  return (
    <Section noTop>
      <Container className="grid grid-cols-1 items-center gap-11 nav:grid-cols-2">
        <div>
          <SectionHeading className="mb-[34px]">
            Oportunidade de crescimento
          </SectionHeading>
          {growthItems.map((item) => (
            <div key={item.title} className="mb-[26px]">
              <h4 className="mb-1.5 font-head text-[1.1rem] font-bold">
                {item.title}
              </h4>
              <p className="font-mono text-[0.92rem] text-[#555]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src="/assets/about-growth.jpg"
            alt="Oportunidade de crescimento"
            width={1407}
            height={938}
            sizes="(max-width: 860px) 100vw, 560px"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </Section>
  );
}
