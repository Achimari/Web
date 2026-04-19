import "../styles/home.css";
import Footer from "../components/layout/Footer";
import { useI18n } from "../i18n";
import { FaBookOpen, FaExternalLinkAlt, FaFileAlt, FaMusic, FaTools, FaVideo } from "react-icons/fa";

const iconBySection = {
  docs: FaFileAlt,
  music: FaMusic,
  tools: FaTools,
  video: FaVideo,
};

export default function Media() {
  const { t } = useI18n();
  const mediaResources = t("media.resources", []);
  const documentSections = t("media.documentSections", []);

  return (
    <main>
      <section className="section">
        <div className="container">
          <header className="page-header">
            <h1 className="section-title page-title">{t("media.title")}</h1>
            <p className="section-text page-subtitle">{t("media.subtitle")}</p>
            <p className="media-intro-note">{t("media.introNote")}</p>
          </header>

          <div className="media-top-grid">
            {mediaResources.map((item) => (
              <article className="card media-card media-feature-card" key={item.title}>
                <div className="media-card-head">
                  <span className="media-icon-box" aria-hidden="true">
                    <FaVideo />
                  </span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-text">{item.description}</p>
                <a className="media-action-link" href={item.href} target="_blank" rel="noreferrer">
                  {t("media.openPlaylist")} <FaExternalLinkAlt aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-compact media-docs-section">
        <div className="container">
          <h2 className="section-title">{t("media.docsTitle")}</h2>
          <div className="resource-groups media-doc-grid">
            {documentSections.map((group) => {
              const Icon = iconBySection[group.icon] || FaFileAlt;
              return (
                <article className="card media-card" key={group.title}>
                  <div className="media-card-head">
                    <span className="media-icon-box" aria-hidden="true">
                      <Icon />
                    </span>
                    <h3 className="card-title">{group.title}</h3>
                  </div>
                  <ul className="resource-list">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} target="_blank" rel="noreferrer">
                          <FaBookOpen aria-hidden="true" />
                          <span>{link.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
