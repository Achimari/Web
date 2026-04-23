import { Link } from "react-router-dom";
import "../styles/home.css";
import PageHeader from "../components/ui/PageHeader";
import PageSection from "../components/ui/PageSection";
import { useI18n } from "../i18n";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <main>
      <PageSection>
        <PageHeader
          title={t("notFound.title")}
          subtitle={t("notFound.text")}
        />
        <p className="not-found-action">
          <Link to="/" className="btn">{t("notFound.home")}</Link>
        </p>
      </PageSection>
    </main>
  );
}
