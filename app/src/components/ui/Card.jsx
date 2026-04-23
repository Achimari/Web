import { createElement } from "react";

export default function Card({ children, className = "", as = "div" }) {
  const classes = ["card", className].filter(Boolean).join(" ");
  return createElement(as, { className: classes }, children);
}
