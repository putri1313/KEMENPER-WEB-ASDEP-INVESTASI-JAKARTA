import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { useSitePreferences } from "@/lib/site-preferences";
import marine from "@/assets/indonesia-marine.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Indonesia Tourism Investment" },
      { name: "description", content: "Contact the Ministry of Tourism of the Republic of Indonesia for tourism investment inquiries, information, and visitor support." },
    ],
  }),
  component: ContactPage,
});

const contactChannels = [
  {
    label: "Visit us",
    detail: "Gedung Sapta Pesona, Jl. Medan Merdeka Barat No. 17, Jakarta 10110",
    href: "https://maps.google.com/?q=Gedung+Sapta+Pesona+Jl+Medan+Merdeka+Barat+17+Jakarta",
    action: "Open map",
    Icon: MapPin,
  },
  {
    label: "WhatsApp Contact Center",
    detail: "+62 811-895-6767",
    href: "https://wa.me/628118956767",
    action: "Chat on WhatsApp",
    Icon: MessageCircle,
  },
  {
    label: "Call the Ministry",
    detail: "+62 21-383-8000",
    href: "tel:+62213838000",
    action: "Call now",
    Icon: Phone,
  },
  {
    label: "Email",
    detail: "info@kemenpar.go.id",
    href: "mailto:info@kemenpar.go.id",
    action: "Send an email",
    Icon: Mail,
  },
];

function ContactPage() {
  const { t } = useSitePreferences();
  return <>
    <section className="relative flex min-h-[48vh] items-center overflow-hidden bg-navy pt-20 text-primary-foreground">
      <img src={marine} alt="The coast and clear ocean around an Indonesian island" className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/25" />
      <div className="container-portal relative py-20">
        <p className="eyebrow text-gold">{t("We are here to help")}</p>
        <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-8xl">{t("Contact Us")}</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">{t("Connect with the Ministry of Tourism for destination information, tourism investment inquiries, and official support channels.")}</p>
      </div>
    </section>

    <section className="section-space bg-mist">
      <div className="container-portal grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow text-forest">{t("Contact & inquiries")}</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">Let’s start a conversation.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">Our contact channels can help you find the right starting point for questions about Indonesia’s tourism destinations, investment opportunities, and Ministry information.</p>
          <div className="mt-8 rounded-sm border border-border bg-card p-6 shadow-soft md:p-7">
            <div className="flex items-center gap-4"><img src="/kemenpar-logo.png" alt="Ministry of Tourism emblem" className="size-14 object-contain"/><div><p className="font-display text-base font-extrabold">{t("Ministry of Tourism")}</p><p className="mt-1 text-sm text-muted-foreground">{t("Republic of Indonesia")}</p></div></div>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">{t("Use the official contact center for general inquiries. For a tourism investment proposal, include the destination, project type, and the best way to reach you.")}</p>
            <a href="mailto:info@kemenpar.go.id?subject=Tourism%20Investment%20Inquiry" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-forest hover:underline">Send an investment inquiry <ArrowUpRight size={15}/></a>
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-end justify-between gap-4"><div><p className="eyebrow text-forest">{t("Official channels")}</p><h2 className="mt-2 font-display text-2xl font-extrabold">{t("Contact the Ministry")}</h2></div><span className="hidden rounded-full bg-card px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-forest sm:inline-flex">Kementerian Pariwisata RI</span></div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactChannels.map(({ label, detail, href, action, Icon }) => <a key={label} href={href} target={href.startsWith("https://") ? "_blank" : undefined} rel={href.startsWith("https://") ? "noreferrer" : undefined} className="group flex min-h-48 flex-col rounded-sm border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-forest/50 hover:shadow-soft md:p-6">
              <span className="grid size-10 place-items-center rounded-full bg-mist text-forest transition group-hover:bg-forest group-hover:text-white"><Icon size={19}/></span>
              <span className="mt-5 text-xs font-bold text-muted-foreground">{t(label)}</span>
              <span className="mt-2 font-display text-base font-extrabold leading-6">{detail}</span>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-extrabold text-forest">{t(action)}<ArrowUpRight size={13}/></span>
            </a>)}
          </div>
          <p className="mt-4 text-xs leading-6 text-muted-foreground">Office address: Jl. Medan Merdeka Barat No. 17, RT/RW 02/03, Gambir, Jakarta 10110, Indonesia.</p>
        </div>
      </div>
    </section>

    <section className="section-space bg-navy text-primary-foreground">
      <div className="container-portal grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div><p className="eyebrow text-gold">{t("Business licensing support")}</p><h2 className="mt-3 font-display text-3xl font-extrabold">{t("Need help with an OSS application?")}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-primary-foreground/65">{t("For technical support with Online Single Submission (OSS), use the OSS help channels directly. For policy or destination questions, contact the Ministry of Tourism.")}</p></div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col"><a href="tel:169" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-extrabold text-navy transition hover:-translate-y-0.5">OSS Call Center · 169 <Phone size={15}/></a><a href="mailto:kontak@oss.go.id" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-primary-foreground/25 px-5 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10">kontak@oss.go.id <ArrowUpRight size={15}/></a></div>
        <div className="flex items-center gap-2 border-t border-primary-foreground/15 pt-5 text-xs leading-6 text-primary-foreground/50 md:col-span-2"><ShieldCheck size={15} className="shrink-0 text-gold"/>Contact details are shown from official Ministry and OSS channels. <a className="underline decoration-primary-foreground/30 underline-offset-4 hover:text-primary-foreground" href="https://oss.go.id/" target="_blank" rel="noreferrer">Visit OSS</a></div>
      </div>
    </section>
  </>;
}
