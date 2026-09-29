import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Building2, Compass, Globe2, Leaf, Search, ShieldCheck, ShipWheel } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Destination } from "@/data/portal";
import { destinations } from "@/data/portal";
import { Button, ButtonLink } from "./ui";
import { useSitePreferences } from "@/lib/site-preferences";

export function SectionHeader({ label, title, copy, light = false, actions }: { label: string; title: string; copy?: string; light?: boolean; actions?: ReactNode }) {
 const { t } = useSitePreferences();
 return <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div className="max-w-3xl"><p className={`eyebrow mb-4 ${light ? "text-gold" : "text-forest"}`}>{t(label)}</p><h2 className={`font-display text-3xl font-extrabold leading-tight md:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{t(title)}</h2>{copy && <p className={`mt-5 max-w-2xl leading-7 ${light ? "text-primary-foreground/65" : "text-muted-foreground"}`}>{t(copy)}</p>}</div>{actions}</div>
}

function sendYouTubeCommand(frame: HTMLIFrameElement | null, command: "mute" | "playVideo" | "pauseVideo") {
 if (!frame?.contentWindow) return;
 frame.contentWindow.postMessage(JSON.stringify({ event: "command", func: command, args: [] }), "https://www.youtube-nocookie.com");
}

export function YouTubeScrollPlayer({ videoId, title }: { videoId: string; title: string }) {
 const frameRef = useRef<HTMLIFrameElement>(null);
 const inViewRef = useRef(false);

 useEffect(() => {
  const frame = frameRef.current;
  if (!frame) return;
  if (typeof IntersectionObserver === "undefined") return;

  const observer = new IntersectionObserver(([entry]) => {
   const inView = entry.isIntersecting && entry.intersectionRatio >= 0.35;
   if (inView === inViewRef.current) return;
   inViewRef.current = inView;
   if (inView) {
    sendYouTubeCommand(frame, "mute");
    sendYouTubeCommand(frame, "playVideo");
   } else {
    sendYouTubeCommand(frame, "pauseVideo");
   }
  }, { threshold: [0, 0.35, 0.6] });

  observer.observe(frame);
  return () => observer.disconnect();
 }, []);

 return <iframe ref={frameRef} className="absolute inset-0 size-full" src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&mute=1&playsinline=1&rel=0`} title={title} loading="lazy" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen onLoad={() => { if (inViewRef.current) { sendYouTubeCommand(frameRef.current, "mute"); sendYouTubeCommand(frameRef.current, "playVideo"); } }} />;
}

export function DestinationCard({ destination, compact = false }: { destination: Destination; compact?: boolean }) {
 const { t } = useSitePreferences();
 return <Link to="/destinations/$slug" params={{ slug: destination.slug }} className={`group relative block overflow-hidden rounded-sm bg-navy shadow-card transition duration-500 hover:-translate-y-1 ${compact ? "aspect-[4/3]" : "aspect-[4/5]"}`}>
   <img src={destination.image} alt={`${destination.name} tourism landscape`} width={1536} height={1024} loading="lazy" className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"/>
   <div className="image-shade absolute inset-0 transition group-hover:bg-overlay/35" />
   <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground md:p-8"><span className={`inline-flex rounded-sm px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[.14em] ${destination.type === "regenerative" ? "bg-accent" : "bg-gold text-navy"}`}>{t(destination.type)} {t("destination")}</span><h3 className="mt-4 font-display text-2xl font-extrabold leading-tight md:text-3xl">{destination.name}</h3><p className="mt-1 text-sm text-primary-foreground/70">{destination.region}</p><p className="mt-4 line-clamp-2 max-h-0 overflow-hidden text-sm leading-6 opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-80">{t(destination.description)}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.1em]">{t("Explore")} <ArrowRight size={15} className="transition group-hover:translate-x-1"/></span></div>
 </Link>
}

