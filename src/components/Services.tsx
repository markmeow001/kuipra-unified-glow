import { useTranslation } from "react-i18next";
import { Share2, Pen, Briefcase, Megaphone } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Service {
  id: string;
  icon_name: string;
  title_en: string;
  title_zh: string;
  description_en: string;
  description_zh: string;
}

const iconMap: Record<string, React.ElementType> = {
  Share2, Pen, Briefcase, Megaphone,
};

const defaultIcons = [Share2, Pen, Briefcase, Megaphone];

interface Props {
  services?: Service[] | null;
  loading?: boolean;
}

const Services = ({ services, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";

  // Static fallback keys from i18n
  const staticServices = [
    { key: "s1", icon: Share2 },
    { key: "s2", icon: Pen },
    { key: "s3", icon: Briefcase },
    { key: "s4", icon: Megaphone },
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground uppercase tracking-wide">
            {t("services.sectionTitle")}
          </h2>
          <p className="text-xl md:text-2xl font-extrabold text-foreground uppercase tracking-wide">
            {t("services.sectionSubtitle")}
          </p>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-48 rounded-lg" />
            ))}
          </div>
        ) : services && services.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon_name] || defaultIcons[i % 4];
              return (
                <div
                  key={s.id}
                  className="bg-primary text-primary-foreground rounded-lg p-8 hover:scale-[1.02] transition-transform group"
                >
                  <div className="w-14 h-14 bg-orange/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange/30 transition-colors">
                    <Icon className="text-orange" size={28} />
                  </div>
                  <h3 className="text-base font-bold mb-2 uppercase tracking-wide">
                    {lang === "zh" ? s.title_zh : s.title_en}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed">
                    {lang === "zh" ? s.description_zh : s.description_en}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {staticServices.map((s) => (
              <div
                key={s.key}
                className="bg-primary text-primary-foreground rounded-lg p-8 hover:scale-[1.02] transition-transform group"
              >
                <div className="w-14 h-14 bg-orange/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-orange/30 transition-colors">
                  <s.icon className="text-orange" size={28} />
                </div>
                <h3 className="text-base font-bold mb-2 uppercase tracking-wide">
                  {t(`services.${s.key}`)}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {t(`services.${s.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
