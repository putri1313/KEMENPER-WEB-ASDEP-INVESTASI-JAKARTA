import { CalendarDays, MapPin, Plane, Users } from "lucide-react";
import { useSitePreferences } from "@/lib/site-preferences";

const arrivals = {
  foreign: [74498, 198240, 250413],
  domestic: [23204456, 27006445, 42766198],
};

const priorityDestinations = [
  {
    name: "Lake Toba",
    en: "Lake and Geopark Tourism Destination",
    id: "Destinasi Wisata Danau dan Geopark",
    featured: true,
  },
  {
    name: "Borobudur",
    en: "Culture and Heritage Tourism Destination",
    id: "Destinasi Wisata Budaya dan Warisan",
  },
  {
    name: "Likupang",
    en: "Eco Resort and Luxury Destination",
    id: "Destinasi Ekowisata dan Resor Mewah",
  },
  {
    name: "Mandalika",
    en: "Youth and Sport Tourism Destination",
    id: "Destinasi Wisata Pemuda dan Olahraga",
  },
  {
    name: "Labuan Bajo",
    en: "Ecotourism Destination",
    id: "Destinasi Ekowisata",
  },
];

const tourismZones = [
  ["Nongsa SEZ", "Riau Islands"],
  ["Tanjung Kelayang SEZ", "Bangka Belitung"],
  ["Tanjung Lesung SEZ", "Banten"],
  ["Lido SEZ", "West Java"],
  ["Singhasari SEZ", "East Java"],
  ["Kura Kura SEZ", "Bali"],
  ["Sanur SEZ", "Bali"],
  ["Mandalika SEZ", "East Nusa Tenggara"],
  ["Likupang SEZ", "North Sulawesi"],
  ["Morotai SEZ", "North Maluku"],
];

const opportunities = [
  { en: "Boutique hotel", id: "Hotel butik", area: 31309 },
  { en: "Outdoor entertainment", id: "Hiburan luar ruang", area: 18301 },
  { en: "Indoor entertainment", id: "Hiburan dalam ruang", area: 38855 },
  { en: "Beach club", id: "Beach club", area: 18301 },
];

const events = [
  {
    name: "Aquabike Jetski World Championship",
    en: "Held at Lake Toba on November 13–17, 2024, featuring 100 racers from 30 countries and local cultural activities across four regencies.",
    id: "Digelar di Danau Toba pada 13–17 November 2024, diikuti 100 pembalap dari 30 negara dan diramaikan kegiatan budaya lokal di empat kabupaten.",
  },
  {
    name: "Karo Flower and Fruit Festival",
    en: "A celebration of the region's fertile land through parades, performances, and the 2024 Garden Luminary Walk.",
    id: "Perayaan kesuburan tanah di kawasan Karo melalui parade, pertunjukan, dan Garden Luminary Walk 2024.",
  },
];

const attractions = [
  {
    name: { en: "Samosir Island", id: "Pulau Samosir" },
    description: {
      en: "A cultural hub for the Batak people, with traditional villages, local customs, and quiet lake landscapes.",
      id: "Pusat budaya masyarakat Batak dengan desa tradisional, adat setempat, dan lanskap danau yang tenang.",
    },
  },
  {
    name: { en: "Bukit Holbung", id: "Bukit Holbung" },
    description: {
      en: "A hilltop viewpoint with wide, 360-degree views over Lake Toba, popular for hiking and photography.",
      id: "Titik pandang di perbukitan dengan panorama 360 derajat Danau Toba, populer untuk mendaki dan fotografi.",
    },
  },
  {
    name: { en: "Aek Rangat Hot Springs", id: "Pemandian Air Panas Aek Rangat" },
    description: {
      en: "Natural hot springs near Pangururan, set among the scenery of Samosir Island.",
      id: "Mata air panas alami di sekitar Pangururan, di tengah lanskap Pulau Samosir.",
    },
  },
];

