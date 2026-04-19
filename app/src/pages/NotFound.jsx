import { Link } from "react-router-dom";
import "../styles/home.css";
import { useI18n } from "../i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <main>
      <section className="section">
        <div className="container">
          <header className="page-header">
            <h1 className="section-title page-title">{t("notFound.title")}</h1>
            <p className="section-text page-subtitle">{t("notFound.text")}</p>
          </header>
          <p className="not-found-action">
            <Link to="/" className="btn">{t("notFound.home")}</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
