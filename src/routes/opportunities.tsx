import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Building2, Handshake, Landmark, Leaf, MapPin, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { useSitePreferences } from "@/lib/site-preferences";
import aerial from "@/assets/indonesia-aerial.jpg";
import marine from "@/assets/indonesia-marine.jpg";
import urban from "@/assets/indonesia-urban.jpg";
import { sampleOpportunities, themes } from "@/data/portal";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Tourism Investment Opportunities | Indonesia Tourism Investment" },
      { name: "description", content: "Explore illustrative tourism investment concepts, project pathways, and high-potential tourism sectors across Indonesia." },
    ],
  }),
  component: OpportunitiesPage,
});

const ownershipPathways = [
  { title: "Tourism authority boards", description: "Public destination bodies coordinate strategy, destination priorities, and investment pathways with partners.", image: aerial, icon: Landmark, tag: "Public sector" },
  { title: "Special economic zones", description: "Designated areas can offer an integrated setting for tourism, supporting infrastructure, and related business activity.", image: marine, icon: Building2, tag: "Destination zones" },
  { title: "Private companies", description: "Businesses can develop hospitality, visitor experiences, and supporting services in partnership with local stakeholders.", image: urban, icon: Handshake, tag: "Private sector" },
];

const featuredDestinations = [
  { name: "Bali", detail: "Wellness, culture & regenerative stays", image: aerial },
  { name: "West Java", detail: "Nature, marine & destination experiences", image: marine },
  { name: "Jakarta", detail: "Urban tourism, hospitality & MICE", image: urban },
] as const;

const investorPriorities = [
  { title: "Destination readiness", copy: "Clear plans, access, and supporting infrastructure help move promising ideas toward delivery." },
  { title: "Distinctive experiences", copy: "Investment can build on the local character, culture, and natural assets of each destination." },
  { title: "Long-term value", copy: "Responsible development strengthens tourism quality, resilience, and community participation." },
] as const;

