import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Leaf } from "lucide-react";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import {
  DestinationCarousel,
  DestinationExplorer,
  InquiryForm,
  Newsletter,
  OpportunityCard,
  SectionHeader,
  YouTubeScrollPlayer,
} from "@/components/portal-components";
import { ButtonLink } from "@/components/ui";
import { useSitePreferences } from "@/lib/site-preferences";
import {
  publications,
  regenerativeDestinations,
  priorityDestinations,
  sampleOpportunities,
  themes,
} from "@/data/portal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indonesia Tourism Investment â€” Strategic Destinations" },
      {
        name: "description",
        content:
          "Discover regenerative and priority tourism destinations with sustainable investment opportunities across Indonesia.",
      },
      { property: "og:title", content: "Indonesia Tourism Investment" },
      {
        property: "og:description",
        content:
          "Explore five reasons to invest in Indonesia tourism, from connectivity and talent to diverse destination experiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
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
function Home() {
  const { t } = useSitePreferences();
  return (
    <div className="home-page">
      <section className="relative flex min-h-[88vh] overflow-hidden bg-navy text-primary-foreground">
        <img
          src={aerial}
          alt="Aerial view of Indonesia's islands and coast"
          width={1920}
          height={1080}
          className="slow-zoom absolute inset-0 size-full object-cover"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="container-portal relative flex flex-col justify-end pb-10 pt-36">
          <div className="reveal max-w-4xl">
            <p className="eyebrow text-gold">Indonesia Tourism Investment</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl 2xl:text-8xl">
              {t("Invest in Indonesia Tourism Destinations")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">
              {t(
                "Discover regenerative and priority tourism destinations with opportunities for sustainable development, investment, and long-term economic growth.",
              )}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/destinations" variant="gold">
                {t("Explore Destinations")} <ArrowRight size={17} />
              </ButtonLink>
              <ButtonLink to="/opportunities" variant="light">
                {t("Explore Investment Opportunities")}
              </ButtonLink>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 border-y border-primary-foreground/25 md:grid-cols-4">
            {[
              ["3", "Regenerative Destinations"],
              ["10", "Priority Destinations"],
              ["13", "Strategic Tourism Destinations"],
              ["Indonesia", "Tourism Investment Landscape"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="border-primary-foreground/20 px-4 py-5 md:border-l first:md:border-l-0"
              >
                <strong className="font-display text-2xl md:text-3xl">{n}</strong>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[.12em] text-primary-foreground/60">
                  {t(l)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-primary-foreground">
        <div className="container-portal">
          <article className="mb-14 grid overflow-hidden rounded-xl border border-primary-foreground/15 bg-background/5 shadow-card lg:grid-cols-[1.3fr_.7fr]">
            <div className="relative aspect-video min-h-56 bg-black lg:min-h-[22rem]">
              <YouTubeScrollPlayer videoId="7KgrwtfMsKc" title="Indonesia tourism video" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-9 lg:p-10">
              <p className="eyebrow text-gold">{t("Discover Indonesia")}</p>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight md:text-3xl">
                {t("A closer look at Indonesia’s tourism potential")}
              </h2>
              <p className="mt-4 text-sm leading-6 text-primary-foreground/70">
                {t(
                  "Explore the natural beauty, cultural heritage, and local stories that make Indonesia a remarkable place to visit and invest.",
                )}
              </p>
              <p className="mt-4 text-xs font-semibold text-primary-foreground/50">
                {t("Starts muted when visible and pauses when you scroll away")}
              </p>
              <a
                href="https://www.youtube.com/watch?v=7KgrwtfMsKc"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-gold transition hover:gap-3"
              >
                {t("Watch on YouTube")} <ArrowRight size={16} />
              </a>
            </div>
          </article>
          <SectionHeader
            light
            label="Regenerative destinations Â· 01"
            title="3 Regenerative Tourism Destinations"
            copy="Explore destinations where tourism development is directed toward strengthening destination quality, sustainability, resilience, and long-term value."
          />
          <DestinationCarousel items={regenerativeDestinations} label="Regenerative destinations" />
        </div>
      </section>
      <section className="section-space">
        <div className="container-portal">
          <SectionHeader
            label="Priority destinations Â· 02"
            title="10 Priority Tourism Destinations"
            copy="Explore strategic destinations across Indonesia with diverse tourism development and investment opportunities."
          />
          <DestinationCarousel items={priorityDestinations} label="Priority destinations" />
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="container-portal">
          <SectionHeader
            label="Destination ecosystem"
            title="Explore Destinations"
            copy="Search and filter Indonesiaâ€™s regenerative and priority tourism landscape."
          />
          <DestinationExplorer />
        </div>
      </section>
      <section className="section-space overflow-hidden bg-navy text-primary-foreground">
        <div className="container-portal grid gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
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
      <section className="home-themes section-space bg-navy text-primary-foreground">
        <div className="container-portal">
          <SectionHeader
            light
            label="Thematic opportunities"
            title="Explore Tourism Investment Themes"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {themes.map((t) => (
              <article
                key={t.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm"
              >
                <img
                  src={t.image}
                  alt=""
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="image-shade absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <Leaf size={20} className="text-gold" />
                  <h3 className="mt-4 font-display text-xl font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/65">
                    {t.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-portal">
          <SectionHeader
            label="Investment profiles · May 2025 draft"
            title="Investment Opportunities"
            copy="Selected destinations and tourism SEZ profiles from the investment opportunities book. Figures and project details are reproduced from the draft and should be verified before use."
            actions={
              <ButtonLink to="/opportunities" variant="outline">
                View all opportunities <ArrowRight size={16} />
              </ButtonLink>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sampleOpportunities.map((x) => (
              <OpportunityCard key={x.name} item={x} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-mist">
        <div className="container-portal">
          <SectionHeader
            label="Portfolio pathways"
            title="Project Classification"
            copy="Explore projects by institutional context and thematic sector. Ownership classifications and tourism themes are presented separately."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-forest">Ownership & authority</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Tourism Authority", "Special Economic Zones", "Private Companies"].map((x) => (
                  <div className="border bg-card p-5 font-bold" key={x}>
                    <Building2 className="mb-5 text-gold" />
                    {x}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow text-forest">Thematic sectors</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {["Marine", "Wellness", "Gastronomy", "Nature", "Culture"].map((x) => (
                  <div className="border bg-card p-4 text-sm font-bold" key={x}>
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-portal">
          <SectionHeader
            label="Knowledge & insight"
            title="Latest Publications"
            actions={
              <ButtonLink to="/newsletter" variant="outline">
                All publications <ArrowRight size={16} />
              </ButtonLink>
            }
          />
          <div className="grid gap-6 md:grid-cols-3">
            {publications.map((p) => (
              <article key={p.title}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="size-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <p className="eyebrow mt-5 text-forest">
                  {p.category} Â· {p.date}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{p.excerpt}</p>
                <Link
                  to="/newsletter"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold"
                >
                  Read More <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-navy text-primary-foreground">
        <div className="container-portal">
          <SectionHeader
            light
            label="Investor perspectives"
            title="Straight from Our Investors"
            copy="Placeholder content shown until verified investor testimonials are approved."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <blockquote key={n} className="border border-primary-foreground/20 p-7">
                <p className="text-lg leading-8">â€œInvestor Testimonial Placeholderâ€</p>
                <footer className="mt-8 border-t border-primary-foreground/15 pt-5 text-xs text-primary-foreground/55">
                  This content can later be replaced with a verified testimonial.
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
      <section className="section-space">
        <div className="container-portal grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-forest">Start a conversation</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold">
              Contact & Investment Inquiries
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              Have questions about tourism investment opportunities or destination development? Get
              in touch with our team.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
