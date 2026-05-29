import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios – QiA Consulting Group" },
      { name: "description", content: "Trámites INVIMA, Dirección Técnica Asistida, certificación CCAA, ISO 9001 e ISO 13485 para el sector salud." },
      { property: "og:title", content: "Servicios – QiA Consulting Group" },
      { property: "og:description", content: "Soluciones integrales en cumplimiento normativo y eficiencia operativa." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      tag: "01",
      title: t("Trámites regulatorios ante INVIMA", "Regulatory procedures before INVIMA"),
      desc: t("Gestionamos de manera integral todos los trámites regulatorios ante el INVIMA-COLOMBIA relacionados con dispositivos médicos y equipos biomédicos, asegurando procesos ágiles, precisos y alineados con la normatividad vigente.", "We comprehensively manage all regulatory procedures before INVIMA-COLOMBIA related to medical devices and biomedical equipment, ensuring agile, precise processes aligned with current regulations."),
      bullets: [
        t("Revisión técnica inicial", "Initial technical review"), 
        t("Radicación y seguimiento", "Filing and tracking"), 
        t("Aprobación y postventa", "Approval and post-sales")
      ],
    },
    {
      tag: "02",
      title: t("Sistema de Dirección Técnica Asistida", "Assisted Technical Management System"),
      desc: t("Acompañamos a empresas importadoras y comercializadoras en la ejecución real de las actividades regulatorias exigidas por INVIMA, con evidencia organizada para auditorías e inspecciones sanitarias.", "We support importing and marketing companies in the real execution of regulatory activities required by INVIMA, with organized evidence for audits and health inspections."),
      bullets: [
        t("Módulos escalables", "Scalable modules"), 
        t("Evidencia documentada", "Documented evidence"), 
        t("Cumplimiento sostenido", "Sustained compliance")
      ],
    },
    {
      tag: "03",
      title: t("Certificación CCAA", "CCAA Certification"),
      desc: t("Acompañamiento integral para importadores de dispositivos médicos: diagnóstico, implementación, documentación y preparación para la visita del INVIMA.", "Comprehensive support for medical device importers: diagnosis, implementation, documentation and preparation for the INVIMA visit."),
      bullets: [
        t("Diagnóstico inicial", "Initial diagnosis"), 
        t("Implementación documental", "Document implementation"), 
        t("Preparación de auditoría", "Audit preparation")
      ],
    },
    {
      tag: "04",
      title: t("Recertificación CCAA", "CCAA Recertification"),
      desc: t("Auditoría interna y preparación estratégica para renovar tu certificación con éxito, sin sobresaltos ni hallazgos críticos.", "Internal audit and strategic preparation to successfully renew your certification, without surprises or critical findings."),
      bullets: [
        t("Auditoría interna", "Internal audit"), 
        t("Plan de remediación", "Remediation plan"), 
        t("Acompañamiento en visita", "Visit support")
      ],
    },
    {
      tag: "05",
      title: t("Condiciones sanitarias", "Sanitary conditions"),
      desc: t("Cumplimiento integral para fabricación de dispositivos y equipos biomédicos bajo los lineamientos del INVIMA.", "Comprehensive compliance for manufacturing of medical devices and biomedical equipment under INVIMA guidelines."),
      bullets: [
        t("Buenas prácticas", "Good practices"), 
        t("Validación de procesos", "Process validation"), 
        t("Control de cambios", "Change control")
      ],
    },
    {
      tag: "06",
      title: "ISO 9001 · ISO 13485 · ISO 42001",
      desc: t("Implementamos, certificamos y sostenemos sistemas de gestión de calidad y de IA en organizaciones del sector salud y software médico.", "We implement, certify and sustain quality and AI management systems in organizations of the health sector and medical software."),
      bullets: [
        t("Diseño del SGC", "QMS Design"), 
        t("Acompañamiento certificador", "Certification support"), 
        t("Mejora continua", "Continuous improvement")
      ],
    },
  ];

  return (
    <SiteLayout>
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
        <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5 animate-fade-up">{t("Servicios", "Services")}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t("Soluciones integrales en", "Comprehensive solutions in")} <span className="italic text-gradient-gold">{t("cumplimiento", "compliance")}</span> {t("y eficiencia operativa.", "and operational efficiency.")}
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "200ms" }}>
            {t("Un portafolio diseñado para que la normativa nunca frene tu crecimiento.", "A portfolio designed so that regulations never slow your growth.")}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x space-y-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative grid md:grid-cols-12 gap-8 rounded-2xl border border-border/60 bg-card/70 p-8 md:p-12 hover:border-gold/60 transition-all">
                <div className="md:col-span-3">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">{s.tag}</p>
                </div>
                <div className="md:col-span-6">
                  <h2 className="font-display text-2xl md:text-3xl text-cream leading-tight">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="md:col-span-3 space-y-3">
                  {s.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                  <Link to="/contacto" className="mt-3 inline-flex items-center gap-1.5 text-sm text-gold hover:gap-2.5 transition-all">
                    {t("Solicitar", "Request")} <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl border border-gold/30 bg-gradient-to-br from-navy to-navy-deep p-12 md:p-16 text-center shadow-elevated">
              <h3 className="font-display text-3xl md:text-5xl text-cream max-w-2xl mx-auto leading-tight">
                {t("¿No estás seguro de qué necesitas?", "Not sure what you need?")} <span className="italic text-gradient-gold">{t("Hablemos.", "Let's talk.")}</span>
              </h3>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                {t("Diagnóstico inicial sin costo. Te decimos exactamente dónde estás y qué falta.", "Initial diagnosis at no cost. We tell you exactly where you stand and what's missing.")}
              </p>
              <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-gold">
                {t("Agenda tu diagnóstico", "Book your diagnosis")} <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
