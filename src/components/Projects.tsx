import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  id: string;
  client_name: string;
  tags: string[];
  title_en: string;
  title_zh: string;
  description_en: string;
  description_zh: string;
  image_url: string;
}

const placeholderProjects: Project[] = [
  { id: "1", client_name: "TAIPEI POST", tags: ["PR", "Digital"], title_en: "Brand Identity & Digital Presence", title_zh: "品牌識別與數位佈局", description_en: "Complete brand strategy overhaul and multi-channel digital presence establishment for leading media organization.", description_zh: "為領先媒體機構進行全面品牌策略重塑與多管道數位佈局建立。", image_url: "" },
  { id: "2", client_name: "MH", tags: ["Content", "Strategy"], title_en: "Corporate Rebranding", title_zh: "企業品牌重塑", description_en: "Strategic corporate rebranding including visual identity, messaging framework, and stakeholder communications.", description_zh: "策略性企業品牌重塑，包含視覺識別、訊息框架及利害關係人溝通。", image_url: "" },
  { id: "3", client_name: "CRAFT BREW CO.", tags: ["PR", "Social"], title_en: "Product Launch Campaign", title_zh: "產品上市活動", description_en: "Integrated marketing campaign for new product line launch with social media activation and PR outreach.", description_zh: "新產品線上市整合行銷活動，結合社群媒體啟動與公關推廣。", image_url: "" },
];

interface Props {
  projects?: Project[] | null;
  loading?: boolean;
}

const Projects = ({ projects, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";
  const data = projects && projects.length > 0 ? projects : placeholderProjects;

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Large title */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground/10 uppercase tracking-wide text-center mb-12">
          {t("projects.sectionTitle")}
        </h2>

        <div className="space-y-8">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-lg" />
              ))
            : data.map((p) => (
                <div
                  key={p.id}
                  className="grid md:grid-cols-[200px_1fr] gap-6 items-start border-b border-border pb-8 last:border-b-0"
                >
                  {/* Left - client name with orange badge */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-orange text-orange-foreground text-[10px] font-bold px-2 py-0.5 rounded uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-lg font-extrabold text-foreground uppercase tracking-wide">
                      {p.client_name}
                    </div>
                  </div>

                  {/* Right - description */}
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {lang === "zh" ? p.title_zh : p.title_en}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {lang === "zh" ? p.description_zh : p.description_en}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
