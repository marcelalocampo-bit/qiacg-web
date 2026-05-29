import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas Frecuentes – QiA Consulting Group" },
      { name: "description", content: "Respuestas claras sobre normativa, certificaciones y procesos con INVIMA." },
      { property: "og:title", content: "Preguntas Frecuentes – QiA Consulting Group" },
      { property: "og:description", content: "Respuestas claras sobre normativa, certificaciones y procesos con INVIMA." },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useLanguage();

  const groups = [
    {
      title: t("Almacenamiento y Certificación CCAA", "Storage and CCAA Certification"),
      items: [
        [t("¿Necesito tener un área específica para almacenar los dispositivos que fabrico o importo?", "Do I need to have a specific area to store the devices I manufacture or import?"), t("Sí. El INVIMA exige áreas claramente delimitadas para recepción, almacenamiento, cuarentena, devoluciones, acondicionamiento y despacho. Estas zonas deben estar separadas físicamente y cumplir con condiciones de higiene, orden y control ambiental.", "Yes. INVIMA requires clearly defined areas for reception, storage, quarantine, returns, conditioning, and dispatch. These zones must be physically separated and meet hygiene, order, and environmental control conditions.")],
        [t("¿Puedo usar una vivienda como bodega o área de almacenamiento?", "Can I use a home as a warehouse or storage area?"), t("No. Las instalaciones no pueden ubicarse dentro de viviendas ni en espacios improvisados. Deben ser áreas exclusivas para actividades de almacenamiento y gestión de dispositivos médicos.", "No. Facilities cannot be located within homes or improvised spaces. They must be exclusive areas for storage and medical device management activities.")],
        [t("¿Qué tipo de control ambiental debo garantizar en mi bodega?", "What kind of environmental control should I guarantee in my warehouse?"), t("Debes controlar temperatura, humedad, iluminación y ventilación según los requisitos del fabricante del producto. Además, debes monitorear y registrar esos valores de manera periódica.", "You must control temperature, humidity, lighting, and ventilation according to the product manufacturer's requirements. Also, you must monitor and record these values periodically.")],
        [t("¿Quién debe ser el Director Técnico y qué funciones tiene?", "Who should be the Technical Director and what are their functions?"), t("Debe ser un profesional de un área afín a los dispositivos médicos, con experiencia demostrable. Es responsable de aprobar inspecciones, acondicionamientos, rechazos, devoluciones, autorizaciones y decisiones sobre la calidad del producto.", "It must be a professional from an area related to medical devices, with demonstrable experience. They are responsible for approving inspections, conditioning, rejections, returns, authorizations, and decisions on product quality.")],
        [t("¿Necesito un organigrama para mi empresa?", "Do I need an organizational chart for my company?"), t("Sí. Debe existir un organigrama actualizado que muestre la estructura jerárquica, incluyendo personal tercerizado.", "Yes. There must be an updated organizational chart showing the hierarchical structure, including outsourced personnel.")],
        [t("¿Tengo que documentar mis procedimientos internos?", "Do I have to document my internal procedures?"), t("Sí. El INVIMA exige manuales y procedimientos codificados, vigentes y aprobados formalmente por el Director Técnico.", "Yes. INVIMA requires formalized manuals and procedures that are codified, current, and formally approved by the Technical Director.")],
      ] as [string, string][],
    },
    {
      title: t("Dirección Técnica e INVIMA", "Technical Management and INVIMA"),
      items: [
        [t("¿Qué actividades regulatorias debe ejecutar mi Director Técnico?", "What regulatory activities must my Technical Director execute?"), t("Auditorías internas, control de cambios, gestión de quejas, tecnovigilancia, reportes ante INVIMA, control documental y supervisión de las condiciones sanitarias.", "Internal audits, change control, complaint management, technovigilance, reports to INVIMA, document control, and supervision of sanitary conditions.")],
        [t("¿Qué pasa si no documentamos esas actividades?", "What happens if we do not document those activities?"), t("Aunque se realicen, ante una visita del INVIMA solo cuenta lo que está documentado. La falta de evidencia es una causal habitual de hallazgos críticos.", "Even if they are performed, during an INVIMA visit, only what is documented counts. The lack of evidence is a common cause for critical findings.")],
        [t("¿Qué es el Sistema de Dirección Técnica Asistida?", "What is the Assisted Technical Management System?"), t("Un modelo en el que QiA ejecuta y documenta de forma periódica las actividades regulatorias de tu Director Técnico, dejando evidencia auditable y un sistema vivo.", "A model in which QiA periodically executes and documents the regulatory activities of your Technical Director, leaving auditable evidence and a living system.")],
      ] as [string, string][],
    },
    {
      title: t("ISO y sistemas de gestión", "ISO and management systems"),
      items: [
        [t("¿Qué diferencia hay entre ISO 9001 e ISO 13485?", "What is the difference between ISO 9001 and ISO 13485?"), t("ISO 9001 aplica a cualquier organización; ISO 13485 es específica para dispositivos médicos y exige controles regulatorios, de riesgo y trazabilidad mucho más estrictos.", "ISO 9001 applies to any organization; ISO 13485 is specific for medical devices and requires much stricter regulatory, risk, and traceability controls.")],
        [t("¿Cuánto demora certificarse?", "How long does it take to get certified?"), t("Depende del estado del sistema actual. Un proyecto promedio toma entre 4 y 8 meses con acompañamiento continuo.", "It depends on the current state of the system. An average project takes between 4 and 8 months with continuous support.")],
        [t("¿Acompañan también en la auditoría del ente certificador?", "Do you also assist in the certification body audit?"), t("Sí. Preparamos al equipo, simulamos la auditoría y acompañamos en la visita real para mitigar hallazgos.", "Yes. We prepare the team, simulate the audit, and accompany you during the real visit to mitigate findings.")],
      ] as [string, string][],
    },
  ];

  return (
    <SiteLayout>
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
        <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5 animate-fade-up">{t("Preguntas Frecuentes", "Frequently Asked Questions")}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t("Respuestas claras sobre", "Clear answers about")} <span className="italic text-gradient-gold">{t("normativa", "regulations")}</span>, {t("certificaciones e INVIMA.", "certifications and INVIMA.")}
          </h1>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x space-y-16">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 80}>
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl md:text-3xl text-cream sticky top-28">{g.title}</h2>
                  <div className="hairline w-16 mt-4" />
                </div>
                <div className="md:col-span-8 space-y-2">
                  {g.items.map(([q, a], i) => (
                    <FaqItem key={i} q={q} a={a} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border/60 bg-card/60 overflow-hidden hover:border-gold/40 transition">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 text-left p-6"
      >
        <span className="text-base md:text-lg text-cream font-medium">{q}</span>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40 text-gold shrink-0">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className="grid transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
