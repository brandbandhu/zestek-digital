import type { LucideIcon } from "lucide-react";
import { Droplets, Factory, Printer, ScanSearch } from "lucide-react";

export type CommercialProduct = {
  slug: string;
  name: string;
  brand: "Konica Minolta" | "Epson";
  segment: "Photocopy Centre & Commercial Segment";
  outputMode: "Color" | "Monochrome";
  heroTag: string;
  summary: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  status: "complete" | "pending";
  icon: LucideIcon;
};

export const commercialProducts: CommercialProduct[] = [
  {
    slug: "konica-c4065",
    name: "AccurioPrint C4065",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "Compact production press",
    summary:
      "A compact, affordable colour production press built for lower-volume commercial work with professional image quality and flexible media handling.",
    highlights: ["66 ppm color / 81 ppm mono", "3600 x 2400 dpi equivalent", "62–360 gsm media support", "Auto-duplex up to 864 mm"],
    specs: [
      { label: "Speed", value: "Up to 66 ppm (A4 color) / 81 ppm (A4 mono)" },
      { label: "Resolution", value: "Equivalent 3600 x 2400 dpi" },
      { label: "Media Weight", value: "62–360 gsm (auto-duplex 360 gsm)" },
      { label: "Long Sheet", value: "Up to 864 mm (auto duplex)" },
      { label: "Peak Volume", value: "7,02,000 (monthly duty cycle)" },
    ],
    applications: ["Photocopy centers", "Short-run color jobs", "Marketing collateral", "Booklets and brochures"],
    status: "complete",
    icon: Factory,
  },
  {
    slug: "konica-c4080",
    name: "AccurioPress C4080",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "All-in-one print powerhouse",
    summary:
      "High-speed colour press designed to streamline workflows with strong media flexibility, long-sheet printing, and consistent image quality.",
    highlights: ["81 ppm color / 81 ppm mono", "3600 x 2400 dpi equivalent", "62–360 gsm media support", "Long sheet up to 1300 mm (simplex)"],
    specs: [
      { label: "Speed", value: "Up to 81 ppm (A4 color & mono)" },
      { label: "Resolution", value: "Equivalent 3600 x 2400 dpi" },
      { label: "Media Weight", value: "62–360 gsm (auto-duplex 360 gsm)" },
      { label: "Long Sheet", value: "1300 mm simplex / 864 mm auto duplex" },
      { label: "Peak Volume", value: "8,64,000 (monthly duty cycle)" },
    ],
    applications: ["Commercial print jobs", "Long-sheet banners", "Marketing collateral", "Envelope printing"],
    status: "complete",
    icon: Factory,
  },
  {
    slug: "konica-c7090",
    name: "AccurioPress C7090",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "Enhanced agility for production",
    summary:
      "Digital color press built for high productivity and advanced media handling, designed to deliver consistent quality on demanding runs.",
    highlights: ["90 ppm color (A4)", "2,400 x 3,600 dpi equiv.", "Media up to 400 gsm", "Long sheet up to 1300 mm"],
    specs: [
      { label: "Speed", value: "Up to 90 ppm (A4)" },
      { label: "Resolution", value: "2,400 x 3,600 dpi equivalent" },
      { label: "Media Weight", value: "Up to 400 gsm (simplex/duplex)" },
      { label: "Long Sheet", value: "Up to 1300 mm (duplex up to 900 mm)" },
    ],
    applications: ["Commercial print rooms", "High-volume brochures", "Premium marketing work", "Variable data print"],
    status: "complete",
    icon: Factory,
  },
  {
    slug: "konica-c7100",
    name: "AccurioPress C7100",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "High-speed production workhorse",
    summary:
      "A high-speed digital color press delivering faster output with media flexibility and automated quality tools for demanding production schedules.",
    highlights: ["100 ppm color (A4)", "2,400 x 3,600 dpi equiv.", "Media up to 400 gsm", "Long sheet up to 1300 mm"],
    specs: [
      { label: "Speed", value: "Up to 100 ppm (A4)" },
      { label: "Resolution", value: "2,400 x 3,600 dpi equivalent" },
      { label: "Media Weight", value: "Up to 400 gsm (simplex/duplex)" },
      { label: "Long Sheet", value: "Up to 1300 mm (duplex up to 900 mm)" },
    ],
    applications: ["High-volume commercial printing", "Short-run packaging", "Marketing collateral", "Full-bleed imagery"],
    status: "complete",
    icon: Factory,
  },
  {
    slug: "konica-c12000",
    name: "AccurioPress C12000",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "High productivity color press",
    summary:
      "Production press designed for efficient high-volume color output with strong media flexibility and automated print technologies.",
    highlights: ["Up to 120 ppm (A4)", "3,600 x 2,400 dpi equiv.", "Up to 450 gsm media", "Long sheet up to 1300 mm"],
    specs: [
      { label: "Speed", value: "Up to 120 ppm (A4)" },
      { label: "Resolution", value: "3,600 x 2,400 dpi equivalent" },
      { label: "Media Weight", value: "52–450 gsm (simplex/duplex)" },
      { label: "Long Sheet", value: "Up to 1300 mm simplex / 900 mm duplex" },
    ],
    applications: ["Commercial print production", "Booklets and catalogues", "Marketing collateral", "High coverage jobs"],
    status: "complete",
    icon: Factory,
  },
  {
    slug: "konica-c14000s",
    name: "AccurioPress C14000S",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "High-volume production press",
    summary:
      "High-speed press for print professionals who need strong productivity, premium image quality, and expanded media processing.",
    highlights: ["Up to 140 ppm (A4)", "3,600 x 2,400 dpi equiv.", "Up to 450 gsm media", "Long sheet up to 1300 mm"],
    specs: [
      { label: "Speed", value: "Up to 140 ppm (A4)" },
      { label: "Resolution", value: "3,600 x 2,400 dpi equivalent" },
      { label: "Media Weight", value: "52–450 gsm (simplex/duplex)" },
      { label: "Long Sheet", value: "Up to 1300 mm simplex / 900 mm duplex" },
      { label: "Duty Cycle", value: "Up to 2.5 million images (monthly)" },
    ],
    applications: ["Commercial production", "Premium marketing work", "High-volume catalogs", "Inline finishing workflows"],
    status: "complete",
    icon: Factory,
  },
  {
    slug: "konica-2100",
    name: "AccurioPrint 2100",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Monochrome",
    heroTag: "Monochrome production press",
    summary:
      "Mono digital press built for reliable high-speed output, large paper capacity, and advanced production workflows in compact spaces.",
    highlights: ["100 ppm (A4)", "1,200 x 1,200 dpi", "40–300 gsm (350 gsm optional)", "Up to 9,000 sheet input"],
    specs: [
      { label: "Speed", value: "100 ppm (A4), 56 ppm (A3), 53 ppm (SRA3)" },
      { label: "Resolution", value: "1,200 x 1,200 dpi" },
      { label: "Media Weight", value: "40–300 gsm (350 gsm optional)" },
      { label: "Paper Capacity", value: "Up to 9,000 sheets" },
    ],
    applications: ["High-volume mono production", "Books and manuals", "Transactional print", "Photocopy centers"],
    status: "complete",
    icon: ScanSearch,
  },
  {
    slug: "konica-7120",
    name: "AccurioPress 7120",
    brand: "Konica Minolta",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Monochrome",
    heroTag: "High-speed mono production",
    summary:
      "Monochrome production press focused on reliability, automation, and high-volume performance for demanding print operations.",
    highlights: ["Up to 120 ppm (A4)", "1,200 x 1,200 dpi", "40–350 gsm media", "Duty cycle up to 2.5 million"],
    specs: [
      { label: "Speed", value: "Up to 120 ppm (A4), 66 ppm (SRA3)" },
      { label: "Resolution", value: "1,200 x 1,200 dpi" },
      { label: "Media Weight", value: "40–350 gsm" },
      { label: "Duty Cycle", value: "Up to 2.5 million prints" },
    ],
    applications: ["High-volume mono printing", "Booklets and manuals", "Transaction-heavy jobs", "Copy centers"],
    status: "complete",
    icon: ScanSearch,
  },
  {
    slug: "epson-l15180",
    name: "Epson L15180",
    brand: "Epson",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "Epson color printer",
    summary:
      "Color printer option for commercial and photocopy use cases. Detailed information will be added soon.",
    highlights: ["Details will be shared soon"],
    specs: [{ label: "Status", value: "Details will be shared soon." }],
    applications: ["Photocopy centers", "Commercial color printing"],
    status: "pending",
    icon: Printer,
  },
  {
    slug: "epson-c8100",
    name: "Epson C8100",
    brand: "Epson",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "Epson color printer",
    summary:
      "Color printer option for commercial and photocopy use cases. Detailed information will be added soon.",
    highlights: ["Details will be shared soon"],
    specs: [{ label: "Status", value: "Details will be shared soon." }],
    applications: ["Photocopy centers", "Commercial color printing"],
    status: "pending",
    icon: Printer,
  },
  {
    slug: "epson-c21000",
    name: "Epson C21000",
    brand: "Epson",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Color",
    heroTag: "Epson color printer",
    summary:
      "Color printer option for commercial and photocopy use cases. Detailed information will be added soon.",
    highlights: ["Details will be shared soon"],
    specs: [{ label: "Status", value: "Details will be shared soon." }],
    applications: ["Photocopy centers", "Commercial color printing"],
    status: "pending",
    icon: Printer,
  },
  {
    slug: "epson-m15180",
    name: "Epson M15180",
    brand: "Epson",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Monochrome",
    heroTag: "Epson monochrome printer",
    summary:
      "Monochrome printer option for commercial and photocopy use cases. Detailed information will be added soon.",
    highlights: ["Details will be shared soon"],
    specs: [{ label: "Status", value: "Details will be shared soon." }],
    applications: ["Photocopy centers", "Commercial monochrome printing"],
    status: "pending",
    icon: ScanSearch,
  },
  {
    slug: "epson-m5500",
    name: "Epson M5500",
    brand: "Epson",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Monochrome",
    heroTag: "Epson monochrome printer",
    summary:
      "Monochrome printer option for commercial and photocopy use cases. Detailed information will be added soon.",
    highlights: ["Details will be shared soon"],
    specs: [{ label: "Status", value: "Details will be shared soon." }],
    applications: ["Photocopy centers", "Commercial monochrome printing"],
    status: "pending",
    icon: ScanSearch,
  },
  {
    slug: "epson-m21000",
    name: "Epson M21000",
    brand: "Epson",
    segment: "Photocopy Centre & Commercial Segment",
    outputMode: "Monochrome",
    heroTag: "Epson monochrome printer",
    summary:
      "Monochrome printer option for commercial and photocopy use cases. Detailed information will be added soon.",
    highlights: ["Details will be shared soon"],
    specs: [{ label: "Status", value: "Details will be shared soon." }],
    applications: ["Photocopy centers", "Commercial monochrome printing"],
    status: "pending",
    icon: ScanSearch,
  },
];

export const getCommercialProduct = (slug: string) =>
  commercialProducts.find((product) => product.slug === slug);

export const commercialProductGroups = {
  konicaColor: commercialProducts.filter(
    (product) => product.brand === "Konica Minolta" && product.outputMode === "Color",
  ),
  konicaMono: commercialProducts.filter(
    (product) => product.brand === "Konica Minolta" && product.outputMode === "Monochrome",
  ),
  epsonColor: commercialProducts.filter((product) => product.brand === "Epson" && product.outputMode === "Color"),
  epsonMono: commercialProducts.filter((product) => product.brand === "Epson" && product.outputMode === "Monochrome"),
};
