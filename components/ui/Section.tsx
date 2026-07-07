import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  noTop?: boolean;
  className?: string;
}

export function Section({ children, noTop, className }: SectionProps) {
  return (
    <section
      className={cn("py-[52px] nav:py-[72px]", noTop && "pt-0", className)}
    >
      {children}
    </section>
  );
}
