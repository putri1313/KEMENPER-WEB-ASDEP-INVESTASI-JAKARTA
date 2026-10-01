import type { TourismMapPoint } from "@/data/map-point";

export const labuanBajoMapPoints: readonly TourismMapPoint[] = [
  {
    id: "labuan-bajo", name: "Labuan Bajo Waterfront", area: "West Manggarai, Flores", latitude: -8.4960, longitude: 119.8877,
    category: { en: "Coastal gateway", id: "Gerbang pesisir" },
    description: { en: "The harbour town and main departure point for boat trips to the islands of Komodo National Park.", id: "Kota pelabuhan sekaligus titik keberangkatan utama menuju pulau-pulau di Taman Nasional Komodo." },
  },
  {
    id: "kelor", name: "Kelor Island", area: "Komodo National Park", latitude: -8.4670, longitude: 119.7400,
    category: { en: "Island and viewpoint", id: "Pulau dan titik pandang" },
    description: { en: "A small island near Labuan Bajo with a short hill walk, beach, and views across the surrounding waters.", id: "Pulau kecil dekat Labuan Bajo dengan jalur pendakian singkat, pantai, dan panorama perairan sekitarnya." },
  },
  {
    id: "kanawa", name: "Kanawa Island", area: "Komodo National Park", latitude: -8.4890, longitude: 119.7570,
    category: { en: "Marine and island life", id: "Bahari dan kehidupan pulau" },
    description: { en: "An island known for clear water, coral reefs, and opportunities for swimming and snorkelling.", id: "Pulau dengan perairan jernih dan terumbu karang, cocok untuk berenang dan snorkeling." },
  },
  {
    id: "rinca", name: "Rinca Island", area: "Komodo National Park", latitude: -8.6500, longitude: 119.7150,
    category: { en: "Wildlife and trekking", id: "Satwa liar dan trekking" },
    description: { en: "A national park island where guided treks offer a chance to learn about Komodo dragons and their habitat.", id: "Pulau taman nasional dengan trekking berpemandu untuk mengenal komodo dan habitatnya." },
  },
  {
    id: "padar", name: "Padar Island", area: "Komodo National Park", latitude: -8.6540, longitude: 119.5800,
    category: { en: "Island landscape", id: "Lanskap kepulauan" },
    description: { en: "An island known for its hilltop viewpoint over several curved bays and contrasting beaches.", id: "Pulau dengan titik pandang di puncak bukit yang menghadap teluk-teluk melengkung dan pantai dengan warna berbeda." },
  },
  {
    id: "komodo", name: "Komodo Island", area: "Komodo National Park", latitude: -8.5890, longitude: 119.4890,
    category: { en: "Wildlife and conservation", id: "Satwa liar dan konservasi" },
    description: { en: "Part of Komodo National Park, with ranger-guided walks to observe Komodo dragons in their natural habitat.", id: "Bagian dari Taman Nasional Komodo, dengan jalur berpemandu ranger untuk mengamati komodo di habitat alaminya." },
  },
];
