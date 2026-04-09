import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductFilterPanel from "@/components/ProductFilterPanel";
import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { matchesSearchQuery, matchesSelectedOptions, toggleFilterValue } from "@/lib/productFilters";
import PageMeta from "@/components/PageMeta";
import workforceBreadcrumbImage from "../../assets/breadcrub/workforce.png";

type WorkforceProduct = {
  name: string;
  productUrl: string;
  imageUrl: string;
};

type WorkforceProductMeta = {
  paperSize: string;
  outputMode: string;
  series: string;
  deviceType: string;
  usageType: string;
  features: string[];
  description: string;
  highlights: string[];
  bestFor: string;
  consumablesUrl: string;
  searchTerms: string[];
};

type WorkforceFilterState = {
  paperSizes: string[];
  outputModes: string[];
  series: string[];
  deviceTypes: string[];
  usageTypes: string[];
  features: string[];
};

const workforceProducts: WorkforceProduct[] = [
  {
    name: "Epson WorkForce Enterprise AM-C4000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C4000-A3-Colour-Multifunction-Printer/p/C11CJ43503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    name: "Epson WorkForce Enterprise AM-C5000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C5000-A3-Colour-Multifunction-Printer/p/C11CJ42503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    name: "Epson WorkForce Enterprise AM-C6000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C6000-A3-Colour-Multifunction-Printer/p/C11CJ91503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=497de13b25347068dce62d42ce18bbe12579f0ea&vid=497de13b25347068dce62d42ce18bbe12579f0ea&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=C4000",
  },
  {
    name: "Epson WorkForce Enterprise AM-M5500",
    productUrl:
      "https://www.epson.co.in/PrecisionCore/Office-Printers/Epson-WorkForce-Enterprise-AM-M5500%2C-A3-Mono-Multifunction-Printer/p/C11CL48503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=341c418f7bb0a487ad3e195e1336dcc067c2c641&vid=341c418f7bb0a487ad3e195e1336dcc067c2c641&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=24gro-mono_BIJpro_STD_9b_resized",
  },
  {
    name: "Epson WorkForce Enterprise WF-C21000",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-WF-C21000-A3-Colour-Multifunction-Printer/p/C11CH88503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86&vid=4bfd14bf0ccc2f6644cf16a8f4b0c1caa3f66f86&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-C20590_01_2-1",
  },
  {
    name: "Epson WorkForce Enterprise WF-M21000",
    productUrl:
      "https://www.epson.co.in/PrecisionCore/Office-Printers/WorkForce-Enterprise-WF-M21000-A3-Monochrome-Multifunction-Printer/p/C11CJ87503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=614883aa60e81f38efc38accc60cfa6db65683b6&vid=614883aa60e81f38efc38accc60cfa6db65683b6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=19Gra_FDV_01_2-1",
  },
  {
    name: "Epson WorkForce Pro EM-C800",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C800-Workgroup-Color-Multifunction-Printer/p/C11CK19503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=31f7095d7c643ae67feef8d893b926569ea236e4&vid=31f7095d7c643ae67feef8d893b926569ea236e4&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-Pro_EM-C800_hero-headon-output_690x460%402x",
  },
  {
    name: "Epson WorkForce Pro EM-C8100",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C8100-Multifunction-A3%2B-Color-Printer/p/C11CL31503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=818b370842b00667e251fd5a0e34aa07daf5c4a6&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256",
  },
  {
    name: "Epson WorkForce Pro EM-C8101",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C8101-Multifunction-A3%2B-Color-Printer/p/C11CL32503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=818b370842b00667e251fd5a0e34aa07daf5c4a6&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256",
  },
  {
    name: "Epson WorkForce Pro WF-C5890",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/Epson-WorkForce-Pro-WF-C5890-Wi-Fi-Duplex-All-in-One-Inkjet-Printer-/p/C11CK23503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=2730280128cfc7162fb81d9a8306ebf539b00ec5&vid=2730280128cfc7162fb81d9a8306ebf539b00ec5&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-C5890_headon_690x460",
  },
  {
    name: "WorkForce Enterprise AM-C400",
    productUrl:
      "https://www.epson.co.in/For-Work/Printers/Business-Inkjet-Printers/WorkForce-Enterprise-AM-C400-A4-Colour-Multifunction-Printer/p/C11CJ93503",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=5796f49ff2ae6d732dd37b1e688b9bd301b3187d&vid=5796f49ff2ae6d732dd37b1e688b9bd301b3187d&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=AM-C400_hero-headon_690x460%402x",
  },
  {
    name: "WorkForce Pro WF-M5899",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/Epson-WorkForce-Pro-WF-M5899-A4-Monochrome-Multi-Function-Printer/p/C11CK76502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=3c8142a4de9967bf67832e11432c20d3fa7f2ad1&vid=3c8142a4de9967bf67832e11432c20d3fa7f2ad1&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=22Cod_mono_FPS_01_b-2",
  },
  {
    name: "WorkForce WF-M5399",
    productUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-WF-M5399-Monochrome-Printer/p/C11CK77502",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?id=c789e72c87166cd07430ead3e452461c206452fe&vid=c789e72c87166cd07430ead3e452461c206452fe&prid=515Wx515H&clid=SAPDAM&prclid=productpictures&assetDescr=WF-M5399_headon-output_690x460",
  },
];

