import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{t("about.sectionTitle")}</h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">{t("about.description")}</p>
          <button className="bg-orange text-orange-foreground px-8 py-3 rounded font-semibold hover:bg-orange/90 transition-colors">
            {t("about.cta")}
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
            alt="About Kuipra"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
