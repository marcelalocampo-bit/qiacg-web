import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto – QiA Consulting Group" },
      { name: "description", content: "Agenda una reunión con QiA Consulting Group. Atención personalizada por correo y WhatsApp." },
      { property: "og:title", content: "Contacto – QiA Consulting Group" },
      { property: "og:description", content: "Estamos listos para escuchar las necesidades de tu organización." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch("/dummy.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString()
    }).then(() => setSent(true));
  };

  return (
    <SiteLayout>
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
        <div className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-x relative">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-5 animate-fade-up">{t("Contacto", "Contact")}</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-cream max-w-4xl animate-fade-up" style={{ animationDelay: "100ms" }}>
            {t("Listos para escuchar las necesidades de tu", "Ready to listen to the needs of your")} <span className="italic text-gradient-gold">{t("organización", "organization")}</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "200ms" }}>
            {t("Escríbenos para agendar una reunión, solicitar una propuesta o resolver dudas puntuales sobre cumplimiento normativo.", "Write to us to schedule a meeting, request a proposal, or resolve specific doubts about regulatory compliance.")}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5 space-y-4">
            <ContactCard icon={Mail} label={t("Correo Electrónico", "Email")} value="slopez@qiacg.net" href="mailto:slopez@qiacg.net" />
            <ContactCard icon={MessageCircle} label="WhatsApp" value="+57 315 696 1279" href="https://wa.me/573156961279" hint={t("Atención rápida y personalizada", "Fast and personalized attention")} />
            <ContactCard icon={MapPin} label={t("Ubicación", "Location")} value={t("Bogotá, Colombia", "Bogota, Colombia")} />
            <ContactCard icon={Clock} label={t("Horario", "Hours")} value={t("Lun – Vie | 8:00 a.m. – 6:00 p.m.", "Mon – Fri | 8:00 a.m. – 6:00 p.m.")} />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form name="contacto" method="POST" data-netlify="true" data-netlify-honeypot="_honey" onSubmit={onSubmit} className="rounded-2xl border border-border/60 bg-card/70 p-8 md:p-10 space-y-5">
              <h2 className="font-display text-2xl md:text-3xl text-cream">{t("Hablemos", "Let's talk")}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                <Field name="nombre" label={t("Nombre completo", "Full name")} required />
                <Field name="empresa" label={t("Empresa", "Company")} />
                <Field name="correo" label={t("Correo electrónico", "Email address")} type="email" required />
                <Field name="telefono" label={t("Teléfono", "Phone number")} />
              </div>
              <SelectField name="asunto" label={t("Asunto", "Subject")} options={[t("Consulta General", "General Inquiry"), t("Certificación CCAA", "CCAA Certification"), t("Recertificación", "Recertification"), t("ISO 9001 / 13485", "ISO 9001 / 13485"), t("Dirección Técnica Asistida", "Assisted Technical Management"), t("Otro", "Other")]} />
              <TextareaField name="mensaje" label={t("Mensaje", "Message")} required />
              <input type="hidden" name="form-name" value="contacto" /><input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-gold hover:-translate-y-0.5 transition">
                {t("Enviar mensaje", "Send message")} <ArrowUpRight size={16} />
              </button>
              {sent && <p className="text-sm text-gold">{t("Mensaje enviado exitosamente. Nos pondremos en contacto pronto.", "Message sent successfully. We will be in touch soon.")}</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactCard({ icon: Icon, label, value, href, hint }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; href?: string; hint?: string }) {
  const inner = (
    <div className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-gold/60 transition">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-primary-foreground shrink-0">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-base text-cream font-medium">{value}</p>
        {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}{required && " *"}</span>
      <input name={name} type={type} required={required}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-cream outline-none focus:border-gold transition" />
    </label>
  );
}

function TextareaField({ name, label, required }: { name: string; label: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}{required && " *"}</span>
      <textarea name={name} required={required} rows={5}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-cream outline-none focus:border-gold transition resize-none" />
    </label>
  );
}

function SelectField({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</span>
      <select name={name}
        className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-cream outline-none focus:border-gold transition">
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
