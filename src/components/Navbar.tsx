import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import kuipraLogo from "@/assets/kuipra-logo.png";

const navKeys = ["home", "about", "services", "projects", "team", "contact"] as const;
const sectionIds = ["hero", "about", "services", "projects", "team", "contact"];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "zh" : "en");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center">
          <img src={kuipraLogo} alt="Kuipra Communications" className="h-10" />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-medium hover:text-orange transition-colors"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm font-medium border border-orange px-3 py-1 rounded hover:bg-orange hover:text-orange-foreground transition-colors"
          >
            {t("nav.language")}
          </button>
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-orange text-orange-foreground hover:bg-orange/90 transition-colors"
          >
            {t("nav.contact")}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4 px-4 flex flex-col gap-3">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-medium py-2 hover:text-orange transition-colors text-left"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
          <div className="flex gap-2 pt-2">
            <button
              onClick={toggleLang}
              className="text-sm font-medium border border-orange px-3 py-1 rounded hover:bg-orange hover:text-orange-foreground transition-colors"
            >
              {t("nav.language")}
            </button>
            <Button
              onClick={() => scrollTo("contact")}
              className="bg-orange text-orange-foreground hover:bg-orange/90 transition-colors"
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
