import { useTranslation } from "react-i18next";
import bannerBg from "@/assets/banner-bg.jpg";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: `url('${bannerBg}')`,
      }}
    >
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wide mb-4 max-w-3xl mx-auto leading-tight">
          {t("banner.title")}
        </h2>
        {t("banner.subtitle") && (
          <p className="text-lg md:text-xl font-bold uppercase tracking-wide text-orange mb-8">
            {t("banner.subtitle")}
          </p>
        )}
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-orange text-orange-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors text-sm uppercase tracking-wider"
        >
          {t("banner.cta")}
        </button>
      </div>
    </section>
  );
};

export default Banner;
