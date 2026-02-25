import { useTranslation } from "react-i18next";

const logos = Array.from({ length: 6 }, (_, i) => `Client ${i + 1}`);

const Clients = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t("clients.sectionTitle")}</h2>
          <p className="text-primary-foreground/80">{t("clients.sectionSubtitle")}</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((name) => (
            <div
              key={name}
              className="w-32 h-16 bg-primary-foreground/10 rounded-lg flex items-center justify-center text-sm font-medium text-primary-foreground/60"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
