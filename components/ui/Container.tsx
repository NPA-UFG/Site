import { createElement, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return createElement(
    Tag,
    { className: cn("mx-auto max-w-container px-5 sm:px-8", className) },
    children,
  );
}
