import type { TourismMapPoint } from "@/data/map-point";

export const riauIslandsMapPoints: readonly TourismMapPoint[] = [
  {
    id: "batam",
    name: "Batam",
    area: "Batam City, Riau Islands",
    latitude: 1.1301,
    longitude: 104.053,
    category: { en: "Urban and marine gateway", id: "Gerbang perkotaan dan bahari" },
    description: {
      en: "An island city with waterfront districts, resorts, and ferry links across the Riau Islands.",
      id: "Kota pulau dengan kawasan tepi laut, resor, dan koneksi feri antarpulau di Kepulauan Riau.",
    },
  },
  {
    id: "lagoi",
    name: "Bintan and Lagoi",
    area: "Bintan Regency, Riau Islands",
    latitude: 1.177,
    longitude: 104.36,
    category: { en: "Island resort area", id: "Kawasan resor kepulauan" },
    description: {
      en: "A northern Bintan coastal area known for beach resorts and marine recreation.",
      id: "Kawasan pesisir utara Bintan yang dikenal dengan resor pantai dan rekreasi bahari.",
    },
  },
  {
    id: "tanjungpinang",
    name: "Tanjungpinang",
    area: "Bintan Island, Riau Islands",
    latitude: 0.9185,
    longitude: 104.448,
    category: { en: "Cultural and historic city", id: "Kota budaya dan sejarah" },
    description: {
      en: "The provincial capital and a visitor base for the historic and cultural sites of Bintan.",
      id: "Ibu kota provinsi dan titik awal untuk mengunjungi situs sejarah serta budaya di Bintan.",
    },
  },
  {
    id: "penyengat",
    name: "Pulau Penyengat",
    area: "Tanjungpinang, Riau Islands",
    latitude: 0.925,
    longitude: 104.331,
    category: { en: "Malay cultural heritage", id: "Warisan budaya Melayu" },
    description: {
      en: "A small island associated with Malay royal history, literature, and religious heritage.",
      id: "Pulau kecil yang berkaitan dengan sejarah kerajaan Melayu, sastra, dan warisan keagamaan.",
    },
  },
];

export const bromoMapPoints: readonly TourismMapPoint[] = [
  {
    id: "mount-bromo",
    name: "Mount Bromo and the Sea of Sand",
    area: "Bromo Tengger Semeru National Park, East Java",
    latitude: -7.9425,
    longitude: 112.953,
    category: { en: "Volcanic landscape", id: "Lanskap vulkanik" },
    description: {
      en: "An active volcano rising above a broad volcanic sand plain in Bromo Tengger Semeru National Park.",
      id: "Gunung api aktif yang menjulang di atas hamparan lautan pasir di Taman Nasional Bromo Tengger Semeru.",
    },
  },
  {
    id: "penanjakan",
    name: "Penanjakan Viewpoint",
    area: "Bromo Tengger Semeru National Park, East Java",
    latitude: -7.8967,
    longitude: 112.9225,
    category: { en: "Mountain viewpoint", id: "Titik pandang pegunungan" },
    description: {
      en: "A highland viewpoint overlooking the Bromo caldera and surrounding volcanic peaks.",
      id: "Titik pandang dataran tinggi yang menghadap kaldera Bromo dan puncak-puncak gunung di sekitarnya.",
    },
  },
  {
    id: "tengger-villages",
    name: "Tengger Villages",
    area: "Probolinggo and Pasuruan, East Java",
    latitude: -7.9297,
    longitude: 112.9655,
    category: { en: "Living culture", id: "Budaya yang hidup" },
    description: {
      en: "Mountain communities whose Tengger traditions are closely connected with the surrounding landscape.",
      id: "Komunitas pegunungan dengan tradisi Tengger yang erat kaitannya dengan lanskap di sekitarnya.",
    },
  },
  {
    id: "madakaripura",
    name: "Madakaripura Waterfall",
    area: "Lumbang, Probolinggo, East Java",
    latitude: -7.856,
    longitude: 113.023,
    category: { en: "Nature and waterfall", id: "Alam dan air terjun" },
    description: {
      en: "A tall waterfall set within a steep, green-sided gorge in the Probolinggo highlands.",
      id: "Air terjun tinggi di dalam ngarai terjal yang dikelilingi tebing hijau di dataran tinggi Probolinggo.",
    },
  },
];

