import "../styles/home.css";
import Footer from "../components/layout/Footer";
import { useI18n } from "../i18n";
import { FaBus, FaClock, FaExternalLinkAlt, FaHandsHelping, FaMapMarkerAlt, FaPhoneAlt, FaSubway } from "react-icons/fa";

export default function Contact() {
  const { t } = useI18n();

  const contacts = t("contact.contacts", []);
  const weeklySchedule = t("contact.weeklySchedule", []);
  const routes = t("contact.routes", []);
  const helpItems = t("contact.helpItems", []);

  return (
    <main className="contact-page">
      <section className="section">
        <div className="container">
          <header className="page-header contact-hero">
            <h1 className="section-title page-title">{t("contact.title")}</h1>
            <p className="section-text page-subtitle">{t("contact.subtitle")}</p>
          </header>

          <div className="contact-grid contact-grid-main contact-grid-primary">
            <article className="card contact-card">
              <h2 className="contact-card-title">
                <span className="contact-title-icon" aria-hidden="true"><FaPhoneAlt /></span>
                {t("contact.cards.reach")}
              </h2>

              <div className="contact-actions">
                {contacts.map((person) => (
                  <a className="contact-action-row" href={`tel:${person.phone}`} key={person.phone}>
                    <span className="contact-action-label">{person.name}</span>
                    <span className="contact-action-value">{person.label}</span>
                  </a>
                ))}

                <a className="contact-action-row" href="mailto:atmodasdraudze@inbox.lv">
                  <span className="contact-action-label">{t("contact.emailLabel")}</span>
                  <span className="contact-action-value">atmodasdraudze@inbox.lv</span>
                </a>
              </div>
            </article>

            <article className="card contact-card">
              <h2 className="contact-card-title">
                <span className="contact-title-icon" aria-hidden="true"><FaMapMarkerAlt /></span>
                {t("contact.cards.address")}
              </h2>
              <p className="contact-address-main">{t("contact.addressLine")}</p>
              <ul className="contact-route-list">
                {routes[0] && <li><FaBus aria-hidden="true" /> {routes[0]}</li>}
                {routes[1] && <li><FaSubway aria-hidden="true" /> {routes[1]}</li>}
                {routes[2] && <li><FaSubway aria-hidden="true" /> {routes[2]}</li>}
              </ul>
              <a
                className="media-action-link"
                href="https://maps.google.com/?q=Slokas%20iela%2090,%20R%C4%ABga"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.mapsLabel")} <FaExternalLinkAlt aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-compact contact-followup-section">
        <div className="container contact-grid contact-grid-main contact-grid-secondary">
          <article className="card contact-card">
            <h2 className="contact-card-title">
              <span className="contact-title-icon" aria-hidden="true"><FaClock /></span>
              {t("contact.cards.schedule")}
            </h2>
            <table className="schedule-table" aria-label={t("contact.cards.schedule")}>
              <tbody>
                {weeklySchedule.map(([event, time]) => (
                  <tr key={event}>
                    <td>{event}</td>
                    <td>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="note-text">{t("contact.scheduleNote")}</p>
          </article>

          <article className="card contact-card">
            <h2 className="contact-card-title">
              <span className="contact-title-icon" aria-hidden="true"><FaHandsHelping /></span>
              {t("contact.cards.help")}
            </h2>
            <ul className="contact-help-list">
              {helpItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
