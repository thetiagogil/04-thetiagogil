import { CategoryGlyph } from "@/components/CategoryGlyph";
import { StatusPill } from "@/components/StatusPill";
import { TechBadge } from "@/components/TechBadge";
import { getItemOrg, getItemTitle } from "@/lib/data-helpers";
import {
  formatMonthYearRange,
  getTimelineDateParts,
  getYearDateParts,
} from "@/lib/date";
import { useI18n } from "@/providers/i18n-context";
import type { DataItem } from "@/types/data";
import { Link } from "react-router-dom";

export const TimelineItem = ({ item }: { item: DataItem }) => {
  const { lang, t, tr } = useI18n();

  const isLinkable = item.category === "projects" && Boolean(item.slug);
  const org = getItemOrg(item, tr);
  const date = getTimelineDateParts({
    dateStart: item.dateStart,
    dateEnd: item.dateEnd,
    lang,
    presentLabel: t("timeline.present"),
    fromLabel: t("common.from"),
  });
  const fullDateRange = formatMonthYearRange({
    dateStart: item.dateStart,
    dateEnd: item.dateEnd,
    lang,
    presentLabel: t("timeline.present"),
  });
  const mobileDate = getYearDateParts({
    dateStart: item.dateStart,
    dateEnd: item.dateEnd,
    presentLabel: t("timeline.present"),
  });

  return (
    <li className="relative grid grid-cols-[52px_1fr] gap-3 py-6 md:grid-cols-[152px_1fr] md:gap-8">
      <div className="text-right" aria-label={fullDateRange}>
        <div className="font-mono text-[10px] leading-tight text-foreground md:hidden">
          {mobileDate.primary}
        </div>
        <div className="mt-1 font-mono text-[9px] leading-tight text-muted-foreground md:hidden">
          {mobileDate.secondary}
        </div>
        <div className="hidden font-mono text-xs leading-tight text-foreground md:block">
          {date.primary}
        </div>
        <div className="mt-1 hidden font-mono text-[10px] leading-tight text-muted-foreground md:block">
          {date.secondary}
        </div>
      </div>

      <div className="relative pl-8 md:pl-10">
        <CategoryGlyph
          category={item.category}
          className="absolute left-1.5 top-0.5 h-5.5 w-5.5 md:-left-2 md:top-1 md:h-4.5 md:w-4.5"
        />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground md:text-[10px]">
            {t(`section.${item.category}`)}
          </span>
          {item.status && <StatusPill status={item.status} />}
        </div>

        <h2 className="mt-1.5 font-display text-lg tracking-tight text-balance md:text-2xl">
          {isLinkable ? (
            <Link
              to={`/projects/${item.slug}`}
              className="transition-colors duration-300 hover:text-primary"
            >
              {getItemTitle(item, tr)}{" "}
              <span className="text-muted-foreground">{"\u2192"}</span>
            </Link>
          ) : (
            getItemTitle(item, tr)
          )}
        </h2>

        {org && (
          <p className="mt-0.5 text-xs italic text-muted-foreground md:text-sm">
            {org}
          </p>
        )}

        {item.descriptionKey && (
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-muted-foreground text-pretty md:text-base">
            {tr(item.descriptionKey)}
          </p>
        )}

        {item.techs.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.techs.map((tag) => (
              <TechBadge key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
};
