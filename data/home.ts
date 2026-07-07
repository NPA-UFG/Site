import { Braces, Camera, Code2, ListOrdered, PenTool, Settings } from "lucide-react";
import type { AreaCard } from "@/types";

const placeholder =
  "Lorem ipsum dolor sit amet, consecte adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.";

export const areaCards: AreaCard[] = [
  { title: "Lorem Ipsum", description: placeholder, icon: Code2 },
  { title: "Lorem Ipsum", description: placeholder, icon: Camera },
  { title: "Lorem Ipsum", description: placeholder, icon: Braces },
  { title: "Lorem Ipsum", description: placeholder, icon: PenTool },
  { title: "Lorem Ipsum", description: placeholder, icon: ListOrdered },
  { title: "Lorem Ipsum", description: placeholder, icon: Settings },
];
