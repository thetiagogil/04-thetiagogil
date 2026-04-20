import { DetailBackButton } from "@/components/detail/DetailBackButton";
import { DetailSection } from "@/components/detail/DetailSection";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { ProjectPageHeader } from "@/components/project/ProjectPageHeader";
import { TechBadge } from "@/components/TechBadge";
import { getExperienceBySlug, getSorted, projects } from "@/database";
import { getItemOrg, getItemTitle } from "@/lib/data-helpers";
import { formatMonthYearRange } from "@/lib/date";
import { getItemHref } from "@/lib/details";
import { useI18n } from "@/providers/i18n-context";
import { Link, Navigate, useParams } from "react-router-dom";

const normalizeOrg = (value: string) => value.trim().toLowerCase();

export const ExperiencePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t, tr } = useI18n();

  const experience = slug ? getExperienceBySlug(slug) : undefined;

  if (!experience) return <Navigate to="/" replace />;

  const title = getItemTitle(experience, tr);
  const org = getItemOrg(experience, tr);
  const dateLabel = formatMonthYearRange({
    dateStart: experience.dateStart,
    dateEnd: experience.dateEnd,
    lang,
    presentLabel: t("timeline.present"),
  });
  const relatedProjects = getSorted(
    projects.filter(
      (project) =>
        normalizeOrg(project.org) !== "" &&
        normalizeOrg(project.org) === normalizeOrg(org),
    ),
  );

  return (
    <article className="mx-auto max-w-215 px-6 py-10 md:px-12 md:py-16">
      <DetailBackButton label={t("detail.back")} />

      <ProjectPageHeader
        title={title}
        org={org}
        dateLabel={dateLabel}
        status={experience.status}
      />

      {experience.img && (
        <figure className="mt-10 overflow-hidden rounded-sm border border-border bg-muted/40">
          <img
            src={`/${experience.img}`}
            alt={`${org || title} preview`}
            className="aspect-video w-full object-cover object-top"
            loading="eager"
          />
        </figure>
      )}

      {experience.techs.length > 0 && (
        <DetailSection>
          <ProjectMeta label={t("project.stack")}>
            <div className="mt-2 flex flex-wrap gap-2">
              {experience.techs.map((tag) => (
                <TechBadge key={tag} label={tag} />
              ))}
            </div>
          </ProjectMeta>
        </DetailSection>
      )}

      {experience.descriptionKey && (
        <DetailSection>
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
            {tr(experience.descriptionKey)}
          </p>
        </DetailSection>
      )}

      {relatedProjects.length > 0 && (
        <DetailSection>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="font-display text-xl tracking-tight md:text-3xl">
              {t("experience.relatedProjects")}
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {String(relatedProjects.length).padStart(2, "0")}
            </span>
          </div>

          <ul className="divide-y divide-border/70">
            {relatedProjects.map((project) => {
              const projectHref = getItemHref(project);
              const projectDateLabel = formatMonthYearRange({
                dateStart: project.dateStart,
                dateEnd: project.dateEnd,
                lang,
                presentLabel: t("timeline.present"),
              });
              const hasProjectLink = Boolean(projectHref || project.link);
              const projectContent = (
                <div className="py-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <h3 className="font-display text-lg tracking-tight text-balance transition-colors duration-300 group-hover:text-primary md:text-2xl">
                      {getItemTitle(project, tr)}
                      {hasProjectLink && (
                        <span className="ml-2 text-muted-foreground">
                          {"\u2192"}
                        </span>
                      )}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
                      {projectDateLabel}
                    </span>
                  </div>

                  {project.descriptionKey && (
                    <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground text-pretty md:text-base">
                      {tr(project.descriptionKey)}
                    </p>
                  )}

                  {project.techs.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.techs.map((tag) => (
                        <TechBadge key={tag} label={tag} />
                      ))}
                    </div>
                  )}
                </div>
              );

              return (
                <li key={project.id} className="group">
                  {projectHref ? (
                    <Link
                      to={projectHref}
                      className="block transition-colors duration-300"
                    >
                      {projectContent}
                    </Link>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition-colors duration-300"
                    >
                      {projectContent}
                    </a>
                  ) : (
                    projectContent
                  )}
                </li>
              );
            })}
          </ul>
        </DetailSection>
      )}

      {experience.link && (
        <DetailSection>
          <div className="flex flex-wrap gap-3">
            <a
              href={experience.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:bg-primary"
            >
              {t("experience.visit")} {"\u2197"}
            </a>
          </div>
        </DetailSection>
      )}
    </article>
  );
};
