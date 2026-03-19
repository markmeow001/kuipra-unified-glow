import { useTranslation } from "react-i18next";
import { Eye, Play, Camera, BarChart3, MessageCircle } from "lucide-react";
import kuipraLogo from "@/assets/kuipra-logo.png";

const Timeline = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Eye, title: t("timeline.step1"), desc: t("timeline.step1Desc") },
    { icon: Play, title: t("timeline.step2"), desc: t("timeline.step2Desc") },
    { icon: Camera, title: t("timeline.step3"), desc: t("timeline.step3Desc") },
    { icon: BarChart3, title: t("timeline.step4"), desc: t("timeline.step4Desc") },
    { icon: MessageCircle, title: t("timeline.step5"), desc: t("timeline.step5Desc") },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="mx-4 md:mx-8 px-4">
        {/* Header: title left, logo right */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide leading-tight mb-6">
              {t("timeline.sectionTitle")}
              <br />
              {t("timeline.sectionSubtitle")}
            </h2>
            <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed max-w-md">
              {t("timeline.description")}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={kuipraLogo}
              alt="Kuipra Communications"
              className="h-24 md:h-32 lg:h-40 brightness-0 invert opacity-30"
            />
          </div>
        </div>

        {/* Zigzag timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, i) => {
            const isRight = i % 2 === 0;
            return (
              <div key={i} className="relative">
                <div className={`grid md:grid-cols-2 gap-8 items-start ${isRight ? "" : ""}`}>
                  {/* Left column */}
                  <div className={`${isRight ? "md:col-start-1" : "md:col-start-1 md:order-1"}`}>
                    {!isRight && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0 mt-1">
                          <step.icon className="text-orange" size={18} />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-extrabold uppercase tracking-wide mb-2 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed max-w-xs">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    )}
                    {isRight && (
                      <div className="flex justify-end">
                        <div className="w-full md:w-3/4 h-px bg-primary-foreground/10 mt-6" />
                      </div>
                    )}
                  </div>

                  {/* Right column */}
                  <div className={`${isRight ? "md:col-start-2" : "md:col-start-2 md:order-2"}`}>
                    {isRight && (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center shrink-0 mt-1">
                          <step.icon className="text-orange" size={18} />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-extrabold uppercase tracking-wide mb-2 leading-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm md:text-base text-primary-foreground/60 leading-relaxed max-w-xs">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    )}
                    {!isRight && (
                      <div className="flex justify-start">
                        <div className="w-full md:w-3/4 h-px bg-primary-foreground/10 mt-6" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom: vertical line + Learn More button */}
        <div className="flex flex-col items-center mt-16">
          <div className="w-px h-16 bg-primary-foreground/20" />
          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 bg-orange text-orange-foreground px-8 py-3 rounded-full font-semibold hover:bg-orange/90 transition-colors text-sm"
          >
            {t("about.cta")}
          </button>
        </div>

        {/* Bottom vertical line */}
        <div className="mt-16">
          <div className="w-px h-16 bg-primary-foreground/20 ml-0" />
        </div>
      </div>
    </section>
  );
};

export default Timeline;
