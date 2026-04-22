import { StatusPill } from "@/components/StatusPill";
import type { ItemStatus } from "@/types/common";

export const ProjectPageHeader = ({
  title,
  org,
  dateLabel,
  status,
}: {
  title: string;
  org: string;
  dateLabel: string;
  status?: ItemStatus;
}) => (
  <header className="mt-8">
    <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
      <h1 className="font-display text-2xl tracking-tight text-balance md:text-5xl">
        {title}
      </h1>

      {org && (
        <span className="text-sm italic text-muted-foreground md:text-xl">
          {org}
        </span>
      )}
    </div>

    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
      <span className="font-mono text-[10px] text-muted-foreground md:text-[11px]">
        {dateLabel}
      </span>
      {status && <StatusPill status={status} />}
    </div>
  </header>
);
