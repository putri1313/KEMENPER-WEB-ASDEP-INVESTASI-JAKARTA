import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import marine from "@/assets/indonesia-marine.jpg";
import urban from "@/assets/indonesia-urban.jpg";
import bangkaBelitungImage from "@/assets/destinations/bangka-belitung.webp";
import baliImage from "@/assets/destinations/bali.webp";
import borobudurImage from "@/assets/destinations/eco-tourism.webp";
import bromoImage from "@/assets/destinations/bromo.webp";
import culturalTourismImage from "@/assets/destinations/cultural.webp";
import creativeEconomyImage from "@/assets/destinations/creative-economy.webp";
import gastronomyImage from "@/assets/destinations/gastronomy.webp";
import hospitalityImage from "@/assets/destinations/hospitality.webp";
import jakartaImage from "@/assets/destinations/jakarta-sunset.webp";
import labuanBajoImage from "@/assets/destinations/labuan-bajo.webp";
import lakeTobaImage from "@/assets/destinations/lake-toba.webp";
import likupangImage from "@/assets/destinations/likupang.webp";
import lombokImage from "@/assets/destinations/lombok.webp";
import miceImage from "@/assets/destinations/mice.webp";
import morotaiImage from "@/assets/destinations/morotai.webp";
import natureTourismImage from "@/assets/destinations/nature.webp";
import rajaAmpatImage from "@/assets/destinations/raja-ampat.webp";
import riauIslandsImage from "@/assets/destinations/kepulauan-riau.webp";
import wakatobiImage from "@/assets/destinations/wakatobi.webp";
import marineTourismImage from "@/assets/destinations/marine-tourism.webp";
import wellnessTourismImage from "@/assets/destinations/wellness-tourism.webp";
import { localizedContent, type LocalizedContent } from "@/lib/localized-content";

export type DestinationType = "regenerative" | "priority";
export type Destination = {
  id: number;
  name: LocalizedContent;
  slug: string;
  type: DestinationType;
  region: LocalizedContent;
  description: LocalizedContent;
  image: string;
  tourismThemes: LocalizedContent[];
  investmentSectors: LocalizedContent[];
  connectivity: LocalizedContent;
  opportunities: LocalizedContent[];
};

const c = localizedContent;
const sharedSectors = [
  c("Accommodation", "Akomodasi"),
  c("Tourism attractions", "Atraksi pariwisata"),
  c("Gastronomy", "Gastronomi"),
];

