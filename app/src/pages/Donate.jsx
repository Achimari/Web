import "../styles/home.css";
import Footer from "../components/layout/Footer";
import { useI18n } from "../i18n";

export default function Donate() {
  const { t } = useI18n();
  const donationDetails = t("donate.details", []);

  return (
    <main>
      <section className="section">
        <div className="container">
          <header className="page-header">
            <h1 className="section-title page-title">{t("donate.title")}</h1>
            <p className="section-text page-subtitle">{t("donate.subtitle")}</p>
          </header>

          <div className="contact-grid">
            <article className="card donate-card">
              <h2 className="card-title">{t("donate.detailsTitle")}</h2>
              <ul className="donation-list">
                {donationDetails.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>

            <article className="card donate-card">
              <h2 className="card-title">{t("donate.supportTitle")}</h2>
              <p className="card-text">{t("donate.supportText")}</p>
              <p className="card-text block-spaced-sm">{t("donate.checkText")}</p>
              <p className="card-text block-spaced-md">
                {t("donate.verse")}
                <br />
                <em>{t("donate.verseRef")}</em>
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
