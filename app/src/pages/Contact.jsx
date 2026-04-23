import "../styles/home.css";
import Footer from "../components/layout/Footer";
import Card from "../components/ui/Card";
import CardHead from "../components/ui/CardHead";
import PageHeader from "../components/ui/PageHeader";
import PageSection from "../components/ui/PageSection";
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
      <PageSection>
        <PageHeader
          className="contact-hero"
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="contact-grid contact-grid-main contact-grid-primary">
          <Card as="article" className="contact-card hover-lift-card">
            <CardHead
              icon={FaPhoneAlt}
              title={t("contact.cards.reach")}
              className="contact-card-head"
              titleClassName="contact-card-title"
              iconClassName="icon-chip-sm"
              headingLevel={2}
            />

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
          </Card>

          <Card as="article" className="contact-card hover-lift-card">
            <CardHead
              icon={FaMapMarkerAlt}
              title={t("contact.cards.address")}
              className="contact-card-head"
              titleClassName="contact-card-title"
              iconClassName="icon-chip-sm"
              headingLevel={2}
            />
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
          </Card>
        </div>
      </PageSection>

      <PageSection className="contact-followup-section" containerClassName="contact-grid contact-grid-main contact-grid-secondary" compact>
        <Card as="article" className="contact-card hover-lift-card">
          <CardHead
            icon={FaClock}
            title={t("contact.cards.schedule")}
            className="contact-card-head"
            titleClassName="contact-card-title"
            iconClassName="icon-chip-sm"
            headingLevel={2}
          />
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
        </Card>

        <Card as="article" className="contact-card contact-card-help hover-lift-card">
          <CardHead
            icon={FaHandsHelping}
            title={t("contact.cards.help")}
            className="contact-card-head"
            titleClassName="contact-card-title"
            iconClassName="icon-chip-sm"
            headingLevel={2}
          />
          <ul className="contact-help-list">
            {helpItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="verse-block contact-help-verse">
            <p className="verse-text">{t("contact.helpVerse.text")}</p>
            <p className="verse-reference">
              <em>{t("contact.helpVerse.reference")}</em>
            </p>
          </div>
        </Card>
      </PageSection>

      <Footer />
    </main>
  );
}
