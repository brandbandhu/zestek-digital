import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductFilterPanel from "@/components/ProductFilterPanel";
import { motion } from "framer-motion";
import { ArrowUpRight, Package, PhoneCall, Wrench } from "lucide-react";
import { useLeadFormSubmission } from "@/hooks/useLeadFormSubmission";
import { Link } from "react-router-dom";
import { konicaProductionProducts } from "@/data/konicaProductionProducts";
import { matchesSearchQuery, matchesSelectedOptions, parseLeadingNumber, toggleFilterValue } from "@/lib/productFilters";

const valueCards = [
  {
    tag: "QTY",
    title: "Production throughput",
    body: "Scale volume with consistent color and finishing-ready output.",
  },
  {
    tag: "MED",
    title: "Media flexibility",
    body: "Support for textured, metallic, and heavy substrates.",
  },
  {
    tag: "SLA",
    title: "On-site support",
    body: "Factory-trained engineers with rapid-response SLAs in Mumbai/MMR.",
  },
];

const lineupItems = [
  "AccurioPress C14000 / C14010 / C14010S",
  "AccurioPress C12000 / C12010 / C12010S",
  "AccurioPress C7090 ENHANCED / C7100 ENHANCED",
  "AccurioPress C4070 / C4080",
  "AccurioPress C73hc / C74hc / C83hc / C84hc",
  "AccurioPress 6120 / 6136 / 6136P / 6272P / 7120 / 7136",
  "AccurioPrint 2100 / C4065 / C7090 / C7100",
];

type KonicaProduct = (typeof konicaProductionProducts)[number];

type KonicaProductMeta = {
  category: string;
  outputMode: string;
  speed: number;
  printFormats: string[];
  printVolumes: string[];
  deviceTypes: string[];
  description: string;
  highlights: string[];
  bestFor: string;
  searchTerms: string[];
};

type KonicaFilterState = {
  categories: string[];
  outputModes: string[];
  printFormats: string[];
  printVolumes: string[];
  deviceTypes: string[];
};

const topKonicaProductNames = [
  "AccurioPrint C4065",
  "AccurioPress C4070",
  "AccurioPress C4080",
  "AccurioPrint 2100",
];

const topKonicaProductNameSet = new Set(topKonicaProductNames);

const prioritizedKonicaProducts = [
  ...topKonicaProductNames.flatMap((name) => konicaProductionProducts.filter((product) => product.name === name)),
  ...konicaProductionProducts.filter((product) => !topKonicaProductNameSet.has(product.name)),
];

const createEmptyKonicaFilters = (): KonicaFilterState => ({
  categories: [],
  outputModes: [],
  printFormats: [],
  printVolumes: [],
  deviceTypes: [],
});

const konicaSortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Speed (high to low)", value: "speed-desc" },
  { label: "Speed (low to high)", value: "speed-asc" },
  { label: "Name (A-Z)", value: "name-asc" },
];

const konicaSpeedOptions = ["Any", "20", "40", "60", "80", "100", "120", "140", "200", "250", "300"];
const salesPhoneHref = "tel:+919920909700";

const getKonicaDetail = (product: KonicaProduct, label: string) =>
  product.details.find((detail) => detail.label === label)?.value ?? "";

const inferKonicaFormats = (formatValue: string) => {
  const normalizedValue = formatValue.toLowerCase();
  const formats = [
    normalizedValue.includes("a4") ? "A4" : null,
    normalizedValue.includes("a3") ? "A3" : null,
    normalizedValue.includes("sra3") ? "SRA3" : null,
    normalizedValue.includes("b2") ? "B2" : null,
    normalizedValue.includes("banner") || normalizedValue.includes("1300mm") ? "Banner" : null,
  ].filter((value): value is string => Boolean(value));

  return formats.length > 0 ? Array.from(new Set(formats)) : ["Other"];
};

const inferKonicaPrintVolumes = (printVolumeValue: string) => {
  const normalizedValue = printVolumeValue.toLowerCase();
  const volumes = [
    normalizedValue.includes("low") ? "Low" : null,
    normalizedValue.includes("medium") ? "Medium" : null,
    normalizedValue.includes("high") ? "High" : null,
    normalizedValue.includes("ultra") ? "Ultra" : null,
  ].filter((value): value is string => Boolean(value));

  return volumes.length > 0 ? volumes : ["Medium"];
};

const inferKonicaDeviceTypes = (deviceTypeValue: string) =>
  deviceTypeValue
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

