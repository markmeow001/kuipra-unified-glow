import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground uppercase tracking-wide text-center mb-12">
          {t("contact.sectionTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Map + contact info */}
          <div>
            <div className="bg-muted rounded-lg h-56 flex items-center justify-center text-muted-foreground mb-6">
              <MapPin size={48} className="opacity-30" />
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground">{t("contact.address")}</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-orange shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground">{t("contact.phone")}</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-orange shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-foreground">{t("contact.email")}</p>
              </div>
            </div>
          </div>

          {/* Right - KUIPRA logo */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-extrabold tracking-[0.15em]">
                <span className="text-orange">K</span>UIPR<span className="text-orange">A</span>
              </div>
              <div className="text-xs tracking-[0.4em] uppercase text-muted-foreground mt-2">Communications</div>
              <div className="mt-4 text-xs text-muted-foreground space-y-1">
                <p>{t("contact.phone")}</p>
                <p>{t("contact.email")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
