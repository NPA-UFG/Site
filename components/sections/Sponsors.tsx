import Image from "next/image";
import sponsorsRow from "@/public/assets/sponsors-row.png";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Sponsors() {
  return (
    <Section noTop>
      <Container className="text-center">
        <SectionHeading center className="mb-6">
          Patrocinadores
        </SectionHeading>
        <Image
          src={sponsorsRow}
          alt="Patrocinadores: Amigos do Brasil Central, EMC, Instituto de Informática, UFG, CEIA"
          sizes="(max-width: 820px) 100vw, 820px"
          className="mx-auto mt-9 h-auto w-full max-w-[820px]"
        />
      </Container>
    </Section>
  );
}
