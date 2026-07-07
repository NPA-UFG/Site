import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { areaCards } from "@/data/home";

export function NossasAreas() {
  return (
    <Section noTop>
      <Container>
        <SectionHeading center className="mb-6">
          Nossas Áreas
        </SectionHeading>
        <div className="mt-4 grid grid-cols-1 gap-5 nav:grid-cols-3 nav:gap-7">
          {areaCards.map((card, index) => (
            <Card key={index} card={card} href={`/projetos#area-${index + 1}`} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
