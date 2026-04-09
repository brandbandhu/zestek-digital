import { useEffect, useMemo, useState } from "react";
import roiBreadcrumbImage from "../../assets/breadcrub/roi.png";

type BusinessType = "home" | "small_office" | "corporate_office" | "print_shop" | "education_legal";
type PaperSize = "A4" | "A3" | "A3+";
type PaperType = "plain" | "photo" | "art" | "sticker" | "texture" | "other";
type UsageType = "cost_focused" | "quality_focused" | "balanced";
type CurrentMachine = "rc_machine" | "laser_printer" | "ink_tank" | "no_machine";
type ModelKey =
  | "l3250"
  | "l6270"
  | "l4360"
  | "m2120"
  | "m3170"
  | "em_c8100"
  | "am_m5500"
  | "wf_m21000"
  | "wf_c21000"
  | "konica_c4065"
  | "konica_c4080";

type BusinessDefaultProfile = {
  monoPages: number;
  colorPages: number;
  paperSize: PaperSize;
  paperType: PaperType;
  usageType: UsageType;
  currentMachine: CurrentMachine;
  usesRcMachine: boolean;
  monoSellPrice: number;
  colorSellPrice: number;
  guidance: string;
};

type ModelProfile = {
  name: string;
  oneLineReason: string;
  bestFor: string;
  capex: number;
  monoCpp: number;
  colorCpp: number;
  includedMonoPrints: number;
  includedColorPrints: number;
};

const businessTypeOptions: Array<{ value: BusinessType; label: string }> = [
  { value: "home", label: "Home" },
  { value: "small_office", label: "Small Office" },
  { value: "corporate_office", label: "Corporate / Big Office" },
  { value: "print_shop", label: "Print Shop / Photocopy Centre" },
  { value: "education_legal", label: "Education / Legal" },
];

const paperTypeOptions: Array<{ value: PaperType; label: string }> = [
  { value: "plain", label: "Plain paper" },
  { value: "photo", label: "Photo paper" },
  { value: "art", label: "Art paper" },
  { value: "sticker", label: "Sticker" },
  { value: "texture", label: "Texture" },
  { value: "other", label: "Any other" },
];

const businessDefaults: Record<BusinessType, BusinessDefaultProfile> = {
  home: {
    monoPages: 600,
    colorPages: 400,
    paperSize: "A4",
    paperType: "plain",
    usageType: "balanced",
    currentMachine: "no_machine",
    usesRcMachine: false,
    monoSellPrice: 2,
    colorSellPrice: 8,
    guidance: "Home profile focuses on low-cost daily prints and occasional color work.",
  },
  small_office: {
    monoPages: 3500,
    colorPages: 1200,
    paperSize: "A4",
    paperType: "plain",
    usageType: "cost_focused",
    currentMachine: "ink_tank",
    usesRcMachine: false,
    monoSellPrice: 2,
    colorSellPrice: 8,
    guidance: "Small office profile optimizes running cost and stable output for team workflows.",
  },
  corporate_office: {
    monoPages: 35000,
    colorPages: 10000,
    paperSize: "A3",
    paperType: "plain",
    usageType: "balanced",
    currentMachine: "laser_printer",
    usesRcMachine: false,
    monoSellPrice: 2,
    colorSellPrice: 8,
    guidance: "Corporate profile prioritizes reliability, scale, and monthly cost visibility.",
  },
  print_shop: {
    monoPages: 120000,
    colorPages: 45000,
    paperSize: "A3+",
    paperType: "art",
    usageType: "quality_focused",
    currentMachine: "rc_machine",
    usesRcMachine: true,
    monoSellPrice: 2,
    colorSellPrice: 5,
    guidance: "Print-shop profile is tuned for margin, media flexibility, and production-grade uptime.",
  },
  education_legal: {
    monoPages: 45000,
    colorPages: 8000,
    paperSize: "A3",
    paperType: "plain",
    usageType: "cost_focused",
    currentMachine: "laser_printer",
    usesRcMachine: false,
    monoSellPrice: 2,
    colorSellPrice: 8,
    guidance: "Education and legal profile emphasizes stable bulk printing and predictable budgets.",
  },
};

