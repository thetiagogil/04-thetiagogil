import type { ReactNode } from "react";

export const ProjectMeta = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div>
    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground md:text-[10px]">
      {label}
    </p>
    <div className="mt-1.5 text-xs md:text-sm">{children}</div>
  </div>
);
