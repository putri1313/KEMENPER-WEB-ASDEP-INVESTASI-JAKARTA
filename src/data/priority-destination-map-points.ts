import type { TourismMapPoint } from "@/data/map-point";

export const lakeTobaMapPoints: readonly TourismMapPoint[] = [
  {
    id: "samosir",
    name: "Samosir Island",
    area: "Lake Toba, North Sumatra",
    latitude: 2.637,
    longitude: 98.806,
    category: { en: "Batak culture and lake landscape", id: "Budaya Batak dan lanskap danau" },
    description: {
      en: "An island in Lake Toba known for Batak cultural heritage, traditional villages, and broad lake views.",
      id: "Pulau di Danau Toba yang dikenal dengan warisan budaya Batak, desa tradisional, dan panorama danau.",
    },
  },
  {
    id: "bukit-holbung",
    name: "Bukit Holbung",
    area: "Samosir, North Sumatra",
    latitude: 2.5523,
    longitude: 98.6398,
    category: { en: "Nature and viewpoint", id: "Alam dan titik pandang" },
    description: {
      en: "A rolling grassland hill with open views across Lake Toba and the surrounding caldera landscape.",
      id: "Perbukitan padang rumput dengan panorama Danau Toba dan lanskap kaldera di sekitarnya.",
    },
  },
  {
    id: "aek-rangat",
    name: "Aek Rangat Hot Springs",
    area: "Pangururan, Samosir",
    latitude: 2.6189,
    longitude: 98.6756,
    category: { en: "Geothermal and wellness", id: "Geotermal dan kebugaran" },
    description: {
      en: "Natural hot springs near Pangururan, set against the volcanic scenery of Samosir Island.",
      id: "Pemandian air panas alami di dekat Pangururan, berlatar lanskap vulkanik Pulau Samosir.",
    },
  },
];

export const borobudurMapPoints: readonly TourismMapPoint[] = [
  {
    id: "borobudur-temple",
    name: "Borobudur Temple",
    area: "Magelang, Central Java",
    latitude: -7.60778,
    longitude: 110.20386,
    category: { en: "Buddhist heritage and UNESCO site", id: "Warisan Buddha dan situs UNESCO" },
    description: {
      en: "A ninth-century Buddhist monument and UNESCO World Heritage Site with sculpted reliefs and stupas.",
      id: "Monumen Buddha abad ke-9 dan Situs Warisan Dunia UNESCO dengan relief serta stupa.",
    },
  },
  {
    id: "mendut-temple",
    name: "Mendut Temple",
    area: "Mungkid, Magelang",
    latitude: -7.60486,
    longitude: 110.2301,
    category: { en: "Buddhist heritage", id: "Warisan Buddha" },
    description: {
      en: "A ninth-century Buddhist temple east of Borobudur, noted for its large seated Buddha statue.",
      id: "Candi Buddha abad ke-9 di sebelah timur Borobudur, dikenal dengan arca Buddha duduk berukuran besar.",
    },
  },
  {
    id: "punthuk-setumbu",
    name: "Punthuk Setumbu Hill",
    area: "Karangrejo, Magelang",
    latitude: -7.61315,
    longitude: 110.18735,
    category: { en: "Nature and sunrise viewpoint", id: "Alam dan titik pandang matahari terbit" },
    description: {
      en: "A hilltop viewpoint in the Menoreh Hills overlooking Borobudur and the surrounding Kedu Plain.",
      id: "Titik pandang di perbukitan Menoreh yang menghadap Borobudur dan Dataran Kedu.",
    },
  },
];

export const mandalikaMapPoints: readonly TourismMapPoint[] = [
  {
    id: "kuta-mandalika",
    name: "Kuta Mandalika Beach",
    area: "Pujut, Central Lombok",
    latitude: -8.895,
    longitude: 116.282,
    category: { en: "Coastal recreation", id: "Rekreasi pesisir" },
    description: {
      en: "A sandy bay inside the Mandalika tourism area, with clear water and access to coastal visitor facilities.",
      id: "Teluk berpasir di kawasan pariwisata Mandalika dengan air jernih dan akses ke fasilitas wisata pesisir.",
    },
  },
  {
    id: "sade-village",
    name: "Sade Traditional Village",
    area: "Rembitan, Central Lombok",
    latitude: -8.8393,
    longitude: 116.292,
    category: { en: "Sasak culture and heritage", id: "Budaya dan warisan Sasak" },
    description: {
      en: "A Sasak village known for traditional houses, weaving, and living cultural practices.",
      id: "Desa Sasak yang dikenal dengan rumah tradisional, tenun, dan praktik budaya yang terus hidup.",
    },
  },
  {
    id: "tanjung-aan",
    name: "Tanjung Aan Beach",
    area: "Pujut, Central Lombok",
    latitude: -8.9144,
    longitude: 116.3374,
    category: { en: "Beach and coastal landscape", id: "Pantai dan lanskap pesisir" },
    description: {
      en: "A curved bay east of Kuta with pale sand, calm blue water, and a low headland viewpoint.",
      id: "Teluk melengkung di sebelah timur Kuta dengan pasir cerah, air biru tenang, dan bukit pandang.",
    },
  },
];

export const likupangMapPoints: readonly TourismMapPoint[] = [
  {
    id: "gangga-island",
    name: "Gangga Island",
    area: "North Minahasa, North Sulawesi",
    latitude: 1.7717,
    longitude: 125.0561,
    category: { en: "Island and marine life", id: "Pulau dan kehidupan bahari" },
    description: {
      en: "An island off North Sulawesi known for clear water, coral reefs, and marine experiences.",
      id: "Pulau di lepas pantai Sulawesi Utara yang dikenal dengan air jernih, terumbu karang, dan wisata bahari.",
    },
  },
  {
    id: "paal-beach",
    name: "Paal Beach",
    area: "Marinsow, East Likupang",
    latitude: 1.6529,
    longitude: 125.1618,
    category: { en: "Beach and marine recreation", id: "Pantai dan rekreasi bahari" },
    description: {
      en: "A white-sand beach with clear water on the East Likupang coast, suited to swimming and seaside visits.",
      id: "Pantai berpasir putih dengan air jernih di pesisir Likupang Timur, cocok untuk berenang dan berwisata pesisir.",
    },
  },
  {
    id: "pulisan-beach",
    name: "Pulisan Beach and Hills",
    area: "Pulisan, East Likupang",
    latitude: 1.6803,
    longitude: 125.1576,
    category: { en: "Coastal nature and hills", id: "Alam pesisir dan perbukitan" },
    description: {
      en: "A coastal landscape combining a sandy shoreline, rock formations, and nearby hills in East Likupang.",
      id: "Lanskap pesisir yang memadukan garis pantai berpasir, formasi batu, dan perbukitan di Likupang Timur.",
    },
  },
];
