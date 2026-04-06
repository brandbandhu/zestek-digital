export type EpsonWorkforceSpotlightKey = "em-c8100" | "am-m5500";

type SpotlightCard = {
  title: string;
  body: string;
};

type SpotlightComparisonRow = {
  label: string;
  productValue: string;
  competitorValue: string;
};

type SpotlightFact = {
  label: string;
  value: string;
};

export type EpsonWorkforceSpotlight = {
  key: EpsonWorkforceSpotlightKey;
  route: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  eyebrow: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  campaignLine: string;
  offerTitle: string;
  offerBody: string;
  heroChips: string[];
  productImage: string;
  productImageAlt: string;
  officialUrl: string;
  introTitle: string;
  introParagraphs: string[];
  quickFacts: SpotlightFact[];
  trustCards: SpotlightCard[];
  featureTitle: string;
  featureCards: SpotlightCard[];
  applicationTitle: string;
  applicationIntro: string;
  applicationCards: SpotlightCard[];
  comparisonTitle: string;
  comparisonIntro: string;
  competitorLabel: string;
  comparisonRows: SpotlightComparisonRow[];
  benefitsTitle: string;
  benefitBullets: string[];
  impactTitle: string;
  impactBody: string;
  offerBannerTitle: string;
  offerBannerBody: string;
  ctaTitle: string;
  ctaBody: string;
};

