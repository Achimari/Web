import { useRef } from "react";
import "../../styles/home.css";

function getFaviconUrl(href) {
  try {
    const { hostname } = new URL(href);
    return `https://www.google.com/s2/favicons?domain=${hostname}&sz=128`;
  } catch {
    return "";
  }
}

export default function UsefulLinksCarousel({ items }) {
  const trackRef = useRef(null);

  return (
    <div className="useful-carousel">
      <div className="useful-track" ref={trackRef}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="useful-link-card"
            aria-label={item.title}
          >
            <span className="useful-link-logo-box" aria-hidden="true">
              <img
                src={getFaviconUrl(item.href)}
                alt=""
                aria-hidden="true"
                className="useful-link-logo"
                loading="lazy"
              />
            </span>
            <span className="useful-link-title">{item.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
