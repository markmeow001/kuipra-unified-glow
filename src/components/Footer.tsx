import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import kuipraLogo from "@/assets/kuipra-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const pages = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.services"), id: "services" },
    { label: t("nav.team"), id: "team" },
    { label: t("nav.projects"), id: "projects" },
    { label: t("nav.contact"), id: "contact" },
  ];

  const services = [
    t("services.s1"),
    t("services.s2"),
    t("services.s3"),
    t("services.s4"),
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/kuipra", label: "Facebook" },
    { Icon: Instagram, href: "https://www.instagram.com/kuipra_communications/", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-4 md:mx-8 px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Column 1: Logo + description + social */}
          <div>
            <img src={kuipraLogo} alt="Kuipra Communications" className="h-10 brightness-0 invert mb-6" />
            <p className="text-primary-foreground/60 text-xs leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-orange transition-colors"
                >
                  <Icon size={14} className="text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h4 className="font-bold text-sm mb-4">Pages</h4>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => scrollTo(page.id)}
                    className="text-xs text-primary-foreground/60 hover:text-orange transition-colors"
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service */}
          <div>
            <h4 className="font-bold text-sm mb-4">Service</h4>
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i} className="text-xs text-primary-foreground/60 leading-relaxed">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={14} className="text-primary-foreground/60 shrink-0 mt-0.5" />
                <span className="text-xs text-primary-foreground/60">{t("contact.phone")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="text-primary-foreground/60 shrink-0 mt-0.5" />
                <span className="text-xs text-primary-foreground/60">{t("contact.email")}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary-foreground/60 shrink-0 mt-0.5" />
                <span className="text-xs text-primary-foreground/60">{t("contact.address")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-4 md:mx-8 px-4 py-6">
          <p className="text-xs text-primary-foreground/40 text-center">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
