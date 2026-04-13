export type EpsonWorkforceSpotlightKey = "em-c8100" | "am-m5500";

const c8100CampaignPoster = new URL(
  "../../assets/WhatsApp Image 2026-04-13 at 8.27.39 AM.jpeg",
  import.meta.url,
).href;

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

type SpotlightShowcase = {
  eyebrow: string;
  title: string;
  body: string;
  tagline?: string;
  chips: string[];
  image: string;
  imageAlt: string;
  note?: string;
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
  offerNote?: string;
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
  showcase?: SpotlightShowcase;
};

export const epsonWorkforceSpotlights: Record<EpsonWorkforceSpotlightKey, EpsonWorkforceSpotlight> = {
  "em-c8100": {
    key: "em-c8100",
    route: "/epson-em-c8100",
    metaTitle: "Epson EM-C8100 A3 Printer | High-Speed Low-Cost Printer for Print Shops",
    metaDescription:
      "Explore the Epson EM-C8100 A3 multifunction printer for photocopy centres and print shops. High-speed output, low running cost, versatile media handling, and 1 lakh free prints via Zestek.",
    metaKeywords: [
      "Epson EM-C8100 printer India",
      "Epson C8100 print shop printer",
      "A3 printer for photocopy centre",
      "low cost colour printer for print shop",
      "high speed Epson printer for business",
      "Epson EM-C8100 price India",
      "digital printing machine for print business",
    ],
    eyebrow: "Epson WorkForce Pro",
    name: "Epson EM-C8100 A3 Multifunction Printer",
    heroTitle: "Print buddy of every print shop",
    heroSubtitle:
      "High-speed. Low cost. Built for print business growth. The Epson EM-C8100 is made for photocopy centres, print shops and high-volume counters that want dependable colour output without the heavy running cost of older laser-style setups.",
    campaignLine: "Photo bhi, photocopy bhi. Print letterheads digitally at the cost of offset.",
    offerTitle: "Launch benefit",
    offerBody: "1 lakh prints free with machine purchase through Zestek",
    offerNote: "*A4 size, colour and black-and-white mix, standard coverage.",
    heroChips: [
      "Ultra-low cost per print",
      "Up to 25 pages per minute",
      "Low maintenance",
      "No AC or UPS required",
      "A4, A3 plus and custom media",
    ],
    productImage:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256&clid=SAPDAM&id=818b370842b00667e251fd5a0e34aa07daf5c4a6&prclid=banner&prid=1200Wx1200H&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6",
    productImageAlt: "Epson EM-C8100 A3 multifunction printer",
    officialUrl:
      "https://www.epson.co.in/Business-Inkjet-Printers/WorkForce-Pro-EM-C8100-Multifunction-A3%2B-Color-Printer/p/C11CL31503",
    introTitle: "Why the C8100 is perfect for photocopy centres and print shops",
    introParagraphs: [
      "The EM-C8100 is designed to help print businesses grow with faster output, better colour consistency and an operating model that protects margin on every page.",
      "For photocopy centres and commercial counters, it brings together heavy-duty reliability, low maintenance demand, eco-friendly heat-free printing and flexible media support in one practical A3 platform.",
    ],
    quickFacts: [
      { label: "Speed", value: "Up to 25 pages per minute" },
      { label: "Media support", value: "A4, A3 plus, thick paper, photo paper, stickers, canvas and custom media" },
      { label: "Best fit", value: "Photocopy centres, print shops and high-volume document counters" },
      { label: "Launch support", value: "1 lakh complimentary prints with machine purchase*" },
    ],
    trustCards: [
      {
        title: "Lower cost on every page",
        body: "Ultra-low print cost helps you maximize profit on repeat colour and mixed-output jobs.",
      },
      {
        title: "Faster turnaround for rush work",
        body: "High-speed output helps you handle urgent walk-ins and commercial jobs without delaying delivery.",
      },
      {
        title: "Built for busy counters",
        body: "Reliable heavy-duty performance and lower downtime keep the machine working when business is at peak demand.",
      },
    ],
    featureTitle: "Key features that support print business growth",
    featureCards: [
      {
        title: "High-speed performance",
        body: "Print up to 25 pages per minute so your team can finish more jobs in less time.",
      },
      {
        title: "Low running cost",
        body: "PrecisionCore Heat-Free Technology keeps cost per page significantly lower than traditional laser machines.",
      },
      {
        title: "Consistent print quality",
        body: "Sharp text and vibrant graphics make it a dependable choice for documents, forms and commercial prints.",
      },
      {
        title: "High duty cycle",
        body: "Built to handle lakh-level monthly demand for shops that print continuously through the day.",
      },
      {
        title: "Advanced paper handling",
        body: "Supports A4, A3 plus, thick paper, photo paper, stickers, canvas and other custom media types.",
      },
      {
        title: "Seamless connectivity",
        body: "Integrates easily with network printing, USB workflows and mobile or cloud-led job submission.",
      },
    ],
    applicationTitle: "Photo bhi, photocopy bhi.",
    applicationIntro:
      "Use the EM-C8100 for daily photocopy work, commercial colour output and offset-style stationery jobs without adding a complex production setup.",
    applicationCards: [
      {
        title: "Photocopy and xerox centres",
        body: "Serve day-to-day walk-in demand with fast, reliable output across mixed document jobs.",
      },
      {
        title: "Commercial print shops",
        body: "Handle everyday commercial jobs with lower running cost and consistent quality.",
      },
      {
        title: "Corporate printing requirements",
        body: "Produce office documents, forms, presentations and branded stationery from a single platform.",
      },
      {
        title: "Educational institutes",
        body: "Support study material, notices, forms and campus document workflows with dependable speed.",
      },
      {
        title: "Bulk documentation and forms printing",
        body: "Keep high-page-count jobs moving smoothly without stressing the machine during longer runs.",
      },
      {
        title: "Job work printing businesses",
        body: "Take on outside job work with better control over margin, turnaround and output consistency.",
      },
    ],
    comparisonTitle: "How the EM-C8100 compares with a traditional laser setup",
    comparisonIntro:
      "For shops comparing long-term business value, the EM-C8100 offers a more cost-aware and uptime-friendly path than a typical laser-based machine.",
    competitorLabel: "Traditional laser printer",
    comparisonRows: [
      { label: "Cost per print", productValue: "Ultra-low and margin-friendly", competitorValue: "Higher running cost" },
      { label: "Power consumption", productValue: "Lower with heat-free printing", competitorValue: "Higher overall power draw" },
      { label: "Maintenance downtime", productValue: "Lower interruption and less service pressure", competitorValue: "More maintenance attention" },
      { label: "Heavy-duty usage", productValue: "Designed for continuous print business demand", competitorValue: "Can become costlier under long runs" },
      { label: "Media flexibility", productValue: "A4, A3 plus, thick and custom media", competitorValue: "Often narrower media range" },
    ],
    benefitsTitle: "Advantages for your business",
    benefitBullets: [
      "Increase profit margins with lower ink cost",
      "Reduce electricity bills with heat-free technology",
      "Handle bulk jobs smoothly without machine stress",
      "Improve customer satisfaction with faster delivery",
      "Minimize service interruptions",
    ],
    impactTitle: "High-speed growth without laser-like overheads",
    impactBody:
      "The EM-C8100 is built for shops that want more uptime, better colour-business margins and the flexibility to grow from routine photocopy work into higher-value print jobs.",
    offerBannerTitle: "Start strong with 1 lakh complimentary prints",
    offerBannerBody:
      "Use the launch support to begin production quickly, test new paper applications and reduce the pressure of early consumable cost.",
    ctaTitle: "Talk to Zestek about pricing, demo and rollout",
    ctaBody:
      "We can help you assess monthly volume, compare running economics and plan the right media mix for your photocopy or print business.",
    showcase: {
      eyebrow: "Bottom line",
      title: "From visiting cards to envelopes, stickers and everyday job work.",
      body:
        "The EM-C8100 gives print businesses the flexibility to handle stationery, branded collateral, custom media and routine document printing from one dependable setup.",
      tagline: "Print letterheads digitally at the cost of offset.",
      chips: ["Visiting cards", "Envelopes", "Letterheads", "Stickers", "Photo papers", "Canvas", "Custom media"],
      image: c8100CampaignPoster,
      imageAlt: "Epson EM-C8100 campaign poster with visiting cards, envelopes, stickers and sample print applications",
      note: "Reference campaign visual showing the kind of print jobs the machine can support.",
    },
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
