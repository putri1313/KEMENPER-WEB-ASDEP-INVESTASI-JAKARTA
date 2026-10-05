import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Minus, Plus } from "lucide-react";
import type { TourismMapPoint } from "@/data/map-point";
import { useSitePreferences } from "@/lib/site-preferences";

export function DestinationLocationMap({
  title,
  points,
}: {
  title: string;
  points: readonly TourismMapPoint[];
}) {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef(new Map<string, LeafletMarker>());
  const [selectedId, setSelectedId] = useState<string | null>(points[0]?.id ?? null);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const { language, t } = useSitePreferences();

  useEffect(() => {
    let cancelled = false;
    let map: LeafletMap | undefined;
    const markers = markersRef.current;

    void import("leaflet")
      .then((leaflet) => {
        if (cancelled || !mapElement.current) return;

        map = leaflet.map(mapElement.current, { scrollWheelZoom: false, zoomControl: false });
        mapRef.current = map;
        leaflet
          .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 18,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          })
          .addTo(map);

        const markerIcon = leaflet.divIcon({
          className: "destination-map-marker",
          html: '<span class="destination-map-pin__dot"></span>',
          iconSize: [26, 26],
          iconAnchor: [13, 13],
        });
        const bounds = leaflet.latLngBounds([]);

        for (const [index, point] of points.entries()) {
          const marker = leaflet
            .marker([point.latitude, point.longitude], {
              icon: markerIcon,
              alt: point.name,
              title: point.name,
              keyboard: true,
            })
            .addTo(map);
          marker.bindPopup(`<strong>${point.name}</strong><br />${point.area}`);
          marker.on("click", () => {
            setSelectedId(point.id);
            const activeMap = mapRef.current;
            if (activeMap)
              activeMap.flyTo(
                [point.latitude, point.longitude],
                Math.max(activeMap.getZoom(), 13),
                { duration: 0.55 },
              );
          });
          markers.set(point.id, marker);
          bounds.extend([point.latitude, point.longitude]);

          const markerElement = marker.getElement();
          if (markerElement)
            markerElement.setAttribute("aria-label", `${index + 1}. ${point.name}, ${point.area}`);
        }

        map.fitBounds(bounds, { padding: [36, 36], maxZoom: 10 });
        setMapReady(true);
        window.setTimeout(() => map?.invalidateSize(), 0);
      })
      .catch(() => {
        if (!cancelled) setMapError(true);
      });

    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      markers.clear();
    };
  }, [points]);

  useEffect(() => {
    for (const [id, marker] of markersRef.current) {
      const element = marker.getElement()?.querySelector(".destination-map-pin__dot");
      element?.classList.toggle("is-selected", id === selectedId);
    }
  }, [selectedId, mapReady]);

  const selectPoint = (id: string) => {
    const point = points.find((item) => item.id === id);
    const marker = markersRef.current.get(id);
    if (!point || !marker || !mapRef.current) return;
    setSelectedId(id);
    mapRef.current.flyTo(
      [point.latitude, point.longitude],
      Math.max(mapRef.current.getZoom(), 13),
      { duration: 0.55 },
    );
    marker.openPopup();
  };
  const selectedPoint = points.find((point) => point.id === selectedId);

  return (
    <section className="section-space bg-mist" aria-labelledby="destination-map-heading">
      <div className="container-portal">
        <div className="mb-8 max-w-3xl">
          <p className="eyebrow text-forest">
            {t("Explore")} {title}
          </p>
          <h2
            id="destination-map-heading"
            className="mt-3 font-display text-3xl font-extrabold md:text-4xl"
          >
            {language === "id" ? `Peta Destinasi ${title}` : `${title} Destination Map`}
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {language === "id"
              ? "Pilih penanda atau nama tempat untuk memperbesar peta dan membaca detail lokasi wisata."
              : "Select a marker or place name to zoom in and read details about the location."}
          </p>
        </div>

        <div className="grid overflow-hidden border border-border bg-background lg:grid-cols-[minmax(0,1.65fr)_minmax(17rem,.75fr)]">
          <div className="relative min-h-[23rem] bg-[#dce7e2] sm:min-h-[28rem] lg:min-h-[34rem]">
            <div
              ref={mapElement}
              className="destination-map-canvas absolute inset-0"
              role="application"
              aria-label={
                language === "id"
                  ? `Peta interaktif destinasi ${title}`
                  : `Interactive map of ${title} destinations`
              }
            />
            {!mapReady && (
              <div className="absolute inset-0 z-[500] grid place-items-center bg-mist/80 px-6 text-center text-sm font-bold text-muted-foreground">
                {t(mapError ? "Map could not be loaded" : "Loading map")}
              </div>
            )}
            {mapReady && (
              <div className="absolute right-3 top-3 z-[500] grid gap-1">
                <button
                  type="button"
                  title={t("Zoom in")}
                  aria-label={t("Zoom in")}
                  onClick={() => mapRef.current?.zoomIn()}
                  className="grid size-10 place-items-center border border-border bg-background text-foreground shadow-sm hover:bg-muted"
                >
                  <Plus size={17} />
                </button>
                <button
                  type="button"
                  title={t("Zoom out")}
                  aria-label={t("Zoom out")}
                  onClick={() => mapRef.current?.zoomOut()}
                  className="grid size-10 place-items-center border border-border bg-background text-foreground shadow-sm hover:bg-muted"
                >
                  <Minus size={17} />
                </button>
              </div>
            )}
          </div>

          <aside className="flex min-h-0 flex-col border-t border-border lg:border-l lg:border-t-0">
            <div className="border-b border-border p-5">
              <p className="eyebrow text-forest">
                {language === "id" ? "Titik wisata" : "Tourism locations"}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {points.length} {t("key locations")}
              </p>
            </div>
            <ol className="max-h-[17rem] divide-y divide-border overflow-y-auto">
              {points.map((point, index) => (
                <li key={point.id}>
                  <button
                    type="button"
                    onClick={() => selectPoint(point.id)}
                    aria-pressed={selectedId === point.id}
                    className={`flex w-full items-start gap-3 p-4 text-left transition hover:bg-muted ${selectedId === point.id ? "bg-mist" : "bg-background"}`}
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-extrabold ${selectedId === point.id ? "bg-forest text-white" : "bg-secondary text-secondary-foreground"}`}
                    >
                      {index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-bold leading-5">{point.name}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{point.area}</span>
                    </span>
                    <MapPin size={15} className="ml-auto mt-1 shrink-0 text-forest" />
                  </button>
                </li>
              ))}
            </ol>
            <div
              className="border-t border-border bg-background p-5"
              aria-live="polite"
              aria-atomic="true"
            >
              {selectedPoint ? (
                <>
                  <p className="eyebrow text-forest">{selectedPoint.category[language]}</p>
                  <h3 className="mt-2 font-display text-lg font-extrabold leading-snug">
                    {selectedPoint.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {selectedPoint.area}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {selectedPoint.description[language]}
                  </p>
                </>
              ) : (
                <p className="text-sm leading-6 text-muted-foreground">
                  {language === "id"
                    ? "Pilih salah satu lokasi untuk melihat kategori dan informasi singkatnya."
                    : "Select a location to see its category and a short description."}
                </p>
              )}
            </div>
            <p className="mt-auto border-t border-border p-4 text-[11px] leading-5 text-muted-foreground">
              {language === "id"
                ? "Peta dasar © OpenStreetMap contributors. Titik menunjukkan lokasi kawasan wisata; cek kembali informasi lokal sebelum berkunjung."
                : "Base map © OpenStreetMap contributors. Pins indicate tourism locations; verify local information before visiting."}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
