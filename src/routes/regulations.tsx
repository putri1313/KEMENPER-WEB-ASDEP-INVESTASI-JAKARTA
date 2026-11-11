import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Building2, Check, FileCheck2, Landmark, MapPin, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSitePreferences } from "@/lib/site-preferences";
import marine from "@/assets/indonesia-marine.jpg";
import { getLocalizedContent, localizedContent } from "@/lib/localized-content";

export const Route = createFileRoute("/regulations")({
  head: () => ({
    meta: [
      { title: "Laws & Regulations | Invest in Wonderful Indonesia!" },
      { name: "description", content: "Explore Indonesia’s tourism, investment, business licensing, spatial planning, and environmental regulations." },
    ],
  }),
  component: RegulationsPage,
});

const c = localizedContent;
const generalIncentives = [
  c("Risk-based licensing can simplify approvals for lower-risk activities.", "Perizinan berbasis risiko dapat menyederhanakan proses untuk kegiatan berisiko rendah."),
  c("OSS centralizes business licensing and applications.", "OSS memusatkan layanan dan pengajuan perizinan usaha."),
  c("Domestic and foreign tourism investment is welcome, subject to sector rules.", "Investasi pariwisata dalam dan luar negeri terbuka sesuai ketentuan sektoral."),
  c("Foreign investment generally exceeds IDR 10 billion per business line and location, excluding land and buildings. This is not paid-up capital; verify OSS requirements.", "Investasi asing umumnya di atas Rp10 miliar per bidang usaha dan lokasi, di luar tanah dan bangunan. Ini bukan modal disetor; periksa persyaratan OSS."),
  c("Tax benefits may include a lower corporate rate for eligible IDX-listed companies and tax reductions or holidays for qualifying projects.", "Fasilitas pajak dapat mencakup tarif pajak badan lebih rendah bagi perusahaan tercatat di BEI yang memenuhi syarat serta pengurangan atau pembebasan pajak bagi proyek yang memenuhi ketentuan."),
  c("VAT relief depends on the goods or services and current tax rules.", "Fasilitas PPN bergantung pada barang atau jasa serta ketentuan pajak terkini."),
];
const strategicIncentives = [
  {
    title: c("Tax holidays and reductions", "Tax holiday dan pengurangan pajak"),
    description: c("Eligible projects may qualify under current tax rules.", "Proyek yang memenuhi syarat dapat memperoleh fasilitas sesuai aturan pajak."),
  },
  {
    title: c("Infrastructure support", "Dukungan infrastruktur"),
    description: c("Availability depends on destination plans and project location.", "Ketersediaan mengikuti rencana destinasi dan lokasi proyek."),
  },
  {
    title: c("Employment and training", "Ketenagakerjaan dan pelatihan"),
    description: c("Training programs or eligible skills-development costs may receive support.", "Program pelatihan atau biaya peningkatan keterampilan tertentu dapat memperoleh dukungan."),
  },
  {
    title: c("Investment facilitation", "Fasilitasi investasi"),
    description: c("Strategic or sustainable projects may qualify for tailored support, subject to approval.", "Proyek strategis atau berkelanjutan dapat memperoleh dukungan khusus setelah persetujuan."),
  },
];

