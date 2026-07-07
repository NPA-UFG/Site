import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/projects";

export function ProjectsList() {
  return (
    <div className="mt-16">
      <SectionHeading gold className="mb-6">
        Galeria
      </SectionHeading>

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
