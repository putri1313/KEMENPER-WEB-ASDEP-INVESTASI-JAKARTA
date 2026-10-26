import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Leaf, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { InvestmentProfileSections } from "@/components/investment-profile-sections";
import { SectionHeader } from "@/components/portal-components";
import { useSitePreferences } from "@/lib/site-preferences";
import { getLocalizedContent } from "@/lib/localized-content";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import marine from "@/assets/indonesia-marine.jpg";
import {
  priorityOpportunityProfiles,
  sezOpportunityProfiles,
  tourismInvestmentSnapshot,
  type BilingualCopy,
  type InvestmentOpportunityProfile,
} from "@/data/investment-opportunity-profiles";
import { themes } from "@/data/portal";
import { investmentReasons } from "@/data/investor-overview";
import { investmentThemeDetails } from "@/data/investment-theme-details";
import { TourismImpactTimeline } from "@/components/tourism-impact-timeline";

export const Route = createFileRoute("/opportunities")({
  head: () => ({
    meta: [
      { title: "Tourism Investment Opportunities | Indonesia Tourism Investment" },
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
const tourismSezIndex = [
  {
    profileSlug: "nongsa-sez",
    image: marine,
  },
  {
    profileSlug: "tanjung-kelayang-sez",
    image: marine,
  },
  {
    profileSlug: "tanjung-lesung-sez",
    image: aerial,
  },
  {
    profileSlug: "lido-sez",
    image: aerial,
  },
  {
    profileSlug: "singhasari-sez",
    image: culture,
  },
  {
    profileSlug: "sanur-sez",
    image: marine,
  },
  {
    profileSlug: "kura-kura-sez",
    image: aerial,
  },
  {
    profileSlug: "lombok-gili-tramena",
    image: aerial,
  },
  {
    profileSlug: "manado-likupang",
    image: marine,
  },
  {
    profileSlug: "morotai-sez",
    image: marine,
  },
];

const generalIncentives = [
  {
    en: "Risk-based licensing, including simpler procedures for lower-risk businesses.",
    id: "Perizinan berbasis risiko, termasuk prosedur lebih sederhana bagi usaha berisiko rendah.",
  },
  {
    en: "Centralized business licensing through the Online Single Submission (OSS) system.",
    id: "Perizinan usaha terpadu melalui sistem Online Single Submission (OSS).",
  },
  {
    en: "The brief cites IDR 10 billion (approximately USD 700,000) as minimum paid-up capital for FDI and refers to Government Regulation No. 15/2021.",
    id: "Dokumen mencantumkan modal disetor minimum PMA sebesar IDR 10 miliar (sekitar USD 700.000) dan merujuk PP No. 15/2021.",
  },
  {
    en: "Possible corporate income tax reductions for listed companies and VAT reductions or exemptions on selected tourism goods and services.",
    id: "Kemungkinan pengurangan PPh badan bagi perusahaan tercatat serta pengurangan atau pembebasan PPN atas barang dan jasa pariwisata tertentu.",
  },
];

const strategicIncentives = [
  {
    en: "Possible partial or full corporate income tax holidays for major tourism projects.",
    id: "Kemungkinan tax holiday sebagian atau penuh untuk proyek pariwisata berskala besar.",
  },
  {
    en: "Additional tax deductions for ecotourism, cultural tourism, digital tourism, workforce training, and certification.",
    id: "Pengurangan pajak tambahan untuk ekowisata, wisata budaya, wisata digital, pelatihan tenaga kerja, dan sertifikasi.",
  },
  {
    en: "Government-backed infrastructure, priority public-private partnerships, and fast-track licensing for strategic projects.",
    id: "Infrastruktur yang didukung pemerintah, prioritas kemitraan pemerintah-swasta, dan percepatan izin untuk proyek strategis.",
  },
  {
    en: "The brief also describes support for sustainable and environmentally responsible tourism investment.",
    id: "Dokumen juga menyebut dukungan bagi investasi pariwisata yang berkelanjutan dan bertanggung jawab terhadap lingkungan.",
  },
];

const sezIncentives = [
  {
    en: "The brief lists tax holidays or corporate income tax reductions for qualifying SEZ investments, plus an additional 50% reduction for two years.",
    id: "Dokumen mencantumkan tax holiday atau pengurangan PPh badan untuk investasi KEK yang memenuhi syarat, ditambah pengurangan 50% selama dua tahun.",
  },
  {
    en: "It describes VAT and sales-tax relief on certain imports and luxury residential purchases, and import-duty exemptions for SEZ construction and eligible goods.",
    id: "Dokumen menjelaskan fasilitas PPN dan pajak penjualan atas impor tertentu serta pembelian hunian mewah, dan pembebasan bea masuk untuk pembangunan KEK serta barang yang memenuhi ketentuan.",
  },
  {
    en: "The draft also mentions expanded import-duty relief for construction and goods in completed zones, and excise treatment according to the Excise Law.",
    id: "Draf juga menyebut perluasan pembebasan bea masuk untuk pembangunan dan barang di kawasan yang telah selesai dibangun, serta ketentuan cukai sesuai Undang-Undang Cukai.",
  },
  {
    en: "The draft contains inconsistent USD conversions for its IDR 100 billion investment threshold (USD 6.3 billion in one line and USD 6.3 million in another); the threshold and eligibility must be checked against current regulations.",
    id: "Draf memuat konversi USD yang tidak konsisten untuk ambang investasi IDR 100 miliar (USD 6,3 miliar pada satu baris dan USD 6,3 juta pada baris lain); ambang dan kelayakan harus diperiksa berdasarkan peraturan terkini.",
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
        if (entry.isIntersecting) {
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

function IndonesiaInvestmentCase() {
  const { language } = useSitePreferences();
  const id = language === "id";
  const incentives = [
    { title: id ? "Fasilitasi umum" : "General facilitation", items: generalIncentives },
    { title: id ? "Proyek strategis" : "Strategic projects", items: strategicIncentives },
    { title: id ? "Kawasan Ekonomi Khusus" : "Special Economic Zones", items: sezIncentives },
  ];

  return (
    <>
      <section className="section-space">
        <div className="container-portal">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div>
              <p className="eyebrow text-forest">{id ? "Alasan berinvestasi" : "Why invest"}</p>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
                {id ? "Keunggulan pariwisata Indonesia" : "Indonesia tourism investment case"}
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {id
                  ? "Ringkasan faktor daya tarik sebagaimana dipaparkan dalam dokumen."
                  : "A summary of investment drivers presented in the book."}
              </p>
            </div>
            <ol className="divide-y divide-border border-y border-border">
              {investmentReasons.map((reason, index) => (
                <li
                  className="grid gap-2 py-4 sm:grid-cols-[40px_1fr] sm:gap-4"
                  key={reason.title.en}
                >
                  <span className="font-mono text-xs font-bold text-forest">0{index + 1}</span>
                  <div>
                    <h3 className="text-sm font-bold leading-6">{localized(reason.title, id)}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {localized(reason.detail, id)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold text-muted-foreground">
                {id ? "Pertumbuhan PDB rata-rata 10 tahun" : "10-year average GDP growth"}
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold">4.2%</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground">
                {id ? "Proyeksi pertumbuhan PDB 2025" : "2025 GDP growth projection"}
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold">5.1%</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted-foreground">
                {id ? "Inflasi rata-rata 10 tahun" : "10-year average inflation"}
              </p>
              <p className="mt-2 font-display text-2xl font-extrabold">3.0%</p>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            {id
              ? "Dokumen juga memuat proyeksi inflasi sekitar 2,5% untuk 2025–2026 dan proyeksi PDB 5,1% pada 2025. Proyeksi tersebut adalah angka yang diterbitkan pada Mei 2025."
              : "The book also projected inflation around 2.5% for 2025–2026 and GDP growth of 5.1% in 2025. These are projections published in May 2025."}
          </p>
          <div className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-3">
            {[
              [id ? "Peringkat kredit" : "Credit rating", "BBB+"],
              [
                id ? "Peringkat daya saing dunia 2024" : "2024 world competitiveness ranking",
                "27th",
              ],
              [id ? "Perizinan" : "Licensing", id ? "Berbasis risiko · OSS" : "Risk-based · OSS"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                <p className="mt-2 font-display text-xl font-extrabold">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            {id
              ? "Peringkat dan indikator iklim investasi di atas merupakan kutipan dokumen Mei 2025, termasuk peringkat IMD 2024."
              : "Investment-climate indicators above are quoted from the May 2025 book, including its 2024 IMD ranking."}
          </p>
        </div>
      </section>

      <section className="bg-mist section-space">
        <div className="container-portal">
          <div className="max-w-2xl">
            <p className="eyebrow text-forest">
              {id ? "Insentif menurut draf" : "Incentives in the draft"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {id ? "Fasilitas investasi dan dukungan" : "Investment incentives and support"}
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {id
                ? "Ringkasan isi dokumen, bukan panduan hukum atau jaminan fasilitas."
                : "A summary of the document, not legal advice or a guarantee of eligibility."}
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {incentives.map((section) => (
              <div key={section.title}>
                <h3 className="border-b border-border pb-4 font-display text-xl font-bold">
                  {section.title}
                </h3>
                <ul className="divide-y divide-border">
                  {section.items.map((item, index) => (
                    <li
                      className="flex gap-3 py-4 text-sm leading-6 text-muted-foreground"
                      key={index}
                    >
                      <span className="mt-0.5 text-xs font-bold text-forest">0{index + 1}</span>
                      {localized(item, id)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
            {id
              ? "Penting: materi bertanggal Mei 2025. Ketentuan pajak, visa, perizinan, persyaratan modal, dan fasilitas KEK dapat berubah serta bergantung pada jenis usaha dan kelayakan investor. Verifikasi dengan OSS, BKPM, otoritas pajak, imigrasi, dan pengelola KEK sebelum mengambil keputusan. Draf menyebut Golden Visa individu 5 tahun untuk investasi USD 2,5 juta atau 10 tahun untuk USD 5 juta; skema korporasi berbeda."
              : "Important: the material is dated May 2025. Tax, visa, licensing, capital requirements, and SEZ facilities may change and depend on business type and investor eligibility. Verify with OSS, BKPM, tax and immigration authorities, and the relevant SEZ administrator before making decisions. The draft cites individual Golden Visa examples of 5 years for USD 2.5 million or 10 years for USD 5 million; corporate schemes differ."}
          </p>
        </div>
      </section>
    </>
  );
}

function OpportunitiesPage() {
  const { language, t } = useSitePreferences();
  const id = language === "id";
  const [selectedSezSlug, setSelectedSezSlug] = useState<string | null>(null);
  const [selectedThemeKey, setSelectedThemeKey] = useState<keyof typeof investmentThemeDetails | null>(null);
  const [selectedThemeProfileSlug, setSelectedThemeProfileSlug] = useState<string | null>(null);
  const selectedDetailsRef = useRef<HTMLDivElement>(null);
  const themeDialogRef = useRef<HTMLDialogElement>(null);
  const themeCloseRef = useRef<HTMLButtonElement>(null);
  const selectedSezProfile = profiles.find((profile) => profile.slug === selectedSezSlug);
  const selectedTheme = themes.find((theme) => theme.title.en === selectedThemeKey);
  const selectedThemeDetail = selectedThemeKey ? investmentThemeDetails[selectedThemeKey] : null;
  const selectedThemeProfile = profiles.find((profile) => profile.slug === selectedThemeProfileSlug);
  const relatedThemeProfiles = selectedThemeDetail
    ? selectedThemeDetail.profileSlugs
        .map((slug) => profiles.find((profile) => profile.slug === slug))
        .filter((profile): profile is InvestmentOpportunityProfile => Boolean(profile))
    : [];

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

      <InvestmentSnapshot />
      <TourismImpactTimeline />
      <IndonesiaInvestmentCase />

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
                    ? id ? "Profil proyek dalam draf" : "Draft project profile"
                    : id ? "Peluang dalam buku investasi" : "Investment book opportunity"}
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

      <section id="tourism-sez-showcase" className="bg-mist section-space scroll-mt-20">
        <div className="container-portal">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow text-forest">{id ? "Profil kawasan" : "Zone profiles"}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {id ? "Kawasan Ekonomi Khusus Pariwisata" : "Tourism Special Economic Zones"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {id
                ? "Buka tiap kawasan untuk melihat deskripsi, peluang, acara, dan atraksinya."
                : "Open a zone to view its description, opportunities, events, and attractions."}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {tourismSezIndex.map((zone) => {
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
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                        <span className="text-xs font-bold tabular-nums">{profile.value}</span>
                        <span className="inline-flex shrink-0 items-center gap-2 text-xs font-extrabold text-forest">
                          {isSelected
                            ? id ? "Tutup rincian" : "Close details"
                            : id ? "Buka rincian" : "Open details"}
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

          {selectedSezProfile && (
            <div
              className="mt-8 scroll-mt-24 overflow-hidden border border-border bg-background reveal"
              id={`sez-${selectedSezProfile.slug}-details`}
              ref={selectedDetailsRef}
            >
              <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-8">
                <div>
                  <p className="eyebrow text-forest">{id ? "Rincian KEK" : "SEZ details"}</p>
                  <h3 className="mt-1 font-display text-xl font-extrabold md:text-2xl">
                    {localized(selectedSezProfile.name, id)}
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
              <InvestmentProfileSections profile={selectedSezProfile} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
