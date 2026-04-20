import { categoryMeta } from "@/lib/categories";
import { cn } from "@/lib/utils";
import type { Category } from "@/types/common";

export const CategoryGlyph = ({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) => {
  const meta = categoryMeta[category];
  const Icon = meta.icon;

  return (
    <span
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden rounded-full bg-background",
        meta.colorClassName,
        className,
      )}
      aria-hidden
    >
      <Icon
        className="absolute inset-0 m-auto size-4 sm:size-full fill-current"
        strokeWidth={1.6}
      />
    </span>
  );
};
