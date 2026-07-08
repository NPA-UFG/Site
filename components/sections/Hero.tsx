import { StarfieldBackground } from "../StarfieldBackground";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-black px-8 pb-[88px] pt-16 text-center text-white">
      <StarfieldBackground />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10">
        <h1 className="mx-auto font-display text-[clamp(2rem,6.2vw,4.2rem)] uppercase leading-[1.02] tracking-[0.5px]">
          Núcleo de Pesquisas Aeroespaciais
        </h1>
        <p className="mt-[22px] font-mono text-[clamp(1rem,2vw,1.35rem)] tracking-[2px] text-[#e8e8e8]">
          Ad Astra Per Aspera
        </p>
      </div>
    </section>
  );
}
