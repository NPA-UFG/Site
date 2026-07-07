import type { ComponentProps } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-block cursor-pointer rounded-lg bg-rust font-mono font-medium text-white transition-colors hover:bg-rust-dark",
  {
    variants: {
      size: {
        md: "px-[26px] py-[14px]",
        sm: "px-[18px] py-[9px] text-[13px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonLinkProps = { href: string } & ComponentProps<typeof Link> & ButtonVariants;
type ButtonElementProps = { href?: undefined } & ComponentProps<"button"> & ButtonVariants;

export type ButtonProps = ButtonLinkProps | ButtonElementProps;

export function Button({ size, className, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ size }), className);

  if (props.href !== undefined) {
    return <Link className={classes} {...props} />;
  }

  return <button className={classes} {...props} />;
}
