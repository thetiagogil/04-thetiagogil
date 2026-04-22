import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export const DetailSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section className={cn("mt-10 border-t border-border/70 pt-8", className)}>
    {children}
  </section>
);
