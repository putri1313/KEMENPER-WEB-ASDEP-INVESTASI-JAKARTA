import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Search, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { InvestmentProfileSections } from "@/components/investment-profile-sections";
import { useSitePreferences } from "@/lib/site-preferences";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import marine from "@/assets/indonesia-marine.jpg";
import urban from "@/assets/indonesia-urban.jpg";
import {
  priorityOpportunityProfiles,
  sezOpportunityProfiles,
  tourismInvestmentSnapshot,
  type BilingualCopy,
  type InvestmentOpportunityProfile,
} from "@/data/investment-opportunity-profiles";

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
const priorityDestinationIndex = [
  {
    name: "Lake Toba",
    designation: {
      en: "Lakeside and Geopark Tourism Destination",
      id: "Destinasi Wisata Danau dan Geopark",
    },
    slug: "danau-toba",
    image: aerial,
  },
  {
    name: "Likupang",
    designation: {
      en: "Eco Resort and Luxury Destination",
      id: "Destinasi Resor Ekologis dan Mewah",
    },
    slug: "manado-likupang",
    image: marine,
  },
  {
    name: "Borobudur Highland",
    designation: {
      en: "Culture and Heritage Tourism Destination",
      id: "Destinasi Wisata Budaya dan Warisan",
    },
    slug: "borobudur-yogyakarta-prambanan",
    image: culture,
  },
  {
    name: "Mandalika",
    designation: {
      en: "Youth and Sport Tourism Destination",
      id: "Destinasi Wisata Pemuda dan Olahraga",
    },
    slug: "lombok-gili-tramena",
    image: aerial,
  },
  {
    name: "Labuan Bajo",
    designation: {
      en: "Ecotourism Destination",
      id: "Destinasi Ekowisata",
    },
    slug: "labuan-bajo",
    image: marine,
  },
];
const tourismSezIndex = [
  {
    name: "Nongsa SEZ",
    region: { en: "Riau Islands", id: "Kepulauan Riau" },
    href: "/opportunities#nongsa-sez",
    image: marine,
  },
  {
    name: "Tanjung Kelayang SEZ",
    region: { en: "Bangka Belitung", id: "Bangka Belitung" },
    href: "/opportunities#tanjung-kelayang-sez",
    image: marine,
  },
  {
    name: "Tanjung Lesung SEZ",
    region: { en: "Banten", id: "Banten" },
    href: "/opportunities#tanjung-lesung-sez",
    image: aerial,
  },
  {
    name: "Lido SEZ",
    region: { en: "West Java", id: "Jawa Barat" },
    href: "/opportunities#lido-sez",
    image: aerial,
  },
  {
    name: "Singhasari SEZ",
    region: { en: "East Java", id: "Jawa Timur" },
    href: "/opportunities#singhasari-sez",
    image: culture,
  },
  {
    name: "Sanur SEZ",
    region: { en: "Bali", id: "Bali" },
    href: "/opportunities#sanur-sez",
    image: marine,
  },
  {
    name: "Kura-Kura SEZ",
    region: { en: "Bali", id: "Bali" },
    href: "/opportunities#kura-kura-sez",
    image: aerial,
  },
  {
    name: "Mandalika SEZ",
    region: { en: "West Nusa Tenggara", id: "Nusa Tenggara Barat" },
    href: "/destinations/lombok-gili-tramena",
    image: aerial,
    featured: true,
  },
  {
    name: "Likupang SEZ",
    region: { en: "North Sulawesi", id: "Sulawesi Utara" },
    href: "/destinations/manado-likupang",
    image: marine,
    featured: true,
  },
  {
    name: "Morotai SEZ",
    region: { en: "North Maluku", id: "Maluku Utara" },
    href: "/opportunities#morotai-sez",
    image: marine,
  },
];

