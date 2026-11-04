import { useEffect, useRef, useState } from "react";
import type { Map as LeafletMap, Marker as LeafletMarker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";
import type { TourismMapPoint } from "@/data/map-point";
import { useSitePreferences } from "@/lib/site-preferences";

export function DestinationLocationMap({
  title,
  points,
}: {
  title: string;
  points: readonly TourismMapPoint[];
}) {
  const locationItemsRef = useRef(new Map<string, HTMLLIElement>());
  const mapElementRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef(new Map<string, LeafletMarker>());
  const [selectedId, setSelectedId] = useState<string | null>(points[0]?.id ?? null);
  const [mapReady, setMapReady] = useState(false);
  const [mapError, setMapError] = useState(false);
  const { language, t } = useSitePreferences();

  useEffect(() => {
    setSelectedId((currentId) =>
      points.some((point) => point.id === currentId) ? currentId : (points[0]?.id ?? null),
    );
  }, [points]);

  useEffect(() => {
    if (!mapElementRef.current || points.length === 0) return;
    setMapReady(false);
    setMapError(false);
    markersRef.current.clear();
    let cancelled = false;
    let activeMap: LeafletMap | null = null;
    void import("leaflet")
      .then((leaflet) => {
        if (cancelled || !mapElementRef.current) return;

        activeMap = leaflet.map(mapElementRef.current, {
          scrollWheelZoom: false,
          zoomControl: true,
        });
        mapRef.current = activeMap;
        leaflet
          .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          })
          .addTo(activeMap);

        const bounds = leaflet.latLngBounds([]);
        for (const [index, point] of points.entries()) {
          const coordinates: [number, number] = [point.latitude, point.longitude];
          const icon = leaflet.divIcon({
            className: "destination-map-marker",
            html: `<span class="destination-map-pin__dot">${index + 1}</span>`,
            iconSize: [34, 42],
            iconAnchor: [17, 38],
          });
          const marker = leaflet
            .marker(coordinates, {
              icon,
              alt: `${index + 1}. ${t(point.name)}, ${t(point.area)}`,
              title: `${index + 1}. ${t(point.name)} — ${t(point.area)}`,
              keyboard: true,
            })
            .addTo(activeMap);

          const popup = document.createElement("div");
          const name = document.createElement("strong");
          name.textContent = `${index + 1}. ${t(point.name)}`;
          const area = document.createElement("div");
          area.textContent = t(point.area);
          popup.append(name, area);
          marker.bindPopup(popup);
          marker.on("click", () => {
            setSelectedId(point.id);
            activeMap?.flyTo(coordinates, Math.max(activeMap.getZoom(), 13), { duration: 0.45 });
            window.requestAnimationFrame(() =>
              locationItemsRef.current.get(point.id)?.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
              }),
            );
          });
          markersRef.current.set(point.id, marker);
          const markerElement = marker.getElement();
          markerElement?.setAttribute("aria-label", `${index + 1}. ${t(point.name)}, ${t(point.area)}`);
          bounds.extend(coordinates);
        }

        if (points.length === 1) activeMap.setView(bounds.getCenter(), 14);
        else activeMap.fitBounds(bounds, { padding: [36, 36], maxZoom: 11 });
        setMapReady(true);
      })
      .catch(() => {
        if (!cancelled) setMapError(true);
      });

    return () => {
      cancelled = true;
      activeMap?.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, [points, t]);

  useEffect(() => {
    for (const [id, marker] of markersRef.current) {
      const pin = marker.getElement()?.querySelector(".destination-map-pin__dot");
      pin?.classList.toggle("is-selected", id === selectedId);
    }
  }, [mapReady, selectedId]);

  const selectPoint = (id: string) => {
    const point = points.find((item) => item.id === id);
    if (!point) return;
    setSelectedId(id);
    const marker = markersRef.current.get(id);
    mapRef.current?.flyTo([point.latitude, point.longitude], Math.max(mapRef.current.getZoom(), 13), {
      duration: 0.45,
    });
    marker?.openPopup();
    window.requestAnimationFrame(() =>
      locationItemsRef.current.get(id)?.scrollIntoView({ block: "nearest", behavior: "smooth" }),
    );
  };
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
              ? "Peta OpenStreetMap langsung menampilkan semua lokasi wisata. Pilih penanda atau nama tempat untuk melihat detailnya."
              : "The OpenStreetMap map shows every tourism location immediately. Select a marker or place name to view its details."}
          </p>
        </div>

        <div className="grid overflow-hidden border border-border bg-background lg:grid-cols-[minmax(0,1.65fr)_minmax(17rem,.75fr)]">
          <div className="relative min-h-[23rem] bg-[#dce7e2] sm:min-h-[28rem] lg:min-h-[34rem]">
            <div
              ref={mapElementRef}
              role="application"
              aria-label={language === "id" ? `Peta wisata ${title}` : `${title} tourism map`}
              className="destination-map-canvas absolute inset-0 size-full"
            />
            {!mapReady && (
              <div className="pointer-events-none absolute inset-0 z-[500] grid place-items-center bg-secondary/85 px-6 text-center">
                <div className="max-w-sm">
                  <MapPin size={28} className="mx-auto text-forest" />
                  <p className="mt-4 font-display text-xl font-bold">
                    {mapError
                      ? language === "id"
                        ? "Peta wisata gagal dimuat"
                        : "Tourism map could not be loaded"
                      : language === "id"
                        ? "Memuat peta wisata..."
                        : "Loading tourism map..."}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {language === "id"
                      ? "Peta OpenStreetMap menampilkan semua titik wisata tanpa Google Maps API key."
                      : "OpenStreetMap displays all tourism locations without a Google Maps API key."}
                  </p>
                </div>
              </div>
            )}
          </div>

          <aside className="flex min-h-0 flex-col border-t border-border lg:h-[34rem] lg:border-l lg:border-t-0">
            <div className="border-b border-border p-5">
              <p className="eyebrow text-forest">
                {language === "id" ? "Titik wisata" : "Tourism locations"}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {points.length} {t("key locations")}
              </p>
            </div>
            <ol className="max-h-[32rem] divide-y divide-border overflow-y-auto lg:max-h-none lg:min-h-0 lg:flex-1">
              {points.map((point, index) => (
                <li
                  key={point.id}
                  ref={(element) => {
                    if (element) locationItemsRef.current.set(point.id, element);
                    else locationItemsRef.current.delete(point.id);
                  }}
                >
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
                      <span className="block text-sm font-bold leading-5">{t(point.name)}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{t(point.area)}</span>
                    </span>
                    <MapPin size={15} className="ml-auto mt-1 shrink-0 text-forest" />
                  </button>
                </li>
              ))}
            </ol>
            <p className="mt-auto border-t border-border p-4 text-[11px] leading-5 text-muted-foreground">
              {language === "id"
                ? "Setiap nomor pada peta sesuai dengan nomor, nama wisata, dan wilayah pada daftar."
                : "Every map number matches the number, tourism name, and region shown in this list."}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
