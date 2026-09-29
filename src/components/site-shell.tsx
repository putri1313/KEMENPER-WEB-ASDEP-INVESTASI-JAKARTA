import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Facebook, Instagram, Menu, Moon, Sun, X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, ButtonLink } from "./ui";
import { useSitePreferences } from "@/lib/site-preferences";

const links = [
  ["Home", "/"], ["Destinations", "/destinations"], ["Investment Opportunities", "/opportunities"],
  ["Regulations", "/regulations"], ["Newsletter", "/newsletter"], ["Contact Us", "/contact"],
] as const;

function TikTokIcon({ size = 18 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 7.2a5.8 5.8 0 0 1-4.1-1.7v8.2a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.5 2.5 0 1 0 1.3 2.2V2.8h3.1c.2 2 1.8 3.6 4.1 3.8v.6Z"/></svg>;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { theme, setTheme, language, setLanguage, t } = useSitePreferences();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/" && !scrolled;
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${overHero ? "border-transparent bg-transparent text-primary-foreground" : "border-b border-border bg-background/95 text-foreground shadow-soft backdrop-blur"}`}>
      <div className="container-portal flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Indonesia Tourism Investment home">
          <img src="/kemenpar-logo.png" alt="Lambang Kementerian Pariwisata Republik Indonesia" className="size-11 object-contain" />
          <span className="font-display text-sm font-extrabold leading-tight">Indonesia Tourism<br/><span className="font-medium">Investment</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label={t("Primary navigation")}>
          {links.map(([label,to]) => <Link key={to} to={to} activeProps={{ className: "opacity-100" }} className="text-xs font-bold opacity-75 transition hover:opacity-100">{t(label)}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="icon" className={`size-10 ${overHero ? "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/15" : ""}`} aria-label={theme === "light" ? t("Switch to dark mode") : t("Switch to light mode")} title={theme === "light" ? t("Switch to dark mode") : t("Switch to light mode")} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}</Button>
          <div className="relative">
            <Button variant="outline" className={`h-10 min-h-10 gap-2 px-3 text-xs ${overHero ? "border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/15" : ""}`} aria-expanded={languageOpen} aria-haspopup="menu" aria-label={t("Choose language")} onClick={() => setLanguageOpen((value) => !value)}><span aria-hidden="true">{language === "id" ? "🇮🇩" : "🇬🇧"}</span><span>{language.toUpperCase()}</span><span aria-hidden="true">⌄</span></Button>
            {languageOpen && <div role="menu" className="absolute right-0 top-[calc(100%+.65rem)] z-[60] w-56 rounded-xl border border-border bg-card p-2 text-card-foreground shadow-card">
              {([["id", "🇮🇩", "Indonesia", "Bahasa Indonesia"], ["en", "🇬🇧", "English", "United Kingdom"]] as const).map(([code, flag, label, native]) => <button key={code} type="button" role="menuitemradio" aria-checked={language === code} onClick={() => { setLanguage(code); setLanguageOpen(false); }} className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition hover:bg-muted ${language === code ? "bg-muted" : ""}`}><span className="text-xl" aria-hidden="true">{flag}</span><span className="grid"><span className="text-sm font-bold">{label}</span><span className="text-xs text-muted-foreground">{native}</span></span>{language === code && <span className="ml-auto text-xs font-bold text-forest">✓</span>}</button>)}
            </div>}
          </div>
          <div className="hidden lg:block"><ButtonLink to="/opportunities" variant={overHero ? "gold" : "primary"}>{t("Explore Opportunities")} <ArrowRight size={16}/></ButtonLink></div>
          <Button variant="icon" className={`lg:hidden ${overHero ? "border-primary-foreground/40 bg-transparent text-primary-foreground" : ""}`} aria-label={open ? t("Close menu") : t("Open menu")} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
        </div>
      </div>
      {open && <div className="border-t border-border bg-background p-6 text-foreground lg:hidden"><nav className="container-portal flex flex-col gap-1">{links.map(([label,to]) => <Link key={to} to={to} className="border-b border-border py-4 text-base font-bold">{t(label)}</Link>)}<ButtonLink to="/opportunities" className="mt-5">{t("Explore Opportunities")} <ArrowRight size={16}/></ButtonLink></nav></div>}
    </header>
  );
}

export function Footer() {
  const { t } = useSitePreferences();
  const socialLinks = [
    { label: "Facebook", href: "https://web.facebook.com/KemenPariwisata", Icon: Facebook },
    { label: "YouTube", href: "https://www.youtube.com/@KemenPariwisata", Icon: Youtube },
    { label: "X", href: "https://x.com/KemenPariwisata", Icon: X },
    { label: "Instagram", href: "https://www.instagram.com/kemenpar.ri?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==", Icon: Instagram },
    { label: "TikTok", href: "https://www.tiktok.com/@kemenpariwisata", Icon: TikTokIcon },
  ];
  return <footer className="bg-navy text-primary-foreground">
    <div className="container-portal grid gap-12 py-16 md:grid-cols-[1.5fr_1fr]">
      <div><div className="flex items-center gap-4"><img src="/kemenpar-logo.png" alt="Lambang Kementerian Pariwisata Republik Indonesia" className="size-14 object-contain"/><p className="font-display text-lg font-extrabold leading-snug">{t("Ministry of Tourism")}<br/>{t("Republic of Indonesia")}</p></div><div className="mt-5 grid max-w-lg gap-3 text-sm leading-6 text-primary-foreground/75"><p>Jl. Medan Merdeka Barat No. 17, RT/RW 02/03, Gambir, Daerah Khusus Ibukota Jakarta 10110, Indonesia.</p><p>{t("WhatsApp Contact Center")}: <a className="hover:text-primary-foreground" href="https://wa.me/628118956767">0811-895-6767</a></p><p>{t("Email")}: <a className="hover:text-primary-foreground" href="mailto:info@kemenpar.go.id">info@kemenpar.go.id</a></p></div><div className="mt-7 flex flex-wrap gap-3">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label} className="grid size-10 place-items-center rounded-md border border-gold/60 text-gold transition hover:bg-gold hover:text-navy"><Icon size={18}/></a>)}</div></div>
      <div><p className="eyebrow text-gold">{t("Navigate")}</p><div className="mt-5 grid gap-3">{links.map(([label,to]) => <Link key={to} to={to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground">{t(label)}</Link>)}</div></div>
    </div>
    <div className="border-t border-primary-foreground/15"><div className="container-portal flex flex-col gap-3 py-6 text-xs text-primary-foreground/55 md:flex-row md:justify-between"><p>© 2026 {t("Indonesia Tourism Investment")}</p><p>{t("Official information should be verified through the relevant government authorities and official publications.")}</p></div></div>
  </footer>;
}
