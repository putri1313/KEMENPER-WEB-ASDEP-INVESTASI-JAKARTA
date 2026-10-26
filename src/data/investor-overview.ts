import type { BilingualCopy } from "@/data/investment-opportunity-profiles";

export const investmentReasons: { title: BilingualCopy; detail: BilingualCopy }[] = [
  {
    title: {
      en: "Business climate and strategic government support",
      id: "Iklim usaha dan dukungan strategis pemerintah",
    },
    detail: {
      en: "The book cites a 5.1% GDP growth projection for 2025, rising domestic and international tourism demand, 10 priority destinations, three regenerative destinations, and tourism SEZs.",
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
      en: "The book uses a 2020 population figure of 272 million, around two-thirds of working age, and points to tourism polytechnics, certification, and AI, big data, IoT, and VR while preserving local authenticity.",
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

export const tourismImpactMilestones = [
  {
    year: "2023",
    title: { en: "Recorded baseline", id: "Capaian tercatat" },
    workforce: "11.68 million",
    internationalVisitors: "11.68 million",
    domesticTrips: "825.79 million",
    foreignExchange: "USD 14 billion",
    gdpContribution: "3.9%",
  },
  {
    year: "2024",
    title: { en: "Book's reported achievement", id: "Capaian dalam dokumen" },
    workforce: "25.01 million",
    internationalVisitors: "13.9 million",
    domesticTrips: "1.02 billion",
    foreignExchange: "USD 16.7 billion*",
    gdpContribution: "4.5%",
  },
  {
    year: "2029",
    title: { en: "National aspiration", id: "Target nasional" },
    workforce: "29 million",
    internationalVisitors: "20 million",
    domesticTrips: "1.5 billion",
    foreignExchange: "USD 32 billion",
    gdpContribution: "5%",
  },
] as const;

export const tourismImpactLabels = {
  workforce: { en: "Tourism workforce", id: "Tenaga kerja pariwisata" },
  internationalVisitors: { en: "International visitors", id: "Wisatawan mancanegara" },
  domesticTrips: { en: "Domestic trips", id: "Perjalanan wisata domestik" },
  foreignExchange: { en: "Tourism foreign exchange", id: "Devisa pariwisata" },
  gdpContribution: { en: "GDP contribution", id: "Kontribusi terhadap PDB" },
} satisfies Record<string, BilingualCopy>;