const investmentReasons = [
  {
    title: {
      en: "Business climate and strategic government support",
      id: "Iklim usaha dan dukungan strategis pemerintah",
    },
    detail: {
      en: "The book cites a 5.1% GDP growth projection for 2025, increasing domestic and international tourism demand, 10 priority destinations, three regenerative destinations, and tourism SEZs.",
      id: "Dokumen mencantumkan proyeksi pertumbuhan PDB 5,1% pada 2025, peningkatan permintaan wisata domestik dan internasional, 10 destinasi prioritas, tiga destinasi regeneratif, dan KEK pariwisata.",
    },
  },
  {
    title: { en: "Strategic connectivity", id: "Konektivitas strategis" },
    detail: {
      en: "The brief cites 8th place in IATA's Air Transport Connectivity Index and more than 20 million marine-transport passengers, alongside infrastructure development to broaden access beyond the main islands.",
      id: "Dokumen menyebut peringkat ke-8 pada IATA Air Transport Connectivity Index dan lebih dari 20 juta penumpang transportasi laut, serta pengembangan infrastruktur untuk memperluas akses di luar pulau-pulau utama.",
    },
  },
  {
    title: { en: "A diverse tourism landscape", id: "Lanskap pariwisata yang beragam" },
    detail: {
      en: "The source highlights 10 cultural and natural UNESCO World Heritage Sites, four Best Tourism Villages, and experiences for luxury, adventure, family, and mid-range travellers.",
      id: "Sumber menyoroti 10 Situs Warisan Dunia UNESCO budaya dan alam, empat Best Tourism Villages, serta pengalaman bagi wisatawan mewah, petualang, keluarga, dan kelas menengah.",
    },
  },
  {
    title: { en: "Young and productive talent pool", id: "Angkatan kerja muda dan produktif" },
    detail: {
      en: "The book uses a 2020 population figure of 272 million, with around two-thirds of working age, and points to tourism polytechnics, certification, and AI, big data, IoT, and VR while preserving local authenticity.",
      id: "Dokumen menggunakan angka populasi 272 juta pada 2020, dengan sekitar dua pertiganya berusia kerja, serta menyoroti politeknik pariwisata, sertifikasi, dan pemanfaatan AI, big data, IoT, serta VR dengan tetap menjaga keaslian lokal.",
    },
  },
  {
    title: { en: "Untapped high-growth segments", id: "Segmen pertumbuhan tinggi yang potensial" },
    detail: {
      en: "Sports, MICE, wellness and health, luxury hospitality, gastronomy, and marine and adventure tourism are identified as opportunity segments.",
      id: "Wisata olahraga, MICE, kebugaran dan kesehatan, perhotelan mewah, gastronomi, serta wisata bahari dan petualangan diidentifikasi sebagai segmen peluang.",
    },
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
  const max = Math.max(...tourismInvestmentSnapshot.annualTrend.map((item) => item.total));

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
      <div className="mt-7 overflow-x-auto pb-2">
        <div className="flex min-w-[720px] items-end gap-3 border-b border-border px-2">
          {tourismInvestmentSnapshot.annualTrend.map((year) => (
            <div className="flex min-w-10 flex-1 flex-col items-center" key={year.year}>
              <span className="mb-2 text-[10px] tabular-nums text-muted-foreground">
                {year.total.toFixed(2)}
              </span>
              <div className="flex h-36 w-full items-end justify-center gap-1">
                <div
                  className="w-3 bg-gold"
                  style={{ height: `${Math.max(3, (year.foreign / max) * 100)}%` }}
                  title={`FDI ${year.foreign} IDR tn`}
                />
                <div
                  className="w-3 bg-forest"
                  style={{ height: `${Math.max(3, (year.domestic / max) * 100)}%` }}
                  title={`DDI ${year.domestic} IDR tn`}
                />
              </div>
              <span className="py-2 text-[10px] font-semibold text-muted-foreground">
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
    <section className="section-space bg-mist">
      <div className="container-portal">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
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

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
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
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
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
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const displayedProfiles = useMemo(
    () =>
      profiles.filter((profile) => {
        const text =
          `${profile.name.en} ${profile.name.id} ${profile.region.en} ${profile.region.id} ${profile.focus.en}`.toLowerCase();
        return (
          text.includes(search.toLowerCase()) &&
          (category === "all" || profile.category === category)
        );
      }),
    [search, category],
  );

  return (
    <>
      <section className="relative flex min-h-[66vh] items-center overflow-hidden bg-navy pt-20 text-primary-foreground">
        <img
          src={marine}
          alt="Coastal tourism landscape in Indonesia"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/35" />
        <div className="container-portal relative py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Indonesia · Tourism investment</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-7xl">
              {t("Tourism Investment Opportunities")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">
              {id
                ? "Jelajahi data realisasi investasi, proyek prioritas, dan peluang kawasan ekonomi khusus pariwisata."
                : "Explore investment realization data, priority projects, and tourism special economic zone opportunities."}
            </p>
          </div>
          <div className="mt-9 max-w-4xl border border-primary-foreground/15 bg-background/95 p-3 text-foreground shadow-card backdrop-blur md:flex md:items-center md:gap-3 md:p-4">
            <label className="relative block flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={19}
              />
              <span className="sr-only">{t("Search investment project concepts")}</span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={
                  id
                    ? "Cari destinasi, KEK, wilayah, atau sektor..."
                    : "Search destination, SEZ, region, or sector..."
                }
                className="h-12 w-full border-0 bg-transparent pl-12 pr-4 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
            </label>
            <label className="mt-3 grid gap-1 border-t border-border px-2 pt-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-muted-foreground md:mt-0 md:min-w-56 md:border-l md:border-t-0 md:pl-5 md:pt-0">
              {id ? "Jenis profil" : "Profile type"}
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="h-10 rounded-sm border bg-card px-3 text-xs font-bold normal-case tracking-normal text-foreground"
              >
                <option value="all">{id ? "Semua profil" : "All profiles"}</option>
                <option value="Priority destination">
                  {id ? "Destinasi prioritas" : "Priority destinations"}
                </option>
                <option value="Tourism SEZ">{id ? "KEK pariwisata" : "Tourism SEZs"}</option>
              </select>
            </label>
          </div>
          <a
            href="#investment-book"
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/80 transition hover:text-primary-foreground"
          >
            {id ? "Lihat ringkasan investasi" : "View investment snapshot"}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <InvestmentSnapshot />
      <IndonesiaInvestmentCase />

      <section id="investment-book" className="section-space scroll-mt-20 bg-background">
        <div className="container-portal">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-forest">
                {id ? "Portofolio dalam dokumen" : "Book project portfolio"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                {id
                  ? "Destinasi dan peluang investasi"
                  : "Destinations and investment opportunities"}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                {id
                  ? "Berisi lima destinasi prioritas dan sepuluh KEK pariwisata yang tercantum dalam draf. Mandalika dan Likupang tercakup sebagai destinasi sekaligus KEK."
                  : "Includes five priority destinations and ten tourism SEZs listed in the draft. Mandalika and Likupang appear as both destinations and SEZs."}
              </p>
            </div>
            <p className="shrink-0 text-sm font-bold text-muted-foreground">
              {displayedProfiles.length} {id ? "profil" : "profiles"}
            </p>
          </div>
          <div className="mb-10">
            <h3 className="font-display text-lg font-extrabold">
              {id ? "Destinasi Pariwisata Prioritas" : "Priority Tourism Destinations"}
            </h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {priorityDestinationIndex.map((destination) => (
                <Link
                  className="group flex min-h-28 items-center gap-4 rounded-lg border border-primary/40 bg-background p-2.5 shadow-sm transition hover:border-primary hover:shadow-soft focus-visible:outline-offset-4"
                  key={destination.name}
                  to="/destinations/$slug"
                  params={{ slug: destination.slug }}
                >
                  <img
                    alt=""
                    className="h-24 w-[42%] shrink-0 rounded-md object-cover sm:h-28"
                    loading="lazy"
                    src={destination.image}
                  />
                  <span className="min-w-0 py-2">
                    <span className="block font-display text-base font-extrabold leading-tight group-hover:text-forest sm:text-lg">
                      {destination.name}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                      {localized(destination.designation, id)}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {displayedProfiles.length ? (
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 xl:grid-cols-3">
              {displayedProfiles.map((profile) => {
                const destinationProfile = profile.category === "Priority destination";
                const body = (
                  <>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-forest">
                      {destinationProfile
                        ? id
                          ? "Destinasi prioritas"
                          : "Priority destination"
                        : id
                          ? "KEK pariwisata"
                          : "Tourism SEZ"}
                    </span>
                    <h3 className="mt-3 font-display text-xl font-extrabold">
                      {localized(profile.name, id)}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {localized(profile.region, id)}
                    </p>
                    <div className="mt-5 flex items-end justify-between gap-4 border-t border-border pt-4">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {id ? "Nilai di draf" : "Draft value"}
                        </p>
                        <p className="mt-1 text-sm font-bold">{profile.value}</p>
                      </div>
                      <span className="text-xs font-bold text-forest">{profile.area}</span>
                    </div>
                  </>
                );
                return destinationProfile ? (
                  <Link
                    className="bg-background p-5 transition hover:bg-mist md:p-6"
                    key={profile.slug}
                    to="/destinations/$slug"
                    params={{ slug: profile.slug }}
                  >
                    {body}
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-forest">
                      {id ? "Buka profil destinasi" : "Open destination profile"}
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                ) : (
                  <a
                    className="bg-background p-5 transition hover:bg-mist md:p-6"
                    key={profile.slug}
                    href={`#${profile.slug}`}
                  >
                    {body}
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-forest">
                      {id ? "Lihat profil KEK" : "View SEZ profile"}
                      <ArrowUpRight size={14} />
                    </span>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground">
              {id
                ? "Tidak ada profil yang cocok dengan pencarian."
                : "No profiles match this search."}
            </div>
          )}
          <p className="mt-5 text-xs leading-5 text-muted-foreground">
            {id
              ? "Nilai investasi merupakan angka dalam draf, bukan penawaran aktif atau komitmen pendanaan. Konfirmasikan kepada pengembang/otorita terkait."
              : "Investment values are figures in the draft, not live offers or funding commitments. Confirm with the relevant developer or authority."}
          </p>
        </div>
      </section>

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
          <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {tourismSezIndex.map((zone) => (
              <a
                className="group block overflow-hidden bg-background transition-shadow hover:shadow-soft focus-visible:outline-offset-4"
                href={zone.href}
                key={zone.name}
                aria-label={`${zone.name} (${localized(zone.region, id)})`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    src={zone.image}
                  />
                </div>
                <div className="flex min-h-10 items-center justify-center gap-2 bg-primary px-2 py-2 text-center text-xs font-extrabold text-primary-foreground">
                  {zone.featured && (
                    <Star aria-hidden="true" className="shrink-0 fill-gold text-gold" size={15} />
                  )}
                  <span>{zone.name}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="divide-y divide-border border-y border-border">
            {sezOpportunityProfiles.map((profile) => (
              <details className="group" id={profile.slug} key={profile.slug}>
                <summary className="grid cursor-pointer list-none gap-2 py-5 marker:hidden sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6">
                  <span>
                    <span className="block font-display text-xl font-bold">
                      {localized(profile.name, id)}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {localized(profile.region, id)} · {profile.area}
                    </span>
                  </span>
                  <span className="text-sm font-bold tabular-nums">{profile.value}</span>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-forest">
                    {id ? "Buka rincian" : "Open details"}
                    <ArrowRight className="transition group-open:rotate-90" size={15} />
                  </span>
                </summary>
                <div className="border-t border-border">
                  <InvestmentProfileSections profile={profile} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
