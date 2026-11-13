import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Leaf, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { InvestmentProfileSections } from "@/components/investment-profile-sections";
import { SectionHeader } from "@/components/portal-components";
import { useSitePreferences } from "@/lib/site-preferences";
import { getLocalizedContent } from "@/lib/localized-content";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import investmentMap from "@/assets/indonesia-investment-map.png";
import marine from "@/assets/indonesia-marine.jpg";
import {
  priorityOpportunityProfiles,
  sezOpportunityProfiles,
  tourismInvestmentSnapshot,
  type BilingualCopy,
  type InvestmentOpportunityProfile,
} from "@/data/investment-opportunity-profiles";
import { destinations, themes, type Destination } from "@/data/portal";
import { investmentThemeDetails } from "@/data/investment-theme-details";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Tourism Investment Opportunities | Invest in Wonderful Indonesia!" },
      {
        name: "description",
        content:
          "Tourism investment data and destination profiles from the May 2025 investment opportunities brief.",
      },
    ],
  }),
  component: OpportunitiesPage,
});

const profiles = [...priorityOpportunityProfiles, ...sezOpportunityProfiles];
type ProjectType = "Marine" | "Wellness" | "Gastronomy";
type InvestmentSize = "small" | "medium" | "upper-medium" | "large" | "major";

const investmentSizeRanges: {
  value: InvestmentSize;
  en: string;
  id: string;
}[] = [
  {
    value: "small",
    en: "Small-scale, below IDR 10 billion",
    id: "Skala kecil, di bawah IDR 10 miliar",
  },
  {
    value: "medium",
    en: "Medium-scale, IDR 10–50 billion",
    id: "Skala menengah, IDR 10–50 miliar",
  },
  {
    value: "upper-medium",
    en: "Upper-medium, above IDR 50–100 billion",
    id: "Menengah atas, di atas IDR 50–100 miliar",
  },
  {
    value: "large",
    en: "Large-scale, above IDR 100–500 billion",
    id: "Skala besar, di atas IDR 100–500 miliar",
  },
  {
    value: "major",
    en: "Major development, above IDR 500 billion",
    id: "Pengembangan utama, di atas IDR 500 miliar",
  },
];

function isProjectType(value: string): value is ProjectType {
  return value === "Marine" || value === "Wellness" || value === "Gastronomy";
}

function isInvestmentSize(value: string): value is InvestmentSize {
  return investmentSizeRanges.some((range) => range.value === value);
}

const usdToIdrRate = 16_000;

function getInvestmentSize(value: string): InvestmentSize {
  const match = /^(IDR|USD)\s*([\d,.]+)\s*(million|billion|trillion)\b/i.exec(value);
  if (!match) {
    throw new Error(`Unable to determine investment size from value: "${value}"`);
  }

  const [, currency, amountText, unit] = match;
  const amount = Number(amountText.replaceAll(",", ""));
  const multipliers: Record<string, number> = {
    million: 1_000_000,
    billion: 1_000_000_000,
    trillion: 1_000_000_000_000,
  };
  const multiplier = multipliers[unit.toLowerCase()];
  if (!Number.isFinite(amount) || multiplier === undefined) {
    throw new Error(`Invalid investment value: "${value}"`);
  }
  const valueInIdr = amount * multiplier * (currency.toUpperCase() === "USD" ? usdToIdrRate : 1);

  if (valueInIdr < 10_000_000_000) return "small";
  if (valueInIdr <= 50_000_000_000) return "medium";
  if (valueInIdr <= 100_000_000_000) return "upper-medium";
  if (valueInIdr <= 500_000_000_000) return "large";
  return "major";
}

const tourismSezIndex = [
  {
    profileSlug: "nongsa-sez",
    image: marine,
    projectTypes: ["Marine", "Wellness"],
  },
  {
    profileSlug: "tanjung-kelayang-sez",
    image: marine,
    projectTypes: ["Marine", "Gastronomy"],
  },
  {
    profileSlug: "tanjung-lesung-sez",
    image: aerial,
    projectTypes: ["Marine", "Gastronomy"],
  },
  {
    profileSlug: "lido-sez",
    image: aerial,
    projectTypes: ["Gastronomy"],
  },
  {
    profileSlug: "singhasari-sez",
    image: culture,
    projectTypes: ["Gastronomy"],
  },
  {
    profileSlug: "sanur-sez",
    image: marine,
    projectTypes: ["Wellness"],
  },
  {
    profileSlug: "kura-kura-sez",
    image: aerial,
    projectTypes: ["Marine", "Wellness"],
  },
  {
    profileSlug: "lombok-gili-tramena",
    image: aerial,
    projectTypes: ["Marine", "Wellness"],
  },
  {
    profileSlug: "manado-likupang",
    image: marine,
    projectTypes: ["Marine"],
  },
  {
    profileSlug: "morotai-sez",
    image: marine,
    projectTypes: ["Marine", "Gastronomy"],
  },
];

