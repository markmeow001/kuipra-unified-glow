import { useTranslation } from "react-i18next";
import heroImg from "@/assets/kuipra-hero.png";
import statImg from "@/assets/kuipra-stat01.png";

const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t("hero.stats.s1"), label: t("hero.stats.s1Label") },
    { value: t("hero.stats.s2"), label: t("hero.stats.s2Label") },
    { value: t("hero.stats.s3"), label: t("hero.stats.s3Label") },
    { value: t("hero.stats.s4"), label: t("hero.stats.s4Label") },
  ];

  return (
    <section id="hero" className="pt-24 pb-0 relative">
      <div className="mx-4 md:mx-8 bg-primary text-primary-foreground rounded-2xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title & subtitle */}
        <div className="pt-8 pb-10">
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
          <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed max-w-md">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Hero image - full width, aligned with title */}
        <div className="relative">
          <img
            src={heroImg}
            alt="Kuipra team workspace"
            className="rounded-lg w-full object-cover aspect-[16/7]"
          />
        </div>

        {/* Vertical connector line */}
        <div className="flex justify-center py-4">
          <div className="w-px h-16 bg-primary-foreground/30" />
        </div>

        {/* Strategic section - image left, text right */}
        <div className="grid md:grid-cols-2 gap-8 items-center pb-8 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <img
              src={statImg}
              alt="Brand Growth Trajectory"
              className="rounded-lg w-full max-w-sm object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              {t("hero.strategicTitle")}
            </h2>
            <p className="text-sm md:text-base text-primary-foreground/70 leading-relaxed">
              {t("hero.strategicSubtitle")}
            </p>
          </div>
        </div>

        {/* Vertical connector line */}
        <div className="flex justify-center pb-4">
          <div className="w-px h-16 bg-primary-foreground/30" />
        </div>
      </div>

      {/* Stats bar - orange, full width */}
      <div className="grid grid-cols-2 md:grid-cols-4 rounded-b-2xl overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-orange text-orange-foreground py-6 px-6 border-r border-orange-foreground/10 last:border-r-0"
          >
            <div className="text-3xl md:text-4xl font-extrabold">{stat.value}</div>
            <div className="text-xs font-semibold tracking-wider mt-1 opacity-90">{stat.label}</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
