import { ImageLightbox } from "@/components/ImageLightbox";
import { ItemDetailsContent } from "@/components/item-details/ItemDetailsContent";
import { LoadableImage } from "@/components/LoadableImage";
import { MetaPill } from "@/components/MetaPill";
import { ProjectImage } from "@/components/project/ProjectImage";
import { TechBadge } from "@/components/TechBadge";
import { getDetailItemByCategoryAndSlug } from "@/data";
import { getItemOrg, getItemTitle } from "@/lib/data-helpers";
import { formatMonthYearRange, formatProjectOriginDate } from "@/lib/date";
import { isProjectItem } from "@/lib/details";
import { getProjectImages } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { useI18n } from "@/providers/i18n-context";
import type { Category } from "@/types/common";
import { ArrowLeft, ExternalLink, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const articleContentClassName = "mt-8 space-y-8 md:mt-10 md:space-y-10";
const articleSectionClassName = "border-t border-border/60 pt-10";

const defaultLinkLabelKey: Record<Category, string> = {
  experience: "experience.visit",
  education: "education.visit",
  certifications: "certification.visit",
  projects: "project.visit",
};

export const ItemDetailsPage = ({ category }: { category: Category }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { lang, t, tr, tv } = useI18n();
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const [imageLightboxOpen, setImageLightboxOpen] = useState(false);

  const item = slug
    ? getDetailItemByCategoryAndSlug(category, slug)
    : undefined;

  if (!item) return <Navigate to="/" replace />;

  const hasImageError = Boolean(item.img && failedImageSrc === item.img);
  const isProject = isProjectItem(item);
  const projectImages = isProject ? getProjectImages(item) : [];
  const title = getItemTitle(item, tr);
  const org = getItemOrg(item, tr);
  const dateLabel = isProject
    ? formatProjectOriginDate(item.dateStart, lang)
    : formatMonthYearRange({
        dateStart: item.dateStart,
        dateEnd: item.dateEnd,
        lang,
        presentLabel: t("timeline.present"),
      });
  const details = tv(item.detailsKey);
  const imageAlt = `${org || title} preview`;
  const hasDetailsContent = Boolean(item.descriptionKey || details);
  const hasMedia = isProjectItem(item)
    ? projectImages.length > 0
    : Boolean(item.img && !hasImageError);
  const projectRepo = isProject ? item.repo : undefined;
  const actionLinks = [
    ...(item.link
      ? [
          {
            href: item.link,
            label: t(defaultLinkLabelKey[item.category]),
            variant: "primary" as const,
          },
        ]
      : []),
    ...(projectRepo
      ? [
          {
            href: projectRepo,
            label: t("project.repo"),
            variant: item.link ? ("secondary" as const) : ("primary" as const),
          },
        ]
      : []),
    ...(item.detailLinks ?? [])
      .filter((entry) => entry.href)
      .map((entry, index) => ({
        href: entry.href,
        label: entry.labelKey ? t(entry.labelKey) : entry.label,
        variant:
          entry.variant ??
          (!item.link && !projectRepo && index === 0 ? "primary" : "secondary"),
      })),
  ];

  const handleBack = () => {
    const historyState = window.history.state as { idx?: number } | null;

    if (typeof historyState?.idx === "number" && historyState.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/timeline", { replace: true });
  };

  return (
    <article className="mx-auto max-w-215 px-6 py-10 md:px-12 md:py-14">
      <button
        type="button"
        onClick={handleBack}
        className="inline-flex cursor-pointer items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>{t("detail.back")}</span>
      </button>

      <header className="mt-8 space-y-2 md:mt-10">
        {org && (
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-muted-foreground md:text-[14px]">
            {org}
          </p>
        )}

        <div className="space-y-3">
          <h1 className="font-display text-2xl tracking-tight text-balance md:text-5xl">
            {title}
          </h1>

          {item.subjectKey && (
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
              {tr(item.subjectKey)}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono text-[10px] text-muted-foreground md:text-[11px]">
              {dateLabel}
            </span>
            {isProject && <MetaPill kind="project" value={item.type} />}
            {item.status && <MetaPill kind="status" value={item.status} />}
          </div>
        </div>
      </header>

      {(hasMedia ||
        item.techs.length > 0 ||
        hasDetailsContent ||
        actionLinks.length > 0) && (
        <div className={articleContentClassName}>
          {isProject ? (
            projectImages.length > 0 ? (
              <div>
                <ProjectImage images={projectImages} alt={`${title} preview`} />
              </div>
            ) : null
          ) : item.img && !hasImageError ? (
            <>
              <figure className="overflow-hidden rounded-sm border border-border bg-muted/40">
                <button
                  type="button"
                  aria-label="Open image viewer"
                  onClick={() => setImageLightboxOpen(true)}
                  className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <LoadableImage
                    key={item.img}
                    src={`/${item.img}`}
                    alt={imageAlt}
                    className="aspect-video w-full object-cover object-center"
                    loading="eager"
                    onError={() => setFailedImageSrc(item.img ?? null)}
                  />
                  <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </button>
              </figure>

              <ImageLightbox
                alt={imageAlt}
                images={[item.img]}
                open={imageLightboxOpen}
                onImageError={() => setFailedImageSrc(item.img ?? null)}
                onOpenChange={setImageLightboxOpen}
              />
            </>
          ) : null}

          {item.techs.length > 0 && (
            <section className={articleSectionClassName}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:text-[11px]">
                {t("project.stack")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.techs.map((tag) => (
                  <TechBadge key={tag} label={tag} />
                ))}
              </div>
            </section>
          )}

          {hasDetailsContent && (
            <section className={cn(articleSectionClassName, "space-y-6")}>
              {details ? (
                <ItemDetailsContent value={details} />
              ) : item.descriptionKey ? (
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
                  {tr(item.descriptionKey)}
                </p>
              ) : null}
            </section>
          )}

          {actionLinks.length > 0 && (
            <section className={articleSectionClassName}>
              <div className="flex flex-wrap gap-3">
                {actionLinks.map((entry) => (
                  <a
                    key={`${entry.href}-${entry.label}`}
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "inline-flex items-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300",
                      entry.variant === "primary"
                        ? "bg-foreground text-background hover:bg-primary"
                        : "border border-foreground hover:bg-foreground hover:text-background",
                    )}
                  >
                    <span>{entry.label}</span>
                    <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </article>
  );
};
