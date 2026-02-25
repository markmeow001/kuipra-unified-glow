import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t("hero.stats.s1"), label: t("hero.stats.s1Label") },
    { value: t("hero.stats.s2"), label: t("hero.stats.s2Label") },
    { value: t("hero.stats.s3"), label: t("hero.stats.s3Label") },
    { value: t("hero.stats.s4"), label: t("hero.stats.s4Label") },
  ];

  return (
    <section id="hero" className="bg-primary text-primary-foreground pt-24 pb-0 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main hero content */}
        <div className="grid md:grid-cols-2 gap-8 items-start pt-8 pb-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight uppercase mb-6">
              {t("hero.line1")}
              <br />
              {t("hero.line2")}
              {t("hero.line3") && (
                <>
                  <br />
                  {t("hero.line3")}
                </>
              )}
            </h1>
            <p className="text-sm md:text-base text-primary-foreground/70 mb-8 max-w-md leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-orange text-orange-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors text-sm uppercase tracking-wider"
              >
                {t("hero.cta")}
              </button>
            </div>
          </div>

          {/* Right side - image with overlay card */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
              alt="Business communication"
              className="rounded-lg w-full object-cover aspect-[4/3]"
            />
            {/* Overlay card at bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/10">
              <p className="text-orange font-bold text-sm uppercase">{t("hero.cardTitle")}</p>
              <p className="text-primary-foreground/80 text-xs mt-1">{t("hero.cardSubtitle")}</p>
            </div>
          </div>
        </div>

        {/* Stats bar - orange */}
        <div className="grid grid-cols-2 md:grid-cols-4 -mx-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-orange text-orange-foreground py-6 px-4 text-center border-r border-orange-foreground/10 last:border-r-0"
            >
              <div className="text-3xl md:text-4xl font-extrabold">{stat.value}</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider mt-1 opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
