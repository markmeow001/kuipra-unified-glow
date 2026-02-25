import { useTranslation } from "react-i18next";
import { Megaphone, PenTool, BarChart3, Globe } from "lucide-react";
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
  Megaphone, PenTool, BarChart3, Globe,
};

const placeholderServices: Service[] = [
  { id: "1", icon_name: "Megaphone", title_en: "Public Relations", title_zh: "公關服務", description_en: "Strategic PR campaigns that build brand awareness and credibility.", description_zh: "策略性公關活動，提升品牌知名度與可信度。" },
  { id: "2", icon_name: "PenTool", title_en: "Content Marketing", title_zh: "內容行銷", description_en: "Compelling content that engages audiences and drives conversions.", description_zh: "引人入勝的內容，吸引受眾並推動轉換。" },
  { id: "3", icon_name: "BarChart3", title_en: "Digital Strategy", title_zh: "數位策略", description_en: "Data-driven digital strategies for measurable business growth.", description_zh: "數據驅動的數位策略，實現可衡量的業務成長。" },
  { id: "4", icon_name: "Globe", title_en: "Brand Consulting", title_zh: "品牌顧問", description_en: "Expert guidance to shape and strengthen your brand identity.", description_zh: "專業指導，塑造並強化您的品牌識別。" },
];

interface Props {
  services?: Service[] | null;
  loading?: boolean;
}

const Services = ({ services, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";
  const data = services ?? placeholderServices;

  return (
    <section id="services" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t("services.sectionTitle")}</h2>
          <p className="text-muted-foreground">{t("services.sectionSubtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-lg" />
              ))
            : data.map((s) => {
                const Icon = iconMap[s.icon_name] || Globe;
                return (
                  <div
                    key={s.id}
                    className="bg-primary text-primary-foreground rounded-lg p-8 hover:scale-[1.02] transition-transform"
                  >
                    <Icon className="mb-4 text-orange" size={36} />
                    <h3 className="text-xl font-bold mb-2">
                      {lang === "zh" ? s.title_zh : s.title_en}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {lang === "zh" ? s.description_zh : s.description_en}
                    </p>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
};

export default Services;
