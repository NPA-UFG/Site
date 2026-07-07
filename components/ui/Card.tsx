import { Button } from "@/components/ui/Button";
import type { AreaCard } from "@/types";

interface CardProps {
  card: AreaCard;
  href: string;
}

export function Card({ card, href }: CardProps) {
  const { icon: Icon, title, description } = card;

  return (
    <article className="flex flex-col items-center gap-[14px] overflow-hidden rounded-md border-t-[6px] border-rust bg-card px-[26px] py-8 text-center shadow-card">
      <div className="flex h-14 items-center justify-center">
        <Icon className="h-[52px] w-[52px] text-ink" aria-hidden />
      </div>
      <h3 className="font-serif text-[1.15rem] font-bold">{title}</h3>
      <p className="flex-1 font-serif text-[0.95rem] text-[#333]">{description}</p>
      <Button href={href} size="sm">
        Saiba mais
      </Button>
    </article>
  );
}
