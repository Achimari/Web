import "../styles/home.css";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import UsefulLinksCarousel from "../components/ui/UsefulLinksCarousel";
import { useI18n } from "../i18n";
import { FaHeart, FaBookOpen, FaHandsHelping, FaClock, FaMusic, FaComments } from "react-icons/fa";

export default function Home() {
  const { t } = useI18n();

  const firstVisitCards = t("home.firstVisit.cards", []);
  const visitSteps = t("home.visitFlow.steps", []);
  const usefulLinks = t("home.useful.links", []);

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

      <section className="section home-info-section" id="about">
        <div className="container">
          <h2 className="section-title">{t("home.firstVisit.title")}</h2>
          <p className="section-text">{t("home.firstVisit.text")}</p>
          <div className="info-strip info-strip-spaced">
            {firstVisitCards[0] && (
              <article className="info-item">
                <div className="mini-icon"><FaHeart /></div>
                <h4>{firstVisitCards[0].title}</h4>
                <p>{firstVisitCards[0].text}</p>
              </article>
            )}
            {firstVisitCards[1] && (
              <article className="info-item">
                <div className="mini-icon"><FaBookOpen /></div>
                <h4>{firstVisitCards[1].title}</h4>
                <p>{firstVisitCards[1].text}</p>
              </article>
            )}
            {firstVisitCards[2] && (
              <article className="info-item">
                <div className="mini-icon"><FaHandsHelping /></div>
                <h4>{firstVisitCards[2].title}</h4>
                <p>{firstVisitCards[2].text}</p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="section section-compact home-info-section home-visit-section">
        <div className="container">
          <header className="about-roadmap-head">
            <h2 className="section-title">{t("home.visitFlow.title")}</h2>
            <p className="section-text">{t("home.visitFlow.text")}</p>
          </header>

          <div className="about-roadmap-grid visit-roadmap-grid">
            {visitSteps[0] && (
              <article className="card roadmap-step visit-roadmap-step">
                <span className="roadmap-step-index">01</span>
                <span className="roadmap-step-icon" aria-hidden="true"><FaClock /></span>
                <h3 className="card-title">{visitSteps[0].title}</h3>
                <p className="card-text">{visitSteps[0].text}</p>
              </article>
            )}

            {visitSteps[1] && (
              <article className="card roadmap-step visit-roadmap-step">
                <span className="roadmap-step-index">02</span>
                <span className="roadmap-step-icon" aria-hidden="true"><FaMusic /></span>
                <h3 className="card-title visit-step-title-single">{visitSteps[1].title}</h3>
                <p className="card-text">{visitSteps[1].text}</p>
              </article>
            )}

            {visitSteps[2] && (
              <article className="card roadmap-step visit-roadmap-step">
                <span className="roadmap-step-index">03</span>
                <span className="roadmap-step-icon" aria-hidden="true"><FaComments /></span>
                <h3 className="card-title">{visitSteps[2].title}</h3>
                <p className="card-text">{visitSteps[2].text}</p>
              </article>
            )}
          </div>

        </div>
      </section>

      <section className="section section-compact home-verse-links-section" id="home-content-start">
        <div className="container home-verse-links-wrap">
          <article className="card home-verse">
            <p>{t("home.verse.text")}</p>
            <p><em>{t("home.verse.reference")}</em></p>
          </article>

          <div className="home-links-inline">
            <h2 className="useful-title">{t("home.useful.title")}</h2>
            <p className="useful-subtitle">{t("home.useful.subtitle")}</p>
            <UsefulLinksCarousel items={usefulLinks} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
