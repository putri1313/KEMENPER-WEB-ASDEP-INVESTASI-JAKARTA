import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import marine from "@/assets/indonesia-marine.jpg";
import urban from "@/assets/indonesia-urban.jpg";
import { getLocalizedContent, localizedContent } from "@/lib/localized-content";
import { useSitePreferences } from "@/lib/site-preferences";
import { whyIndonesiaIntro, whyIndonesiaSections } from "@/data/investor-why-indonesia";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  c(
    "Review project details and applicable regulations",
    "Tinjau detail proyek dan peraturan yang berlaku",
  ),
  c(
    "Contact the relevant investment or destination team",
    "Hubungi tim investasi atau pengelola destinasi terkait",
  ),
];

function InvestInIndonesiaPage() {
  const { language, t } = useSitePreferences();
  const [activeWhyTab, setActiveWhyTab] = useState("0");
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
              {local(c("Why Invest in Indonesia?", "Mengapa Berinvestasi di Indonesia?"))}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">
              {local(
                c(
                  "Explore five reasons Indonesia is a compelling destination for long-term tourism investment.",
                  "Kenali lima alasan Indonesia menjadi tujuan menarik untuk investasi pariwisata jangka panjang.",
                ),
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-sand/45">
        <div className="container-portal">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow text-forest">{t("The investment case")}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-5xl">
              {local(c("5 Reasons to Invest", "5 Alasan untuk Berinvestasi"))}
            </h2>
          </div>

          <Tabs
            value={activeWhyTab}
            onValueChange={setActiveWhyTab}
            orientation="vertical"
            className="grid gap-6 lg:grid-cols-[minmax(15rem,.36fr)_minmax(0,1fr)] lg:gap-12"
          >
            <TabsList
              aria-label={t("Why Indonesia topics")}
              className="flex h-auto w-full flex-col items-stretch gap-2 bg-transparent p-0"
            >
              {whyIndonesiaSections.map((item, index) => (
                <TabsTrigger
                  key={item.title.en}
                  value={String(index)}
                  className="reveal h-auto w-full justify-start gap-4 whitespace-normal rounded-none border border-transparent bg-transparent px-4 py-4 text-left text-foreground shadow-none transition duration-300 hover:border-border hover:bg-card/60 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-soft md:px-5 md:py-5"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="self-baseline font-mono text-xs font-bold text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-wrap font-display text-sm font-extrabold leading-5 md:text-base">
                    {local(item.title)}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="min-w-0">
              {whyIndonesiaSections.map((item, index) => {
                const bulletList = item.bullets && (
                  <ul className="grid gap-3 pt-2 sm:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="flex items-start gap-3 border-t border-border pt-3 text-sm leading-6 text-foreground/80"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-forest" />
                        {local(bullet)}
                      </li>
                    ))}
                  </ul>
                );

                return (
                  <TabsContent key={item.title.en} value={String(index)} className="mt-0 reveal">
                    <article className="min-h-[26rem] border border-border bg-card p-6 shadow-soft md:min-h-[30rem] md:p-10">
                      <p className="eyebrow text-forest">
                        {local(
                          c(
                            `Reason ${String(index + 1).padStart(2, "0")}`,
                            `Alasan ${String(index + 1).padStart(2, "0")}`,
                          ),
                        )}
                      </p>
                      <h3 className="mt-4 max-w-3xl font-display text-2xl font-extrabold leading-tight md:text-4xl">
                        {local(item.title)}
                      </h3>
                      <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
                        {item.paragraphs.map((paragraph, paragraphIndex) => (
                          <div key={paragraph.en}>
                            <p>{local(paragraph)}</p>
                            {item.bulletsAfterParagraph === paragraphIndex && bulletList}
                          </div>
                        ))}
                        {item.bulletsAfterParagraph === undefined && bulletList}
                      </div>
                      <div className="mt-8 flex gap-4 border-t border-border pt-5">
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => setActiveWhyTab(String(index - 1))}
                            className="flex min-h-14 w-1/2 items-center justify-between gap-4 border border-border px-4 text-left transition hover:border-forest hover:bg-sand/40 md:p-5"
                          >
                            <span>
                              <span className="block text-xs font-bold text-muted-foreground">
                                {local(c("Previous", "Sebelumnya"))}
                              </span>
                              <span className="mt-1 hidden font-display text-sm font-bold md:block">
                                {local(whyIndonesiaSections[index - 1].title)}
                              </span>
                            </span>
                            <ArrowLeft size={18} aria-hidden="true" />
                          </button>
                        )}
                        {index < whyIndonesiaSections.length - 1 && (
                          <button
                            type="button"
                            onClick={() => setActiveWhyTab(String(index + 1))}
                            className="ml-auto flex min-h-14 w-1/2 items-center justify-between gap-4 border border-border px-4 text-left transition hover:border-forest hover:bg-sand/40 md:p-5"
                          >
                            <span>
                              <span className="block text-xs font-bold text-muted-foreground">
                                {local(c("Next", "Berikutnya"))}
                              </span>
                              <span className="mt-1 hidden font-display text-sm font-bold md:block">
                                {local(whyIndonesiaSections[index + 1].title)}
                              </span>
                            </span>
                            <ArrowRight size={18} aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    </article>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </section>

      <section className="section-space bg-background">
        <div className="container-portal">
          <div className="relative">
            <div className="relative h-72 overflow-hidden rounded-lg bg-navy md:h-[30rem] md:rounded-3xl">
              <img
                src={culture}
                alt={local(c("Indonesian culture and tourism", "Budaya dan pariwisata Indonesia"))}
                width={1920}
                height={1080}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-transparent to-transparent" />
            </div>
            <div className="relative mx-4 -mt-10 rounded-lg bg-card p-6 shadow-card md:absolute md:right-8 md:top-1/2 md:mt-0 md:w-[min(43%,34rem)] md:-translate-y-1/2 md:rounded-3xl md:p-8 lg:right-12 lg:p-10">
              <p className="eyebrow text-forest">{t("The investment case")}</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground md:text-base">
                {whyIndonesiaIntro.map((paragraph, index) => (
                  <p
                    key={paragraph.en}
                    className={index === 2 ? "font-semibold text-foreground" : undefined}
                  >
                    {local(paragraph)}
                  </p>
                ))}
              </div>
              <ButtonLink to="/destinations" variant="outline" className="mt-6">
                {t("Explore the Destination Landscape")} <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal grid gap-6 xl:grid-cols-[.9fr_3.1fr] xl:gap-8">
          <div className="flex flex-col items-start justify-center py-4 xl:py-10">
            <p className="eyebrow text-forest">{local(c("Getting started", "Langkah awal"))}</p>
            <h2 className="mt-4 max-w-lg font-display text-3xl font-extrabold leading-tight md:text-5xl">
              {local(
                c("Turn an idea into a clear next step", "Ubah gagasan menjadi langkah yang jelas"),
              )}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
              {local(
                c(
                  "Project requirements and available pathways vary by activity and location. Start with the relevant project information and confirm requirements with the responsible authorities.",
                  "Persyaratan proyek dan jalur yang tersedia berbeda menurut kegiatan dan lokasi. Mulailah dari informasi proyek yang relevan dan konfirmasikan persyaratan kepada instansi berwenang.",
                ),
              )}
            </p>
            <ButtonLink to="/contact" variant="gold" className="mt-7 rounded-full">
              {local(c("Contact us", "Hubungi kami"))} <ArrowRight size={16} />
            </ButtonLink>
            <p className="mt-6 max-w-sm text-xs leading-5 text-muted-foreground/80">
              {local(
                c(
                  "This page is an overview. Verify current project, licensing, and incentive details through official sources before making an investment decision.",
                  "Halaman ini merupakan gambaran umum. Verifikasi informasi proyek, perizinan, dan insentif terkini melalui sumber resmi sebelum mengambil keputusan investasi.",
                ),
              )}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                step: steps[0],
                eyebrow: c("Discover destinations", "Jelajahi destinasi"),
                image: marine,
                alt: c(
                  "Indonesia's islands and marine tourism",
                  "Kepulauan dan wisata bahari Indonesia",
                ),
                to: "/destinations" as const,
                tone: "from-[#071c5a]/95 via-[#071c5a]/20",
                text: "text-white",
              },
              {
                step: steps[1],
                eyebrow: c("Review requirements", "Tinjau persyaratan"),
                image: urban,
                alt: c("Indonesia's urban tourism landscape", "Lanskap wisata perkotaan Indonesia"),
                to: "/regulations" as const,
                tone: "from-forest/95 via-forest/15",
                text: "text-white",
              },
              {
                step: steps[2],
                eyebrow: c("Talk to our team", "Hubungi tim kami"),
                image: culture,
                alt: c("Indonesia's cultural tourism", "Pariwisata budaya Indonesia"),
                to: "/contact" as const,
                tone: "from-gold/95 via-gold/10",
                text: "text-navy",
              },
            ].map((item, index) => (
              <Link
                key={item.eyebrow.en}
                to={item.to}
                className="group reveal relative isolate flex min-h-[23rem] overflow-hidden rounded-sm bg-navy shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-soft sm:min-h-[27rem] xl:min-h-[34rem]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <img
                  src={item.image}
                  alt={local(item.alt)}
                  width={960}
                  height={1280}
                  loading="lazy"
                  className="absolute inset-0 -z-20 size-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-t ${item.tone} to-transparent transition duration-500 group-hover:opacity-90`}
                />
                <div className="mt-auto flex w-full items-end justify-between gap-4 p-5 md:p-6">
                  <div className={`max-w-[18rem] ${item.text}`}>
                    <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.16em] opacity-80">
                      0{index + 1} · {local(item.eyebrow)}
                    </p>
                    <h3 className="font-display text-lg font-extrabold leading-snug md:text-xl">
                      {local(item.step)}
                    </h3>
                  </div>
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-full border ${item.text === "text-navy" ? "border-navy/60" : "border-white/70 text-white"} transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-navy`}
                  >
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
