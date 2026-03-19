import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";
import iconSocialmedia from "@/assets/icon-socialmedia.png";
import iconContent from "@/assets/icon-content.png";
import iconBrand from "@/assets/icon-brand.png";
import iconPr from "@/assets/icon-pr.png";

interface Service {
  id: string;
  icon_name: string;
  title_en: string;
  title_zh: string;
  description_en: string;
  description_zh: string;
}

const iconImageMap: Record<string, string> = {
  Share2: iconSocialmedia,
  Pen: iconContent,
  Briefcase: iconBrand,
  Megaphone: iconPr,
};

interface Props {
  services?: Service[] | null;
  loading?: boolean;
}

const staticIcons = [iconSocialmedia, iconContent, iconBrand, iconPr];
const staticKeys = ["s1", "s2", "s3", "s4"];

const Services = ({ services, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";

  const renderCard = (
    key: string,
    icon: string,
    title: string,
    description: string
  ) => (
    <div
      key={key}
      className="bg-primary text-primary-foreground rounded-xl p-8 hover:scale-[1.02] transition-transform"
    >
      <div className="w-12 h-12 rounded-full overflow-hidden mb-6">
        <img src={icon} alt="" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg md:text-xl font-extrabold mb-3 uppercase tracking-wide leading-tight">
        {title}
      </h3>
      <p className="text-primary-foreground/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-4 md:mx-8 px-4">
        {/* Vertical line from hero - left aligned */}
        <div className="mb-8">
          <div className="w-px h-16 bg-foreground/20 ml-0" />
        </div>

        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 mb-2">
            {t("services.sectionTitle")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground uppercase tracking-wide leading-tight whitespace-pre-line">
            {t("services.sectionSubtitle")}
          </h2>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-56 rounded-xl" />
            ))}
          </div>
        ) : services && services.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((s, i) =>
              renderCard(
                s.id,
                iconImageMap[s.icon_name] || staticIcons[i % 4],
                lang === "zh" ? s.title_zh : s.title_en,
                lang === "zh" ? s.description_zh : s.description_en
              )
            )}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6">
            {staticKeys.map((key, i) =>
              renderCard(
                key,
                staticIcons[i],
                t(`services.${key}`),
                t(`services.${key}Desc`)
              )
            )}
          </div>
        )}

        {/* Vertical line to next section */}
        <div className="flex justify-center mt-8">
          <div className="w-px h-12 bg-foreground/20" />
        </div>
      </div>
    </section>
  );
};

export default Services;
