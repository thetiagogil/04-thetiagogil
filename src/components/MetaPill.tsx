import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useI18n } from "@/providers/i18n-context";
import type { ItemStatus } from "@/types/common";
import type { ProjectType } from "@/types/data";

type MetaPillProps =
  | {
      kind: "project";
      value: ProjectType;
    }
  | {
      kind: "status";
      value: ItemStatus;
    };

const metaPillClassName =
  "inline-flex items-center rounded-full font-mono text-[10px] uppercase tracking-[0.15em]";

const statusClassName = "border-border/70 bg-muted/40 text-muted-foreground";

const projectTypeClassName: Record<ProjectType, string> = {
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

export const MetaPill = ({ kind, value }: MetaPillProps) => {
  const { t } = useI18n();
  const className =
    kind === "project" ? projectTypeClassName[value] : statusClassName;
  const label =
    kind === "project" ? t(`project.type.${value}`) : t(`status.${value}`);

  return (
    <Badge variant="outline" className={cn(metaPillClassName, className)}>
      {label}
    </Badge>
  );
};
