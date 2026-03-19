import { useTranslation } from "react-i18next";
import { Skeleton } from "@/components/ui/skeleton";
// Using real team photos from public/team/
const teamCharlene = "/team/charlene.png";
const teamRobert = "/team/robert.png";
const teamAlen = "/team/alen.png";
const teamJosh = "/team/josh.png";

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
  { id: "1", name: "Charlene Ling", role_en: "Principal Consultant", role_zh: "首席顧問", description_en: "An award-nominated media professional with over a decade of experience, Charlene served eight years as a News Producer leading coverage for major Canadian and U.S. elections, along with special features exploring cultural and social issues.\n\nAt Kuipra Communications, she leverages journalistic rigor and strategic storytelling to extract core brand values and transform them into high-impact digital narratives. By bridging professional integrity with modern social media, she ensures brands build a powerful, resonant, and lasting presence in the digital ecosystem.", description_zh: "一位獲獎提名的媒體專業人士，擁有超過十年的經驗。Charlene 曾擔任新聞製作人八年，領導加拿大和美國重大選舉的報導，並製作探索文化和社會議題的專題報導。\n\n在 Kuipra，她運用新聞嚴謹性和策略性敘事，提煉核心品牌價值並將其轉化為高影響力的數位敘事。", image_url: teamCharlene },
  { id: "2", name: "Robert Chu", role_en: "Principal Creative Strategist", role_zh: "首席創意策略師", description_en: "A veteran photojournalist with 20+ years in Canadian media, Robert has covered landmark events like the 2010 Winter Olympics and earned a Certificate of Recognition from the Premier of British Columbia.\n\nAt Kuipra, he bridges classical cinematography with advanced AI (Sora, Veo 3, Kling) to craft immersive, soul-driven content. By merging traditional visual craftsmanship with cutting-edge innovation, Robert redefines the boundaries of digital storytelling for the modern era.", description_zh: "一位擁有 20 多年加拿大媒體經驗的資深攝影記者，Robert 報導過 2010 年冬季奧運會等重大事件，並獲得不列顛哥倫比亞省省長頒發的表彰證書。\n\n在 Kuipra，他將古典電影攝影與先進 AI 結合，重新定義數位敘事的邊界。", image_url: teamRobert },
  { id: "3", name: "Alen Yang", role_en: "Marketing Director", role_zh: "行銷總監", description_en: "Alen leverages strategic marketing operations and immersive event design to extract core brand visions and transform them into experiential activations. By bridging creative storytelling with logistical execution, he ensures brands build a powerful, engaging, and memorable presence in the market.\n\nWith designer's eye and proficiency, Alen doesn't just oversee campaigns, he shapes their visual identity. He ensures that every physical and digital touchpoint is crafted with aesthetic precision, elevating the overall brand experience through intuitive, elegant, and user-centric design.", description_zh: "Alen 運用策略性行銷營運和沉浸式活動設計，提煉核心品牌願景並將其轉化為體驗式活動。\n\n憑藉設計師的眼光和專業能力，Alen 不僅監督活動，更塑造品牌的視覺識別。", image_url: teamAlen },
  { id: "4", name: "Josh Hung", role_en: "Visual Lead & Creative Producer", role_zh: "視覺總監 / 創意製片", description_en: "With a Master's degree in Graphic Arts and over a decade of industry expertise in visual storytelling, Josh brings a holistic approach to every project at KUIPRA. His craft spans the entire creative lifecycle—from precise cinematography on-site to high-end post-production.\n\nOperating under the philosophy that 'cinematography is the language, while editing is the soul,' Josh masterfully orchestrates light and narrative flow. By seamlessly integrating traditional cinematic techniques with modern AI-enhanced workflows, he ensures that every brand story is not only visually stunning but strategically impactful. As a co-founder, Josh is dedicated to delivering a unified vision that resonates with the diverse and dynamic audience of the Pacific Northwest.", description_zh: "Josh 擁有視覺藝術碩士學位與十逾年影視經驗。他深諳「鏡頭為語、剪輯為魂」的敘事哲學，將傳統攝影技術與現代 AI 工作流深度結合。\n\n在 Kuipra，他主導從現場捕捉到高端後製的完整流程，為品牌提煉核心願景並將其轉化為具備高感染力的視覺作品。", image_url: teamJosh },
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
      <div className="mx-4 md:mx-8 px-4">
        {/* Vertical line */}
        <div className="flex justify-center mb-8">
          <div className="w-px h-16 bg-primary-foreground/20" />
        </div>

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide leading-tight">
            {t("team.sectionTitle")}
            <br />
            {t("team.sectionSubtitle")}
          </h2>
        </div>

        {/* Team grid - 2x2 */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-96 rounded-xl bg-primary-foreground/10" />
              ))
            : data.map((m) => (
                <div key={m.id} className="bg-orange rounded-xl overflow-hidden text-orange-foreground">
                  {/* Header: name+role left, photo right */}
                  <div className="flex items-start justify-between p-6 pb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold leading-tight">{m.name}</h3>
                      <p className="text-sm font-medium opacity-90 mt-1">
                        {lang === "zh" ? m.role_zh : m.role_en}
                      </p>
                    </div>
                    <img
                      src={m.image_url}
                      alt={m.name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover shrink-0 ml-4"
                    />
                  </div>
                  {/* Description */}
                  <div className="px-6 pb-6">
                    <p className="text-sm md:text-base opacity-85 leading-relaxed whitespace-pre-line">
                      {lang === "zh" ? m.description_zh : m.description_en}
                    </p>
                  </div>
                </div>
              ))}
        </div>

        {/* Vertical lines at bottom */}
        <div className="flex justify-center mt-12 gap-[50%]">
          <div className="w-px h-16 bg-primary-foreground/20" />
          <div className="w-px h-16 bg-primary-foreground/20" />
        </div>
      </div>
    </section>
  );
};

export default Team;
