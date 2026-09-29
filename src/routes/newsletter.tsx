import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, FileText, Newspaper } from "lucide-react";
import { useMemo, useState } from "react";
import { useSitePreferences } from "@/lib/site-preferences";
import { publications } from "@/data/portal";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter & Publications | Indonesia Tourism Investment" },
      { name: "description", content: "Read recent Indonesia tourism investment publications and download concise PDF briefs with links to official sources." },
    ],
  }),
  component: NewsletterPage,
});

const categories = ["All publications", "National investment", "Tourism investment data", "Destination spotlight"];

function NewsletterPage() {
  const { t } = useSitePreferences();
  const [category, setCategory] = useState("All publications");
  const filteredPublications = useMemo(() => category === "All publications" ? publications : publications.filter((item) => item.category === category), [category]);

  return <>
    <section className="relative overflow-hidden bg-mist pt-32">
      <div className="absolute -right-24 -top-28 size-[34rem] rounded-full border-[70px] border-white/60" />
      <div className="container-portal relative pb-14 md:pb-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl"><p className="eyebrow text-forest">{t("Knowledge & insight")}</p><h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight md:text-6xl">{t("Recent Publications")}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Curated updates on investment performance, tourism-sector data, and destination developmentâ€”paired with concise PDF briefs and links to the original sources.</p></div>
          <div className="flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3 text-sm font-bold shadow-soft"><Newspaper size={19} className="text-forest"/>{t("Research desk")} <span className="text-muted-foreground">Â·</span> 2026</div>
        </div>
        <div className="mt-10 h-1.5 w-full rounded-full bg-gradient-to-r from-forest via-primary to-gold" />
      </div>
    </section>

    <section className="section-space bg-background">
      <div className="container-portal">
        <div className="mb-8 flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div><p className="eyebrow text-forest">{t("Browse the library")}</p><h2 className="mt-2 font-display text-2xl font-extrabold">{t("Investment insights & updates")}</h2></div>
          <div className="flex gap-2 overflow-x-auto pb-1" aria-label="Filter publications by topic">
            {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition ${category === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground hover:border-forest hover:text-forest"}`}>{t(item)}</button>)}
          </div>
        </div>

        <div className="divide-y divide-border">
          {filteredPublications.map((publication, index) => <article key={publication.title} className="grid gap-6 py-8 first:pt-2 md:grid-cols-[190px_1fr_auto] md:items-center md:gap-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-navy md:aspect-square"><img src={publication.image} alt="" className="size-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"/><span className="absolute bottom-3 left-3 font-mono text-xs font-bold text-primary-foreground">ISSUE 0{index + 1}</span></div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2"><span className="eyebrow text-forest">{publication.category}</span><span className="size-1 rounded-full bg-gold"/><span className="text-xs font-semibold text-muted-foreground">{publication.date}</span></div>
              <h3 className="mt-3 font-display text-xl font-extrabold leading-snug text-foreground md:text-2xl">{publication.title}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{publication.excerpt}</p>
              <a href={publication.source} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-forest hover:underline">{t("Read official source")} <ArrowUpRight size={14}/></a>
            </div>
            <div className="flex flex-row gap-3 md:flex-col">
              <a href={publication.pdf} download className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-forest px-4 py-3 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-forest/90"><Download size={16}/>{t("Download PDF")}</a>
              <a href={publication.pdf} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border px-4 py-3 text-xs font-bold text-foreground transition hover:border-forest hover:text-forest"><FileText size={15}/>{t("Preview")}</a>
            </div>
          </article>)}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-sm bg-navy p-6 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-8">
          <div><p className="eyebrow text-gold">Continue your research</p><h2 className="mt-2 font-display text-xl font-extrabold">Explore original reports and open data</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-primary-foreground/65">The briefs above summarize official publications. Follow the source links for complete reports, datasets, and the latest revisions.</p></div>
          <a href="https://www.bkpm.go.id/id/info/realisasi-investasi" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-extrabold text-navy transition hover:-translate-y-0.5">See more <ArrowUpRight size={16}/></a>
        </div>
        <p className="mt-5 text-xs leading-6 text-muted-foreground">Each PDF is a short editorial brief prepared for this portal. Data and policy interpretations should be checked against the linked official source before making investment decisions.</p>
      </div>
    </section>
  </>;
}
