import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export interface AreaCard {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface Pillar {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface TripartiteItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface GrowthItem {
  title: string;
  description: string;
}

export interface ProjectArea {
  id: number;
  label: string;
  title: string;
  text: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  area: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
}
