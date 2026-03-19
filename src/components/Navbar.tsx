import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import kuipraLogo from "@/assets/kuipra-logo.png";

const navKeys = ["services", "about", "projects", "team", "contact"] as const;
const sectionIds = ["services", "about", "projects", "team", "contact"];

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-primary shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
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
              className="text-sm font-medium text-primary hover:text-orange transition-colors"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm font-medium text-primary hover:text-orange transition-colors"
          >
            {t("nav.language")}
          </button>
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-orange text-orange-foreground hover:bg-orange/90 transition-colors rounded-full px-6"
          >
            {t("nav.getInTouch")}
          </Button>
        </div>

        {/* Mobile: language + CTA always visible + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="text-xs font-medium text-primary hover:text-orange transition-colors border border-gray-200 rounded-full px-2 py-1"
          >
            {t("nav.language")}
          </button>
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-orange text-orange-foreground hover:bg-orange/90 transition-colors rounded-full px-3 py-1 text-xs h-auto"
          >
            {t("nav.getInTouch")}
          </Button>
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown - nav links only */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4 px-4 flex flex-col gap-3">
          {navKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => scrollTo(sectionIds[i])}
              className="text-sm font-medium py-2 text-primary hover:text-orange transition-colors text-left"
            >
              {t(`nav.${key}`)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