export function DestinationCarousel({ items, label }: { items: Destination[]; label: string }) {
 const [selected, setSelected] = useState(0);
 const [paused, setPaused] = useState(false);
 const [ref, api] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
 const onSelect = useCallback(() => api && setSelected(api.selectedScrollSnap()), [api]);
 useEffect(() => { if (!api) return; onSelect(); api.on("select", onSelect); return () => { api.off("select", onSelect); }; }, [api,onSelect]);
 useEffect(() => { if (!api || paused) return; const timer = window.setInterval(() => api.scrollNext(), 5500); return () => window.clearInterval(timer); }, [api,paused]);
 return <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onKeyDown={(e) => { if(e.key === "ArrowLeft") api?.scrollPrev(); if(e.key === "ArrowRight") api?.scrollNext(); }} tabIndex={0} role="region" aria-label={`${label} carousel`}>
   <div className="mb-6 flex items-center justify-end gap-3"><span className="mr-2 font-mono text-xs text-muted-foreground">{String(selected+1).padStart(2,"0")} / {String(items.length).padStart(2,"0")}</span><Button variant="icon" onClick={() => api?.scrollPrev()} aria-label={`Previous ${label}`}><ArrowLeft size={18}/></Button><Button variant="icon" onClick={() => api?.scrollNext()} aria-label={`Next ${label}`}><ArrowRight size={18}/></Button></div>
   <div className="overflow-hidden" ref={ref}><div className="flex touch-pan-y gap-5">{items.map((item) => <div key={item.slug} className="min-w-0 flex-[0_0_87%] sm:flex-[0_0_58%] lg:flex-[0_0_36%] xl:flex-[0_0_32%]"><DestinationCard destination={item}/></div>)}</div></div>
 </div>
}

const filterOptions = ["All","Regenerative","Priority","Marine","Nature","Culture","Wellness","Urban","MICE","Adventure"];
export function DestinationExplorer({ full = false }: { full?: boolean }) {
 const { t } = useSitePreferences();
 const [query,setQuery] = useState(""); const [filter,setFilter] = useState("All");
 const list = useMemo(() => destinations.filter(d => { const text = `${d.name} ${d.region} ${d.tourismThemes.join(" ")}`.toLowerCase(); const matchSearch = text.includes(query.toLowerCase()); const matchFilter = filter === "All" || d.type === filter.toLowerCase() || text.includes(filter.toLowerCase()); return matchSearch && matchFilter; }),[query,filter]);
 return <div><div className="flex flex-col gap-4 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between"><label className="relative block lg:w-80"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18}/><span className="sr-only">{t("Search destination")}</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t("Search destination...")} className="h-12 w-full rounded-sm border bg-card pl-11 pr-4 text-sm"/></label><div className="flex gap-2 overflow-x-auto pb-2">{filterOptions.map(f => <Button key={f} variant={filter === f ? "primary" : "outline"} className="min-h-9 shrink-0 px-4 py-2 text-xs" onClick={() => setFilter(f)}>{t(f)}</Button>)}</div></div><p className="mt-5 text-xs font-bold uppercase tracking-[.12em] text-muted-foreground">{list.length} {t("destinations")}</p><div className={`mt-6 grid gap-5 ${full ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4"}`}>{list.map(d => <DestinationCard key={d.slug} destination={d} compact/> )}</div></div>
}

export const whyItems = [
 [Compass,"Strategic Tourism Destinations","Diverse tourism destinations with different development characteristics."], [Globe2,"Diverse Tourism Landscape","Nature, marine, culture, wellness, gastronomy, urban, and creative opportunities."], [ShipWheel,"Strategic Connectivity","Major destinations are supported by different forms of regional and national connectivity."], [ShieldCheck,"Government Support","Tourism and investment development are supported through relevant government policies and programs."], [Leaf,"Sustainable Development","Development increasingly emphasizes quality, sustainability, resilience, and long-term value."],
] as const;

