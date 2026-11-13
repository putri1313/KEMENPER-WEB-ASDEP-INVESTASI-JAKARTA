import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Coins,
  Globe2,
  Plane,
  Users,
  WalletCards,
} from "lucide-react";
import { useState } from "react";
import aerial from "@/assets/indonesia-aerial.jpg";
import culture from "@/assets/indonesia-culture.jpg";
import {
  DestinationCarousel,
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
      { title: "Invest in Wonderful Indonesia!" },
      {
        name: "description",
        content:
          "Discover regenerative and priority tourism destinations with sustainable investment opportunities across Indonesia.",
      },
      { property: "og:title", content: "Invest in Wonderful Indonesia!" },
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
const FEATURED_VIDEO_ID = "mdyrb-thpI0";
function Home() {
  const { t } = useSitePreferences();
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const metrics = [
    { value: "10.58 million", label: "International visitors", change: "+5.38% compared with Jan–Jun 2025", target: "2026 target: 16.00–17.00 million", period: "Jan–Jun 2026", description: "International arrivals continue to strengthen Indonesia’s position as a leading destination in Asia.", icon: Plane },
    { value: "US$1,313", label: "Average Spending per Arrival (ASPA)", change: "+6.36% compared with Jan–Jun 2025 · IDR 22.59 million", target: "2026 target: US$1,330", period: "Jan–Jun 2026", description: "Higher spending per arrival reflects the opportunity to grow quality, length-of-stay, and high-value tourism experiences.", icon: WalletCards },
    { value: "US$8.43 billion", label: "Tourism foreign exchange", change: "+2.80% compared with Jan–Jun 2025 · IDR 140.95 trillion", target: "2026 target: US$21.22–22.60 billion", period: "Jan–Jun 2026", description: "Tourism continues to contribute valuable foreign exchange through visitor spending across destinations and experiences.", icon: Coins },
    { value: "0.84 billion", label: "Domestic tourist trips", change: "+4.29% compared with Jan–Jun 2025", target: "2026 target: 1.18 billion", period: "Jan–Jun 2026", description: "A strong domestic market supports destinations throughout Indonesia and creates resilient local economic activity.", icon: Globe2 },
    { value: "25.91 million", label: "Tourism workforce", change: "+3.64% compared with 2024", target: "2026 target: 26.04 million", period: "2025", description: "The growing tourism workforce strengthens services, community participation, and the sector’s long-term competitiveness.", icon: Users },
    { value: "4.02–4.90%", label: "Tourism contribution to GDP", change: "+0.07–0.95 percentage points compared with 2025", target: "2026 target: 4.6–4.7%", period: "Jan–Jun 2026", description: "Tourism remains an important contributor to national economic growth and regional development.", icon: BriefcaseBusiness },
    { value: "Top 23", label: "Travel and Tourism Development Index (TTDI)", change: "+0.10 index points compared with 2024 (2026: 4.56; 2024: 4.46)", target: "", period: "2026", description: "Indonesia’s global ranking reflects progress in the conditions that support travel and tourism development.", icon: ChartNoAxesCombined },
    { value: "IDR 39.68 trillion", label: "Tourism investment (LKPM)", change: "+16.64% compared with Jan–Jun 2025", target: "2026 target: IDR 63.51 trillion", period: "Jan–Jun 2026", description: "Investment momentum creates new opportunities for destinations, infrastructure, hospitality, and tourism services.", icon: Coins },
  ] as const;
  const selectedMetric = activeMetric === null ? null : metrics[activeMetric];
  const SelectedIcon = selectedMetric?.icon;
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
          <p className="eyebrow text-gold">{t("Invest in Wonderful Indonesia!")}</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl 2xl:text-8xl">
              {t("Invest in Wonderful Indonesia!")}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/75 md:text-lg">
              {t(
                "Discover Indonesia’s diverse tourism destinations and invest in sustainable and green opportunities that drive economic growth and create lasting value for local communities.",
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
          <div className="home-stat-strip mt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <p className="font-display text-xl font-extrabold text-primary-foreground md:text-2xl">
                {t("2026 achievements")} <span className="text-gold">|</span>{" "}
                {t("Continuing to grow in the expected direction")}
              </p>
            </div>
            <div className="home-stat-tabs" role="tablist" aria-label={t("2026 tourism achievements")}>
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <button
                    key={metric.label}
                    type="button"
                    role="tab"
                    aria-selected={activeMetric === index}
                    aria-controls={`metric-panel-${index}`}
                    className={`home-stat-tab ${activeMetric === index ? "is-active" : ""}`}
                    onClick={() => setActiveMetric(activeMetric === index ? null : index)}
                  >
                    <Icon size={17} aria-hidden="true" />
                    <span>{t(metric.label)}</span>
                  </button>
                );
              })}
            </div>
            {selectedMetric && SelectedIcon && activeMetric !== null && (
              <div id={`metric-panel-${activeMetric}`} role="tabpanel" className="home-stat-detail" key={selectedMetric.label}>
                <div className="home-stat-detail-icon"><SelectedIcon size={24} aria-hidden="true" /></div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="eyebrow text-gold">{t(selectedMetric.period)}</p>
                    <h3 className="text-sm font-bold text-primary-foreground/85">{t(selectedMetric.label)}</h3>
                  </div>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p className="font-display text-3xl font-extrabold tracking-tight text-primary-foreground md:text-4xl">{t(selectedMetric.value)}</p>
                    <p className="text-xs font-semibold text-primary-foreground/70">{t(selectedMetric.change)}</p>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {selectedMetric.target && <p className="inline-flex rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-[11px] font-bold text-gold">{t(selectedMetric.target)}</p>}
                    <p className="text-xs leading-5 text-primary-foreground/55">{t(selectedMetric.description)}</p>
                  </div>
                </div>
                <div className="home-stat-progress" aria-hidden="true"><span style={{ width: `${((activeMetric + 1) / metrics.length) * 100}%` }} /></div>
              </div>
            )}
            <p className="mt-4 pb-1 text-[10px] leading-5 text-primary-foreground/45">
              {t("Source: Ministry of Tourism performance dashboard, Jan–Jun 2026.")}
            </p>
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
              <div className="tourism-opportunity-note mt-4">
                <span className="tourism-opportunity-note__line" aria-hidden="true" />
                <p>{t("Where Tourism Potential Meets Investment Opportunity.")}</p>
                <p className="tourism-opportunity-note__copy">
                  {t(
                    "From pristine coastlines to vibrant cultural landscapes, Indonesia offers diverse opportunities to build sustainable tourism businesses and create lasting value.",
                  )}
                </p>
              </div>
              <a
                href="https://www.youtube.com/watch?v=mdyrb-thpI0"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold/45 px-4 py-2.5 text-sm font-extrabold text-gold transition hover:gap-3 hover:bg-gold hover:text-navy"
              >
                {t("See the video more clearly")} <ArrowRight size={16} />
              </a>
            </div>
          </article>
          <SectionHeader
            light
            label="Priority destinations · 02"
            title="10 Priority Tourism Destinations"
            copy="Explore strategic destinations across Indonesia with diverse tourism development and investment opportunities."
          />
          <DestinationCarousel items={priorityDestinations} label="Priority destinations" />
        </div>
      </section>
      <section className="section-space">
        <div className="container-portal">
          <SectionHeader
            label="Regenerative destinations · 01"
            title="3 Regenerative Tourism Destinations"
            copy="Explore destinations where tourism development is directed toward strengthening destination quality, sustainability, resilience, and long-term value."
          />
          <DestinationCarousel items={regenerativeDestinations} label="Regenerative destinations" />
        </div>
      </section>
    </div>
  );
}
