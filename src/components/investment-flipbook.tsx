import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Download, Maximize2, Minimize2, Pause, Play } from "lucide-react";
import { PageFlip } from "page-flip";
import { Button } from "@/components/ui";
import { useSitePreferences } from "@/lib/site-preferences";

const PDF_URL = "/flipbooks/investment-opportunities-2026.pdf";
const PAGE_COUNT = 22;
const PAGE_FLIP_INTERVAL = 5000;

export function InvestmentFlipbook() {
  const { language } = useSitePreferences();
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const flipbookRef = useRef<PageFlip | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const isIndonesian = language === "id";

  useEffect(() => {
    let cancelled = false;
    let loadedPages = 0;
    const pageUrls = Array.from(
      { length: PAGE_COUNT },
      (_, index) => `/flipbooks/pages/${String(index + 1).padStart(2, "0")}.jpg`,
    );

    const loadBook = async () => {
      try {
        setPageCount(PAGE_COUNT);
        await Promise.all(
          pageUrls.map(
            (url) =>
              new Promise<void>((resolve, reject) => {
                const pageImage = new Image();
                pageImage.onload = () => {
                  loadedPages += 1;
                  if (!cancelled) setProgress(Math.round((loadedPages / PAGE_COUNT) * 100));
                  resolve();
                };
                pageImage.onerror = () => reject(new Error(`Could not load ${url}`));
                pageImage.src = url;
              }),
          ),
        );

        if (cancelled || !rootRef.current) return;
        const flipbook = new PageFlip(rootRef.current, {
          width: 560,
          height: 315,
          size: "stretch",
          minWidth: 140,
          maxWidth: 540,
          minHeight: 79,
          maxHeight: 304,
          autoSize: true,
          showCover: true,
          usePortrait: true,
          drawShadow: true,
          maxShadowOpacity: 0.2,
          flippingTime: 850,
          mobileScrollSupport: false,
        });
        flipbookRef.current = flipbook;
        flipbook.on("flip", (event) => {
          const index = Number(event.data);
          setCurrentPage(index);
          if (index >= PAGE_COUNT - 1) setIsPlaying(false);
        });
        flipbook.loadFromImages(pageUrls);
        setIsReady(true);
      } catch {
        if (!cancelled) setError(true);
      }
    };

    void loadBook();

    return () => {
      cancelled = true;
      flipbookRef.current?.destroy();
      flipbookRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || !isReady) return;
    const interval = window.setInterval(() => {
      const flipbook = flipbookRef.current;
      if (!flipbook) return;
      if (flipbook.getCurrentPageIndex() >= pageCount - 1) {
        setIsPlaying(false);
        return;
      }
      flipbook.flipNext("bottom");
    }, PAGE_FLIP_INTERVAL);
    return () => window.clearInterval(interval);
  }, [isPlaying, isReady, pageCount]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!stageRef.current) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await stageRef.current.requestFullscreen();
  };

  const turnPage = (direction: "previous" | "next") => {
    setIsPlaying(false);
    if (direction === "previous") flipbookRef.current?.flipPrev("bottom");
    else flipbookRef.current?.flipNext("bottom");
  };

  const downloadPdf = () => {
    void (async () => {
      setDownloadError(false);
      try {
        const response = await fetch(PDF_URL);
        if (!response.ok) throw new Error(`PDF request failed: ${response.status}`);
        const objectUrl = URL.createObjectURL(
          new Blob([await response.arrayBuffer()], { type: "application/octet-stream" }),
        );
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = "Investment_Opportunities_2026.pdf";
        document.body.append(link);
        link.click();
        link.remove();
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
      } catch {
        setDownloadError(true);
      }
    })();
  };

  return (
    <section className="section-space bg-navy text-primary-foreground">
      <div className="container-portal">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">
              {isIndonesian ? "Buku peluang investasi 2026" : "2026 investment opportunities book"}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight md:text-4xl">
              {isIndonesian ? "Jelajahi buku investasi" : "Explore the investment book"}
            </h2>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/70">
              {isIndonesian
                ? "Balik halaman dengan swipe atau tombol. Mulai putar otomatis saat Anda siap."
                : "Turn pages with a swipe or the controls. Start automatic page turns when you are ready."}
            </p>
          </div>
          <button
            type="button"
            onClick={downloadPdf}
            className="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-xs font-extrabold text-navy transition hover:bg-gold/90"
          >
            <Download size={16} />
            {isIndonesian ? "Unduh PDF" : "Download PDF"}
          </button>
        </div>

        {downloadError && (
          <p className="-mt-5 mb-6 text-right text-sm text-primary-foreground/75" role="status">
            {isIndonesian
              ? "Unduhan gagal. Tutup IDM atau periksa koneksi, lalu coba lagi."
              : "Download failed. Close IDM or check your connection, then try again."}
          </p>
        )}

        <div
          ref={stageRef}
          className={`mx-auto w-full max-w-[25rem] sm:max-w-[72rem] ${isFullscreen ? "flex min-h-screen max-w-none flex-col justify-center bg-navy p-6" : ""}`}
        >
          <div className="relative">
            <div
              className="relative mx-auto flex aspect-[1.78/1] w-full items-center justify-center overflow-hidden bg-[#142632] shadow-card sm:aspect-[3.56/1]"
              ref={rootRef}
              onPointerDown={() => setIsPlaying(false)}
              aria-label={
                isIndonesian ? "Flipbook peluang investasi" : "Investment opportunities flipbook"
              }
              aria-busy={!isReady && !error}
              role="region"
            />
            {!isReady && !error && (
              <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center bg-[#142632] p-6 text-center">
                <div>
                  <p className="font-display text-lg font-bold">
                    {progress < 2
                      ? isIndonesian
                        ? "Mengunduh buku"
                        : "Loading book"
                      : isIndonesian
                        ? "Menyiapkan halaman buku"
                        : "Preparing book pages"}
                  </p>
                  <p className="mt-2 text-sm text-primary-foreground/65">
                    {progress}% {isIndonesian ? "selesai" : "complete"}
                  </p>
                  <div
                    className="mt-4 h-1.5 w-48 overflow-hidden rounded-full bg-primary-foreground/15"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full bg-gold transition-[width]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="absolute inset-0 z-20 grid place-items-center bg-[#142632] p-6 text-center">
                <p className="max-w-sm text-sm leading-6">
                  {isIndonesian
                    ? "Flipbook belum dapat dimuat. Anda tetap bisa mengunduh PDF."
                    : "The flipbook could not be loaded. You can still download the PDF."}
                </p>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Button
              variant="icon"
              title={isIndonesian ? "Halaman sebelumnya" : "Previous page"}
              aria-label={isIndonesian ? "Halaman sebelumnya" : "Previous page"}
              disabled={!isReady || currentPage === 0}
              onClick={() => turnPage("previous")}
            >
              <ArrowLeft size={17} />
            </Button>
            <Button
              variant="outline"
              className="min-h-10 gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              disabled={!isReady}
              onClick={() => setIsPlaying((playing) => !playing)}
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
              {isPlaying
                ? isIndonesian
                  ? "Jeda"
                  : "Pause"
                : isIndonesian
                  ? "Mulai otomatis"
                  : "Auto play"}
            </Button>
            <Button
              variant="icon"
              title={isIndonesian ? "Halaman berikutnya" : "Next page"}
              aria-label={isIndonesian ? "Halaman berikutnya" : "Next page"}
              disabled={!isReady || currentPage >= pageCount - 1}
              onClick={() => turnPage("next")}
            >
              <ArrowRight size={17} />
            </Button>
            <span className="px-2 text-xs font-semibold tabular-nums text-primary-foreground/70">
              {isReady ? `${currentPage + 1} / ${pageCount}` : isIndonesian ? "Memuat" : "Loading"}
            </span>
            <Button
              variant="icon"
              title={
                isFullscreen
                  ? isIndonesian
                    ? "Keluar dari layar penuh"
                    : "Exit fullscreen"
                  : isIndonesian
                    ? "Layar penuh"
                    : "Fullscreen"
              }
              aria-label={
                isFullscreen
                  ? isIndonesian
                    ? "Keluar dari layar penuh"
                    : "Exit fullscreen"
                  : isIndonesian
                    ? "Layar penuh"
                    : "Fullscreen"
              }
              onClick={() => void toggleFullscreen()}
            >
              {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
