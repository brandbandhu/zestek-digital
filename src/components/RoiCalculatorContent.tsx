import { useEffect, useState, type FormEvent } from "react";
import roiBreadcrumbImage from "../../assets/breadcrub/roi.png";
import {
  buildRoiSummary,
  businessTypeOptions,
  currentMachineOptions,
  getBusinessDefaults,
  paperSizeOptions,
  paperTypeOptions,
  usageTypeOptions,
  type BusinessType,
  type CurrentMachineType,
  type PaperSize,
  type PaperType,
  type UsageType,
} from "@/lib/roiCalculator";

type StatusMessage = {
  type: "success" | "error";
  text: string;
};

const formatInr = (value: number) =>
  `INR ${new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(value))}`;

const formatInrCompact = (value: number) =>
  `INR ${new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)}`;

const formatPercent = (value: number) => `${value.toFixed(1)}%`;

const parseOptionalNumber = (value: string) => {
  if (!value.trim()) return undefined;

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
};

const findLabel = (options: ReadonlyArray<{ id: string; label: string }>, value: string) =>
  options.find((option) => option.id === value)?.label ?? value;

const formatPaperSize = (paperSize: PaperSize) => {
  if (paperSize === "a3_plus") return "A3+";
  return paperSize.toUpperCase();
};