const frameworks = [
  {
    value: "tourism",
    number: "01",
    icon: Landmark,
    title: c("Tourism policy & governance", "Kebijakan dan tata kelola pariwisata"),
    summary: c("The national framework for tourism development, destinations, businesses, and public responsibilities.", "Kerangka nasional untuk pengembangan pariwisata, destinasi, usaha, dan tanggung jawab pemerintah."),
    documents: [
      {
        title: c("Law No. 10 of 2009 on Tourism, as amended by Law No. 18 of 2025", "Undang-Undang No. 10 Tahun 2009 tentang Kepariwisataan sebagaimana diubah dengan Undang-Undang No. 18 Tahun 2025"),
        description: c("The 2025 amendment is the latest change to the national Tourism Law. Review the current text for provisions on tourism development, destination governance, and tourism businesses.", "Perubahan pada 2025 merupakan perubahan terbaru atas Undang-Undang Kepariwisataan. Tinjau naskah terkini untuk ketentuan pengembangan pariwisata, tata kelola destinasi, dan usaha pariwisata."),
        href: "https://peraturan.bpk.go.id/Details/334481/uu-no-18-tahun-2025",
        linkLabel: c("View Law No. 18/2025", "Lihat UU No. 18/2025"),
        tag: c("Tourism", "Pariwisata"),
      },
    ],
  },
  {
    value: "investment",
    number: "02",
    icon: Building2,
    title: c("Investment framework & facilities", "Kerangka dan fasilitas investasi"),
    summary: c("Understand investor obligations and the framework for investment facilities before structuring a project.", "Pahami kewajiban investor dan kerangka fasilitas investasi sebelum menyusun proyek."),
    documents: [
      {
        title: c("Law No. 25 of 2007 on Investment, as amended by Law No. 6 of 2023", "Undang-Undang No. 25 Tahun 2007 tentang Penanaman Modal sebagaimana diubah dengan Undang-Undang No. 6 Tahun 2023"),
        description: c("Sets out the general framework for investment in Indonesia, including investor rights and responsibilities and the basis for investment facilities. Eligibility and facility terms depend on the applicable rules and the proposed activity.", "Mengatur kerangka umum penanaman modal di Indonesia, termasuk hak dan kewajiban investor serta dasar pemberian fasilitas investasi. Kelayakan dan ketentuan fasilitas bergantung pada peraturan yang berlaku dan kegiatan yang diusulkan."),
        href: "https://peraturan.bpk.go.id/Details/39903/uu-no-25-tahun-2007",
        linkLabel: c("View Investment Law", "Lihat UU Penanaman Modal"),
        tag: c("Investment", "Investasi"),
      },
      {
        title: c("Presidential Regulation No. 10 of 2021 on Investment Business Fields, as amended by Presidential Regulation No. 49 of 2021", "Peraturan Presiden No. 10 Tahun 2021 tentang Bidang Usaha Penanaman Modal sebagaimana diubah dengan Peraturan Presiden No. 49 Tahun 2021"),
        description: c("Sets out investment business fields, including fields open to investment and those subject to specific conditions. Check the amended text and current sector rules before assessing foreign investment eligibility.", "Mengatur bidang usaha penanaman modal, termasuk bidang usaha yang terbuka untuk investasi dan yang memiliki persyaratan tertentu. Periksa naskah perubahan dan ketentuan sektoral terkini untuk menilai kelayakan penanaman modal asing."),
        href: "https://peraturan.bpk.go.id/",
        linkLabel: c("Search official regulations", "Cari peraturan resmi"),
        tag: c("Investment", "Investasi"),
      },
      {
        title: c("Job Creation framework (Law No. 6 of 2023; originally Law No. 11 of 2020)", "Kerangka Cipta Kerja (Undang-Undang No. 6 Tahun 2023; semula Undang-Undang No. 11 Tahun 2020)"),
        description: c("The Job Creation framework amended rules across business licensing, investment, and other areas. Law No. 6 of 2023 enacted the current framework; consult its current implementing regulations for requirements that apply to a project.", "Kerangka Cipta Kerja mengubah ketentuan di berbagai bidang, termasuk perizinan berusaha dan investasi. Undang-Undang No. 6 Tahun 2023 menetapkan kerangka yang berlaku saat ini; periksa peraturan pelaksananya untuk mengetahui persyaratan proyek."),
        href: "https://peraturan.bpk.go.id/",
        linkLabel: c("Search official regulations", "Cari peraturan resmi"),
        tag: c("Investment", "Investasi"),
      },
    ],
  },
  {
    value: "licensing",
    number: "03",
    icon: FileCheck2,
    title: c("Risk-based business licensing", "Perizinan berusaha berbasis risiko"),
    summary: c("Licensing requirements are tied to the activity and its assessed level of business risk.", "Persyaratan perizinan mengikuti kegiatan usaha dan tingkat risiko yang telah dinilai."),
    documents: [
      {
        title: c("Government Regulation No. 28 of 2025 on Risk-Based Business Licensing", "Peraturan Pemerintah No. 28 Tahun 2025 tentang Perizinan Berusaha Berbasis Risiko"),
        description: c("In force from 5 June 2025, this regulation replaced PP No. 5/2021. It covers basic requirements, business licensing, supporting licences, OSS services, supervision, and sanctions. Check the current OSS workflow for the selected business classification (KBLI).", "Berlaku sejak 5 Juni 2025 dan menggantikan PP No. 5/2021. Peraturan ini mencakup persyaratan dasar, perizinan berusaha, perizinan penunjang, layanan OSS, pengawasan, dan sanksi. Periksa alur OSS terkini untuk klasifikasi baku lapangan usaha Indonesia (KBLI) yang dipilih."),
        href: "https://peraturan.bpk.go.id/Details/319773/pp-no-28-tahun-2025",
        linkLabel: c("View PP No. 28/2025", "Lihat PP No. 28/2025"),
        tag: c("Licensing", "Perizinan"),
      },
      {
        title: c("Online Single Submission (OSS)", "Online Single Submission (OSS)"),
        description: c("Use the official OSS system to review business classifications, risk levels, and the licensing steps that apply to a proposed activity.", "Gunakan sistem OSS resmi untuk memeriksa klasifikasi usaha, tingkat risiko, dan tahapan perizinan yang berlaku bagi kegiatan yang diusulkan."),
        href: "https://oss.go.id/",
        linkLabel: c("Open OSS", "Buka OSS"),
        tag: c("Official service", "Layanan resmi"),
      },
    ],
  },
  {
    value: "location",
    number: "04",
    icon: MapPin,
    title: c("Location & environmental approvals", "Persetujuan lokasi dan lingkungan"),
    summary: c("Destination projects also need to account for the rules that apply to their site and potential impacts.", "Proyek destinasi juga perlu memperhatikan ketentuan lokasi dan potensi dampaknya."),
    documents: [
      {
        title: c("Government Regulation No. 21 of 2021 on Spatial Planning", "Peraturan Pemerintah No. 21 Tahun 2021 tentang Penyelenggaraan Penataan Ruang"),
        description: c("Provides the framework for spatial planning and conformity of proposed activities with applicable spatial plans. Requirements should be checked for the specific project location.", "Mengatur kerangka penataan ruang dan kesesuaian kegiatan yang direncanakan dengan rencana tata ruang yang berlaku. Persyaratan perlu diperiksa untuk lokasi proyek tertentu."),
        href: "https://peraturan.bpk.go.id/Details/161851/pp-no-21-tahun-2021",
        linkLabel: c("View PP No. 21/2021", "Lihat PP No. 21/2021"),
        tag: c("Spatial planning", "Penataan ruang"),
      },
      {
        title: c("Government Regulation No. 22 of 2021 on Environmental Protection and Management", "Peraturan Pemerintah No. 22 Tahun 2021 tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup"),
        description: c("Covers environmental approval and related protection, management, supervision, and enforcement provisions. The required documents depend on the proposed activity and its potential impacts.", "Mengatur persetujuan lingkungan serta ketentuan terkait perlindungan, pengelolaan, pengawasan, dan penegakan hukum. Dokumen yang diperlukan bergantung pada kegiatan yang diusulkan dan potensi dampaknya."),
        href: "https://peraturan.bpk.go.id/Details/161852/pp-no-22-tahun2021",
        linkLabel: c("View PP No. 22/2021", "Lihat PP No. 22/2021"),
        tag: c("Environment", "Lingkungan"),
      },
    ],
  },
];

