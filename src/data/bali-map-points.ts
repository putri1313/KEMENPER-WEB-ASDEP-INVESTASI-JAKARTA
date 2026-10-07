import type { TourismMapPoint } from "@/data/map-point";

export const baliMapPoints: readonly TourismMapPoint[] = [
  {
    id: "ubud",
    name: "Ubud",
    area: "Gianyar",
    latitude: -8.5069,
    longitude: 115.2625,
    category: { en: "Culture and arts", id: "Budaya dan seni" },
    description: {
      en: "A cultural centre known for traditional arts, crafts, temples, and the surrounding rice-field landscape.",
      id: "Pusat budaya yang dikenal dengan seni tradisional, kerajinan, pura, dan lanskap persawahan di sekitarnya.",
    },
  },
  {
    id: "tanah-lot",
    name: "Pura Tanah Lot",
    area: "Tabanan",
    latitude: -8.6212,
    longitude: 115.0868,
    category: { en: "Temple and coastline", id: "Pura dan pesisir" },
    description: {
      en: "A sea temple set on a rocky offshore formation, with views across Bali's west coast.",
      id: "Pura laut di atas formasi batu di lepas pantai, dengan pemandangan ke pesisir barat Bali.",
    },
  },
  {
    id: "ulun-danu",
    name: "Pura Ulun Danu Beratan",
    area: "Bedugul, Tabanan",
    latitude: -8.2751,
    longitude: 115.1668,
    category: { en: "Temple and lake", id: "Pura dan danau" },
    description: {
      en: "A lakeside temple complex on Lake Beratan in Bali's cooler central highlands.",
      id: "Kompleks pura di tepi Danau Beratan, kawasan dataran tinggi Bali yang berhawa sejuk.",
    },
  },
  {
    id: "jatiluwih",
    name: "Sawah Terasering Jatiluwih",
    area: "Tabanan",
    latitude: -8.3667,
    longitude: 115.1322,
    category: { en: "Cultural landscape", id: "Lanskap budaya" },
    description: {
      en: "A highland rice-growing landscape shaped by terraced fields and the traditional Subak irrigation system.",
      id: "Lanskap persawahan dataran tinggi dengan terasering dan sistem irigasi tradisional Subak.",
    },
  },
  {
    id: "tirta-empul",
    name: "Pura Tirta Empul",
    area: "Tampaksiring, Gianyar",
    latitude: -8.415,
    longitude: 115.315,
    category: { en: "Temple and living tradition", id: "Pura dan tradisi hidup" },
    description: {
      en: "A Hindu water temple with spring-fed pools used for a traditional purification ritual.",
      id: "Pura Hindu dengan kolam mata air yang digunakan dalam tradisi penyucian.",
    },
  },
  {
    id: "uluwatu",
    name: "Pura Uluwatu",
    area: "Badung Selatan",
    latitude: -8.8291,
    longitude: 115.0849,
    category: { en: "Temple and coastal cliffs", id: "Pura dan tebing pantai" },
    description: {
      en: "A clifftop temple overlooking the Indian Ocean at the southern tip of Bali.",
      id: "Pura di atas tebing yang menghadap Samudra Hindia di ujung selatan Bali.",
    },
  },
  {
    id: "tirta-gangga",
    name: "Taman Tirta Gangga",
    area: "Karangasem",
    latitude: -8.4127,
    longitude: 115.5877,
    category: { en: "Garden and royal heritage", id: "Taman dan warisan kerajaan" },
    description: {
      en: "A water garden in eastern Bali, with pools, fountains, and landscaped grounds.",
      id: "Taman air di Bali bagian timur dengan kolam, pancuran, dan taman yang tertata.",
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Water_Palace_%286336845613%29.jpg",
    imageCredit: {
      label: "David Stanley / Wikimedia Commons (CC BY 2.0)",
      url: "https://commons.wikimedia.org/wiki/File:Water_Palace_(6336845613).jpg",
    },
  },
  {
    id: "kelingking",
    name: "Pantai Kelingking",
    area: "Nusa Penida, Klungkung",
    latitude: -8.75,
    longitude: 115.478,
    category: { en: "Beach and landscape", id: "Pantai dan bentang alam" },
    description: {
      en: "A coastal viewpoint on Nusa Penida known for its steep headland and turquoise bay.",
      id: "Titik pandang pesisir Nusa Penida dengan tanjung terjal dan teluk berwarna biru kehijauan.",
    },
  },
];
