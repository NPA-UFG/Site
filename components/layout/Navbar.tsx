"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="mx-auto flex max-w-container flex-wrap items-center gap-6 px-5 py-[14px] sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-mono text-[22px] font-semibold text-white"
        >
          <Image src="/assets/nav-logo.png" alt="NPA" width={44} height={44} priority />
          NPA
        </Link>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="ml-auto text-[28px] leading-none text-white nav:hidden"
        >
          <Menu className="h-7 w-7" aria-hidden />
        </button>

        <nav
          className={cn(
            "w-full flex-col gap-[18px] nav:ml-auto nav:flex nav:w-auto nav:flex-row nav:gap-9",
            open ? "flex" : "hidden nav:flex",
          )}
        >
          {navItems.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "font-mono text-[18px] font-medium transition-colors hover:text-rust",
                  active ? "text-rust" : "text-white",
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contato"
          onClick={() => setOpen(false)}
          className={cn(
            "whitespace-nowrap rounded-lg bg-rust px-[22px] py-3 font-mono text-[17px] font-medium text-white transition-colors hover:bg-rust-dark nav:inline-block",
            open ? "inline-block" : "hidden",
          )}
        >
          Entre em contato
        </Link>
      </div>
    </header>
  );
}
