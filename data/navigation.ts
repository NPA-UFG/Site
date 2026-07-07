import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import type { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/projetos" },
];

export const footerNavItems: NavItem[] = [
  ...navItems,
  { label: "Entre em contato", href: "/contato" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/npaufg", icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/npa-ufg", icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/NPA-UFG", icon: FaGithub },
];