const salesPhoneHref = "tel:+919920909700";
const salesPhoneNumber = "9920909700";
const salesWhatsAppHref =
  "https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20details%20for%20Epson%20WorkForce%20printers.";
const serviceSupportContactUrl = "/contact#service-amc";

const createEmptyWorkforceFilters = (): WorkforceFilterState => ({
  paperSizes: [],
  outputModes: [],
  series: [],
  deviceTypes: [],
  usageTypes: [],
  features: [],
});

const workforceSortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
];

const workforceSpotlightPaths: Record<string, string> = {
  "Epson WorkForce Pro EM-C8100": "/epson-em-c8100",
  "Epson WorkForce Enterprise AM-M5500": "/epson-m5500",
};

const buildWorkforceFeatureList = (features: string[]) => {
  if (features.length === 0) {
    return "shared office printing";
  }

  if (features.length === 1) {
    return features[0];
  }

  if (features.length === 2) {
    return `${features[0]} and ${features[1]}`;
  }

  return `${features.slice(0, -1).join(", ")}, and ${features.at(-1)}`;
};

const getWorkforceProductMeta = (product: WorkforceProduct): WorkforceProductMeta => {
  const source = `${product.name} ${product.productUrl}`.toLowerCase();
  const isMonochrome =
    source.includes("mono") || source.includes("monochrome") || source.includes("wf-m") || source.includes("am-m");
  const isA3Plus = source.includes("a3%2b") || source.includes("a3+");
  const isA3 = isA3Plus || source.includes("a3");
  const hasWifi = source.includes("wi-fi") || source.includes("wifi");
  const hasDuplex = source.includes("duplex");
  const isMultifunction = source.includes("multifunction") || source.includes("all-in-one") || source.includes("multi-function");

  const paperSize = isA3Plus ? "A3+" : isA3 ? "A3" : "A4";
  const outputMode = isMonochrome ? "Monochrome" : "Colour";
  const series = source.includes("enterprise") ? "Enterprise" : "Pro";
  const deviceType = isMultifunction ? "Multifunction" : "Printer";
  const usageType = series === "Enterprise" ? "High Volume" : paperSize === "A4" ? "Workgroup" : "Department";
  const features = [hasWifi ? "Wi-Fi" : null, hasDuplex ? "Duplex" : null].filter(
    (value): value is string => Boolean(value),
  );
  const highlightUsage = usageType === "High Volume" ? "High Volume Printing" : usageType;
  const highlights = [paperSize, outputMode, highlightUsage, deviceType];

  let description = `${series} ${paperSize} ${outputMode.toLowerCase()} business inkjet ${deviceType.toLowerCase()} built for reliable office printing and lower-interruption workflows.`;

  if (series === "Enterprise" && outputMode === "Colour") {
    description = `Enterprise ${paperSize} colour multifunction printer built for high-volume departments, centralized output, and secure shared office workflows.`;
  } else if (series === "Enterprise" && outputMode === "Monochrome") {
    description = `Enterprise ${paperSize} monochrome multifunction printer designed for document-heavy offices that need fast output and predictable running cost.`;
  } else if (paperSize === "A3+") {
    description = `Business-ready ${paperSize} ${outputMode.toLowerCase()} multifunction printer built for wide-format office documents, presentations, and high-value print work.`;
  } else if (features.length > 0) {
    description = `${series} ${paperSize} ${outputMode.toLowerCase()} ${deviceType.toLowerCase()} with ${buildWorkforceFeatureList(features.map((feature) => feature.toLowerCase()))} for streamlined office printing.`;
  }

  let bestFor = "Small offices and teams that need dependable business printing with lower running cost.";

  if (series === "Enterprise" && outputMode === "Colour") {
    bestFor = "Corporate offices, central print rooms, and high-volume colour document workflows.";
  } else if (series === "Enterprise" && outputMode === "Monochrome") {
    bestFor = "Copy-led departments, records teams, and mono-heavy business printing.";
  } else if (paperSize === "A3+") {
    bestFor = "Marketing teams, admin departments, and businesses that need wider-format document output.";
  } else if (usageType === "Department") {
    bestFor = "Branch offices, admin teams, and shared departments with regular daily printing.";
  } else if (usageType === "Workgroup") {
    bestFor = "Small offices, finance teams, and workgroups with predictable everyday print demand.";
  }

  return {
    paperSize,
    outputMode,
    series,
    deviceType,
    usageType,
    features,
    description,
    highlights,
    bestFor,
    consumablesUrl: product.productUrl,
    searchTerms: [product.name, paperSize, outputMode, series, deviceType, usageType, description, bestFor, ...features],
  };
};

