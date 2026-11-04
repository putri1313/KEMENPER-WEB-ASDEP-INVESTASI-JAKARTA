import { createFileRoute } from "@tanstack/react-router";
import { DestinationExplorer, PageHero } from "@/components/portal-components";
import aerial from "@/assets/indonesia-aerial.jpg";
import investmentMap from "@/assets/indonesia-investment-map.png";
import { useSitePreferences } from "@/lib/site-preferences";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations | Invest in Wonderful Indonesia!" },
      { name: "description", content: "Explore Indonesia's regenerative and priority tourism destinations." },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  const { t } = useSitePreferences();

  return <>
    <PageHero
      label={t("Indonesia tourism destinations")}
      title={t("Explore 13 strategic destinations")}
      copy={t("Discover regenerative and priority tourism areas, their distinctive character, and potential investment themes.")}
      image={aerial}
    />
    <section className="section-space">
      <div className="container-portal">
        <div className="destination-map-feature">
          <div className="destination-map-feature__intro">
            <p className="eyebrow text-forest">{t("Priority tourism destinations")}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-5xl">
              {t("Priority Tourism Destinations & Tourism Special Economic Zone")}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-foreground/70">
              <span className="destination-map-feature__badge">{t("Priority Tourism Destinations")}</span>
              <span className="destination-map-feature__badge">{t("Tourism Special Economic Zone")}</span>
            </div>
          </div>
          <div className="destination-map-feature__visual">
            <div className="destination-map-feature__glow" aria-hidden="true" />
            <img
              src={investmentMap}
              alt={t("Map of Indonesia tourism special economic zones")}
              width={1365}
              height={768}
              className="destination-map-feature__image"
            />
            <span className="destination-map-feature__caption">{t("Indonesia tourism investment landscape")}</span>
          </div>
        </div>
        <DestinationExplorer full />
      </div>
    </section>
  </>;
}
