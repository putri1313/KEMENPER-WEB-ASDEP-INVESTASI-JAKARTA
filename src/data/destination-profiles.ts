export type LocalizedCopy = { en: string; id: string };

export type DestinationProfile = {
  overview: LocalizedCopy;
  highlights: string[];
  investmentFocus: LocalizedCopy[];
};

export const destinationProfiles: Record<string, DestinationProfile> = {
  bali: {
    overview: {
      en: "Bali brings together coastal landscapes, highland scenery, living cultural traditions, and established visitor services. The destination can support investment that improves quality, spreads benefits across communities, and protects the character of each place.",
      id: "Bali memadukan lanskap pesisir, kawasan dataran tinggi, tradisi budaya yang hidup, dan layanan wisata yang telah berkembang. Destinasi ini dapat mendukung investasi yang meningkatkan kualitas, memperluas manfaat bagi masyarakat, dan menjaga karakter setiap kawasan.",
    },
    highlights: ["Ubud and its cultural landscape", "Tanah Lot and the west coast", "Uluwatu and the southern peninsula", "Lake Beratan and Bali's highlands"],
    investmentFocus: [
      { en: "Regenerative and low-impact stays", id: "Akomodasi regeneratif dan berdampak rendah" },
      { en: "Wellness and nature-based experiences", id: "Pengalaman kebugaran dan berbasis alam" },
      { en: "Community-led culture and creative economy", id: "Budaya berbasis masyarakat dan ekonomi kreatif" },
    ],
  },
  "greater-jakarta": {
    overview: {
      en: "Greater Jakarta combines Indonesia's main business centre with urban heritage, museums, entertainment, culinary experiences, and meeting facilities. Its opportunity is to connect these assets into accessible, year-round visitor experiences.",
      id: "Greater Jakarta memadukan pusat bisnis utama Indonesia dengan warisan perkotaan, museum, hiburan, pengalaman kuliner, dan fasilitas pertemuan. Peluangnya adalah menghubungkan aset-aset tersebut menjadi pengalaman wisata yang mudah dijangkau sepanjang tahun.",
    },
    highlights: ["Monas and the central civic district", "Kota Tua Jakarta", "Ancol waterfront", "Taman Mini Indonesia Indah"],
    investmentFocus: [
      { en: "Meetings, incentives, conferences, and exhibitions", id: "Pertemuan, insentif, konferensi, dan pameran" },
      { en: "Urban heritage and cultural experiences", id: "Warisan perkotaan dan pengalaman budaya" },
      { en: "Visitor services, hospitality, and gastronomy", id: "Layanan wisata, perhotelan, dan gastronomi" },
    ],
  },
  "kepulauan-riau": {
    overview: {
      en: "The Riau Islands are an archipelagic destination shaped by beaches, marine landscapes, island communities, and links across the region. Investment can strengthen island-hopping experiences while supporting local enterprise and responsible coastal development.",
      id: "Kepulauan Riau merupakan destinasi kepulauan dengan pantai, lanskap bahari, komunitas pulau, dan hubungan lintas kawasan. Investasi dapat memperkuat pengalaman menjelajah pulau sekaligus mendukung usaha lokal dan pengembangan pesisir yang bertanggung jawab.",
    },
    highlights: ["Batam", "Bintan and Lagoi", "Tanjungpinang", "Pulau Penyengat"],
    investmentFocus: [
      { en: "Marine and island experiences", id: "Pengalaman bahari dan kepulauan" },
      { en: "Coastal facilities and visitor services", id: "Fasilitas pesisir dan layanan wisata" },
      { en: "Sustainable accommodation and wellness", id: "Akomodasi berkelanjutan dan kebugaran" },
    ],
  },
  "danau-toba": {
    overview: {
      en: "Lake Toba centres on a vast volcanic lake and the cultural landscapes of North Sumatra. The destination connects lakeside towns, Samosir Island, highland viewpoints, and Batak heritage into a distinctive nature and culture journey.",
      id: "Danau Toba berpusat pada danau vulkanik yang luas dan lanskap budaya Sumatera Utara. Destinasi ini menghubungkan kota-kota tepi danau, Pulau Samosir, titik pandang dataran tinggi, dan warisan Batak dalam perjalanan alam dan budaya yang khas.",
    },
    highlights: ["Parapat", "Samosir Island and Tuktuk", "Balige", "Sipiso-piso viewpoint"],
    investmentFocus: [
      { en: "Lake and nature-based experiences", id: "Pengalaman danau dan wisata berbasis alam" },
      { en: "Cultural tourism and local products", id: "Wisata budaya dan produk lokal" },
      { en: "Accommodation and destination amenities", id: "Akomodasi dan amenitas destinasi" },
    ],
  },
  "lombok-gili-tramena": {
    overview: {
      en: "Lombok and the Gili islands offer a mix of beaches, marine activities, rural landscapes, and Sasak culture. The wider destination includes Mandalika as well as island experiences, creating room for connected and sustainable visitor journeys.",
      id: "Lombok dan Kepulauan Gili menawarkan perpaduan pantai, aktivitas bahari, lanskap perdesaan, dan budaya Sasak. Kawasan yang lebih luas mencakup Mandalika dan pengalaman kepulauan, sehingga membuka peluang perjalanan wisata yang saling terhubung dan berkelanjutan.",
    },
    highlights: ["Mandalika and Kuta Lombok", "Tanjung Aan", "Desa Sade", "Gili Trawangan, Gili Meno, and Gili Air"],
    investmentFocus: [
      { en: "Marine recreation and island services", id: "Rekreasi bahari dan layanan kepulauan" },
      { en: "Wellness and sustainable accommodation", id: "Kebugaran dan akomodasi berkelanjutan" },
      { en: "Culture-led visitor experiences", id: "Pengalaman wisata berbasis budaya" },
    ],
  },
  "borobudur-yogyakarta-prambanan": {
    overview: {
      en: "Borobudur, Yogyakarta, and Prambanan form a connected cultural landscape spanning major heritage sites, a living creative city, and surrounding communities. Investment can improve visitor circulation and create meaningful experiences while respecting heritage values.",
      id: "Borobudur, Yogyakarta, dan Prambanan membentuk lanskap budaya yang saling terhubung, mencakup situs warisan utama, kota kreatif yang hidup, serta masyarakat di sekitarnya. Investasi dapat meningkatkan pergerakan wisatawan dan menghadirkan pengalaman bermakna dengan tetap menghormati nilai warisan.",
    },
    highlights: ["Borobudur Temple", "Yogyakarta and the Kraton", "Prambanan Temple", "Ratu Boko"],
    investmentFocus: [
      { en: "Heritage interpretation and cultural experiences", id: "Interpretasi warisan dan pengalaman budaya" },
      { en: "Creative economy and local craftsmanship", id: "Ekonomi kreatif dan kerajinan lokal" },
      { en: "Visitor facilities and regional circuits", id: "Fasilitas wisata dan sirkuit regional" },
    ],
  },
  "labuan-bajo": {
    overview: {
      en: "Labuan Bajo is a coastal gateway to the islands and marine landscapes of Komodo National Park. The destination pairs boat-based nature experiences with the town's role as a service and arrival hub for East Nusa Tenggara.",
      id: "Labuan Bajo merupakan gerbang pesisir menuju pulau-pulau dan lanskap bahari Taman Nasional Komodo. Destinasi ini memadukan pengalaman alam berbasis kapal dengan peran kota sebagai pusat layanan dan kedatangan di Nusa Tenggara Timur.",
    },
    highlights: ["Labuan Bajo waterfront", "Komodo Island", "Padar Island", "Kanawa Island"],
    investmentFocus: [
      { en: "Marine and nature-based visitor experiences", id: "Pengalaman wisata bahari dan berbasis alam" },
      { en: "Responsible boat and destination services", id: "Layanan kapal dan destinasi yang bertanggung jawab" },
      { en: "Quality accommodation and local supply chains", id: "Akomodasi berkualitas dan rantai pasok lokal" },
    ],
  },
  "manado-likupang": {
    overview: {
      en: "Manado and Likupang connect an established urban gateway with northern Sulawesi's coastal and island settings. Marine recreation, local food, and nature experiences can be developed as a broader regional itinerary.",
      id: "Manado dan Likupang menghubungkan gerbang perkotaan yang telah berkembang dengan kawasan pesisir dan kepulauan di Sulawesi Utara. Rekreasi bahari, kuliner lokal, dan pengalaman alam dapat dikembangkan sebagai rangkaian perjalanan regional.",
    },
    highlights: ["Manado and Bunaken", "Likupang", "Pulisan coast", "Lihaga and Gangga islands"],
    investmentFocus: [
      { en: "Marine recreation and coastal experiences", id: "Rekreasi bahari dan pengalaman pesisir" },
      { en: "Nature-based accommodation", id: "Akomodasi berbasis alam" },
      { en: "Gastronomy and local tourism enterprises", id: "Gastronomi dan usaha pariwisata lokal" },
    ],
  },
  "bromo-tengger-semeru": {
    overview: {
      en: "Bromo-Tengger-Semeru is a volcanic mountain landscape known for dramatic highland scenery and Tengger cultural heritage. Destination development can focus on visitor management, community participation, and nature-based experiences across the wider area.",
      id: "Bromo-Tengger-Semeru merupakan lanskap pegunungan vulkanik dengan panorama dataran tinggi dan warisan budaya Tengger. Pengembangan destinasi dapat berfokus pada pengelolaan wisatawan, partisipasi masyarakat, dan pengalaman berbasis alam di kawasan yang lebih luas.",
    },
    highlights: ["Mount Bromo and the sea of sand", "Penanjakan viewpoints", "Tengger villages", "Madakaripura waterfall"],
    investmentFocus: [
      { en: "Nature-based experiences and guiding", id: "Pengalaman berbasis alam dan jasa pemandu" },
      { en: "Community-led tourism services", id: "Layanan wisata berbasis masyarakat" },
      { en: "Low-impact visitor facilities", id: "Fasilitas wisata berdampak rendah" },
    ],
  },
  "raja-ampat": {
    overview: {
      en: "Raja Ampat is an island destination in Southwest Papua, valued for its marine and island environments and the communities who live across the archipelago. Tourism development should support careful resource stewardship and locally grounded visitor services.",
      id: "Raja Ampat merupakan destinasi kepulauan di Papua Barat Daya yang dikenal dengan lingkungan bahari dan pulau-pulaunya serta masyarakat yang tinggal di seluruh kawasan. Pengembangan pariwisata perlu mendukung penjagaan sumber daya dan layanan wisata yang berakar pada masyarakat setempat.",
    },
    highlights: ["Waigeo", "Piaynemo", "Arborek village", "Wayag"],
    investmentFocus: [
      { en: "Marine conservation and visitor experiences", id: "Konservasi bahari dan pengalaman wisata" },
      { en: "Community-based island stays", id: "Akomodasi kepulauan berbasis masyarakat" },
      { en: "Responsible transport and local services", id: "Transportasi bertanggung jawab dan layanan lokal" },
    ],
  },
  "bangka-belitung": {
    overview: {
      en: "Bangka Belitung combines island coastlines, granite formations, beaches, and maritime culture. The destination offers opportunities to strengthen marine and cultural experiences while improving connections between visitor areas and local businesses.",
      id: "Bangka Belitung memadukan pesisir kepulauan, formasi batu granit, pantai, dan budaya maritim. Destinasi ini memiliki peluang untuk memperkuat pengalaman bahari dan budaya sekaligus meningkatkan keterhubungan kawasan wisata dengan usaha lokal.",
    },
    highlights: ["Tanjung Tinggi", "Tanjung Kelayang", "Lengkuas Island", "Parai Tenggiri"],
    investmentFocus: [
      { en: "Coastal and island experiences", id: "Pengalaman pesisir dan kepulauan" },
      { en: "Marine tourism and local food", id: "Pariwisata bahari dan kuliner lokal" },
      { en: "Sustainable accommodation and amenities", id: "Akomodasi dan amenitas berkelanjutan" },
    ],
  },
  wakatobi: {
    overview: {
      en: "Wakatobi is an island and marine destination in Southeast Sulawesi, with visitor experiences distributed across its island communities. Investment can strengthen responsible marine tourism, local services, and the quality of inter-island visitor journeys.",
      id: "Wakatobi merupakan destinasi kepulauan dan bahari di Sulawesi Tenggara, dengan pengalaman wisata yang tersebar di komunitas pulau-pulaunya. Investasi dapat memperkuat wisata bahari yang bertanggung jawab, layanan lokal, dan kualitas perjalanan antarpulau.",
    },
    highlights: ["Wangi-Wangi", "Kaledupa and Hoga", "Tomia", "Binongko"],
    investmentFocus: [
      { en: "Responsible diving and marine experiences", id: "Penyelaman dan pengalaman bahari yang bertanggung jawab" },
      { en: "Inter-island visitor services", id: "Layanan wisata antarpulau" },
      { en: "Community-led accommodation and guiding", id: "Akomodasi dan pemanduan berbasis masyarakat" },
    ],
  },
  morotai: {
    overview: {
      en: "Morotai is a northern Maluku island destination with coastal landscapes, marine experiences, and World War II heritage. Its development can connect nature and history while expanding visitor services with local participation.",
      id: "Morotai merupakan destinasi kepulauan di Maluku Utara dengan lanskap pesisir, pengalaman bahari, dan peninggalan Perang Dunia II. Pengembangannya dapat menghubungkan alam dan sejarah sekaligus memperluas layanan wisata dengan partisipasi masyarakat lokal.",
    },
    highlights: ["Daruba", "Dodola islands", "World War II heritage sites", "Morotai's northern coastline"],
    investmentFocus: [
      { en: "Marine and island experiences", id: "Pengalaman bahari dan kepulauan" },
      { en: "Heritage interpretation", id: "Interpretasi warisan sejarah" },
      { en: "Local visitor services and accommodation", id: "Layanan wisata lokal dan akomodasi" },
    ],
  },
};