export const rajaAmpatMapPoints: readonly TourismMapPoint[] = [
  {
    id: "waigeo",
    name: "Waigeo Island",
    area: "Raja Ampat, Southwest Papua",
    latitude: -0.23,
    longitude: 130.72,
    category: { en: "Island gateway", id: "Gerbang kepulauan" },
    description: {
      en: "The largest of the Raja Ampat islands and a base for marine, village, and nature visits.",
      id: "Pulau terbesar di Raja Ampat dan titik awal untuk wisata bahari, desa, dan alam.",
    },
  },
  {
    id: "piaynemo",
    name: "Piaynemo",
    area: "Fam Islands, Raja Ampat",
    latitude: -0.56,
    longitude: 130.258,
    category: { en: "Karst island viewpoint", id: "Titik pandang pulau karst" },
    description: {
      en: "A viewpoint above a cluster of small karst islets and sheltered turquoise lagoons.",
      id: "Titik pandang di atas gugusan pulau karst kecil dan laguna biru kehijauan.",
    },
  },
  {
    id: "arborek",
    name: "Arborek Village",
    area: "Meos Mansar, Raja Ampat",
    latitude: -0.5881,
    longitude: 130.233,
    category: { en: "Community and marine tourism", id: "Wisata masyarakat dan bahari" },
    description: {
      en: "A small island village known for community-based visitor experiences and nearby reef life.",
      id: "Desa pulau kecil yang dikenal dengan pengalaman wisata berbasis masyarakat dan kehidupan terumbu di sekitarnya.",
    },
  },
  {
    id: "wayag",
    name: "Wayag Islands",
    area: "North Raja Ampat, Southwest Papua",
    latitude: 0.16,
    longitude: 130.02,
    category: { en: "Marine and island landscape", id: "Lanskap bahari dan kepulauan" },
    description: {
      en: "A remote island group with steep karst formations, clear lagoons, and panoramic viewpoints.",
      id: "Gugusan pulau terpencil dengan formasi karst terjal, laguna jernih, dan titik pandang panorama.",
    },
  },
];

export const bangkaBelitungMapPoints: readonly TourismMapPoint[] = [
  {
    id: "tanjung-tinggi",
    name: "Tanjung Tinggi Beach",
    area: "Sijuk, Belitung Regency",
    latitude: -2.566,
    longitude: 107.673,
    category: { en: "Granite coast", id: "Pesisir granit" },
    description: {
      en: "A white-sand bay framed by large granite boulders on Belitung's northern coast.",
      id: "Teluk berpasir putih yang dibingkai batu granit besar di pesisir utara Belitung.",
    },
  },
  {
    id: "tanjung-kelayang",
    name: "Tanjung Kelayang",
    area: "Sijuk, Belitung Regency",
    latitude: -2.559,
    longitude: 107.676,
    category: { en: "Coastal and island gateway", id: "Gerbang pesisir dan kepulauan" },
    description: {
      en: "A coastal tourism area and boat departure point for the nearby Belitung islands.",
      id: "Kawasan wisata pesisir dan titik keberangkatan perahu menuju pulau-pulau di sekitar Belitung.",
    },
  },
  {
    id: "lengkuas",
    name: "Lengkuas Island",
    area: "Belitung Islands",
    latitude: -2.537,
    longitude: 107.628,
    category: { en: "Island and lighthouse heritage", id: "Pulau dan warisan mercusuar" },
    description: {
      en: "A small island known for its historic lighthouse, granite shoreline, and clear water.",
      id: "Pulau kecil yang dikenal dengan mercusuar bersejarah, pesisir granit, dan air jernih.",
    },
  },
  {
    id: "parai",
    name: "Parai Tenggiri Beach",
    area: "Sungailiat, Bangka Regency",
    latitude: -1.84,
    longitude: 106.122,
    category: { en: "Beach and marine recreation", id: "Pantai dan rekreasi bahari" },
    description: {
      en: "A resort beach on Bangka's northeastern coast, with pale sand and granite rock formations.",
      id: "Pantai resor di pesisir timur laut Bangka dengan pasir cerah dan formasi batu granit.",
    },
  },
];

