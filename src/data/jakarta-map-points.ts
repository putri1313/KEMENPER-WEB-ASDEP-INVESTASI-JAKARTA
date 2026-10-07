import type { TourismMapPoint } from "@/data/map-point";

export const jakartaMapPoints: readonly TourismMapPoint[] = [
  {
    id: "monas",
    name: "Monas",
    area: "Jakarta Pusat",
    latitude: -6.1754,
    longitude: 106.8272,
    category: { en: "National landmark", id: "Landmark nasional" },
    description: {
      en: "A national monument and museum in central Jakarta, with an observation area above the city.",
      id: "Monumen nasional dan museum di pusat Jakarta, dengan area pengamatan di bagian atas.",
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Monas-Indonesian_national_monument.jpg/960px-Monas-Indonesian_national_monument.jpg",
    imageCredit: {
      label: "Ryanda Maxima / Wikimedia Commons (CC BY 2.0)",
      url: "https://commons.wikimedia.org/wiki/File:Monas-Indonesian_national_monument.jpg",
    },
  },
  {
    id: "kota-tua",
    name: "Kota Tua Jakarta",
    area: "Jakarta Barat",
    latitude: -6.1352,
    longitude: 106.8133,
    category: { en: "Urban heritage", id: "Warisan perkotaan" },
    description: {
      en: "A historic district centred on Fatahillah Square, with heritage buildings and museums.",
      id: "Kawasan bersejarah yang berpusat di Taman Fatahillah, dengan bangunan warisan dan museum.",
    },
  },
  {
    id: "ancol",
    name: "Taman Impian Jaya Ancol",
    area: "Jakarta Utara",
    latitude: -6.1242,
    longitude: 106.843,
    category: { en: "Waterfront recreation", id: "Rekreasi tepi laut" },
    description: {
      en: "A large waterfront recreation area in North Jakarta, with beaches and family attractions.",
      id: "Kawasan rekreasi tepi laut di Jakarta Utara, dengan pantai dan beragam atraksi keluarga.",
    },
  },
  {
    id: "tmii",
    name: "Taman Mini Indonesia Indah",
    area: "Jakarta Timur",
    latitude: -6.3024,
    longitude: 106.8952,
    category: { en: "Culture and education", id: "Budaya dan edukasi" },
    description: {
      en: "A cultural park introducing Indonesia's regional traditions, architecture, and museums.",
      id: "Taman budaya yang memperkenalkan tradisi, arsitektur daerah, dan museum Indonesia.",
    },
  },
  {
    id: "setu-babakan",
    name: "Setu Babakan",
    area: "Jakarta Selatan",
    latitude: -6.3424,
    longitude: 106.8214,
    category: { en: "Betawi culture", id: "Budaya Betawi" },
    description: {
      en: "A lakeside cultural area where visitors can learn about Betawi traditions, performances, and food.",
      id: "Kawasan budaya di sekitar danau untuk mengenal tradisi, pertunjukan, dan kuliner Betawi.",
    },
  },
];