const normalizedWorkforceProducts = workforceProducts.map((product) => ({
  ...product,
  meta: getWorkforceProductMeta(product),
}));

const EpsonWorkforce = () => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("recommended");
  const [selectedFilters, setSelectedFilters] = useState<WorkforceFilterState>(createEmptyWorkforceFilters);

  const toggleFilter = (group: keyof WorkforceFilterState, value: string) => {
    setSelectedFilters((current) => ({
      ...current,
      [group]: toggleFilterValue(current[group], value),
    }));
  };

  const clearFilters = () => {
    setSearchValue("");
    setSortValue("recommended");
    setSelectedFilters(createEmptyWorkforceFilters());
  };

  const filteredProducts = normalizedWorkforceProducts.filter((product) => {
    const { meta } = product;

    return (
      matchesSearchQuery(meta.searchTerms, searchValue) &&
      matchesSelectedOptions([meta.paperSize], selectedFilters.paperSizes) &&
      matchesSelectedOptions([meta.outputMode], selectedFilters.outputModes) &&
      matchesSelectedOptions([meta.series], selectedFilters.series) &&
      matchesSelectedOptions([meta.deviceType], selectedFilters.deviceTypes) &&
      matchesSelectedOptions([meta.usageType], selectedFilters.usageTypes) &&
      matchesSelectedOptions(meta.features, selectedFilters.features)
    );
  });

  const sortedProducts =
    sortValue === "name-asc"
      ? [...filteredProducts].sort((left, right) => left.name.localeCompare(right.name))
      : sortValue === "name-desc"
        ? [...filteredProducts].sort((left, right) => right.name.localeCompare(left.name))
        : filteredProducts;

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Epson WorkForce Printers | Business Inkjet Solutions by Zestek"
        description="Find Epson WorkForce business printers with filters for paper size, output mode, enterprise/pro series, usage, and workflow features."
        keywords={[
          "Epson WorkForce printers India",
          "business inkjet printer",
          "A3 multifunction printer for office",
          "Epson enterprise printer",
          "WorkForce printer price Mumbai",
        ]}
        canonicalPath="/epson-workforce"
        image="/zestek-logo.png"
      />
      <Header />

      <section
        className="pb-10 -mt-16"
        style={{
          backgroundImage: `url('${workforceBreadcrumbImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto section-padding pt-16 md:pt-20">
          <span className="mt-4 inline-flex items-center rounded-full bg-navy/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy">
            Print Buddy of Every Print Shop
          </span>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-navy/80">
            Home / Epson WorkForce
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-display font-extrabold text-navy md:text-4xl lg:text-5xl">
            Epson WorkForce Printers for secure, high-output business teams.
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={salesPhoneHref}
              className="rounded-full bg-navy px-5 py-2 text-xs font-semibold text-primary-foreground"
            >
              Call Now
            </a>
            <a
              href={salesWhatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-navy/30 px-5 py-2 text-xs font-semibold text-navy"
            >
              WhatsApp
            </a>
            <a
              href="https://epsonadvantage.in"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-navy/30 px-5 py-2 text-xs font-semibold text-navy"
            >
              Download Brochure
            </a>
            <Link to="/roi-calculator" className="rounded-full border border-navy/30 px-5 py-2 text-xs font-semibold text-navy">
              ROI Calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding pt-6 md:pt-8">
        <div className="container mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson WorkForce</p>
            <h2 className="section-title text-2xl md:text-3xl mt-2">Business Inkjet Printers</h2>
            <p className="section-subtitle mt-3">
              Epson business inkjet printers deliver amazing quality, blazing-fast speeds, exceptional reliability and
              dependable performance to meet your business needs.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Find the right WorkForce lineup faster. Use the filters below to move from broad product research into a
              shortlist that matches your print format, workload, and business environment.
            </p>
            <div className="mt-5 grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
              <div className="rounded-xl border border-border bg-card p-3">
                Mono + colour Options for focused teams and shared office fleets.
              </div>
              <div className="rounded-xl border border-border bg-card p-3">
                A4 + A3 Choose by format, not just by price.
              </div>
              <div className="rounded-xl border border-border bg-card p-3">
                Ready to compare Use model details, brochure, and quote flow together.
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-card border border-border p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Epson WorkForce</p>
            <h3 className="mt-2 font-display font-bold text-navy">Printer information</h3>
            <div className="mt-4 rounded-xl border border-border bg-muted/60 p-4 flex items-center justify-center">
              <img
                src="https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=C4000&clid=SAPDAM&id=497de13b25347068dce62d42ce18bbe12579f0ea&prclid=productpictures&prid=515Wx515H&vid=497de13b25347068dce62d42ce18bbe12579f0ea"
                alt="Epson WorkForce printer"
                className="h-40 w-full object-contain"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-navy">
              <span className="rounded-full bg-highlight/20 px-3 py-1">Service & Support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
            <ProductFilterPanel
              variant="sidebar"
              className="lg:top-28"
              eyebrow="WorkForce Smart Filters"
              title="Filter WorkForce by paper size, output, and office fit"
              description="Use search and smart filter chips to narrow WorkForce models by print format, mono or colour output, workflow type, and business scale."
              totalCount={normalizedWorkforceProducts.length}
              resultCount={sortedProducts.length}
              searchPlaceholder="Search WorkForce model"
              searchValue={searchValue}
              onSearchChange={setSearchValue}
              onClear={clearFilters}
              sortValue={sortValue}
              sortOptions={workforceSortOptions}
              onSortChange={setSortValue}
              groups={[
                {
                  id: "paper-size",
                  label: "Paper Size",
                  options: ["A4", "A3", "A3+"],
                  selected: selectedFilters.paperSizes,
                  onToggle: (value) => toggleFilter("paperSizes", value),
                },
                {
                  id: "output-mode",
                  label: "Output Mode",
                  options: ["Colour", "Monochrome"],
                  selected: selectedFilters.outputModes,
                  onToggle: (value) => toggleFilter("outputModes", value),
                },
                {
                  id: "series",
                  label: "Series",
                  options: ["Enterprise", "Pro"],
                  selected: selectedFilters.series,
                  onToggle: (value) => toggleFilter("series", value),
                },
                {
                  id: "device-type",
                  label: "Device Type",
                  options: ["Multifunction", "Printer"],
                  selected: selectedFilters.deviceTypes,
                  onToggle: (value) => toggleFilter("deviceTypes", value),
                },
                {
                  id: "usage-type",
                  label: "Business Fit",
                  options: ["Workgroup", "Department", "High Volume"],
                  selected: selectedFilters.usageTypes,
                  onToggle: (value) => toggleFilter("usageTypes", value),
                },
                {
                  id: "features",
                  label: "Features",
                  options: ["Wi-Fi", "Duplex"],
                  selected: selectedFilters.features,
                  onToggle: (value) => toggleFilter("features", value),
                },
              ]}
            />

            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Filtered Products</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-navy">{sortedProducts.length}</span> of{" "}
                    {normalizedWorkforceProducts.length}
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
                        transition={{ delay: index * 0.03 }}
                        className="flex h-full flex-col rounded-2xl bg-card border border-border p-5 transition-all hover:border-highlight hover:shadow-lg"
                      >
                      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/60">
                        <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain p-3" />
                      </div>
                      <div className="mb-3 flex flex-wrap content-start gap-2 text-[10px] font-semibold uppercase tracking-widest text-highlight md:min-h-[3.5rem]">
                        <span className="rounded-full bg-highlight/15 px-3 py-1">{product.meta.paperSize}</span>
                        <span className="rounded-full bg-highlight/15 px-3 py-1">{product.meta.outputMode}</span>
                        <span className="rounded-full bg-highlight/15 px-3 py-1">{product.meta.deviceType}</span>
                      </div>
                      <h3 className="font-display font-bold text-navy md:min-h-[3.75rem]">{product.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground md:mt-3 md:min-h-[4.5rem]">{product.meta.description}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy/80 md:mt-4 md:min-h-[2.5rem]">
                        {product.meta.highlights.join(" | ")}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground md:mt-4 md:min-h-[3.25rem]">
                        <span className="font-semibold text-navy">Best for:</span> {product.meta.bestFor}
                      </p>

                        <div className="mt-auto space-y-2 pt-5">
                        {workforceSpotlightPaths[product.name] ? (
                          <Link
                            to={workforceSpotlightPaths[product.name]}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-primary-foreground"
                          >
                            Check Price & Details
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        ) : (
                          <a
                            href={product.productUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-primary-foreground"
                          >
                            Check Price & Details
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                        <div className="grid grid-cols-1 gap-2 pt-1">
                          <a
                            href={salesPhoneHref}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-muted px-4 py-2.5 text-xs font-semibold text-navy"
                          >
                            <PhoneCall className="h-4 w-4" />
                            <span>Call for Best Price</span>
                            <span className="text-navy/80">{salesPhoneNumber}</span>
                          </a>
                          <Link
                            to={serviceSupportContactUrl}
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
                  <h3 className="font-display text-xl font-bold text-navy">No WorkForce models match these filters</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Clear a few filter chips or try a broader search term to see more business printer options.
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

    <Footer />
  </div>
);
};

export default EpsonWorkforce;
