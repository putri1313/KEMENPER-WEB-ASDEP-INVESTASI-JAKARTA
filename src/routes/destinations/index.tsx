import { createFileRoute } from "@tanstack/react-router";
import { DestinationExplorer, PageHero } from "@/components/portal-components";
import aerial from "@/assets/indonesia-aerial.jpg";
import destinationMap from "@/assets/indonesia-destination-map.png";
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
        <figure className="mb-12">
          <img
            src={destinationMap}
            alt={t("Map of Indonesia's 13 strategic tourism destinations")}
            width={1365}
            height={768}
            className="mx-auto block h-auto w-full max-w-6xl object-contain"
          />
        </figure>
        <DestinationExplorer full />
      </div>
    </section>
  </>;
}
