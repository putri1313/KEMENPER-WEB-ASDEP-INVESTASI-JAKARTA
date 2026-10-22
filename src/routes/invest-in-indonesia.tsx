import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { themes } from "@/data/portal";
import aerial from "@/assets/indonesia-aerial.jpg";
import { getLocalizedContent, localizedContent } from "@/lib/localized-content";
import { useSitePreferences } from "@/lib/site-preferences";

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

const whyInvestItems = [
  {
    title: "Favourable Business Climate",
    copy: "A supportive policy environment helps tourism businesses plan and grow with confidence.",
  },
  {
    title: "Strategic Connectivity",
    copy: "Air, sea, and land links connect visitors to destinations across the archipelago.",
  },
  {
    title: "Diverse Tourism Landscape",
    copy: "Nature, culture, marine, wellness, gastronomy, and urban experiences create many paths to invest.",
  },
  {
    title: "Young & Productive Talent",
    copy: "A dynamic workforce brings energy, skills, and local knowledge to tourism growth.",
  },
  {
    title: "Untapped Niche Potential",
    copy: "Emerging specialist experiences open room for distinctive, high-quality development.",
  },
] as const;

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
          className="absolute inset-0 size-full object-cover opacity-55"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="container-portal relative flex min-h-[62vh] items-end py-14 md:py-20">
          <div className="max-w-4xl">
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
              {t(
                "Tourism in Indonesia is full of potential, driven by global demand for authentic and diverse travel experiences. Here are five reasons to invest.",
              )}
            </p>
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {whyInvestItems.map((item, index) => (
                <article
                  key={item.title}
                  className="border-t border-primary-foreground/20 pt-4 transition-colors hover:border-gold"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-bold tracking-wider text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-sm font-extrabold leading-snug md:text-base">
                      {t(item.title)}
                    </h3>
                  </div>
                  <p className="mt-2 pl-8 text-xs leading-5 text-primary-foreground/65 md:text-sm">
                    {t(item.copy)}
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

      <section className="section-space bg-mist">
        <div className="container-portal">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-4 text-forest">{local(c("Sectors", "Sektor"))}</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
              {local(c("Where tourism investment can grow", "Ruang untuk mengembangkan investasi pariwisata"))}
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
              {local(c(
                "Explore tourism themes that connect Indonesia’s destination strengths with visitor experiences, infrastructure, and local enterprise.",
                "Jelajahi tema pariwisata yang menghubungkan keunggulan destinasi Indonesia dengan pengalaman wisata, infrastruktur, dan usaha lokal.",
              ))}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((theme) => (
              <article key={theme.title.en} className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-navy text-primary-foreground">
                <img
                  src={theme.image}
                  alt=""
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="image-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <Sparkles size={18} className="text-gold" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-lg font-extrabold">
                    {getLocalizedContent(theme.title, language)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/75">
                    {getLocalizedContent(theme.description, language)}
                  </p>
                </div>
              </article>
            ))}
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
              <li key={step.en} className="flex items-start gap-5 border-t border-border py-5">
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
