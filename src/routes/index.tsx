import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import {
  DestinationCarousel,
  Newsletter,
  SectionHeader,
  YouTubeScrollPlayer,
} from "@/components/portal-components";
import { ButtonLink } from "@/components/ui";
import { useSitePreferences } from "@/lib/site-preferences";
import {
  regenerativeDestinations,
  priorityDestinations,
} from "@/data/portal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Indonesia Tourism Investment — Strategic Destinations" },
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
const FEATURED_VIDEO_ID = "e9G5CJ4N54A";
function Home() {
  const { t } = useSitePreferences();
  return (
    <div className="home-page">
      <section className="relative flex min-h-[82vh] overflow-hidden bg-navy text-primary-foreground">
        <img
          src={aerial}
          alt={t("Aerial view of Indonesia's islands and coast")}
          width={1920}
          height={1080}
          className="slow-zoom absolute inset-0 size-full object-cover"
        />
        <div className="hero-shade absolute inset-0" />
        <div className="container-portal relative flex flex-col justify-end pb-10 pt-36">
          <div className="reveal max-w-4xl">
          <p className="eyebrow text-gold">{t("Indonesia Tourism Investment")}</p>
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
            {([
              ["3", "Regenerative Destinations"],
              ["10", "Priority Destinations"],
              ["13", "Strategic Tourism Destinations"],
              ["Indonesia", "Tourism Investment Landscape"],
            ] as const).map(([n, l]) => (
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
              <YouTubeScrollPlayer videoId={FEATURED_VIDEO_ID} title={t("Indonesia tourism video")} />
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
                href="https://youtu.be/e9G5CJ4N54A"
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
            label="Regenerative destinations · 01"
            title="3 Regenerative Tourism Destinations"
            copy="Explore destinations where tourism development is directed toward strengthening destination quality, sustainability, resilience, and long-term value."
          />
          <DestinationCarousel items={regenerativeDestinations} label="Regenerative destinations" />
        </div>
      </section>
      <section className="section-space">
        <div className="container-portal">
          <SectionHeader
            label="Priority destinations · 02"
            title="10 Priority Tourism Destinations"
            copy="Explore strategic destinations across Indonesia with diverse tourism development and investment opportunities."
          />
          <DestinationCarousel items={priorityDestinations} label="Priority destinations" />
        </div>
      </section>
      <Newsletter />
    </div>
  );
}
