import { useTranslation } from "react-i18next";
import kuipraLogo from "@/assets/kuipra-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const links = ["home", "about", "services", "projects", "team", "contact"] as const;
  const sectionIds = ["hero", "about", "services", "projects", "team", "contact"];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <img src={kuipraLogo} alt="Kuipra Communications" className="h-10 brightness-0 invert" />
          </div>
          <p className="text-primary-foreground/60 text-sm">{t("footer.copyright")}</p>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-orange">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2">
            {links.map((key, i) => (
              <li key={key}>
                <button
                  onClick={() => document.getElementById(sectionIds[i])?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-primary-foreground/70 hover:text-orange transition-colors"
                >
                  {t(`nav.${key}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-orange">{t("footer.contactInfo")}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>{t("contact.address")}</li>
            <li>{t("contact.phone")}</li>
            <li>{t("contact.email")}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
