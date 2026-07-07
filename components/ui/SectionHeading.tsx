import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: ReactNode;
  center?: boolean;
  gold?: boolean;
  className?: string;
}

export function SectionHeading({
  children,
  center,
  gold,
  className,
}: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-head text-[clamp(1.8rem,3.5vw,3rem)] font-bold",
        gold ? "text-gold" : "text-ink",
        center && "text-center",
        className,
      )}
    >
      {children}
    </h2>
  );
}
