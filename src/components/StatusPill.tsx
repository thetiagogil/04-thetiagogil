import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/providers/i18n-context";
import type { ItemStatus } from "@/types/common";

const colorMap: Record<ItemStatus, string> = {
  "in progress": "bg-status-in-progress/15 text-status-in-progress",
  live: "bg-status-live/15 text-status-live",
  archived: "bg-status-archived/15 text-status-archived",
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
