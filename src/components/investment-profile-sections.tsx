import { useSitePreferences } from "@/lib/site-preferences";
import type {
  BilingualCopy,
  InvestmentOpportunityProfile,
} from "@/data/investment-opportunity-profiles";

function ArrivalTable({ profile, id }: { profile: InvestmentOpportunityProfile; id: boolean }) {
  if (!profile.arrivals || !profile.arrivalRegion) return null;
  const format = new Intl.NumberFormat(id ? "id-ID" : "en-US");
  const years = [2022, 2023, 2024];

  return (
    <div className="mt-8 overflow-x-auto border-y border-border">
      <p className="py-3 text-xs font-bold uppercase tracking-wider text-forest">
        {id ? "Kunjungan wisatawan" : "Tourist arrivals"} ·{" "}
        {profile.arrivalRegion[id ? "id" : "en"]}
      </p>
      <table className="w-full min-w-[440px] text-left text-sm">
        <thead className="text-xs text-muted-foreground">
          <tr>
            <th className="py-2 pr-4 font-semibold">{id ? "Kategori" : "Category"}</th>
            {years.map((year) => (
              <th className="px-3 py-2 text-right font-semibold" key={year}>
                {year}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { label: id ? "Mancanegara" : "Foreign", values: profile.arrivals.foreign },
            { label: id ? "Domestik" : "Domestic", values: profile.arrivals.domestic },
          ].map((row) => (
            <tr key={row.label}>
              <th className="py-3 pr-4 text-xs font-bold">{row.label}</th>
              {row.values.map((value, index) => (
                <td
                  className="px-3 py-3 text-right text-xs tabular-nums text-muted-foreground"
                  key={years[index]}
                >
                  {value === null ? "n.a." : format.format(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="py-3 text-[11px] leading-5 text-muted-foreground">
        {id
          ? "Angka bersumber dari cakupan wilayah yang disebut pada materi, bukan selalu khusus destinasi."
          : "Figures use the regional scope stated in the source, not necessarily destination-only counts."}
      </p>
    </div>
  );
}

function ListSection({
  title,
  items,
  id,
}: {
  title: string;
  items: { name: BilingualCopy; description: BilingualCopy }[];
  id: boolean;
}) {
  return (
    <section className="section-space border-t border-border">
      <div className="container-portal grid gap-7 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
        <h3 className="font-display text-2xl font-extrabold md:text-3xl">{title}</h3>
        <ol className="divide-y divide-border border-y border-border">
          {items.map((item, index) => (
            <li className="grid gap-3 py-4 sm:grid-cols-[42px_1fr] sm:gap-5" key={item.name.en}>
              <span className="font-display text-sm font-bold text-forest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-display text-lg font-bold">{item.name[id ? "id" : "en"]}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description[id ? "id" : "en"]}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function InvestmentProfileSections({ profile }: { profile: InvestmentOpportunityProfile }) {
  const { language } = useSitePreferences();
  const id = language === "id";

  return (
    <div>
      <section className="bg-navy py-14 text-primary-foreground md:py-16">
        <div className="container-portal">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow text-accent">
                {profile.category === "Tourism SEZ"
                  ? id
                    ? "Kawasan Ekonomi Khusus Pariwisata"
                    : "Tourism Special Economic Zone"
                  : id
                    ? "Destinasi prioritas"
                    : "Priority destination"}
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
                {id ? "Deskripsi Umum" : "General Description"}
              </h2>
              <p className="mt-2 text-sm text-primary-foreground/70">
                {profile.name[id ? "id" : "en"]} · {profile.region[id ? "id" : "en"]}
              </p>
            </div>
            <dl className="grid gap-5 border-t border-primary-foreground/20 pt-5 sm:grid-cols-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/55">
                  {id ? "Nilai investasi di draf" : "Draft investment value"}
                </dt>
                <dd className="mt-2 font-display text-xl font-bold">{profile.value}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/55">
                  {id ? "Pengembang" : "Developer"}
                </dt>
                <dd className="mt-2 text-sm font-bold leading-5">
                  {profile.developer[id ? "id" : "en"]}
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/55">
                  {id ? "Luas kawasan" : "Area"}
                </dt>
                <dd className="mt-2 text-sm font-bold">{profile.area}</dd>
              </div>
            </dl>
          </div>
          <div className="mt-8 grid gap-5 border-t border-primary-foreground/20 pt-6 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                {profile.focus[id ? "id" : "en"]}
              </p>
              <p className="max-w-4xl text-sm leading-7 text-primary-foreground/80">
                {profile.overview[id ? "id" : "en"]}
              </p>
            </div>
            <p className="max-w-sm text-[11px] leading-5 text-primary-foreground/55">
              {id
                ? "Nilai dan uraian disalin atau diringkas dari draf Mei 2025; verifikasi kembali sebelum digunakan sebagai penawaran atau keputusan investasi."
                : "Values and descriptions are transcribed or summarized from the May 2025 draft; verify before treating them as live offers or making investment decisions."}
            </p>
          </div>
          {profile.access && (
            <div className="mt-6 flex flex-wrap items-start gap-x-8 gap-y-3 border-t border-primary-foreground/20 pt-5 text-sm text-primary-foreground/75">
              <span className="inline-flex items-center gap-2">
                <span className="font-bold text-accent">{id ? "Akses" : "Access"}</span>
                {profile.access[id ? "id" : "en"]}
              </span>
              {profile.contact && <span>{profile.contact}</span>}
            </div>
          )}
          <ArrivalTable profile={profile} id={id} />
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="eyebrow text-forest">{id ? "Masterplan" : "Masterplan"}</p>
            <h3 className="mt-3 font-display text-2xl font-extrabold md:text-3xl">
              {id ? "Peluang Investasi Utama" : "Main Investment Opportunities"}
            </h3>
          </div>
          <ol className="grid gap-x-8 sm:grid-cols-2">
            {profile.opportunities.map((item, index) => (
              <li className="flex gap-4 border-t border-border py-4" key={`${item.en}-${index}`}>
                <span className="text-xs font-bold text-forest">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold leading-6">{item[id ? "id" : "en"]}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ListSection
        title={id ? "Acara Unggulan" : "Signature Events"}
        items={profile.events}
        id={id}
      />
      <ListSection
        title={id ? "Atraksi Wisata" : "Tourist Attraction"}
        items={profile.attractions}
        id={id}
      />
    </div>
  );
}
