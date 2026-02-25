import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">{t("contact.sectionTitle")}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <div className="bg-muted rounded-lg h-72 md:h-full flex items-center justify-center text-muted-foreground">
            <MapPin size={48} className="opacity-40" />
          </div>
          {/* Contact info */}
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="text-orange shrink-0 mt-1" />
              <p className="text-foreground">{t("contact.address")}</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-orange shrink-0 mt-1" />
              <p className="text-foreground">{t("contact.phone")}</p>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-orange shrink-0 mt-1" />
              <p className="text-foreground">{t("contact.email")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