const getKonicaProductMeta = (product: KonicaProduct): KonicaProductMeta => {
  const category = product.badges.includes("Production") ? "Production Printer" : "Office Multifunctional Printer";
  const outputMode = product.badges.includes("Mono") ? "Mono" : "Color";
  const speedValue = getKonicaDetail(product, "Speed");
  const printFormatValue = getKonicaDetail(product, "Print Format");
  const printVolumeValue = getKonicaDetail(product, "Print Volume");
  const deviceTypeValue = getKonicaDetail(product, "Device Type");

  const printFormats = inferKonicaFormats(printFormatValue);
  const printVolumes = inferKonicaPrintVolumes(printVolumeValue);
  const deviceTypes = inferKonicaDeviceTypes(deviceTypeValue);
  const primaryFormat = printFormats[0] ?? "Production";
  const primaryDevice = deviceTypes[0] ?? "Print";
  const speedLabel = speedValue || `${parseLeadingNumber(speedValue) ?? 0} PPM`;
  const highlights = [primaryFormat, outputMode, speedLabel, primaryDevice];

  let description = `Konica Minolta ${outputMode.toLowerCase()} printer built for dependable business output and flexible media handling.`;

  if (category === "Production Printer" && outputMode === "Color") {
    description = "Production colour press built for commercial print growth, short-run jobs, and finishing-ready media flexibility.";
  } else if (category === "Production Printer" && outputMode === "Mono") {
    description = "Production monochrome press designed for books, manuals, transactional print, and sustained high-volume output.";
  } else if (category !== "Production Printer" && outputMode === "Color") {
    description = "Office-ready colour multifunction printer built for shared departments, document workflows, and everyday A3 business printing.";
  } else if (category !== "Production Printer" && outputMode === "Mono") {
    description = "Office monochrome multifunction printer designed for document-heavy teams that need dependable A3 printing and copying.";
  }

  let bestFor = "Businesses that need reliable print, scan, and copy workflows with vendor-backed service support.";

  if (category === "Production Printer" && outputMode === "Color") {
    bestFor = "Commercial print shops, marketing collateral, packaging mockups, and short-run colour production.";
  } else if (category === "Production Printer" && outputMode === "Mono") {
    bestFor = "Book work, forms, manuals, invoice sets, and high-volume monochrome production floors.";
  } else if (category !== "Production Printer" && outputMode === "Color") {
    bestFor = "Corporate offices, CRDs, and shared teams that need colour documents and presentations.";
  } else if (category !== "Production Printer" && outputMode === "Mono") {
    bestFor = "Admin departments, copy centres, and offices focused on dependable mono document output.";
  }

  return {
    category,
    outputMode,
    speed: parseLeadingNumber(speedValue) ?? 0,
    printFormats,
    printVolumes,
    deviceTypes,
    description,
    highlights,
    bestFor,
    searchTerms: [
      product.name,
      category,
      outputMode,
      speedValue,
      printFormatValue,
      printVolumeValue,
      deviceTypeValue,
      description,
      bestFor,
      ...product.badges,
    ],
  };
};

const normalizedKonicaProducts = prioritizedKonicaProducts.map((product) => ({
  ...product,
  meta: getKonicaProductMeta(product),
}));

