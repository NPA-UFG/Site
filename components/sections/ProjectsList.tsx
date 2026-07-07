import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages, projectItems } from "@/data/projects";

export function ProjectsList() {
  return (
    <div className="mt-16">
      <SectionHeading gold className="mb-6">
        Projetos
      </SectionHeading>

      <div className="mt-2">
        {projectItems.map((item) => (
          <div key={item.title} className="mb-7">
            <h4 className="mb-1.5 font-mono text-base font-bold text-gold">
              {item.title}
            </h4>
            <p className="max-w-[80ch] font-mono text-[0.9rem] text-[#cfcfcf]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-[26px] nav:grid-cols-3">
        {galleryImages.map((image) => (
          <div
            key={image.src}
            className="relative aspect-[16/10] overflow-hidden rounded-[10px]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 860px) 100vw, 380px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
