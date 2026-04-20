import type { Category } from "@/types/common";
import { Club, Diamond, Heart, Spade, type LucideIcon } from "lucide-react";

export const categoryMeta: Record<
  Category,
  { icon: LucideIcon; colorClassName: string }
> = {
  experience: {
    icon: Heart,
    colorClassName: "text-primary",
  },
  projects: {
    icon: Spade,
    colorClassName: "text-foreground",
  },
  education: {
    icon: Diamond,
    colorClassName: "text-primary",
  },
  certifications: {
    icon: Club,
    colorClassName: "text-foreground",
  },
};