const currentMachineBenchmarks: Record<CurrentMachine, { monoCpp: number; colorCpp: number }> = {
  rc_machine: { monoCpp: 1.8, colorCpp: 6.5 },
  laser_printer: { monoCpp: 1.2, colorCpp: 7.0 },
  ink_tank: { monoCpp: 0.8, colorCpp: 2.4 },
  no_machine: { monoCpp: 2.0, colorCpp: 8.0 },
};

const paperTypeMultipliers: Record<PaperType, number> = {
  plain: 1,
  photo: 1.35,
  art: 1.25,
  sticker: 1.3,
  texture: 1.2,
  other: 1.4,
};

const modelProfiles: Record<ModelKey, ModelProfile> = {
  l3250: {
    name: "Epson EcoTank L3250",
    oneLineReason: "Low-volume color printing with very low running cost.",
    bestFor: "Home users and very small offices printing basic A4 documents.",
    capex: 18000,
    monoCpp: 0.6,
    colorCpp: 1,
    includedMonoPrints: 6000,
    includedColorPrints: 7500,
  },
  l6270: {
    name: "Epson EcoTank L6270",
    oneLineReason: "Balanced speed and output quality for mixed office/home usage.",
    bestFor: "Small offices needing A4 duplex with frequent color documents.",
    capex: 28000,
    monoCpp: 0.55,
    colorCpp: 0.95,
    includedMonoPrints: 6000,
    includedColorPrints: 7500,
  },
  l4360: {
    name: "Epson EcoTank L4360",
    oneLineReason: "Affordable everyday color output with dependable refill economics.",
    bestFor: "Small teams needing consistent A4 color output without high CAPEX.",
    capex: 26000,
    monoCpp: 0.58,
    colorCpp: 1.05,
    includedMonoPrints: 6000,
    includedColorPrints: 7500,
  },
  m2120: {
    name: "Epson EcoTank M2120",
    oneLineReason: "Entry mono cost control for low monthly volumes.",
    bestFor: "Mono-heavy home and micro-office users with low print volume.",
    capex: 16000,
    monoCpp: 0.45,
    colorCpp: 0,
    includedMonoPrints: 5000,
    includedColorPrints: 0,
  },
  m3170: {
    name: "Epson EcoTank M3170",
    oneLineReason: "Higher mono throughput than entry models with efficient running cost.",
    bestFor: "Small offices that mostly print mono and need better monthly capacity.",
    capex: 24000,
    monoCpp: 0.42,
    colorCpp: 0,
    includedMonoPrints: 11000,
    includedColorPrints: 0,
  },
  em_c8100: {
    name: "Epson WorkForce Pro EM-C8100",
    oneLineReason: "Strong mid-to-high volume A3 color output for managed office workflows.",
    bestFor: "Departments with mixed mono/color workloads and regular A3 output.",
    capex: 160000,
    monoCpp: 0.7,
    colorCpp: 2.2,
    includedMonoPrints: 60000,
    includedColorPrints: 40000,
  },
  am_m5500: {
    name: "Epson WorkForce Enterprise AM-M5500",
    oneLineReason: "Efficient mono engine built for predictable high-volume document printing.",
    bestFor: "Medium-to-high volume mono offices prioritizing cost reduction.",
    capex: 350000,
    monoCpp: 0.4,
    colorCpp: 0,
    includedMonoPrints: 200000,
    includedColorPrints: 0,
  },
  wf_m21000: {
    name: "Epson WorkForce Enterprise WF-M21000",
    oneLineReason: "Enterprise mono productivity for large-volume print environments.",
    bestFor: "Central print rooms and high-volume mono workflows.",
    capex: 950000,
    monoCpp: 0.35,
    colorCpp: 0,
    includedMonoPrints: 250000,
    includedColorPrints: 0,
  },
  wf_c21000: {
    name: "Epson WorkForce Enterprise WF-C21000",
    oneLineReason: "Enterprise color throughput for heavy monthly demand.",
    bestFor: "High-volume offices needing both speed and color output at scale.",
    capex: 1100000,
    monoCpp: 0.55,
    colorCpp: 1.95,
    includedMonoPrints: 120000,
    includedColorPrints: 80000,
  },
  konica_c4065: {
    name: "Konica Minolta AccurioPress C4065",
    oneLineReason: "Production-class digital press for premium print shop workloads.",
    bestFor: "Print shops with frequent short-runs, color jobs, and media variety.",
    capex: 950000,
    monoCpp: 0.65,
    colorCpp: 2.8,
    includedMonoPrints: 0,
    includedColorPrints: 0,
  },
  konica_c4080: {
    name: "Konica Minolta AccurioPress C4080",
    oneLineReason: "Higher production performance for color-intensive commercial jobs.",
    bestFor: "Premium print shops requiring robust quality and heavy production.",
    capex: 1150000,
    monoCpp: 0.6,
    colorCpp: 2.6,
    includedMonoPrints: 0,
    includedColorPrints: 0,
  },
};

