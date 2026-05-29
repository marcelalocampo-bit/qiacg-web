import { Link } from "@tanstack/react-router";
import logo from "@/assets/qia-logo.png";
import { Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-32 border-t border-border/60 bg-navy">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="QiA Consulting Group" className="h-12 w-auto" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t("Cumplimiento normativo inteligente para el sector salud, fabricantes e importadores de dispositivos médicos en Colombia.", "Intelligent regulatory compliance for the health sector, manufacturers and importers of medical devices in Colombia.")}
          </p>
        </div>
        <div>
          <h4 className="font-display text-base text-gold mb-4">{t("Navegación", "Navigation")}</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">{t("Inicio", "Home")}</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-gold">{t("Sobre nosotros", "About Us")}</Link></li>
            <li><Link to="/servicios" className="hover:text-gold">{t("Servicios", "Services")}</Link></li>
            <li><Link to="/preguntas-frecuentes" className="hover:text-gold">{t("Preguntas frecuentes", "FAQ")}</Link></li>
            <li><Link to="/contacto" className="hover:text-gold">{t("Contacto", "Contact")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base text-gold mb-4">{t("Contacto", "Contact")}</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" />
              <a href="mailto:slopez@qiacg.net" className="hover:text-gold">slopez@qiacg.net</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={14} className="text-gold" />
              <a href="https://wa.me/573156961279" className="hover:text-gold">+57 315 696 1279</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} QiA Consulting Group. {t("Todos los derechos reservados.", "All rights reserved.")}</p>
          <p>{t("Bogotá — Colombia", "Bogota — Colombia")}</p>
        </div>
      </div>
    </footer>
  );
}