function RegulationsPage() {
  const { language, t } = useSitePreferences();
  return <>
    <section className="relative flex min-h-[64vh] items-center overflow-hidden bg-navy pt-20 text-primary-foreground">
      <img src={marine} alt={t("Aerial view of an Indonesian island and surrounding turquoise sea")} className="absolute inset-0 size-full object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/40 to-navy/80" />
      <div className="container-portal relative py-16 text-center">
        <p className="eyebrow text-gold">{t("Indonesia · Investor guide")}</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl md:text-8xl">{t("Laws & Regulations")}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-primary-foreground/80 md:text-lg">{t("A practical introduction to the rules shaping tourism investment, project licensing, and destination development in Indonesia.")}</p>
        <a href="#frameworks" className="mx-auto mt-9 inline-flex items-center gap-3 rounded-full border border-primary-foreground/35 px-5 py-3 text-sm font-bold transition hover:bg-primary-foreground/10">{t("Explore the framework")} <ArrowDown size={16}/></a>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/20 to-transparent" />
    </section>

    <section className="section-space bg-mist">
      <div className="container-portal grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
        <div>
          <p className="eyebrow text-forest">{t("Introduction")}</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">{t("Build with a clear view of the rules.")}</h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{t("Tourism projects sit at the intersection of investment, business licensing, destination planning, and environmental management. The right requirements depend on what you plan to do and where you plan to do it.")}</p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{t("Use this guide to find the main national regulations and official services, then confirm the details for your project with the relevant authorities.")}</p>
          <a href="#frameworks" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-forest hover:underline">{t("Browse key regulations")} <ArrowUpRight size={16}/></a>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-navy shadow-card md:min-h-[440px]">
          <img src={marine} alt={t("Small islands and marine waters in Indonesia")} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground md:p-9">
            <p className="eyebrow text-gold">{t("One project · Several checks")}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {["Tourism", "Investment", "Licensing", "Location"].map((item) => <span key={item} className="flex items-center gap-2 text-xs font-bold"><Check size={15} className="text-gold"/>{t(item)}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="frameworks" className="section-space scroll-mt-20 bg-background">
      <div className="container-portal">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
          <div>
            <p className="eyebrow text-forest">{t("The framework")}</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">{t("Key regulations for tourism investment")}</h2>
            <p className="mt-5 leading-7 text-muted-foreground">{t("Open a topic for a short overview and links to the official regulation or service.")}</p>
            <div className="mt-8 rounded-sm border border-border bg-mist p-5">
              <ShieldCheck className="text-forest" size={22}/>
              <p className="mt-3 text-sm font-extrabold">{t("Start with your activity and location")}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{t("The applicable process may vary by KBLI, risk level, project scale, site, and environmental impact.")}</p>
            </div>
          </div>
          <Accordion type="single" collapsible defaultValue="tourism" className="border-t border-border">
            {frameworks.map(({ value, number, icon: Icon, title, summary, documents }) => <AccordionItem key={value} value={value} className="border-b border-border">
              <AccordionTrigger className="gap-5 py-6 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-mist text-forest"><Icon size={20}/></span>
                <span className="min-w-0 flex-1"><span className="mb-1 block font-mono text-[11px] font-bold tracking-widest text-gold">{number} / {t("REGULATORY AREA")}</span><span className="block font-display text-lg font-extrabold leading-snug md:text-xl">{getLocalizedContent(title, language)}</span><span className="mt-2 block text-sm font-normal leading-6 text-muted-foreground">{getLocalizedContent(summary, language)}</span></span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid gap-4 pb-6 pl-0 sm:pl-16">
                  {documents.map((document) => <article key={document.href} className="rounded-sm border border-border bg-card p-5 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3"><span className="eyebrow text-forest">{getLocalizedContent(document.tag, language)}</span><a href={document.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-extrabold text-forest hover:underline">{getLocalizedContent(document.linkLabel, language)}<ArrowUpRight size={14}/></a></div>
                    <h3 className="mt-4 font-display text-base font-extrabold leading-6 md:text-lg">{getLocalizedContent(document.title, language)}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{getLocalizedContent(document.description, language)}</p>
                  </article>)}
                </div>
              </AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </div>
        <section aria-labelledby="investment-incentives" className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-forest">{getLocalizedContent(c("Investment support", "Dukungan investasi"), language)}</p>
              <h2 id="investment-incentives" className="mt-2 font-display text-3xl font-extrabold md:text-4xl">{getLocalizedContent(c("Potential investment incentives", "Potensi insentif investasi"), language)}</h2>
            </div>
            <p className="max-w-lg text-xs leading-5 text-muted-foreground sm:text-right">{getLocalizedContent(c("Incentives depend on eligibility and current rules. Confirm details with the relevant authorities.", "Insentif bergantung pada kelayakan dan ketentuan terkini. Konfirmasikan rinciannya kepada instansi terkait."), language)}</p>
          </div>
          <div className="mt-6 grid items-start gap-4 md:grid-cols-2">
            <article className="rounded-sm border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-mist text-forest"><Building2 size={17} /></span>
                <h3 className="font-display text-lg font-extrabold">{getLocalizedContent(c("General investment incentives", "Insentif investasi umum"), language)}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {generalIncentives.map((incentive) => <li key={incentive.en} className="flex gap-2.5 text-xs leading-5 text-muted-foreground">
                  <Check size={15} className="mt-0.5 shrink-0 text-forest" />
                  <span>{getLocalizedContent(incentive, language)}</span>
                </li>)}
              </ul>
            </article>
            <article className="rounded-sm border border-border bg-card p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-mist text-forest"><Landmark size={17} /></span>
                <h3 className="font-display text-lg font-extrabold">{getLocalizedContent(c("Strategic investment incentives", "Insentif investasi strategis"), language)}</h3>
              </div>
              <div className="mt-4 space-y-2.5">
                {strategicIncentives.map((incentive) => <div key={incentive.title.en}>
                  <h4 className="text-xs font-extrabold text-forest">{getLocalizedContent(incentive.title, language)}</h4>
                  <p className="mt-0.5 text-xs leading-5 text-muted-foreground">{getLocalizedContent(incentive.description, language)}</p>
                </div>)}
              </div>
            </article>
          </div>
        </section>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs leading-6 text-muted-foreground md:flex-row md:items-start md:justify-between">
          <p className="max-w-4xl">{t("This page is an introductory guide, not a substitute for the official legal text or project-specific advice. Regulations can change; confirm current requirements with OSS, JDIH, and the competent central or local authority.")}</p>
          <a href="https://peraturan.bpk.go.id/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 font-bold text-forest hover:underline">{t("Search JDIH BPK")} <ArrowUpRight size={14}/></a>
        </div>
      </div>
    </section>
  </>;
}
