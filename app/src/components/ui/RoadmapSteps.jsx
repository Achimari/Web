import Card from "./Card";

export default function RoadmapSteps({
  steps = [],
  className = "",
  stepClassName = "",
  gridBaseClass = "about-roadmap-grid",
  stepBaseClass = "roadmap-step",
  descriptionKey = "text",
  twoDigitIndex = false,
  showIndex = true,
  iconClassName = "roadmap-step-icon",
  titleClassName = "card-title",
  textClassName = "card-text",
  getIcon,
  getTitleClassName,
}) {
  if (!Array.isArray(steps) || steps.length === 0) {
    return null;
  }

  const gridClasses = [gridBaseClass, className].filter(Boolean).join(" ");

  return (
    <div className={gridClasses}>
      {steps.map((step, index) => {
        const Icon = getIcon ? getIcon(step, index) : null;
        const dynamicTitleClassName = getTitleClassName ? getTitleClassName(step, index) : "";
        const description = step[descriptionKey] ?? step.text ?? step.description;
        const stepIndex = twoDigitIndex ? String(index + 1).padStart(2, "0") : index + 1;

        return (
          <Card as="article" className={[stepBaseClass, stepClassName].filter(Boolean).join(" ")} key={step.title || index}>
            {showIndex ? <span className="roadmap-step-index">{stepIndex}</span> : null}
            {Icon ? (
              <span
                className={iconClassName}
                aria-hidden="true"
                draggable={false}
                onDragStart={(event) => event.preventDefault()}
              >
                <Icon draggable={false} />
              </span>
            ) : null}
            <h3 className={[titleClassName, dynamicTitleClassName].filter(Boolean).join(" ")}>{step.title}</h3>
            <p className={textClassName}>{description}</p>
          </Card>
        );
      })}
    </div>
  );
}
