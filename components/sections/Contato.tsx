import Image from "next/image";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { IconComponent } from "@/types";

interface ContactLink {
  label: string;
  href: string;
  icon: IconComponent;
}

const contactLinks: ContactLink[] = [
  { label: "npaufg", href: "https://instagram.com/npaufg", icon: FaInstagram },
  { label: "npa-ufg", href: "https://linkedin.com/company/npa-ufg", icon: FaLinkedinIn },
];

export function Contato() {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-start gap-14 nav:grid-cols-2">
        <div>
          <SectionHeading className="mb-6">Fale conosco</SectionHeading>
          <div className="my-[14px] mb-14 flex flex-wrap gap-8">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-mono font-medium"
              >
                <Icon className="h-[22px] w-[22px] text-rust" aria-hidden />
                <span className="underline underline-offset-4 group-hover:text-rust">
                  {label}
                </span>
              </a>
            ))}
          </div>

          <div>
            <SectionHeading className="mb-6">Onde estamos</SectionHeading>
            <p className="max-w-[48ch] font-mono text-[1.05rem] font-semibold">
              Somos um núcleo de pesquisa vinculado à Universidade Federal de
              Goiás (UFG). Atuamos junto à comunidade acadêmica, reunindo
              estudantes de diferentes cursos em torno de projetos aeroespaciais
              — da pesquisa e desenvolvimento à divulgação científica.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl">
          <Image
            src="/assets/contact-vr.jpg"
            alt="Realidade virtual"
            width={1354}
            height={939}
            sizes="(max-width: 860px) 100vw, 560px"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </Section>
  );
}
