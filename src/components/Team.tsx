import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";

interface TeamMember {
  id: string;
  name: string;
  role_en: string;
  role_zh: string;
  description_en: string;
  description_zh: string;
  image_url: string;
}

const placeholderTeam: TeamMember[] = [
  { id: "1", name: "Chairman Wang", role_en: "Chairman", role_zh: "董事長", description_en: "Brand strategy visionary", description_zh: "品牌策略遠見者", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { id: "2", name: "Robert Du", role_en: "Vice Chairman", role_zh: "副董事長", description_en: "Operations & growth expert", description_zh: "營運成長專家", image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { id: "3", name: "Alex Tseng", role_en: "Creative Director", role_zh: "創意總監", description_en: "Award-winning creative leader", description_zh: "屢獲殊榮的創意領袖", image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
  { id: "4", name: "Ariel Huang", role_en: "PR Director", role_zh: "公關總監", description_en: "Media relations specialist", description_zh: "媒體關係專家", image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
];

interface Props {
  members?: TeamMember[] | null;
  loading?: boolean;
}

const Team = ({ members, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";
  const data = members && members.length > 0 ? members : placeholderTeam;

  return (
    <section id="team" className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        {/* KUIPRA logo bar */}
        <div className="flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="text-3xl font-extrabold tracking-[0.15em] mb-1">
              <span className="text-orange">K</span>UIPR<span className="text-orange">A</span>
            </div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-primary-foreground/50">Communications</div>
          </div>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide">
            {t("team.sectionTitle")}
          </h2>
          <p className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-orange">
            {t("team.sectionSubtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-72 rounded-lg bg-primary-foreground/10" />
              ))
            : data.map((m) => (
                <div key={m.id} className="bg-orange rounded-lg overflow-hidden hover:scale-[1.02] transition-transform group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={m.image_url} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4 text-orange-foreground">
                    <h3 className="font-bold text-base">{m.name}</h3>
                    <p className="text-sm font-medium opacity-90">{lang === "zh" ? m.role_zh : m.role_en}</p>
                    <p className="text-xs mt-1 opacity-80">{lang === "zh" ? m.description_zh : m.description_en}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
