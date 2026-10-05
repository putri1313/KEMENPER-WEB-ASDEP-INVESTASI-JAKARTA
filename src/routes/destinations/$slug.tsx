import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import { destinations } from "@/data/portal";
import { destinationProfiles } from "@/data/destination-profiles";
import { DestinationLocationMap } from "@/components/destination-map";
import { destinationMapPoints } from "@/data/destination-map-points";
import { LakeTobaProfile } from "@/components/lake-toba-profile";
import { InvestmentProfileSections } from "@/components/investment-profile-sections";
import { priorityOpportunityProfiles } from "@/data/investment-opportunity-profiles";
import { ButtonLink } from "@/components/ui";
import { useSitePreferences } from "@/lib/site-preferences";

export const Route = createFileRoute("/destinations/$slug")({
  head: ({ params }) => {
    const destination = destinations.find((item) => item.slug === params.slug);
    return {
      meta: [
        {
          title: destination
            ? `${destination.name} | Indonesia Tourism Investment`
            : "Destination | Indonesia Tourism Investment",
        },
        {
          name: "description",
          content: destination?.description ?? "Explore tourism destinations across Indonesia.",
        },
      ],
    };
  },
  component: DestinationDetailPage,
});

function DestinationDetailPage() {
  const { slug } = Route.useParams();
  const { language, t } = useSitePreferences();
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <section className="container-portal min-h-[70vh] py-36">
        <h1 className="font-display text-3xl font-extrabold">{t("Destination not found")}</h1>
        <Link
          to="/destinations"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest"
        >
          <ArrowLeft size={16} />
          {t("Back to destinations")}
        </Link>
      </section>
    );
  }

  const profile = destinationProfiles[destination.slug];
  const mapPoints = destinationMapPoints[destination.slug];
  const investmentProfile = priorityOpportunityProfiles.find(
    (item) => item.slug === destination.slug,
  );
  if (!profile) {
    return (
      <section className="container-portal min-h-[70vh] py-36">
        <h1 className="font-display text-3xl font-extrabold">
          {t("Destination information is being prepared")}
        </h1>
        <Link
          to="/destinations"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest"
        >
          <ArrowLeft size={16} />
          {t("Back to destinations")}
        </Link>
      </section>
    );
  }
  const localized = (copy: { en: string; id: string }) => (language === "id" ? copy.id : copy.en);

  return (
    <main className="destination-page">
      <section className="relative isolate flex min-h-[66vh] items-end overflow-hidden bg-navy pt-24 text-primary-foreground">
        <img
          src={destination.image}
          alt={`${destination.name} landscape`}
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/95 via-navy/50 to-navy/15" />
        <div className="container-portal pb-14 pt-24 md:pb-20">
          <Link
            to="/destinations"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/80 hover:text-primary-foreground"
          >
            <ArrowLeft size={16} />
            {t("All destinations")}
          </Link>
          <span
            className={`inline-flex rounded-sm px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[.14em] ${destination.type === "regenerative" ? "bg-accent text-primary-foreground" : "bg-gold text-navy"}`}
          >
            {t(destination.type === "regenerative" ? "Regenerative" : "Priority")}{" "}
            {t("destination")}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-extrabold leading-[1.04] md:text-6xl">
            {destination.name}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/75">
            <MapPin size={16} />
            {destination.region}
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-14">
          <div>
            <p className="eyebrow text-forest">{t("Destination overview")}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
              {destination.slug === "danau-toba"
                ? language === "id"
                  ? "Deskripsi Umum"
                  : "General Description"
                : t("A distinctive place to explore and invest")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground">
              <p>{localized(profile.overview)}</p>
              {profile.overviewDetails?.map((paragraph) => (
                <p key={paragraph.en}>{localized(paragraph)}</p>
              ))}
            </div>
          </div>
          <aside className="border-y border-border py-6">
            <p className="eyebrow text-forest">{t("Tourism themes")}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {destination.tourismThemes.map((theme) => (
                <span
                  key={theme}
                  className="border border-border bg-mist px-3 py-2 text-xs font-bold"
                >
                  {t(theme)}
                </span>
              ))}
            </div>
            <p className="eyebrow mt-8 text-forest">{t("Key areas")}</p>
            <ul className="mt-4 divide-y divide-border">
              {profile.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 py-3 text-sm font-semibold">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-forest" />
                  {highlight}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {mapPoints && (
        <DestinationLocationMap
          key={destination.slug}
          title={destination.name}
          points={mapPoints}
        />
      )}

      {destination.slug === "danau-toba" && <LakeTobaProfile />}
      {destination.slug !== "danau-toba" && investmentProfile && (
        <InvestmentProfileSections profile={investmentProfile} />
      )}

      <section className="section-space bg-mist">
        <div className="container-portal grid gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow text-forest">{t("Investment focus")}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {t("Build on local strengths")}
            </h2>
            <ul className="mt-7 divide-y divide-border border-y border-border">
              {profile.investmentFocus.map((item) => (
                <li key={item.en} className="flex gap-3 py-4 text-sm font-semibold leading-6">
                  <Check size={17} className="mt-1 shrink-0 text-forest" />
                  {localized(item)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-forest">{t("Potential sectors")}</p>
            <h2 className="mt-4 font-display text-3xl font-extrabold md:text-4xl">
              {t("Tourism investment sectors")}
            </h2>
            <div className="mt-7 grid grid-cols-2 gap-px border border-border bg-border">
              {destination.investmentSectors.map((sector) => (
                <div key={sector} className="bg-background p-4 text-sm font-bold">
                  {t(sector)}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              {t(
                "Investment ideas are indicative and should be assessed against local plans, regulations, and verified project information.",
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-portal flex flex-col gap-8 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-forest">{t("Explore further")}</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold">
              {t("Discuss opportunities in this destination")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {t(
                "Contact the tourism investment team to discuss destination information and potential collaboration.",
              )}
            </p>
          </div>
          <ButtonLink to="/contact" variant="primary">
            {t("Contact us")} <ArrowUpRight size={16} />
          </ButtonLink>
        </div>
        <div className="container-portal mt-7 flex flex-wrap gap-3">
          {destinations
            .filter((item) => item.slug !== destination.slug)
            .slice(0, 4)
            .map((item) => (
              <Link
                key={item.slug}
                to="/destinations/$slug"
                params={{ slug: item.slug }}
                className="inline-flex min-h-11 items-center gap-2 border border-border px-4 text-sm font-bold transition hover:border-forest hover:text-forest"
              >
                {item.name}
                <ArrowRight size={14} />
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
