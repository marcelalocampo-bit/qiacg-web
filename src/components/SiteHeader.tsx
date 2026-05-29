import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/qia-logo.png";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const nav = [
    { to: "/", label: t("Inicio", "Home") },
    { to: "/sobre-nosotros", label: t("Sobre nosotros", "About Us") },
    { to: "/servicios", label: t("Servicios", "Services") },
    { to: "/preguntas-frecuentes", label: t("Preguntas Frecuentes", "FAQ") },
    { to: "/contacto", label: t("Contacto", "Contact") },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="QiA Consulting Group" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors relative"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-sm font-medium text-foreground hover:text-gold transition"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold hover:opacity-95 transition"
          >
            {t("Agenda una reunin", "Book a meeting")}
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="text-sm font-medium text-foreground hover:text-gold transition"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            aria-label="Menǧ"
            onClick={() => setOpen((v) => !v)}
            className="text-foreground p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-navy-deep/95 backdrop-blur-xl">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/85"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground"
            >
              {t("Agenda una reunin", "Book a meeting")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
