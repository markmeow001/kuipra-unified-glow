import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();

  const steps = [
    { num: "01", title: t("timeline.steps.step1Title"), desc: t("timeline.steps.step1Desc") },
    { num: "02", title: t("timeline.steps.step2Title"), desc: t("timeline.steps.step2Desc") },
    { num: "03", title: t("timeline.steps.step3Title"), desc: t("timeline.steps.step3Desc") },
    { num: "04", title: t("timeline.steps.step4Title"), desc: t("timeline.steps.step4Desc") },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t("timeline.sectionTitle")}</h2>
          <p className="text-muted-foreground">{t("timeline.sectionSubtitle")}</p>
        </div>
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-orange/30" />
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-start gap-6 mb-12 last:mb-0">
              <div className="relative z-10 w-12 h-12 rounded-full bg-orange text-orange-foreground flex items-center justify-center font-extrabold text-sm shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
