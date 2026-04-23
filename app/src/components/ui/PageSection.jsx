import { createElement } from "react";
import Container from "./Container";

export default function PageSection({
  children,
  className = "",
  containerClassName = "",
  compact = false,
  as = "section",
  ...rest
}) {
  const sectionClasses = ["section", compact ? "section-compact" : "", className]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    { className: sectionClasses, ...rest },
    <Container className={containerClassName}>{children}</Container>,
  );
}
