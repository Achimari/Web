import { createElement } from "react";

export default function Container({ children, className = "", as = "div" }) {
  const classes = ["container", className].filter(Boolean).join(" ");
  return createElement(as, { className: classes }, children);
}