const formatInr = (value: number) => {
  if (!Number.isFinite(value)) return "INR 0";
  return `INR ${Math.round(value).toLocaleString("en-IN")}`;
};

const formatInrSigned = (value: number) => `${value >= 0 ? "+" : "-"} ${formatInr(Math.abs(value))}`;

const parseOptionalNumber = (value: string) => {
  if (value.trim().length === 0) return null;
  const parsed = Number(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
};

const RoiCalculatorContent = () => {
  const [businessType, setBusinessType] = useState<BusinessType>("small_office");
  const [paperSize, setPaperSize] = useState<PaperSize>(businessDefaults.small_office.paperSize);
  const [paperType, setPaperType] = useState<PaperType>(businessDefaults.small_office.paperType);
  const [usageType, setUsageType] = useState<UsageType>(businessDefaults.small_office.usageType);
  const [monoPages, setMonoPages] = useState(businessDefaults.small_office.monoPages);
  const [colorPages, setColorPages] = useState(businessDefaults.small_office.colorPages);
  const [currentMachine, setCurrentMachine] = useState<CurrentMachine>(businessDefaults.small_office.currentMachine);
  const [usesRcMachine, setUsesRcMachine] = useState(businessDefaults.small_office.usesRcMachine);
  const [currentMonoCost, setCurrentMonoCost] = useState("");
  const [currentColorCost, setCurrentColorCost] = useState("");
  const [monoSellPrice, setMonoSellPrice] = useState(businessDefaults.small_office.monoSellPrice);
  const [colorSellPrice, setColorSellPrice] = useState(businessDefaults.small_office.colorSellPrice);

  useEffect(() => {
    const defaults = businessDefaults[businessType];
    setPaperSize(defaults.paperSize);
    setPaperType(defaults.paperType);
    setUsageType(defaults.usageType);
    setMonoPages(defaults.monoPages);
    setColorPages(defaults.colorPages);
    setCurrentMachine(defaults.currentMachine);
    setUsesRcMachine(defaults.usesRcMachine);
    setMonoSellPrice(defaults.monoSellPrice);
    setColorSellPrice(defaults.colorSellPrice);
    setCurrentMonoCost("");
    setCurrentColorCost("");
  }, [businessType]);

  const recommendation = useMemo(() => {
    const totalPages = monoPages + colorPages;
    const colorShare = totalPages > 0 ? colorPages / totalPages : 0;

    let primaryKey: ModelKey = "l3250";
    let alternateKeys: ModelKey[] = ["l4360", "l6270"];
    let why = "Entry profile for low monthly print volume.";

    if (businessType === "print_shop") {
      if (usageType === "quality_focused" || colorPages >= 50000 || paperType !== "plain") {
        primaryKey = "konica_c4080";
        alternateKeys = ["konica_c4065", "wf_c21000"];
        why = "High-color production and media flexibility need a production-class platform.";
      } else if (monoPages >= 100000 || colorPages >= 25000) {
        primaryKey = "konica_c4065";
        alternateKeys = ["wf_c21000", "em_c8100"];
        why = "Volume profile matches commercial print jobs with strong monthly throughput.";
      } else if (colorPages > 0) {
        primaryKey = "em_c8100";
        alternateKeys = ["l6270", "wf_c21000"];
        why = "Balanced commercial workload that still needs strong color output.";
      } else {
        primaryKey = "am_m5500";
        alternateKeys = ["wf_m21000", "m3170"];
        why = "Mono-heavy print load with clear focus on cost per page.";
      }
    } else if (monoPages >= 150000 || colorPages >= 60000 || (totalPages >= 160000 && colorShare >= 0.2)) {
      if (colorPages >= 30000) {
        primaryKey = "wf_c21000";
        alternateKeys = ["konica_c4065", "em_c8100"];
        why = "High-volume color demand requires enterprise-grade output capacity.";
      } else {
        primaryKey = "wf_m21000";
        alternateKeys = ["am_m5500", "wf_c21000"];
        why = "High-volume mono usage aligns with enterprise monochrome optimization.";
      }
    } else if (businessType === "corporate_office" || businessType === "education_legal" || totalPages >= 20000) {
      if (colorPages > 0 || usageType === "quality_focused" || paperSize !== "A4") {
        primaryKey = "em_c8100";
        alternateKeys = ["am_m5500", "wf_c21000"];
        why = "Medium-to-high office volume with color and larger paper handling needs.";
      } else {
        primaryKey = "am_m5500";
        alternateKeys = ["wf_m21000", "m3170"];
        why = "Mono-centric office profile where stable high-volume cost control matters.";
      }
    } else if (colorPages > 0) {
      if (usageType === "cost_focused") {
        primaryKey = "l3250";
        alternateKeys = ["l4360", "l6270"];
        why = "Cost-focused color profile with low monthly page count.";
      } else if (usageType === "quality_focused" || paperType === "photo" || paperType === "art" || paperSize !== "A4") {
        primaryKey = "l6270";
        alternateKeys = ["l4360", "l3250"];
        why = "Quality-first setup needing better consistency on mixed document types.";
      } else {
        primaryKey = "l4360";
        alternateKeys = ["l3250", "l6270"];
        why = "Balanced low-volume color usage with practical running economics.";
      }
    } else if (monoPages >= 4000) {
      primaryKey = "m3170";
      alternateKeys = ["m2120", "am_m5500"];
      why = "Mono-only usage with moderate load and low running cost priority.";
    } else {
      primaryKey = "m2120";
      alternateKeys = ["m3170", "l3250"];
      why = "Very low mono demand where simple ownership cost matters most.";
    }

    return {
      primary: modelProfiles[primaryKey],
      alternates: alternateKeys.map((modelKey) => modelProfiles[modelKey]),
      why,
    };
  }, [businessType, monoPages, colorPages, paperSize, paperType, usageType]);

  const metrics = useMemo(() => {
    const totalPages = Math.max(monoPages, 0) + Math.max(colorPages, 0);
    const benchmark = currentMachineBenchmarks[currentMachine];
    const customMonoCost = parseOptionalNumber(currentMonoCost);
    const customColorCost = parseOptionalNumber(currentColorCost);
    const rcDriven = usesRcMachine || currentMachine === "rc_machine";

    let currentMonoCpp = customMonoCost ?? benchmark.monoCpp;
    let currentColorCpp = customColorCost ?? benchmark.colorCpp;

    if (rcDriven) {
      currentMonoCpp = Math.max(currentMonoCpp, 1.4);
      currentColorCpp = Math.max(currentColorCpp, 5.5);
    }

    const usageMultiplier = usageType === "cost_focused" ? 0.94 : usageType === "quality_focused" ? 1.08 : 1;
    const paperMultiplier = paperTypeMultipliers[paperType];

    const suggestedMonoCpp = recommendation.primary.monoCpp * usageMultiplier * paperMultiplier;
    const suggestedColorCpp = recommendation.primary.colorCpp * usageMultiplier * paperMultiplier;

    const currentMonthlySpend = monoPages * currentMonoCpp + colorPages * currentColorCpp;
    const suggestedMonthlySpend = monoPages * suggestedMonoCpp + colorPages * suggestedColorCpp;

    const monthlySavings = currentMonthlySpend - suggestedMonthlySpend;
    const yearlySavings = monthlySavings * 12;
    const roiMonths = monthlySavings > 0 ? recommendation.primary.capex / monthlySavings : null;

    const includedMonoValue = Math.min(monoPages, recommendation.primary.includedMonoPrints) * suggestedMonoCpp;
    const includedColorValue = Math.min(colorPages, recommendation.primary.includedColorPrints) * suggestedColorCpp;
    const includedPrintValue = includedMonoValue + includedColorValue;

    const currentBlendedCpp = totalPages > 0 ? currentMonthlySpend / totalPages : 0;
    const suggestedBlendedCpp = totalPages > 0 ? suggestedMonthlySpend / totalPages : 0;
    const monthlyCostReductionPercent = currentMonthlySpend > 0 ? (monthlySavings / currentMonthlySpend) * 100 : 0;

    const currentMonthlyProfit =
      monoPages * Math.max(monoSellPrice - currentMonoCpp, 0) + colorPages * Math.max(colorSellPrice - currentColorCpp, 0);
    const suggestedMonthlyProfit =
      monoPages * Math.max(monoSellPrice - suggestedMonoCpp, 0) + colorPages * Math.max(colorSellPrice - suggestedColorCpp, 0);
    const monthlyProfitIncrease = suggestedMonthlyProfit - currentMonthlyProfit;
    const dailyProfitIncrease = monthlyProfitIncrease / 30;

    return {
      totalPages,
      currentMonoCpp,
      currentColorCpp,
      suggestedMonoCpp,
      suggestedColorCpp,
      currentMonthlySpend,
      suggestedMonthlySpend,
      monthlySavings,
      yearlySavings,
      roiMonths,
      includedPrintValue,
      currentBlendedCpp,
      suggestedBlendedCpp,
      monthlyCostReductionPercent,
      monthlyProfitIncrease,
      dailyProfitIncrease,
    };
  }, [
    monoPages,
    colorPages,
    currentMachine,
    currentMonoCost,
    currentColorCost,
    usesRcMachine,
    usageType,
    paperType,
    recommendation.primary,
    monoSellPrice,
    colorSellPrice,
  ]);

  const industryInsight = useMemo(() => {
    if (businessType === "print_shop") {
      return {
        title: "Print Shop View",
        points: [
          `Cost per print: ${formatInr(metrics.currentBlendedCpp)} current vs ${formatInr(metrics.suggestedBlendedCpp)} suggested`,
          `Estimated daily profit increase: ${formatInr(metrics.dailyProfitIncrease)}`,
          `Estimated monthly profit uplift: ${formatInr(metrics.monthlyProfitIncrease)}`,
        ],
      };
    }

    if (businessType === "education_legal") {
      return {
        title: "Education / Legal View",
        points: [
          `Bulk printing savings (monthly): ${formatInr(metrics.monthlySavings)}`,
          `Bulk printing savings (yearly): ${formatInr(metrics.yearlySavings)}`,
          "Stability focus: optimized for long, repetitive, document-heavy cycles.",
        ],
      };
    }

    return {
      title: "Office View",
      points: [
        `Monthly cost reduction: ${metrics.monthlyCostReductionPercent.toFixed(1)}%`,
        `Monthly spend visibility: ${formatInr(metrics.currentMonthlySpend)} current vs ${formatInr(metrics.suggestedMonthlySpend)}`,
        "Efficiency focus: fewer interruptions and stronger output consistency for teams.",
      ],
    };
  }, [businessType, metrics]);

  const isRcSavingsCalloutVisible = businessType === "print_shop" || usesRcMachine || currentMachine === "rc_machine";

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <section
        className="relative overflow-hidden -mt-16 pb-6"
        style={{
          backgroundImage: `url('${roiBreadcrumbImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative container mx-auto flex min-h-[320px] items-center px-4 pb-12 pt-20 md:min-h-[390px] md:pb-14 md:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
              ROI Decision Tool
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground">
              Find the right printer, monthly spend, and savings in one flow
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/80 md:text-base">
              This calculator is built to answer three business questions fast: which machine is best, how much you will spend
              per month, and how much you can save versus your current setup.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <form onSubmit={handleFormSubmit} className="rounded-2xl border border-border bg-card p-4 sm:p-6 space-y-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">ROI Calculator</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Final flow: select business type, enter monthly volume, choose paper setup, then calculate.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Step 1</p>
              <label className="mt-2 block text-sm font-semibold text-navy">Select Your Business Type</label>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {businessTypeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setBusinessType(option.value)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                      businessType === option.value
                        ? "border-navy bg-navy text-primary-foreground"
                        : "border-border bg-background text-navy hover:border-highlight"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted-foreground">{businessDefaults[businessType].guidance}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Step 2</p>
                <label className="mt-2 block text-sm font-semibold text-navy">B/W pages per month</label>
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={monoPages}
                  onChange={(event) => setMonoPages(Math.max(Number(event.target.value) || 0, 0))}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Step 2</p>
                <label className="mt-2 block text-sm font-semibold text-navy">Color pages per month</label>
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={colorPages}
                  onChange={(event) => setColorPages(Math.max(Number(event.target.value) || 0, 0))}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Step 3</p>
                <label className="mt-2 block text-sm font-semibold text-navy">Paper size</label>
                <select
                  value={paperSize}
                  onChange={(event) => setPaperSize(event.target.value as PaperSize)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="A4">A4</option>
                  <option value="A3">A3</option>
                  <option value="A3+">A3+</option>
                </select>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Step 3</p>
                <label className="mt-2 block text-sm font-semibold text-navy">Paper type</label>
                <select
                  value={paperType}
                  onChange={(event) => setPaperType(event.target.value as PaperType)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  {paperTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Step 3</p>
                <label className="mt-2 block text-sm font-semibold text-navy">Usage type</label>
                <select
                  value={usageType}
                  onChange={(event) => setUsageType(event.target.value as UsageType)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="cost_focused">Cost Focused</option>
                  <option value="quality_focused">Quality Focused</option>
                  <option value="balanced">Balanced</option>
                </select>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/40 p-4 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Optional but powerful inputs</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-navy">Current machine type</label>
                  <select
                    value={currentMachine}
                    onChange={(event) => setCurrentMachine(event.target.value as CurrentMachine)}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="rc_machine">RC Machine</option>
                    <option value="laser_printer">Laser Printer</option>
                    <option value="ink_tank">Ink Tank</option>
                    <option value="no_machine">No machine</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy">Do you use RC machine?</label>
                  <select
                    value={usesRcMachine ? "yes" : "no"}
                    onChange={(event) => setUsesRcMachine(event.target.value === "yes")}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-navy">Current B/W cost per page (optional)</label>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    value={currentMonoCost}
                    onChange={(event) => setCurrentMonoCost(event.target.value)}
                    placeholder="Example: 1.20"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-navy">Current color cost per page (optional)</label>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    value={currentColorCost}
                    onChange={(event) => setCurrentColorCost(event.target.value)}
                    placeholder="Example: 7.50"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
              {businessType === "print_shop" ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-navy">Mono selling price per print (INR)</label>
                    <input
                      type="number"
                      min={0}
                      step={0.1}
                      value={monoSellPrice}
                      onChange={(event) => setMonoSellPrice(Math.max(Number(event.target.value) || 0, 0))}
                      className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-navy">Color selling price per print (INR)</label>
                    <input
                      type="number"
                      min={0}
                      step={0.1}
                      value={colorSellPrice}
                      onChange={(event) => setColorSellPrice(Math.max(Number(event.target.value) || 0, 0))}
                      className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              ) : null}
            </div>

          </form>

          <section className="rounded-2xl border border-border bg-card p-4 sm:p-6 space-y-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">ROI Output</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Best machine recommendation, monthly spend clarity, and savings versus current setup.
              </p>
            </div>

            <>
                <div className="rounded-2xl border border-highlight/20 bg-[#fff8eb] p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Best fit for your business</p>
                  <h3 className="mt-2 text-xl font-display font-bold text-navy">{recommendation.primary.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{recommendation.why}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-navy">Why recommended:</span> {recommendation.primary.oneLineReason}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-navy">Best for:</span> {recommendation.primary.bestFor}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Alternate options: {recommendation.alternates.map((option) => option.name).join(", ")}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Cost per page comparison</p>
                  <div className="mt-3 overflow-x-auto">
                    <table className="min-w-[360px] w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b text-left text-xs uppercase tracking-widest text-muted-foreground">
                          <th className="py-2">Type</th>
                          <th className="py-2">Current</th>
                          <th className="py-2">Suggested</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 text-muted-foreground">B/W</td>
                          <td className="py-2 text-muted-foreground">{formatInr(metrics.currentMonoCpp)}</td>
                          <td className="py-2 text-muted-foreground">{formatInr(metrics.suggestedMonoCpp)}</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-muted-foreground">Color</td>
                          <td className="py-2 text-muted-foreground">{formatInr(metrics.currentColorCpp)}</td>
                          <td className="py-2 text-muted-foreground">{formatInr(metrics.suggestedColorCpp)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-muted/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Monthly spend</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Current setup: <span className="font-semibold text-navy">{formatInr(metrics.currentMonthlySpend)}</span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Suggested setup:{" "}
                      <span className="font-semibold text-navy">{formatInr(metrics.suggestedMonthlySpend)}</span>
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-muted/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-highlight">Savings summary</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monthly savings: <span className="font-semibold text-navy">{formatInrSigned(metrics.monthlySavings)}</span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Yearly savings: <span className="font-semibold text-navy">{formatInrSigned(metrics.yearlySavings)}</span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      ROI period:{" "}
                      <span className="font-semibold text-navy">
                        {metrics.roiMonths ? `${metrics.roiMonths.toFixed(1)} months` : "Payback not available"}
                      </span>
                    </p>
                  </div>
                </div>

                {recommendation.primary.includedMonoPrints > 0 || recommendation.primary.includedColorPrints > 0 ? (
                  <div className="rounded-2xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
                    Included print value (first cycle estimate):{" "}
                    <span className="font-semibold text-navy">{formatInr(metrics.includedPrintValue)}</span>
                  </div>
                ) : null}

                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-highlight">{industryInsight.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {industryInsight.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                {isRcSavingsCalloutVisible ? (
                  <div className="rounded-2xl border border-highlight/30 bg-[#fff8eb] p-4 text-sm text-navy">
                    Most print shops using RC machines save 30-50% after switching.
                  </div>
                ) : null}

                <div className="grid gap-3 sm:grid-cols-3">
                  <a
                    href="tel:+919920909700"
                    className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground"
                  >
                    Get Best Price
                  </a>
                  <a
                    href="https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20ROI%20guidance%20for%20a%20printer."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-navy/30 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy"
                  >
                    WhatsApp Expert
                  </a>
                  <a
                    href="/contact#sales-inquiry"
                    className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-navy"
                  >
                    Book Demo
                  </a>
                </div>
            </>
          </section>
        </div>
      </section>
    </>
  );
};

export default RoiCalculatorContent;