export const wakatobiMapPoints: readonly TourismMapPoint[] = [
  {
    id: "wangi-wangi",
    name: "Wangi-Wangi",
    area: "Wakatobi, Southeast Sulawesi",
    latitude: -5.3,
    longitude: 123.55,
    category: { en: "Island gateway and diving", id: "Gerbang pulau dan penyelaman" },
    description: {
      en: "The main gateway island for exploring Wakatobi's reefs, coastal communities, and marine park.",
      id: "Pulau gerbang utama untuk menjelajahi terumbu, masyarakat pesisir, dan taman laut Wakatobi.",
    },
  },
  {
    id: "kaledupa-hoga",
    name: "Kaledupa and Hoga Island",
    area: "Wakatobi, Southeast Sulawesi",
    latitude: -5.48,
    longitude: 123.77,
    category: { en: "Island and reef experience", id: "Pengalaman pulau dan terumbu" },
    description: {
      en: "A pair of island destinations known for reef environments, coastal villages, and low-key stays.",
      id: "Rangkaian destinasi pulau yang dikenal dengan lingkungan terumbu, desa pesisir, dan penginapan bersuasana tenang.",
    },
  },
  {
    id: "tomia",
    name: "Tomia Island",
    area: "Wakatobi, Southeast Sulawesi",
    latitude: -5.73,
    longitude: 124.03,
    category: { en: "Diving and island landscape", id: "Penyelaman dan lanskap pulau" },
    description: {
      en: "An island base for accessing Wakatobi's reefs and clear-water marine landscapes.",
      id: "Pulau yang menjadi titik akses ke terumbu dan lanskap bahari berair jernih di Wakatobi.",
    },
  },
  {
    id: "binongko",
    name: "Binongko Island",
    area: "Wakatobi, Southeast Sulawesi",
    latitude: -5.98,
    longitude: 124.05,
    category: { en: "Island culture and coast", id: "Budaya pulau dan pesisir" },
    description: {
      en: "The southern island of the Wakatobi chain, with coastal settlements and distinctive local traditions.",
      id: "Pulau paling selatan dalam gugusan Wakatobi, dengan permukiman pesisir dan tradisi lokal yang khas.",
    },
  },
];

export const morotaiMapPoints: readonly TourismMapPoint[] = [
  {
    id: "daruba",
    name: "Daruba",
    area: "Morotai, North Maluku",
    latitude: 2.048,
    longitude: 128.294,
    category: { en: "Island town and visitor gateway", id: "Kota pulau dan gerbang wisata" },
    description: {
      en: "Morotai's main town and service centre for trips around the island and nearby islets.",
      id: "Kota utama Morotai dan pusat layanan perjalanan mengelilingi pulau serta pulau-pulau kecil di sekitarnya.",
    },
  },
  {
    id: "dodola",
    name: "Dodola Islands",
    area: "Morotai, North Maluku",
    latitude: 2.067,
    longitude: 128.339,
    category: { en: "Marine and island landscape", id: "Lanskap bahari dan kepulauan" },
    description: {
      en: "A pair of small islands known for clear water, white-sand shores, and a connecting sandbar at low tide.",
      id: "Dua pulau kecil yang dikenal dengan air jernih, pantai pasir putih, dan gosong penghubung saat air surut.",
    },
  },
  {
    id: "wawama",
    name: "Wawama World War II Wreck Site",
    area: "Morotai, North Maluku",
    latitude: 2.016,
    longitude: 128.224,
    category: {
      en: "World War II heritage and diving",
      id: "Warisan Perang Dunia II dan penyelaman",
    },
    description: {
      en: "An underwater heritage site associated with Morotai's role in the Pacific theatre of World War II.",
      id: "Situs warisan bawah laut yang berkaitan dengan peran Morotai dalam Perang Dunia II di Pasifik.",
    },
  },
  {
    id: "morotai-north",
    name: "Morotai Northern Coast",
    area: "Morotai, North Maluku",
    latitude: 2.2,
    longitude: 128.4,
    category: { en: "Coastal nature", id: "Alam pesisir" },
    description: {
      en: "A less-developed stretch of coastline with island scenery and marine landscapes.",
      id: "Bentang pesisir yang lebih alami dengan panorama pulau dan lanskap bahari.",
    },
  },
];