export const epsonWorkforceSpotlights: Record<EpsonWorkforceSpotlightKey, EpsonWorkforceSpotlight> = {
  "em-c8100": {
    key: "em-c8100",
    route: "/epson-em-c8100",
    metaTitle: "Epson EM-C8100 A3 Printer | Low Cost Printing Machine for Print Shops",
    metaDescription:
      "Buy Epson EM-C8100 A3 multifunction printer for low running cost, long-size output and reliable high-volume printing. Ideal for print shops. Call Zestek for pricing.",
    metaKeywords: [
      "Epson C8100 printer India",
      "A3 multifunction printer for print shop",
      "low cost printing machine India",
      "Epson ink tank A3 printer business",
      "digital printing machine for shop",
      "Epson EM-C8100 price India",
      "best printer for xerox shop",
    ],
    eyebrow: "Epson WorkForce Pro",
    name: "Epson EM-C8100 A3 Multifunction Printer",
    heroTitle: "A3 colour printing designed for growing print shops",
    heroSubtitle:
      "The Epson EM-C8100 helps print businesses take on letterheads, brochures, office documents and long-size jobs with better running economics and less interruption.",
    campaignLine: "Print letterheads digitally with offset-friendly economics and expand into higher-margin A3 work.",
    offerTitle: "Introductory print support",
    offerBody: "Includes 1 lakh complimentary prints with machine purchase through Zestek.",
    heroChips: ["Low print cost", "Low maintenance", "A3 plus long size output", "No AC or UPS required"],
    productImage:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256&clid=SAPDAM&id=818b370842b00667e251fd5a0e34aa07daf5c4a6&prclid=banner&prid=1200Wx1200H&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6",
    productImageAlt: "Epson EM-C8100 A3 multifunction printer",
    officialUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C8100-Multifunction-A3%2B-Color-Printer/p/C11CL31503",
    introTitle: "A business-ready A3 printer for commercial print counters",
    introParagraphs: [
      "If you are looking for a cost-conscious A3 printer for a print shop, copy centre or in-house print desk, the Epson EM-C8100 is built to improve output without pushing up running cost.",
      "It gives you a practical route into high-volume A3 colour work while keeping maintenance demands low. That makes it a strong fit for shops that want faster turnaround, cleaner margins and more control over outsourced work.",
    ],
    quickFacts: [
      { label: "Functions", value: "Print, scan and copy" },
      { label: "Media range", value: "A3 plus and long size up to 13 x 47 inches" },
      { label: "Best fit", value: "Print shops, copy centres and quick commercial jobs" },
      { label: "Core strength", value: "Lower operating cost with reliable business output" },
    ],
    trustCards: [
      {
        title: "Built for print volumes that matter",
        body: "Take on recurring office work, colour document jobs and bulk walk-in demand without shifting every A3 order outside.",
      },
      {
        title: "Better economics on everyday jobs",
        body: "Low running cost helps make digital letterheads, brochures and branded collateral more financially attractive.",
      },
      {
        title: "Support from selection to service",
        body: "Zestek helps with pricing, installation planning, service guidance and long-term consumable support.",
      },
    ],
    featureTitle: "Designed to convert print demand into profit",
    featureCards: [
      {
        title: "Low running cost",
        body: "Bring down cost per print and protect margins on repeat colour jobs.",
      },
      {
        title: "High-volume readiness",
        body: "Handle day-to-day production work without treating every order as a special case.",
      },
      {
        title: "Low maintenance profile",
        body: "Reduce interruptions, service dependency and avoidable downtime on busy counters.",
      },
      {
        title: "Flexible installation",
        body: "A practical fit for Indian shop conditions where operators want simpler power requirements.",
      },
      {
        title: "Long-size print capability",
        body: "Open up menus, inserts, signage strips and banner-style work up to 13 x 47 inches.",
      },
      {
        title: "Print, scan and copy in one device",
        body: "Cover daily document workflows without adding separate hardware for basic service needs.",
      },
    ],
    applicationTitle: "Work that the EM-C8100 can unlock",
    applicationIntro:
      "This model is suited to shops that want to widen their service menu while keeping delivery times short and predictable.",
    applicationCards: [
      {
        title: "Letterheads and office stationery",
        body: "Produce branded sheets, forms and internal office stock with lower per-job cost.",
      },
      {
        title: "Flyers, brochures and pamphlets",
        body: "Take on marketing work for local businesses without depending on outside vendors for every run.",
      },
      {
        title: "Visiting cards and presentation sets",
        body: "Support day-to-day commercial print requirements with stronger control over turnaround.",
      },
      {
        title: "Photo and colour document work",
        body: "Serve mixed print demand from customers who need both office and visual output.",
      },
      {
        title: "Long-size output",
        body: "Create menus, long-format promotional work and custom-sized print pieces from the same machine.",
      },
      {
        title: "Copy and scan services",
        body: "Keep essential walk-in service demand inside the same workflow instead of splitting counters.",
      },
    ],
    comparisonTitle: "How the EM-C8100 compares with a traditional laser setup",
    comparisonIntro:
      "For print businesses evaluating long-term operating cost, this model is positioned as a more margin-friendly alternative to conventional laser hardware.",
    competitorLabel: "Traditional laser printer",
    comparisonRows: [
      { label: "Print cost", productValue: "Low and margin-friendly", competitorValue: "Higher running cost" },
      { label: "Maintenance", productValue: "Lower service burden", competitorValue: "More frequent upkeep" },
      { label: "Power planning", productValue: "No AC or UPS dependency", competitorValue: "Often needs extra planning" },
      { label: "Long-size printing", productValue: "Up to 13 x 47 inches", competitorValue: "Limited or unavailable" },
      { label: "Profitability on repeat jobs", productValue: "Stronger per-print upside", competitorValue: "Moderate upside" },
    ],
    benefitsTitle: "A better business case for print shop owners",
    benefitBullets: [
      "Improve profit margins on recurring A3 colour work",
      "Reduce outsourcing for long-size and branded jobs",
      "Move faster on urgent customer timelines",
      "Take larger print volumes with less interruption",
      "Expand service categories without building a new setup from scratch",
    ],
    impactTitle: "More revenue with tighter control over cost",
    impactBody:
      "The EM-C8100 is best suited to print businesses that want to increase output, keep more work in-house and grow into higher-value commercial jobs without overcomplicating operations.",
    offerBannerTitle: "Launch your next print service with 1 lakh complimentary prints",
    offerBannerBody:
      "Use the introductory print support to start production faster, test new service lines and reduce the pressure of early operating cost.",
    ctaTitle: "Talk to Zestek about pricing, demo and rollout",
    ctaBody:
      "We can help you evaluate fit, compare running economics and plan the right setup for your print volume and service mix.",
  },
  "am-m5500": {
    key: "am-m5500",
    route: "/epson-m5500",
    metaTitle: "Epson M5500 A3 Printer | Best Alternative to RC Machines in India",
    metaDescription:
      "Upgrade to the Epson AM-M5500 A3 mono multifunction printer for lower print cost, lower maintenance and high-volume copy shop work. Ask Zestek for pricing and demo support.",
    metaKeywords: [
      "Epson M5500 printer India",
      "RC machine alternative India",
      "xerox shop printer low cost",
      "A3 mono multifunction printer India",
      "best printer for xerox business",
      "replace Ricoh machine printer",
      "bulk printing machine India",
    ],
    eyebrow: "Epson WorkForce Enterprise",
    name: "Epson AM-M5500 A3 Mono Multifunction Printer",
    heroTitle: "A lower-cost route away from legacy RC machine workflows",
    heroSubtitle:
      "The Epson AM-M5500 is built for copy counters and document-heavy shops that need dependable A3 mono output, faster service and better running economics.",
    campaignLine: "For xerox-style businesses focused on volume, this is a cleaner path to lower print cost and better uptime.",
    offerTitle: "High-volume launch offer",
    offerBody: "Includes 3 lakh complimentary prints with machine purchase through Zestek.",
    heroChips: ["Lowest cost per print", "High-speed mono output", "Heavy-duty A3 workload", "Low maintenance"],
    productImage:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=24gro-mono_BIJpro_STD_22b&clid=SAPDAM&id=612562fe8125dd5065499e86215dcc859eba7006&prclid=banner&prid=1200Wx1200H&vid=612562fe8125dd5065499e86215dcc859eba7006",
    productImageAlt: "Epson AM-M5500 A3 monochrome multifunction printer",
    officialUrl:
      "https://www.epson.co.in/PrecisionCore/Office-Printers/Epson-WorkForce-Enterprise-AM-M5500%2C-A3-Mono-Multifunction-Printer/p/C11CL48503",
    introTitle: "A strong fit for copy shops replacing expensive RC machines",
    introParagraphs: [
      "If your shop still depends on older RC-style mono equipment, the Epson AM-M5500 offers a more cost-aware path for bulk black-and-white work.",
      "It is designed for operators who need consistent speed, lower maintenance pressure and a better return on daily document printing, scanning and copying.",
    ],
    quickFacts: [
      { label: "Functions", value: "Print, scan and copy" },
      { label: "Output type", value: "A3 monochrome multifunction printing" },
      { label: "Best fit", value: "Copy shops, print counters and document-heavy offices" },
      { label: "Core strength", value: "High-volume mono output with lower service burden" },
    ],
    trustCards: [
      {
        title: "Built for daily queue pressure",
        body: "Serve walk-in demand and bulk document jobs without slowing down your counter workflow.",
      },
      {
        title: "Lower service disruption",
        body: "Reduce the downtime and maintenance costs that often come with ageing mono copier fleets.",
      },
      {
        title: "Business-first support",
        body: "Zestek helps with machine fit, pricing, onboarding and after-sales guidance for high-volume users.",
      },
    ],
    featureTitle: "A mono production workhorse for copy-led businesses",
    featureCards: [
      {
        title: "Very low cost per print",
        body: "Protect profit on everyday mono output where volume matters more than anything else.",
      },
      {
        title: "High-speed performance",
        body: "Handle queues, tender work and recurring customer demand with faster job completion.",
      },
      {
        title: "Heavy-duty design",
        body: "A better fit for continuous use than machines that struggle under repetitive daily load.",
      },
      {
        title: "Minimal maintenance",
        body: "Spend less time dealing with avoidable interruptions and expensive service cycles.",
      },
      {
        title: "A3 print, scan and copy",
        body: "Cover essential document service needs from one mono-focused multifunction platform.",
      },
      {
        title: "Energy-conscious operation",
        body: "Lower power demand contributes to better long-term operating control.",
      },
    ],
    applicationTitle: "Where the AM-M5500 fits best",
    applicationIntro:
      "This model is ideal for businesses that need reliable black-and-white output across repeat document jobs and customer walk-ins.",
    applicationCards: [
      {
        title: "Copy and xerox counters",
        body: "Serve daily document demand with stronger control over output cost.",
      },
      {
        title: "Bulk document printing",
        body: "Take on internal business jobs, contractor work and high-page-count requests more confidently.",
      },
      {
        title: "Government and tender files",
        body: "Handle long document sets where speed, consistency and operating cost are critical.",
      },
      {
        title: "Education and coaching notes",
        body: "Print study material and reference packs without overloading cost per page.",
      },
      {
        title: "Office records and legal documents",
        body: "Support documentation-heavy customers who need dependable mono output every day.",
      },
      {
        title: "Scan and copy workflows",
        body: "Keep customer service efficient with one device handling the most common document tasks.",
      },
    ],
    comparisonTitle: "Why many mono print businesses compare it against RC machines",
    comparisonIntro:
      "For shops focused on black-and-white volume, the AM-M5500 is positioned as a simpler and more profitable alternative to older RC machine ecosystems.",
    competitorLabel: "Legacy RC machine",
    comparisonRows: [
      { label: "Print cost", productValue: "Very low", competitorValue: "Higher ongoing cost" },
      { label: "Maintenance", productValue: "Minimal", competitorValue: "Expensive and frequent" },
      { label: "Downtime", productValue: "Lower disruption", competitorValue: "More service dependency" },
      { label: "Power consumption", productValue: "Lower demand", competitorValue: "Higher demand" },
      { label: "Profit margin", productValue: "Stronger on daily mono work", competitorValue: "More limited" },
    ],
    benefitsTitle: "Built to improve income on mono-heavy print work",
    benefitBullets: [
      "Earn more per print on everyday black-and-white jobs",
      "Reduce spare, service and maintenance expense",
      "Handle more customers in less time",
      "Increase daily output without adding workflow complexity",
      "Improve reliability for repeat business and institutional work",
    ],
    impactTitle: "Higher earnings without carrying old machine headaches",
    impactBody:
      "For xerox centres and mono print counters, the AM-M5500 is about lowering avoidable cost while increasing dependable daily throughput and customer confidence.",
    offerBannerTitle: "Start with 3 lakh complimentary prints",
    offerBannerBody:
      "The launch offer gives copy-led businesses a faster route to operational savings from day one while they shift volume onto the new machine.",
    ctaTitle: "Plan your RC replacement with Zestek",
    ctaBody:
      "We can help you compare total running cost, shortlist the right mono setup and arrange demo or commercial details for your shop.",
  },
};
