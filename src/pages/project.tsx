import { ProjectImage } from "@/components/project/ProjectImage";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { ProjectPageHeader } from "@/components/project/ProjectPageHeader";
import { TechBadge } from "@/components/TechBadge";
import { getProjectBySlug } from "@/database";
import { formatMonthYearRange } from "@/lib/date";
import { getItemOrg, getItemTitle } from "@/lib/data-helpers";
import { useI18n } from "@/providers/i18n-context";
import { Link, Navigate, useParams } from "react-router-dom";

export const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t, tr } = useI18n();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/" replace />;

  const title = getItemTitle(project, tr);
  const org = getItemOrg(project, tr);
  const dateLabel = formatMonthYearRange({
    dateStart: project.dateStart,
    dateEnd: project.dateEnd,
    lang,
    presentLabel: t("timeline.present"),
  });

  return (
    <article className="mx-auto max-w-215 px-6 py-10 md:px-12 md:py-16">
      <Link
        to="/timeline"
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground md:text-[11px]"
      >
        {t("project.back")}
      </Link>

      <ProjectPageHeader
        title={title}
        org={org}
        dateLabel={dateLabel}
        status={project.status}
      />

      <ProjectImage src={project.img} alt={`${title} preview`} />

      <div className="mt-10 grid grid-cols-1 gap-8 border-y border-border/70 py-6 md:grid-cols-3">
        {project.roleKey && (
          <ProjectMeta label={t("project.role")}>
            {tr(project.roleKey)}
          </ProjectMeta>
        )}
        <ProjectMeta label={t("project.dates")}>{dateLabel}</ProjectMeta>
        {project.techs.length > 0 && (
          <ProjectMeta label={t("project.stack")}>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techs.map((tag) => (
                <TechBadge key={tag} label={tag} />
              ))}
            </div>
          </ProjectMeta>
        )}
      </div>

      {project.subjectKey && (
        <p className="mt-10 font-display text-lg leading-snug text-balance md:text-2xl">
          {tr(project.subjectKey)}
        </p>
      )}

      {project.descriptionKey && (
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {tr(project.descriptionKey)}
        </p>
      )}

      {project.longDescriptionKey && (
        <div className="mt-8 whitespace-pre-line text-sm leading-relaxed text-muted-foreground text-pretty md:text-lg">
          {tr(project.longDescriptionKey)}
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] text-background transition-colors duration-300 hover:bg-primary"
          >
            {t("project.visit")} {"\u2197"}
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-foreground px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            {t("project.repo")} {"\u2197"}
          </a>
        )}
      </div>
    </article>
  );
};
