import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/providers/i18n-context";
import type { ItemStatus } from "@/types/common";

export const StatusPill = ({ status }: { status: ItemStatus }) => {
  const { t } = useI18n();

  return (
    <Badge
      variant="outline"
      className="inline-flex items-center gap-1.5 rounded-full border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
    >
      <span className="h-1 w-1 rounded-full bg-muted-foreground/70" />
      {t(`status.${status}`)}
    </Badge>
  );
};
