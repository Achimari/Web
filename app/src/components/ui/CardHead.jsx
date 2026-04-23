export default function CardHead({
  icon: Icon,
  title,
  className = "",
  titleClassName = "",
  iconClassName = "",
  headingLevel = 2,
}) {
  const safeHeadingLevel = Math.min(6, Math.max(1, headingLevel));
  const Heading = `h${safeHeadingLevel}`;

  const headClasses = ["card-head", className].filter(Boolean).join(" ");
  const iconClasses = ["icon-chip", iconClassName].filter(Boolean).join(" ");
  const headingClasses = ["card-title", titleClassName].filter(Boolean).join(" ");

  return (
    <div className={headClasses}>
      {Icon ? (
        <span
          className={iconClasses}
          aria-hidden="true"
          draggable={false}
          onDragStart={(event) => event.preventDefault()}
        >
          <Icon draggable={false} />
        </span>
      ) : null}
      <Heading className={headingClasses}>{title}</Heading>
    </div>
  );
}
