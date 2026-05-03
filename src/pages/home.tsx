import portrait from "@/assets/tg.png";
import { HomeFeaturedSection } from "@/components/home/HomeFeaturedSection";
import { ItemDetailsContent } from "@/components/item-details/ItemDetailsContent";
import { person } from "@/data";
import { useI18n } from "@/providers/i18n-context";
import type { Category } from "@/types/common";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const sectionOrder: Category[] = [
  "experience",
  "projects",
  "education",
  "certifications",
];

export const HomePage = () => {
  const { t, tv } = useI18n();
  const homeBio = tv("home.bio") ?? t("home.bio");

  return (
    <div className="mx-auto max-w-350 px-6 py-10 md:px-12 md:py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <aside className="space-y-8 lg:col-span-5 lg:sticky lg:top-10 lg:self-start">
          <div className="grain relative overflow-hidden rounded-sm border border-border">
            <img
              src={portrait}
              alt="Tiago Gil"
              width={768}
              height={960}
              className="block h-auto w-full grayscale-15"
            />
            <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] text-background/90 mix-blend-difference">
              MMXXV {"\u00B7"} 01
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:text-[12px]">
              {t("home.role")}
            </p>
            <h1 className="mt-2 font-display text-3xl tracking-tight text-balance md:text-5xl">
              {person.name}
            </h1>
            <ItemDetailsContent
              value={homeBio}
              className="mt-5 max-w-xl [&_p]:text-justify [&_p]:md:text-base!"
            />
          </div>

          <div className="space-y-2 font-mono text-[11px] uppercase tracking-[0.18em]">
            <p className="text-muted-foreground">
              {t("home.based")}{" "}
              <span className="text-foreground">{t("home.location")}</span>
            </p>
            <p className="text-muted-foreground">
              <a
                href={`mailto:${person.email}`}
                className="text-foreground transition-colors duration-300 hover:text-primary"
              >
                {person.email}
              </a>
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {person.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:text-primary"
              >
                <span>{social.label}</span>
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <RouterLink
              to="/timeline"
              className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:bg-primary"
            >
              {t("home.viewTimeline")}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
            </RouterLink>
            <a
              href={person.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              <span>{t("home.downloadCv")}</span>
              <Download className="h-3.5 w-3.5" strokeWidth={1.8} />
            </a>
          </div>
        </aside>

        <section className="space-y-12 lg:col-span-7">
          {sectionOrder.map((category) => (
            <HomeFeaturedSection key={category} category={category} />
          ))}

          <div className="pt-4 text-center">
            <RouterLink
              to="/timeline"
              className="inline-flex items-center gap-2 font-display text-base italic text-muted-foreground transition-colors duration-300 hover:text-primary md:text-lg"
            >
              {t("home.viewTimeline")}
              <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
            </RouterLink>
          </div>
        </section>
      </div>
    </div>
  );
};
