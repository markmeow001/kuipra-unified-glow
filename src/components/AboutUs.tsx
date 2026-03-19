import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-background py-20 relative overflow-hidden">
      <div className="mx-4 md:mx-8 px-4">
        {/* Vertical line from services */}
        <div className="mb-8">
          <div className="w-px h-16 bg-foreground/20 ml-0" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start relative">
          {/* Left: text content */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground uppercase tracking-wide mb-8">
              {t("about.sectionTitle")}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              {t("about.description")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              {t("about.description2")}
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-orange text-orange-foreground px-8 py-3 rounded-full font-semibold hover:bg-orange/90 transition-colors text-sm"
            >
              {t("nav.getInTouch")}
            </button>
          </div>

          {/* Right: decorative spiral pattern */}
          <div className="hidden md:flex items-center justify-center">
            <svg
              viewBox="0 0 500 400"
              className="w-full h-auto text-foreground/[0.06]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              {/* Concentric spiral arcs */}
              {Array.from({ length: 18 }).map((_, i) => {
                const r = 30 + i * 18;
                const startAngle = i * 15;
                const endAngle = startAngle + 300;
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;
                const cx = 320;
                const cy = 200;
                const x1 = cx + r * Math.cos(startRad);
                const y1 = cy + r * Math.sin(startRad);
                const x2 = cx + r * Math.cos(endRad);
                const y2 = cy + r * Math.sin(endRad);
                return (
                  <path
                    key={i}
                    d={`M ${x1} ${y1} A ${r} ${r} 0 1 1 ${x2} ${y2}`}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Vertical line to next section */}
        <div className="mt-12">
          <div className="w-px h-16 bg-foreground/20 ml-0" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
