import portrait from "@/assets/tg.png";
import { StatusPill } from "@/components/StatusPill";
import { allItems, getSorted, person } from "@/database";
import { useI18n } from "@/providers/I18nProvider";
import type { Category } from "@/types/common";
import { Link } from "react-router-dom";

const sectionOrder: Category[] = [
  "experience",
  "projects",
  "education",
  "certifications",
];

export const HomePage = () => {
  const { t, tr } = useI18n();
  const featured = allItems.filter(
    (i) =>
      i.featured &&
      (!i.status || i.status === "ongoing" || i.status === "completed"),
  );

  return (
    <div className="max-w-350 mx-auto px-6 md:px-12 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* LEFT — Sticky sidebar */}
        <aside className="lg:col-span-5 lg:sticky lg:top-10 lg:self-start space-y-8">
          <div className="relative grain rounded-sm overflow-hidden border border-border">
            <img
              src={portrait}
              alt="Tiago Gil"
              width={768}
              height={960}
              className="w-full h-auto block grayscale-15"
            />
            <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-background/90 mix-blend-difference">
              MMXXV · 01
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {t("home.role")}
            </p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl tracking-tight text-balance">
              {person.name}
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
              {t("home.bio")}
            </p>
          </div>

          <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
            <p className="text-muted-foreground">
              {t("home.based")}{" "}
              <span className="text-foreground">{t("home.location")}</span>
            </p>
            <p className="text-muted-foreground">
              <a
                href={`mailto:${person.email}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {person.email}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {person.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-[0.18em] text-foreground hover:text-primary"
              >
                {s.label} ↗
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary"
            >
              {t("home.viewTimeline")}
              <span>→</span>
            </Link>
            <a
              href={person.resumeHref}
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-3 border border-foreground text-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background"
            >
              {t("home.downloadCv")} ↓
            </a>
          </div>
        </aside>

        {/* RIGHT — Featured sections */}
        <section className="lg:col-span-7 space-y-14">
          <header>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight">
              {t("home.selected")}
            </h2>
            <p className="mt-2 text-sm md:text-base text-muted-foreground max-w-md">
              {t("home.subtitle")}
            </p>
          </header>

          {sectionOrder.map((cat) => {
            const list = getSorted(featured.filter((i) => i.category === cat));
            if (!list.length) return null;
            return (
              <section key={cat}>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-display text-xl md:text-2xl">
                    {t(`section.${cat}`)}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {String(list.length).padStart(2, "0")} / featured
                  </span>
                </div>
                <ul className="divide-y divide-border/70 border-y border-border/70">
                  {list.map((item) => {
                    const isLinkable =
                      item.category === "projects" && item.slug;
                    const startYear = item.dateStart.getFullYear();
                    const endYear = item.dateEnd
                      ? item.dateEnd.getFullYear()
                      : item.dateEnd === null
                        ? null
                        : undefined;

                    const inner = (
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] text-muted-foreground tabular-nums w-20 shrink-0">
                          {startYear}–
                          {endYear === null
                            ? t("timeline.present").slice(0, 4)
                            : (endYear ?? startYear)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h4 className="font-display text-lg md:text-xl group-hover:text-primary text-balance">
                              {item.titleKey ? tr(item.titleKey) : item.title}
                              {isLinkable && (
                                <span className="ml-2 text-muted-foreground">
                                  →
                                </span>
                              )}
                            </h4>
                            <span className="text-sm text-muted-foreground italic">
                              {item.orgKey ? tr(item.orgKey) : item.org}
                            </span>
                            {item.status && <StatusPill status={item.status} />}
                          </div>
                          {item.descriptionKey && (
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-pretty">
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
                      </div>
                    );

                    return (
                      <li key={item.id} className="py-5 group">
                        {isLinkable ? (
                          <Link to={`/projects/${item.slug}`} className="block">
                            {inner}
                          </Link>
                        ) : (
                          inner
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}

          <div className="pt-6 text-center">
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 font-display text-lg italic text-muted-foreground hover:text-primary"
            >
              {t("home.viewTimeline")}
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
