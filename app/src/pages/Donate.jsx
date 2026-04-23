import "../styles/home.css";
import Footer from "../components/layout/Footer";
import Card from "../components/ui/Card";
import PageHeader from "../components/ui/PageHeader";
import PageSection from "../components/ui/PageSection";
import { useI18n } from "../i18n";

export default function Donate() {
  const { t } = useI18n();
  const donationDetails = t("donate.details", []);

  return (
    <main>
      <PageSection>
        <PageHeader
          title={t("donate.title")}
          subtitle={t("donate.subtitle")}
        />

        <div className="contact-grid">
          <Card as="article" className="donate-card hover-lift-card">
            <h2 className="card-title">{t("donate.detailsTitle")}</h2>
            <ul className="donation-list">
              {donationDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </Card>

          <Card as="article" className="donate-card hover-lift-card">
            <h2 className="card-title">{t("donate.supportTitle")}</h2>
            <p className="card-text">{t("donate.supportText")}</p>
            <p className="card-text block-spaced-sm">{t("donate.checkText")}</p>
            <div className="verse-block">
              <p className="verse-text">{t("donate.verse")}</p>
              <p className="verse-reference"><em>{t("donate.verseRef")}</em></p>
            </div>
          </Card>
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
