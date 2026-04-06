import { useMemo, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { isGoogleSheetsConfigured, submitLeadToGoogleSheets } from "@/lib/googleSheets";

const RoiCalculatorContent = () => {
  const [decisionMakerName, setDecisionMakerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("commercial");
  const [monoPages, setMonoPages] = useState(60000);
  const [colorPages, setColorPages] = useState(10000);
  const [fleetAge, setFleetAge] = useState("mid");
  const [downtimeCriticality, setDowntimeCriticality] = useState("medium");
  const [sellingMode, setSellingMode] = useState("b2c");
  const [message, setMessage] = useState("");
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const isCommercial = industry === "commercial";

  const recommendation = useMemo(() => {
    const total = monoPages + colorPages;
    const colorShare = total > 0 ? colorPages / total : 0;

    if (industry === "commercial") {
      if (total >= 80000) {
        return {
          model: "Konica Minolta C4065",
          range: "CAPEX benchmark: INR 9.5 Lakh - INR 11.5 Lakh",
          reason: "High monthly volume with commercial throughput requirements.",
        };
      }
      if (total >= 40000) {
        return {
          model: "Epson AM-C4000",
          range: "CAPEX benchmark: INR 7.5 Lakh - INR 9.5 Lakh",
          reason: "Balanced speed and duty cycle for mid-volume commercial print.",
        };
      }
      return {
        model: "Epson AM-C400",
        range: "CAPEX benchmark: INR 3.5 Lakh - INR 5.5 Lakh",
        reason: "Entry commercial requirement with moderate monthly load.",
      };
    }

    if (industry === "education") {
      if (total >= 50000) {
        return {
          model: "Epson WorkForce Enterprise WF-C20750",
          range: "CAPEX benchmark: INR 8.5 Lakh - INR 10.5 Lakh",
          reason: "High-volume shared campus printing with consistent uptime needs.",
        };
      }
      return {
        model: "Epson WorkForce Pro EM-C8100",
        range: "CAPEX benchmark: INR 5.5 Lakh - INR 7.5 Lakh",
        reason: "Departmental printing with strong mono + color mix.",
      };
    }

    if (colorShare > 0.25) {
      return {
        model: "Epson WorkForce Pro WF-C5890",
        range: "CAPEX benchmark: INR 2.1 Lakh - INR 2.8 Lakh",
        reason: "Color-heavy office usage with moderate monthly volume.",
      };
    }
    return {
      model: "Epson WorkForce Pro WF-M5899",
      range: "CAPEX benchmark: INR 1.6 Lakh - INR 2.2 Lakh",
      reason: "Mono-focused corporate printing with predictable volumes.",
    };
  }, [industry, monoPages, colorPages]);

  const roiMetrics = useMemo(() => {
    const totalPages = monoPages + colorPages;
    const colorShare = totalPages > 0 ? colorPages / totalPages : 0;

    const currentCppMono = industry === "commercial" ? 0.76 : 0.9;
    const currentCppColor = industry === "commercial" ? 4.35 : 4.9;
    const projectedCppMono = industry === "commercial" ? 0.49 : 0.6;
    const projectedCppColor = industry === "commercial" ? 2.81 : 3.2;

    const currentConsumables = monoPages * currentCppMono + colorPages * currentCppColor;
    const projectedConsumables = monoPages * projectedCppMono + colorPages * projectedCppColor;

    const maintenance = industry === "commercial" ? 17907 : 12000;
    const energy = industry === "commercial" ? 8412 : 3200;
    const downtimeHours = downtimeCriticality === "high" ? 14 : downtimeCriticality === "medium" ? 11 : 6;
    const downtimeRate = industry === "commercial" ? 5000 : 2500;
    const downtimeCost = downtimeHours * downtimeRate;

    const emi = totalPages >= 80000 ? 35778 : totalPages >= 40000 ? 32000 : 18000;
    const capex = totalPages >= 80000 ? 1120000 : totalPages >= 40000 ? 920000 : 520000;

    const currentCost = currentConsumables + maintenance + energy + downtimeCost;
    const projectedCost = projectedConsumables + maintenance * 0.82 + energy * 0.82 + downtimeCost * 0.65 + emi;
    const monthlySavings = Math.max(currentCost - projectedCost, 0);
    const annualSavings = monthlySavings * 12;
    const paybackMonths = monthlySavings > 0 ? capex / monthlySavings : 0;
    const roi3Years = capex > 0 ? ((annualSavings * 3 - capex) / capex) * 100 : 0;

    const sellPrice = isCommercial ? (sellingMode === "b2c" ? 22.5 : 12) : 0;
    const revenue = isCommercial ? totalPages * sellPrice : 0;
    const costPerPrint = isCommercial ? 7.35 : 0;
    const pnlConsumables = isCommercial ? totalPages * costPerPrint : projectedConsumables;
    const netCashflow = isCommercial ? revenue - pnlConsumables - emi : monthlySavings;
    const grossProfitPerPrint = isCommercial ? (revenue - pnlConsumables) / Math.max(totalPages, 1) : 0;

    return {
      totalPages,
      colorShare,
      currentCppMono,
      currentCppColor,
      maintenance,
      energy,
      downtimeHours,
      downtimeRate,
      downtimeCost,
      emi,
      capex,
      currentCost,
      projectedCost,
      monthlySavings,
      annualSavings,
      paybackMonths,
      roi3Years,
      projectedConsumables,
      pnlConsumables,
      currentConsumables,
      costPerPrint,
      netCashflow,
      revenue,
      grossProfitPerPrint,
      sellPrice,
    };
  }, [monoPages, colorPages, industry, downtimeCriticality, sellingMode, isCommercial]);

  const formatInr = (value: number, compact = false) => {
    if (!Number.isFinite(value)) return "INR 0";
    return `INR ${value.toLocaleString("en-IN", {
      maximumFractionDigits: compact ? 0 : 0,
    })}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const industryLabel =
      industry === "commercial"
        ? "Commercial Print & Packaging"
        : industry === "education"
          ? "Education & Universities"
          : "Corporates & MSME";
    const fleetAgeLabel = fleetAge === "new" ? "0 - 2 years" : fleetAge === "mid" ? "3 - 5 years" : "5+ years";
    const downtimeLabel = downtimeCriticality === "high" ? "High" : downtimeCriticality === "medium" ? "Medium" : "Low";
    const sellingModeLabel =
      sellingMode === "b2c" ? "End Customer (B2C Retail)" : "Reseller (B2B Trade)";

    const reportInputs = [
      `Decision maker: ${decisionMakerName || "Not provided"}`,
      `Company name: ${companyName || "Not provided"}`,
      `Industry: ${industryLabel}`,
      `Monthly mono pages: ${monoPages.toLocaleString("en-IN")}`,
      `Monthly color pages: ${colorPages.toLocaleString("en-IN")}`,
      `Current printer fleet age: ${fleetAgeLabel}`,
      `Downtime criticality: ${downtimeLabel}`,
      `Selling mode: ${isCommercial ? sellingModeLabel : "Not applicable"}`,
    ];

    const summaryMetrics = [
      `Recommended model: ${recommendation.model}`,
      `CAPEX benchmark: ${recommendation.range.replace("CAPEX benchmark: ", "")}`,
      `Projected monthly net cash flow: ${formatInr(roiMetrics.netCashflow)}`,
      `Projected monthly gross revenue: ${formatInr(roiMetrics.revenue)}`,
      `Monthly EMI commitment: ${formatInr(roiMetrics.emi)}`,
      `Current monthly operating cost: ${formatInr(roiMetrics.currentCost)}`,
      `Projected monthly operating cost: ${formatInr(roiMetrics.projectedCost)}`,
      `Estimated monthly savings: ${formatInr(roiMetrics.monthlySavings)}`,
      `Estimated annual savings: ${formatInr(roiMetrics.annualSavings)}`,
      `Three-year ROI: ${roiMetrics.roi3Years.toFixed(1)}%`,
      `Payback period: ${
        roiMetrics.paybackMonths > 0 ? `${roiMetrics.paybackMonths.toFixed(1)} months` : "Payback not available"
      }`,
      `Gross profit per print: ${
        isCommercial ? `INR ${roiMetrics.grossProfitPerPrint.toFixed(2)}` : "Not applicable"
      }`,
    ];

    const costComparison = [
      `Print output cost: ${formatInr(roiMetrics.currentConsumables)} current vs ${formatInr(
        roiMetrics.projectedConsumables,
      )} projected`,
      `Maintenance: ${formatInr(roiMetrics.maintenance)} current vs ${formatInr(roiMetrics.maintenance * 0.82)} projected`,
      `Energy: ${formatInr(roiMetrics.energy)} current vs ${formatInr(roiMetrics.energy * 0.82)} projected`,
      `Downtime impact: ${formatInr(roiMetrics.downtimeCost)} current vs ${formatInr(roiMetrics.downtimeCost * 0.65)} projected`,
      `Total monthly cost: ${formatInr(roiMetrics.currentCost)} current vs ${formatInr(roiMetrics.projectedCost)} projected`,
    ];

    let sheetsSyncMessage = "";

    try {
      setIsGeneratingReport(true);
      setMessage("Generating ROI report PDF...");

      try {
        await submitLeadToGoogleSheets({
          formId: "roi-calculator-form",
          formName: "ROI Calculator Form",
          pagePath: typeof window !== "undefined" ? window.location.pathname : "",
          fields: {
            decision_maker_name: decisionMakerName || "Not provided",
            company_name: companyName || "Not provided",
            industry: industryLabel,
            monthly_mono_pages: monoPages,
            monthly_color_pages: colorPages,
            current_printer_fleet_age: fleetAgeLabel,
            downtime_criticality: downtimeLabel,
            commercial_selling_mode: isCommercial ? sellingModeLabel : "Not applicable",
          },
          context: {
            recommended_model: recommendation.model,
            capex_benchmark: recommendation.range.replace("CAPEX benchmark: ", ""),
            projected_monthly_net_cash_flow: formatInr(roiMetrics.netCashflow),
            projected_monthly_gross_revenue: formatInr(roiMetrics.revenue),
            monthly_emi_commitment: formatInr(roiMetrics.emi),
            estimated_monthly_savings: formatInr(roiMetrics.monthlySavings),
            estimated_annual_savings: formatInr(roiMetrics.annualSavings),
            three_year_roi: `${roiMetrics.roi3Years.toFixed(1)}%`,
          },
        });

        sheetsSyncMessage = " Lead synced to Google Sheets.";
      } catch (syncError) {
        console.error("Unable to sync ROI form to Google Sheets", syncError);
        sheetsSyncMessage = isGoogleSheetsConfigured
          ? " PDF downloaded, but Google Sheets sync could not be confirmed."
          : " PDF downloaded, but Google Sheets is not configured yet.";
      }

      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const marginX = 48;
      const topMargin = 52;
      const bottomMargin = 52;
      const contentWidth = pageWidth - marginX * 2;
      let currentY = topMargin;

      const ensureSpace = (requiredHeight: number) => {
        if (currentY + requiredHeight > pageHeight - bottomMargin) {
          doc.addPage();
          currentY = topMargin;
        }
      };

      const addWrappedText = (
        text: string,
        options?: { fontSize?: number; color?: [number, number, number]; indent?: number; lineGap?: number },
      ) => {
        const fontSize = options?.fontSize ?? 11;
        const indent = options?.indent ?? 0;
        const lineGap = options?.lineGap ?? 6;
        const lines = doc.splitTextToSize(text, contentWidth - indent);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(fontSize);
        if (options?.color) {
          doc.setTextColor(...options.color);
        } else {
          doc.setTextColor(72, 85, 99);
        }

        const blockHeight = lines.length * fontSize * 1.25 + lineGap;
        ensureSpace(blockHeight);
        doc.text(lines, marginX + indent, currentY);
        currentY += blockHeight;
      };

      const addSectionHeading = (title: string) => {
        ensureSpace(28);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(15);
        doc.setTextColor(15, 32, 66);
        doc.text(title, marginX, currentY);
        currentY += 18;
      };

      const addBulletList = (items: string[]) => {
        items.forEach((item) => {
          addWrappedText(`- ${item}`, { fontSize: 11, indent: 4, lineGap: 5 });
        });
      };

      doc.setFillColor(15, 32, 66);
      doc.roundedRect(marginX, currentY, contentWidth, 78, 18, 18, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(255, 255, 255);
      doc.text("Zestek ROI Report", marginX + 18, currentY + 28);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`${recommendation.model} recommendation summary`, marginX + 18, currentY + 48);
      doc.text(`Generated on ${new Date().toLocaleString("en-IN")}`, marginX + 18, currentY + 66);
      currentY += 102;

      addSectionHeading("Customer profile");
      addBulletList(reportInputs);

      addSectionHeading("Recommendation");
      addWrappedText(recommendation.reason, { fontSize: 11 });
      addBulletList(summaryMetrics);

      addSectionHeading("Cost comparison");
      addBulletList(costComparison);

      addSectionHeading("Working assumptions");
      addBulletList([
        `Current CPP mono / color: INR ${roiMetrics.currentCppMono.toFixed(2)} / INR ${roiMetrics.currentCppColor.toFixed(2)}`,
        `Projected consumables spend: ${formatInr(roiMetrics.projectedConsumables)} per month`,
        `Consumables budget annualised: ${formatInr(roiMetrics.pnlConsumables * 12)}`,
        `Downtime benchmark: ${roiMetrics.downtimeHours.toFixed(1)} hours x ${formatInr(roiMetrics.downtimeRate)}`,
        `Break-even volume: ${
          roiMetrics.sellPrice > 0 ? Math.ceil(roiMetrics.emi / roiMetrics.sellPrice).toLocaleString("en-IN") : "-"
        } prints per month`,
        `FSMA plus paper cost per print: INR ${roiMetrics.costPerPrint.toFixed(2)}`,
      ]);

      addSectionHeading("Interpretation");
      addWrappedText(
        `Projected monthly net cash flow is ${formatInr(roiMetrics.netCashflow)}. ${
          roiMetrics.revenue > 0
            ? `This represents ${((roiMetrics.netCashflow / roiMetrics.revenue) * 100).toFixed(1)} percent margin on monthly revenue.`
            : "Revenue-based margin is not applicable for the current selection."
        }`,
      );
      addWrappedText(
        `The calculator recommends ${recommendation.model} because it best matches the selected industry, volume profile and color mix. Same-day service SLA applies in Mumbai, Boisar and Khopoli.`,
      );

      const safeCompany = (companyName || "zestek-roi-report").trim().replace(/[^a-z0-9]+/gi, "-").toLowerCase();
      const safeModel = recommendation.model.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
      doc.save(`${safeCompany}-${safeModel}-roi-report.pdf`);

      setMessage(`ROI report generated and PDF download has started.${sheetsSyncMessage}`);
      toast({
        title: "ROI report ready",
        description: `The PDF download has started.${sheetsSyncMessage}`,
      });
    } catch (error) {
      console.error("Unable to generate ROI report PDF", error);
      setMessage("Unable to generate the ROI PDF right now. Please try again.");
      toast({
        variant: "destructive",
        title: "ROI report failed",
        description: "We could not generate the ROI report right now. Please try again.",
      });
    } finally {
      setIsGeneratingReport(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden -mt-16 bg-[#12203c] pb-6">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,32,60,0.96)_0%,rgba(34,55,95,0.92)_42%,rgba(87,119,170,0.55)_72%,rgba(226,239,255,0.82)_100%)]" />
        <img
          src="https://zestek.vercel.app/assets/images/products/epson-am-c4000.png"
          alt="Business printer for ROI calculator"
          className="pointer-events-none absolute bottom-0 right-4 hidden h-[84%] w-auto object-contain mix-blend-multiply opacity-95 drop-shadow-[0_18px_40px_rgba(15,32,66,0.25)] md:block lg:right-10"
          loading="eager"
        />
        <div className="relative container mx-auto flex min-h-[320px] items-center px-4 pb-12 pt-20 md:min-h-[390px] md:pb-14 md:pt-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
            Market-Benchmarked Self-Serve Tool
          </span>
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-primary-foreground">
              Low-Effort Print ROI Calculator
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/80 md:text-base">
              You only enter a few details. Market cost parameters are fixed from current Mumbai and MMR B2B
              benchmarks, so buyers can quickly get a decision-ready ROI report and PDF.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-[1fr_1fr] gap-8">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-card border border-border p-6 space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">Generate ROI in 60 Seconds</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Minimal buyer effort. Benchmarked costs and CAPEX assumptions are auto-applied. Printer is
                auto-recommended from your profile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy">Decision Maker Name</label>
                <input
                  value={decisionMakerName}
                  onChange={(e) => setDecisionMakerName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Example: Head of IT"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Company Name</label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-navy">Industry</label>
              <select
                className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="commercial">Commercial Print & Packaging</option>
                <option value="education">Education & Universities</option>
                <option value="corporate">Corporates & MSME</option>
              </select>
            </div>

            {isCommercial && (
              <div>
                <label className="text-xs font-semibold text-navy">Commercial Selling Mode</label>
                <select
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  value={sellingMode}
                  onChange={(e) => setSellingMode(e.target.value)}
                >
                  <option value="b2c">End Customer (B2C Retail)</option>
                  <option value="b2b">Reseller (B2B Trade)</option>
                </select>
                <p className="text-xs text-muted-foreground mt-2">
                  Used only for Commercial Print and Packaging P&amp;L projection.
                </p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy">Monochrome Pages / Month</label>
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={monoPages}
                  onChange={(e) => setMonoPages(Number(e.target.value))}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Color Pages / Month</label>
                <input
                  type="number"
                  min={0}
                  step={100}
                  value={colorPages}
                  onChange={(e) => setColorPages(Number(e.target.value))}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/60 p-4">
              <h3 className="font-display font-bold text-navy">Printer Recommendation Guide</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Based on sector, monthly volume, and color share, the calculator auto-selects a best-fit model before ROI
                is calculated.
              </p>
              <div className="mt-4 rounded-xl border border-border bg-white p-4">
                <span className="text-xs text-muted-foreground">Recommended Model</span>
                <strong className="block text-navy text-lg">{recommendation.model}</strong>
                <small className="text-muted-foreground">{recommendation.range}</small>
                <p className="mt-2 text-sm text-muted-foreground">{recommendation.reason}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-navy">Current Printer Fleet Age</label>
                <select
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  value={fleetAge}
                  onChange={(e) => setFleetAge(e.target.value)}
                >
                  <option value="new">0 - 2 years</option>
                  <option value="mid">3 - 5 years</option>
                  <option value="old">5+ years</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-navy">Downtime Criticality</label>
                <select
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                  value={downtimeCriticality}
                  onChange={(e) => setDowntimeCriticality(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="submit"
                disabled={isGeneratingReport}
                className="w-full rounded-full bg-navy py-3 text-xs font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isGeneratingReport ? "Generating ROI Report..." : "Generate ROI Report + Download PDF"}
              </button>
              <p className="text-xs text-muted-foreground">PDF download starts automatically when report is generated.</p>
              {message && <p className="text-xs text-muted-foreground">{message}</p>}
            </div>
          </form>

          <section className="rounded-2xl bg-card border border-border p-6 space-y-6 lg:sticky lg:top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-navy">Your ROI Snapshot</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Calculated from your inputs plus fixed market benchmark assumptions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Estimated Monthly Net Cash Flow", value: formatInr(roiMetrics.netCashflow) },
                { label: "Projected Monthly Gross Revenue", value: formatInr(roiMetrics.revenue) },
                { label: "Monthly EMI Commitment", value: formatInr(roiMetrics.emi) },
                {
                  label: "Gross Profit / Print (B2C)",
                  value: isCommercial ? `INR ${roiMetrics.grossProfitPerPrint.toFixed(2)} / print` : "-",
                },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-border bg-muted/60 p-4">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                  <strong className="block text-navy text-lg">{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border bg-muted/60 p-4 text-sm text-muted-foreground">
              Own this machine for just {formatInr(roiMetrics.emi)}/month. 100% Funding Available (Subject to GST).
            </div>
            <div className="rounded-xl border border-border bg-muted/60 p-4 text-sm text-muted-foreground">
              Includes 10,000 Free 12x18 Sheets! Estimated Retail Value: INR 2,25,000 (Effectively covers your first 7
              months of EMI).
            </div>

            <div>
              <h3 className="font-display font-bold text-navy">Cost of Recommended Printer</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-muted/60 p-4">
                  <span className="text-xs text-muted-foreground">CapEx (Standard MRP)</span>
                  <strong className="block text-navy text-lg">{formatInr(roiMetrics.capex)}</strong>
                  <small className="text-muted-foreground">One-time capital purchase benchmark</small>
                </div>
                <div className="rounded-2xl border border-border bg-muted/60 p-4">
                  <span className="text-xs text-muted-foreground">OpEx Lease Option</span>
                  <strong className="block text-navy text-lg">{formatInr(roiMetrics.emi)} / month</strong>
                  <small className="text-muted-foreground">
                    Or lease for {formatInr(roiMetrics.emi)}/month (36 months)
                  </small>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy">Fixed Market Assumptions Applied</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Current CPP (Mono / Color)",
                    value: `INR ${roiMetrics.currentCppMono.toFixed(2)} / INR ${roiMetrics.currentCppColor.toFixed(2)}`,
                  },
                  { label: "Maintenance Benchmark", value: `${formatInr(roiMetrics.maintenance)} / month` },
                  { label: "Energy Benchmark", value: `${formatInr(roiMetrics.energy)} / month` },
                  {
                    label: "Downtime Benchmark",
                    value: `${roiMetrics.downtimeHours.toFixed(1)} hrs x ${formatInr(roiMetrics.downtimeRate)}`,
                  },
                  { label: "Model CAPEX Benchmark (Reference)", value: formatInr(roiMetrics.capex) },
                  { label: "ROI Horizon", value: "3 years" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-muted/60 p-4">
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <strong className="block text-navy text-lg">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display font-bold text-navy">Estimated Ink / Toner Required</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Black Consumable Requirement", value: `${(monoPages / 42695).toFixed(2)} Black Toner / month` },
                  { label: "Color Consumable Requirement", value: `${(colorPages / 40000).toFixed(2)} CMY Toner Set / month` },
                  { label: "Estimated Consumables Budget (Monthly)", value: formatInr(roiMetrics.pnlConsumables) },
                  {
                    label: "Estimated Consumables Budget (Annual)",
                    value: formatInr(roiMetrics.pnlConsumables * 12),
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-border bg-muted/60 p-4">
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                    <strong className="block text-navy text-lg">{item.value}</strong>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Includes mono + color consumable planning for the recommended device profile.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="text-xs uppercase tracking-widest text-muted-foreground border-b">
                    <th className="py-2">Cost Component (Monthly)</th>
                    <th className="py-2">Current</th>
                    <th className="py-2">Projected</th>
                    <th className="py-2">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      label: "Print output cost",
                      current: roiMetrics.currentConsumables,
                      projected: roiMetrics.projectedConsumables,
                    },
                    {
                      label: "Maintenance",
                      current: roiMetrics.maintenance,
                      projected: roiMetrics.maintenance * 0.82,
                    },
                    {
                      label: "Energy",
                      current: roiMetrics.energy,
                      projected: roiMetrics.energy * 0.82,
                    },
                    {
                      label: "Downtime impact",
                      current: roiMetrics.downtimeCost,
                      projected: roiMetrics.downtimeCost * 0.65,
                    },
                  ].map((row) => (
                    <tr key={row.label} className="border-b">
                      <td className="py-3 text-muted-foreground">{row.label}</td>
                      <td className="py-3 text-muted-foreground">{formatInr(row.current)}</td>
                      <td className="py-3 text-muted-foreground">{formatInr(row.projected)}</td>
                      <td className="py-3 text-muted-foreground">
                        -{formatInr(Math.max(row.current - row.projected, 0))}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b">
                    <td className="py-3 text-muted-foreground">Total</td>
                    <td className="py-3 text-muted-foreground">{formatInr(roiMetrics.currentCost)}</td>
                    <td className="py-3 text-muted-foreground">{formatInr(roiMetrics.projectedCost)}</td>
                    <td className="py-3 text-muted-foreground">-{formatInr(roiMetrics.monthlySavings)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-border bg-muted/60 p-4 text-sm text-muted-foreground">
              <h3 className="font-display font-bold text-navy">Your Projected Monthly P&amp;L</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  {
                    label: "Selling model",
                    value: isCommercial ? (sellingMode === "b2c" ? "End Customer (B2C Retail)" : "Reseller (B2B Trade)") : "-",
                  },
                  {
                    label: "Monthly print volume",
                    value: roiMetrics.totalPages.toLocaleString("en-IN"),
                  },
                  {
                    label: "Sell price per print",
                    value: isCommercial ? `INR ${roiMetrics.sellPrice}` : "-",
                  },
                  {
                    label: "Total revenue",
                    value: isCommercial ? formatInr(roiMetrics.revenue) : "-",
                  },
                  {
                    label: "Consumables cost (FSMA + paper)",
                    value: formatInr(roiMetrics.pnlConsumables),
                  },
                  {
                    label: "Monthly EMI",
                    value: formatInr(roiMetrics.emi),
                  },
                  {
                    label: "Net take-home profit (cash flow)",
                    value: formatInr(roiMetrics.netCashflow),
                  },
                  {
                    label: "Gross profit per print (B2B / B2C)",
                    value: isCommercial ? `INR 5.15 / INR ${roiMetrics.grossProfitPerPrint.toFixed(2)}` : "-",
                  },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-border bg-white p-3">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-navy mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/60 p-4 text-sm text-muted-foreground">
              <p className="font-semibold text-navy">Interpretation</p>
              <p className="mt-2">
                Projected monthly net cash flow: {formatInr(roiMetrics.netCashflow)} (
                {roiMetrics.revenue > 0
                  ? `${((roiMetrics.netCashflow / roiMetrics.revenue) * 100).toFixed(1)}% margin on monthly revenue)`
                  : "0% margin on monthly revenue"}
                .
              </p>
              <p className="mt-2">
                Break-even volume at selected selling mode:{" "}
                {roiMetrics.sellPrice > 0
                  ? Math.ceil(roiMetrics.emi / roiMetrics.sellPrice).toLocaleString("en-IN")
                  : "-"}{" "}
                prints / month.
              </p>
              <p className="mt-2">Total cost per print (FSMA + paper): INR {roiMetrics.costPerPrint.toFixed(2)}</p>
              <p className="mt-2">
                Commercial P&amp;L mode is active for {recommendation.model}. Use selected pricing mode to validate
                monthly cash flow and production ramp-up. Same-day service SLA applies in Mumbai, Boisar, and Khopoli.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-muted/60 p-4">
              <h3 className="font-display font-bold text-navy">Request Physical Print Demo (POC)</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Upload your test artwork file. Accepted formats: PDF, JPG, TIFF. Max size: 50 MB. This will be tagged as
                &quot;POC Requested&quot; in CRM.
              </p>
              <div className="mt-4">
                <label className="text-xs font-semibold text-navy">Demo File Upload</label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.tiff,.tif,application/pdf,image/jpeg,image/tiff"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="mt-4">
                <button type="button" className="rounded-full border border-border px-5 py-2 text-xs font-semibold text-navy">
                  Upload File for POC
                </button>
                <p className="text-xs text-muted-foreground mt-2">
                  Generate ROI report first so this file maps to your report ID.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default RoiCalculatorContent;
