import { useTranslation } from "react-i18next";
import { Eye, FileText, Film, BarChart3, Layers } from "lucide-react";
import kuipraLogo from "@/assets/kuipra-logo.png";

const Timeline = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Eye, title: t("timeline.step1"), desc: t("timeline.step1Desc") },
    { icon: FileText, title: t("timeline.step2"), desc: t("timeline.step2Desc") },
    { icon: Film, title: t("timeline.step3"), desc: t("timeline.step3Desc") },
    { icon: BarChart3, title: t("timeline.step4"), desc: t("timeline.step4Desc") },
    { icon: Layers, title: t("timeline.step5"), desc: t("timeline.step5Desc") },
  ];

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - title + steps */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-2">
              {t("timeline.sectionTitle")}
            </h2>
            <p className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-orange mb-10">
              {t("timeline.sectionSubtitle")}
            </p>

            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                    <step.icon className="text-orange" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide mb-1">{step.title}</h3>
                    <p className="text-xs text-primary-foreground/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - KUIPRA logo */}
          <div className="flex items-center justify-center">
            <img src={kuipraLogo} alt="Kuipra Communications" className="h-24 md:h-32 brightness-0 invert" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