const RoiCalculatorContent = () => {
  const defaultProfile = getBusinessDefaults("small_office");

  const [decisionMaker, setDecisionMaker] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessType, setBusinessType] = useState<BusinessType>("small_office");
  const [paperSize, setPaperSize] = useState<PaperSize>(defaultProfile.paperSize);
  const [paperType, setPaperType] = useState<PaperType>(defaultProfile.paperType);
  const [usageType, setUsageType] = useState<UsageType>(defaultProfile.usageType);
  const [currentMachine, setCurrentMachine] = useState<CurrentMachineType>(defaultProfile.currentMachine);
  const [usesRcMachine, setUsesRcMachine] = useState(defaultProfile.usesRcMachine);
  const [monoPages, setMonoPages] = useState(defaultProfile.monoPages);
  const [colorPages, setColorPages] = useState(defaultProfile.colorPages);
  const [currentMonoCost, setCurrentMonoCost] = useState("");
  const [currentColorCost, setCurrentColorCost] = useState("");
  const [monoSellingPrice, setMonoSellingPrice] = useState(defaultProfile.monoSellingPrice?.toString() ?? "2");
  const [colorSellingPrice, setColorSellingPrice] = useState(defaultProfile.colorSellingPrice?.toString() ?? "8");
  const [pocFileName, setPocFileName] = useState("");
  const [formMessage, setFormMessage] = useState<StatusMessage | null>(null);
  const [pocMessage, setPocMessage] = useState<StatusMessage | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);

  useEffect(() => {
    const defaults = getBusinessDefaults(businessType);
    setPaperSize(defaults.paperSize);
    setPaperType(defaults.paperType);
    setUsageType(defaults.usageType);
    setCurrentMachine(defaults.currentMachine);
    setUsesRcMachine(defaults.usesRcMachine);
    setMonoPages(defaults.monoPages);
    setColorPages(defaults.colorPages);
    setCurrentMonoCost("");
    setCurrentColorCost("");
    setMonoSellingPrice(defaults.monoSellingPrice?.toString() ?? "2");
    setColorSellingPrice(defaults.colorSellingPrice?.toString() ?? "8");
    setFormMessage(null);
    setPocMessage(null);
  }, [businessType]);

  const summary = buildRoiSummary({
    businessType,
    monoPages,
    colorPages,
    paperSize,
    paperType,
    usageType,
    currentMachine,
    usesRcMachine,
    currentMonoCost: parseOptionalNumber(currentMonoCost),
    currentColorCost: parseOptionalNumber(currentColorCost),
    monoSellingPrice: parseOptionalNumber(monoSellingPrice),
    colorSellingPrice: parseOptionalNumber(colorSellingPrice),
  });

  const totalPages = monoPages + colorPages;
  const roi3Year =
    summary.recommendation.capex > 0
      ? ((summary.yearlySavings * 3 - summary.recommendation.capex) / summary.recommendation.capex) * 100
      : 0;

  const breakdownRows = [
    {
      label: "Mono cost per page",
      current: formatInrCompact(summary.currentMonoCpp),
      projected: formatInrCompact(summary.suggestedMonoCpp),
      impact: formatInrCompact(Math.abs(summary.currentMonoCpp - summary.suggestedMonoCpp)),
    },
    {
      label: "Color cost per page",
      current: formatInrCompact(summary.currentColorCpp),
      projected: formatInrCompact(summary.suggestedColorCpp),
      impact: formatInrCompact(Math.abs(summary.currentColorCpp - summary.suggestedColorCpp)),
    },
    {
      label: "Monthly print spend",
      current: formatInr(summary.currentMonthlySpend),
      projected: formatInr(summary.suggestedMonthlySpend),
      impact: formatInr(summary.monthlySavings),
    },
    {
      label: "Yearly print spend",
      current: formatInr(summary.currentMonthlySpend * 12),
      projected: formatInr(summary.suggestedMonthlySpend * 12),
      impact: formatInr(summary.yearlySavings),
    },
    businessType === "print_shop"
      ? {
          label: "Monthly print profit",
          current: formatInr(summary.currentMonthlyProfit),
          projected: formatInr(summary.suggestedMonthlyProfit),
          impact: formatInr(summary.suggestedMonthlyProfit - summary.currentMonthlyProfit),
        }
      : {
          label: "Workflow stability gain",
          current: "0%",
          projected: formatPercent(summary.efficiencyGainPercent),
          impact: formatPercent(summary.efficiencyGainPercent),
        },
  ];

  const assumptionCards = [
    {
      label: "Current CPP (Mono / Color)",
      value: `${formatInrCompact(summary.currentMonoCpp)} / ${formatInrCompact(summary.currentColorCpp)}`,
    },
    {
      label: "Suggested CPP (Mono / Color)",
      value: `${formatInrCompact(summary.suggestedMonoCpp)} / ${formatInrCompact(summary.suggestedColorCpp)}`,
    },
    {
      label: "Paper Setup",
      value: `${formatPaperSize(paperSize)} | ${findLabel(paperTypeOptions, paperType)}`,
    },
    {
      label: "Current Machine",
      value: `${findLabel(currentMachineOptions, currentMachine)}${usesRcMachine ? " | RC workflow" : ""}`,
    },
    {
      label: "Recommended Model",
      value: summary.recommendation.name,
    },
    {
      label: "ROI Horizon",
      value: "3 years view",
    },
  ];

  const impactCards =
    businessType === "print_shop"
      ? [
          { label: "Current Monthly Profit", value: formatInr(summary.currentMonthlyProfit) },
          { label: "Suggested Monthly Profit", value: formatInr(summary.suggestedMonthlyProfit) },
          { label: "Daily Profit Increase", value: formatInr(summary.dailyProfitIncrease) },
          { label: "RC Savings Signal", value: formatPercent(summary.savingsPercent) },
        ]
      : [
          { label: "Current Monthly Spend", value: formatInr(summary.currentMonthlySpend) },
          { label: "Suggested Monthly Spend", value: formatInr(summary.suggestedMonthlySpend) },
          { label: "Average Suggested CPP", value: formatInrCompact(summary.averageSuggestedCpp) },
          { label: "Efficiency Gain", value: formatPercent(summary.efficiencyGainPercent) },
        ];

  const businessLabel = businessTypeOptions.find((option) => option.id === businessType)?.label ?? businessType;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!companyName.trim()) {
      setFormMessage({
        type: "error",
        text: "Company name is required before generating the ROI snapshot.",
      });
      return;
    }

    setHasGenerated(true);
    setFormMessage({
      type: "success",
      text: "ROI snapshot updated below. PDF and CRM wiring can be connected next without changing this page structure.",
    });
  };

  const handlePocUpload = () => {
    if (!pocFileName) {
      setPocMessage({
        type: "error",
        text: "Choose a sample file first.",
      });
      return;
    }

    setPocMessage({
      type: "success",
      text: `POC upload block is ready in the page structure. Connect your upload endpoint next to submit "${pocFileName}".`,
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d223f] via-[#15395f] to-[#218257]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
        <div className="container relative grid gap-8 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-white/90">
              ROI Planning Tool
            </span>
            <h1 className="mt-5 text-4xl font-display font-bold leading-tight text-white md:text-5xl">
              Print ROI page structure, rebuilt cleanly inside React
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              This page keeps your React header, footer, routing, and styling system intact. Only the ROI content
              section is reshaped into the same kind of two-column calculator and results layout you shared.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">React component only</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">No full-site HTML rewrite</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">Ready for PDF/CRM next</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
              <img
                src={roiBreadcrumbImage}
                alt="ROI calculator visual"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.95fr)] lg:items-start">
            <form
              id="roi-form"
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[2rem] border border-border bg-card p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Generate ROI</p>
                <h2 className="mt-3 text-3xl font-display font-bold text-navy">Build a decision-ready ROI snapshot</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  This is only the ROI page implementation. Your global header, footer, and the rest of the React site
                  remain untouched.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="decision-maker" className="text-sm font-semibold text-navy">
                    Decision Maker Name
                  </label>
                  <input
                    id="decision-maker"
                    value={decisionMaker}
                    onChange={(event) => setDecisionMaker(event.target.value)}
                    placeholder="Example: Head of IT"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company-name" className="text-sm font-semibold text-navy">
                    Company Name
                  </label>
                  <input
                    id="company-name"
                    value={companyName}
                    onChange={(event) => setCompanyName(event.target.value)}
                    placeholder="Your company"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="business-type" className="text-sm font-semibold text-navy">
                    Industry / Business Type
                  </label>
                  <select
                    id="business-type"
                    value={businessType}
                    onChange={(event) => setBusinessType(event.target.value as BusinessType)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  >
                    {businessTypeOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="current-machine" className="text-sm font-semibold text-navy">
                    Current Machine
                  </label>
                  <select
                    id="current-machine"
                    value={currentMachine}
                    onChange={(event) => setCurrentMachine(event.target.value as CurrentMachineType)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  >
                    {currentMachineOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="mono-pages" className="text-sm font-semibold text-navy">
                    Monochrome Pages / Month
                  </label>
                  <input
                    id="mono-pages"
                    type="number"
                    min={0}
                    step={100}
                    value={monoPages}
                    onChange={(event) => setMonoPages(Math.max(Number(event.target.value) || 0, 0))}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="color-pages" className="text-sm font-semibold text-navy">
                    Color Pages / Month
                  </label>
                  <input
                    id="color-pages"
                    type="number"
                    min={0}
                    step={100}
                    value={colorPages}
                    onChange={(event) => setColorPages(Math.max(Number(event.target.value) || 0, 0))}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-highlight/20 bg-[#fff8eb] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-highlight">Model Snapshot</p>
                <h3 className="mt-3 text-2xl font-display font-bold text-navy">{summary.recommendation.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{summary.whyRecommended}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/70 bg-white px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-highlight">
                      CAPEX benchmark
                    </p>
                    <p className="mt-2 text-sm font-semibold text-navy">{formatInr(summary.recommendation.capex)}</p>
                  </div>
                  <div className="rounded-2xl border border-white/70 bg-white px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-highlight">
                      Model family
                    </p>
                    <p className="mt-2 text-sm font-semibold text-navy">{summary.recommendation.family}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label htmlFor="paper-size" className="text-sm font-semibold text-navy">
                    Paper Size
                  </label>
                  <select
                    id="paper-size"
                    value={paperSize}
                    onChange={(event) => setPaperSize(event.target.value as PaperSize)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  >
                    {paperSizeOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="paper-type" className="text-sm font-semibold text-navy">
                    Paper Type
                  </label>
                  <select
                    id="paper-type"
                    value={paperType}
                    onChange={(event) => setPaperType(event.target.value as PaperType)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  >
                    {paperTypeOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="usage-type" className="text-sm font-semibold text-navy">
                    Usage Type
                  </label>
                  <select
                    id="usage-type"
                    value={usageType}
                    onChange={(event) => setUsageType(event.target.value as UsageType)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  >
                    {usageTypeOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="current-mono-cost" className="text-sm font-semibold text-navy">
                    Current Mono Cost / Page
                  </label>
                  <input
                    id="current-mono-cost"
                    type="number"
                    min={0}
                    step={0.01}
                    value={currentMonoCost}
                    onChange={(event) => setCurrentMonoCost(event.target.value)}
                    placeholder="Optional"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="current-color-cost" className="text-sm font-semibold text-navy">
                    Current Color Cost / Page
                  </label>
                  <input
                    id="current-color-cost"
                    type="number"
                    min={0}
                    step={0.01}
                    value={currentColorCost}
                    onChange={(event) => setCurrentColorCost(event.target.value)}
                    placeholder="Optional"
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label htmlFor="mono-sell-price" className="text-sm font-semibold text-navy">
                    Mono Selling Price
                  </label>
                  <input
                    id="mono-sell-price"
                    type="number"
                    min={0}
                    step={0.1}
                    value={monoSellingPrice}
                    onChange={(event) => setMonoSellingPrice(event.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="color-sell-price" className="text-sm font-semibold text-navy">
                    Color Selling Price
                  </label>
                  <input
                    id="color-sell-price"
                    type="number"
                    min={0}
                    step={0.1}
                    value={colorSellingPrice}
                    onChange={(event) => setColorSellingPrice(event.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="rc-workflow" className="text-sm font-semibold text-navy">
                    RC Workflow
                  </label>
                  <select
                    id="rc-workflow"
                    value={usesRcMachine ? "yes" : "no"}
                    onChange={(event) => setUsesRcMachine(event.target.value === "yes")}
                    className="mt-2 h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm"
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#1d7f3f] px-8 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#176735]"
                >
                  Generate ROI Snapshot
                </button>
                <p className="text-sm text-muted-foreground">PDF export and CRM submission can plug into this layout next.</p>
              </div>

              {formMessage ? (
                <p
                  className={`text-sm ${
                    formMessage.type === "success" ? "text-[#1d7f3f]" : "text-red-600"
                  }`}
                >
                  {formMessage.text}
                </p>
              ) : null}
            </form>

            <section className="space-y-6 rounded-[2rem] border border-border bg-card p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:sticky lg:top-24">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-3xl font-display font-bold text-navy">Your ROI Snapshot</h2>
                  {hasGenerated ? (
                    <span className="rounded-full bg-[#e7f5eb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1d7f3f]">
                      Ready
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {hasGenerated
                    ? `Prepared for ${companyName}${decisionMaker ? ` | ${decisionMaker}` : ""}.`
                    : "Live preview of the ROI page structure using the values on the left."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <article className="rounded-[1.5rem] border border-highlight/20 bg-[#fff8eb] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Estimated Monthly Savings</p>
                  <p className="mt-3 text-2xl font-display font-bold text-navy">{formatInr(summary.monthlySavings)}</p>
                </article>
                <article className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Estimated Annual Savings</p>
                  <p className="mt-3 text-2xl font-display font-bold text-navy">{formatInr(summary.yearlySavings)}</p>
                </article>
                <article className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Payback Period</p>
                  <p className="mt-3 text-2xl font-display font-bold text-navy">
                    {summary.roiMonths ? `${summary.roiMonths.toFixed(1)} months` : "Not achievable"}
                  </p>
                </article>
                <article className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">ROI (3 Years)</p>
                  <p className="mt-3 text-2xl font-display font-bold text-navy">{formatPercent(roi3Year)}</p>
                </article>
              </div>

              <div className="rounded-[1.5rem] border border-highlight/20 bg-[#fff8eb] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Recommended Printer</p>
                <h3 className="mt-2 text-2xl font-display font-bold text-navy">{summary.recommendation.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{summary.recommendation.bestFor}</p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-navy">Cost of Recommended Printer</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">CapEx (Standard MRP)</p>
                    <p className="mt-3 text-xl font-display font-bold text-navy">{formatInr(summary.recommendation.capex)}</p>
                    <p className="mt-2 text-sm text-muted-foreground">One-time ownership benchmark for the recommended model.</p>
                  </article>
                  <article className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Projected Monthly Spend</p>
                    <p className="mt-3 text-xl font-display font-bold text-navy">{formatInr(summary.suggestedMonthlySpend)}</p>
                    <p className="mt-2 text-sm text-muted-foreground">This replaces the lease card while keeping the same layout rhythm.</p>
                  </article>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-navy">Configured ROI Assumptions</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {assumptionCards.map((card) => (
                    <article key={card.label} className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">{card.label}</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-navy">{card.value}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-navy">Volume &amp; Impact Snapshot</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {impactCards.map((card) => (
                    <article key={card.label} className="rounded-[1.5rem] border border-border bg-muted/40 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">{card.label}</p>
                      <p className="mt-3 text-lg font-display font-bold text-navy">{card.value}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-border">
                <div className="border-b border-border bg-muted/40 px-5 py-4">
                  <h3 className="text-xl font-display font-bold text-navy">Monthly ROI Breakdown</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Business type: {businessLabel} | Total monthly pages: {totalPages.toLocaleString("en-IN")}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead className="bg-background">
                      <tr className="border-b border-border text-left text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        <th className="px-5 py-4">Cost Component</th>
                        <th className="px-5 py-4">Current</th>
                        <th className="px-5 py-4">Projected</th>
                        <th className="px-5 py-4">Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      {breakdownRows.map((row) => (
                        <tr key={row.label} className="border-b border-border last:border-b-0">
                          <td className="px-5 py-4 font-medium text-navy">{row.label}</td>
                          <td className="px-5 py-4 text-muted-foreground">{row.current}</td>
                          <td className="px-5 py-4 text-muted-foreground">{row.projected}</td>
                          <td className="px-5 py-4 font-semibold text-[#1d7f3f]">{row.impact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-highlight/20 bg-[#fff8eb] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Interpretation</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-navy">Why this model:</span> {summary.whyRecommended}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-navy">{summary.industryHeading}:</span> {summary.industryBody}
                </p>
                {summary.rcSwitchMessage ? (
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    <span className="font-semibold text-navy">RC insight:</span> {summary.rcSwitchMessage}
                  </p>
                ) : null}
              </div>

              <div className="rounded-[1.5rem] border border-border bg-muted/40 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">Request Physical Demo (POC)</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      The structure is in place here too. Once you share the endpoint, this block can upload artwork and tag the lead without changing the layout again.
                    </p>
                  </div>
                  <div className="w-full max-w-sm">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.tiff,.tif,application/pdf,image/jpeg,image/tiff"
                      onChange={(event) => setPocFileName(event.target.files?.[0]?.name ?? "")}
                      className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handlePocUpload}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-navy/20 px-6 text-xs font-semibold uppercase tracking-[0.2em] text-navy transition hover:border-navy/40"
                  >
                    Upload File for POC
                  </button>
                  {pocFileName ? <span className="text-sm text-muted-foreground">{pocFileName}</span> : null}
                </div>

                {pocMessage ? (
                  <p className={`mt-4 text-sm ${pocMessage.type === "success" ? "text-[#1d7f3f]" : "text-red-600"}`}>
                    {pocMessage.text}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href="tel:+919920909700"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-navy px-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground"
                >
                  Get Best Price
                </a>
                <a
                  href="https://wa.me/919920909700?text=Hi%20Zestek%2C%20I%20need%20ROI%20guidance%20for%20a%20printer."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-navy/20 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy"
                >
                  WhatsApp Expert
                </a>
                <a
                  href="/contact#sales-inquiry"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-border px-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy"
                >
                  Book Demo
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoiCalculatorContent;
