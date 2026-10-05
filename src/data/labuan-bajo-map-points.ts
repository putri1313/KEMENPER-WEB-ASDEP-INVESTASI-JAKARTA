import type { TourismMapPoint } from "@/data/map-point";

export const labuanBajoMapPoints: readonly TourismMapPoint[] = [
  {
    id: "labuan-bajo",
    name: "Labuan Bajo Waterfront",
    area: "West Manggarai, Flores",
    latitude: -8.496,
    longitude: 119.8877,
    category: { en: "Coastal gateway", id: "Gerbang pesisir" },
    description: {
      en: "The harbour town and main departure point for boat trips to the islands of Komodo National Park.",
      id: "Kota pelabuhan sekaligus titik keberangkatan utama menuju pulau-pulau di Taman Nasional Komodo.",
    },
  },
  {
    id: "kelor",
    name: "Kelor Island",
    area: "Komodo National Park",
    latitude: -8.467,
    longitude: 119.74,
    category: { en: "Island and viewpoint", id: "Pulau dan titik pandang" },
    description: {
      en: "A small island near Labuan Bajo with a short hill walk, beach, and views across the surrounding waters.",
      id: "Pulau kecil dekat Labuan Bajo dengan jalur pendakian singkat, pantai, dan panorama perairan sekitarnya.",
    },
  },
  {
    id: "kanawa",
    name: "Kanawa Island",
    area: "Komodo National Park",
    latitude: -8.489,
    longitude: 119.757,
    category: { en: "Marine and island life", id: "Bahari dan kehidupan pulau" },
    description: {
      en: "An island known for clear water, coral reefs, and opportunities for swimming and snorkelling.",
      id: "Pulau dengan perairan jernih dan terumbu karang, cocok untuk berenang dan snorkeling.",
    },
  },
  {
    id: "rinca",
    name: "Rinca Island",
    area: "Komodo National Park",
    latitude: -8.65,
    longitude: 119.715,
    category: { en: "Wildlife and trekking", id: "Satwa liar dan trekking" },
    description: {
      en: "A national park island where guided treks offer a chance to learn about Komodo dragons and their habitat.",
      id: "Pulau taman nasional dengan trekking berpemandu untuk mengenal komodo dan habitatnya.",
    },
  },
  {
    id: "padar",
    name: "Padar Island",
    area: "Komodo National Park",
    latitude: -8.654,
    longitude: 119.58,
    category: { en: "Island landscape", id: "Lanskap kepulauan" },
    description: {
      en: "An island known for its hilltop viewpoint over several curved bays and contrasting beaches.",
      id: "Pulau dengan titik pandang di puncak bukit yang menghadap teluk-teluk melengkung dan pantai dengan warna berbeda.",
    },
  },
  {
    id: "komodo",
    name: "Komodo Island",
    area: "Komodo National Park",
    latitude: -8.589,
    longitude: 119.489,
    category: { en: "Wildlife and conservation", id: "Satwa liar dan konservasi" },
    description: {
      en: "Part of Komodo National Park, with ranger-guided walks to observe Komodo dragons in their natural habitat.",
      id: "Bagian dari Taman Nasional Komodo, dengan jalur berpemandu ranger untuk mengamati komodo di habitat alaminya.",
    },
  },
  {
    id: "pink-beach",
    name: "Pink Beach",
    area: "Komodo National Park",
    latitude: -8.62,
    longitude: 119.531,
    category: { en: "Beach and marine landscape", id: "Pantai dan lanskap bahari" },
    description: {
      en: "A distinctive pink-sand beach within Komodo National Park, known for its reef-fringed shore and clear water.",
      id: "Pantai berpasir merah muda di Taman Nasional Komodo, dikenal dengan pesisir berterumbu dan air yang jernih.",
    },
  },
];
