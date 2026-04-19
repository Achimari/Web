import "../../styles/home.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useI18n } from "../../i18n";

const iconMap = {
  youtube: FaYoutube,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

export default function Footer() {
  const { t } = useI18n();
  const socialLinks = [
    { title: "YouTube", icon: "youtube", href: "https://www.youtube.com/@atmodasdraudze" },
    { title: "Facebook", icon: "facebook", href: "https://www.facebook.com/SLOKAS90" },
    { title: "Instagram", icon: "instagram", href: "https://www.instagram.com/slokas90/" },
  ];

  return (
    <section className="section footer-info">
      <div className="container">
        <div className="footer-row">
          <p className="footer-text">© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <nav className="footer-socials" aria-label={t("footer.socialAria")}>
            {socialLinks.map((item) => {
              const Icon = iconMap[item.icon];
              if (!Icon) return null;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social"
                  aria-label={item.title}
                >
                  <Icon />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}
