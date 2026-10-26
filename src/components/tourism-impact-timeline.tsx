import { useEffect, useRef, useState } from "react";
import { useSitePreferences } from "@/lib/site-preferences";
import { getLocalizedContent } from "@/lib/localized-content";
import { tourismImpactLabels, tourismImpactMilestones } from "@/data/investor-overview";

export function TourismImpactTimeline() {
  const { language } = useSitePreferences();
  const id = language === "id";
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const local = (copy: { en: string; id: string }) => getLocalizedContent(copy, language);
  const metrics = [
    "workforce",
    "internationalVisitors",
    "domesticTrips",
    "foreignExchange",
    "gdpContribution",
  ] as const;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-space overflow-hidden bg-navy text-primary-foreground">
      <div className="container-portal">
        <div className={`mb-9 max-w-3xl ${visible ? "reveal" : "opacity-0"}`}>
          <p className="eyebrow text-gold">
            {id ? "Dampak dan arah sektor" : "Sector impact and direction"}
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-5xl">
            {id ? "Pariwisata: capaian dan aspirasi" : "Tourism: progress and aspiration"}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/70">
            {id
              ? "Ikhtisar indikator dalam buku: capaian 2023 dan 2024, lalu aspirasi nasional 2029. Angka ini mengikuti dokumen Mei 2025."
              : "A snapshot of indicators in the book: reported results for 2023 and 2024, followed by the 2029 national aspiration. Figures follow the May 2025 document."}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {tourismImpactMilestones.map((milestone, index) => (
            <article
              className={`${visible ? "reveal" : "opacity-0"} border border-primary-foreground/20 bg-primary-foreground/[.035] p-5 transition-colors duration-300 hover:border-gold/80 hover:bg-primary-foreground/[.07] md:p-6`}
              key={milestone.year}
              style={{ animationDelay: `${index * 130}ms` }}
            >
              <div className="flex items-end justify-between gap-3 border-b border-primary-foreground/20 pb-4">
                <p className="font-display text-4xl font-extrabold tabular-nums text-gold md:text-5xl">
                  {milestone.year}
                </p>
                <span className="pb-1 text-right text-xs font-bold text-primary-foreground/65">
                  {local(milestone.title)}
                </span>
              </div>
              <dl className="mt-1">
                {metrics.map((metric) => (
                  <div className="flex items-baseline justify-between gap-3 border-b border-primary-foreground/10 py-3 last:border-0" key={metric}>
                    <dt className="text-xs leading-5 text-primary-foreground/65 md:text-sm">
                      {local(tourismImpactLabels[metric])}
                    </dt>
                    <dd className="shrink-0 text-right text-sm font-extrabold tabular-nums md:text-base">
                      {milestone[metric]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-5 text-primary-foreground/55">
          {id
            ? "Sumber: Final Draft Summary of Investment Opportunities Book, Mei 2025. *Devisa 2024 disebut sebagai estimasi. Angka 2029 adalah aspirasi, bukan realisasi."
            : "Source: Final Draft Summary of Investment Opportunities Book, May 2025. *2024 foreign exchange is described as an estimate. 2029 figures are aspirations, not realized results."}
        </p>
      </div>
    </section>
  );
}