export const destinations: Destination[] = [
  {
    id: 1,
    name: c("Bali", "Bali"),
    slug: "bali",
    type: "regenerative",
    region: c("Bali, Indonesia", "Bali, Indonesia"),
    description: c(
      "A globally recognized tourism destination with opportunities for sustainable, high-value, and regenerative tourism development.",
      "Destinasi pariwisata yang dikenal dunia dengan peluang pengembangan pariwisata berkelanjutan, bernilai tambah, dan regeneratif.",
    ),
    image: baliImage,
    tourismThemes: [
      c("Sustainable tourism", "Pariwisata berkelanjutan"),
      c("Wellness", "Kebugaran"),
      c("Culture", "Budaya"),
      c("Marine tourism", "Pariwisata bahari"),
      c("Hospitality", "Perhotelan"),
      c("Creative economy", "Ekonomi kreatif"),
    ],
    investmentSectors: [...sharedSectors, c("Wellness tourism", "Pariwisata kebugaran"), c("Creative economy", "Ekonomi kreatif")],
    connectivity: c("Connectivity information coming soon.", "Informasi konektivitas akan segera tersedia."),
    opportunities: [
      c("Sustainable visitor experiences", "Pengalaman wisata berkelanjutan"),
      c("Destination amenities", "Amenitas destinasi"),
      c("Community-based tourism", "Pariwisata berbasis masyarakat"),
    ],
  },
  {
    id: 2,
    name: c("Greater Jakarta", "Jakarta Raya"),
    slug: "greater-jakarta",
    type: "regenerative",
    region: c("Greater Jakarta", "Jakarta Raya"),
    description: c(
      "A major metropolitan tourism ecosystem with strong connectivity, business activity, urban tourism, MICE, and creative economy potential.",
      "Ekosistem pariwisata metropolitan dengan konektivitas dan kegiatan bisnis yang kuat serta potensi wisata perkotaan, MICE, dan ekonomi kreatif.",
    ),
    image: jakartaImage,
    tourismThemes: [
      c("Urban tourism", "Wisata perkotaan"),
      c("MICE", "MICE"),
      c("Business tourism", "Wisata bisnis"),
      c("Creative economy", "Ekonomi kreatif"),
      c("Gastronomy", "Gastronomi"),
      c("Hospitality", "Perhotelan"),
    ],
    investmentSectors: [...sharedSectors, c("MICE", "MICE"), c("Creative economy", "Ekonomi kreatif")],
    connectivity: c("Connectivity information coming soon.", "Informasi konektivitas akan segera tersedia."),
    opportunities: [
      c("Sustainable visitor experiences", "Pengalaman wisata berkelanjutan"),
      c("Destination amenities", "Amenitas destinasi"),
      c("Community-based tourism", "Pariwisata berbasis masyarakat"),
    ],
  },
  {
    id: 3,
    name: c("Riau Islands", "Kepulauan Riau"),
    slug: "kepulauan-riau",
    type: "regenerative",
    region: c("Riau Islands, Indonesia", "Kepulauan Riau, Indonesia"),
    description: c(
      "A strategic archipelagic tourism region with marine, island, coastal, and cross-border tourism opportunities.",
      "Kawasan pariwisata kepulauan yang strategis dengan peluang wisata bahari, pulau, pesisir, dan lintas batas.",
    ),
    image: riauIslandsImage,
    tourismThemes: [
      c("Marine tourism", "Pariwisata bahari"),
      c("Island tourism", "Wisata kepulauan"),
      c("Coastal tourism", "Wisata pesisir"),
      c("Resort development", "Pengembangan resor"),
      c("Wellness", "Kebugaran"),
      c("Hospitality", "Perhotelan"),
    ],
    investmentSectors: [...sharedSectors, c("Marine tourism", "Pariwisata bahari"), c("Wellness tourism", "Pariwisata kebugaran")],
    connectivity: c("Connectivity information coming soon.", "Informasi konektivitas akan segera tersedia."),
    opportunities: [
      c("Sustainable visitor experiences", "Pengalaman wisata berkelanjutan"),
      c("Destination amenities", "Amenitas destinasi"),
      c("Community-based tourism", "Pariwisata berbasis masyarakat"),
    ],
  },
  ...[
    {
      name: c("Lake Toba", "Danau Toba"), slug: "danau-toba", region: c("North Sumatra", "Sumatera Utara"), image: lakeTobaImage,
      themes: [c("Nature", "Alam"), c("Culture", "Budaya"), c("Lake tourism", "Wisata danau")],
    },
    {
      name: c("Lombok–Gili Tramena", "Lombok–Gili Tramena"), slug: "lombok-gili-tramena", region: c("West Nusa Tenggara", "Nusa Tenggara Barat"), image: lombokImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Wellness", "Kebugaran"), c("Nature", "Alam")],
    },
    {
      name: c("Borobudur–Yogyakarta–Prambanan", "Borobudur–Yogyakarta–Prambanan"), slug: "borobudur-yogyakarta-prambanan", region: c("Central Java & Special Region of Yogyakarta", "Jawa Tengah & Daerah Istimewa Yogyakarta"), image: borobudurImage,
      themes: [c("Culture", "Budaya"), c("Heritage", "Warisan budaya"), c("Creative economy", "Ekonomi kreatif")],
    },
    {
      name: c("Labuan Bajo", "Labuan Bajo"), slug: "labuan-bajo", region: c("East Nusa Tenggara", "Nusa Tenggara Timur"), image: labuanBajoImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Nature", "Alam"), c("Adventure", "Petualangan")],
    },
    {
      name: c("Manado–Likupang", "Manado–Likupang"), slug: "manado-likupang", region: c("North Sulawesi", "Sulawesi Utara"), image: likupangImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Nature", "Alam"), c("Gastronomy", "Gastronomi")],
    },
    {
      name: c("Bromo–Tengger–Semeru", "Bromo–Tengger–Semeru"), slug: "bromo-tengger-semeru", region: c("East Java", "Jawa Timur"), image: bromoImage,
      themes: [c("Nature", "Alam"), c("Adventure", "Petualangan"), c("Culture", "Budaya")],
    },
    {
      name: c("Raja Ampat", "Raja Ampat"), slug: "raja-ampat", region: c("Southwest Papua", "Papua Barat Daya"), image: rajaAmpatImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Nature", "Alam"), c("Adventure", "Petualangan")],
    },
    {
      name: c("Bangka Belitung", "Bangka Belitung"), slug: "bangka-belitung", region: c("Bangka Belitung Islands", "Kepulauan Bangka Belitung"), image: bangkaBelitungImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Culture", "Budaya"), c("Nature", "Alam")],
    },
    {
      name: c("Wakatobi", "Wakatobi"), slug: "wakatobi", region: c("Southeast Sulawesi", "Sulawesi Tenggara"), image: wakatobiImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Nature", "Alam"), c("Culture", "Budaya")],
    },
    {
      name: c("Morotai", "Morotai"), slug: "morotai", region: c("North Maluku", "Maluku Utara"), image: morotaiImage,
      themes: [c("Marine tourism", "Pariwisata bahari"), c("Heritage", "Warisan budaya"), c("Adventure", "Petualangan")],
    },
  ].map((item, index) => ({
    id: index + 4,
    name: item.name,
    slug: item.slug,
    type: "priority" as const,
    region: item.region,
    description: c(
      `A strategic tourism destination in ${item.region.en} with distinctive ${item.themes.slice(0, 2).map((theme) => theme.en.toLowerCase()).join(" and ")} potential. Detailed official destination information is coming soon.`,
      `Destinasi pariwisata strategis di ${item.region.id} dengan potensi khas pada bidang ${item.themes.slice(0, 2).map((theme) => theme.id.toLowerCase()).join(" dan ")}. Informasi resmi destinasi yang lebih terperinci akan segera tersedia.`,
    ),
    image: item.image,
    tourismThemes: item.themes,
    investmentSectors: [
      c("Accommodation", "Akomodasi"),
      c("Tourism attractions", "Atraksi pariwisata"),
      ...(item.themes.some((theme) => theme.en === "Marine tourism") ? [c("Marine tourism", "Pariwisata bahari")] : []),
      c("Gastronomy", "Gastronomi"),
    ],
    connectivity: c("Connectivity information coming soon.", "Informasi konektivitas akan segera tersedia."),
    opportunities: [
      c("Destination amenities", "Amenitas destinasi"),
      c("Sustainable accommodation", "Akomodasi berkelanjutan"),
      c("Visitor experiences", "Pengalaman wisata"),
    ],
  })),
];

