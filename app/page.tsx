import { Hero } from "@/components/sections/Hero";
import { QuemSomos } from "@/components/sections/QuemSomos";
import { NossasAreas } from "@/components/sections/NossasAreas";
import { Sponsors } from "@/components/sections/Sponsors";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuemSomos variant="badge" />
      <NossasAreas />
      <Sponsors />
    </>
  );
}
