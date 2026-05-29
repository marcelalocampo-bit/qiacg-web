import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import heroBg from "@/assets/hero-bg.jpg";
import servicesBg from "@/assets/services-bg.jpg";
import { useLanguage } from "@/components/LanguageContext";
import {
  ShieldCheck, Sparkles, Workflow, TrendingUp, ArrowUpRight,
  FileCheck2, Stethoscope, Building2, ClipboardCheck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QiA Consulting Group – Cumplimiento normativo inteligente" },
      { name: "description", content: "Consultoría experta en INVIMA, ISO 9001, ISO 13485 y certificación CCAA para el sector salud en Colombia." },
      { property: "og:title", content: "QiA Consulting Group" },
      { property: "og:description", content: "Cumplimiento normativo inteligente para acelerar el crecimiento de tu organización." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();

  const services = [
    { icon: FileCheck2, title: t("Trámites regulatorios ante INVIMA", "Regulatory procedures before INVIMA"), desc: t("Gestionamos todos los trámites regulatorios ante el INVIMA-COLOMBIA.", "We manage all regulatory procedures before INVIMA-COLOMBIA.") },
    { icon: Stethoscope, title: t("Sistema de Dirección Técnica Asistida", "Assisted Technical Management System"), desc: t("Ejecución real de actividades regulatorias exigidas por INVIMA con evidencia organizada.", "Real execution of regulatory activities required by INVIMA with organized evidence.") },
    { icon: ClipboardCheck, title: t("Certificación CCAA", "CCAA Certification"), desc: t("Acompañamiento integral para importadores de dispositivos médicos.", "Comprehensive support for medical device importers.") },
    { icon: Building2, title: t("Sistemas de Gestión ISO 9001 y 13485", "ISO 9001 and 13485 Management Systems"), desc: t("Diseñamos e implementamos sistemas de gestión de calidad eficientes.", "We design and implement efficient quality management systems.") },
  ];

  const pillars = [
    { icon: ShieldCheck, title: t("Expertos en Salud", "Health Experts"), desc: t("Especialistas en normatividad INVIMA e ISO para dispositivos médicos.", "Specialists in INVIMA and ISO regulations for medical devices.") },
    { icon: Sparkles, title: t("Automatización e IA", "Automation and AI"), desc: t("Reducción de carga administrativa mediante tecnología de vanguardia.", "Reduction of administrative burden through cutting-edge technology.") },
    { icon: Workflow, title: t("Acompañamiento total", "Total support"), desc: t("Desde el diagnóstico inicial hasta la auditoría final, sin sorpresas.", "From initial diagnosis to final audit, with no surprises.") },
    { icon: TrendingUp, title: t("Resultados reales", "Real results"), desc: t("Enfoque práctico, claro y orientado a la eficiencia operativa.", "Practical, clear approach focused on operational efficiency.") },
  ];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-navy-deep/40" />
        </div>

        <div className="container-x relative z-10 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-navy-deep/40 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold backdrop-blur animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Consulting Group — Colombia
            </div>

            <h1 className="mt-7 font-display text-5xl md:text-7xl lg:text-[5.25rem] leading-[1.02] text-cream animate-fade-up" style={{ animationDelay: "120ms" }}>
              {t("Cumplimiento normativo,", "Regulatory compliance,")}<br/>
              <span className="italic text-gradient-gold">{t("redefinido", "redefined")}</span> {t("para líderes.", "for leaders.")}
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
              {t("Diseñamos y mantenemos sistemas de gestión y certificaciones que reducen la carga operativa y aseguran el cumplimiento permanente de la normativa en Colombia.", "We design and maintain management systems and certifications that reduce operational burden and ensure permanent compliance with regulations in Colombia.")}
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "360ms" }}>
              <Link to="/contacto" className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-gold hover:-translate-y-0.5 transition">
                {t("Agenda una reunión", "Book a meeting")} <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/servicios" className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-medium text-foreground hover:border-gold hover:text-gold transition">
                {t("Conoce nuestros servicios", "Discover our services")}
              </Link>
            </div>

            <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 max-w-3xl animate-fade-up" style={{ animationDelay: "500ms" }}>
              {[
                [t("+15 años", "+15 years"), t("de experiencia regulatoria", "of regulatory experience")],
                ["INVIMA", t("trámites end-to-end", "end-to-end procedures")],
                ["ISO 9001 · 13485", t("certificaciones líderes", "leading certifications")],
                ["100%", t("auditorías superadas", "passed audits")],
              ].map(([k, v]) => (
                <div key={k} className="border-l border-gold/40 pl-4">
                  <dt className="font-display text-2xl md:text-3xl text-gold">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* VISION QUOTE */}
      <section className="py-28 border-y border-border/40 bg-navy">
        <div className="container-x grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">{t("Nuestra visión", "Our vision")}</p>
            <div className="hairline w-24" />
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <blockquote className="font-display text-3xl md:text-5xl leading-tight text-cream italic">
              “{t("Liderar la", "Lead the")} <span className="text-gradient-gold not-italic">{t("evolución", "evolution")}</span> {t("del cumplimiento normativo y la eficiencia operativa.", "of regulatory compliance and operational efficiency.")}”
            </blockquote>
            <p className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              {t("QiA Consulting Group ayuda a empresas del sector salud, fabricantes e importadores de dispositivos médicos y desarrolladores de software médico a cumplir con los requisitos del", "QiA Consulting Group helps health sector companies, manufacturers and importers of medical devices, and medical software developers comply with the requirements of")} <span className="text-gold-soft">INVIMA</span> {t("y a implementar, certificar y sostener sistemas de gestión bajo las normas", "and to implement, certify and sustain management systems under the")} <span className="text-gold-soft">ISO 9001 e ISO 13485</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={servicesBg} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="container-x relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">{t("Servicios", "Services")}</p>
              <h2 className="font-display text-4xl md:text-5xl text-cream max-w-xl">
                {t("Soluciones que convierten la norma en", "Solutions that turn the norm into an")} <span className="italic text-gold">{t("ventaja", "advantage")}</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Link to="/servicios" className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
                {t("Ver todos los servicios", "See all services")} <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link to="/servicios" className="group relative block h-full rounded-2xl border border-border/60 bg-card/70 backdrop-blur p-7 hover:border-gold/60 hover:bg-card transition-all hover:-translate-y-1">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                    <s.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-cream mt-6">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ArrowUpRight size={18} className="absolute top-6 right-6 text-muted-foreground group-hover:text-gold transition" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY QIA */}
      <section className="py-28 bg-navy">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">{t("¿Por qué QiA?", "Why QiA?")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream max-w-3xl">
              {t("Cuatro pilares que sostienen el", "Four pillars that support the")} <span className="italic text-gold">{t("crecimiento", "growth")}</span> {t("de tu organización.", "of your organization.")}
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="bg-navy-deep">
                <div className="h-full p-8 group hover:bg-card transition">
                  <p.icon size={28} className="text-gold" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-cream mt-5">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-navy to-navy-deep p-12 md:p-16 shadow-elevated">
              <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="font-display text-3xl md:text-5xl leading-tight text-cream">
                    {t("¿Listo para optimizar tu", "Ready to optimize your")} <span className="italic text-gradient-gold">{t("cumplimiento normativo", "regulatory compliance")}</span>?
                  </h3>
                  <p className="mt-5 text-muted-foreground max-w-md">
                    {t("Conversemos sobre las necesidades de tu organización y diseñemos juntos un camino claro hacia la certificación.", "Let's talk about the needs of your organization and together design a clear path to certification.")}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end">
                  <Link to="/contacto" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-gold">
                    {t("Agenda una reunión", "Book a meeting")} <ArrowUpRight size={18} />
                  </Link>
                  <a href="mailto:slopez@qiacg.net" className="inline-flex items-center justify-center rounded-full border border-foreground/25 px-7 py-3.5 text-sm text-foreground hover:border-gold hover:text-gold transition">
                    slopez@qiacg.net
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
