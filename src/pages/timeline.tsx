import {
  TimelineFilters,
  type TimelineFilter,
} from "@/components/timeline/TimelineFilters";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { allItems, getSorted } from "@/database";
import { isVisibleItem } from "@/lib/projects";
import { useI18n } from "@/providers/i18n-context";
import { useMemo, useState } from "react";

export const TimelinePage = () => {
  const { t } = useI18n();
  const [filter, setFilter] = useState<TimelineFilter>("all");

  const sorted = useMemo(() => {
    const visibleItems = allItems.filter(isVisibleItem);
    const list =
      filter === "all"
        ? visibleItems
        : visibleItems.filter((item) => item.category === filter);

    return getSorted(list);
  }, [filter]);

  const counts = useMemo(
    () => {
      const visibleItems = allItems.filter(isVisibleItem);

      return {
        all: visibleItems.length,
        experience: visibleItems.filter((item) => item.category === "experience")
          .length,
        projects: visibleItems.filter((item) => item.category === "projects")
          .length,
        education: visibleItems.filter((item) => item.category === "education")
          .length,
        certifications: visibleItems.filter(
          (item) => item.category === "certifications",
        ).length,
      };
    },
    [],
  );

  return (
    <div className="mx-auto max-w-275 px-6 py-10 md:px-12 md:py-16">
      <header className="mb-10">
        <h1 className="font-display text-3xl tracking-tight md:text-5xl">
          {t("timeline.title")}
        </h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground text-pretty md:text-lg">
          {t("timeline.subtitle")}
        </p>
      </header>

      <div className="sticky top-0 z-20 -mx-6 mb-8 border-b border-border/60 bg-background/80 px-6 py-4 backdrop-blur-md md:-mx-12 md:px-12">
        <TimelineFilters value={filter} counts={counts} onChange={setFilter} />
      </div>

      <ol className="relative">
        <div
          className="absolute bottom-2 left-20.25 top-2 w-px bg-border md:left-46.25"
          aria-hidden
        />

        {sorted.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </ol>
    </div>
  );
};
