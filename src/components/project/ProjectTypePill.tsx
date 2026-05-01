import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useI18n } from "@/providers/i18n-context";
import type { ProjectType } from "@/types/data";

const typeClassName: Record<ProjectType, string> = {
  core: "border-project-type-core/25 bg-project-type-core/12 text-project-type-core",
  product:
    "border-project-type-product/25 bg-project-type-product/12 text-project-type-product",
  experiment:
    "border-project-type-experiment/25 bg-project-type-experiment/12 text-project-type-experiment",
  "early work":
    "border-project-type-early-work/30 bg-project-type-early-work/12 text-project-type-early-work",
  design:
    "border-project-type-design/25 bg-project-type-design/12 text-project-type-design",
};

export const ProjectTypePill = ({ type }: { type: ProjectType }) => {
  const { t } = useI18n();

  return (
    <Badge
      variant="outline"
      className={cn(
        "inline-flex rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em]",
        typeClassName[type],
      )}
    >
      {t(`project.type.${type}`)}
    </Badge>
  );
};
