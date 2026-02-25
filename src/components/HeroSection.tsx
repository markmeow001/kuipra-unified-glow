import { useTranslation } from "react-i18next";
import { Users, FolderCheck, Clock, Award } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: t("hero.stats.clients"), label: t("hero.stats.clientsLabel") },
    { icon: FolderCheck, value: t("hero.stats.projects"), label: t("hero.stats.projectsLabel") },
    { icon: Clock, value: t("hero.stats.years"), label: t("hero.stats.yearsLabel") },
    { icon: Award, value: t("hero.stats.awards"), label: t("hero.stats.awardsLabel") },
  ];

  return (
    <section id="hero" className="bg-primary text-primary-foreground pt-28 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">{t("hero.subtitle")}</p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-orange text-orange-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors"
            >
              {t("hero.cta")}
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
              alt="Business communication"
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-orange text-orange-foreground rounded-lg p-6 text-center hover:scale-105 transition-transform"
            >
              <stat.icon className="mx-auto mb-2" size={28} />
              <div className="text-3xl font-extrabold">{stat.value}</div>
              <div className="text-sm font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
