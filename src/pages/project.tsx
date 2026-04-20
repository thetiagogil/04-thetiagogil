import { StatusPill } from "@/components/StatusPill";
import { getProjectBySlug } from "@/database";
import { useI18n } from "@/providers/I18nProvider";
import { Link, Navigate, useParams } from "react-router-dom";

export const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, tr } = useI18n();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/" replace />;

  const startYear = project.dateStart.getFullYear();
  const endYear = project.dateEnd
    ? project.dateEnd.getFullYear()
    : project.dateEnd === null
      ? null
      : undefined;
  const endLabel =
    endYear === null ? t("timeline.present") : (endYear ?? startYear);

  return (
    <article className="max-w-215 mx-auto px-6 md:px-12 py-10 md:py-16">
      <Link
        to="/timeline"
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
      >
        {t("project.back")}
      </Link>

      <header className="mt-8">
        <h1 className="font-display text-3xl md:text-5xl tracking-tight text-balance">
          {project.titleKey ? tr(project.titleKey) : project.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {project.orgKey ? tr(project.orgKey) : project.org}
          </span>
          <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
            {startYear}–{endLabel}
          </span>
          {project.status && <StatusPill status={project.status} />}
        </div>
      </header>

      {/* Project image placeholder */}
      {project.img && (
        <div className="mt-10 aspect-video w-full rounded-sm border border-border bg-muted flex items-center justify-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {project.img}
          </span>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-border/70 py-6">
        {project.roleKey && (
          <Meta label={t("project.role")} value={tr(project.roleKey)} />
        )}
        <Meta label={t("project.years")} value={`${startYear} – ${endLabel}`} />
        {project.techs.length > 0 && (
          <Meta label={t("project.stack")} value={project.techs.join(" · ")} />
        )}
      </div>

      {project.subjectKey && (
        <p className="mt-10 font-display text-xl md:text-2xl leading-snug text-balance">
          {tr(project.subjectKey)}
        </p>
      )}

      {project.descriptionKey && (
        <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty">
          {tr(project.descriptionKey)}
        </p>
      )}

      {project.longDescriptionKey && (
        <div className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground text-pretty whitespace-pre-line">
          {tr(project.longDescriptionKey)}
        </div>
      )}

      <div className="mt-12 flex flex-wrap gap-3">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.18em] hover:bg-primary transition-colors"
          >
            {t("project.visit")} ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-foreground font-mono text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
          >
            {t("project.repo")} ↗
          </a>
        )}
      </div>
    </article>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      {label}
    </p>
    <p className="mt-1.5 text-sm">{value}</p>
  </div>
);
