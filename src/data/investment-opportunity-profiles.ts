export type BilingualCopy = { en: string; id: string };

export type InvestmentOpportunityProfile = {
  slug: string;
  name: BilingualCopy;
  region: BilingualCopy;
  category: "Priority destination" | "Tourism SEZ";
  value: string;
  developer: BilingualCopy;
  area: string;
  focus: BilingualCopy;
  overview: BilingualCopy;
  opportunities: BilingualCopy[];
  events: { name: BilingualCopy; description: BilingualCopy }[];
  attractions: { name: BilingualCopy; description: BilingualCopy }[];
  access?: BilingualCopy;
  arrivalRegion?: BilingualCopy;
  arrivals?: { foreign: (number | null)[]; domestic: (number | null)[] };
  contact?: string;
};

const copy = (en: string, id: string): BilingualCopy => ({ en, id });

export const priorityOpportunityProfiles: InvestmentOpportunityProfile[] = [
  {
    slug: "danau-toba",
    name: copy("Lake Toba", "Danau Toba"),
    region: copy("Toba, North Sumatra", "Toba, Sumatera Utara"),
    category: "Priority destination",
    value: "USD 1.7 billion*",
    developer: copy(
      "Lake Toba Authority Implementing Agency (BPODT)",
      "Badan Pelaksana Otorita Danau Toba (BPODT)",
    ),
    area: "386.72 ha",
    focus: copy("Lake and Geopark tourism destination", "Destinasi wisata danau dan geopark"),
    overview: copy(
      "Toba Caldera Resort is an eco-tourism destination developed by BPODT and part of Indonesia's Super Priority Tourism Destinations. Toba Caldera was designated a UNESCO Global Geopark in 2020; development aims to strengthen nearby communities through empowerment, training, and participation in tourism.",
      "Toba Caldera Resort adalah destinasi ekowisata yang dikembangkan BPODT dan termasuk Destinasi Pariwisata Super Prioritas. Kaldera Toba ditetapkan sebagai UNESCO Global Geopark pada 2020; pengembangannya diarahkan untuk memperkuat masyarakat sekitar melalui pemberdayaan, pelatihan, dan keterlibatan dalam pariwisata.",
    ),
    opportunities: [
      copy("Boutique hotel: 31,309 m² plot", "Hotel butik: plot 31.309 m²"),
      copy("Outdoor entertainment: 18,301 m² plot", "Hiburan luar ruang: plot 18.301 m²"),
      copy("Indoor entertainment: 38,855 m² plot", "Hiburan dalam ruang: plot 38.855 m²"),
      copy("Beach club: 18,301 m² plot", "Beach club: plot 18.301 m²"),
    ],
    events: [
      {
        name: copy("Aquabike Jetski World Championship", "Aquabike Jetski World Championship"),
        description: copy(
          "The 2024 event ran November 13–17 at Lake Toba, with 100 racers from 30 countries and local cultural activities across four regencies.",
          "Acara 2024 berlangsung 13–17 November di Danau Toba, diikuti 100 pembalap dari 30 negara dan kegiatan budaya lokal di empat kabupaten.",
        ),
      },
      {
        name: copy("Karo Flower and Fruit Festival", "Festival Bunga dan Buah Karo"),
        description: copy(
          "A celebration of fertile land through parades, performances, and the 2024 Garden Luminary Walk.",
          "Perayaan kesuburan tanah melalui parade, pertunjukan, dan Garden Luminary Walk 2024.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Samosir Island", "Pulau Samosir"),
        description: copy(
          "A Batak cultural hub with traditional villages and distinctive lake scenery.",
          "Pusat budaya Batak dengan desa tradisional dan lanskap danau yang khas.",
        ),
      },
      {
        name: copy("Bukit Holbung", "Bukit Holbung"),
        description: copy(
          "A hill with panoramic, 360-degree Lake Toba views, popular with hikers and photographers.",
          "Bukit dengan panorama Danau Toba 360 derajat, populer bagi pendaki dan fotografer.",
        ),
      },
      {
        name: copy("Aek Rangat Hot Springs", "Pemandian Air Panas Aek Rangat"),
        description: copy(
          "Natural hot springs near Pangururan amid the scenery of Samosir Island.",
          "Mata air panas alami dekat Pangururan di tengah lanskap Pulau Samosir.",
        ),
      },
    ],
    access: copy(
      "73 km and about 2 hours by road from Silangit International Airport, according to the source brief.",
      "73 km dan sekitar 2 jam perjalanan darat dari Bandara Internasional Silangit, menurut materi sumber.",
    ),
    arrivalRegion: copy("North Sumatra Province", "Provinsi Sumatera Utara"),
    arrivals: { foreign: [74498, 198240, 250413], domestic: [23204456, 27006445, 42766198] },
    contact: "Raja Melem Tarigan · investment@bpodt.id",
  },
  {
    slug: "borobudur-yogyakarta-prambanan",
    name: copy("Borobudur Highland", "Borobudur Highland"),
    region: copy("Magelang, Central Java", "Magelang, Jawa Tengah"),
    category: "Priority destination",
    value: "USD 95.5 billion*",
    developer: copy("Borobudur Tourism Authority Board", "Badan Otorita Pariwisata Borobudur"),
    area: "309 ha",
    focus: copy("Cultural and adventure ecotourism", "Ekowisata budaya dan petualangan"),
    overview: copy(
      "The 9th-century Borobudur Temple, built under the Sailendra Dynasty, is a major Buddhist monument with 2,672 relief panels and 504 Buddha statues. The Borobudur Authority Zone is planned as a 309-hectare nature-led tourism area with sustainable facilities such as glamping, eco-resorts, fine dining, and MICE.",
      "Candi Borobudur dari abad ke-9 dibangun pada masa Dinasti Sailendra dan memiliki 2.672 panel relief serta 504 arca Buddha. Zona Otorita Borobudur seluas 309 hektare direncanakan sebagai kawasan wisata berbasis alam dengan fasilitas berkelanjutan, seperti glamping, eco-resort, restoran fine dining, dan MICE.",
    ),
    opportunities: [
      copy("Lot H1: 5.8 ha for an exclusive resort", "Lot H1: 5,8 ha untuk resor eksklusif"),
      copy("Lot H2: 2.3 ha for a boutique hotel", "Lot H2: 2,3 ha untuk hotel butik"),
      copy("Lot H3: 2.7 ha for a boutique hotel", "Lot H3: 2,7 ha untuk hotel butik"),
      copy("Lot H4: 4.1 ha for an exclusive resort", "Lot H4: 4,1 ha untuk resor eksklusif"),
    ],
    events: [
      {
        name: copy("Vesak Festival", "Festival Waisak"),
        description: copy(
          "An annual Buddhist celebration of the birth, enlightenment, and passing of Buddha, usually held around May or June and drawing pilgrims and visitors from Indonesia and abroad.",
          "Perayaan tahunan umat Buddha untuk memperingati kelahiran, pencerahan, dan wafat Buddha. Biasanya berlangsung sekitar Mei atau Juni dan menarik peziarah serta wisatawan dari dalam dan luar negeri.",
        ),
      },
      {
        name: copy("Wayang Jogja Night Carnival", "Wayang Jogja Night Carnival"),
        description: copy(
          "Yogyakarta's annual night parade featuring street art inspired by wayang stories.",
          "Parade malam tahunan Yogyakarta yang menampilkan seni jalanan bertema kisah wayang.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Borobudur Temple", "Candi Borobudur"),
        description: copy(
          "A UNESCO World Heritage Site and 9th-century Buddhist temple known for its stupas, bas-reliefs, and spiritual heritage.",
          "Situs Warisan Dunia UNESCO dan candi Buddha abad ke-9 yang dikenal dengan stupa, relief, dan warisan spiritualnya.",
        ),
      },
      {
        name: copy("Mendut Temple", "Candi Mendut"),
        description: copy(
          "A 9th-century Buddhist temple about three kilometres east of Borobudur, known for its seated Buddha statue.",
          "Candi Buddha abad ke-9 sekitar tiga kilometer di sebelah timur Borobudur, dikenal dengan arca Buddha duduknya.",
        ),
      },
      {
        name: copy("Punthuk Setumbu Hill", "Bukit Punthuk Setumbu"),
        description: copy(
          "A sunrise viewpoint about four kilometres west of Borobudur, overlooking the temple and surrounding hills.",
          "Titik pandang matahari terbit sekitar empat kilometer di sebelah barat Borobudur, menghadap kompleks candi dan perbukitan.",
        ),
      },
    ],
    access: copy(
      "45 km and about 1.5 hours by road from Yogyakarta International Airport.",
      "45 km dan sekitar 1,5 jam perjalanan darat dari Bandara Internasional Yogyakarta.",
    ),
    arrivalRegion: copy("Magelang Regency", "Kabupaten Magelang"),
    arrivals: { foreign: [53936, 193053, null], domestic: [1443286, 1281226, null] },
    contact: "Harfiansa · otoritaborobudur@gmail.com",
  },
  {
    slug: "labuan-bajo",
    name: copy("Labuan Bajo / Parapuar", "Labuan Bajo / Parapuar"),
    region: copy("West Manggarai, East Nusa Tenggara", "Manggarai Barat, Nusa Tenggara Timur"),
    category: "Priority destination",
    value: "USD 78.2 million",
    developer: copy(
      "Labuan Bajo Flores Authority (BPOLBF)",
      "Badan Pelaksana Otorita Labuan Bajo Flores (BPOLBF)",
    ),
    area: "400 ha",
    focus: copy(
      "Sustainable, premium-quality ecotourism",
      "Ekowisata berkelanjutan berkualitas premium",
    ),
    overview: copy(
      "Labuan Bajo is the western gateway to Flores and the departure point for Komodo National Park. Parapuar is a developing destination in the Nggorang Bowosie production forest; its name combines the Manggarai words para (gate) and puar (forest). Development is planned around ecological balance, local culture, community participation, and improved attractions, amenities, access, and management.",
      "Labuan Bajo merupakan gerbang barat Flores dan titik keberangkatan menuju Taman Nasional Komodo. Parapuar adalah destinasi yang dikembangkan di kawasan Hutan Produksi Nggorang Bowosie; namanya berasal dari kata Manggarai para (gerbang) dan puar (hutan). Pengembangannya mengutamakan keseimbangan ekologi, budaya lokal, partisipasi masyarakat, serta peningkatan atraksi, amenitas, akses, dan pengelolaan.",
    ),
    opportunities: [
      copy(
        "Accommodation: the source lists 1,093 rooms and a capacity of 12,000",
        "Akomodasi: sumber mencantumkan 1.093 kamar dan kapasitas 12.000",
      ),
      copy("Meeting rooms and MICE facilities", "Ruang pertemuan dan fasilitas MICE"),
      copy("Restaurants", "Restoran"),
    ],
    events: [
      {
        name: copy("Komodo Culture Festival", "Festival Budaya Komodo"),
        description: copy(
          "An annual Flores cultural event with traditional dance and music, local handicraft markets, and community activities such as traditional boat races.",
          "Acara budaya tahunan di Flores dengan tari dan musik tradisional, pasar kerajinan lokal, serta kegiatan masyarakat seperti lomba perahu tradisional.",
        ),
      },
      {
        name: copy("Lamaholot Festival", "Festival Lamaholot"),
        description: copy(
          "The 2024 edition featured traditional weaving, Sole Oha literature, marine conservation, cultural parades, performances, workshops, and visits to weaving villages and heritage sites.",
          "Edisi 2024 menampilkan tenun tradisional, sastra Sole Oha, konservasi bahari, parade budaya, pertunjukan, lokakarya, serta kunjungan ke desa tenun dan situs warisan.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Komodo National Park", "Taman Nasional Komodo"),
        description: copy(
          "A UNESCO-listed landscape known for Komodo dragons, dramatic islands, and rich marine life.",
          "Kawasan yang diakui UNESCO, terkenal dengan komodo, lanskap pulau yang khas, dan kekayaan biota laut.",
        ),
      },
      {
        name: copy("Pink Beach", "Pantai Pink"),
        description: copy(
          "A rare pink-sand beach whose colour comes from microscopic organisms and crushed red coral.",
          "Pantai berpasir merah muda yang warnanya berasal dari organisme mikroskopis dan pecahan karang merah.",
        ),
      },
      {
        name: copy("Padar Island", "Pulau Padar"),
        description: copy(
          "A challenging hike rewards visitors with views of crescent-shaped beaches and rugged island terrain.",
          "Pendakian menantang dengan panorama pantai berbentuk sabit dan perbukitan pulau.",
        ),
      },
    ],
    access: copy(
      "4 km and about 10 minutes by road from Komodo International Airport.",
      "4 km dan sekitar 10 menit perjalanan darat dari Bandara Internasional Komodo.",
    ),
    arrivalRegion: copy("West Manggarai Regency", "Kabupaten Manggarai Barat"),
    arrivals: { foreign: [60770, 239149, 229763], domestic: [454236, 596683, null] },
    contact: "investment@labuanbajoflores.id",
  },
  {
    slug: "lombok-gili-tramena",
    name: copy("Mandalika", "Mandalika"),
    region: copy("Lombok, West Nusa Tenggara", "Lombok, Nusa Tenggara Barat"),
    category: "Priority destination",
    value: "IDR 28.63 billion*",
    developer: copy(
      "The Mandalika, Indonesia Tourism Development Corporation (ITDC)",
      "The Mandalika, Indonesia Tourism Development Corporation (ITDC)",
    ),
    area: "1,035.67 ha",
    focus: copy(
      "Beachfront sports, ecotourism, and entertainment",
      "Wisata olahraga pesisir, ekowisata, dan hiburan",
    ),
    overview: copy(
      "Mandalika is an ITDC-managed destination developed as part of the 10 New Balis initiative. Its 16-kilometre coastline, green infrastructure, and more than 51% green open space support a mix of ecotourism and sports tourism, including resorts, a golf course, and the international circuit.",
      "Mandalika dikelola ITDC dan dikembangkan sebagai bagian dari inisiatif 10 Bali Baru. Garis pantai sepanjang 16 kilometer, infrastruktur hijau, dan lebih dari 51% ruang terbuka hijau mendukung perpaduan ekowisata dan wisata olahraga, termasuk resor, lapangan golf, dan sirkuit internasional.",
    ),
    opportunities: [
      "Hotel",
      "Commercial and mixed-use development",
      "MICE and events venue",
      "Cultural facilities",
      "Golf",
      "Circuit facilities",
      "Public facilities",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("MotoGP Mandalika", "MotoGP Mandalika"),
        description: copy(
          "Hosted at the Pertamina Mandalika International Circuit, the race has attracted international motorsport audiences since its 2022 debut.",
          "Digelar di Sirkuit Internasional Pertamina Mandalika dan menarik penggemar motorsport internasional sejak debutnya pada 2022.",
        ),
      },
      {
        name: copy("Bau Nyale Festival", "Festival Bau Nyale"),
        description: copy(
          "A cultural celebration of the Princess Mandalika legend, with rituals, parades, peresean, performances, and the traditional dawn nyale gathering.",
          "Perayaan budaya yang mengangkat legenda Putri Mandalika melalui ritual, parade, peresean, pertunjukan, dan tradisi menangkap nyale saat fajar.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Kuta Mandalika Beach", "Pantai Kuta Mandalika"),
        description: copy(
          "White sand and turquoise water inside the SEZ, suited to swimming and relaxed coastal visits.",
          "Pasir putih dan air biru kehijauan di dalam KEK, cocok untuk berenang dan menikmati pesisir.",
        ),
      },
      {
        name: copy("Sade Traditional Village", "Desa Adat Sade"),
        description: copy(
          "A Sasak village known for traditional thatched homes, weaving, and guided cultural visits.",
          "Desa Sasak yang dikenal dengan rumah beratap ilalang, tradisi menenun, dan kunjungan budaya berpemandu.",
        ),
      },
      {
        name: copy("Tanjung Aan Beach", "Pantai Tanjung Aan"),
        description: copy(
          "Known for pepper-like sand and calm blue water, suitable for swimming, picnics, and photography.",
          "Dikenal dengan pasir menyerupai butiran merica dan air biru yang tenang, cocok untuk berenang, piknik, dan fotografi.",
        ),
      },
    ],
    access: copy(
      "25 km and about 30 minutes by road from Lombok International Airport.",
      "25 km dan sekitar 30 menit perjalanan darat dari Bandara Internasional Lombok.",
    ),
    arrivalRegion: copy("West Nusa Tenggara Province", "Provinsi Nusa Tenggara Barat"),
    arrivals: { foreign: [null, null, null], domestic: [4091259, 13274308, 13769746] },
    contact: "info.mandalika@gmail.com",
  },
  {
    slug: "manado-likupang",
    name: copy("Likupang SEZ", "KEK Likupang"),
    region: copy("North Minahasa, North Sulawesi", "Minahasa Utara, Sulawesi Utara"),
    category: "Priority destination",
    value: "USD 114 million",
    developer: copy(
      "PT Minahasa Permai Resort Development (MPRD)",
      "PT Minahasa Permai Resort Development (MPRD)",
    ),
    area: "197.4 ha",
    focus: copy("Regenerative, marine-based ecotourism", "Ekowisata bahari regeneratif"),
    overview: copy(
      "Located around Tanjung Pulisan in East Likupang, the SEZ is designed to attract tourism, processing, logistics, technology, and energy investment. Its beaches and marine biodiversity support a regenerative tourism model that integrates nature conservation, cultural heritage, and community participation.",
      "Berada di sekitar Tanjung Pulisan, Likupang Timur, KEK ini dirancang untuk menarik investasi pariwisata, pengolahan, logistik, teknologi, dan energi. Pantai serta keanekaragaman hayati baharinya mendukung model wisata regeneratif yang mengintegrasikan konservasi alam, warisan budaya, dan partisipasi masyarakat.",
    ),
    opportunities: ["Jetty", "Marina facilities", "Commercial area", "MICE facilities"].map((x) =>
      copy(x, x),
    ),
    events: [
      {
        name: copy("Likupang Tourism Festival", "Festival Pariwisata Likupang"),
        description: copy(
          "A program of traditional and contemporary dance and music, marine-themed parades, MSME exhibitions, and duathlon competitions.",
          "Rangkaian tari dan musik tradisional maupun kontemporer, parade bertema bahari, pameran UMKM, dan kompetisi duathlon.",
        ),
      },
      {
        name: copy("Coral Triangle Day", "Coral Triangle Day"),
        description: copy(
          "A regional initiative promoting marine biodiversity awareness and sustainable management of Coral Triangle resources.",
          "Inisiatif regional untuk meningkatkan kesadaran akan keanekaragaman hayati laut dan pengelolaan sumber daya Coral Triangle secara berkelanjutan.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Gangga Island", "Pulau Gangga"),
        description: copy(
          "A quiet island retreat with resorts, diving sites, marine biodiversity, and beaches.",
          "Pulau untuk beristirahat dengan resor, lokasi menyelam, keanekaragaman hayati laut, dan pantai.",
        ),
      },
      {
        name: copy("Paal Beach", "Pantai Paal"),
        description: copy(
          "White sand and clear turquoise water for swimming, sunbathing, and sunrise views.",
          "Pasir putih dan air biru jernih untuk berenang, berjemur, dan menikmati matahari terbit.",
        ),
      },
      {
        name: copy("Pulisan Beach and Hills", "Pantai dan Bukit Pulisan"),
        description: copy(
          "Coastal scenery and trails through nearby hills with panoramic views and savanna-like landscapes.",
          "Lanskap pesisir dan jalur pendakian di perbukitan sekitar dengan panorama luas dan bentang menyerupai sabana.",
        ),
      },
    ],
    access: copy(
      "50 km and about 1.5 hours by road from Sam Ratulangi International Airport.",
      "50 km dan sekitar 1,5 jam perjalanan darat dari Bandara Internasional Sam Ratulangi.",
    ),
    arrivalRegion: copy("North Sulawesi Province", "Provinsi Sulawesi Utara"),
    arrivals: { foreign: [28326, 90761, null], domestic: [4421855, 5145398, 8202302] },
  },
];