export function Newsletter() { const { t } = useSitePreferences(); return <section className="bg-sand"><div className="container-portal grid gap-8 py-14 md:grid-cols-[1fr_.8fr] md:items-center"><div><p className="eyebrow text-forest">{t("Stay informed")}</p><h2 className="mt-3 font-display text-3xl font-extrabold">{t("Tourism Investment in Indonesia")}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{t("Get the latest destination insights, tourism investment opportunities, policy updates, and strategic developments.")}</p></div><form className="flex flex-col gap-3 sm:flex-row" onSubmit={e=>e.preventDefault()}><label className="sr-only" htmlFor="newsletter">{t("Email address")}</label><input id="newsletter" type="email" required placeholder={t("Enter your email address")} className="h-12 flex-1 rounded-sm border bg-background px-4"/><Button type="submit">{t("Sign Me Up")} <ArrowRight size={16}/></Button></form></div></section> }

export function InquiryForm() { const { t } = useSitePreferences(); return <form className="grid gap-4 md:grid-cols-2" onSubmit={e=>e.preventDefault()}>{[["Full Name","text"],["Organization","text"],["Email","email"],["Phone","tel"]].map(([label,type])=><label key={label} className="grid gap-2 text-sm font-bold">{t(label)}<input type={type} required className="h-12 rounded-sm border bg-background px-4 font-normal"/></label>)}<label className="grid gap-2 text-sm font-bold">{t("Destination")}<select className="h-12 rounded-sm border bg-background px-4 font-normal"><option>{t("Choose a destination")}</option>{destinations.map(d=><option key={d.slug}>{d.name}</option>)}</select></label><label className="grid gap-2 text-sm font-bold">{t("Investment Sector")}<select className="h-12 rounded-sm border bg-background px-4 font-normal"><option>{t("Choose a sector")}</option><option>{t("Hospitality")}</option><option>{t("Marine Tourism")}</option><option>{t("Wellness")}</option><option>MICE</option><option>{t("Creative Economy")}</option></select></label><label className="grid gap-2 text-sm font-bold md:col-span-2">{t("Message")}<textarea required rows={5} className="rounded-sm border bg-background p-4 font-normal"/></label><div className="md:col-span-2"><Button type="submit">{t("Submit Inquiry")} <ArrowRight size={16}/></Button></div></form> }

export function PageHero({ label, title, copy, image }: { label:string; title:string; copy:string; image:string }) { return <section className="relative min-h-[62vh] overflow-hidden bg-navy pt-20 text-primary-foreground"><img src={image} alt="Indonesia tourism landscape" width={1536} height={1024} className="absolute inset-0 size-full object-cover opacity-60"/><div className="hero-shade absolute inset-0"/><div className="container-portal relative flex min-h-[calc(62vh-5rem)] items-end py-16"><div className="max-w-4xl"><p className="eyebrow text-gold">{label}</p><h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">{copy}</p></div></div></section> }

export function OpportunityCard({ item }: { item: {name:string;destination:string;type:string;sector:string;investmentType:string;status:string;image:string} }) { return <article className="overflow-hidden rounded-sm border bg-card"><div className="aspect-[16/10] overflow-hidden"><img src={item.image} alt="" width={1536} height={1024} loading="lazy" className="size-full object-cover transition duration-500 hover:scale-105"/></div><div className="p-6"><div className="flex justify-between gap-3"><span className="eyebrow text-forest">{item.status}</span><span className="text-xs text-muted-foreground">{item.type}</span></div><h3 className="mt-4 font-display text-xl font-bold">{item.name}</h3><p className="mt-1 text-sm text-muted-foreground">{item.destination}</p><dl className="mt-5 grid grid-cols-2 gap-3 border-t pt-5 text-xs"><div><dt className="text-muted-foreground">Sector</dt><dd className="mt-1 font-bold">{item.sector}</dd></div><div><dt className="text-muted-foreground">Investment type</dt><dd className="mt-1 font-bold">{item.investmentType}</dd></div></dl><ButtonLink to="/contact" variant="outline" className="mt-6 w-full">View Opportunity <ArrowRight size={15}/></ButtonLink></div></article> }