export const regenerativeDestinations = destinations.filter((destination) => destination.type === "regenerative");
export const priorityDestinations = destinations.filter((destination) => destination.type === "priority");

export const themes = [
  { title: c("Marine tourism", "Pariwisata bahari"), description: c("Coastal, island, and water-based destination development.", "Pengembangan destinasi pesisir, kepulauan, dan wisata perairan."), image: marineTourismImage },
  { title: c("Nature & ecotourism", "Alam & ekowisata"), description: c("Low-impact experiences shaped by Indonesia's natural diversity.", "Pengalaman berdampak rendah yang berangkat dari keragaman alam Indonesia."), image: natureTourismImage },
  { title: c("Wellness tourism", "Pariwisata kebugaran"), description: c("Restorative experiences rooted in place, nature, and culture.", "Pengalaman pemulihan yang berakar pada tempat, alam, dan budaya."), image: wellnessTourismImage },
  { title: c("Cultural tourism", "Pariwisata budaya"), description: c("Heritage-led experiences supporting living traditions.", "Pengalaman berbasis warisan yang mendukung tradisi yang terus hidup."), image: culturalTourismImage },
  { title: c("Gastronomy", "Gastronomi"), description: c("Culinary destinations and regionally distinctive food experiences.", "Destinasi kuliner dan pengalaman makanan khas daerah."), image: gastronomyImage },
  { title: c("MICE", "MICE"), description: c("Meeting, incentive, conference, and exhibition infrastructure.", "Infrastruktur untuk pertemuan, insentif, konferensi, dan pameran."), image: miceImage },
  { title: c("Creative economy", "Ekonomi kreatif"), description: c("Design, craft, performance, and locally made tourism products.", "Desain, kerajinan, pertunjukan, dan produk wisata buatan lokal."), image: creativeEconomyImage },
  { title: c("Hospitality", "Perhotelan"), description: c("Quality accommodation across urban, island, and nature settings.", "Akomodasi berkualitas di kawasan perkotaan, kepulauan, dan alam."), image: hospitalityImage },
];

