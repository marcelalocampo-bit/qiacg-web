import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Network, 
  ShieldCheck, 
  Award, 
  LayoutDashboard 
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios | QiA Consulting Group" },
      { name: "description", content: "Soluciones de Consultoría y Optimización Estratégica en cumplimiento regulatorio y excelencia técnica." },
      { property: "og:title", content: "Servicios | QiA Consulting Group" },
      { property: "og:description", content: "Transformamos el cumplimiento regulatorio en una ventaja competitiva mediante procesos automatizados." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Network size={28} className="text-gold" />,
      title: t("Arquitectura de Procesos y Transformación Digital Regulatoria", "Process Architecture and Digital Regulatory Transformation"),
      desc: t("En un entorno de salud altamente regulado, la eficiencia operativa es el pilar de la escalabilidad. No nos limitamos a documentar; rediseñamos sus flujos operativos integrando automatización inteligente.", "In a highly regulated health environment, operational efficiency is the pillar of scalability. We do not limit ourselves to documenting; we redesign your operational flows integrating intelligent automation."),
      modules: [
        {
          title: t("Diagnóstico y rediseño", "Diagnosis and redesign"),
          desc: t("Identificación precisa de cuellos de botella en áreas de calidad y regulatorias.", "Precise identification of bottlenecks in quality and regulatory areas.")
        },
        {
          title: t("Implementación de flujos", "Flow implementation"),
          desc: t("Automatización de tecnovigilancia, control de cambios, gestión de proveedores y soporte técnico mediante IA y herramientas integradas.", "Automation of technovigilance, change control, supplier management, and technical support using AI and integrated tools.")
        },
        {
          title: t("Trazabilidad de datos", "Data traceability"),
          desc: t("Aseguramos que su operación sea auditable, ágil y esté siempre lista para inspecciones.", "We ensure your operation is auditable, agile, and always ready for inspections.")
        },
        {
          title: t("Valor diferencial", "Differential value"),
          desc: t("Reducimos la carga administrativa de su equipo técnico, permitiendo un enfoque estratégico en la innovación.", "We reduce the administrative burden on your technical team, allowing a strategic focus on innovation.")
        }
      ]
    },
    {
      icon: <ShieldCheck size={28} className="text-gold" />,
      title: t("Consultoría Regulatoria INVIMA", "INVIMA Regulatory Consulting"),
      desc: t("Guiamos a fabricantes e importadores en el laberinto normativo colombiano para garantizar una entrada y permanencia exitosa en el mercado.", "We guide manufacturers and importers through the Colombian regulatory maze to ensure a successful market entry and permanence."),
      modules: [
        {
          title: t("Certificaciones CCAA", "CCAA Certifications"),
          desc: t("Acompañamiento integral en la obtención del Certificado de Almacenamiento y Acondicionamiento.", "Comprehensive support in obtaining the Storage and Conditioning Certificate.")
        },
        {
          title: t("Condiciones Sanitarias (CCS)", "Sanitary Conditions (CCS)"),
          desc: t("Evaluación y adecuación de plantas para el cumplimiento de normativas vigentes.", "Plant evaluation and adaptation to comply with current regulations.")
        },
        {
          title: t("Estrategia para Dispositivos y Software Médico", "Strategy for Medical Devices and Software"),
          desc: t("Definición de rutas regulatorias óptimas según el riesgo y clasificación del producto.", "Definition of optimal regulatory routes according to product risk and classification.")
        },
        {
          title: t("Gestión Documental", "Document Management"),
          desc: t("Preparación exhaustiva de expedientes ante INVIMA.", "Exhaustive preparation of dossiers for INVIMA.")
        }
      ]
    },
    {
      icon: <Award size={28} className="text-gold" />,
      title: t("Sistemas de Gestión de Calidad (SGC)", "Quality Management Systems (QMS)"),
      desc: t("Implementamos sistemas de gestión que mejoran el rendimiento organizacional y garantizan el cumplimiento de estándares internacionales.", "We implement management systems that improve organizational performance and ensure compliance with international standards."),
      modules: [
        {
          title: t("Certificación ISO", "ISO Certification"),
          desc: t("Implementación y mantenimiento de ISO 13485 (dispositivos médicos), ISO 9001 (calidad) e ISO/IEC 27001 (seguridad de la información).", "Implementation and maintenance of ISO 13485 (medical devices), ISO 9001 (quality), and ISO/IEC 27001 (information security).")
        },
        {
          title: t("Auditorías Internas", "Internal Audits"),
          desc: t("Evaluaciones rigurosas para asegurar el cumplimiento antes de procesos de certificación o inspecciones oficiales.", "Rigorous evaluations to ensure compliance before certification processes or official inspections.")
        },
        {
          title: t("Vigilancia Post-mercado", "Post-market Surveillance"),
          desc: t("Sistemas robustos de Tecnovigilancia y Reactivovigilancia que protegen su reputación y la seguridad del paciente.", "Robust Technovigilance and Reactivovigilance systems that protect your reputation and patient safety.")
        }
      ]
    },
    {
      icon: <LayoutDashboard size={28} className="text-gold" />,
      title: t("Sistema de Dirección Técnica Asistida (SDTA)", "Assisted Technical Management System (SDTA)"),
      desc: t("El cumplimiento normativo es una operación constante. Nuestro modelo SDTA permite a las empresas de salud externalizar su Dirección Técnica bajo un esquema modular, garantizando eficiencia sin la carga administrativa de un equipo interno de gran escala.", "Regulatory compliance is a constant operation. Our SDTA model allows health companies to outsource their Technical Management under a modular scheme, ensuring efficiency without the administrative burden of a large internal team."),
      modules: [
        {
          title: t("Capacitación y Competencia", "Training and Competence"),
          desc: t("Programa anual estructurado (cronograma, material formativo, ejecución y medición de competencias/resultados).", "Structured annual program (schedule, training material, execution, and measurement of competencies/results).")
        },
        {
          title: t("Gestión de PQRS", "PQR Management"),
          desc: t("Registro, análisis de causa raíz, elaboración de respuestas técnicas y seguimiento de indicadores mensuales de tendencia.", "Registration, root cause analysis, preparation of technical responses, and tracking of monthly trend indicators.")
        },
        {
          title: t("Vigilancia Post-mercado", "Post-market Surveillance"),
          desc: t("Gestión integral de incidentes, reportes trimestrales ante INVIMA, monitoreo de alertas sanitarias y ejecución del simulacro anual de retiro de producto.", "Comprehensive incident management, quarterly reports to INVIMA, monitoring of health alerts, and execution of the annual product recall drill.")
        },
        {
          title: t("Autoinspecciones", "Self-inspections"),
          desc: t("Programa anual de auditorías regulatorias, identificación de hallazgos, definición de acciones correctivas y seguimiento al cierre efectivo de brechas.", "Annual regulatory audit program, identification of findings, definition of corrective actions, and tracking to effectively close gaps.")
        }
      ]
    }
  ];

  return (
    <SiteLayout>
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
        <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5 animate-fade-up">
            {t("Servicios", "Services")}
          </p>
          {/* Título Principal H1 */}
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] text-cream max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t("Soluciones de Consultoría y", "Consulting Solutions and")} <span className="italic text-gradient-gold">{t("Optimización Estratégica", "Strategic Optimization")}</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg text-muted-foreground animate-fade-up leading-relaxed" style={{ animationDelay: "200ms" }}>
            {t("Transformamos el cumplimiento regulatorio en una ventaja competitiva mediante procesos automatizados y excelencia técnica.", "We transform regulatory compliance into a competitive advantage through automated processes and technical excellence.")}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x space-y-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="group relative grid md:grid-cols-12 gap-8 md:gap-12 rounded-3xl border border-border/60 bg-card/40 p-8 md:p-12 hover:border-gold/50 transition-all shadow-sm hover:shadow-md">
                
                {/* Icono y Título (H2) */}
                <div className="md:col-span-5 flex flex-col gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-gold/10 flex items-center justify-center border border-gold/20">
                    {s.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-cream leading-tight">{s.title}</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>

                {/* Sub-módulos (H3) y CTA */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {s.modules.map((m) => (
                      <div key={m.title} className="space-y-2">
                        <h3 className="flex items-start gap-2 text-sm font-semibold text-cream">
                          <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                          <span>{m.title}</span>
                        </h3>
                        <p className="text-sm text-muted-foreground/90 pl-6 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 pt-6 border-t border-border/40">
                    <Link to="/contacto" className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light hover:gap-3 transition-all">
                      {t("Solicitar sesión de diagnóstico técnico", "Request technical diagnosis session")} <ArrowUpRight size={16} />
                    </Link>
                  </div>
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
              <h2 className="font-display text-3xl md:text-5xl text-cream max-w-2xl mx-auto leading-tight">
                {t("¿Listo para llevar su", "Ready to take your")} <span className="italic text-gradient-gold">{t("operación al siguiente nivel?", "operation to the next level?")}</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                {t("Nuestro equipo de expertos está preparado para analizar su situación actual y diseñar una ruta clara de optimización.", "Our team of experts is ready to analyze your current situation and design a clear optimization path.")}
              </p>
              <Link to="/contacto" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-sm font-medium text-primary-foreground shadow-gold hover:scale-105 transition-transform">
                {t("Solicitar sesión de diagnóstico técnico", "Request technical diagnosis session")} <ArrowUpRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
