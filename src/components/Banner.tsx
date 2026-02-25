import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-28"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t("banner.title")}</h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{t("banner.subtitle")}</p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-orange text-orange-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors"
        >
          {t("banner.cta")}
        </button>
      </div>
    </section>
  );
};

export default Banner;
