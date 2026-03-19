import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  link_url?: string;
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
  {
    id: "1",
    client_name: "Level Best Concrete Lifting Ltd.",
    tags: ["Influencer Outreach", "Management", "Content Creation", "RedNote"],
    title_en: "RedNote",
    title_zh: "小紅書",
    description_en: "Communicating the exact nature of their engineering work was a primary challenge for Level Best Concrete Lifting. Through strategic social media management, professional copywriting, and original video content, we translated complex technical processes into clear, compelling narratives. This approach allowed platform audiences to truly grasp the value of their work, establishing deep professional trust while expanding the brand's visibility and impact within the target market.",
    description_zh: "傳達其工程作業的精確本質是 Level Best Concrete Lifting 的首要挑戰。透過策略性社群媒體管理、專業文案撰寫和原創影片內容，我們將複雜的技術流程轉譯為清晰、引人入勝的敘事。",
    image_url: "",
  },
  {
    id: "2",
    client_name: "The Maggie Huang Team",
    tags: ["Content Creation", "Management", "Email Campaign", "Webinars"],
    title_en: "Instagram",
    link_url: "https://www.instagram.com/kuipra_communications/",
    title_zh: "Instagram",
    description_en: "We provide comprehensive, high-end copywriting and brand messaging services tailored specifically for The Maggie Huang Team. Our primary focus is translating and condensing lengthy luxury real estate listings into elegant, highly readable narratives that highlight exclusivity and investment value. Beyond property descriptions, we curate a sophisticated, top-producer brand voice across all marketing materials. This includes crafting engaging social media posts, designing impactful slogans for visual assets, and writing refined introductions for premier Manhattan restaurants. Ultimately, our services ensure the team is positioned not just as real estate experts, but as true insiders of the luxury New York lifestyle.",
    description_zh: "我們為 The Maggie Huang Team 提供全面的高端文案撰寫和品牌訊息服務。我們的主要重點是將冗長的豪華房地產列表翻譯和精煉為優雅、高度可讀的敘事。",
    image_url: "",
  },
  {
    id: "3",
    client_name: "Funtasy Production",
    tags: ["Influencer Outreach", "Management", "Content Creation", "EVENT PLANNING"],
    title_en: "Instagram",
    link_url: "https://www.instagram.com/kuipra_communications/",
    title_zh: "Instagram",
    description_en: "Funtasy Production: Amplifying Impact through Strategic Collaboration\n\nWorking with Vancouver-based Funtasy Production, we facilitate monthly strategic alignment to synchronize event timelines and content production. By deploying high-synergy influencer partnerships, we amplify their creative initiatives to maximize visibility for both the brand and its corporate partners. This integrated approach has delivered exponential growth across social media, OOH advertising, consistently exceeding performance benchmarks and creating a powerful win-win ecosystem.",
    description_zh: "Funtasy Production：透過策略性合作放大影響力\n\n與溫哥華 Funtasy Production 合作，我們促進每月策略對齊以同步活動時程與內容製作。",
    image_url: "",
  },
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
      <div className="mx-4 md:mx-8 px-4">
        {/* Large outlined title */}
        <h2
          className="text-5xl md:text-7xl lg:text-[8rem] font-extrabold uppercase tracking-wide text-center mb-16"
          style={{
            WebkitTextStroke: "2px hsl(var(--foreground) / 0.15)",
            color: "transparent",
          }}
        >
          {t("projects.sectionTitle")}
        </h2>

        {/* Project list */}
        <div className="max-w-4xl mx-auto">
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-lg mb-8" />
              ))
            : data.map((p) => (
                <div key={p.id} className="mb-12">
                  {/* Vertical line */}
                  <div className="flex justify-center mb-6">
                    <div className="w-px h-12 bg-foreground/15" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-orange text-orange-foreground text-xs font-semibold px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content: logo left, text right */}
                  <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
                    {/* Client logo / name */}
                    <div className="flex items-start justify-center md:justify-start">
                      {p.image_url ? (
                        <img
                          src={p.image_url}
                          alt={p.client_name}
                          className="max-h-20 object-contain"
                        />
                      ) : p.client_name ? (
                        <div className="text-lg font-extrabold text-foreground uppercase leading-tight">
                          {p.client_name}
                        </div>
                      ) : null}
                    </div>

                    {/* Description + platform */}
                    <div>
                      <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                        {lang === "zh" ? p.description_zh : p.description_en}
                      </p>
                      {(lang === "zh" ? p.title_zh : p.title_en) && (
                        p.link_url ? (
                          <a
                            href={p.link_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-bold text-orange uppercase tracking-wider hover:underline"
                          >
                            {lang === "zh" ? p.title_zh : p.title_en} ↗
                          </a>
                        ) : (
                          <p className="text-sm font-bold text-foreground uppercase tracking-wider">
                            {lang === "zh" ? p.title_zh : p.title_en}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
