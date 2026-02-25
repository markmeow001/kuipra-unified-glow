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
  { id: "1", client_name: "TechCorp", tags: ["PR", "Digital"], title_en: "Brand Relaunch Campaign", title_zh: "品牌重塑活動", description_en: "Complete brand overhaul and multi-channel launch strategy.", description_zh: "全面品牌重塑與多管道上市策略。", image_url: "" },
  { id: "2", client_name: "GreenEnergy Co.", tags: ["Content", "Strategy"], title_en: "Sustainability Report", title_zh: "永續發展報告", description_en: "Annual sustainability report design and distribution.", description_zh: "年度永續發展報告設計與發行。", image_url: "" },
  { id: "3", client_name: "FinanceHub", tags: ["PR", "Media"], title_en: "Crisis Communication", title_zh: "危機溝通", description_en: "Rapid response crisis management and media relations.", description_zh: "快速危機管理與媒體關係應對。", image_url: "" },
];

interface Props {
  projects?: Project[] | null;
  loading?: boolean;
}

const Projects = ({ projects, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";
  const data = projects ?? placeholderProjects;

  return (
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t("projects.sectionTitle")}</h2>
          <p className="text-muted-foreground">{t("projects.sectionSubtitle")}</p>
        </div>
        <div className="space-y-6">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))
            : data.map((p) => (
                <div
                  key={p.id}
                  className="border border-border rounded-lg p-6 hover:border-orange transition-colors flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {lang === "zh" ? p.title_zh : p.title_en}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.client_name} — {lang === "zh" ? p.description_zh : p.description_en}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-orange text-orange-foreground text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
