import { useTranslation } from "react-i18next";
import kuipraLogo from "@/assets/kuipra-logo.png";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-background py-20">
      <div className="mx-4 md:mx-8 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground uppercase tracking-wide mb-12">
          {t("contact.sectionTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
          {/* Left - Google Maps embed */}
          <div className="h-72 md:h-auto min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5!2d-123.121!3d49.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzU4LjgiTiAxMjPCsDA3JzE2LjAiVw!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kuipra office location"
              className="w-full h-full"
            />
          </div>

          {/* Right - Logo + contact info */}
          <div className="bg-muted p-8 md:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <img src={kuipraLogo} alt="Kuipra Communications" className="h-12 md:h-16" />
            </div>
            <div className="space-y-3">
              <p className="text-sm md:text-base text-foreground">
                <span className="font-semibold">TEL: </span>{t("contact.phone")}
              </p>
              <p className="text-sm md:text-base text-foreground">
                <span className="font-semibold">Email: </span>{t("contact.email")}
              </p>
              <p className="text-sm md:text-base text-foreground">
                <span className="font-semibold">Address: </span>{t("contact.address")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
