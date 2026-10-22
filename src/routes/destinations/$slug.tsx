import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Image as ImageIcon, MapPin } from "lucide-react";
import { destinations } from "@/data/portal";
import { destinationProfiles } from "@/data/destination-profiles";
import { DestinationLocationMap } from "@/components/destination-map";
import { destinationMapPoints } from "@/data/destination-map-points";
import type { TourismMapPoint } from "@/data/map-point";
import { ButtonLink } from "@/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSitePreferences } from "@/lib/site-preferences";
import { getLocalizedContent } from "@/lib/localized-content";

export const Route = createFileRoute("/destinations/$slug")({
  head: ({ params }) => {
    const destination = destinations.find((item) => item.slug === params.slug);
    return {
      meta: [
        {
          title: destination
            ? `${destination.name.en} | Indonesia Tourism Investment`
            : "Destination | Indonesia Tourism Investment",
        },
        {
          name: "description",
          content: destination?.description.en ?? "Explore tourism destinations across Indonesia.",
        },
      ],
    };
  },
  component: DestinationDetailPage,
});

function DestinationDetailPage() {
  const { slug } = Route.useParams();
  const { language, t } = useSitePreferences();
  const [selectedRecommendation, setSelectedRecommendation] = useState<TourismMapPoint | null>(null);
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return (
      <section className="container-portal min-h-[55vh] py-20">
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
  if (!profile) {
    return (
      <section className="container-portal min-h-[55vh] py-20">
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
  const destinationName = getLocalizedContent(destination.name, language);

  return (
    <main className="destination-page">
      <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-navy pt-20 text-primary-foreground">
        <img
          src={destination.image}
          alt={`${destinationName} landscape`}
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
            {destinationName}
          </h1>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/75">
            <MapPin size={16} />
            {getLocalizedContent(destination.region, language)}
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
                  key={theme.en}
                  className="border border-border bg-mist px-3 py-2 text-xs font-bold"
                >
                  {getLocalizedContent(theme, language)}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      {mapPoints && (
        <DestinationLocationMap
          key={destination.slug}
          title={destinationName}
          points={mapPoints}
          regionImage={destination.image}
          regionDescription={localized(profile.overview)}
        />
      )}

      {mapPoints && (
        <section className="section-space bg-mist">
          <div className="container-portal">
            <div className="mb-8 max-w-2xl">
              <p className="eyebrow text-forest">{t("Destination guide")}</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
                {t("Tourism recommendations")}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {t("Recommended places to visit in this destination. Select a photo to view it larger.")}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {mapPoints.map((point) => (
                <button
                  key={point.id}
                  type="button"
                  onClick={() => setSelectedRecommendation(point)}
                  className="group overflow-hidden border border-border bg-background text-left transition hover:border-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                  aria-label={`${t("View photo")}: ${t(point.name)}`}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={point.image ?? destination.image}
                      alt={`${destinationName} - ${t(point.name)}`}
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 bg-navy/85 px-3 py-2 text-xs font-bold text-white">
                      <ImageIcon size={14} /> {t("View photo")}
                    </span>
                  </span>
                  <span className="block p-5">
                    <span className="eyebrow text-forest">
                      {getLocalizedContent(point.category, language)}
                    </span>
                    <span className="mt-2 block font-display text-xl font-bold">{t(point.name)}</span>
                    <span className="mt-1 block text-xs font-semibold text-muted-foreground">
                      {t(point.area)}
                    </span>
                    <span className="mt-3 block text-sm leading-6 text-muted-foreground">
                      {getLocalizedContent(point.description, language)}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <Dialog
        open={selectedRecommendation !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedRecommendation(null);
        }}
      >
        <DialogContent className="max-w-5xl overflow-hidden border-0 bg-navy p-0 text-primary-foreground">
          {selectedRecommendation && (
            <>
              <img
                src={selectedRecommendation.image ?? destination.image}
                alt={`${destinationName} - ${t(selectedRecommendation.name)}`}
                className="max-h-[72vh] w-full bg-black object-contain"
              />
              <DialogHeader className="p-6 pr-14 text-left">
                <DialogTitle className="font-display text-2xl font-bold text-primary-foreground">
                  {t(selectedRecommendation.name)}
                </DialogTitle>
                <DialogDescription className="text-primary-foreground/75">
                  {t(selectedRecommendation.area)} | {getLocalizedContent(selectedRecommendation.category, language)}
                </DialogDescription>
                <p className="text-sm leading-6 text-primary-foreground/85">
                  {getLocalizedContent(selectedRecommendation.description, language)}
                </p>
                {selectedRecommendation.imageCredit && (
                  <a
                    href={selectedRecommendation.imageCredit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-foreground/70 underline underline-offset-4"
                  >
                    {selectedRecommendation.imageCredit.label}
                  </a>
                )}
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>

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
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/contact" variant="primary">
              {t("Contact us")} <ArrowUpRight size={16} />
            </ButtonLink>
            {profile.officialTravelGuide && (
              <a
                href={profile.officialTravelGuide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border border-border bg-background px-5 text-sm font-bold transition hover:border-forest hover:text-forest"
              >
                {localized(profile.officialTravelGuide.label)}
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
