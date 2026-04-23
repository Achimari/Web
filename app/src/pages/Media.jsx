import "../styles/home.css";
import Footer from "../components/layout/Footer";
import Card from "../components/ui/Card";
import CardHead from "../components/ui/CardHead";
import PageHeader from "../components/ui/PageHeader";
import PageSection from "../components/ui/PageSection";
import { useI18n } from "../i18n";
import { FaFileAlt, FaMusic, FaTools, FaVideo } from "react-icons/fa";

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
      <PageSection>
        <PageHeader
          title={t("media.title")}
          subtitle={t("media.subtitle")}
          intro={t("media.introNote")}
        />

        <div className="media-top-grid">
          {mediaResources.map((item) => (
            <Card as="article" className="media-card hover-lift-card" key={item.title}>
              <CardHead
                icon={FaVideo}
                title={item.title}
                className="media-card-head"
                titleClassName="media-card-title"
                iconClassName="icon-chip-md"
                headingLevel={3}
              />
              <p className="card-text">{item.description}</p>
              <a className="media-action-link" href={item.href} target="_blank" rel="noreferrer">
                {t("media.openPlaylist")}
              </a>
            </Card>
          ))}
        </div>
      </PageSection>

      <PageSection className="media-docs-section" compact>
        <h2 className="section-title">{t("media.docsTitle")}</h2>
        <div className="resource-groups media-doc-grid">
          {documentSections.map((group) => {
            const Icon = iconBySection[group.icon] || FaFileAlt;
            return (
              <Card as="article" className="media-card hover-lift-card" key={group.title}>
                <CardHead
                  icon={Icon}
                  title={group.title}
                  className="media-card-head"
                  titleClassName="media-card-title"
                  iconClassName="icon-chip-md"
                  headingLevel={3}
                />
                <ul className="resource-list">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a className="media-resource-link" href={link.href} target="_blank" rel="noreferrer">
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
