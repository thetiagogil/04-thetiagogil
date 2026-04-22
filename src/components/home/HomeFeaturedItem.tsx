import { StatusPill } from "@/components/StatusPill";
import { TechBadge } from "@/components/TechBadge";
import { getItemOrg, getItemTitle } from "@/lib/data-helpers";
import { getItemHref } from "@/lib/details";
import { getYearDateParts } from "@/lib/date";
import { useI18n } from "@/providers/i18n-context";
import type { DataItem } from "@/types/data";
import { Link } from "react-router-dom";

export const HomeFeaturedItem = ({ item }: { item: DataItem }) => {
  const { t, tr } = useI18n();

  const itemHref = getItemHref(item);
  const isLinkable = Boolean(itemHref);
  const date = getYearDateParts({
    dateStart: item.dateStart,
    dateEnd: item.dateEnd,
    presentLabel: t("timeline.present"),
  });
  const org = getItemOrg(item, tr);

  const inner = (
    <div className="flex gap-3 md:gap-4">
      <div className="w-12 shrink-0 text-right md:w-20 mt-1">
        <div className="font-mono text-[10px] leading-tight text-foreground md:text-[11px]">
          {date.primary}
        </div>
        <div className="mt-1 font-mono text-[9px] leading-tight text-muted-foreground md:text-[10px]">
          {date.secondary}
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="font-display text-base text-balance transition-colors duration-300 group-hover:text-primary md:text-xl">
            {getItemTitle(item, tr)}
            {isLinkable && (
              <span className="ml-2 text-muted-foreground">{"\u2192"}</span>
            )}
          </h3>
          {org && (
            <span className="text-xs italic text-muted-foreground md:text-sm">
              {org}
            </span>
          )}
          {(item.status === "ongoing" || item.status === "current") && (
            <StatusPill status={item.status} />
          )}
        </div>

        {item.descriptionKey && (
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground text-pretty md:text-sm">
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
    </div>
  );

  return (
    <li className="group py-5">
      {isLinkable ? (
        <Link
          to={itemHref!}
          className="block transition-colors duration-300"
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </li>
  );
};
