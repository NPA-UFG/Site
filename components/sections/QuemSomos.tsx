import Image from "next/image";
import badge from "@/public/assets/npa-badge.png";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutText } from "@/data/about";

interface QuemSomosProps {
  variant?: "badge" | "photo";
}

export function QuemSomos({ variant = "badge" }: QuemSomosProps) {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-12 nav:grid-cols-[1.3fr_0.9fr]">
        <div>
          <SectionHeading className="mb-6">Quem somos</SectionHeading>
          <p className="max-w-[60ch] font-mono">{aboutText}</p>
          {variant === "badge" && (
            <p className="mt-7">
              <Button href="/sobre">Saiba mais</Button>
            </p>
          )}
        </div>

        {variant === "badge" ? (
          <Image
            src={badge}
            alt="Emblema do NPA"
            sizes="280px"
            className="mx-auto h-auto w-full max-w-[280px]"
          />
        ) : (
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/assets/about-hero.jpg"
              alt="Membro do NPA"
              width={1149}
              height={766}
              sizes="(max-width: 860px) 100vw, 450px"
              className="h-auto w-full"
            />
          </div>
        )}
      </Container>
    </Section>
  );
}