export const sezOpportunityProfiles: InvestmentOpportunityProfile[] = [
  {
    slug: "nongsa-sez",
    name: copy("Nongsa SEZ", "KEK Nongsa"),
    region: copy("Batam, Riau Islands", "Batam, Kepulauan Riau"),
    category: "Tourism SEZ",
    value: "IDR 39.9 trillion*",
    developer: copy("PT Taman Resor Internet", "PT Taman Resor Internet"),
    area: "166.45 ha",
    focus: copy(
      "Digital, innovation, creative industries, and tourism",
      "Industri digital, inovasi, kreatif, dan pariwisata",
    ),
    overview: copy(
      "Located in Batam, around 40 minutes by ferry from Singapore, Nongsa integrates the digital economy, premium tourism, and creative industries. Nongsa Digital Park and global technology partners support a digital innovation hub, with potential for wellness resorts, ecotourism, and health tourism.",
      "Berada di Batam, sekitar 40 menit dengan feri dari Singapura, Nongsa memadukan ekonomi digital, pariwisata premium, dan industri kreatif. Nongsa Digital Park dan mitra teknologi global mendukung pusat inovasi digital, dengan potensi resor kebugaran, ekowisata, dan wisata kesehatan.",
    ),
    opportunities: [
      "Data centre",
      "IT office",
      "Marina",
      "Resort",
      "Residential",
      "Golf course",
      "Movie town",
      "Villa",
      "Commercial area",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Nongsa Neptune Regatta", "Nongsa Neptune Regatta"),
        description: copy(
          "A sailing event for enthusiasts and professionals that reinforces Nongsa's maritime tourism profile.",
          "Ajang pelayaran bagi penggemar dan profesional yang memperkuat profil wisata bahari Nongsa.",
        ),
      },
      {
        name: copy("Batam International Culture Carnival", "Batam International Culture Carnival"),
        description: copy(
          "A celebration of multi-ethnic cultures through concerts, art exhibitions, and performances with international delegates.",
          "Perayaan budaya multietnis melalui konser, pameran seni, dan pertunjukan yang melibatkan delegasi internasional.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Nongsa Point Marina & Resort", "Nongsa Point Marina & Resort"),
        description: copy(
          "A full-service marina and resort popular with sailing enthusiasts.",
          "Marina dan resor dengan layanan lengkap yang populer bagi penggemar pelayaran.",
        ),
      },
      {
        name: copy("Nongsa Beach", "Pantai Nongsa"),
        description: copy(
          "A tranquil coastal spot for swimming, relaxation, and sea views.",
          "Kawasan pesisir yang tenang untuk berenang, bersantai, dan menikmati pemandangan laut.",
        ),
      },
    ],
    access: copy(
      "10 km and about 12 minutes by road from Hang Nadim International Airport.",
      "10 km dan sekitar 12 menit perjalanan darat dari Bandara Internasional Hang Nadim.",
    ),
    arrivalRegion: copy("Riau Islands", "Kepulauan Riau"),
    arrivals: { foreign: [null, 28326, 1193931], domestic: [1511354, 2212232, 3491947] },
    contact: "marketing@nongsadigital.com · nongsadigital.com · +62 778 7100 673",
  },
  {
    slug: "tanjung-lesung-sez",
    name: copy("Tanjung Lesung SEZ", "KEK Tanjung Lesung"),
    region: copy("Pandeglang, Banten", "Pandeglang, Banten"),
    category: "Tourism SEZ",
    value: "USD 179.8 million*",
    developer: copy(
      "PT Banten West Java Tourism Development",
      "PT Banten West Java Tourism Development",
    ),
    area: "1,500 ha",
    focus: copy(
      "Eco-luxury, marine, and cultural tourism",
      "Wisata eco-luxury, bahari, dan budaya",
    ),
    overview: copy(
      "On the western tip of Java, Tanjung Lesung is planned as a leading beach resort destination. Its white-sand beaches, coral reefs, and views of Krakatoa support marine and ecotourism. The zone is part of the 10 New Balis initiative.",
      "Di ujung barat Pulau Jawa, Tanjung Lesung direncanakan sebagai destinasi resor pantai unggulan. Pantai pasir putih, terumbu karang, dan pemandangan Krakatau mendukung wisata bahari dan ekowisata. Kawasan ini termasuk inisiatif 10 Bali Baru.",
    ),
    opportunities: [
      "International marina",
      "Eco-luxury hotel: 300 rooms, convention centre, eco-roof park, restaurants, and public pool",
      "Four-star hotel and villas: 300 rooms, multifunction room, restaurants, pool, and beach club",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Festival Tanjung Lesung", "Festival Tanjung Lesung"),
        description: copy(
          "An annual celebration of Banten culture through traditional music and dance, culinary exhibitions, and local crafts.",
          "Perayaan tahunan budaya Banten melalui musik dan tari tradisional, pameran kuliner, dan kerajinan lokal.",
        ),
      },
      {
        name: copy("Rhino Eco Run", "Rhino Eco Run"),
        description: copy(
          "An ecotourism event around World Rhino Day on September 22, raising awareness of the endangered Javan rhinoceros and conservation.",
          "Acara ekowisata dalam rangka Hari Badak Sedunia pada 22 September untuk meningkatkan kepedulian terhadap badak Jawa dan konservasi.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Tanjung Lesung Beach", "Pantai Tanjung Lesung"),
        description: copy(
          "A 15-kilometre stretch of white sand and calm water for swimming and beach activities.",
          "Bentang pantai pasir putih sepanjang 15 kilometer dengan perairan tenang untuk berenang dan aktivitas pantai.",
        ),
      },
      {
        name: copy("Bodur Beach", "Pantai Bodur"),
        description: copy(
          "Soft white sand and a quiet setting for family visits and sunset views.",
          "Pasir putih lembut dan suasana tenang untuk rekreasi keluarga dan menikmati matahari terbenam.",
        ),
      },
      {
        name: copy("Kampoeng Joglo", "Kampoeng Joglo"),
        description: copy(
          "A cultural village featuring traditional Javanese houses, some 100–300 years old.",
          "Kampung budaya dengan rumah tradisional Jawa yang sebagian berusia 100–300 tahun.",
        ),
      },
    ],
    access: copy(
      "184 km and about 3 hours by road from Soekarno-Hatta International Airport.",
      "184 km dan sekitar 3 jam perjalanan darat dari Bandara Internasional Soekarno-Hatta.",
    ),
    arrivalRegion: copy("Banten Province", "Provinsi Banten"),
    arrivals: { foreign: [934661, 1953005, 2524253], domestic: [38597642, 43129799, 48257848] },
    contact: "Mkt@tanjunglesung.com",
  },
  {
    slug: "tanjung-kelayang-sez",
    name: copy("Tanjung Kelayang SEZ", "KEK Tanjung Kelayang"),
    region: copy("Belitung, Bangka Belitung Islands", "Belitung, Kepulauan Bangka Belitung"),
    category: "Tourism SEZ",
    value: "USD 2.4 billion*",
    developer: copy("PT Belitung Pantai Intan (BELP)", "PT Belitung Pantai Intan (BELP)"),
    area: "324.4 ha",
    focus: copy(
      "Low-carbon tourism and nature conservation",
      "Pariwisata rendah karbon dan konservasi alam",
    ),
    overview: copy(
      "On Belitung Island, this zone builds on white-sand beaches, granite formations, and clear water. Its resort, ecotourism, and marine attractions are intended to grow tourism and the local economy while prioritizing sustainable development.",
      "Di Pulau Belitung, kawasan ini bertumpu pada pantai pasir putih, formasi granit, dan perairan jernih. Resor serta atraksi ekowisata dan bahari diarahkan untuk mengembangkan pariwisata dan ekonomi lokal dengan mengutamakan pembangunan berkelanjutan.",
    ),
    opportunities: [
      "Low-carbon projects",
      "Water treatment plant",
      "MSME centre",
      "Bike hotel",
      "Digital village",
      "Desa Kita",
      "Marina",
      "Wildlife reserve",
      "Tennis academy",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Belitung Geopark Festival", "Belitung Geopark Festival"),
        description: copy(
          "Geotourism exhibitions, geosite and eco-park tours, cultural performances, local food, and workshops on sustainable tourism and conservation.",
          "Pameran geowisata, tur geosite dan taman ekologi, pertunjukan budaya, kuliner lokal, serta lokakarya pariwisata berkelanjutan dan konservasi.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Tanjung Kelayang Beach", "Pantai Tanjung Kelayang"),
        description: copy(
          "White sand, turquoise water, and granite formations, including a rock resembling a Garuda head; a starting point for island-hopping.",
          "Pasir putih, air biru kehijauan, dan formasi granit, termasuk batu menyerupai kepala Garuda; titik awal wisata antarpulau.",
        ),
      },
      {
        name: copy("Lengkuas Island", "Pulau Lengkuas"),
        description: copy(
          "Known for its historic lighthouse built in 1882 and panoramic sea views.",
          "Dikenal dengan mercusuar bersejarah yang dibangun pada 1882 dan panorama laut.",
        ),
      },
    ],
    access: copy(
      "35 km and about 45 minutes by road from H.A.S. Hanandjoeddin Airport.",
      "35 km dan sekitar 45 menit perjalanan darat dari Bandara H.A.S. Hanandjoeddin.",
    ),
    arrivalRegion: copy("Bangka Belitung Islands", "Kepulauan Bangka Belitung"),
    arrivals: { foreign: [2336, 7093, null], domestic: [1578407, 2179148, 3144851] },
    contact: "Daniel Alexander · danielalexander@sezbelitung.com · +62 813 7866 6688",
  },
  {
    slug: "lido-sez",
    name: copy("Lido SEZ", "KEK Lido"),
    region: copy("Bogor, West Java", "Bogor, Jawa Barat"),
    category: "Tourism SEZ",
    value: "USD 2.4 billion*",
    developer: copy("PT Hotel MNC Land Lido", "PT Hotel MNC Land Lido"),
    area: "1,040 ha",
    focus: copy(
      "Entertainment, resort, and integrated tourism",
      "Hiburan, resor, dan pariwisata terintegrasi",
    ),
    overview: copy(
      "MNC Lido City is an integrated tourism and entertainment zone about 60 km south of Jakarta. Planned facilities include a theme park, film studios, music and arts centre, championship golf course, hotels, retail, and dining. The draft estimates 3.17 million visitors annually and nearly 30,000 jobs by 2041.",
      "MNC Lido City adalah kawasan pariwisata dan hiburan terpadu sekitar 60 km di selatan Jakarta. Fasilitas yang direncanakan mencakup taman hiburan, studio film, pusat musik dan seni, lapangan golf kejuaraan, hotel, ritel, dan restoran. Draf memperkirakan 3,17 juta pengunjung per tahun dan hampir 30.000 lapangan kerja pada 2041.",
    ),
    opportunities: [
      "MNC Park theme park resort",
      "Retail, dining, and entertainment",
      "Theme-park hotel",
      "Lido World Garden",
      "Transit-oriented development",
      "International golf course and country club",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Cap Go Meh Bogor Street Festival", "Festival Jalan Cap Go Meh Bogor"),
        description: copy(
          "An annual Lunar New Year procession with Chinese cultural performances and lion dances along Jalan Suryakencana.",
          "Prosesi tahunan Tahun Baru Imlek dengan pertunjukan budaya Tionghoa dan barongsai di Jalan Suryakencana.",
        ),
      },
      {
        name: copy("Bogor Flower Festival", "Festival Bunga Bogor"),
        description: copy(
          "Floral displays, parades, and horticultural exhibitions celebrating Bogor's botanical character.",
          "Pameran bunga, parade, dan hortikultura yang merayakan kekayaan botani Bogor.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Mount Gede Pangrango National Park", "Taman Nasional Gunung Gede Pangrango"),
        description: copy(
          "A UNESCO Biosphere Reserve with tropical forests, wildlife, and hiking trails.",
          "Cagar Biosfer UNESCO dengan hutan tropis, satwa liar, dan jalur pendakian.",
        ),
      },
      {
        name: copy("Taman Safari Indonesia Bogor", "Taman Safari Indonesia Bogor"),
        description: copy(
          "A wildlife park with naturalistic habitats, animal presentations, and educational exhibits.",
          "Taman satwa dengan habitat menyerupai alam, pertunjukan satwa, dan pameran edukasi.",
        ),
      },
      {
        name: copy("Puncak Tea Plantation", "Perkebunan Teh Puncak"),
        description: copy(
          "Highland tea fields with cool weather, rolling green hills, and opportunities to learn about tea processing.",
          "Perkebunan teh dataran tinggi dengan udara sejuk, perbukitan hijau, dan kesempatan mengenal pengolahan teh.",
        ),
      },
    ],
    access: copy(
      "105 km and about 1.5 hours by road from Soekarno-Hatta International Airport.",
      "105 km dan sekitar 1,5 jam perjalanan darat dari Bandara Internasional Soekarno-Hatta.",
    ),
    arrivalRegion: copy("Bogor Regency", "Kabupaten Bogor"),
    arrivals: { foreign: [215098, 345677, 402811], domestic: [7942433, 12730378, 15093309] },
  },
  {
    slug: "singhasari-sez",
    name: copy("Singhasari SEZ", "KEK Singhasari"),
    region: copy("Malang, East Java", "Malang, Jawa Timur"),
    category: "Tourism SEZ",
    value: "IDR 11.92 trillion*",
    developer: copy("PT Intelegensia Grahatama", "PT Intelegensia Grahatama"),
    area: "120.3 ha",
    focus: copy(
      "Heritage, digital technology, and creative industries",
      "Warisan budaya, teknologi digital, dan industri kreatif",
    ),
    overview: copy(
      "The zone combines digital technology, creative industries, education, and tourism. The Animation and Film Factory, Game Factory, Content Garage, and Coding Factory are supported by vocational partnerships, high-speed internet, 15 MW power supply, and integrated waste management. Its location also connects it with the Bromo Tengger Semeru tourism area.",
      "Kawasan ini memadukan teknologi digital, industri kreatif, pendidikan, dan pariwisata. Animation and Film Factory, Game Factory, Content Garage, dan Coding Factory didukung kemitraan vokasi, internet berkecepatan tinggi, pasokan listrik 15 MW, serta pengelolaan sampah terpadu. Lokasinya juga terhubung dengan kawasan wisata Bromo Tengger Semeru.",
    ),
    opportunities: [
      "Nusantara Villas",
      "Resort, teaching and commercial hotel",
      "Digital Coding Factory",
      "UMM Centre of Excellence",
      "King's College London",
      "Animation Film Factory",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Malang Tempo Doeloe Festival", "Festival Malang Tempo Doeloe"),
        description: copy(
          "A nostalgic festival of Malang history featuring traditional performances, art, and local food.",
          "Festival bernuansa nostalgia tentang sejarah Malang melalui pertunjukan tradisional, seni, dan kuliner.",
        ),
      },
      {
        name: copy("Singhasari Culture Parade & Festival", "Parade dan Festival Budaya Singhasari"),
        description: copy(
          "An annual educational event promoting Singhasari Kingdom history through student and teacher performances.",
          "Acara edukatif tahunan yang mengenalkan sejarah Kerajaan Singhasari melalui pertunjukan siswa dan guru.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Singhasari Temple", "Candi Singhasari"),
        description: copy(
          "A 13th-century Hindu-Buddhist funerary temple for King Kertanegara, flanked by monumental Dvarapala guardians.",
          "Candi pemakaman Hindu-Buddha abad ke-13 untuk Raja Kertanegara, diapit arca penjaga Dvarapala berukuran besar.",
        ),
      },
      {
        name: copy("Bromo Tengger Semeru National Park", "Taman Nasional Bromo Tengger Semeru"),
        description: copy(
          "A volcanic landscape of sunrise viewpoints, the Tengger Sand Sea, and Mount Semeru.",
          "Lanskap vulkanik dengan titik pandang matahari terbit, Lautan Pasir Tengger, dan Gunung Semeru.",
        ),
      },
      {
        name: copy("Museum Angkut", "Museum Angkut"),
        description: copy(
          "A transport museum with more than 300 vehicles and themed exhibits tracing the history of transportation.",
          "Museum transportasi dengan lebih dari 300 kendaraan dan zona tematik tentang sejarah transportasi.",
        ),
      },
    ],
    access: copy(
      "91 km and about 1.5 hours by road from Juanda International Airport.",
      "91 km dan sekitar 1,5 jam perjalanan darat dari Bandara Internasional Juanda.",
    ),
    arrivalRegion: copy("Malang City", "Kota Malang"),
    arrivals: { foreign: [18841, 35358, null], domestic: [1377193, 1179797, null] },
    contact: "info@singhasari.co.id · singhasari.co.id",
  },
  {
    slug: "sanur-sez",
    name: copy("Sanur SEZ", "KEK Sanur"),
    region: copy("Sanur, Bali", "Sanur, Bali"),
    category: "Tourism SEZ",
    value: "IDR 6.2 trillion*",
    developer: copy(
      "PT Hotel Indonesia Natour / InJourney",
      "PT Hotel Indonesia Natour / InJourney",
    ),
    area: "41.26 ha",
    focus: copy("Medical and wellness tourism", "Wisata medis dan kebugaran"),
    overview: copy(
      "Indonesia's first SEZ dedicated to health and wellness tourism is planned as an international medical destination. The Bali International Hospital is being developed with the Mayo Clinic Care Network; the wider zone includes specialist clinics, wellness facilities, hotels, a convention centre, and an ethnomedicinal botanical garden.",
      "KEK pertama Indonesia yang berfokus pada wisata kesehatan dan kebugaran ini direncanakan sebagai destinasi medis internasional. Bali International Hospital dikembangkan bersama Mayo Clinic Care Network; kawasan juga mencakup klinik spesialis, fasilitas kebugaran, hotel, pusat konvensi, dan kebun botani etnomedis.",
    ),
    opportunities: [
      "Healthcare and additional medical specialities",
      "Hotel",
      "Convention centre",
      "Commercial area and small-to-medium industry",
      "Ethnomedical botanic garden",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Sanur Village Festival", "Sanur Village Festival"),
        description: copy(
          "A week-long annual arts and culture celebration at Mertasari Beach with performances, food, water sports, and environmental programs.",
          "Perayaan seni dan budaya tahunan selama sepekan di Pantai Mertasari, dengan pertunjukan, kuliner, olahraga air, dan program lingkungan.",
        ),
      },
      {
        name: copy("The Kasanga Festival", "Festival Kasanga"),
        description: copy(
          "A Balinese New Year celebration associated with Nyepi and the Ogoh-Ogoh parade, symbolizing purification before the Day of Silence.",
          "Perayaan Tahun Baru Bali yang berkaitan dengan Nyepi dan parade Ogoh-Ogoh, sebagai simbol penyucian menjelang Hari Nyepi.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Sanur Beach", "Pantai Sanur"),
        description: copy(
          "A long white-sand beach with calm water, a paved promenade, sunrise views, and beachfront cafés.",
          "Pantai pasir putih yang panjang dengan perairan tenang, jalur pedestrian, panorama matahari terbit, dan kafe pesisir.",
        ),
      },
      {
        name: copy("Pura Blanjong", "Pura Blanjong"),
        description: copy(
          "One of Sanur's oldest temples, home to the 10th-century Blanjong inscription.",
          "Salah satu pura tertua di Sanur, dengan Prasasti Blanjong dari abad ke-10.",
        ),
      },
      {
        name: copy("Wellness and spa centres", "Pusat kebugaran dan spa"),
        description: copy(
          "Spas and yoga studios offering treatments, meditation, and wellness retreats.",
          "Spa dan studio yoga yang menawarkan perawatan, meditasi, dan retret kebugaran.",
        ),
      },
    ],
    access: copy(
      "19 km and about 30 minutes by road from I Gusti Ngurah Rai International Airport.",
      "19 km dan sekitar 30 menit perjalanan darat dari Bandara Internasional I Gusti Ngurah Rai.",
    ),
    arrivalRegion: copy("Bali Province", "Provinsi Bali"),
    arrivals: { foreign: [2155747, 5273258, 6333360], domestic: [14259714, 20672537, 22644939] },
    contact: "info@thesanur.id · +62 811 1181 181 · thesanur.id",
  },
  {
    slug: "kura-kura-sez",
    name: copy("Kura Kura Bali SEZ", "KEK Kura Kura Bali"),
    region: copy("Serangan, Denpasar, Bali", "Serangan, Denpasar, Bali"),
    category: "Tourism SEZ",
    value: "USD 6.1 billion*",
    developer: copy("PT Bali Turtle Island Development", "PT Bali Turtle Island Development"),
    area: "498 ha",
    focus: copy(
      "Sustainable tourism, innovation, and culture",
      "Pariwisata berkelanjutan, inovasi, dan budaya",
    ),
    overview: copy(
      "Established in 2023 on Serangan Island, the zone is guided by the Balinese philosophy of Tri Hita Karana and combines tourism with health, education, creative industries, and digital technology. Planned projects include a marina, resorts, an outlet centre, an international school, a technology park, and wellness facilities.",
      "Ditetapkan pada 2023 di Pulau Serangan, kawasan ini berlandaskan filosofi Bali Tri Hita Karana dan memadukan pariwisata dengan kesehatan, pendidikan, industri kreatif, serta teknologi digital. Proyek yang direncanakan meliputi marina, resor, outlet, sekolah internasional, taman teknologi, dan fasilitas kebugaran.",
    ),
    opportunities: [
      "Marina with resort",
      "Culture hub and park",
      "Technology park",
      "Hotels, resorts, and apartments",
      "Holistic wellness centre",
      "Commercial development",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Nyepi & Ogoh-Ogoh Parade", "Nyepi dan Parade Ogoh-Ogoh"),
        description: copy(
          "The Ogoh-Ogoh procession and Bali's 24-hour Day of Silence are central spiritual and cultural events.",
          "Arak-arakan Ogoh-Ogoh dan Hari Nyepi selama 24 jam merupakan peristiwa spiritual dan budaya utama di Bali.",
        ),
      },
      {
        name: copy("Bali Kite Festival", "Festival Layang-Layang Bali"),
        description: copy(
          "A seasonal kite festival at Padang Galak Beach, near Sanur, attracting local and international participants.",
          "Festival layang-layang musiman di Pantai Padang Galak dekat Sanur yang menarik peserta lokal dan mancanegara.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Serangan Island", "Pulau Serangan"),
        description: copy(
          "An island with the Turtle Conservation and Education Center, surf breaks, and mangrove tours.",
          "Pulau dengan Turtle Conservation and Education Center, ombak untuk berselancar, dan wisata hutan mangrove.",
        ),
      },
      {
        name: copy("Turtle Island (Pulau Penyu)", "Pulau Penyu"),
        description: copy(
          "A short glass-bottom boat ride from Tanjung Benoa leads to a turtle rescue and education centre.",
          "Perjalanan singkat dengan perahu berlantai kaca dari Tanjung Benoa menuju pusat penyelamatan dan edukasi penyu.",
        ),
      },
      {
        name: copy("Tanjung Benoa and Nusa Dua", "Tanjung Benoa dan Nusa Dua"),
        description: copy(
          "Tanjung Benoa offers water sports; Nusa Dua is known for white-sand beaches, clear water, and resorts.",
          "Tanjung Benoa menawarkan olahraga air; Nusa Dua dikenal dengan pantai pasir putih, air jernih, dan resor.",
        ),
      },
    ],
    access: copy(
      "12 km and about 20 minutes by road from I Gusti Ngurah Rai International Airport.",
      "12 km dan sekitar 20 menit perjalanan darat dari Bandara Internasional I Gusti Ngurah Rai.",
    ),
    arrivalRegion: copy("Bali Province", "Provinsi Bali"),
    arrivals: { foreign: [2155747, 5273258, 6333360], domestic: [14259714, 20672537, 22644939] },
    contact: "info@kurakurabali.com · +62 811 3821 8899 · kurakurabali.com",
  },
  {
    slug: "morotai-sez",
    name: copy("Morotai SEZ", "KEK Morotai"),
    region: copy("Morotai Island, North Maluku", "Pulau Morotai, Maluku Utara"),
    category: "Tourism SEZ",
    value: "IDR 30.44 trillion*",
    developer: copy("PT Jababeka Morotai", "PT Jababeka Morotai"),
    area: "1,101.76 ha",
    focus: copy(
      "Ecotourism, marine tourism, fisheries, and logistics",
      "Ekowisata, wisata bahari, perikanan, dan logistik",
    ),
    overview: copy(
      "The zone is planned to support tourism, fisheries processing, and logistics. Morotai's clear water, coral reefs, beaches, surf, and World War II history provide a base for sustainable marine and cultural tourism investment.",
      "Kawasan ini direncanakan untuk mendukung pariwisata, pengolahan perikanan, dan logistik. Perairan jernih, terumbu karang, pantai, ombak, dan sejarah Perang Dunia II di Morotai menjadi dasar investasi wisata bahari dan budaya yang berkelanjutan.",
    ),
    opportunities: [
      "Marina residences and yacht club",
      "Exclusive castle resort",
      "Water park",
      "Factory outlet",
      "Five-star hotel",
      "Private cottages",
    ].map((x) => copy(x, x)),
    events: [
      {
        name: copy("Morotai Festival", "Festival Morotai"),
        description: copy(
          "The island's flagship event, held in early August, with surfing, traditional boat parades, fishing contests, food bazaars, and cultural performances.",
          "Acara unggulan pulau yang digelar pada awal Agustus, dengan selancar, parade perahu tradisional, lomba memancing, bazar kuliner, dan pertunjukan budaya.",
        ),
      },
      {
        name: copy("Dodola Island Festival", "Festival Pulau Dodola"),
        description: copy(
          "Festival activities include evening performances, kite competitions, diving contests, canoe races, and yacht visits.",
          "Kegiatan festival meliputi pertunjukan malam, lomba layang-layang dan selam, balap kano, serta kunjungan yacht.",
        ),
      },
    ],
    attractions: [
      {
        name: copy("Wawama Wreck Dive Site", "Situs Selam Bangkai Kapal Wawama"),
        description: copy(
          "A South Morotai dive site with World War II Jeep Willys wrecks at about 25 metres and a Bristol Beaufort bomber at about 40 metres.",
          "Lokasi selam di Morotai Selatan dengan bangkai Jeep Willys dari Perang Dunia II pada kedalaman sekitar 25 meter dan pesawat Bristol Beaufort sekitar 40 meter.",
        ),
      },
      {
        name: copy("Dodola Island", "Pulau Dodola"),
        description: copy(
          "White-sand beaches and a natural sandbar connecting Dodola Besar and Dodola Kecil at low tide.",
          "Pantai pasir putih dan gosong alami yang menghubungkan Dodola Besar dengan Dodola Kecil saat air surut.",
        ),
      },
      {
        name: copy("Tabaelange Island", "Pulau Tabaelange"),
        description: copy(
          "An undeveloped island with marine biodiversity, coral reefs, and opportunities for diving.",
          "Pulau alami dengan keanekaragaman hayati laut, terumbu karang, dan potensi penyelaman.",
        ),
      },
    ],
    access: copy(
      "10 km and about 16 minutes by road from Pitu Airport.",
      "10 km dan sekitar 16 menit perjalanan darat dari Bandara Pitu.",
    ),
    arrivalRegion: copy("North Maluku Province", "Provinsi Maluku Utara"),
    arrivals: { foreign: [1649, null, null], domestic: [1511241, 1649077, 2219681] },
    contact: "+62 21 2218 8360 · jababekamorotai.com",
  },
];