function OpportunitiesPage() {
  const { t } = useSitePreferences();
  const [search, setSearch] = useState("");
  const [destinationType, setDestinationType] = useState("All destinations");
  const [investmentModel, setInvestmentModel] = useState("All approaches");
  const [theme, setTheme] = useState("All sectors");

  const filteredProjects = useMemo(() => sampleOpportunities.filter((project) => {
    const searchable = `${project.name} ${project.destination} ${project.sector}`.toLowerCase();
    return searchable.includes(search.toLowerCase())
      && (destinationType === "All destinations" || project.type === destinationType)
      && (investmentModel === "All approaches" || project.investmentType === investmentModel)
      && (theme === "All sectors" || project.sector.toLowerCase().includes(theme.toLowerCase()));
  }), [search, destinationType, investmentModel, theme]);

  return <>
    <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-navy pt-20 text-primary-foreground">
      <img src={marine} alt="Turquoise sea and green islands in Indonesia" className="absolute inset-0 size-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/35" />
      <div className="container-portal relative py-20">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Indonesia Â· Tourism investment</p>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-7xl">{t("Tourism Investment Opportunities")}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">{t("Explore project concepts and discover where investment can support high-quality, sustainable tourism across Indonesia.")}</p>
        </div>
        <div className="mt-9 max-w-5xl rounded-sm border border-primary-foreground/15 bg-background/95 p-3 text-foreground shadow-card backdrop-blur md:p-4">
          <label className="relative block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={19}/>
            <span className="sr-only">{t("Search investment project concepts")}</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects, destinations, or sectors..." className="h-12 w-full rounded-sm border-0 bg-transparent pl-12 pr-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring" />
          </label>
          <div className="mt-3 grid gap-2 border-t border-border pt-3 sm:grid-cols-3">
            <label className="grid gap-1 px-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-muted-foreground">{t("Destination type")}<select value={destinationType} onChange={(event) => setDestinationType(event.target.value)} className="h-10 rounded-sm border bg-card px-3 text-xs font-bold normal-case tracking-normal text-foreground"><option value="All destinations">{t("All destinations")}</option><option value="Regenerative">{t("Regenerative")}</option><option value="Priority">{t("Priority")}</option></select></label>
            <label className="grid gap-1 px-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-muted-foreground">{t("Investment approach")}<select value={investmentModel} onChange={(event) => setInvestmentModel(event.target.value)} className="h-10 rounded-sm border bg-card px-3 text-xs font-bold normal-case tracking-normal text-foreground"><option value="All approaches">{t("All approaches")}</option><option value="Private investment">{t("Private investment")}</option><option value="Development partnership">{t("Development partnership")}</option></select></label>
            <label className="grid gap-1 px-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-muted-foreground">{t("Thematic sector")}<select value={theme} onChange={(event) => setTheme(event.target.value)} className="h-10 rounded-sm border bg-card px-3 text-xs font-bold normal-case tracking-normal text-foreground"><option value="All sectors">{t("All sectors")}</option><option value="Marine">{t("Marine")}</option><option value="Wellness">{t("Wellness")}</option><option value="Cultural">{t("Culture")}</option><option value="MICE">MICE</option></select></label>
          </div>
        </div>
        <a href="#featured-destinations" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/80 transition hover:text-primary-foreground">{t("Explore featured projects")} <ArrowRight size={16}/></a>
      </div>
    </section>

    <section id="featured-destinations" className="section-space scroll-mt-20 bg-mist">
      <div className="container-portal">
        <div className="mb-10 text-center">
          <p className="eyebrow text-forest">{t("Featured destination areas")}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">{t("Discover high-potential destinations across Indonesia.")}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">{t("Explore places where local character, visitor demand, and responsible investment can come together.")}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredDestinations.map(({ name, detail, image }, index) => <a key={name} href="#investment-pipeline" className="group relative isolate min-h-[21rem] overflow-hidden rounded-sm bg-navy shadow-soft transition hover:-translate-y-1 hover:shadow-card">
            <img src={image} alt={`${name}, Indonesia`} className="absolute inset-0 z-0 size-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/15 to-navy/5" />
            <span className="absolute left-5 top-5 z-20 rounded-full border border-primary-foreground/30 bg-navy/35 px-3 py-1.5 font-mono text-[10px] font-bold text-primary-foreground backdrop-blur">0{index + 1}</span>
            <div className="absolute inset-x-0 bottom-0 z-20 p-6 text-primary-foreground">
              <h3 className="font-display text-3xl font-extrabold">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">{t(detail)}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gold">{t("Explore destination")} <ArrowRight size={15}/></span>
            </div>
          </a>)}
        </div>
        <div className="mt-9 text-center"><a href="#investment-pipeline" className="inline-flex items-center gap-2 rounded-sm bg-forest px-6 py-3 text-sm font-extrabold text-primary-foreground transition hover:bg-forest/90">{t("View investment concepts")} <ArrowRight size={16}/></a></div>
      </div>
    </section>

    <section id="investment-pipeline" className="section-space scroll-mt-20 bg-background">
      <div className="container-portal">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div><p className="eyebrow text-forest">{t("Explore the pipeline")}</p><h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">{t("Project opportunity pipeline")}</h2><p className="mt-4 max-w-2xl leading-7 text-muted-foreground">{t("Browse illustrative opportunities across priority and regenerative destinations. Filter by destination type, investment approach, or sector.")}</p></div>
          <p className="shrink-0 text-sm font-bold text-muted-foreground">{filteredProjects.length} {t(filteredProjects.length === 1 ? "project concept" : "project concepts")}</p>
        </div>
        {filteredProjects.length > 0 ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProjects.map((project) => <article key={project.name} className="group overflow-hidden rounded-sm border border-border bg-card shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy"><img src={project.image} alt={`${project.destination} tourism investment concept`} className="size-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"/><span className="absolute left-4 top-4 rounded-full border border-primary-foreground/25 bg-navy/65 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-primary-foreground">{t("Illustrative concept")}</span><span className="absolute bottom-4 left-4 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground"><MapPin size={15} className="text-gold"/>{project.destination}</span></div>
            <div className="p-5"><div className="flex flex-wrap gap-2 text-[10px] font-extrabold uppercase tracking-wider"><span className="rounded-full bg-mist px-2.5 py-1.5 text-forest">{project.type} destination</span><span className="rounded-full bg-mist px-2.5 py-1.5 text-muted-foreground">{project.sector}</span></div><h3 className="mt-4 min-h-14 font-display text-lg font-extrabold leading-snug">{project.name}</h3><p className="mt-3 min-h-10 text-sm leading-5 text-muted-foreground">{project.investmentType}</p><a href="mailto:info@kemenpar.go.id?subject=Tourism%20Investment%20Inquiry" className="mt-5 inline-flex items-center gap-2 border-t border-border pt-4 text-xs font-extrabold text-forest hover:underline">{t("Discuss an opportunity")} <ArrowUpRight size={14}/></a></div>
          </article>)}
        </div> : <div className="rounded-sm border border-dashed border-border bg-card px-6 py-14 text-center"><p className="font-display text-xl font-extrabold">{t("No project concepts match these filters.")}</p><p className="mt-2 text-sm text-muted-foreground">{t("Try a different destination, approach, or sector.")}</p><button type="button" onClick={() => { setSearch(""); setDestinationType("All destinations"); setInvestmentModel("All approaches"); setTheme("All sectors"); }} className="mt-5 text-sm font-bold text-forest hover:underline">{t("Clear all filters")}</button></div>}
        <p className="mt-6 max-w-4xl text-xs leading-6 text-muted-foreground">{t("These project concepts are illustrative examples, not live offers or confirmed government projects. Investment values and official project details will be published when verified information is available.")}</p>
      </div>
    </section>

    <section id="project-classification" className="section-space bg-background">
      <div className="container-portal grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow text-forest">{t("Project classification")}</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">{t("Find the right pathway for your project.")}</h2><p className="mt-5 leading-7 text-muted-foreground">{t("Tourism opportunities can be advanced by different owners and delivery partners. Understanding the project context helps identify the right counterpart and next steps.")}</p><a href="mailto:info@kemenpar.go.id?subject=Tourism%20Investment%20Inquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-forest hover:underline">{t("Contact the investment team")} <ArrowRight size={16}/></a></div>
        <div className="grid gap-4">
          {ownershipPathways.map(({ title, description, image, icon: Icon, tag }, index) => <article key={title} className={`group grid overflow-hidden rounded-sm border border-border bg-card md:grid-cols-[.95fr_1.05fr] ${index === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative min-h-48 overflow-hidden bg-navy md:min-h-56"><img src={image} alt="Tourism destination landscape" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-r from-navy/25 to-transparent"/></div>
            <div className="flex flex-col justify-center p-6 md:p-8"><span className="inline-flex w-fit items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-forest"><Icon size={15}/>{t(tag)}</span><h3 className="mt-3 font-display text-xl font-extrabold">{t(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{t(description)}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section id="thematic-opportunities" className="section-space bg-navy text-primary-foreground">
      <div className="container-portal">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow text-gold">{t("Where tourism can grow")}</p><h2 className="mt-4 font-display text-4xl font-extrabold md:text-5xl">{t("Thematic opportunities")}</h2><p className="mt-4 max-w-2xl leading-7 text-primary-foreground/65">{t("Explore sectors that connect Indonesia’s destination strengths with infrastructure, visitor experiences, and local enterprise.")}</p></div><Sparkles className="hidden text-gold md:block" size={30}/></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {themes.filter((item) => ["Wellness Tourism", "Marine Tourism", "Gastronomy"].includes(item.title)).map((item) => <article key={item.title} className="group relative min-h-64 overflow-hidden rounded-sm bg-card">
            <img src={item.image} alt={`${item.title} in Indonesia`} className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-transparent"/>
            <div className="absolute inset-x-0 bottom-0 p-6"><Leaf className="text-gold" size={18}/><h3 className="mt-3 font-display text-xl font-extrabold">{t(item.title)}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-primary-foreground/70">{t(item.description)}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section-space bg-mist">
      <div className="container-portal">
        <div className="mx-auto mb-10 max-w-2xl text-center"><p className="eyebrow text-forest">{t("The investor perspective")}</p><h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">{t("What makes a destination investment-ready?")}</h2><p className="mt-4 leading-7 text-muted-foreground">{t("A strong tourism opportunity connects destination needs with a clear, responsible path to long-term value.")}</p></div>
        <div className="grid gap-4 md:grid-cols-3">
          {investorPriorities.map(({ title, copy }, index) => <article key={title} className="border border-border bg-card p-6 shadow-soft md:p-8"><span className="font-mono text-xs font-extrabold text-forest">0{index + 1}</span><h3 className="mt-5 font-display text-xl font-extrabold">{t(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{t(copy)}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-sand">
      <div className="container-portal grid gap-8 py-14 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <div><p className="eyebrow text-forest">{t("Your next step")}</p><h2 className="mt-3 font-display text-3xl font-extrabold">{t("From interest to investment conversation")}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Share your preferred destination, sector, and partnership approach so the right team can guide your inquiry.</p></div>
        <div className="grid gap-3 sm:grid-cols-3">{[["01", "Choose a destination"], ["02", "Define your sector"], ["03", "Start a conversation"]].map(([number, label]) => <div key={number} className="rounded-sm border border-foreground/10 bg-background/70 p-5"><span className="font-mono text-xs font-bold text-forest">{number}</span><p className="mt-3 text-sm font-extrabold">{label}</p></div>)}</div>
      </div>
    </section>
  </>;
}
