export type LocalizedCopy = { en: string; id: string };

export type DestinationProfile = {
  overview: LocalizedCopy;
  overviewDetails?: LocalizedCopy[];
  highlights: LocalizedCopy[];
  investmentFocus: LocalizedCopy[];
  officialTravelGuide?: {
    url: string;
    label: LocalizedCopy;
  };
};

export const destinationProfiles: Record<string, DestinationProfile> = {
  bali: {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/destination/bali-nusa-tenggara/bali/bali",
      label: { en: "Visit Bali", id: "Kunjungi Bali" },
    },
    overview: {
      en: "Bali brings together coastal landscapes, highland scenery, living cultural traditions, and established visitor services. The destination can support investment that improves quality, spreads benefits across communities, and protects the character of each place.",
      id: "Bali memadukan lanskap pesisir, kawasan dataran tinggi, tradisi budaya yang hidup, dan layanan wisata yang telah berkembang. Destinasi ini dapat mendukung investasi yang meningkatkan kualitas, memperluas manfaat bagi masyarakat, dan menjaga karakter setiap kawasan.",
    },
    highlights: [
      { en: "Ubud and its cultural landscape", id: "Ubud dan lanskap budayanya" },
      { en: "Tanah Lot and the west coast", id: "Tanah Lot dan pesisir barat" },
      { en: "Uluwatu and the southern peninsula", id: "Uluwatu dan semenanjung selatan" },
      { en: "Lake Beratan and Bali's highlands", id: "Danau Beratan dan dataran tinggi Bali" },
    ],
    investmentFocus: [
      { en: "Regenerative and low-impact stays", id: "Akomodasi regeneratif dan berdampak rendah" },
      { en: "Wellness and nature-based experiences", id: "Pengalaman kebugaran dan berbasis alam" },
      { en: "Community-led culture and creative economy", id: "Budaya berbasis masyarakat dan ekonomi kreatif" },
    ],
  },
  "greater-jakarta": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/destination/java/jakarta/dki-jakarta",
      label: { en: "Visit Jakarta", id: "Kunjungi Jakarta" },
    },
    overview: {
      en: "Greater Jakarta combines Indonesia's main business centre with urban heritage, museums, entertainment, culinary experiences, and meeting facilities. Its opportunity is to connect these assets into accessible, year-round visitor experiences.",
      id: "Greater Jakarta memadukan pusat bisnis utama Indonesia dengan warisan perkotaan, museum, hiburan, pengalaman kuliner, dan fasilitas pertemuan. Peluangnya adalah menghubungkan aset-aset tersebut menjadi pengalaman wisata yang mudah dijangkau sepanjang tahun.",
    },
    highlights: [
      { en: "Monas and the central civic district", id: "Monas dan kawasan pusat pemerintahan" },
      { en: "Kota Tua Jakarta", id: "Kota Tua Jakarta" },
      { en: "Ancol waterfront", id: "Kawasan tepi laut Ancol" },
      { en: "Taman Mini Indonesia Indah", id: "Taman Mini Indonesia Indah" },
    ],
    investmentFocus: [
      { en: "Meetings, incentives, conferences, and exhibitions", id: "Pertemuan, insentif, konferensi, dan pameran" },
      { en: "Urban heritage and cultural experiences", id: "Warisan perkotaan dan pengalaman budaya" },
      { en: "Visitor services, hospitality, and gastronomy", id: "Layanan wisata, perhotelan, dan gastronomi" },
    ],
  },
  "kepulauan-riau": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/gb/en/destination/sumatra/riau-islands",
      label: { en: "Visit the Riau Islands", id: "Kunjungi Kepulauan Riau" },
    },
    overview: {
      en: "The Riau Islands are an archipelagic destination shaped by beaches, marine landscapes, island communities, and links across the region. Investment can strengthen island-hopping experiences while supporting local enterprise and responsible coastal development.",
      id: "Kepulauan Riau merupakan destinasi kepulauan dengan pantai, lanskap bahari, komunitas pulau, dan hubungan lintas kawasan. Investasi dapat memperkuat pengalaman menjelajah pulau sekaligus mendukung usaha lokal dan pengembangan pesisir yang bertanggung jawab.",
    },
    highlights: [
      { en: "Batam", id: "Batam" },
      { en: "Bintan and Lagoi", id: "Bintan dan Lagoi" },
      { en: "Tanjungpinang", id: "Tanjungpinang" },
      { en: "Pulau Penyengat", id: "Pulau Penyengat" },
    ],
    investmentFocus: [
      { en: "Marine and island experiences", id: "Pengalaman bahari dan kepulauan" },
      { en: "Coastal facilities and visitor services", id: "Fasilitas pesisir dan layanan wisata" },
      { en: "Sustainable accommodation and wellness", id: "Akomodasi berkelanjutan dan kebugaran" },
    ],
  },
  "danau-toba": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/destination/sumatra/north-sumatra/lake-toba-the-wonder-of-the-lake-in-north-sumatra0",
      label: { en: "Visit Lake Toba", id: "Kunjungi Danau Toba" },
    },
    overview: {
      en: "Lake Toba is the largest volcanic lake in the world and the second largest lake in the world after Victoria Lake in Africa. It is one out often deepest lakes in the world, reaching around 500 metres depth. Samosir Island in the middle of Lake Toba has area of 64.000 hectares or equals to country of Singapore.",
      id: "Danau Toba adalah danau vulkanik terbesar di dunia dan danau terbesar kedua di dunia setelah Danau Victoria di Afrika. Danau ini merupakan salah satu dari sepuluh danau terdalam di dunia, dengan kedalaman mencapai sekitar 500 meter. Pulau Samosir yang terletak di tengah Danau Toba memiliki luas 64.000 hektare, atau setara dengan luas negara Singapura.",
    },
    overviewDetails: [
      {
        en: "Toba Caldera Resort is an eco-tourism destination developed by the Lake Toba Authority Implementing Agency (BPODT). The 386.72-hectare area is part of Indonesia's Super Priority Tourism Destinations program, with government support for its development.",
        id: "Toba Caldera Resort merupakan destinasi ekowisata yang dikembangkan oleh Badan Pelaksana Otorita Danau Toba (BPODT). Kawasan seluas 386,72 hektare ini termasuk dalam program Destinasi Pariwisata Super Prioritas Indonesia dan mendapat dukungan pemerintah untuk pengembangannya.",
      },
      {
        en: "UNESCO's Executive Board designated Toba Caldera as a UNESCO Global Geopark in 2020. Development of the resort area aims to strengthen the socio-economic well-being of surrounding communities through empowerment, training, and participation in the tourism industry.",
        id: "Dewan Eksekutif UNESCO menetapkan Kaldera Toba sebagai UNESCO Global Geopark pada 2020. Pengembangan kawasan resort ini bertujuan memperkuat kondisi sosial ekonomi masyarakat sekitar melalui pemberdayaan, pelatihan, dan keterlibatan dalam industri pariwisata.",
      },
    ],
    highlights: [
      { en: "Samosir Island", id: "Pulau Samosir" },
      { en: "Bukit Holbung", id: "Bukit Holbung" },
      { en: "Hot Springs at Aek Rangat", id: "Pemandian Air Panas Aek Rangat" },
    ],
    investmentFocus: [
      { en: "Main Investment Opportinities", id: "Kesempatan Investasi Utama" },
      { en: "Cultural tourism and local products", id: "Wisata budaya dan produk lokal" },
      { en: "Accommodation and destination amenities", id: "Akomodasi dan amenitas destinasi" },
    ],
  },
  "lombok-gili-tramena": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/destination/bali-nusa-tenggara/west-nusa-tenggara/lombok---mandalika",
      label: { en: "Visit Lombok and Mandalika", id: "Kunjungi Lombok dan Mandalika" },
    },
    overview: {
      en: "Lombok and the Gili islands offer a mix of beaches, marine activities, rural landscapes, and Sasak culture. The wider destination includes Mandalika as well as island experiences, creating room for connected and sustainable visitor journeys.",
      id: "Lombok dan Kepulauan Gili menawarkan perpaduan pantai, aktivitas bahari, lanskap perdesaan, dan budaya Sasak. Kawasan yang lebih luas mencakup Mandalika dan pengalaman kepulauan, sehingga membuka peluang perjalanan wisata yang saling terhubung dan berkelanjutan.",
    },
    highlights: [
      { en: "Mandalika and Kuta Lombok", id: "Mandalika dan Kuta Lombok" },
      { en: "Tanjung Aan", id: "Tanjung Aan" },
      { en: "Desa Sade", id: "Desa Sade" },
      { en: "Gili Trawangan, Gili Meno, and Gili Air", id: "Gili Trawangan, Gili Meno, dan Gili Air" },
    ],
    investmentFocus: [
      { en: "Marine recreation and island services", id: "Rekreasi bahari dan layanan kepulauan" },
      { en: "Wellness and sustainable accommodation", id: "Kebugaran dan akomodasi berkelanjutan" },
      { en: "Culture-led visitor experiences", id: "Pengalaman wisata berbasis budaya" },
    ],
  },
  "borobudur-yogyakarta-prambanan": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/destination/java/central-java/magelang-regency---borobudur",
      label: {
        en: "Visit Borobudur",
        id: "Kunjungi Borobudur",
      },
    },
    overview: {
      en: "Borobudur, Yogyakarta, and Prambanan form a connected cultural landscape spanning major heritage sites, a living creative city, and surrounding communities. Investment can improve visitor circulation and create meaningful experiences while respecting heritage values.",
      id: "Borobudur, Yogyakarta, dan Prambanan membentuk lanskap budaya yang saling terhubung, mencakup situs warisan utama, kota kreatif yang hidup, serta masyarakat di sekitarnya. Investasi dapat meningkatkan pergerakan wisatawan dan menghadirkan pengalaman bermakna dengan tetap menghormati nilai warisan.",
    },
    highlights: [
      { en: "Borobudur Temple", id: "Candi Borobudur" },
      { en: "Yogyakarta and the Kraton", id: "Yogyakarta dan Keraton" },
      { en: "Prambanan Temple", id: "Candi Prambanan" },
      { en: "Ratu Boko", id: "Ratu Boko" },
    ],
    investmentFocus: [
      { en: "Heritage interpretation and cultural experiences", id: "Interpretasi warisan dan pengalaman budaya" },
      { en: "Creative economy and local craftsmanship", id: "Ekonomi kreatif dan kerajinan lokal" },
      { en: "Visitor facilities and regional circuits", id: "Fasilitas wisata dan sirkuit regional" },
    ],
  },
  "labuan-bajo": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/destination/bali-nusa-tenggara/east-nusa-tenggara/labuan-bajo",
      label: { en: "Visit Labuan Bajo", id: "Kunjungi Labuan Bajo" },
    },
    overview: {
      en: "Labuan Bajo is a coastal gateway to the islands and marine landscapes of Komodo National Park. The destination pairs boat-based nature experiences with the town's role as a service and arrival hub for East Nusa Tenggara.",
      id: "Labuan Bajo merupakan gerbang pesisir menuju pulau-pulau dan lanskap bahari Taman Nasional Komodo. Destinasi ini memadukan pengalaman alam berbasis kapal dengan peran kota sebagai pusat layanan dan kedatangan di Nusa Tenggara Timur.",
    },
    highlights: [
      { en: "Labuan Bajo waterfront", id: "Kawasan tepi laut Labuan Bajo" },
      { en: "Komodo Island", id: "Pulau Komodo" },
      { en: "Padar Island", id: "Pulau Padar" },
      { en: "Kanawa Island", id: "Pulau Kanawa" },
    ],
    investmentFocus: [
      { en: "Marine and nature-based visitor experiences", id: "Pengalaman wisata bahari dan berbasis alam" },
      { en: "Responsible boat and destination services", id: "Layanan kapal dan destinasi yang bertanggung jawab" },
      { en: "Quality accommodation and local supply chains", id: "Akomodasi berkualitas dan rantai pasok lokal" },
    ],
  },
  "manado-likupang": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/news-update/likupang-rebound-semangat-terapkan-protokol-kesehatan-di-sulawesi-utara",
      label: { en: "Visit Likupang", id: "Kunjungi Likupang" },
    },
    overview: {
      en: "Manado and Likupang connect an established urban gateway with northern Sulawesi's coastal and island settings. Marine recreation, local food, and nature experiences can be developed as a broader regional itinerary.",
      id: "Manado dan Likupang menghubungkan gerbang perkotaan yang telah berkembang dengan kawasan pesisir dan kepulauan di Sulawesi Utara. Rekreasi bahari, kuliner lokal, dan pengalaman alam dapat dikembangkan sebagai rangkaian perjalanan regional.",
    },
    highlights: [
      { en: "Manado and Bunaken", id: "Manado dan Bunaken" },
      { en: "Likupang", id: "Likupang" },
      { en: "Pulisan coast", id: "Pesisir Pulisan" },
      { en: "Lihaga and Gangga islands", id: "Pulau Lihaga dan Gangga" },
    ],
    investmentFocus: [
      { en: "Marine recreation and coastal experiences", id: "Rekreasi bahari dan pengalaman pesisir" },
      { en: "Nature-based accommodation", id: "Akomodasi berbasis alam" },
      { en: "Gastronomy and local tourism enterprises", id: "Gastronomi dan usaha pariwisata lokal" },
    ],
  },
  "bromo-tengger-semeru": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/gb/en/destination/java/east-java/bromo-tengger-semeru-national-park",
      label: { en: "Visit Bromo Tengger Semeru", id: "Kunjungi Bromo Tengger Semeru" },
    },
    overview: {
      en: "Bromo-Tengger-Semeru is a volcanic mountain landscape known for dramatic highland scenery and Tengger cultural heritage. Destination development can focus on visitor management, community participation, and nature-based experiences across the wider area.",
      id: "Bromo-Tengger-Semeru merupakan lanskap pegunungan vulkanik dengan panorama dataran tinggi dan warisan budaya Tengger. Pengembangan destinasi dapat berfokus pada pengelolaan wisatawan, partisipasi masyarakat, dan pengalaman berbasis alam di kawasan yang lebih luas.",
    },
    highlights: [
      { en: "Mount Bromo and the sea of sand", id: "Gunung Bromo dan lautan pasir" },
      { en: "Penanjakan viewpoints", id: "Titik pandang Penanjakan" },
      { en: "Tengger villages", id: "Desa-desa Tengger" },
      { en: "Madakaripura waterfall", id: "Air Terjun Madakaripura" },
    ],
    investmentFocus: [
      { en: "Nature-based experiences and guiding", id: "Pengalaman berbasis alam dan jasa pemandu" },
      { en: "Community-led tourism services", id: "Layanan wisata berbasis masyarakat" },
      { en: "Low-impact visitor facilities", id: "Fasilitas wisata berdampak rendah" },
    ],
  },
  "raja-ampat": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/Recycle-Bin/travel-ideas-old/raja-ampat-heaven-on-earth",
      label: { en: "Visit Raja Ampat", id: "Kunjungi Raja Ampat" },
    },
    overview: {
      en: "Raja Ampat is an island destination in Southwest Papua, valued for its marine and island environments and the communities who live across the archipelago. Tourism development should support careful resource stewardship and locally grounded visitor services.",
      id: "Raja Ampat merupakan destinasi kepulauan di Papua Barat Daya yang dikenal dengan lingkungan bahari dan pulau-pulaunya serta masyarakat yang tinggal di seluruh kawasan. Pengembangan pariwisata perlu mendukung penjagaan sumber daya dan layanan wisata yang berakar pada masyarakat setempat.",
    },
    highlights: [
      { en: "Waigeo", id: "Waigeo" },
      { en: "Piaynemo", id: "Piaynemo" },
      { en: "Arborek village", id: "Kampung Arborek" },
      { en: "Wayag", id: "Wayag" },
    ],
    investmentFocus: [
      { en: "Marine conservation and visitor experiences", id: "Konservasi bahari dan pengalaman wisata" },
      { en: "Community-based island stays", id: "Akomodasi kepulauan berbasis masyarakat" },
      { en: "Responsible transport and local services", id: "Transportasi bertanggung jawab dan layanan lokal" },
    ],
  },
  "bangka-belitung": {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/news-update/tanjung-kelayang-belitung-tourism-sez-takes-off",
      label: { en: "Visit Bangka Belitung", id: "Kunjungi Bangka Belitung" },
    },
    overview: {
      en: "Bangka Belitung combines island coastlines, granite formations, beaches, and maritime culture. The destination offers opportunities to strengthen marine and cultural experiences while improving connections between visitor areas and local businesses.",
      id: "Bangka Belitung memadukan pesisir kepulauan, formasi batu granit, pantai, dan budaya maritim. Destinasi ini memiliki peluang untuk memperkuat pengalaman bahari dan budaya sekaligus meningkatkan keterhubungan kawasan wisata dengan usaha lokal.",
    },
    highlights: [
      { en: "Tanjung Tinggi", id: "Tanjung Tinggi" },
      { en: "Tanjung Kelayang", id: "Tanjung Kelayang" },
      { en: "Lengkuas Island", id: "Pulau Lengkuas" },
      { en: "Parai Tenggiri", id: "Parai Tenggiri" },
    ],
    investmentFocus: [
      { en: "Coastal and island experiences", id: "Pengalaman pesisir dan kepulauan" },
      { en: "Marine tourism and local food", id: "Pariwisata bahari dan kuliner lokal" },
      { en: "Sustainable accommodation and amenities", id: "Akomodasi dan amenitas berkelanjutan" },
    ],
  },
  wakatobi: {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/gb/en/destination/sulawesi/southeast-sulawesi/wakatobi",
      label: { en: "Visit Wakatobi", id: "Kunjungi Wakatobi" },
    },
    overview: {
      en: "Wakatobi is an island and marine destination in Southeast Sulawesi, with visitor experiences distributed across its island communities. Investment can strengthen responsible marine tourism, local services, and the quality of inter-island visitor journeys.",
      id: "Wakatobi merupakan destinasi kepulauan dan bahari di Sulawesi Tenggara, dengan pengalaman wisata yang tersebar di komunitas pulau-pulaunya. Investasi dapat memperkuat wisata bahari yang bertanggung jawab, layanan lokal, dan kualitas perjalanan antarpulau.",
    },
    highlights: [
      { en: "Wangi-Wangi", id: "Wangi-Wangi" },
      { en: "Kaledupa and Hoga", id: "Kaledupa dan Hoga" },
      { en: "Tomia", id: "Tomia" },
      { en: "Binongko", id: "Binongko" },
    ],
    investmentFocus: [
      { en: "Responsible diving and marine experiences", id: "Penyelaman dan pengalaman bahari yang bertanggung jawab" },
      { en: "Inter-island visitor services", id: "Layanan wisata antarpulau" },
      { en: "Community-led accommodation and guiding", id: "Akomodasi dan pemanduan berbasis masyarakat" },
    ],
  },
  morotai: {
    officialTravelGuide: {
      url: "https://www.indonesia.travel/sg/en/events/event-detail/morotai-festival",
      label: { en: "Visit Morotai", id: "Kunjungi Morotai" },
    },
    overview: {
      en: "Morotai is a northern Maluku island destination with coastal landscapes, marine experiences, and World War II heritage. Its development can connect nature and history while expanding visitor services with local participation.",
      id: "Morotai merupakan destinasi kepulauan di Maluku Utara dengan lanskap pesisir, pengalaman bahari, dan peninggalan Perang Dunia II. Pengembangannya dapat menghubungkan alam dan sejarah sekaligus memperluas layanan wisata dengan partisipasi masyarakat lokal.",
    },
    highlights: [
      { en: "Daruba", id: "Daruba" },
      { en: "Dodola islands", id: "Kepulauan Dodola" },
      { en: "World War II heritage sites", id: "Situs peninggalan Perang Dunia II" },
      { en: "Morotai's northern coastline", id: "Pesisir utara Morotai" },
    ],
    investmentFocus: [
      { en: "Marine and island experiences", id: "Pengalaman bahari dan kepulauan" },
      { en: "Heritage interpretation", id: "Interpretasi warisan sejarah" },
      { en: "Local visitor services and accommodation", id: "Layanan wisata lokal dan akomodasi" },
    ],
  },
};
