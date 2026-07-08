import Image from "next/image";
import Link from "next/link";
import { footerNavItems } from "@/data/navigation";
import { SocialLinks } from "@/components/shared/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-black px-5 py-11 text-center text-white sm:px-8">
      <Image
        src="/assets/nav-logo.png"
        alt="NPA"
        width={56}
        height={56}
        className="mx-auto mb-[18px]"
      />
      <nav className="mb-5 flex flex-wrap justify-center gap-[34px] font-mono text-[15px]">
        {footerNavItems.map(({ label, href }) => (
          <Link key={href} href={href} className="transition-colors hover:text-rust">
            {label}
          </Link>
        ))}
      </nav>
      <SocialLinks
        className="mb-[18px] justify-center gap-5"
        linkClassName="hover:text-rust"
      />
      <p className="font-mono text-[13px] text-[#bdbdbd]">
        © 2026 NPA, Todos os direitos reservados.
      </p>
    </footer>
  );
}
