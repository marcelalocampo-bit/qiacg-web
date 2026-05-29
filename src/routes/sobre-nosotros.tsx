import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import sady from "@/assets/sady-lopez.png";
import { Award, Cpu, HeartHandshake, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

export const Route = createFileRoute("/sobre-nosotros")({
  head: () => ({
    meta: [
      { title: "Sobre nosotros – QiA Consulting Group" },
      { name: "description", content: "Excelencia, integridad e innovación. Conoce la historia y el liderazgo detrás de QiA Consulting Group." },
      { property: "og:title", content: "Sobre nosotros – QiA Consulting Group" },
      { property: "og:description", content: "Excelencia, integridad e innovación en cada proceso." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: Award, title: t("Excelencia técnica", "Technical excellence"), desc: t("Estándares ISO y prácticas de auditoría aplicadas con rigor en cada entrega.", "ISO standards and audit practices applied rigorously in every delivery.") },
    { icon: Cpu, title: t("Tecnología e IA", "Technology and AI"), desc: t("Automatización inteligente para simplificar la gestión documental y operativa.", "Intelligent automation to simplify documentary and operational management.") },
    { icon: HeartHandshake, title: t("Aliados estratégicos", "Strategic allies"), desc: t("Acompañamiento cercano y de largo plazo para la sostenibilidad de tu operación.", "Close, long-term support for the sustainability of your operation.") },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={t("Sobre nosotros", "About us")}
        title={<>{t("Excelencia, integridad e", "Excellence, integrity and")} <span className="italic text-gradient-gold">{t("innovación", "innovation")}</span> {t("en cada proceso.", "in every process.")}</>}
        subtitle={t("Transformamos la regulación en una ventaja competitiva real para empresas del sector salud y la manufactura.", "We transform regulation into a real competitive advantage for companies in the health and manufacturing sector.")}
      />

      {/* HISTORY */}
      <section className="py-24">
        <div className="container-x grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">{t("Nuestra historia", "Our history")}</p>
            <h2 className="font-display text-3xl md:text-4xl text-cream leading-tight">
              {t("De la consultoría tradicional a un modelo que", "From traditional consulting to a model that")} <span className="italic text-gold">{t("integra plenamente la tecnología", "fully integrates technology")}</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 space-y-5 text-base text-muted-foreground leading-relaxed">
            <p>
              {t("QiA Consulting Group nació con el propósito de transformar la manera en que las organizaciones enfrentan el cumplimiento normativo. Lo que comenzó como un enfoque tradicional de consultoría evolucionó rápidamente hacia un modelo integral que entiende que la normatividad no debe ser un obstáculo, sino una ventaja competitiva.", "QiA Consulting Group was born with the purpose of transforming the way organizations face regulatory compliance. What began as a traditional consulting approach quickly evolved into a comprehensive model that understands that regulations should not be an obstacle, but a competitive advantage.")}
            </p>
            <p>
              {t("Hemos acompañado a numerosas empresas del sector salud y manufactura en la obtención de certificaciones críticas, convirtiéndonos en aliados estratégicos para su crecimiento y sostenibilidad operativa.", "We have supported numerous companies in the health and manufacturing sectors in obtaining critical certifications, becoming strategic allies for their growth and operational sustainability.")}
            </p>
            <p>
              {t("Hoy, las nuevas tecnologías y la", "Today, new technologies and")} <span className="text-gold-soft">{t("Inteligencia Artificial", "Artificial Intelligence")}</span> {t("han abierto el camino a nuestra más reciente evolución, marcando un cambio de paradigma.", "have paved the way for our most recent evolution, marking a paradigm shift.")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 bg-navy border-y border-border/40">
        <div className="container-x text-center max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-6">{t("Nuestra visión", "Our vision")}</p>
            <blockquote className="font-display text-3xl md:text-5xl italic leading-tight text-cream">
              “{t("Liderar la", "Lead the")} <span className="text-gradient-gold not-italic">{t("evolución", "evolution")}</span> {t("del cumplimiento normativo y la eficiencia operativa.", "of regulatory compliance and operational efficiency.")}”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-cream max-w-2xl">
              {t("Lo que nos hace", "What makes us")} <span className="italic text-gold">{t("diferentes", "different")}</span>.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border/60 bg-card/70 p-8 hover:border-gold/60 transition">
                  <v.icon size={28} className="text-gold" strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-cream mt-5">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 bg-navy">
        <div className="container-x grid md:grid-cols-12 gap-12 items-center">
          <Reveal className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute -inset-4 rounded-full bg-gradient-gold opacity-20 blur-2xl" />
              <img src={sady} alt="Sady Marcela López" className="relative rounded-full w-full h-full object-cover shadow-elevated border border-gold/20" />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">{t("Liderazgo y garantía técnica", "Leadership and technical guarantee")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-cream">Sady Marcela López</h2>
            <p className="mt-2 text-gold-soft">{t("Fundadora & CEO", "Founder & CEO")}</p>
            <div className="hairline w-24 my-6" />
            <p className="text-base text-muted-foreground leading-relaxed">
              {t("Ingeniera electrónica, magíster en ingeniería biomédica y auditora ISO. Con amplia trayectoria en el sector salud y dispositivos médicos, ha guiado a empresas líderes en certificaciones", "Electronic engineer, master in biomedical engineering and ISO auditor. With a long track record in the health sector and medical devices, she has guided leading companies in")} <span className="text-gold-soft">ISO 9001, ISO 13485, ISO 42001, CCAA</span> {t("y trámites ante el INVIMA, asegurando cumplimiento y eficiencia operativa.", "certifications and procedures before INVIMA, ensuring compliance and operational efficiency.")}
            </p>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold">
              {t("Conversemos", "Let's talk")} <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
      <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-gold/5 blur-3xl" />
      <div className="container-x relative">
        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5 animate-fade-up">{eyebrow}</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "200ms" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