export const tourismInvestmentSnapshot = {
  publicationDate: "May 2025",
  annualRealization: "IDR 47.13 trillion",
  annualTarget: "IDR 45 trillion",
  targetAchievement: "104.67%",
  annualGrowth: "3.92%",
  foreignInvestment: "IDR 17.45 trillion (37.03%)",
  domesticInvestment: "IDR 29.69 trillion (62.96%)",
  jobs: "109,815 (+30.8% year-on-year)",
  sectors: ["Starred hotels", "Restaurants", "Tourism areas", "Bars", "Apartment hotels"],
  destinations: [
    ["Bali", "IDR 10.79 trillion"],
    ["Jakarta", "IDR 9.15 trillion"],
    ["West Java", "IDR 5.42 trillion"],
    ["East Java", "IDR 5.42 trillion"],
    ["West Nusa Tenggara", "IDR 2.38 trillion"],
  ],
  foreignInvestorCountries: ["Singapore", "Japan", "Australia", "Hong Kong SAR", "India"],
  annualTrend: [
    { year: 2013, foreign: 4.37, domestic: 1.32, total: 5.7 },
    { year: 2014, foreign: 5.51, domestic: 1.86, total: 7.38 },
    { year: 2015, foreign: 9.16, domestic: 3.96, total: 13.11 },
    { year: 2016, foreign: 16.34, domestic: 2.19, total: 18.53 },
    { year: 2017, foreign: 17.64, domestic: 6.14, total: 23.78 },
    { year: 2018, foreign: 12.77, domestic: 8.79, total: 21.56 },
    { year: 2019, foreign: 10.28, domestic: 18.33, total: 28.61 },
    { year: 2020, foreign: 8.85, domestic: 22.12, total: 30.97 },
    { year: 2021, foreign: 6.88, domestic: 21.27, total: 28.15 },
    { year: 2022, foreign: 10.18, domestic: 23.32, total: 33.5 },
    { year: 2023, foreign: 14.8, domestic: 30.54, total: 45.34 },
    { year: 2024, foreign: 17.44, domestic: 29.69, total: 47.13 },
  ],
};
