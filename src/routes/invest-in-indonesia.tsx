import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import aerial from "@/assets/indonesia-aerial.jpg";
import { getLocalizedContent, localizedContent } from "@/lib/localized-content";
import { useSitePreferences } from "@/lib/site-preferences";
import { investmentReasons } from "@/data/investor-overview";
import { TourismImpactTimeline } from "@/components/tourism-impact-timeline";

export const Route = createFileRoute("/invest-in-indonesia")({
  head: () => ({
    meta: [
      { title: "Invest in Indonesia | Tourism Investment" },
      {
        name: "description",
        content:
          "Explore the strengths, tourism sectors, and investment pathways that make Indonesia an attractive place to build long-term tourism value.",
      },
    ],
  }),
  component: InvestInIndonesiaPage,
});

const c = localizedContent;

const steps = [
  c("Choose a sector and destination", "Pilih sektor dan destinasi"),
  c("Review project details and applicable regulations", "Tinjau detail proyek dan peraturan yang berlaku"),
  c("Contact the relevant investment or destination team", "Hubungi tim investasi atau pengelola destinasi terkait"),
];

function InvestInIndonesiaPage() {
  const { language, t } = useSitePreferences();
  const local = (content: ReturnType<typeof localizedContent>) =>
    getLocalizedContent(content, language);

  return (
    <>
      <section className="relative min-h-[68vh] overflow-hidden bg-navy pt-20 text-primary-foreground">
        <img
          src={aerial}
          alt={local(c("Indonesian islands and coastline", "Kepulauan dan garis pantai Indonesia"))}
          width={1920}
          height={1080}
          className="slow-zoom absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="container-portal relative flex min-h-[62vh] items-end py-14 md:py-20">
          <div className="max-w-4xl reveal">
            <p className="eyebrow text-gold">
              {local(c("Indonesia tourism investment", "Investasi pariwisata Indonesia"))}
            </p>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] md:text-7xl">
              {local(c("Invest in Indonesia", "Investasi di Indonesia"))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">
              {local(
                c(
                  "Build tourism experiences that connect Indonesia’s distinctive places with long-term, responsible investment.",
                  "Kembangkan pengalaman pariwisata yang menghubungkan keunikan Indonesia dengan investasi yang bertanggung jawab dan berjangka panjang.",
                ),
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to="/opportunities" variant="gold">
                {local(c("Explore opportunities", "Jelajahi peluang"))} <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink to="/regulations" variant="light">
                {local(c("Review the regulations", "Pelajari regulasi"))}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-1 bg-background py-8 md:py-10">
        <div className="container-portal">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between reveal">
            <div>
              <p className="eyebrow text-forest">
                {local(c("Investment snapshot · 2024", "Ringkasan investasi · 2024"))}
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">
                {local(c("Tourism sector momentum", "Momentum sektor pariwisata"))}
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-5 text-muted-foreground">
              {local(c("Realization reported in the May 2025 book; not live data.", "Realisasi dalam buku Mei 2025; bukan data waktu nyata."))}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [local(c("Total realization", "Total realisasi")), "IDR 47.13T"],
              [local(c("2024 target", "Target 2024")), "IDR 45T"],
              [local(c("Target achievement", "Pencapaian target")), "104.67%"],
              [local(c("Domestic · 62.96%", "PMDN · 62,96%")), "IDR 29.69T"],
              [local(c("Foreign · 37.03%", "PMA · 37,03%")), "IDR 17.45T"],
              [local(c("Jobs created", "Lapangan kerja")), "109,815"],
            ].map(([label, value], index) => (
              <article
                className="reveal border border-border bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-forest/50 hover:shadow-soft motion-reduce:transform-none"
                key={label}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-xs font-semibold text-muted-foreground">{label}</p>
                <p className="mt-2 font-display text-2xl font-extrabold tabular-nums text-forest md:text-3xl">
                  {value}
                </p>
                {index === 5 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {local(c("+30.8% year on year", "+30,8% dibanding tahun sebelumnya"))}
                  </p>
                )}
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            {local(c(
              "Source: Final Draft Summary of Investment Opportunities Book, May 2025. The summary reports foreign investment at IDR 17.45T; the trend chart shows IDR 17.44T, reflecting a rounding/source discrepancy.",
              "Sumber: Final Draft Summary of Investment Opportunities Book, Mei 2025. Ringkasan menyebut PMA IDR 17,45T; grafik tren pada dokumen menampilkan IDR 17,44T karena pembulatan/perbedaan sumber.",
            ))}
          </p>
        </div>
      </section>

      <TourismImpactTimeline />

      <section className="section-space overflow-hidden bg-navy text-primary-foreground">
        <div className="container-portal grid gap-8 lg:grid-cols-[.92fr_1.08fr] lg:gap-12">
          <div className="relative">
            <span className="mb-6 block h-1 w-12 bg-gold" />
            <p className="eyebrow text-gold">{t("The investment case")}</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[1.08] md:text-5xl xl:text-6xl">
              {t("Why You Should Invest in Indonesia’s Tourism?")}
            </h2>
          </div>
          <div className="lg:pt-1">
            <p className="max-w-2xl text-sm leading-7 text-primary-foreground/75 md:text-base">
              {local(c(
                "These five reasons summarize the business climate, connectivity, destination diversity, talent, and opportunity segments described in the tourism investment book.",
                "Lima alasan ini merangkum iklim usaha, konektivitas, keragaman destinasi, talenta, dan segmen peluang yang dipaparkan dalam buku investasi pariwisata.",
              ))}
            </p>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {investmentReasons.map((item, index) => (
                <article
                  key={item.title.en}
                  className="reveal border-t border-primary-foreground/20 pt-4 transition-colors hover:border-gold"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm font-extrabold leading-snug md:text-base">
                      {local(item.title)}
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-xs leading-5 text-primary-foreground/65 md:text-sm">
                    {local(item.detail)}
                  </p>
                </article>
              ))}
            </div>
            <ButtonLink
              to="/destinations"
              variant="outline"
              className="mt-8 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10"
            >
              {t("Explore the Destination Landscape")} <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="eyebrow text-forest">
              {local(c("Getting started", "Langkah awal"))}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              {local(c("Turn an idea into a clear next step", "Ubah gagasan menjadi langkah yang jelas"))}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              {local(
                c(
                  "Project requirements and available pathways vary by activity and location. Start with the relevant project information and confirm requirements with the responsible authorities.",
                  "Persyaratan proyek dan jalur yang tersedia berbeda menurut kegiatan dan lokasi. Mulailah dari informasi proyek yang relevan dan konfirmasikan persyaratan kepada instansi berwenang.",
                ),
              )}
            </p>
          </div>
          <ol className="grid content-start gap-4">
            {steps.map((step, index) => (
              <li
                key={step.en}
                className="reveal flex items-start gap-5 border-t border-border py-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-mono text-sm font-bold text-forest">0{index + 1}</span>
                <span className="font-display text-lg font-bold">{local(step)}</span>
              </li>
            ))}
            <li className="rounded-sm bg-sand p-5 text-sm leading-6 text-muted-foreground">
              {local(
                c(
                  "This page is an overview. Verify current project, licensing, and incentive details through official sources before making an investment decision.",
                  "Halaman ini merupakan gambaran umum. Verifikasi informasi proyek, perizinan, dan insentif terkini melalui sumber resmi sebelum mengambil keputusan investasi.",
                ),
              )}
            </li>
          </ol>
        </div>
      </section>

      <section className="section-space bg-navy text-primary-foreground">
        <div className="container-portal flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">
              {local(c("Continue your research", "Lanjutkan penelusuran"))}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">
              {local(c("Find the right path for your project", "Temukan jalur yang sesuai untuk proyek Anda"))}
            </h2>
            <p className="mt-4 text-sm leading-7 text-primary-foreground/70">
              {local(
                c(
                  "Review illustrative opportunities, understand the regulatory framework, or contact the tourism investment team.",
                  "Tinjau contoh peluang, pahami kerangka regulasi, atau hubungi tim investasi pariwisata.",
                ),
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/opportunities" variant="gold">
              {local(c("Investment opportunities", "Peluang investasi"))} <ArrowRight size={16} />
            </ButtonLink>
            <Link to="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-primary-foreground/35 px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary-foreground/10">
              {local(c("Contact us", "Hubungi kami"))} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
