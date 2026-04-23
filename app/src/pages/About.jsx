import "../styles/home.css";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/ui/PageHeader";
import PageSection from "../components/ui/PageSection";
import RoadmapSteps from "../components/ui/RoadmapSteps";
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
      <PageSection className="about-roadmap">
        <PageHeader
          className="about-roadmap-head"
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <RoadmapSteps
          steps={faithRoadmap}
          stepClassName="hover-lift-card"
          descriptionKey="description"
          twoDigitIndex
          getIcon={(step) => iconMap[step.icon] || FaBookOpen}
        />
      </PageSection>

      <Footer />
    </main>
  );
}
