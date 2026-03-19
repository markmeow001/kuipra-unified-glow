import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  const logos = ["KUIPRA", "MH", "TAIPEI POST"];

  return (
    <section className="bg-primary text-primary-foreground py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-lg font-bold uppercase tracking-wider mb-8 text-primary-foreground/80">
          {t("clients.sectionTitle")}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="text-xl font-extrabold tracking-widest text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors"
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
