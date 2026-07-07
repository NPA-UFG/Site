import { socialLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
}

export function SocialLinks({ className, linkClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn("inline-flex text-white transition-colors", linkClassName)}
          >
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
