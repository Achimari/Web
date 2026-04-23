export default function PageHeader({
  title,
  subtitle,
  intro,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  introClassName = "",
  headingLevel = 1,
}) {
  const safeHeadingLevel = Math.min(6, Math.max(1, headingLevel));
  const Heading = `h${safeHeadingLevel}`;

  const headerClasses = ["page-header", className].filter(Boolean).join(" ");
  const titleClasses = ["section-title", safeHeadingLevel === 1 ? "page-title" : "", titleClassName]
    .filter(Boolean)
    .join(" ");
  const subtitleClasses = ["section-text", safeHeadingLevel === 1 ? "page-subtitle" : "", subtitleClassName]
    .filter(Boolean)
    .join(" ");
  const introClasses = ["media-intro-note", introClassName].filter(Boolean).join(" ");

  return (
    <header className={headerClasses}>
      {title ? <Heading className={titleClasses}>{title}</Heading> : null}
      {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
      {intro ? <p className={introClasses}>{intro}</p> : null}
    </header>
  );
}
