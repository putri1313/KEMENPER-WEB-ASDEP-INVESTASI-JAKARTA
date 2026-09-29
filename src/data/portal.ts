import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import marine from "@/assets/indonesia-marine.jpg";
import urban from "@/assets/indonesia-urban.jpg";

export type DestinationType = "regenerative" | "priority";
export type Destination = {
  id: number; name: string; slug: string; type: DestinationType; region: string;
  description: string; image: string; tourismThemes: string[]; investmentSectors: string[];
  connectivity: string; opportunities: string[];
};

const regen = [
  ["Bali", "bali", "Bali, Indonesia", "A globally recognized tourism destination with opportunities for sustainable, high-value, and regenerative tourism development.", aerial, ["Sustainable Tourism", "Wellness", "Culture", "Marine Tourism", "Hospitality", "Creative Economy"]],
  ["Greater Jakarta", "greater-jakarta", "Greater Jakarta", "A major metropolitan tourism ecosystem with strong connectivity, business activity, urban tourism, MICE, and creative economy potential.", urban, ["Urban Tourism", "MICE", "Business Tourism", "Creative Economy", "Gastronomy", "Hospitality"]],
  ["Kepulauan Riau", "kepulauan-riau", "Riau Islands, Indonesia", "A strategic archipelagic tourism region with marine, island, coastal, and cross-border tourism opportunities.", marine, ["Marine Tourism", "Island Tourism", "Coastal Tourism", "Resort Development", "Wellness", "Hospitality"]],
] as const;

const priority = [
  ["Danau Toba", "danau-toba", "North Sumatra", ["Nature", "Culture", "Lake Tourism"], aerial],
  ["Lombok–Gili Tramena", "lombok-gili-tramena", "West Nusa Tenggara", ["Marine Tourism", "Wellness", "Nature"], marine],
  ["Borobudur–Yogyakarta–Prambanan", "borobudur-yogyakarta-prambanan", "Central Java & Special Region of Yogyakarta", ["Culture", "Heritage", "Creative Economy"], culture],
  ["Labuan Bajo", "labuan-bajo", "East Nusa Tenggara", ["Marine Tourism", "Nature", "Adventure"], aerial],
  ["Manado–Likupang", "manado-likupang", "North Sulawesi", ["Marine Tourism", "Nature", "Gastronomy"], marine],
  ["Bromo–Tengger–Semeru", "bromo-tengger-semeru", "East Java", ["Nature", "Adventure", "Culture"], culture],
  ["Raja Ampat", "raja-ampat", "Southwest Papua", ["Marine Tourism", "Nature", "Adventure"], marine],
  ["Bangka Belitung", "bangka-belitung", "Bangka Belitung Islands", ["Marine Tourism", "Culture", "Nature"], aerial],
  ["Wakatobi", "wakatobi", "Southeast Sulawesi", ["Marine Tourism", "Nature", "Culture"], marine],
  ["Morotai", "morotai", "North Maluku", ["Marine Tourism", "Heritage", "Adventure"], aerial],
] as const;

export const destinations: Destination[] = [
  ...regen.map(([name, slug, region, description, image, tourismThemes], index) => ({
    id: index + 1, name, slug, type: "regenerative" as const, region, description, image,
    tourismThemes: [...tourismThemes],
    investmentSectors: ["Accommodation", "Tourism Attractions", "Wellness Tourism", "Gastronomy", "Creative Economy"],
    connectivity: "Connectivity information coming soon.",
    opportunities: ["Sustainable visitor experiences", "Destination amenities", "Community-based tourism"],
  })),
  ...priority.map(([name, slug, region, tourismThemes, image], index) => ({
    id: index + 4, name, slug, type: "priority" as const, region,
    description: `A strategic tourism destination in ${region} with distinctive ${tourismThemes.slice(0, 2).join(" and ").toLowerCase()} potential. Detailed official destination information is coming soon.`,
    image, tourismThemes: [...tourismThemes],
    investmentSectors: ["Accommodation", "Tourism Attractions", ...(tourismThemes.includes("Marine Tourism") ? ["Marine Tourism"] : []), "Gastronomy"],
    connectivity: "Connectivity information coming soon.",
    opportunities: ["Destination amenities", "Sustainable accommodation", "Visitor experiences"],
  })),
];

export const regenerativeDestinations = destinations.filter((d) => d.type === "regenerative");
export const priorityDestinations = destinations.filter((d) => d.type === "priority");

export const themes = [
  { title: "Marine Tourism", description: "Coastal, island, and water-based destination development.", image: marine },
  { title: "Nature & Ecotourism", description: "Low-impact experiences shaped by Indonesia’s natural diversity.", image: aerial },
  { title: "Wellness Tourism", description: "Restorative experiences rooted in place, nature, and culture.", image: culture },
  { title: "Cultural Tourism", description: "Heritage-led experiences supporting living traditions.", image: culture },
  { title: "Gastronomy", description: "Culinary destinations and regionally distinctive food experiences.", image: urban },
  { title: "MICE", description: "Meetings, incentives, conferences, and exhibitions infrastructure.", image: urban },
  { title: "Creative Economy", description: "Design, craft, performance, and locally made tourism products.", image: culture },
  { title: "Hospitality", description: "Quality accommodation across urban, island, and nature settings.", image: aerial },
];

export const sampleOpportunities = [
  { name: "Sustainable Waterfront Destination", destination: "Kepulauan Riau", type: "Regenerative", sector: "Marine Tourism", investmentType: "Development partnership", status: "Sample Project", image: marine },
  { name: "Integrated Wellness Retreat", destination: "Bali", type: "Regenerative", sector: "Wellness", investmentType: "Private investment", status: "Sample Project", image: aerial },
  { name: "Heritage Visitor Experience", destination: "Borobudur–Yogyakarta–Prambanan", type: "Priority", sector: "Cultural Tourism", investmentType: "Development partnership", status: "Sample Project", image: culture },
  { name: "Urban Convention District", destination: "Greater Jakarta", type: "Regenerative", sector: "MICE", investmentType: "Private investment", status: "Sample Project", image: urban },
];

export const publications = [
  { category: "National investment", date: "January 2026", title: "Indonesia’s Investment Performance — 2025 Annual Review", excerpt: "National investment realization reached Rp1,931.2 trillion in 2025, exceeding the annual target. These figures cover all sectors, not tourism alone.", image: urban, pdf: "/newsletters/2025-investment-review.pdf", source: "https://www.bkpm.go.id/id/info/siaran-pers/realisasi-investasi-2025-lampaui-target-hilirisasi-melompat-43-3-persen" },
  { category: "Tourism investment data", date: "Updated July 2026", title: "Tourism Sector Investment Data — 2025", excerpt: "Explore the official open dataset with quarterly and regional views of tourism investment reported through LKPM.", image: marine, pdf: "/newsletters/tourism-investment-data-guide.pdf", source: "https://data.bkpm.go.id/dataset-detail/nilai-investasi-sektor-pariwisata-tahun-2025" },
  { category: "Destination spotlight", date: "Official project information", title: "Nusantara: Investment & Tourism Development Pathways", excerpt: "A guide to the official investment portal and the cross-sector infrastructure shaping Nusantara’s development.", image: aerial, pdf: "/newsletters/nusantara-investment-pathways.pdf", source: "https://ikn.go.id/id/investasi" },
];
