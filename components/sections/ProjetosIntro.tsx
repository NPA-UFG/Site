import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsIntro } from "@/data/projects";

export function ProjetosIntro() {
  return (
    <section className="bg-gray-bg py-16 text-center">
      <Container>
        <SectionHeading center className="mb-6">
          {projectsIntro.title}
        </SectionHeading>
        <p className="mx-auto max-w-[70ch] font-mono">{projectsIntro.text}</p>
      </Container>
    </section>
  );
}
