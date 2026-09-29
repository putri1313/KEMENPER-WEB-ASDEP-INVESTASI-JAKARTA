import { createFileRoute } from "@tanstack/react-router";
import { DestinationExplorer, PageHero } from "@/components/portal-components";
import aerial from "@/assets/indonesia-aerial.jpg";
import { useSitePreferences } from "@/lib/site-preferences";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Destinations | Indonesia Tourism Investment" },
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
    <section className="section-space bg-mist">
      <div className="container-portal">
        <DestinationExplorer full />
      </div>
    </section>
  </>;
}
