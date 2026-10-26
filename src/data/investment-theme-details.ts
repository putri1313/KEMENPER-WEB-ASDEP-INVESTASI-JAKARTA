import { localizedContent } from "@/lib/localized-content";

const c = localizedContent;

export const investmentThemeDetails = {
  "Marine tourism": {
    insight: c(
      "The book identifies marine and adventure tourism as investment opportunity segments. These profiles provide regional examples rather than a ranking of projects.",
      "Buku mengidentifikasi wisata bahari dan petualangan sebagai segmen peluang investasi. Profil berikut adalah contoh kawasan, bukan peringkat proyek.",
    ),
    profileSlugs: ["labuan-bajo", "manado-likupang", "morotai-sez"],
  },
  "Nature & ecotourism": {
    insight: c(
      "The book describes nature-led and lower-impact development across priority destinations, including resort and visitor-experience concepts.",
      "Buku menggambarkan pengembangan berbasis alam dan berdampak rendah di destinasi prioritas, termasuk konsep resor dan pengalaman wisata.",
    ),
    profileSlugs: ["danau-toba", "borobudur-yogyakarta-prambanan", "labuan-bajo"],
  },
  "Wellness tourism": {
    insight: c(
      "The book names wellness and health tourism as a growth segment, with Sanur's health-focused SEZ as a concrete project profile.",
      "Buku menyebut wisata kebugaran dan kesehatan sebagai segmen pertumbuhan, dengan profil proyek KEK Sanur yang berfokus pada kesehatan.",
    ),
    profileSlugs: ["sanur-sez", "kura-kura-sez"],
  },
  "Cultural tourism": {
    insight: c(
      "The book highlights heritage-led tourism and cultural experiences, alongside investment concepts in Borobudur Highland and Singhasari.",
      "Buku menyoroti wisata warisan dan pengalaman budaya, serta konsep investasi di Borobudur Highland dan Singhasari.",
    ),
    profileSlugs: ["borobudur-yogyakarta-prambanan", "singhasari-sez", "kura-kura-sez"],
  },
  Gastronomy: {
    insight: c(
      "Restaurants are one of the largest tourism investment sectors in the book's 2024 snapshot (IDR 8.02 trillion). The book does not assign this figure to a single destination project.",
      "Restoran termasuk sektor investasi pariwisata terbesar dalam ringkasan 2024 buku (IDR 8,02 triliun). Buku tidak mengaitkan angka ini dengan satu proyek destinasi tertentu.",
    ),
    profileSlugs: ["borobudur-yogyakarta-prambanan"],
  },
  MICE: {
    insight: c(
      "The book lists MICE infrastructure and venues among the investment concepts for priority destinations and tourism zones.",
      "Buku mencantumkan infrastruktur dan venue MICE sebagai konsep investasi untuk destinasi prioritas dan kawasan pariwisata.",
    ),
    profileSlugs: ["borobudur-yogyakarta-prambanan", "lombok-gili-tramena", "sanur-sez"],
  },
  "Creative economy": {
    insight: c(
      "The book connects tourism with digital and creative industries, with Singhasari and Nongsa offering relevant zone profiles.",
      "Buku menghubungkan pariwisata dengan industri digital dan kreatif; Singhasari dan Nongsa memiliki profil kawasan yang relevan.",
    ),
    profileSlugs: ["singhasari-sez", "nongsa-sez", "kura-kura-sez"],
  },
  Hospitality: {
    insight: c(
      "Starred hotels are the largest tourism investment sector in the book's 2024 snapshot (IDR 24.61 trillion). The profiles below show examples of hotel and resort development opportunities.",
      "Hotel berbintang menjadi sektor investasi pariwisata terbesar dalam ringkasan 2024 buku (IDR 24,61 triliun). Profil berikut menunjukkan contoh peluang pengembangan hotel dan resor.",
    ),
    profileSlugs: ["danau-toba", "borobudur-yogyakarta-prambanan", "lombok-gili-tramena"],
  },
} as const;
