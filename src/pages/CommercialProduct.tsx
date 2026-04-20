import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, BadgeCheck, Coins, ExternalLink, Gauge, Info, Layers3, ShieldCheck, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import { commercialProducts, getCommercialProduct, type CommercialProduct as CommercialProductRecord } from "@/data/commercialProducts";

type CampaignOverride = Partial<CommercialProductRecord> & {
  productImage?: string;
  salesHook?: string;
  offerTitle?: string;
  offerBody?: string;
  posterEyebrow?: string;
  posterHeadline?: string;
  posterSubheadline?: string;
  bilingualLine?: string;
  audienceBadges?: string[];
  persuasiveBullets?: string[];
};

const campaignOverrides: Record<string, CampaignOverride> = {
  "konica-c4065": {
    productImage: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/C4065.jpg",
    salesHook: "Compact production colour press for shops that want a serious upgrade without jumping into a larger press footprint.",
    offerTitle: "Commercial fit",
    offerBody: "Ideal for profitable short-run colour work, brochures, catalogues and daily premium job work.",
    posterEyebrow: "Compact production story",
    posterHeadline: "Small footprint. Serious production intent.",
    posterSubheadline:
      "Position the C4065 as the press for businesses that want to step into better colour quality, richer media and smarter short-run profitability without overcommitting on footprint.",
    bilingualLine: "Compact size, commercial output, better margin.",
    audienceBadges: ["Short-run colour jobs", "Brochure work", "Creative studios", "Premium photocopy centres"],
    persuasiveBullets: [
      "Lead with professional output for smaller commercial environments",
      "Sell media flexibility as a job-winning advantage",
      "Make it feel like the smart first production upgrade",
      "Highlight brochure, booklet and premium collateral revenue",
    ],
  },
  "konica-c4080": {
    productImage: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/c4080.jpg",
    salesHook: "Higher-speed all-in-one production setup for businesses pushing more colour volume and more demanding media jobs.",
    offerTitle: "Production fit",
    offerBody: "Built for longer runs, heavier duty schedules, broader media and more confident delivery promises.",
    posterEyebrow: "Production growth story",
    posterHeadline: "More speed. More media. More serious colour business.",
    posterSubheadline:
      "The C4080 should feel like a scale-up machine for commercial businesses that want to promise faster delivery, broader applications and a more premium production profile.",
    bilingualLine: "Bigger jobs, faster output, stronger print image.",
    audienceBadges: ["Commercial printers", "Long-sheet jobs", "Envelope workflows", "High-volume marketing print"],
    persuasiveBullets: [
      "Sell faster turnaround for demanding customer jobs",
      "Use long-sheet and media versatility to expand perceived capability",
      "Frame it as the machine for confident delivery promises",
      "Push premium production without the feel of an overwhelming enterprise press",
    ],
  },
  "epson-m21000": {
    status: "complete",
    summary:
      "Enterprise A3 monochrome multifunction printer built for central print rooms, document-heavy counters and mono-led commercial environments that need strong daily throughput with lower service pressure.",
    highlights: ["Enterprise mono output", "A3 print, copy and scan", "High-volume business workflow", "Lower maintenance burden"],
    specs: [
      { label: "Speed", value: "Enterprise-grade high-speed monochrome output" },
      { label: "Output type", value: "A3 monochrome multifunction printing" },
      { label: "Best fit", value: "Copy counters, central print rooms and document-heavy businesses" },
      { label: "Workflow", value: "High-volume print, copy and scan from one platform" },
    ],
    applications: ["Central print rooms", "Bulk document jobs", "Copy counters", "Government and legal files", "Back-office printing"],
    productImage:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=614883aa60e81f38efc38accc60cfa6db65683b6&vid=614883aa60e81f38efc38accc60cfa6db65683b6&prid=1200Wx1200H&clid=SAPDAM&prclid=productpictures&assetDescr=19Gra_FDV_01_2-1",
    officialUrl:
      "https://www.epson.co.in/PrecisionCore/Office-Printers/WorkForce-Enterprise-WF-M21000-A3-Monochrome-Multifunction-Printer/p/C11CJ87503",
    salesHook: "A serious mono engine for businesses that want lower print economics at much higher monthly volume.",
    offerTitle: "Mono growth fit",
    offerBody: "A strong option for copy-led operations and offices that need predictable black-and-white output at scale.",
    posterEyebrow: "Enterprise mono story",
    posterHeadline: "When mono volume is the business, this is the machine.",
    posterSubheadline:
      "The M21000 deserves an enterprise-style page that focuses on central print rooms, document-heavy operations and predictable black-and-white productivity at serious monthly volume.",
    bilingualLine: "Bulk mono bhi, reliability bhi, control bhi.",
    audienceBadges: ["Central print rooms", "Document-heavy offices", "Government files", "Bulk B/W counters"],
    persuasiveBullets: [
      "Lead with scale, uptime and mono economics",
      "Frame it as a document-production engine, not a generic office printer",
      "Use central print room and government workflow language",
      "Sell stability and predictable output for large monthly workloads",
    ],
  },
};

