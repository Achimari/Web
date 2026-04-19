import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { SUPPORTED_LOCALES, useI18n } from "../../i18n";
import "../../styles/header.css";

export default function Header({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useI18n();

  const navLinks = t("header.nav", []);
  const languageLabel = t("header.languageLabel", "Language");
  const languageNames = t("header.languages", {});
  const navId = "site-nav";

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("mobile-menu-open");
      return undefined;
    }

    const isMobile = window.matchMedia("(max-width: 780px)").matches;
    if (isMobile) {
      document.body.classList.add("mobile-menu-open");
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [open]);

  const renderLangSwitch = (className, shouldCloseMenu = false) => (
    <div className={className} role="group" aria-label={languageLabel}>
      {SUPPORTED_LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${locale === code ? " active" : ""}`}
          onClick={() => {
            setLocale(code);
            if (shouldCloseMenu) {
              setOpen(false);
            }
          }}
          aria-label={`${languageLabel}: ${languageNames[code] || code.toUpperCase()}`}
        >
          {languageNames[code] || code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <NavLink to="/" className="logo-block logo-link" onClick={() => setOpen(false)}>
            <img src="CharchLogo.jpg" alt="Church Logo" className="header-logo" />

            <div className="logo-text">
              <div className="logo-title">{t("header.logoTitle", "Church")}</div>
              <div className="logo-subtitle">{t("header.logoSubtitle", "Awakening")}</div>
            </div>
          </NavLink>
        </div>

        <nav id={navId} className={`header-nav ${open ? "active" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header-link${isActive ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="mobile-nav-controls">
            {renderLangSwitch("lang-switch", true)}
          </div>
        </nav>

        <div className="header-actions">
          {renderLangSwitch("lang-switch header-lang", true)}

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === "light" ? t("header.themeToDark") : t("header.themeToLight")}
          >
            {theme === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
          </button>

          <button
            className={`menu-btn ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={navId}
            aria-label={open ? t("header.menuClose", "Close menu") : t("header.menuOpen")}
          >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </button>
        </div>
      </div>

      <button
        type="button"
        className={`header-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
        aria-label={t("header.menuClose", "Close menu")}
        tabIndex={open ? 0 : -1}
      />
    </header>
  );
}
