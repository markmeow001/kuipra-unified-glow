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
  { id: "1", name: "Alex Chen", role_en: "CEO & Founder", role_zh: "執行長暨創辦人", description_en: "20+ years in strategic communications", description_zh: "超過 20 年策略傳播經驗", image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { id: "2", name: "Sarah Lin", role_en: "Creative Director", role_zh: "創意總監", description_en: "Award-winning creative strategist", description_zh: "屢獲殊榮的創意策略師", image_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { id: "3", name: "David Wang", role_en: "Head of Digital", role_zh: "數位部門主管", description_en: "Expert in digital transformation", description_zh: "數位轉型專家", image_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { id: "4", name: "Emily Huang", role_en: "PR Director", role_zh: "公關總監", description_en: "Specialist in media relations", description_zh: "媒體關係專家", image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

interface Props {
  members?: TeamMember[] | null;
  loading?: boolean;
}

const Team = ({ members, loading }: Props) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "zh";
  const data = members ?? placeholderTeam;

  return (
    <section id="team" className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">{t("team.sectionTitle")}</h2>
          <p className="text-primary-foreground/80">{t("team.sectionSubtitle")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-64 rounded-lg bg-primary-foreground/10" />
              ))
            : data.map((m) => (
                <div key={m.id} className="bg-orange text-orange-foreground rounded-lg overflow-hidden hover:scale-[1.02] transition-transform">
                  <img src={m.image_url} alt={m.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{m.name}</h3>
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
