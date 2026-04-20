import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/providers/i18n-context";
import type { ItemStatus } from "@/types/common";

const colorMap: Record<ItemStatus, string> = {
  ongoing: "bg-status-active/15 text-status-active",
  completed: "bg-status-completed/15 text-status-completed",
  outdated: "bg-status-outdated/15 text-status-outdated",
  inactive: "bg-status-inactive/15 text-status-inactive",
};

export const StatusPill = ({ status }: { status: ItemStatus }) => {
  const { t } = useI18n();
  return (
    <Badge
      variant="outline"
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border-0 font-mono text-[10px] uppercase tracking-[0.15em] ${colorMap[status]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      {t(`status.${status}`)}
    </Badge>
  );
};
