import "../styles/home.css";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import UsefulLinksCarousel from "../components/ui/UsefulLinksCarousel";
import PageSection from "../components/ui/PageSection";
import RoadmapSteps from "../components/ui/RoadmapSteps";
import Card from "../components/ui/Card";
import { useI18n } from "../i18n";
import { FaHeart, FaBookOpen, FaHandsHelping, FaClock, FaMusic, FaComments } from "react-icons/fa";

export default function Home() {
  const { t } = useI18n();

  const firstVisitCards = t("home.firstVisit.cards", []);
  const visitSteps = t("home.visitFlow.steps", []);
  const usefulLinks = t("home.useful.links", []);
  const firstVisitIcons = [FaHeart, FaBookOpen, FaHandsHelping];
  const visitStepIcons = [FaClock, FaMusic, FaComments];

  return (
    <main className="home-page">
      <section className="hero hero-main home-hero" id="home">
        <div className="container hero-main-grid">
          <div className="hero-main-content">
            <p className="hero-kicker">{t("home.hero.kicker")}</p>
            <h1 className="hero-title">{t("home.hero.title")}</h1>
            <p className="hero-subtitle">{t("home.hero.subtitle")}</p>
            <div className="hero-actions">
              <Link to="/about" className="btn hero-btn">{t("home.hero.ctaFirst")}</Link>
              <Link to="/media" className="btn btn-secondary hero-btn">{t("home.hero.ctaSecond")}</Link>
            </div>
            <div className="hero-invite-card">
              <p className="hero-invite-main">{t("home.hero.inviteMain")}</p>
              <p className="hero-invite-sub">{t("home.hero.inviteSub")}</p>
            </div>
          </div>

          <div className="hero-main-photo-wrap">
            <img
              src="/main-photo.jpg"
              alt="Church service"
              className="hero-main-photo"
              loading="eager"
              onError={(event) => {
                event.currentTarget.src = "/1CharchLogo.jpg";
              }}
            />
          </div>
        </div>
      </section>

      <PageSection className="home-info-section" id="about">
        <h2 className="section-title">{t("home.firstVisit.title")}</h2>
        <p className="section-text">{t("home.firstVisit.text")}</p>
        <RoadmapSteps
          steps={firstVisitCards.slice(0, 3)}
          gridBaseClass="info-strip"
          className="info-strip-spaced"
          stepBaseClass="info-item"
          stepClassName="hover-lift-card"
          showIndex={false}
          iconClassName="icon-chip icon-chip-sm"
          titleClassName="info-item-title"
          getIcon={(_, index) => firstVisitIcons[index]}
        />
      </PageSection>

      <PageSection className="home-info-section home-visit-section" compact>
        <header className="about-roadmap-head">
          <h2 className="section-title">{t("home.visitFlow.title")}</h2>
          <p className="section-text">{t("home.visitFlow.text")}</p>
        </header>

        <RoadmapSteps
          steps={visitSteps}
          className="visit-roadmap-grid"
          stepClassName="visit-roadmap-step hover-lift-card"
          twoDigitIndex
          getIcon={(_, index) => visitStepIcons[index]}
          getTitleClassName={(_, index) => (index === 1 ? "visit-step-title-single" : "")}
        />
      </PageSection>

      <PageSection className="home-verse-links-section" containerClassName="home-verse-links-wrap" compact id="home-content-start">
        <Card as="article" className="home-verse">
          <div className="verse-block verse-block-centered">
            <p className="verse-text">{t("home.verse.text")}</p>
            <p className="verse-reference"><em>{t("home.verse.reference")}</em></p>
          </div>
        </Card>

        <div className="home-links-inline">
          <h2 className="useful-title">{t("home.useful.title")}</h2>
          <p className="useful-subtitle">{t("home.useful.subtitle")}</p>
          <UsefulLinksCarousel items={usefulLinks} />
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