function ArrivalBars({
  title,
  values,
  format,
}: {
  title: string;
  values: number[];
  format: (value: number) => string;
}) {
  const max = Math.max(...values);

  return (
    <div className="border-t border-border pt-5">
      <h3 className="text-sm font-bold">{title}</h3>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {values.map((value, index) => (
          <div key={index} className="min-w-0 text-center">
            <p className="truncate text-[11px] font-semibold tabular-nums text-muted-foreground sm:text-xs">
              {format(value)}
            </p>
            <div className="mt-2 flex h-24 items-end justify-center border-b border-border">
              <div
                aria-label={`${2022 + index}: ${format(value)}`}
                className={`w-9 max-w-full ${index === values.length - 1 ? "bg-forest" : "bg-forest/35"}`}
                style={{ height: `${Math.max(12, (value / max) * 100)}%` }}
              />
            </div>
            <p className="mt-2 text-[11px] font-bold text-muted-foreground">{2022 + index}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LakeTobaProfile() {
  const { language } = useSitePreferences();
  const id = language === "id";
  const number = new Intl.NumberFormat(id ? "id-ID" : "en-US");

  return (
    <>
      <section className="bg-navy py-16 text-primary-foreground md:py-20">
        <div className="container-portal">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="eyebrow text-accent">
                {id ? "Destinasi pariwisata prioritas" : "Priority tourism destination"}
              </p>
              <p className="mt-5 font-display text-5xl font-extrabold leading-none md:text-7xl">
                USD 1.7B
              </p>
              <p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/70">
                {id
                  ? "Nilai investasi indikatif yang tercantum dalam materi destinasi."
                  : "Indicative investment value stated in the destination brief."}
              </p>
            </div>
            <dl className="grid gap-x-8 gap-y-6 border-t border-primary-foreground/20 pt-6 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/55">
                  {id ? "Pengembang" : "Destination developer"}
                </dt>
                <dd className="mt-2 text-sm font-bold leading-6">
                  {id
                    ? "Badan Pelaksana Otorita Danau Toba (BPODT)"
                    : "Lake Toba Authority Implementing Agency (BPODT)"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/55">
                  {id ? "Kabupaten" : "Regency"}
                </dt>
                <dd className="mt-2 text-sm font-bold leading-6">
                  {id ? "Toba, Sumatera Utara" : "Toba, North Sumatra"}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/55">
                  {id ? "Luas kawasan" : "Area"}
                </dt>
                <dd className="mt-2 text-sm font-bold leading-6">386.72 ha</dd>
              </div>
            </dl>
          </div>

          <div className="mt-12 grid gap-6 border-t border-primary-foreground/20 pt-6 md:grid-cols-[1fr_auto] md:items-start">
            <p className="max-w-3xl text-sm leading-7 text-primary-foreground/75">
              {id
                ? "Danau Toba diposisikan sebagai Destinasi Wisata Danau dan Geopark. Toba Caldera Resort merupakan kawasan ekowisata yang dikembangkan BPODT dan termasuk Destinasi Pariwisata Super Prioritas. Kaldera Toba ditetapkan sebagai UNESCO Global Geopark pada 2020. Pengembangan kawasan diarahkan untuk memperkuat kondisi sosial ekonomi masyarakat melalui pemberdayaan, pelatihan, dan keterlibatan dalam industri pariwisata."
                : "Lake Toba is positioned as a Lake and Geopark Tourism Destination. Toba Caldera Resort is an eco-tourism area developed by BPODT and part of Indonesia's Super Priority Tourism Destinations. Toba Caldera was designated a UNESCO Global Geopark in 2020. Development aims to strengthen local socio-economic conditions through community empowerment, training, and participation in tourism."}
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
              <MapPin size={15} />
              {id ? "Kaldera Toba" : "Toba Caldera"}
            </span>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow text-forest">
              {id ? "Konteks investasi nasional" : "National investment context"}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
              {id
                ? "Destinasi prioritas dan KEK pariwisata"
                : "Priority destinations and tourism SEZs"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {id
                ? "Daftar nasional sebagaimana tercantum pada materi yang diberikan; destinasi dan kawasan ekonomi ini berada di berbagai wilayah Indonesia."
                : "National listings from the supplied material; these destinations and economic zones span different regions of Indonesia."}
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="border-b border-border pb-4 font-display text-xl font-bold">
                {id ? "Destinasi Pariwisata Prioritas" : "Priority Tourism Destinations"}
              </h3>
              <ul className="divide-y divide-border">
                {priorityDestinations.map((destination) => (
                  <li
                    key={destination.name}
                    className={`grid gap-1 py-4 sm:grid-cols-[130px_1fr] sm:gap-5 ${destination.featured ? "text-forest" : ""}`}
                  >
                    <span className="text-sm font-bold">{destination.name}</span>
                    <span className="text-sm leading-6 text-muted-foreground">
                      {destination[id ? "id" : "en"]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="border-b border-border pb-4 font-display text-xl font-bold">
                {id ? "Kawasan Ekonomi Khusus Pariwisata" : "Tourism Special Economic Zones"}
              </h3>
              <ul className="grid divide-y divide-border sm:grid-cols-2 sm:gap-x-8 sm:divide-y-0">
                {tourismZones.map(([name, region]) => (
                  <li
                    key={name}
                    className="flex flex-col justify-center border-b border-border py-3"
                  >
                    <span className="text-sm font-bold">{name}</span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {id
                        ? region === "Riau Islands"
                          ? "Kepulauan Riau"
                          : region === "Bangka Belitung"
                            ? "Kepulauan Bangka Belitung"
                            : region === "West Java"
                              ? "Jawa Barat"
                              : region === "East Java"
                                ? "Jawa Timur"
                                : region === "East Nusa Tenggara"
                                  ? "Nusa Tenggara Timur"
                                  : region === "North Sulawesi"
                                    ? "Sulawesi Utara"
                                    : region === "North Maluku"
                                      ? "Maluku Utara"
                                      : region
                        : region}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist section-space">
        <div className="container-portal grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow text-forest">{id ? "Pasar wisata" : "Visitor market"}</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-tight md:text-4xl">
              {id ? "Kunjungan wisatawan Sumatera Utara" : "Tourist arrivals in North Sumatra"}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">
              {id
                ? "Data tingkat provinsi dalam materi sumber, bukan jumlah khusus Danau Toba. Setiap grafik memiliki skala tersendiri."
                : "Province-wide figures from the source brief, not Lake Toba-only counts. Each chart uses its own scale."}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-forest">
              <Users size={15} />
              {id ? "Wisatawan mancanegara dan domestik" : "Foreign and domestic tourists"}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <ArrivalBars
              title={id ? "Mancanegara" : "Foreign tourists"}
              values={arrivals.foreign}
              format={number.format}
            />
            <ArrivalBars
              title={id ? "Domestik" : "Domestic tourists"}
              values={arrivals.domestic}
              format={number.format}
            />
          </div>
        </div>
        <div className="container-portal mt-8 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">
          {id
            ? "Periode data pada materi: 2022–2024. Angka disalin dari PDF Lake Toba yang diberikan."
            : "Period shown in the source brief: 2022–2024. Figures transcribed from the supplied Lake Toba PDF."}
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow text-forest">{id ? "Konektivitas" : "Connectivity"}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {id ? "Terhubung melalui Silangit" : "Connected via Silangit"}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {id
                ? "Materi sumber mencantumkan Bandara Internasional Silangit sebagai gerbang udara."
                : "The source brief identifies Silangit International Airport as an air gateway."}
            </p>
          </div>
          <div className="grid gap-0 border-y border-border sm:grid-cols-2 sm:divide-x sm:divide-border">
            <div className="flex items-center gap-5 py-6 sm:pr-8">
              <Plane className="shrink-0 text-forest" size={22} />
              <div>
                <p className="font-display text-3xl font-extrabold">73 km</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {id
                    ? "Dari Bandara Internasional Silangit"
                    : "From Silangit International Airport"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 border-t border-border py-6 sm:border-t-0 sm:pl-8">
              <MapPin className="shrink-0 text-forest" size={22} />
              <div>
                <p className="font-display text-3xl font-extrabold">2 {id ? "jam" : "hours"}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {id ? "Perjalanan berkendara dari bandara" : "Drive from the airport"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist section-space">
        <div className="container-portal">
          <div className="flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-forest">{id ? "Rencana induk" : "Masterplan"}</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold md:text-4xl">
                {id ? "Peluang Investasi Utama" : "Main Investment Opportunities"}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              {id
                ? "Luas plot indikatif sebagaimana tercantum dalam materi sumber."
                : "Indicative plot areas as listed in the source brief."}
            </p>
          </div>
          <div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-4">
            {opportunities.map((opportunity, index) => (
              <article
                key={opportunity.en}
                className="border-b border-border py-6 sm:px-5 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-xs font-bold text-forest">0{index + 1}</span>
                <h3 className="mt-5 min-h-12 font-display text-lg font-bold leading-6">
                  {opportunity[id ? "id" : "en"]}
                </h3>
                <p className="mt-5 font-display text-2xl font-extrabold tabular-nums">
                  {number.format(opportunity.area)}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  m² {id ? "luas plot" : "plot area"}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            {id
              ? "Rincian peluang dan status ketersediaan lahan perlu dikonfirmasi kepada BPODT."
              : "Opportunity details and current land availability should be confirmed with BPODT."}
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow text-forest">2024</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {id ? "Acara Unggulan" : "Signature Events"}
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {id
                ? "Edisi acara yang tercantum dalam materi sumber tahun 2024."
                : "Event editions listed in the 2024 source material."}
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {events.map((event) => (
              <article
                key={event.name}
                className="grid gap-4 py-6 sm:grid-cols-[130px_1fr] sm:gap-8"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest">
                  <CalendarDays size={15} />
                  2024
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{event.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {event[id ? "id" : "en"]}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist section-space">
        <div className="container-portal grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="eyebrow text-forest">{id ? "Jelajahi kawasan" : "Explore the region"}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {id ? "Atraksi Wisata" : "Tourist Attraction"}
            </h2>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {attractions.map((attraction, index) => (
              <li
                key={attraction.name.en}
                className="grid gap-3 py-5 sm:grid-cols-[48px_1fr] sm:gap-5"
              >
                <span className="font-display text-lg font-bold text-forest">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {attraction.name[id ? "id" : "en"]}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                    {attraction.description[id ? "id" : "en"]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
