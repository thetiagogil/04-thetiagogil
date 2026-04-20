import { StatusPill } from "@/components/StatusPill";
import { allItems, getSorted } from "@/database";
import { useI18n } from "@/providers/I18nProvider";
import type { Category } from "@/types/common";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Filter = "all" | Category;

const filters: Filter[] = [
  "all",
  "experience",
  "projects",
  "education",
  "certifications",
];

const categoryGlyph: Record<Category, string> = {
  experience: "♥",
  projects: "♦",
  education: "♠",
  certifications: "♣",
};

const categoryGlyphColor: Record<Category, string> = {
  experience: "text-red-500",
  projects: "text-red-500",
  education: "text-foreground",
  certifications: "text-foreground",
};

export const TimelinePage = () => {
  const { t, tr } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");

  const sorted = useMemo(() => {
    const list =
      filter === "all"
        ? allItems
        : allItems.filter((i) => i.category === filter);
    return getSorted(list);
  }, [filter]);

  return (
    <div className="max-w-275 mx-auto px-6 md:px-12 py-10 md:py-16">
      <header className="mb-10">
        <h1 className="font-display text-4xl md:text-5xl tracking-tight">
          {t("timeline.title")}
        </h1>
        <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl text-pretty">
          {t("timeline.subtitle")}
        </p>
      </header>

      {/* Filters */}
      <div className="sticky top-0 z-20 -mx-6 md:-mx-12 px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border/60 mb-8">
        <div className="flex flex-wrap gap-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] cursor-pointer ${
                filter === f
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f === "all" ? t("timeline.all") : t(`section.${f}`)}
              <span className="ml-2 opacity-60">
                {f === "all"
                  ? allItems.length
                  : allItems.filter((i) => i.category === f).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <ol className="relative">
        <div
          className="absolute left-22 md:left-30 top-2 bottom-2 w-px bg-border"
          aria-hidden
        />
        {sorted.map((item) => {
          const isLinkable = item.category === "projects" && item.slug;
          const startYear = item.dateStart.getFullYear();
          const endYear = item.dateEnd
            ? item.dateEnd.getFullYear()
            : item.dateEnd === null
              ? null
              : undefined;

          return (
            <li
              key={item.id}
              className="relative grid grid-cols-[80px_1fr] md:grid-cols-[112px_1fr] gap-4 md:gap-8 py-6"
            >
              <div className="text-right">
                <div className="font-mono text-sm md:text-base tabular-nums text-foreground">
                  {endYear === null
                    ? t("timeline.present")
                    : (endYear ?? startYear)}
                </div>
                <div className="font-mono text-[10px] text-muted-foreground tabular-nums mt-0.5">
                  {startYear !== (endYear ?? new Date().getFullYear())
                    ? `from ${startYear}`
                    : ""}
                </div>
              </div>

              <div className="relative pl-8 md:pl-10">
                <span
                  className={`absolute -left-1.75 top-2 h-3.5 w-3.5 flex items-center justify-center bg-background text-[8px] ${categoryGlyphColor[item.category]} border border-border rounded-full`}
                  aria-hidden
                >
                  {categoryGlyph[item.category]}
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t(`section.${item.category}`)}
                  </span>
                  {item.status && <StatusPill status={item.status} />}
                </div>

                <h3 className="mt-1.5 font-display text-xl md:text-2xl tracking-tight text-balance">
                  {isLinkable ? (
                    <Link
                      to={`/projects/${item.slug}`}
                      className="hover:text-primary"
                    >
                      {item.titleKey ? tr(item.titleKey) : item.title}{" "}
                      <span className="text-muted-foreground">→</span>
                    </Link>
                  ) : item.titleKey ? (
                    tr(item.titleKey)
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-sm text-muted-foreground italic mt-0.5">
                  {item.orgKey ? tr(item.orgKey) : item.org}
                </p>

                {item.descriptionKey && (
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                    {tr(item.descriptionKey)}
                  </p>
                )}

                {item.techs.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.techs.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
