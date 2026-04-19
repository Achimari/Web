import "../styles/home.css";
import Footer from "../components/layout/Footer";
import {
  FaBookOpen,
  FaGlobeEurope,
  FaHandsHelping,
  FaPrayingHands,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";
import { useI18n } from "../i18n";

const iconMap = {
  prayer: FaPrayingHands,
  book: FaBookOpen,
  users: FaUsers,
  growth: FaSeedling,
  service: FaHandsHelping,
  mission: FaGlobeEurope,
};

export default function About() {
  const { t } = useI18n();
  const faithRoadmap = t("about.roadmap", []);

  return (
    <main>
      <section className="section about-roadmap">
        <div className="container">
          <header className="page-header about-roadmap-head">
            <h1 className="section-title page-title">{t("about.title")}</h1>
            <p className="section-text page-subtitle">{t("about.subtitle")}</p>
          </header>

          <div className="about-roadmap-grid">
            {faithRoadmap.map((step, index) => {
              const Icon = iconMap[step.icon] || FaBookOpen;
              return (
                <article className="card roadmap-step" key={step.title}>
                  <span className="roadmap-step-index">{index + 1}</span>
                  <span className="roadmap-step-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h3 className="card-title">{step.title}</h3>
                  <p className="card-text">{step.description}</p>
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