const KonicaProduction = () => {
  const { isSubmitting, handleSubmit } = useLeadFormSubmission({
    formId: "konica-production-pricing-form",
    formName: "Konica Production Pricing Form",
    successMessage: "Your production pricing request has been sent. Our team will contact you soon.",
    mapFields: (fields) => ({
      name: fields.name,
      company_name: fields.company_name,
      work_email: fields.work_email,
      phone_number: fields.phone_number,
      monthly_print_volume: fields.monthly_print_volume,
      message: fields.message,
    }),
  });
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("recommended");
  const [minSpeed, setMinSpeed] = useState("Any");
  const [maxSpeed, setMaxSpeed] = useState("Any");
  const [selectedFilters, setSelectedFilters] = useState<KonicaFilterState>(createEmptyKonicaFilters);

  const toggleFilter = (group: keyof KonicaFilterState, value: string) => {
    setSelectedFilters((current) => ({
      ...current,
      [group]: toggleFilterValue(current[group], value),
    }));
  };

  const clearFilters = () => {
    setSearchValue("");
    setSortValue("recommended");
    setMinSpeed("Any");
    setMaxSpeed("Any");
    setSelectedFilters(createEmptyKonicaFilters());
  };

  const filteredProducts = normalizedKonicaProducts.filter((product) => {
    const { meta } = product;
    const matchesMinSpeed = minSpeed === "Any" || meta.speed >= Number(minSpeed);
    const matchesMaxSpeed = maxSpeed === "Any" || meta.speed <= Number(maxSpeed);

    return (
      matchesSearchQuery(meta.searchTerms, searchValue) &&
      matchesSelectedOptions([meta.category], selectedFilters.categories) &&
      matchesSelectedOptions([meta.outputMode], selectedFilters.outputModes) &&
      matchesSelectedOptions(meta.printFormats, selectedFilters.printFormats) &&
      matchesSelectedOptions(meta.printVolumes, selectedFilters.printVolumes) &&
      matchesSelectedOptions(meta.deviceTypes, selectedFilters.deviceTypes) &&
      matchesMinSpeed &&
      matchesMaxSpeed
    );
  });

  const sortedProducts =
    sortValue === "speed-desc"
      ? [...filteredProducts].sort((left, right) => right.meta.speed - left.meta.speed)
      : sortValue === "speed-asc"
        ? [...filteredProducts].sort((left, right) => left.meta.speed - right.meta.speed)
        : sortValue === "name-asc"
          ? [...filteredProducts].sort((left, right) => left.name.localeCompare(right.name))
          : filteredProducts;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="relative overflow-hidden -mt-16"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 25, 60, 0.75), rgba(10, 25, 60, 0.75)), url('https://zestek.vercel.app/assets/images/hero/konica-production-hero-printer.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div className="container mx-auto section-padding pt-16 md:pt-20">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest">
              Product Finder
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold">
              Konica Minolta Production Printers
            </h1>
            <p className="mt-3 text-sm md:text-base text-primary-foreground/80">
              Press-grade output for commercial print, packaging mockups, textured media, and short-run production with
              SLA-backed uptime.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#konica-quote-form" className="rounded-full bg-white text-navy px-5 py-2 text-xs font-semibold">
                Request a Quote
              </a>
              <a
                href="https://bt.konicaminolta.in/brochure-download/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-primary-foreground"
              >
                Download Brochures
              </a>
              <Link to="/roi-calculator" className="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold">
                ROI Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {valueCards.map((card) => (
            <div key={card.tag} className="rounded-2xl bg-card border border-border p-5">
              <span className="inline-flex items-center rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight">
                {card.tag}
              </span>
              <h3 className="mt-4 font-display font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ProductFilterPanel
              variant="sidebar"
              className="lg:top-28"
              eyebrow="Konica Smart Filters"
              title="Filter Konica printers by category, format, and production speed"
              description="Search by model name and use the filter chips below to narrow production or office devices by output type, paper format, print volume, device workflow, and speed range."
              totalCount={normalizedKonicaProducts.length}
              resultCount={sortedProducts.length}
              searchPlaceholder="Search model or series"
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onClear={clearFilters}
              sortValue={sortValue}
              sortOptions={konicaSortOptions}
              onSortChange={setSortValue}
              extraControls={
                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-navy/75">Speed Range (PPM)</p>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Min</span>
                      <select
                        value={minSpeed}
                        onChange={(event) => setMinSpeed(event.target.value)}
                        className="mt-2 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                      >
                        {konicaSpeedOptions.map((option) => (
                          <option key={`min-${option}`} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Max</span>
                      <select
                        value={maxSpeed}
                        onChange={(event) => setMaxSpeed(event.target.value)}
                        className="mt-2 w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                      >
                        {konicaSpeedOptions.map((option) => (
                          <option key={`max-${option}`} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
              }
              groups={[
                {
                  id: "category",
                  label: "Product Category",
                  options: ["Production Printer", "Office Multifunctional Printer"],
                  selected: selectedFilters.categories,
                  onToggle: (value) => toggleFilter("categories", value),
                },
                {
                  id: "output-mode",
                  label: "Colour / Mono",
                  options: ["Color", "Mono"],
                  selected: selectedFilters.outputModes,
                  onToggle: (value) => toggleFilter("outputModes", value),
                },
                {
                  id: "print-format",
                  label: "Print Format",
                  options: ["A4", "A3", "SRA3", "B2", "Banner"],
                  selected: selectedFilters.printFormats,
                  onToggle: (value) => toggleFilter("printFormats", value),
                },
                {
                  id: "print-volume",
                  label: "Print Volume",
                  options: ["Low", "Medium", "High", "Ultra"],
                  selected: selectedFilters.printVolumes,
                  onToggle: (value) => toggleFilter("printVolumes", value),
                },
                {
                  id: "device-type",
                  label: "Device Type",
                  options: ["Print", "Scan", "Copy", "Fax"],
                  selected: selectedFilters.deviceTypes,
                  onToggle: (value) => toggleFilter("deviceTypes", value),
                },
              ]}
            />

            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Filtered Products</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-navy">{sortedProducts.length}</span> of{" "}
                    {normalizedKonicaProducts.length}
                  </p>
                </div>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {sortedProducts.map((product, index) => (
                      <motion.div
                        key={`${product.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.02 }}
                        className="flex h-full flex-col rounded-2xl bg-card border border-border p-5 transition-all hover:border-highlight hover:shadow-lg"
                      >
                      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/60">
                        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain p-3" />
                      </div>
                      <div className="mb-3 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-widest text-highlight">
                        {product.badges.map((badge) => (
                          <span key={`${product.name}-${badge}`} className="rounded-full bg-highlight/15 px-3 py-1">
                            {badge}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display font-bold text-navy">{product.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.meta.description}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/80">
                        {product.meta.highlights.join(" | ")}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">
                        <span className="font-semibold text-navy">Best for:</span> {product.meta.bestFor}
                      </p>
                        <div className="mt-auto space-y-2 pt-5">
                        <a
                          href={product.viewUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-primary-foreground"
                        >
                          Check Price & Details
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a
                          href={salesPhoneHref}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-semibold text-navy"
                        >
                          <PhoneCall className="h-4 w-4" />
                          Call for Best Price
                        </a>
                        <div className="grid grid-cols-1 gap-2 pt-1">
                          <a
                            href={product.viewUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-2.5 text-xs font-semibold text-navy"
                          >
                            <Package className="h-4 w-4" />
                            View Toner & Consumables
                          </a>
                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-2.5 text-xs font-semibold text-navy"
                          >
                            <Wrench className="h-4 w-4" />
                            Service & Support
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="rounded-3xl border border-dashed border-border bg-card px-6 py-12 text-center">
                  <h3 className="font-display text-xl font-bold text-navy">No Konica models match these filters</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Reset a few chips or widen the speed range to see more production and office models.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-5 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0 bg-[#f7fbff] border-y border-border">
        <div className="container mx-auto">
          <h2 className="section-title text-2xl md:text-3xl">Full Production Lineup (Konica Minolta)</h2>
          <p className="section-subtitle mt-2">
            Available on request with configuration, finishing, and media guidance.
          </p>
          <ul className="mt-6 grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            {lineupItems.map((item) => (
              <li key={item} className="rounded-xl bg-white border border-border px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding pt-0" id="konica-quote-form">
        <div className="container mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="rounded-2xl bg-card border border-border p-6">
            <h2 className="section-title text-2xl md:text-3xl">Need a Production Print Quote?</h2>
            <p className="section-subtitle mt-2">
              Share your substrates, monthly load, and finishing requirements. We will recommend the best press and ROI plan.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                {
                  tag: "MED",
                  title: "Media Mix",
                  body: "Coated stock, textured paper, envelopes, labels, and long-sheet applications.",
                },
                {
                  tag: "FIN",
                  title: "Finishing Flow",
                  body: "Booklets, trimming, punching, stacking, and output requirements for live jobs.",
                },
                {
                  tag: "ROI",
                  title: "ROI Planning",
                  body: "Monthly volume, uptime expectations, and the best-fit press shortlist for your floor.",
                },
              ].map((item) => (
                <div key={item.tag} className="rounded-2xl bg-muted/60 border border-border p-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-highlight">{item.tag}</span>
                  <h3 className="mt-2 font-display font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-border bg-white p-4 text-sm text-muted-foreground">
              <strong className="text-navy">Includes</strong> Site-readiness checklist, uptime SLA, and operator training plan.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display font-bold text-navy text-xl">Request Production Pricing</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-navy">Name</label>
                <input name="name" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Company Name</label>
                <input name="company_name" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-navy">Work Email</label>
                <input name="work_email" type="email" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Phone Number</label>
                <input name="phone_number" type="tel" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm" required />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Monthly Print Volume</label>
              <select name="monthly_print_volume" className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
                <option>Select volume</option>
                <option>Below 20,000 impressions</option>
                <option>20,000 - 100,000 impressions</option>
                <option>100,000 - 250,000 impressions</option>
                <option>250,000+ impressions</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-navy">Message / Requirements</label>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us about substrates, finishing, or timeline."
                className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KonicaProduction;