const formatList = (items: string[]) => {
  if (items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} and ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
};

const getSpecValue = (product: CommercialProductRecord, labels: string[]) =>
  product.specs.find((spec) => labels.includes(spec.label))?.value;

const CommercialProduct = () => {
  const { slug } = useParams();
  const product = slug ? getCommercialProduct(slug) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="section-padding">
          <div className="container mx-auto rounded-3xl border border-border bg-card p-8 text-center">
            <h1 className="text-2xl font-bold text-navy">Product not found</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              The product page you are looking for is not available yet.
            </p>
            <Link
              to="/photocopy-commercial"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground"
            >
              Back to Commercial Segment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (product.detailPath) {
    return <Navigate to={product.detailPath} replace />;
  }
  const campaignOverride = campaignOverrides[product.slug] ?? {};
  const displayProduct = {
    ...product,
    ...campaignOverride,
    specs: campaignOverride.specs ?? product.specs,
    highlights: campaignOverride.highlights ?? product.highlights,
    applications: campaignOverride.applications ?? product.applications,
  };

  const ProductIcon = displayProduct.icon;
  const hasStructuredSpecs = displayProduct.status === "complete";
  const speedSpec = getSpecValue(displayProduct, ["Speed"]) ?? displayProduct.highlights[0] ?? "Details coming soon";
  const imageSpec =
    getSpecValue(displayProduct, ["Resolution", "Writing resolution", "Scanning resolution", "Output type"]) ??
    displayProduct.highlights[1] ??
    "Professional image quality";
  const mediaSpec = getSpecValue(displayProduct, ["Media Weight", "Paper weight", "Best fit"]) ?? displayProduct.highlights[2] ?? "Media support details coming soon";
  const capacitySpec =
    getSpecValue(displayProduct, ["Paper Input", "Paper Capacity", "Peak Volume", "Duty Cycle", "Average Monthly Volume", "Workflow"]) ??
    displayProduct.highlights[3] ??
    "Built for daily commercial print demand";
  const longSheetSpec = getSpecValue(displayProduct, ["Long Sheet"]);
  const campaignImage = campaignOverride.productImage;
  const campaignOfferTitle = campaignOverride.offerTitle ?? "Business advantage";
  const campaignOfferBody =
    campaignOverride.offerBody ?? "Better fit, stronger output economics and clearer growth potential for print-led businesses.";
  const posterEyebrow = campaignOverride.posterEyebrow ?? "Campaign angle";
  const posterHeadline = campaignOverride.posterHeadline ?? "A product page should feel like a sales story";
  const posterSubheadline =
    campaignOverride.posterSubheadline ??
    "The strongest commercial pages do more than list specs. They show who the machine is for, what business pressure it solves and why that matters for growth.";
  const posterAudienceBadges = campaignOverride.audienceBadges ?? displayProduct.applications.slice(0, 4);
  const posterBullets =
    campaignOverride.persuasiveBullets ?? [
      "Connect the machine to real customer jobs and business outcomes",
      "Show why the output, media and speed matter commercially",
      "Use the page to start a sales conversation, not just share specifications",
      "Make the business payoff visible within seconds",
    ];

  const performanceCards = hasStructuredSpecs
    ? [
        { label: "Speed", value: speedSpec },
        { label: "Image quality", value: imageSpec },
        { label: "Media support", value: mediaSpec },
        { label: "Capacity / volume", value: capacitySpec },
      ]
    : [
        { label: "Brand", value: product.brand },
        { label: "Output mode", value: product.outputMode },
        { label: "Segment", value: "Photocopier and commercial" },
        { label: "Status", value: "Detailed specs coming soon" },
      ];

  const workflowCards = hasStructuredSpecs
    ? [
        {
          title: "Best fit",
          body: `Ideal for ${formatList(displayProduct.applications.slice(0, 4))}.`,
        },
        {
          title: "Output edge",
          body: `Designed to deliver ${speedSpec} with ${imageSpec}.`,
        },
        {
          title: "Handling focus",
          body: longSheetSpec
            ? `Built to support ${mediaSpec} and ${longSheetSpec}.`
            : `Built to support ${mediaSpec} for flexible daily commercial work.`,
        },
      ]
    : [
        {
          title: "Best fit",
          body: `Ideal for ${formatList(displayProduct.applications.slice(0, 3))}.`,
        },
        {
          title: "Positioning",
          body: `${displayProduct.name} is part of the ${displayProduct.outputMode.toLowerCase()} commercial lineup for businesses that need dependable output.`,
        },
        {
          title: "Next update",
          body: "Detailed speed, media, and workflow notes will be added once the full model sheet is shared.",
        },
      ];

  const relatedProducts = commercialProducts.filter((item) => item.slug !== product.slug).slice(0, 6);
  const heroSignals = [
    {
      title: "Cost control",
      body: displayProduct.highlights[0] ?? "Better operating economics for daily output.",
      icon: Coins,
    },
    {
      title: "Performance",
      body: speedSpec,
      icon: Gauge,
    },
    {
      title: "Flexibility",
      body: mediaSpec,
      icon: Layers3,
    },
    {
      title: "Uptime",
      body: capacitySpec,
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={`${displayProduct.name} | ${displayProduct.brand} | Zestek Digital LLP`}
        description={displayProduct.summary}
        keywords={[displayProduct.name, displayProduct.brand, "commercial printers", "photocopy centre printers"]}
        canonicalPath={`/commercial/${displayProduct.slug}`}
        image="/zestek-logo.png"
      />
      <Header />

      <section className="-mt-16 overflow-hidden bg-[linear-gradient(135deg,#08172f_0%,#133c76_52%,#eef3ff_100%)] pb-10 pt-16 text-primary-foreground md:pb-14 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                {displayProduct.brand} / {displayProduct.outputMode}
              </span>
              <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">{displayProduct.name}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 md:text-base">{displayProduct.summary}</p>
              <p className="mt-5 max-w-3xl text-base font-semibold text-[#ffd58a] md:text-lg">
                {campaignOverride.salesHook ?? "Built to help photocopy and commercial print businesses move into stronger daily output and better margins."}
              </p>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-[#ffd58a]/30 bg-[linear-gradient(135deg,rgba(255,205,94,0.98)_0%,rgba(255,177,0,0.88)_100%)] p-5 text-[#11284f] shadow-[0_24px_70px_rgba(8,23,47,0.22)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#11284f]/70">{campaignOfferTitle}</p>
                <p className="mt-2 text-xl font-extrabold leading-tight">{campaignOfferBody}</p>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {heroSignals.map((signal) => (
                  <div key={signal.title} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 backdrop-blur">
                    <signal.icon className="h-5 w-5 text-[#ffd58a]" />
                    <p className="mt-3 text-sm font-bold text-primary-foreground">{signal.title}</p>
                    <p className="mt-2 text-xs leading-6 text-primary-foreground/74">{signal.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact#sales-inquiry" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-navy">
                  Share Requirement
                </Link>
                <Link
                  to="/photocopy-commercial"
                  className="rounded-full border border-white/35 px-5 py-2 text-xs font-semibold text-white"
                >
                  Back to Commercial Segment
                </Link>
                {displayProduct.officialUrl ? (
                  <a
                    href={displayProduct.officialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold text-white"
                  >
                    Official Reference
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-[34px] border border-white/20 bg-white/95 p-6 shadow-[0_30px_90px_rgba(8,23,47,0.3)]">
              {campaignImage ? (
                <div className="rounded-[26px] border border-border bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-6">
                  <img src={campaignImage} alt={displayProduct.name} className="mx-auto h-80 w-full object-contain" />
                </div>
              ) : (
                <div className="rounded-[26px] border border-border bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-8 text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] bg-navy text-primary-foreground">
                    <ProductIcon className="h-9 w-9 text-[#ffd58a]" />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-highlight">{displayProduct.heroTag}</p>
                  <p className="mt-3 text-xl font-bold text-navy">{displayProduct.name}</p>
                </div>
              )}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {performanceCards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-border bg-background px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">{card.label}</p>
                    <p className="mt-2 text-sm font-semibold leading-6 text-navy">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-10">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{displayProduct.heroTag}</p>
            <h2 className="mt-3 text-2xl font-bold text-navy md:text-3xl">Why this model deserves a stronger sales pitch</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
              The best-performing product pages do more than list specs. They connect the machine to business pressure, profit upside and real daily applications. This section is built to sell that shift.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {displayProduct.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-muted/50 px-4 py-3 text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>

            {displayProduct.status === "pending" ? (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-highlight/20 bg-highlight/10 p-4 text-sm text-navy">
                <Info className="mt-0.5 h-4 w-4 text-highlight" />
                <p>Detailed specifications and application guidance will be added once the full information is shared.</p>
              </div>
            ) : null}
          </article>

          <aside className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Quick persuasion points</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {displayProduct.specs.map((spec) => (
                <li key={spec.label} className="flex items-start justify-between gap-4 rounded-2xl border border-border bg-muted/40 px-4 py-3">
                  <span className="font-semibold text-navy">{spec.label}</span>
                  <span className="text-right">{spec.value}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-border bg-muted/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Applications</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {displayProduct.applications.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-navy">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {displayProduct.officialUrl ? (
              <a
                href={displayProduct.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-semibold text-navy"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2">
                  Open official product page
                  <ExternalLink className="h-4 w-4" />
                </span>
              </a>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_320px]">
            <div className="overflow-hidden rounded-[28px] border border-border bg-[linear-gradient(135deg,#fff8ef_0%,#f8fbff_55%,#edf4ff_100%)] p-5 md:p-6">
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">Problem to payoff</p>
                  <h3 className="mt-3 text-xl font-bold text-navy md:text-2xl">
                    {hasStructuredSpecs ? "Built for real commercial output" : "Commercial lineup overview"}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">{displayProduct.summary}</p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {workflowCards.map((card) => (
                      <div key={card.title} className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-highlight">{card.title}</p>
                        <p className="mt-2 text-sm leading-6 text-navy">{card.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative isolate overflow-hidden rounded-[28px] bg-navy p-6 text-primary-foreground">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-highlight/20" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                    <ProductIcon className="h-7 w-7 text-[#ffd58a]" />
                  </div>
                  <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-widest text-[#ffd58a]">Quick profile</p>
                  <div className="relative mt-4 space-y-3">
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/65">Brand</p>
                      <p className="mt-1 text-sm font-semibold leading-6">{displayProduct.brand}</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/65">Output mode</p>
                      <p className="mt-1 text-sm font-semibold leading-6">{displayProduct.outputMode}</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white/10 px-4 py-3">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/65">Best use</p>
                      <p className="mt-1 text-sm font-semibold leading-6">{displayProduct.applications[0] ?? "Commercial print workflows"}</p>
                    </div>
                  </div>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {displayProduct.highlights.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              {performanceCards.map((card) => (
                <div key={card.label} className="rounded-2xl border border-border bg-background px-4 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-navy/65">{card.label}</p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-navy">{card.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto overflow-hidden rounded-[34px] border border-border bg-[linear-gradient(135deg,#0a1d3c_0%,#14478a_56%,#f4f7ff_100%)]">
          <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#ffd58a]">{posterEyebrow}</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-extrabold leading-tight md:text-4xl">{posterHeadline}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-primary-foreground/82 md:text-base">{posterSubheadline}</p>
              {campaignOverride.bilingualLine ? (
                <p className="mt-5 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-[#ffd58a]">
                  {campaignOverride.bilingualLine}
                </p>
              ) : null}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {posterBullets.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                    <BadgeCheck className="h-5 w-5 text-[#ffd58a]" />
                    <p className="mt-3 text-sm font-semibold leading-6 text-primary-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/16 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,32,66,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Best for</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {posterAudienceBadges.map((badge) => (
                  <span key={badge} className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy">
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-[28px] border border-border bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-highlight">Why this sells better</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  This section makes the page feel more like a creative sales poster and less like a static catalogue entry.
                </p>
                <Link
                  to="/contact#sales-inquiry"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Talk to sales
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto rounded-3xl border border-border bg-card p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Need a recommendation?</p>
              <h3 className="mt-3 text-2xl font-bold text-navy">Turn this model page into a conversation starter</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Share your current print volume, paper sizes, and service expectations. We will recommend the right
                model and workflow setup for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact#sales-inquiry" className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground">
                Request Consultation
              </Link>
              {displayProduct.brand !== "Konica Minolta" ? (
                <Link
                  to="/service#service-amc"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy"
                >
                  Service Support
                  <Wrench className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">More in Commercial Segment</p>
            <h2 className="mt-2 text-2xl font-bold text-navy">Browse other models</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                to={item.detailPath ?? `/commercial/${item.slug}`}
                className="rounded-2xl border border-border bg-card p-4 transition hover:border-highlight hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.brand}</p>
                <h3 className="mt-2 font-display font-bold text-navy">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.outputMode} / {item.segment}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommercialProduct;