export const sampleOpportunities = [
  { name: c("Toba Caldera Resort", "Toba Caldera Resort"), destination: c("Lake Toba, North Sumatra", "Danau Toba, Sumatera Utara"), type: c("Priority destination", "Destinasi prioritas"), sector: c("Hospitality & tourism facilities", "Perhotelan & fasilitas pariwisata"), investmentType: c("USD 1.7 billion · 386.72 ha", "USD 1,7 miliar · 386,72 ha"), status: c("May 2025 draft", "Draf Mei 2025"), image: lakeTobaImage },
  { name: c("Parapuar Tourism Area", "Kawasan Pariwisata Parapuar"), destination: c("Labuan Bajo, East Nusa Tenggara", "Labuan Bajo, Nusa Tenggara Timur"), type: c("Priority destination", "Destinasi prioritas"), sector: c("Ecotourism & accommodation", "Ekowisata & akomodasi"), investmentType: c("USD 78.2 million · 400 ha", "USD 78,2 juta · 400 ha"), status: c("May 2025 draft", "Draf Mei 2025"), image: labuanBajoImage },
  { name: c("Borobudur Highland", "Borobudur Highland"), destination: c("Central Java & Yogyakarta", "Jawa Tengah & Yogyakarta"), type: c("Priority destination", "Destinasi prioritas"), sector: c("Heritage & nature tourism", "Wisata warisan budaya & alam"), investmentType: c("309 ha · value requires verification", "309 ha · nilai perlu diverifikasi"), status: c("May 2025 draft", "Draf Mei 2025"), image: borobudurImage },
  { name: c("Nongsa Digital Park & Resort", "Nongsa Digital Park & Resort"), destination: c("Nongsa, Riau Islands", "Nongsa, Kepulauan Riau"), type: c("Tourism SEZ", "KEK pariwisata"), sector: c("Digital economy & hospitality", "Ekonomi digital & perhotelan"), investmentType: c("IDR 39.9 trillion · 166.45 ha", "IDR 39,9 triliun · 166,45 ha"), status: c("May 2025 draft", "Draf Mei 2025"), image: riauIslandsImage },
];

export const publications = [
  { category: c("National investment", "Investasi nasional"), date: c("January 2026", "Januari 2026"), title: c("Indonesia's Investment Performance — 2025 Annual Review", "Kinerja Investasi Indonesia — Tinjauan Tahunan 2025"), excerpt: c("National investment realization reached Rp1,931.2 trillion in 2025, exceeding the annual target. These figures cover all sectors, not tourism alone.", "Realisasi investasi nasional mencapai Rp1.931,2 triliun pada 2025 dan melampaui target tahunan. Angka ini mencakup seluruh sektor, bukan pariwisata saja."), image: urban, pdf: "/newsletters/2025-investment-review.pdf", source: "https://www.bkpm.go.id/id/info/siaran-pers/realisasi-investasi-2025-lampaui-target-hilirisasi-melompat-43-3-persen" },
  { category: c("Tourism investment data", "Data investasi pariwisata"), date: c("Updated July 2026", "Diperbarui Juli 2026"), title: c("Tourism Sector Investment Data — 2025", "Data Investasi Sektor Pariwisata — 2025"), excerpt: c("Explore the official open dataset with quarterly and regional views of tourism investment reported through LKPM.", "Jelajahi data terbuka resmi yang menyajikan investasi pariwisata berdasarkan triwulan dan wilayah melalui LKPM."), image: marine, pdf: "/newsletters/tourism-investment-data-guide.pdf", source: "https://data.bkpm.go.id/dataset-detail/nilai-investasi-sektor-pariwisata-tahun-2025" },
  { category: c("Destination spotlight", "Sorotan destinasi"), date: c("Official project information", "Informasi proyek resmi"), title: c("Nusantara: Investment & Tourism Development Pathways", "Nusantara: Jalur Investasi & Pengembangan Pariwisata"), excerpt: c("A guide to the official investment portal and the cross-sector infrastructure shaping Nusantara's development.", "Panduan menuju portal investasi resmi dan infrastruktur lintas sektor yang mendukung pembangunan Nusantara."), image: aerial, pdf: "/newsletters/nusantara-investment-pathways.pdf", source: "https://ikn.go.id/id/investasi" },
];
