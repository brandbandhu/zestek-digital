import banner2Image from "@/assets/banner/2.png";
import banner3Image from "@/assets/banner/3.png";
import banner4Image from "@/assets/banner/4.png";

export type InsightArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type InsightArticle = {
  slug: string;
  route: string;
  tag: string;
  title: string;
  cardDescription: string;
  cardImageUrl?: string;
  cardImageAlt?: string;
  heroTitle: string;
  heroDescription: string;
  imageUrl: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  readTime: string;
  publishedLabel: string;
  introParagraphs: string[];
  galleryImages: InsightGalleryImage[];
  sections: InsightArticleSection[];
  keyPointsTitle: string;
  keyPoints: string[];
  ctaTitle: string;
  ctaBody: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "say-goodbye-to-rc-machines",
    route: "/insights/say-goodbye-to-rc-machines",
    tag: "Case Study",
    title: "Say goodbye to RC machines",
    cardDescription: "Switch to efficient ink tank tech with lower print cost.",
    cardImageUrl: banner4Image,
    cardImageAlt: "Epson mono business printer banner for RC machine replacement",
    heroTitle: "Why many copy shops are moving away from older RC machine setups",
    heroDescription:
      "Running a print counter on ageing RC-style equipment usually means higher service attention, rising part dependency and weaker profit on everyday mono jobs. Newer Epson business inkjet platforms give shops a cleaner operating model.",
    imageUrl:
      "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=24gro-mono_BIJpro_STD_22b&clid=SAPDAM&id=612562fe8125dd5065499e86215dcc859eba7006&prclid=banner&prid=1200Wx1200H&vid=612562fe8125dd5065499e86215dcc859eba7006",
    imageAlt: "Epson mono business printer for RC machine replacement",
    metaTitle: "Say Goodbye to RC Machines | Zestek Print Insights",
    metaDescription:
      "Learn why print shops are replacing older RC machine workflows with lower-cost Epson business inkjet setups for better uptime and margins.",
    metaKeywords: [
      "RC machine replacement",
      "Epson alternative to RC machine",
      "copy shop printer upgrade",
      "low cost mono printing India",
    ],
    readTime: "4 min read",
    publishedLabel: "Print business guide",
    introParagraphs: [
      "Many small and mid-sized copy shops still rely on older RC-style machines because the workflow is familiar. The problem is that familiar equipment often becomes expensive equipment once service intervals tighten, spare availability becomes inconsistent and daily running cost keeps climbing.",
      "A better replacement plan is not only about buying a new machine. It is about choosing a platform that reduces print cost, improves reliability and makes daily walk-in demand easier to handle without repeated downtime.",
      "Shop owners who compare only the machine purchase price often miss the bigger picture. In daily operations, the real pressure comes from cost per print, service dependency, electricity use and the number of hours lost when the device cannot keep up with the counter load.",
    ],
    galleryImages: [
      {
        src: "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=24gro-mono_BIJpro_STD_22b&clid=SAPDAM&id=612562fe8125dd5065499e86215dcc859eba7006&prclid=banner&prid=1200Wx1200H&vid=612562fe8125dd5065499e86215dcc859eba7006",
        alt: "Epson AM-M5500 multifunction printer",
        caption: "A modern mono platform gives copy shops a lower-cost alternative for daily document volume.",
      },
      {
        src: "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256&clid=SAPDAM&id=818b370842b00667e251fd5a0e34aa07daf5c4a6&prclid=banner&prid=1200Wx1200H&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6",
        alt: "Epson EM-C8100 business printer",
        caption: "Upgrading equipment is about better output economics, not only replacing old hardware.",
      },
      {
        src: "https://images.unsplash.com/photo-1758630737361-ca7532fb5e7f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
        alt: "Print-focused workspace",
        caption: "Shops that review workflow, service needs and running cost make better replacement decisions.",
      },
    ],
    sections: [
      {
        heading: "Where older RC-style setups start affecting profitability",
        paragraphs: [
          "As machines age, shop owners usually see the same pattern: frequent service interruptions, more money spent on parts, and more uncertainty around job turnaround. Even when the machine is technically still usable, the hidden cost of downtime starts pulling margins down.",
          "This becomes more visible on volume-heavy mono jobs where customers expect quick delivery and competitive rates. If the machine needs extra attention every few weeks, the business loses time as well as trust.",
          "Another issue is pricing pressure. When the machine is costly to run, the business has to either charge more than nearby competitors or accept thinner profit on every job. Neither choice works well for long if the shop depends on repeat local customers.",
        ],
        bullets: [
          "Higher service frequency during peak business hours",
          "More dependence on technician availability and spare parts",
          "Higher operating cost on repeat mono jobs",
          "Reduced confidence for bulk customer commitments",
        ],
      },
      {
        heading: "What a modern Epson platform changes for the shop",
        paragraphs: [
          "Modern Epson business inkjet systems are designed to lower the day-to-day friction of document-heavy work. Shops benefit from cleaner operation, lower ongoing cost and better predictability for recurring jobs.",
          "For owners comparing total cost of operation rather than only purchase price, the big difference is usually visible in output economics, service stability and energy profile over time.",
          "A newer platform also makes the business easier to manage for operators. Simpler upkeep, more consistent output and a better fit for print, scan and copy work means the team spends less time adjusting to machine problems and more time serving customers.",
        ],
        bullets: [
          "Lower cost per print on regular mono output",
          "Less maintenance pressure and fewer service interruptions",
          "Stronger fit for print, scan and copy workflows",
          "Better long-term control over running cost",
        ],
      },
      {
        heading: "How to plan the replacement properly",
        paragraphs: [
          "Before replacing an RC machine, review the real monthly workload. Separate mono and colour demand, identify peak-hour job types and map how much work is urgent counter service versus scheduled output.",
          "Once that is clear, compare device options based on actual usage instead of brochure claims. The right machine is the one that supports your volume, service promise and margin target together.",
          "It also helps to look at the replacement as a business transition rather than a simple swap. Training, consumable planning, service coverage and a realistic demo of daily workloads can make the move much smoother and reduce risk in the first few months.",
        ],
        bullets: [
          "Audit monthly page volume before shortlisting models",
          "Compare running cost, not just machine price",
          "Check service coverage and consumable support",
          "Choose a device that matches your dominant job mix",
        ],
      },
    ],
    keyPointsTitle: "What to remember",
    keyPoints: [
      "Older RC-style machines often become margin problems before they become complete failures.",
      "Lower running cost matters more than headline hardware price for busy copy counters.",
      "A replacement decision should be based on volume, service support and output mix.",
      "Modern Epson mono platforms can offer a more stable path for daily print business.",
    ],
    ctaTitle: "Explore a better RC replacement path",
    ctaBody:
      "If your shop depends on heavy mono volume, we can help you compare machine fit, daily operating cost and the best next step for your counter setup.",
    primaryCtaLabel: "View Epson M5500",
    primaryCtaHref: "/epson-m5500",
    secondaryCtaLabel: "Talk to Zestek",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "upgrade-your-print-business",
    route: "/insights/upgrade-your-print-business",
    tag: "Industry",
    title: "Upgrade your print business",
    cardDescription: "Scale production with a device built for high-volume demand.",
    cardImageUrl: banner2Image,
    cardImageAlt: "Konica Minolta production print banner for business growth",
    heroTitle: "How the right print setup helps a shop move from daily orders to bigger jobs",
    heroDescription:
      "Growth in printing usually does not come from working harder with the same setup. It comes from choosing machines that improve output speed, expand application range and protect profit as demand increases.",
    imageUrl: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/AccurioPress-C14010S.jpg",
    imageAlt: "Konica Minolta production press for print business growth",
    metaTitle: "Upgrade Your Print Business | Zestek Print Insights",
    metaDescription:
      "See how print shops can upgrade profitably by choosing devices with better speed, lower running cost and stronger application flexibility.",
    metaKeywords: [
      "upgrade print business",
      "production printer for print shop",
      "commercial print growth",
      "high volume printing machine India",
    ],
    readTime: "5 min read",
    publishedLabel: "Industry update",
    introParagraphs: [
      "Many print businesses hit a ceiling when their machine lineup supports only basic daily jobs. Walk-in work continues, but higher-value requests such as brochures, presentation packs, long-size output or faster bulk delivery are either delayed or outsourced.",
      "A smart upgrade changes that. The right production or business print device gives you the ability to accept better-paying work, deliver faster and keep more of the job value inside your own shop.",
      "In many markets, customer demand is already there. Local brands, schools, offices and event teams all need short-run printing with quick delivery. The difference between a shop that grows and a shop that stays flat is often the equipment strategy behind the counter.",
    ],
    galleryImages: [
      {
        src: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/AccurioPress-C14010S.jpg",
        alt: "Konica Minolta AccurioPress production printer",
        caption: "Production-ready colour systems help shops take on higher-value commercial work with confidence.",
      },
      {
        src: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/C14000_C12000.jpg",
        alt: "Konica Minolta long-format production printer",
        caption: "A wider media range opens brochures, presentation sets and special-size print applications.",
      },
      {
        src: "https://mediaserver.goepson.com/adaptivemedia/rendition?assetDescr=WorkForce_Pro_EM-C8100_SPT_C11CL31201_384x256&clid=SAPDAM&id=818b370842b00667e251fd5a0e34aa07daf5c4a6&prclid=banner&prid=1200Wx1200H&vid=818b370842b00667e251fd5a0e34aa07daf5c4a6",
        alt: "Epson EM-C8100 A3 multifunction printer",
        caption: "Business A3 devices can be the right step when a shop wants growth with controlled running cost.",
      },
    ],
    sections: [
      {
        heading: "Growth usually starts with application range",
        paragraphs: [
          "If a printer can handle only a narrow job profile, your business ends up saying no to profitable work. This is where print shops start feeling stuck even though customer demand exists.",
          "An upgrade should expand what the business can offer, not simply replace the same capability with a newer body. The goal is to widen services while making operations easier to manage.",
          "A wider application range also improves customer retention. When clients can get flyers, presentation sets, branded sheets and special-size work from one vendor, they are more likely to come back with larger and more frequent orders.",
        ],
        bullets: [
          "A3 jobs and presentation material",
          "Short-run colour collateral for local businesses",
          "Long-size output and special-format print jobs",
          "Faster turnaround for repeat office and retail work",
        ],
      },
      {
        heading: "The real upgrade is in operating economics",
        paragraphs: [
          "A machine that looks impressive but raises print cost can quickly become a burden. The better route is choosing equipment that improves speed and range while still supporting healthier per-job margins.",
          "This is especially important for businesses that are moving from simple print work into more production-led jobs. Better economics allows you to quote competitively without undercutting yourself.",
          "The stronger setup is the one that gives room for growth without creating fear around every quote. When running cost is controlled, the business can accept more jobs confidently, test new applications and build volume in a sustainable way.",
        ],
        bullets: [
          "Lower running cost protects margin on repeat jobs",
          "Better uptime helps maintain delivery commitments",
          "Higher speed increases daily job capacity",
          "More predictable output makes staffing easier",
        ],
      },
      {
        heading: "What to evaluate before you invest",
        paragraphs: [
          "Look at what customers are already asking for, what you currently outsource and which jobs create the best repeat revenue. Those are the clearest signals for what type of machine the business actually needs.",
          "If you are scaling into higher production work, the best choice may be a Konica production system. If you are adding profitable A3 commercial work with controlled running cost, an Epson business model may be the better fit.",
          "It is also useful to review team workflow before finalizing the investment. Operator comfort, finishing needs, media handling and the space available in the shop will all influence how quickly the machine starts contributing to revenue after installation.",
        ],
        bullets: [
          "Current outsourced job categories",
          "Expected monthly print volume after upgrade",
          "Required paper sizes and media flexibility",
          "Service support and consumable continuity",
        ],
      },
    ],
    keyPointsTitle: "Growth checklist",
    keyPoints: [
      "Do not upgrade only for speed; upgrade for better application range and profitability together.",
      "Review outsourced work first because it reveals missed revenue.",
      "Compare device options against your real customer demand, not generic specifications.",
      "A profitable upgrade should increase capacity without creating unstable running costs.",
    ],
    ctaTitle: "Choose a print upgrade that adds revenue",
    ctaBody:
      "We can help you shortlist the right category for your print business, whether you need low-cost A3 growth or a full production-ready setup.",
    primaryCtaLabel: "Explore Konica Production",
    primaryCtaHref: "/konica-production",
    secondaryCtaLabel: "See Epson WorkForce options",
    secondaryCtaHref: "/epson-workforce",
  },
  {
    slug: "prevent-printer-downtime",
    route: "/insights/prevent-printer-downtime",
    tag: "Service",
    title: "Prevent printer downtime",
    cardDescription: "Proactive service schedules and original consumables.",
    cardImageUrl: "https://cdn.pixabay.com/photo/2020/08/22/11/40/technician-5508210_1280.jpg",
    cardImageAlt: "Technician checking printer hardware during preventive maintenance",
    heroTitle: "How proactive service and the right consumables reduce lost printing time",
    heroDescription:
      "Downtime usually feels sudden, but in most businesses it builds slowly through skipped maintenance, delayed parts replacement and inconsistent consumable choices. A stronger service routine keeps printing predictable.",
    imageUrl: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/bizhub_C250i.jpg",
    imageAlt: "Office printer with preventive service and maintenance support",
    metaTitle: "Prevent Printer Downtime | Zestek Print Insights",
    metaDescription:
      "Learn practical ways to reduce printer downtime with preventive service planning, original consumables and better fleet care.",
    metaKeywords: [
      "prevent printer downtime",
      "printer maintenance guide",
      "original consumables printer",
      "managed print support India",
    ],
    readTime: "4 min read",
    publishedLabel: "Service guide",
    introParagraphs: [
      "When a business says its printer failed without warning, the issue often started much earlier. Small service delays, inconsistent consumables and a lack of preventive checks create conditions where breakdowns become more likely and more disruptive.",
      "For offices and print shops, the best service strategy is not waiting for a failure. It is building a routine that catches risk early and keeps parts, supplies and technician attention aligned with actual usage.",
      "Busy teams usually postpone maintenance because the machine is still working. That feels efficient in the moment, but it can create a much bigger interruption later. A few preventive actions taken on time are usually far less expensive than one major breakdown during a peak day.",
    ],
    galleryImages: [
      {
        src: "https://cdn.pixabay.com/photo/2020/08/22/11/40/technician-5508210_1280.jpg",
        alt: "Technician inspecting printer hardware",
        caption: "Preventive checks help catch wear and recurring issues before they turn into downtime.",
      },
      {
        src: "https://bt.konicaminolta.in/wp-content/themes/BIN/assets/images/Product_finder/bizhub_C250i.jpg",
        alt: "Office multifunction printer",
        caption: "Stable office printing depends on both device fit and planned maintenance support.",
      },
      {
        src: "https://images.unsplash.com/photo-1758630737361-ca7532fb5e7f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
        alt: "Office environment using managed print setup",
        caption: "Managed support routines keep teams productive when printing is still part of daily operations.",
      },
    ],
    sections: [
      {
        heading: "Why downtime becomes expensive so quickly",
        paragraphs: [
          "A printer that stops working affects more than one job. In a shop environment, it delays customer delivery and reduces trust. In an office environment, it interrupts approvals, documentation and internal workflows.",
          "The longer a machine runs without structured attention, the more likely one small issue will create a larger stoppage that takes longer to fix.",
          "There is also a chain reaction inside the team. Staff start shifting work to backup devices, calling vendors in urgency and explaining delays to customers or management. The direct repair cost is only one part of the total business impact.",
        ],
        bullets: [
          "Missed deadlines for urgent customer or office jobs",
          "Unplanned technician visits and emergency service cost",
          "Stress on staff who need workarounds immediately",
          "Lost confidence in the print setup overall",
        ],
      },
      {
        heading: "The role of original consumables and scheduled checks",
        paragraphs: [
          "Original consumables are not only about print quality. They help keep the machine operating within the performance standards it was built for. Inconsistent or low-grade supplies can create avoidable wear, print issues and service noise.",
          "Scheduled checks help identify patterns before they become failures. This includes usage review, cleaning, replacement planning and checking whether the device still matches current workload.",
          "A simple service calendar can make a big difference. Logging volume, consumable usage and recurring print issues gives technicians and internal teams a clearer picture of what needs attention before performance drops sharply.",
        ],
        bullets: [
          "Use original ink, toner and approved parts wherever possible",
          "Track output volume so service planning is based on real usage",
          "Schedule checks before peak workload periods",
          "Replace weak consumables before they create a chain of faults",
        ],
      },
      {
        heading: "When managed support becomes the smarter choice",
        paragraphs: [
          "If a business depends on printing every day, reactive support usually costs more in the long run. Managed support gives better visibility into supply status, service timing and machine health across the fleet.",
          "That is especially helpful for teams that want predictable print availability without having to monitor every device manually.",
          "For growing offices and print counters, managed support also creates accountability. There is a clearer response structure, better planning for consumables and a more reliable path for keeping mission-critical printers available when teams need them most.",
        ],
        bullets: [
          "Better control over service response and planning",
          "Reduced risk of running out of critical supplies",
          "Clearer visibility into printer usage and weak points",
          "Stronger business continuity for teams that cannot afford stoppages",
        ],
      },
    ],
    keyPointsTitle: "Downtime prevention essentials",
    keyPoints: [
      "Most breakdowns build from small ignored issues rather than one sudden event.",
      "Original consumables support both output quality and machine stability.",
      "Preventive checks are cheaper than emergency recovery.",
      "Managed print support is useful when printing is business-critical every day.",
    ],
    ctaTitle: "Build a service routine that keeps printing stable",
    ctaBody:
      "If your team wants fewer interruptions, we can help plan service coverage, consumable support and a more predictable print environment.",
    primaryCtaLabel: "Explore Corporate Solutions",
    primaryCtaHref: "/corporate-solutions",
    secondaryCtaLabel: "Contact Support Team",
    secondaryCtaHref: "/contact",
  },
];

export const getInsightArticleBySlug = (slug: string) =>
  insightArticles.find((article) => article.slug === slug);
