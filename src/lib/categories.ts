import type { Category } from "@/types/common";
import { Club, Diamond, Heart, Spade, type LucideIcon } from "lucide-react";

export const categoryMeta: Record<
  Category,
  { icon: LucideIcon; colorClassName: string }
> = {
  experience: {
    icon: Spade,
    colorClassName: "text-foreground",
  },
  projects: {
    icon: Heart,
    colorClassName: "text-primary",
  },
  education: {
    icon: Club,
    colorClassName: "text-foreground",
  },
  certifications: {
    icon: Diamond,
    colorClassName: "text-primary",
  },
};