function requireDestination(slug: string): Destination {
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) throw new Error(`Missing tourism authority destination: ${slug}`);
  return destination;
}

function requireInvestmentProfile(slug: string): InvestmentOpportunityProfile {
  const profile = profiles.find((item) => item.slug === slug);
  if (!profile) throw new Error(`Missing PDF investment profile: ${slug}`);
  return profile;
}

const tourismAuthorityProfiles = [
  {
    destination: requireDestination("danau-toba"),
    name: { en: "Lake Toba", id: "Danau Toba" },
    profiles: [requireInvestmentProfile("danau-toba")],
  },
  {
    destination: requireDestination("borobudur-yogyakarta-prambanan"),
    name: { en: "Borobudur", id: "Borobudur" },
    profiles: [requireInvestmentProfile("borobudur-yogyakarta-prambanan")],
  },
  {
    destination: requireDestination("labuan-bajo"),
    name: { en: "Labuan Bajo", id: "Labuan Bajo" },
    profiles: [requireInvestmentProfile("labuan-bajo")],
  },
];

function localized(copy: BilingualCopy, id: boolean) {
  return id ? copy.id : copy.en;
}

function InvestmentTrend() {
  const { language } = useSitePreferences();
  const id = language === "id";
  const chartRef = useRef<HTMLDivElement>(null);
  const [chartVisible, setChartVisible] = useState(false);
  const max = Math.max(...tourismInvestmentSnapshot.annualTrend.map((item) => item.total));

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    if (!("IntersectionObserver" in window)) {
      setChartVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setChartVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(chart);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-10 border-y border-border py-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow text-forest">{id ? "Realisasi tahunan" : "Annual realization"}</p>
          <h3 className="mt-2 font-display text-xl font-bold">
            {id ? "Investasi pariwisata 2013–2024" : "Tourism investment, 2013–2024"}
          </h3>
        </div>
        <p className="text-xs text-muted-foreground">
          {id ? "IDR triliun · PMA + PMDN" : "IDR trillion · foreign + domestic"}
        </p>
      </div>
      <div ref={chartRef} className="mt-7 overflow-x-auto pb-2">
        <div className="flex min-w-[720px] items-end gap-3 border-b border-border px-2">
          {tourismInvestmentSnapshot.annualTrend.map((year, index) => (
            <div className="group/year flex min-w-10 flex-1 flex-col items-center" key={year.year}>
              <span className="mb-2 text-[10px] tabular-nums text-muted-foreground transition-colors group-hover/year:text-forest">
                {year.total.toFixed(2)}
              </span>
              <div className="flex h-36 w-full items-end justify-center gap-1">
                <div
                  className="w-3 origin-bottom rounded-t-sm bg-gold transition-[height,transform,filter] duration-700 ease-out hover:z-10 hover:scale-x-125 hover:brightness-110 motion-reduce:transition-none"
                  style={{
                    height: chartVisible ? `${Math.max(3, (year.foreign / max) * 100)}%` : "0%",
                    transitionDelay: `${Math.min(index * 60, 660)}ms`,
                  }}
                  title={`${id ? "Investasi asing" : "Foreign investment"}: ${year.foreign.toFixed(2)} IDR ${id ? "triliun" : "trillion"}`}
                  aria-label={`${year.year} ${id ? "investasi asing" : "foreign investment"}: ${year.foreign.toFixed(2)}`}
                />
                <div
                  className="w-3 origin-bottom rounded-t-sm bg-forest transition-[height,transform,filter] duration-700 ease-out hover:z-10 hover:scale-x-125 hover:brightness-110 motion-reduce:transition-none"
                  style={{
                    height: chartVisible ? `${Math.max(3, (year.domestic / max) * 100)}%` : "0%",
                    transitionDelay: `${Math.min(index * 60 + 90, 750)}ms`,
                  }}
                  title={`${id ? "Investasi domestik" : "Domestic investment"}: ${year.domestic.toFixed(2)} IDR ${id ? "triliun" : "trillion"}`}
                  aria-label={`${year.year} ${id ? "investasi domestik" : "domestic investment"}: ${year.domestic.toFixed(2)}`}
                />
              </div>
              <span className="py-2 text-[10px] font-semibold text-muted-foreground transition-colors group-hover/year:text-forest">
                {year.year}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-5 text-xs font-semibold text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <i className="size-2.5 bg-gold" />
          {id ? "Investasi asing" : "Foreign investment"}
        </span>
        <span className="inline-flex items-center gap-2">
          <i className="size-2.5 bg-forest" />
          {id ? "Investasi domestik" : "Domestic investment"}
        </span>
      </div>
    </div>
  );
}

function InvestmentSnapshot() {
  const { language } = useSitePreferences();
  const id = language === "id";

  return (
    <section id="investment-snapshot" className="section-space bg-mist scroll-mt-20">
      <div className="container-portal">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <div>
            <p className="eyebrow text-forest">
              {id ? "Data dalam dokumen" : "Book snapshot"} · 2024
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
              {id ? "Realisasi investasi pariwisata" : "Tourism investment realization"}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
              {id
                ? "Capaian tahunan melampaui target dokumen dan didominasi penanaman modal dalam negeri."
                : "Annual realization exceeded the target cited in the book, led by domestic investment."}
            </p>
            <p className="mt-8 font-display text-5xl font-extrabold text-forest md:text-6xl">
              IDR 47.13T
            </p>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">
              {id ? "Realisasi 2024 · sektor pariwisata" : "2024 realization · tourism sector"}
            </p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {[
              [id ? "Target 2024" : "2024 target", "IDR 45T"],
              [id ? "Pencapaian target" : "Target achievement", "104.67%"],
              [id ? "Pertumbuhan tahunan" : "Year-on-year growth", "+3.92%"],
              [id ? "Lapangan kerja" : "Jobs created", "109,815 · +30.8%"],
              [id ? "Investasi domestik" : "Domestic investment", "IDR 29.69T · 62.96%"],
              [id ? "Investasi asing" : "Foreign investment", "IDR 17.45T · 37.03%"],
            ].map(([label, value]) => (
              <div className="border-t border-border py-4" key={label}>
                <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                <p className="mt-2 font-display text-xl font-bold tabular-nums">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <InvestmentTrend />

        <div className="mt-8 grid gap-5 border-t border-border pt-5 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold text-muted-foreground">
              {id ? "CAGR PMDN 2013–2024" : "Domestic investment CAGR, 2013–2024"}
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">27.21%</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground">
              {id ? "CAGR PMA 2013–2024" : "Foreign investment CAGR, 2013–2024"}
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">8.75%</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground">
              {id ? "CAGR total 2013–2024" : "Total investment CAGR, 2013–2024"}
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">16.20%</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-forest">{id ? "Sektor usaha" : "Business sectors"}</p>
            <h3 className="mt-3 font-display text-xl font-bold">
              {id ? "Sektor utama dalam realisasi" : "Leading sectors in realization"}
            </h3>
            <ol className="mt-4 divide-y divide-border border-y border-border">
              {tourismInvestmentSnapshot.sectors.map((sector, index) => (
                <li className="flex gap-3 py-3 text-sm" key={sector}>
                  <span className="font-mono text-xs font-bold text-forest">0{index + 1}</span>
                  {sector}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">
              {id
                ? "Draf menyebut hotel berbintang (IDR 24,61T) dan restoran (IDR 8,02T) sebagai dua sektor terbesar."
                : "The brief identifies starred hotels (IDR 24.61T) and restaurants (IDR 8.02T) as the two largest sectors."}
            </p>
          </div>
          <div>
            <p className="eyebrow text-forest">{id ? "Asal PMA" : "Foreign investment origins"}</p>
            <h3 className="mt-3 font-display text-xl font-bold">
              {id ? "Negara asal utama" : "Top investor countries"}
            </h3>
            <ol className="mt-4 divide-y divide-border border-y border-border">
              {tourismInvestmentSnapshot.foreignInvestorCountries.map((country, index) => (
                <li className="flex gap-3 py-3 text-sm" key={country}>
                  <span className="font-mono text-xs font-bold text-forest">0{index + 1}</span>
                  {country}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow text-forest">
              {id ? "Tujuan investasi" : "Investment destinations"}
            </p>
            <h3 className="mt-3 font-display text-xl font-bold">
              {id ? "Realisasi tertinggi" : "Highest realization"}
            </h3>
            <ol className="mt-4 divide-y divide-border border-y border-border">
              {tourismInvestmentSnapshot.destinations.map(([name, value], index) => (
                <li className="flex items-center justify-between gap-3 py-3 text-sm" key={name}>
                  <span className="flex gap-3">
                    <span className="font-mono text-xs font-bold text-forest">0{index + 1}</span>
                    {name}
                  </span>
                  <strong className="shrink-0 text-xs tabular-nums">{value}</strong>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
          {id
            ? "Sumber: Final Draft Summary of Investment Opportunities Book, Mei 2025; data investasi adalah realisasi tahun 2024. Angka dan kebijakan merupakan cuplikan dokumen, bukan data waktu nyata."
            : "Source: Final Draft Summary of Investment Opportunities Book, May 2025; investment figures refer to 2024 realization. Statistics and policies are a document snapshot, not live data."}
        </p>
      </div>
    </section>
  );
}

function OpportunitiesPage() {
  const { language, t } = useSitePreferences();
  const id = language === "id";
  const [selectedSezSlug, setSelectedSezSlug] = useState<string | null>(null);
  const [selectedAuthoritySlug, setSelectedAuthoritySlug] = useState<string | null>(null);
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType | "all">("all");
  const [selectedInvestmentSize, setSelectedInvestmentSize] = useState<InvestmentSize | "all">(
    "all",
  );
  const [selectedThemeKey, setSelectedThemeKey] = useState<
    keyof typeof investmentThemeDetails | null
  >(null);
  const [selectedThemeProfileSlug, setSelectedThemeProfileSlug] = useState<string | null>(null);
  const selectedDetailsRef = useRef<HTMLDivElement>(null);
  const authorityDialogRef = useRef<HTMLDialogElement>(null);
  const authorityCloseRef = useRef<HTMLButtonElement>(null);
  const themeDialogRef = useRef<HTMLDialogElement>(null);
  const themeCloseRef = useRef<HTMLButtonElement>(null);
  const selectedSezProfile = profiles.find((profile) => profile.slug === selectedSezSlug);
  const selectedAuthorityProfile = tourismAuthorityProfiles.find(
    ({ destination }) => destination.slug === selectedAuthoritySlug,
  );
  const selectedTheme = themes.find((theme) => theme.title.en === selectedThemeKey);
  const selectedThemeDetail = selectedThemeKey ? investmentThemeDetails[selectedThemeKey] : null;
  const selectedThemeProfile = profiles.find(
    (profile) => profile.slug === selectedThemeProfileSlug,
  );
  const relatedThemeProfiles = selectedThemeDetail
    ? selectedThemeDetail.profileSlugs
        .map((slug) => profiles.find((profile) => profile.slug === slug))
        .filter((profile): profile is InvestmentOpportunityProfile => Boolean(profile))
    : [];
  const filteredTourismSez = tourismSezIndex.filter((zone) => {
    const profile = profiles.find((item) => item.slug === zone.profileSlug);
    if (!profile) return false;
    return (
      (selectedProjectType === "all" || zone.projectTypes.includes(selectedProjectType)) &&
      (selectedInvestmentSize === "all" ||
        getInvestmentSize(profile.value) === selectedInvestmentSize)
    );
  });
  const visibleSelectedSezProfile = filteredTourismSez.some(
    (zone) => zone.profileSlug === selectedSezProfile?.slug,
  )
    ? selectedSezProfile
    : undefined;

  useEffect(() => {
    const dialog = themeDialogRef.current;
    if (!dialog) return;
    if (selectedThemeKey && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => themeCloseRef.current?.focus());
    } else if (!selectedThemeKey && dialog.open) {
      dialog.close();
    }
  }, [selectedThemeKey]);

  useEffect(() => {
    if (!selectedSezSlug) return;
    selectedDetailsRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }, [selectedSezSlug]);

  useEffect(() => {
    const dialog = authorityDialogRef.current;
    if (!dialog) return;
    if (selectedAuthoritySlug && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => authorityCloseRef.current?.focus());
    } else if (!selectedAuthoritySlug && dialog.open) {
      dialog.close();
    }
  }, [selectedAuthoritySlug]);
  return (
    <>
      <section className="relative flex min-h-[62vh] items-center overflow-hidden bg-navy pt-20 text-primary-foreground">
        <img
          src={marine}
          alt={t("Coastal tourism landscape in Indonesia")}
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/35" />
        <div className="container-portal relative py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">{t("Indonesia · Tourism investment")}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-7xl">
              {t("Tourism Investment Opportunities")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">
              {id
                ? "Jelajahi data realisasi investasi, proyek prioritas, dan peluang kawasan ekonomi khusus pariwisata."
                : "Explore investment realization data, priority projects, and tourism special economic zone opportunities."}
            </p>
          </div>
          <a
            href="#investment-snapshot"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/80 transition hover:text-primary-foreground"
          >
            {id ? "Lihat ringkasan investasi" : "View investment snapshot"}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal">
          <div className="destination-map-feature">
            <div className="destination-map-feature__intro">
              <p className="eyebrow text-forest">{t("Priority tourism destinations")}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
                {t("Priority Tourism Destinations & Tourism Special Economic Zone")}
              </h2>
              <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-foreground/70">
                <span className="destination-map-feature__badge">
                  {t("Priority Tourism Destinations")}
                </span>
                <span className="destination-map-feature__badge">
                  {t("Tourism Special Economic Zone")}
                </span>
              </div>
            </div>
            <div className="destination-map-feature__visual">
              <div className="destination-map-feature__glow" aria-hidden="true" />
              <img
                src={investmentMap}
                alt={t("Map of Indonesia tourism special economic zones")}
                width={1365}
                height={768}
                className="destination-map-feature__image"
              />
              <span className="destination-map-feature__caption">
                {t("Indonesia tourism investment landscape")}
              </span>
            </div>
          </div>
          <div className="mt-6 grid gap-4 border border-border bg-background p-4 sm:grid-cols-2 md:p-5">
            <label className="grid gap-2 text-sm font-bold">
              {id ? "Jenis Proyek" : "Project Type"}
              <select
                className="h-11 border border-border bg-background px-3 text-sm font-normal"
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  if (value === "all" || isProjectType(value)) {
                    setSelectedProjectType(value);
                    setSelectedSezSlug(null);
                    setSelectedAuthoritySlug(null);
                  }
                }}
                value={selectedProjectType}
              >
                <option value="all">{id ? "Semua jenis proyek" : "All project types"}</option>
                {(["Marine", "Wellness", "Gastronomy"] as const).map((projectType) => (
                  <option key={projectType} value={projectType}>
                    {projectType}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold">
              {id ? "Ukuran Investasi" : "Investment Size"}
              <select
                className="h-11 border border-border bg-background px-3 text-sm font-normal"
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  if (value === "all" || isInvestmentSize(value)) {
                    setSelectedInvestmentSize(value);
                    setSelectedSezSlug(null);
                    setSelectedAuthoritySlug(null);
                  }
                }}
                value={selectedInvestmentSize}
              >
                <option value="all">
                  {id ? "Semua ukuran investasi" : "All investment sizes"}
                </option>
                {investmentSizeRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {id ? range.id : range.en}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section id="tourism-sez-showcase" className="bg-mist section-space scroll-mt-20">
        <div className="container-portal">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow text-forest">
              {id ? "Profil proyek unggulan" : "Flagship project profiles"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {id ? "Profil Proyek Unggulan" : "Flagship Projects Profiles"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {id
                ? "Jelajahi profil otorita pariwisata dan kawasan ekonomi khusus."
                : "Explore tourism authority and special economic zone profiles."}
            </p>
          </div>
          <div className="mb-8 border border-border bg-background p-5">
            <p className="font-display text-xl font-extrabold">
              {id ? "3 Otorita Pariwisata" : "3 Tourism Authority"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {tourismAuthorityProfiles.length} / {tourismAuthorityProfiles.length}{" "}
              {id ? "otorita pariwisata" : "tourism authorities"}
            </p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tourismAuthorityProfiles.map(
                ({ destination, name: authorityName, profiles: relatedProfiles }) => {
                  const isSelected = selectedAuthoritySlug === destination.slug;
                  const name = localized(authorityName, id);
                  const focusAreas = relatedProfiles.map((profile) =>
                    localized(profile.focus, id),
                  );

                  return (
                  <article
                    className={`group overflow-hidden border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-soft motion-reduce:transform-none ${isSelected ? "border-forest shadow-soft" : "border-border"}`}
                    key={destination.slug}
                  >
                    <button
                      aria-controls={isSelected ? "authority-profile-dialog" : undefined}
                      aria-expanded={isSelected}
                      aria-label={`${isSelected ? (id ? "Tutup profil" : "Close profile") : id ? "Buka profil" : "Open profile"}: ${name}`}
                      className="block w-full text-left focus-visible:outline-offset-[-4px]"
                      onClick={() => {
                        setSelectedAuthoritySlug(isSelected ? null : destination.slug);
                        setSelectedSezSlug(null);
                      }}
                      type="button"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          alt=""
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          src={destination.image}
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-flex border border-border px-2 py-1 text-[10px] font-extrabold uppercase tracking-wider">
                          {id ? "Badan Otorita Pariwisata" : "Tourism Authority Board"}
                        </span>
                        <h4 className="mt-3 font-display text-xl font-extrabold">{name}</h4>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {localized(relatedProfiles[0].region, id)}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {focusAreas.map((focusArea) => (
                            <span
                              className="border border-border px-2 py-1 text-[10px] font-bold"
                              key={focusArea}
                            >
                              {focusArea}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                          <span className="text-xs font-semibold text-muted-foreground">
                            {id ? "Badan Otorita Pariwisata" : "Tourism Authority Board"}
                          </span>
                          <span className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-forest">
                            {isSelected
                              ? id
                                ? "Tutup profil"
                                : "Close profile"
                              : id
                                ? "Buka profil"
                                : "View profile"}
                            <ArrowRight
                              className={`transition-transform duration-300 ${isSelected ? "rotate-90" : "group-hover:translate-x-1"}`}
                              size={15}
                            />
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                  );
                },
              )}
            </div>
          </div>
          <h3 className="mb-4 font-display text-xl font-extrabold md:text-2xl">
            {id ? "10 Kawasan Ekonomi Khusus Pariwisata" : "10 Special Economic Zone"}
          </h3>
          {filteredTourismSez.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {filteredTourismSez.map((zone) => {
                const profile = profiles.find((item) => item.slug === zone.profileSlug);
                if (!profile) return null;
                const isSelected = selectedSezSlug === profile.slug;
                const name = localized(profile.name, id);
                return (
                  <article
                    className={`group overflow-hidden border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-soft motion-reduce:transform-none ${isSelected ? "border-forest shadow-soft" : "border-border"}`}
                    key={profile.slug}
                  >
                    <button
                      aria-controls={isSelected ? `sez-${profile.slug}-details` : undefined}
                      aria-expanded={isSelected}
                      aria-label={`${id ? "Buka rincian" : "Open details"}: ${name}`}
                      className="block w-full text-left focus-visible:outline-offset-[-4px]"
                      onClick={() => setSelectedSezSlug(isSelected ? null : profile.slug)}
                      type="button"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          alt=""
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          src={zone.image}
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-base font-extrabold leading-tight">
                              {name}
                            </h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {localized(profile.region, id)} · {profile.area}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {zone.projectTypes.map((projectType) => (
                                <span
                                  className="border border-border px-2 py-1 text-[10px] font-bold"
                                  key={projectType}
                                >
                                  {projectType}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                          <span>
                            <span className="block text-xs font-bold tabular-nums">
                              {profile.value}
                            </span>
                            <span className="mt-1 block text-[10px] text-muted-foreground">
                              {id ? "Ukuran: " : "Size: "}
                              {
                                investmentSizeRanges.find(
                                  (range) => range.value === getInvestmentSize(profile.value),
                                )?.[id ? "id" : "en"]
                              }
                            </span>
                          </span>
                          <span className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-forest">
                            {isSelected
                              ? id
                                ? "Tutup rincian"
                                : "Close details"
                              : id
                                ? "Buka rincian"
                                : "Open details"}
                            <ArrowRight
                              className={`transition-transform duration-300 ${isSelected ? "rotate-90" : "group-hover:translate-x-1"}`}
                              size={15}
                            />
                          </span>
                        </div>
                      </div>
                    </button>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="border border-border bg-background p-6 text-sm text-muted-foreground">
              {id
                ? "Tidak ada peluang yang cocok dengan filter ini."
                : "No opportunities match these filters."}
            </p>
          )}

          {visibleSelectedSezProfile && (
            <div
              className="mt-8 scroll-mt-24 overflow-hidden border border-border bg-background reveal"
              id={`sez-${visibleSelectedSezProfile.slug}-details`}
              ref={selectedDetailsRef}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-8">
                <div>
                  <p className="eyebrow text-forest">{id ? "Rincian KEK" : "SEZ details"}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold md:text-2xl">
                    {localized(visibleSelectedSezProfile.name, id)}
                  </h3>
                </div>
                <button
                  aria-label={id ? "Tutup rincian" : "Close details"}
                  className="grid size-10 shrink-0 place-items-center border border-border transition hover:bg-muted"
                  onClick={() => setSelectedSezSlug(null)}
                  type="button"
                >
                  <X size={17} />
                </button>
              </div>
              <InvestmentProfileSections profile={visibleSelectedSezProfile} />
            </div>
          )}
        </div>
      </section>

      <section className="section-space bg-navy text-primary-foreground">
        <div className="container-portal">
          <SectionHeader
            light
            label="Thematic opportunities"
            title="Explore Tourism Investment Themes"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme) => (
              <article
                key={theme.title.en}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img
                  src={theme.image}
                  alt=""
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="image-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <Leaf size={20} className="text-gold" />
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {getLocalizedContent(theme.title, language)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/65">
                    {getLocalizedContent(theme.description, language)}
                  </p>
                  <button
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold transition-colors hover:text-gold"
                    onClick={() => {
                      setSelectedThemeProfileSlug(null);
                      setSelectedThemeKey(theme.title.en as keyof typeof investmentThemeDetails);
                    }}
                    type="button"
                  >
                    {t("Explore")} <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <dialog
        aria-labelledby="authority-profile-dialog-title"
        className="m-auto max-h-[88dvh] w-[min(94vw,76rem)] max-w-none overflow-y-auto border-0 bg-background p-0 text-foreground shadow-2xl backdrop:bg-navy/75"
        id="authority-profile-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedAuthoritySlug(null);
        }}
        onClose={() => setSelectedAuthoritySlug(null)}
        ref={authorityDialogRef}
      >
        {selectedAuthorityProfile && (
          <>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-5 border-b border-border bg-background px-5 py-4 sm:px-7 md:px-8">
              <div>
                <p className="eyebrow text-forest">
                  {id ? "Profil otorita pariwisata" : "Tourism Authority profile"}
                </p>
                <h2
                  className="mt-1 font-display text-2xl font-extrabold sm:text-3xl"
                  id="authority-profile-dialog-title"
                >
                  {localized(selectedAuthorityProfile.name, id)}
                </h2>
              </div>
              <button
                aria-label={id ? "Tutup profil otorita" : "Close authority profile"}
                className="grid size-10 shrink-0 place-items-center border border-border transition hover:bg-muted"
                onClick={() => setSelectedAuthoritySlug(null)}
                ref={authorityCloseRef}
                type="button"
              >
                <X size={17} />
              </button>
            </div>
            <div className="border-b border-border bg-mist px-5 py-4 sm:px-7 md:px-8">
              <p className="text-sm leading-6 text-muted-foreground">
                {id
                  ? "Rincian berikut berasal dari profil proyek dalam PDF. Nilai investasi, pengembang, dan luas merupakan data proyek, bukan angka gabungan otorita."
                  : "The following details come from project profiles in the PDF. Investment values, developers, and areas are project-specific, not authority-wide totals."}
              </p>
            </div>
            {selectedAuthorityProfile.profiles.map((profile) => (
              <div className="border-b border-border last:border-b-0" key={profile.slug}>
                <InvestmentProfileSections profile={profile} showArrivals={false} />
              </div>
            ))}
          </>
        )}
      </dialog>

      <dialog
        aria-labelledby="investment-theme-dialog-title"
        className="m-auto max-h-[88dvh] w-[min(92vw,46rem)] max-w-none overflow-y-auto border-0 bg-background p-0 text-foreground shadow-2xl backdrop:bg-navy/75"
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedThemeKey(null);
        }}
        onClose={() => {
          setSelectedThemeKey(null);
          setSelectedThemeProfileSlug(null);
        }}
        ref={themeDialogRef}
      >
        {selectedTheme && selectedThemeDetail && (
          <div className="p-5 sm:p-7 md:p-8">
            <div className="flex items-start justify-between gap-5">
              <div>
                {selectedThemeProfile && (
                  <button
                    className="mb-3 inline-flex items-center gap-2 text-xs font-bold text-forest hover:underline"
                    onClick={() => setSelectedThemeProfileSlug(null)}
                    type="button"
                  >
                    <ArrowLeft size={14} />
                    {id ? "Kembali ke tema" : "Back to theme"}
                  </button>
                )}
                <p className="eyebrow text-forest">
                  {selectedThemeProfile
                    ? id
                      ? "Profil proyek dalam draf"
                      : "Draft project profile"
                    : id
                      ? "Peluang dalam buku investasi"
                      : "Investment book opportunity"}
                </p>
                <h2
                  className="mt-2 font-display text-2xl font-extrabold leading-tight sm:text-3xl"
                  id="investment-theme-dialog-title"
                >
                  {selectedThemeProfile
                    ? localized(selectedThemeProfile.name, id)
                    : getLocalizedContent(selectedTheme.title, language)}
                </h2>
              </div>
              <button
                aria-label={id ? "Tutup" : "Close"}
                className="grid size-10 shrink-0 place-items-center border border-border transition hover:bg-muted"
                onClick={() => setSelectedThemeKey(null)}
                ref={themeCloseRef}
                type="button"
              >
                <X size={17} />
              </button>
            </div>

            {selectedThemeProfile ? (
              <>
                <p className="mt-3 text-xs font-semibold text-muted-foreground">
                  {localized(selectedThemeProfile.region, id)} · {selectedThemeProfile.area}
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="border border-border p-4">
                    <p className="eyebrow text-forest">{id ? "Nilai dalam draf" : "Draft value"}</p>
                    <p className="mt-2 font-display text-lg font-extrabold">
                      {selectedThemeProfile.value}
                    </p>
                  </div>
                  <div className="border border-border p-4">
                    <p className="eyebrow text-forest">{id ? "Fokus" : "Focus"}</p>
                    <p className="mt-2 text-sm font-bold">
                      {localized(selectedThemeProfile.focus, id)}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {localized(selectedThemeProfile.overview, id)}
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="eyebrow text-forest">
                    {id ? "Contoh peluang proyek" : "Project opportunity examples"}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {selectedThemeProfile.opportunities.slice(0, 4).map((item) => (
                      <li
                        className="border border-border bg-mist px-3 py-2 text-xs font-semibold"
                        key={item.en}
                      >
                        {localized(item, id)}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {getLocalizedContent(selectedThemeDetail.insight, language)}
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <p className="eyebrow text-forest">
                    {id ? "Profil kawasan terkait" : "Related destination profiles"}
                  </p>
                  <div className="mt-3 divide-y divide-border border-y border-border">
                    {relatedThemeProfiles.map((profile) => (
                      <button
                        className="flex w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-forest"
                        key={profile.slug}
                        onClick={() => setSelectedThemeProfileSlug(profile.slug)}
                        type="button"
                      >
                        <span className="min-w-0">
                          <span className="block font-display text-sm font-extrabold">
                            {localized(profile.name, id)}
                          </span>
                          <span className="mt-1 block text-xs text-muted-foreground">
                            {localized(profile.region, id)}
                          </span>
                        </span>
                        <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-forest">
                          {id ? "Lihat ringkasan" : "View summary"}
                          <ArrowRight size={14} />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
            <p className="mt-4 text-[11px] leading-5 text-muted-foreground">
              {id
                ? "Sumber: Final Draft Summary of Investment Opportunities Book, Mei 2025. Angka sektoral bukan nilai proyek kawasan."
                : "Source: Final Draft Summary of Investment Opportunities Book, May 2025. Sector figures are not project-level investment values."}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
