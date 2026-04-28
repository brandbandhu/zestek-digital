(function () {
  "use strict";

  var config = window.ZEST_CONFIG || {};
  var ROI_HORIZON_YEARS = 3;
  var COLOR_BLACK_EQUIVALENT_FACTOR = 0.35;
  var OPEX_LEASE_FACTOR = 1.15;
  var OPEX_LEASE_MONTHS = 36;
  var REPORT_EXPIRY_DAYS = 7;
  var MAX_POC_FILE_BYTES = 50 * 1024 * 1024;
  var ALLOWED_POC_EXTENSIONS = ["pdf", "jpg", "jpeg", "tif", "tiff"];

  var MODEL_PROFILES = {
    epson_m5500: {
      key: "epson_m5500",
      name: "Epson WorkForce M5500",
      monoCpp: 0.38,
      colorCpp: 3.8,
      maintenanceSavingPct: 0.22,
      energySavingPct: 0.32,
      downtimeReductionPct: 0.45,
      capexDefault: 650000,
      capexRange: "INR 4.5 Lakh - INR 7.5 Lakh",
      fitNote: "Best fit for high-volume monochrome corporate and education workflows.",
      consumables: {
        blackYieldPages: 100000,
        blackUnitCost: 21500,
        blackUnitLabel: "Black Ink Pack",
        colorSetYieldPages: 0,
        colorSetCost: 0,
        colorUnitLabel: "Color Ink Set",
        supportsColor: false
      }
    },
    epson_c8100: {
      key: "epson_c8100",
      name: "Epson C8100",
      monoCpp: 0.44,
      colorCpp: 2.95,
      maintenanceSavingPct: 0.2,
      energySavingPct: 0.28,
      downtimeReductionPct: 0.4,
      capexDefault: 950000,
      capexRange: "INR 7.5 Lakh - INR 10.5 Lakh",
      fitNote: "Best fit for enterprise departments with continuous mixed color and mono demand.",
      consumables: {
        blackYieldPages: 70000,
        blackUnitCost: 17000,
        blackUnitLabel: "Black Ink Pack",
        colorSetYieldPages: 50000,
        colorSetCost: 39500,
        colorUnitLabel: "CMY Ink Set",
        supportsColor: true
      }
    },
    konica_c4065: {
      key: "konica_c4065",
      name: "Konica Minolta C4065",
      monoCpp: 0.55,
      colorCpp: 2.45,
      maintenanceSavingPct: 0.18,
      energySavingPct: 0.18,
      downtimeReductionPct: 0.35,
      capexDefault: 1120000,
      capexRange: "INR 9.5 Lakh - INR 11.5 Lakh",
      fitNote: "Best fit for commercial print and packaging applications requiring media flexibility.",
      consumables: {
        blackYieldPages: 45000,
        blackUnitCost: 12500,
        blackUnitLabel: "Black Toner",
        colorSetYieldPages: 40000,
        colorSetCost: 28500,
        colorUnitLabel: "CMY Toner Set",
        supportsColor: true
      }
    }
  };

  var INDUSTRY_BENCHMARKS = {
    healthcare: {
      label: "Healthcare and Hospitals",
      monoCpp: 0.82,
      colorCpp: 4.85,
      maintenanceBaseMonthly: 11500,
      maintenancePerPage: 0.06,
      energyPerPage: 0.11,
      downtimeHoursBase: 9,
      downtimeCostPerHour: 3500
    },
    commercial: {
      label: "Commercial Print and Packaging",
      monoCpp: 0.76,
      colorCpp: 4.35,
      maintenanceBaseMonthly: 13000,
      maintenancePerPage: 0.07,
      energyPerPage: 0.12,
      downtimeHoursBase: 11,
      downtimeCostPerHour: 5000
    },
    education: {
      label: "Education and Universities",
      monoCpp: 0.68,
      colorCpp: 3.9,
      maintenanceBaseMonthly: 8500,
      maintenancePerPage: 0.045,
      energyPerPage: 0.095,
      downtimeHoursBase: 7,
      downtimeCostPerHour: 2200
    },
    corporate: {
      label: "Corporate Shared Services",
      monoCpp: 0.74,
      colorCpp: 4.3,
      maintenanceBaseMonthly: 10000,
      maintenancePerPage: 0.055,
      energyPerPage: 0.105,
      downtimeHoursBase: 8,
      downtimeCostPerHour: 3000
    }
  };

  var AGE_FACTORS = {
    new: {
      label: "0 - 2 years",
      cpp: 0.95,
      maintenance: 0.9,
      downtime: 0.85
    },
    mid: {
      label: "3 - 5 years",
      cpp: 1,
      maintenance: 1,
      downtime: 1
    },
    old: {
      label: "5+ years",
      cpp: 1.16,
      maintenance: 1.22,
      downtime: 1.3
    }
  };

  var CRITICALITY_FACTORS = {
    low: {
      label: "Low",
      hours: 0.75,
      cost: 0.8
    },
    medium: {
      label: "Medium",
      hours: 1,
      cost: 1
    },
    high: {
      label: "High",
      hours: 1.3,
      cost: 1.35
    }
  };

  var COMMERCIAL_PRINT_BENCHMARKS = {
    costFsma12x18Color: 3.85,
    costFsmaA4Color: 2.47,
    costFsmaBw: 1.05,
    costPaper12x18_300gsm: 3.5,
    sellPriceReseller: 12.5,
    sellPriceRetail: 22.5,
    monthlyEmi: 32000,
    fundingStatus: "100% Funding Available (Zero Down Payment)",
    promoFreeSheets: 10000
  };

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function formatCurrency(value) {
    return "INR " + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(value));
  }

  function formatCurrencyCompact(value) {
    return "INR " + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(value);
  }

  function formatInteger(value) {
    return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(value));
  }

  function formatDecimal(value, digits) {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    }).format(value);
  }

  function formatPercent(value) {
    return value.toFixed(1) + "%";
  }

  function formatDateLabel(date) {
    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).format(date);
  }

  function addDays(date, days) {
    var next = new Date(date.getTime());
    next.setDate(next.getDate() + days);
    return next;
  }

  function generateReportMeta() {
    var generatedAt = new Date();
    var expiryDate = addDays(generatedAt, REPORT_EXPIRY_DAYS);
    var reportId = "ZEST-ROI-" + String(Math.floor(1000 + (Math.random() * 9000)));

    return {
      reportId: reportId,
      generatedAtIso: generatedAt.toISOString(),
      generatedAtLabel: formatDateLabel(generatedAt),
      expiryDateIso: expiryDate.toISOString(),
      expiryDateLabel: formatDateLabel(expiryDate)
    };
  }

  function safeNumber(value) {
    var out = Number(value);
    return Number.isFinite(out) ? out : 0;
  }

  function endpointConfigured(url) {
    return !!url && !/yourcrm\.com/i.test(url);
  }

  function postJson(url, payload) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  }

  function postFormData(url, payload) {
    return fetch(url, {
      method: "POST",
      body: payload
    });
  }

  function parseResponseBody(response) {
    return response.text().then(function (text) {
      if (!text) {
        return null;
      }

      try {
        return JSON.parse(text);
      } catch (error) {
        return { raw: text };
      }
    });
  }

  function parseLeadReference(body) {
    if (!body || typeof body !== "object") return "";
    return body.lead_id || body.leadId || body.id || body.reference_id || body.reference || "";
  }

  function getFileExtension(fileName) {
    var parts = String(fileName || "").toLowerCase().split(".");
    return parts.length > 1 ? parts.pop() : "";
  }

  function validatePocFile(file) {
    if (!file) {
      return { ok: false, message: "Please select a file first." };
    }

    var extension = getFileExtension(file.name);
    if (ALLOWED_POC_EXTENSIONS.indexOf(extension) === -1) {
      return { ok: false, message: "Only PDF, JPG, and TIFF files are supported." };
    }

    if (file.size > MAX_POC_FILE_BYTES) {
      return { ok: false, message: "File size must be 50 MB or lower." };
    }

    return { ok: true };
  }

  function getFormData(form) {
    return {
      decisionMaker: qs("#decision-maker", form).value.trim(),
      companyName: qs("#company-name", form).value.trim(),
      industry: qs("#industry", form).value,
      commercialPricing: (qs("#commercial-pricing", form) || { value: "b2c" }).value,
      modelKey: qs("#model", form).value,
      monoPages: safeNumber(qs("#mono-pages", form).value),
      colorPages: safeNumber(qs("#color-pages", form).value),
      fleetAge: qs("#fleet-age", form).value,
      downtimeCriticality: qs("#downtime-criticality", form).value
    };
  }

  function recommendModel(data) {
    var totalPages = data.monoPages + data.colorPages;
    var colorShare = totalPages > 0 ? data.colorPages / totalPages : 0;
    var modelKey = "epson_m5500";
    var reason = "";

    switch (data.industry) {
      case "commercial":
        modelKey = "konica_c4065";
        reason = "Commercial and packaging segment detected. C4065 is recommended for production-grade media flexibility and financing-led monthly cash flow planning.";
        break;
      case "healthcare":
        if (colorShare >= 0.18 || totalPages >= 70000) {
          modelKey = "epson_c8100";
          reason = "Healthcare workflow with higher mixed output is detected. C8100 is recommended for sustained color and mono throughput.";
        } else {
          modelKey = "epson_m5500";
          reason = "Healthcare workflow is mostly monochrome. M5500 is recommended for low running cost and high uptime in admin print loads.";
        }
        break;
      case "education":
        if (colorShare <= 0.12) {
          modelKey = "epson_m5500";
          reason = "Education profile with low color ratio is detected. M5500 is recommended for bulk black-and-white exam and admin printing.";
        } else {
          modelKey = "epson_c8100";
          reason = "Education profile with moderate color demand is detected. C8100 is recommended for mixed departmental workloads.";
        }
        break;
      case "corporate":
      default:
        if (colorShare >= 0.22 || totalPages >= 90000) {
          modelKey = "epson_c8100";
          reason = "Corporate profile with significant mixed output is detected. C8100 is recommended for enterprise color and volume resilience.";
        } else {
          modelKey = "epson_m5500";
          reason = "Corporate profile is predominantly monochrome. M5500 is recommended for lower mono cost per page and stable uptime.";
        }
        break;
    }

    return {
      modelKey: modelKey,
      reason: reason,
      totalPages: totalPages,
      colorShare: colorShare
    };
  }

  function renderModelRecommendation(recommendation, profile) {
    var modelNameEl = qs("#recommended-model-name");
    var modelReasonEl = qs("#recommended-model-reason");
    var modelRangeEl = qs("#recommended-model-range");

    if (!modelNameEl || !modelReasonEl || !modelRangeEl || !profile) return;

    modelNameEl.textContent = profile.name;
    modelRangeEl.textContent = "CAPEX benchmark: " + profile.capexRange;
    modelReasonEl.textContent =
      recommendation.reason +
      " Color share considered: " + formatPercent(recommendation.colorShare * 100) +
      " across " + new Intl.NumberFormat("en-IN").format(recommendation.totalPages) + " pages per month.";
  }

  function calculateConsumables(data, profile) {
    var consumableProfile = profile.consumables || {};
    var blackYieldPages = consumableProfile.blackYieldPages || 0;
    var colorSetYieldPages = consumableProfile.colorSetYieldPages || 0;
    var blackPagesEquivalent = data.monoPages + (data.colorPages * COLOR_BLACK_EQUIVALENT_FACTOR);

    var blackUnitsMonthly = blackYieldPages > 0 ? blackPagesEquivalent / blackYieldPages : 0;
    var colorSetsMonthly = colorSetYieldPages > 0 ? data.colorPages / colorSetYieldPages : 0;

    var monthlyBudget = (blackUnitsMonthly * (consumableProfile.blackUnitCost || 0)) +
      (colorSetsMonthly * (consumableProfile.colorSetCost || 0));
    var annualBudget = monthlyBudget * 12;

    var note = consumableProfile.supportsColor
      ? "Includes mono + color consumable planning for the recommended device profile."
      : (data.colorPages > 0
        ? "Recommended profile is mono-first. Color pages are treated as outsourced or secondary workflow."
        : "Mono workflow detected. No color consumables required.");

    return {
      blackPagesEquivalent: blackPagesEquivalent,
      blackUnitsMonthly: blackUnitsMonthly,
      blackUnitsAnnual: blackUnitsMonthly * 12,
      blackUnitLabel: consumableProfile.blackUnitLabel || "Black Consumable",
      colorSetsMonthly: colorSetsMonthly,
      colorSetsAnnual: colorSetsMonthly * 12,
      colorUnitLabel: consumableProfile.colorUnitLabel || "Color Consumable Set",
      monthlyBudget: monthlyBudget,
      annualBudget: annualBudget,
      note: note
    };
  }

  function calculatePricingModel(profile) {
    var capexMrp = profile.capexDefault;
    var leaseMonthly = (capexMrp * OPEX_LEASE_FACTOR) / OPEX_LEASE_MONTHS;

    return {
      capexMrp: capexMrp,
      leaseMonthly: leaseMonthly,
      leaseMonths: OPEX_LEASE_MONTHS,
      leaseFactor: OPEX_LEASE_FACTOR
    };
  }

  function calculateCommercialPnl(data, profile, totalPages) {
    if (profile.key !== "konica_c4065" || data.industry !== "commercial") {
      return null;
    }

    var tcp = COMMERCIAL_PRINT_BENCHMARKS.costFsma12x18Color + COMMERCIAL_PRINT_BENCHMARKS.costPaper12x18_300gsm;
    var grossProfitPerPrintB2b = COMMERCIAL_PRINT_BENCHMARKS.sellPriceReseller - tcp;
    var grossProfitPerPrintB2c = COMMERCIAL_PRINT_BENCHMARKS.sellPriceRetail - tcp;
    var selectedMode = data.commercialPricing === "b2b" ? "b2b" : "b2c";
    var selectedLabel = selectedMode === "b2b" ? "Reseller (B2B Trade)" : "End Customer (B2C Retail)";
    var selectedSellPrice = selectedMode === "b2b"
      ? COMMERCIAL_PRINT_BENCHMARKS.sellPriceReseller
      : COMMERCIAL_PRINT_BENCHMARKS.sellPriceRetail;
    var selectedGrossProfitPerPrint = selectedSellPrice - tcp;
    var monthlyGrossRevenue = totalPages * selectedSellPrice;
    var monthlyConsumablesCost = totalPages * tcp;
    var monthlyGrossProfit = totalPages * selectedGrossProfitPerPrint;
    var monthlyNetCashFlow = monthlyGrossProfit - COMMERCIAL_PRINT_BENCHMARKS.monthlyEmi;
    var promoRetailValue = COMMERCIAL_PRINT_BENCHMARKS.promoFreeSheets * COMMERCIAL_PRINT_BENCHMARKS.sellPriceRetail;
    var promoEmiCoverMonths = promoRetailValue / COMMERCIAL_PRINT_BENCHMARKS.monthlyEmi;
    var breakEvenVolume = selectedGrossProfitPerPrint > 0
      ? COMMERCIAL_PRINT_BENCHMARKS.monthlyEmi / selectedGrossProfitPerPrint
      : Infinity;

    return {
      active: true,
      monthlyVolume: totalPages,
      selectedMode: selectedMode,
      selectedLabel: selectedLabel,
      totalCostPerPrint: tcp,
      grossProfitPerPrintB2b: grossProfitPerPrintB2b,
      grossProfitPerPrintB2c: grossProfitPerPrintB2c,
      selectedSellPrice: selectedSellPrice,
      selectedGrossProfitPerPrint: selectedGrossProfitPerPrint,
      monthlyGrossRevenue: monthlyGrossRevenue,
      monthlyConsumablesCost: monthlyConsumablesCost,
      monthlyGrossProfit: monthlyGrossProfit,
      monthlyEmi: COMMERCIAL_PRINT_BENCHMARKS.monthlyEmi,
      monthlyNetCashFlow: monthlyNetCashFlow,
      monthlyNetMarginPct: monthlyGrossRevenue > 0 ? (monthlyNetCashFlow / monthlyGrossRevenue) * 100 : 0,
      breakEvenVolume: breakEvenVolume,
      fundingStatus: COMMERCIAL_PRINT_BENCHMARKS.fundingStatus,
      promoFreeSheets: COMMERCIAL_PRINT_BENCHMARKS.promoFreeSheets,
      promoRetailValue: promoRetailValue,
      promoEmiCoverMonths: promoEmiCoverMonths
    };
  }

  function calculateRoi(data, profile, industryBenchmark, ageFactors, criticalityFactors, recommendation) {
    var totalPages = data.monoPages + data.colorPages;
    var consumables = calculateConsumables(data, profile);
    var pricing = calculatePricingModel(profile);
    var commercialPnl = calculateCommercialPnl(data, profile, totalPages);

    var assumedMonoCpp = industryBenchmark.monoCpp * ageFactors.cpp;
    var assumedColorCpp = industryBenchmark.colorCpp * ageFactors.cpp;

    var currentPrintMonthly = (data.monoPages * assumedMonoCpp) + (data.colorPages * assumedColorCpp);
    var projectedPrintMonthly = (data.monoPages * profile.monoCpp) + (data.colorPages * profile.colorCpp);

    var baseMaintenanceMonthly = industryBenchmark.maintenanceBaseMonthly + (totalPages * industryBenchmark.maintenancePerPage);
    var currentMaintenanceMonthly = baseMaintenanceMonthly * ageFactors.maintenance;
    var projectedMaintenanceMonthly = currentMaintenanceMonthly * (1 - profile.maintenanceSavingPct);

    var currentEnergyMonthly = totalPages * industryBenchmark.energyPerPage;
    var projectedEnergyMonthly = currentEnergyMonthly * (1 - profile.energySavingPct);

    var assumedDowntimeHours = industryBenchmark.downtimeHoursBase * ageFactors.downtime * criticalityFactors.hours;
    var assumedDowntimeCostPerHour = industryBenchmark.downtimeCostPerHour * criticalityFactors.cost;
    var currentDowntimeMonthly = assumedDowntimeHours * assumedDowntimeCostPerHour;
    var projectedDowntimeMonthly = currentDowntimeMonthly * (1 - profile.downtimeReductionPct);

    var currentTotalMonthly = currentPrintMonthly + currentMaintenanceMonthly + currentEnergyMonthly + currentDowntimeMonthly;
    var projectedTotalMonthly = projectedPrintMonthly + projectedMaintenanceMonthly + projectedEnergyMonthly + projectedDowntimeMonthly;

    var monthlySavings = currentTotalMonthly - projectedTotalMonthly;
    var annualSavings = monthlySavings * 12;
    var capex = pricing.capexMrp;
    var horizonSavings = annualSavings * ROI_HORIZON_YEARS;
    var netGain = horizonSavings - capex;
    var roiPct = capex > 0 ? (netGain / capex) * 100 : 0;
    var paybackMonths = monthlySavings > 0 ? capex / monthlySavings : Infinity;
    var tcoReductionPct = currentTotalMonthly > 0 ? (monthlySavings / currentTotalMonthly) * 100 : 0;

    return {
      profile: profile,
      recommendation: recommendation,
      industryBenchmark: industryBenchmark,
      ageFactors: ageFactors,
      criticalityFactors: criticalityFactors,
      assumptions: {
        monoCpp: assumedMonoCpp,
        colorCpp: assumedColorCpp,
        maintenanceMonthly: currentMaintenanceMonthly,
        energyMonthly: currentEnergyMonthly,
        downtimeHours: assumedDowntimeHours,
        downtimeCostPerHour: assumedDowntimeCostPerHour,
        capex: capex,
        horizonYears: ROI_HORIZON_YEARS,
        blackEquivalentFactor: COLOR_BLACK_EQUIVALENT_FACTOR
      },
      pricing: pricing,
      consumables: consumables,
      commercialPnl: commercialPnl,
      monthlySavings: monthlySavings,
      annualSavings: annualSavings,
      horizonSavings: horizonSavings,
      netGain: netGain,
      roiPct: roiPct,
      paybackMonths: paybackMonths,
      tcoReductionPct: tcoReductionPct,
      current: {
        print: currentPrintMonthly,
        maintenance: currentMaintenanceMonthly,
        energy: currentEnergyMonthly,
        downtime: currentDowntimeMonthly,
        total: currentTotalMonthly
      },
      projected: {
        print: projectedPrintMonthly,
        maintenance: projectedMaintenanceMonthly,
        energy: projectedEnergyMonthly,
        downtime: projectedDowntimeMonthly,
        total: projectedTotalMonthly
      },
      conservativeMonthlySavings: monthlySavings * 0.82,
      optimisticMonthlySavings: monthlySavings * 1.12
    };
  }

  function buildRecommendation(data, result) {
    if (result.commercialPnl) {
      return "Commercial P&L mode is active for Konica Minolta C4065. Use selected pricing mode to validate monthly cash flow and production ramp-up. Same-day service SLA applies in Mumbai, Boisar, and Khopoli.";
    }

    var strength;

    if (result.roiPct >= 70 && result.paybackMonths <= 18) {
      strength = "Strong business case. This scenario usually supports faster internal approvals.";
    } else if (result.roiPct >= 35 && result.paybackMonths <= 30) {
      strength = "Solid business case. Validate exact media mix and workflow behavior during audit.";
    } else {
      strength = "ROI is moderate under current assumptions. A detailed print audit can improve precision.";
    }

    var modelHint = result.profile.fitNote;

    if (data.modelKey === "epson_m5500" && data.colorPages > 30000) {
      modelHint = "Color volume is relatively high for M5500. C8100 may yield better mixed-workload economics.";
    }

    return strength + " " + modelHint + " Same-day service SLA applies in Mumbai, Boisar, and Khopoli.";
  }

  function renderBreakdown(result) {
    var body = qs("#roi-breakdown-body");
    if (!body) return;

    var rows = [
      ["Print output cost", result.current.print, result.projected.print],
      ["Maintenance", result.current.maintenance, result.projected.maintenance],
      ["Energy", result.current.energy, result.projected.energy],
      ["Downtime impact", result.current.downtime, result.projected.downtime],
      ["Total", result.current.total, result.projected.total]
    ];

    body.innerHTML = rows.map(function (row) {
      var impact = row[1] - row[2];
      var impactLabel = impact >= 0 ? "-" + formatCurrency(Math.abs(impact)) : "+" + formatCurrency(Math.abs(impact));

      return "<tr>" +
        "<td>" + row[0] + "</td>" +
        "<td>" + formatCurrency(row[1]) + "</td>" +
        "<td>" + formatCurrency(row[2]) + "</td>" +
        "<td>" + impactLabel + "</td>" +
      "</tr>";
    }).join("");
  }

  function renderAssumptions(result) {
    qs("#assumption-cpp").textContent = formatCurrencyCompact(result.assumptions.monoCpp) + " / " + formatCurrencyCompact(result.assumptions.colorCpp);
    qs("#assumption-maint").textContent = formatCurrency(result.assumptions.maintenanceMonthly) + " / month";
    qs("#assumption-energy").textContent = formatCurrency(result.assumptions.energyMonthly) + " / month";
    qs("#assumption-downtime").textContent = result.assumptions.downtimeHours.toFixed(1) + " hrs x " + formatCurrency(result.assumptions.downtimeCostPerHour);
    qs("#assumption-capex").textContent = formatCurrency(result.assumptions.capex);
    qs("#assumption-horizon").textContent = result.assumptions.horizonYears + " years";
  }

  function renderPricing(result) {
    qs("#pricing-capex").textContent = formatCurrency(result.pricing.capexMrp);
    qs("#pricing-lease").textContent = formatCurrency(result.pricing.leaseMonthly) + " / month";
    qs("#pricing-lease-note").textContent =
      "Or lease for " + formatCurrency(result.pricing.leaseMonthly) + "/month (" + result.pricing.leaseMonths + " months).";
  }

  function renderConsumables(result) {
    qs("#consumable-black").textContent =
      formatDecimal(result.consumables.blackUnitsMonthly, 2) +
      " " + result.consumables.blackUnitLabel + " / month";
    qs("#consumable-color").textContent =
      formatDecimal(result.consumables.colorSetsMonthly, 2) +
      " " + result.consumables.colorUnitLabel + " / month";
    qs("#consumable-budget-monthly").textContent = formatCurrency(result.consumables.monthlyBudget);
    qs("#consumable-budget-annual").textContent = formatCurrency(result.consumables.annualBudget);
    qs("#consumable-note").textContent = result.consumables.note;
  }

  function renderKpis(result) {
    var primaryLabelEl = qs("#kpi-primary-label");
    var secondaryLabelEl = qs("#kpi-secondary-label");
    var tertiaryLabelEl = qs("#kpi-tertiary-label");
    var quaternaryLabelEl = qs("#kpi-quaternary-label");

    if (result.commercialPnl) {
      primaryLabelEl.textContent = "Estimated Monthly Net Cash Flow";
      secondaryLabelEl.textContent = "Projected Monthly Gross Revenue";
      tertiaryLabelEl.textContent = "Monthly EMI Commitment";
      quaternaryLabelEl.textContent = "Gross Profit / Print (" + (result.commercialPnl.selectedMode === "b2b" ? "B2B" : "B2C") + ")";

      qs("#kpi-monthly-savings").textContent = formatCurrency(result.commercialPnl.monthlyNetCashFlow);
      qs("#kpi-annual-savings").textContent = formatCurrency(result.commercialPnl.monthlyGrossRevenue);
      qs("#kpi-payback").textContent = formatCurrency(result.commercialPnl.monthlyEmi);
      qs("#kpi-roi").textContent = formatCurrencyCompact(result.commercialPnl.selectedGrossProfitPerPrint) + " / print";
      return;
    }

    primaryLabelEl.textContent = "Estimated Monthly Savings";
    secondaryLabelEl.textContent = "Estimated Annual Savings";
    tertiaryLabelEl.textContent = "Payback Period";
    quaternaryLabelEl.textContent = "ROI (3 Years)";

    qs("#kpi-monthly-savings").textContent = formatCurrency(result.monthlySavings);
    qs("#kpi-annual-savings").textContent = formatCurrency(result.annualSavings);
    qs("#kpi-payback").textContent = Number.isFinite(result.paybackMonths) ? result.paybackMonths.toFixed(1) + " months" : "Not achievable";
    qs("#kpi-roi").textContent = formatPercent(result.roiPct);
  }

  function renderCommercialPnl(result) {
    var financeBanner = qs("#finance-banner");
    var promoCallout = qs("#promo-callout");
    var pnlWrap = qs("#commercial-pnl");
    if (!financeBanner || !promoCallout || !pnlWrap) return;

    if (!result.commercialPnl) {
      financeBanner.classList.add("is-hidden");
      promoCallout.classList.add("is-hidden");
      pnlWrap.classList.add("is-hidden");
      return;
    }

    var pnl = result.commercialPnl;
    financeBanner.classList.remove("is-hidden");
    promoCallout.classList.remove("is-hidden");
    pnlWrap.classList.remove("is-hidden");

    qs("#finance-banner-text").textContent =
      "Own this machine for just " + formatCurrency(pnl.monthlyEmi) + "/month. 100% Funding Available (Subject to GST).";

    qs("#promo-callout-text").textContent =
      "Includes " + formatInteger(pnl.promoFreeSheets) +
      " Free 12x18 Sheets! Estimated Retail Value: " + formatCurrency(pnl.promoRetailValue) +
      " (Effectively covers your first " + Math.floor(pnl.promoEmiCoverMonths) + " months of EMI).";

    qs("#pnl-selling-model").textContent = pnl.selectedLabel;
    qs("#pnl-volume").textContent = formatInteger(pnl.monthlyVolume) + " prints / month";
    qs("#pnl-sell-price").textContent = formatCurrencyCompact(pnl.selectedSellPrice) + " / print";
    qs("#pnl-revenue").textContent = formatCurrency(pnl.monthlyGrossRevenue);
    qs("#pnl-consumables-cost").textContent = formatCurrency(pnl.monthlyConsumablesCost);
    qs("#pnl-emi").textContent = formatCurrency(pnl.monthlyEmi);
    qs("#pnl-net-cashflow").textContent = formatCurrency(pnl.monthlyNetCashFlow);
    qs("#pnl-gpp-range").textContent =
      formatCurrencyCompact(pnl.grossProfitPerPrintB2b) + " / " + formatCurrencyCompact(pnl.grossProfitPerPrintB2c);
  }

  function renderResults(data, result) {
    renderKpis(result);
    renderPricing(result);
    renderAssumptions(result);
    renderConsumables(result);
    renderCommercialPnl(result);
    renderBreakdown(result);

    var recommendation = buildRecommendation(data, result);
    if (result.commercialPnl) {
      qs("#roi-recommendation").innerHTML =
        "<h3>Interpretation</h3>" +
        "<p>Projected monthly net cash flow: <strong>" + formatCurrency(result.commercialPnl.monthlyNetCashFlow) + "</strong> (" + formatPercent(result.commercialPnl.monthlyNetMarginPct) + " margin on monthly revenue).</p>" +
        "<p>Break-even volume at selected selling mode: <strong>" + (Number.isFinite(result.commercialPnl.breakEvenVolume) ? formatInteger(result.commercialPnl.breakEvenVolume) : "-") + " prints / month</strong>.</p>" +
        "<p><strong>Total cost per print (FSMA + paper):</strong> " + formatCurrencyCompact(result.commercialPnl.totalCostPerPrint) + "</p>" +
        "<p>" + recommendation + "</p>";
    } else {
      qs("#roi-recommendation").innerHTML =
        "<h3>Interpretation</h3>" +
        "<p>Projected monthly TCO reduction: <strong>" + formatPercent(result.tcoReductionPct) + "</strong></p>" +
        "<p>Conservative to optimistic monthly savings band: <strong>" + formatCurrency(result.conservativeMonthlySavings) + " to " + formatCurrency(result.optimisticMonthlySavings) + "</strong></p>" +
        "<p><strong>Industry benchmark:</strong> " + result.industryBenchmark.label + " | <strong>Fleet age factor:</strong> " + result.ageFactors.label + " | <strong>Downtime criticality:</strong> " + result.criticalityFactors.label + "</p>" +
        "<p>" + recommendation + "</p>";
    }

    qs("#roi-results").classList.add("is-ready");
  }

  function addPdfMetricBox(doc, x, y, width, height, title, value, subtitle) {
    doc.setFillColor(245, 250, 255);
    doc.setDrawColor(210, 225, 242);
    doc.roundedRect(x, y, width, height, 8, 8, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(20, 50, 93);
    doc.text(title, x + 10, y + 16);

    doc.setFontSize(13);
    doc.setTextColor(9, 31, 59);
    doc.text(value, x + 10, y + 35);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(80, 98, 124);
    doc.text(subtitle, x + 10, y + 50);
  }

  function ensurePdfSpace(doc, y, requiredHeight, margin) {
    var pageHeight = doc.internal.pageSize.getHeight();
    if (y + requiredHeight > pageHeight - 50) {
      doc.addPage();
      return margin;
    }
    return y;
  }

  function buildOfferText(reportMeta) {
    return "Exclusive Zest Offer: Free 1-Year AMC + 1st Month Consumables. Valid only until " + reportMeta.expiryDateLabel + ".";
  }

  function buildCommercialPromoText(commercialPnl) {
    return "Includes " + formatInteger(commercialPnl.promoFreeSheets) +
      " Free 12x18 Sheets! Estimated Retail Value: " + formatCurrency(commercialPnl.promoRetailValue) +
      " (Effectively covers your first " + Math.floor(commercialPnl.promoEmiCoverMonths) + " months of EMI).";
  }

  function addCommercialFinalPage(doc, result, reportMeta, margin) {
    var pageWidth = doc.internal.pageSize.getWidth();

    doc.addPage();
    doc.setFillColor(8, 33, 66);
    doc.rect(0, 0, pageWidth, 88, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text("Commercial Offer Protection", margin, 38);
    doc.setFontSize(10);
    doc.text("Report ID: " + reportMeta.reportId + " | Offer validity: " + reportMeta.expiryDateLabel, margin, 58);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(9, 31, 59);
    doc.text("Final Negotiation Summary", margin, 120);

    doc.autoTable({
      startY: 132,
      margin: { left: margin, right: margin },
      head: [["P&L Item", "Value"]],
      body: [
        ["Monthly volume", formatInteger(result.commercialPnl.monthlyVolume) + " prints"],
        ["Selling mode", result.commercialPnl.selectedLabel],
        ["Gross revenue", formatCurrency(result.commercialPnl.monthlyGrossRevenue)],
        ["Consumables (FSMA + paper)", formatCurrency(result.commercialPnl.monthlyConsumablesCost)],
        ["EMI commitment", formatCurrency(result.commercialPnl.monthlyEmi)],
        ["Net take-home profit", formatCurrency(result.commercialPnl.monthlyNetCashFlow)]
      ],
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: { fillColor: [20, 49, 93], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [246, 250, 255] }
    });

    var y = doc.lastAutoTable.finalY + 18;

    doc.setFillColor(255, 243, 203);
    doc.setDrawColor(226, 193, 95);
    doc.roundedRect(margin, y, pageWidth - (margin * 2), 86, 8, 8, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(104, 69, 0);
    doc.text("10,000 Free 12x18 Sheets Offer", margin + 12, y + 22);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(92, 62, 0);
    doc.text(doc.splitTextToSize(buildCommercialPromoText(result.commercialPnl), pageWidth - (margin * 2) - 24), margin + 12, y + 42);

    y += 102;

    doc.setFillColor(238, 247, 255);
    doc.setDrawColor(198, 220, 246);
    doc.roundedRect(margin, y, pageWidth - (margin * 2), 58, 8, 8, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(16, 46, 84);
    doc.text("Exclusive Zest Offer", margin + 10, y + 20);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 73, 103);
    doc.text(doc.splitTextToSize(buildOfferText(reportMeta), pageWidth - (margin * 2) - 20), margin + 10, y + 38);
  }

  function generatePdf(data, result, reportMeta) {
    if (!window.jspdf || !window.jspdf.jsPDF) {
      return { ok: false, message: "PDF library is not loaded. Please refresh and try again." };
    }

    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF({ unit: "pt", format: "a4" });
    var pageWidth = doc.internal.pageSize.getWidth();
    var pageHeight = doc.internal.pageSize.getHeight();
    var margin = 38;

    doc.setFillColor(11, 31, 59);
    doc.rect(0, 0, pageWidth, 102, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    doc.text("Zest Digital Solutions", margin, 40);

    doc.setFontSize(13);
    doc.text("Corporate Print ROI Report", margin, 62);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Generated on: " + reportMeta.generatedAtLabel, margin, 82);
    doc.text("Model evaluated: " + result.profile.name, pageWidth - 245, 82);
    doc.text("Report ID: " + reportMeta.reportId, pageWidth - 245, 40);
    doc.text("Offer valid until: " + reportMeta.expiryDateLabel, pageWidth - 245, 54);

    var y = 130;
    var boxGap = 14;
    var boxWidth = (pageWidth - (margin * 2) - boxGap) / 2;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(9, 31, 59);
    doc.text("Buyer Inputs", margin, y);

    var buyerRows = [
      ["Report ID", reportMeta.reportId],
      ["Company", data.companyName || "Not provided"],
      ["Decision maker", data.decisionMaker || "Not provided"],
      ["Industry", result.industryBenchmark.label],
      ["Auto-recommended model", result.profile.name],
      ["Monthly mono pages", new Intl.NumberFormat("en-IN").format(data.monoPages)],
      ["Monthly color pages", new Intl.NumberFormat("en-IN").format(data.colorPages)],
      ["Fleet age", result.ageFactors.label],
      ["Downtime criticality", result.criticalityFactors.label]
    ];

    if (result.commercialPnl) {
      buyerRows.splice(5, 0, ["Commercial selling mode", result.commercialPnl.selectedLabel]);
    }

    doc.autoTable({
      startY: y + 8,
      margin: { left: margin, right: margin },
      head: [["Field", "Value"]],
      body: buyerRows,
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: { fillColor: [20, 49, 93], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [246, 250, 255] }
    });

    y = doc.lastAutoTable.finalY + 16;
    y = ensurePdfSpace(doc, y, 92, margin);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Cost of Recommended Printer", margin, y);

    addPdfMetricBox(
      doc,
      margin,
      y + 10,
      boxWidth,
      62,
      "CapEx (Standard MRP)",
      formatCurrency(result.pricing.capexMrp),
      "One-time capital purchase benchmark"
    );
    addPdfMetricBox(
      doc,
      margin + boxWidth + boxGap,
      y + 10,
      boxWidth,
      62,
      "OpEx Lease Option",
      formatCurrency(result.pricing.leaseMonthly) + " / month",
      "Or lease for " + formatCurrency(result.pricing.leaseMonthly) + "/month (" + result.pricing.leaseMonths + " months)"
    );

    y = y + 88;
    y = ensurePdfSpace(doc, y, 190, margin);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Applied Market Assumptions", margin, y);

    var assumptionRows = [
      ["Current CPP (mono)", formatCurrencyCompact(result.assumptions.monoCpp)],
      ["Current CPP (color)", formatCurrencyCompact(result.assumptions.colorCpp)],
      ["Maintenance benchmark", formatCurrency(result.assumptions.maintenanceMonthly) + " / month"],
      ["Energy benchmark", formatCurrency(result.assumptions.energyMonthly) + " / month"],
      ["Downtime benchmark", result.assumptions.downtimeHours.toFixed(1) + " hrs x " + formatCurrency(result.assumptions.downtimeCostPerHour)],
      ["Black equivalent factor", Math.round(result.assumptions.blackEquivalentFactor * 100) + "% of color pages added to black consumption"],
      ["CAPEX benchmark", formatCurrency(result.assumptions.capex) + " (" + result.profile.capexRange + ")"],
      ["OpEx lease benchmark", formatCurrency(result.pricing.leaseMonthly) + " / month (" + result.pricing.leaseMonths + " months)"],
      ["ROI horizon", result.assumptions.horizonYears + " years"]
    ];

    if (result.commercialPnl) {
      assumptionRows.push(["FSMA 12x18 color", formatCurrencyCompact(COMMERCIAL_PRINT_BENCHMARKS.costFsma12x18Color) + " / sheet"]);
      assumptionRows.push(["FSMA A4 color", formatCurrencyCompact(COMMERCIAL_PRINT_BENCHMARKS.costFsmaA4Color) + " / sheet"]);
      assumptionRows.push(["FSMA B/W", formatCurrencyCompact(COMMERCIAL_PRINT_BENCHMARKS.costFsmaBw) + " / sheet"]);
      assumptionRows.push(["Paper 12x18 300 GSM", formatCurrencyCompact(COMMERCIAL_PRINT_BENCHMARKS.costPaper12x18_300gsm) + " / sheet"]);
      assumptionRows.push(["Sell price benchmark (B2B / B2C)", formatCurrencyCompact(COMMERCIAL_PRINT_BENCHMARKS.sellPriceReseller) + " / " + formatCurrencyCompact(COMMERCIAL_PRINT_BENCHMARKS.sellPriceRetail)]);
      assumptionRows.push(["Financing status", COMMERCIAL_PRINT_BENCHMARKS.fundingStatus]);
      assumptionRows.push(["Promo free sheets", formatInteger(COMMERCIAL_PRINT_BENCHMARKS.promoFreeSheets)]);
    }

    doc.autoTable({
      startY: y + 8,
      margin: { left: margin, right: margin },
      head: [["Assumption", "Value"]],
      body: assumptionRows,
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: { fillColor: [20, 49, 93], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [246, 250, 255] }
    });

    y = doc.lastAutoTable.finalY + 16;
    y = ensurePdfSpace(doc, y, 180, margin);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Estimated Ink / Toner Requirement", margin, y);

    doc.autoTable({
      startY: y + 8,
      margin: { left: margin, right: margin },
      head: [["Consumable Metric", "Value"]],
      body: [
        ["Black equivalent pages / month", new Intl.NumberFormat("en-IN").format(Math.round(result.consumables.blackPagesEquivalent))],
        ["Black consumable requirement", formatDecimal(result.consumables.blackUnitsMonthly, 2) + " " + result.consumables.blackUnitLabel + " / month"],
        ["Color consumable requirement", formatDecimal(result.consumables.colorSetsMonthly, 2) + " " + result.consumables.colorUnitLabel + " / month"],
        ["Estimated consumables budget", formatCurrency(result.consumables.monthlyBudget) + " / month"],
        ["Estimated annual consumables budget", formatCurrency(result.consumables.annualBudget) + " / year"],
        ["Planning note", result.consumables.note]
      ],
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: { fillColor: [20, 49, 93], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [246, 250, 255] }
    });

    y = doc.lastAutoTable.finalY + 18;

    if (result.commercialPnl) {
      y = ensurePdfSpace(doc, y, 220, margin);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(9, 31, 59);
      doc.text("Your Projected Monthly P&L", margin, y);

      doc.autoTable({
        startY: y + 8,
        margin: { left: margin, right: margin },
        head: [["P&L Component", "Amount"]],
        body: [
          ["Total Revenue generated from input volume", formatCurrency(result.commercialPnl.monthlyGrossRevenue)],
          ["Consumables Cost (FSMA + Paper)", formatCurrency(result.commercialPnl.monthlyConsumablesCost)],
          ["Financing EMI", formatCurrency(result.commercialPnl.monthlyEmi)],
          ["Net Take-Home Profit (Cash Flow)", formatCurrency(result.commercialPnl.monthlyNetCashFlow)]
        ],
        theme: "grid",
        styles: { fontSize: 9, cellPadding: 6 },
        headStyles: { fillColor: [20, 49, 93], textColor: [255, 255, 255] },
        alternateRowStyles: { fillColor: [246, 250, 255] }
      });

      y = doc.lastAutoTable.finalY + 18;
    }

    y = ensurePdfSpace(doc, y, 150, margin);

    if (result.commercialPnl) {
      addPdfMetricBox(doc, margin, y, boxWidth, 62, "Monthly Net Cash Flow", formatCurrency(result.commercialPnl.monthlyNetCashFlow), "Primary profitability signal");
      addPdfMetricBox(doc, margin + boxWidth + boxGap, y, boxWidth, 62, "Monthly Gross Revenue", formatCurrency(result.commercialPnl.monthlyGrossRevenue), "Based on selected selling mode");

      y += 76;

      addPdfMetricBox(doc, margin, y, boxWidth, 62, "Monthly EMI", formatCurrency(result.commercialPnl.monthlyEmi), "5-year finance estimate at 12.5% ROI");
      addPdfMetricBox(doc, margin + boxWidth + boxGap, y, boxWidth, 62, "Gross Profit / Print", formatCurrencyCompact(result.commercialPnl.selectedGrossProfitPerPrint), "Selling mode: " + (result.commercialPnl.selectedMode === "b2b" ? "B2B" : "B2C"));
    } else {
      addPdfMetricBox(doc, margin, y, boxWidth, 62, "Monthly Savings", formatCurrency(result.monthlySavings), "Expected blended monthly benefit");
      addPdfMetricBox(doc, margin + boxWidth + boxGap, y, boxWidth, 62, "Annual Savings", formatCurrency(result.annualSavings), "12-month equivalent value");

      y += 76;

      addPdfMetricBox(doc, margin, y, boxWidth, 62, "Payback Period", Number.isFinite(result.paybackMonths) ? result.paybackMonths.toFixed(1) + " months" : "Not achievable", "Investment recovery estimate");
      addPdfMetricBox(doc, margin + boxWidth + boxGap, y, boxWidth, 62, "ROI (3 years)", formatPercent(result.roiPct), "Net return on benchmark CAPEX");
    }

    y += 86;
    y = ensurePdfSpace(doc, y, 180, margin);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(9, 31, 59);
    doc.text("Monthly Cost Comparison", margin, y);

    doc.autoTable({
      startY: y + 8,
      margin: { left: margin, right: margin },
      head: [["Cost Component", "Current", "Projected", "Impact"]],
      body: [
        ["Print output cost", formatCurrency(result.current.print), formatCurrency(result.projected.print), formatCurrency(result.current.print - result.projected.print)],
        ["Maintenance", formatCurrency(result.current.maintenance), formatCurrency(result.projected.maintenance), formatCurrency(result.current.maintenance - result.projected.maintenance)],
        ["Energy", formatCurrency(result.current.energy), formatCurrency(result.projected.energy), formatCurrency(result.current.energy - result.projected.energy)],
        ["Downtime impact", formatCurrency(result.current.downtime), formatCurrency(result.projected.downtime), formatCurrency(result.current.downtime - result.projected.downtime)],
        ["Total", formatCurrency(result.current.total), formatCurrency(result.projected.total), formatCurrency(result.monthlySavings)]
      ],
      theme: "grid",
      styles: { fontSize: 9, cellPadding: 6 },
      headStyles: { fillColor: [20, 49, 93], textColor: [255, 255, 255] },
      alternateRowStyles: { fillColor: [246, 250, 255] }
    });

    y = doc.lastAutoTable.finalY + 18;
    y = ensurePdfSpace(doc, y, 150, margin);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Decision Guidance", margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(58, 75, 102);

    var guidance;
    if (result.commercialPnl) {
      guidance = [
        "Recommendation rationale: " + result.recommendation.reason,
        "Monthly net cash flow projection: " + formatCurrency(result.commercialPnl.monthlyNetCashFlow),
        "Total cost per print (FSMA + paper): " + formatCurrencyCompact(result.commercialPnl.totalCostPerPrint),
        "Funding status: " + result.commercialPnl.fundingStatus + " (Subject to GST).",
        "Break-even monthly volume: " + (Number.isFinite(result.commercialPnl.breakEvenVolume) ? formatInteger(result.commercialPnl.breakEvenVolume) : "-") + " prints.",
        "Service note: Same-day servicing in Mumbai, Boisar, and Khopoli for active support customers."
      ].join("\n");
    } else {
      guidance = [
        "Recommendation rationale: " + result.recommendation.reason,
        "Recommended profile: " + result.profile.fitNote,
        "Projected monthly TCO reduction: " + formatPercent(result.tcoReductionPct),
        "Estimated monthly consumables budget: " + formatCurrency(result.consumables.monthlyBudget),
        "Conservative to optimistic monthly savings range: " + formatCurrency(result.conservativeMonthlySavings) + " to " + formatCurrency(result.optimisticMonthlySavings),
        "Service note: Same-day servicing in Mumbai, Boisar, and Khopoli for active support customers."
      ].join("\n");
    }

    var guidanceLines = doc.splitTextToSize(guidance, pageWidth - (margin * 2));
    doc.text(guidanceLines, margin, y + 16);

    y = y + 20 + (guidanceLines.length * 11);
    y = ensurePdfSpace(doc, y, 74, margin);

    doc.setFillColor(238, 247, 255);
    doc.setDrawColor(198, 220, 246);
    doc.roundedRect(margin, y, pageWidth - (margin * 2), 56, 8, 8, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(16, 46, 84);
    doc.text("Exclusive Offer", margin + 10, y + 18);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(50, 73, 103);
    doc.text(doc.splitTextToSize(buildOfferText(reportMeta), pageWidth - (margin * 2) - 20), margin + 10, y + 34);

    if (result.commercialPnl) {
      addCommercialFinalPage(doc, result, reportMeta, margin);
      pageHeight = doc.internal.pageSize.getHeight();
    }

    var footerY = pageHeight - 40;
    doc.setDrawColor(204, 217, 236);
    doc.line(margin, footerY - 12, pageWidth - margin, footerY - 12);
    doc.setFontSize(8.5);
    doc.setTextColor(92, 108, 132);
    doc.text("Prepared by Zest Digital Solutions | sales@zestdigital.in | +91 98765 43210", margin, footerY);

    var safeCompany = (data.companyName || "buyer").replace(/[^a-z0-9]/gi, "_").toLowerCase();
    var fileName = "zest_roi_report_" + safeCompany + "_" + reportMeta.reportId.toLowerCase() + "_" + reportMeta.generatedAtIso.slice(0, 10) + ".pdf";

    doc.save(fileName);
    return { ok: true };
  }

  function sendRoiLead(data, result, reportMeta) {
    var payload = {
      form_type: "roi_report_generated",
      form_context: "self_serve_roi_calculator_market_benchmarked",
      company_name: data.companyName,
      decision_maker: data.decisionMaker,
      industry: result.industryBenchmark.label,
      selected_model: result.profile.name,
      recommendation_reason: result.recommendation.reason,
      mono_pages: data.monoPages,
      color_pages: data.colorPages,
      fleet_age: result.ageFactors.label,
      downtime_criticality: result.criticalityFactors.label,
      assumed_mono_cpp: result.assumptions.monoCpp,
      assumed_color_cpp: result.assumptions.colorCpp,
      assumed_capex: result.assumptions.capex,
      capex_mrp: result.pricing.capexMrp,
      opex_lease_monthly: result.pricing.leaseMonthly,
      opex_lease_months: result.pricing.leaseMonths,
      commercial_selling_mode: result.commercialPnl ? result.commercialPnl.selectedMode : null,
      commercial_monthly_volume: result.commercialPnl ? result.commercialPnl.monthlyVolume : null,
      commercial_total_cost_per_print: result.commercialPnl ? result.commercialPnl.totalCostPerPrint : null,
      commercial_gross_profit_per_print_b2b: result.commercialPnl ? result.commercialPnl.grossProfitPerPrintB2b : null,
      commercial_gross_profit_per_print_b2c: result.commercialPnl ? result.commercialPnl.grossProfitPerPrintB2c : null,
      commercial_monthly_gross_revenue: result.commercialPnl ? result.commercialPnl.monthlyGrossRevenue : null,
      commercial_monthly_consumables_cost: result.commercialPnl ? result.commercialPnl.monthlyConsumablesCost : null,
      commercial_monthly_emi: result.commercialPnl ? result.commercialPnl.monthlyEmi : null,
      commercial_monthly_net_cashflow: result.commercialPnl ? result.commercialPnl.monthlyNetCashFlow : null,
      commercial_cost_fsma_12x18_color: COMMERCIAL_PRINT_BENCHMARKS.costFsma12x18Color,
      commercial_cost_fsma_a4_color: COMMERCIAL_PRINT_BENCHMARKS.costFsmaA4Color,
      commercial_cost_fsma_bw: COMMERCIAL_PRINT_BENCHMARKS.costFsmaBw,
      commercial_cost_paper_12x18_300gsm: COMMERCIAL_PRINT_BENCHMARKS.costPaper12x18_300gsm,
      commercial_sell_price_reseller: COMMERCIAL_PRINT_BENCHMARKS.sellPriceReseller,
      commercial_sell_price_retail: COMMERCIAL_PRINT_BENCHMARKS.sellPriceRetail,
      commercial_promo_free_sheets: COMMERCIAL_PRINT_BENCHMARKS.promoFreeSheets,
      commercial_promo_retail_value: result.commercialPnl ? result.commercialPnl.promoRetailValue : null,
      commercial_funding_status: COMMERCIAL_PRINT_BENCHMARKS.fundingStatus,
      black_consumable_label: result.consumables.blackUnitLabel,
      black_consumable_units_monthly: Number(result.consumables.blackUnitsMonthly.toFixed(2)),
      color_consumable_label: result.consumables.colorUnitLabel,
      color_consumable_units_monthly: Number(result.consumables.colorSetsMonthly.toFixed(2)),
      consumables_budget_monthly: result.consumables.monthlyBudget,
      consumables_budget_annual: result.consumables.annualBudget,
      report_id: reportMeta.reportId,
      report_generated_on: reportMeta.generatedAtIso,
      offer_valid_until: reportMeta.expiryDateIso,
      offer_text: buildOfferText(reportMeta),
      monthly_savings: result.monthlySavings,
      annual_savings: result.annualSavings,
      payback_months: Number.isFinite(result.paybackMonths) ? Number(result.paybackMonths.toFixed(2)) : null,
      roi_pct: Number(result.roiPct.toFixed(2)),
      page_url: window.location.href,
      submitted_at: new Date().toISOString()
    };

    var requests = [];
    var crmLeadReference = "";

    if (endpointConfigured(config.crmWebhookUrl)) {
      requests.push(
        postJson(config.crmWebhookUrl, payload).then(function (response) {
          return parseResponseBody(response).then(function (body) {
            crmLeadReference = parseLeadReference(body);
            return { ok: response.ok, status: response.status, body: body };
          });
        })
      );
    }

    if (endpointConfigured(config.teleSalesWebhookUrl)) {
      requests.push(postJson(config.teleSalesWebhookUrl, {
        notification_type: "roi_report_generated",
        sla_target_minutes: 15,
        recipients: config.reps || [],
        lead: payload
      }));
    }

    if (!requests.length) {
      return Promise.resolve({ leadReference: "", reportId: reportMeta.reportId });
    }

    return Promise.allSettled(requests).then(function () {
      return {
        leadReference: crmLeadReference,
        reportId: reportMeta.reportId
      };
    });
  }

  function uploadPocFile(context, file) {
    var uploadUrl = endpointConfigured(config.crmPocUploadWebhookUrl)
      ? config.crmPocUploadWebhookUrl
      : config.crmWebhookUrl;

    if (!endpointConfigured(uploadUrl)) {
      return Promise.resolve({
        ok: false,
        message: "POC upload webhook is not configured yet."
      });
    }

    var formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("form_type", "roi_poc_file_upload");
    formData.append("form_context", "physical_demo_file_upload");
    formData.append("report_id", context.reportMeta.reportId);
    formData.append("report_generated_on", context.reportMeta.generatedAtIso);
    formData.append("offer_valid_until", context.reportMeta.expiryDateIso);
    formData.append("company_name", context.data.companyName || "");
    formData.append("decision_maker", context.data.decisionMaker || "");
    formData.append("industry", context.result.industryBenchmark.label);
    formData.append("selected_model", context.result.profile.name);
    formData.append("crm_lead_reference", context.leadReference || "");
    formData.append("poc_requested", "true");
    formData.append("lead_stage", "POC Requested");
    formData.append("commercial_selling_mode", context.result.commercialPnl ? context.result.commercialPnl.selectedMode : "");
    formData.append("commercial_monthly_net_cashflow", context.result.commercialPnl ? String(context.result.commercialPnl.monthlyNetCashFlow) : "");
    formData.append("file_name", file.name);
    formData.append("file_size_bytes", String(file.size));
    formData.append("file_type", file.type || getFileExtension(file.name));
    formData.append("page_url", window.location.href);
    formData.append("submitted_at", new Date().toISOString());

    return postFormData(uploadUrl, formData).then(function (response) {
      return parseResponseBody(response).then(function () {
        if (!response.ok) {
          return {
            ok: false,
            message: "Upload endpoint rejected the file. Please check webhook configuration."
          };
        }

        var notifyPromise = Promise.resolve();
        if (endpointConfigured(config.teleSalesWebhookUrl)) {
          notifyPromise = postJson(config.teleSalesWebhookUrl, {
            notification_type: "poc_file_uploaded",
            priority: "high",
            sla_target_minutes: 15,
            recipients: config.reps || [],
            lead: {
              report_id: context.reportMeta.reportId,
              company_name: context.data.companyName || "",
              selected_model: context.result.profile.name,
              crm_lead_reference: context.leadReference || "",
              poc_requested: true,
              lead_stage: "POC Requested",
              file_name: file.name,
              file_size_bytes: file.size
            }
          });
        }

        return notifyPromise.then(function () {
          return { ok: true };
        });
      });
    }).catch(function () {
      return {
        ok: false,
        message: "Unable to upload file at the moment. Please try again."
      };
    });
  }

  function initRoiCalculator() {
    var form = qs("#roi-form");
    if (!form) return;

    var message = qs("#roi-message");
    var pocFileInput = qs("#poc-file");
    var pocUploadBtn = qs("#poc-upload-btn");
    var pocUploadMessage = qs("#poc-upload-message");
    var commercialPricingWrap = qs("#commercial-pricing-wrap");
    var latestReportContext = null;

    function setPocMessage(text, isSuccess) {
      if (!pocUploadMessage) return;
      pocUploadMessage.textContent = text;
      pocUploadMessage.classList.remove("is-success", "is-error");
      pocUploadMessage.classList.add(isSuccess ? "is-success" : "is-error");
    }

    function renderCommercialInputState(industry) {
      if (!commercialPricingWrap) return;
      if (industry === "commercial") {
        commercialPricingWrap.classList.remove("is-hidden");
      } else {
        commercialPricingWrap.classList.add("is-hidden");
      }
    }

    function recomputeAndRender() {
      renderCommercialInputState(qs("#industry", form).value);
      var data = getFormData(form);
      var recommendation = recommendModel(data);
      data.modelKey = recommendation.modelKey;
      qs("#model", form).value = recommendation.modelKey;

      var profile = MODEL_PROFILES[data.modelKey];
      var industryBenchmark = INDUSTRY_BENCHMARKS[data.industry];
      var ageFactors = AGE_FACTORS[data.fleetAge];
      var criticalityFactors = CRITICALITY_FACTORS[data.downtimeCriticality];

      if (!profile || !industryBenchmark || !ageFactors || !criticalityFactors) {
        return null;
      }

      renderModelRecommendation(recommendation, profile);

      var result = calculateRoi(data, profile, industryBenchmark, ageFactors, criticalityFactors, recommendation);
      renderResults(data, result);
      return { data: data, result: result };
    }

    qsa("input, select", form).forEach(function (field) {
      field.addEventListener("input", recomputeAndRender);
      field.addEventListener("change", recomputeAndRender);
    });

    if (pocUploadBtn && pocFileInput) {
      pocUploadBtn.addEventListener("click", function () {
        if (!latestReportContext) {
          setPocMessage("Generate ROI report first so file can be mapped to a Report ID.", false);
          return;
        }

        var file = pocFileInput.files && pocFileInput.files[0];
        var validation = validatePocFile(file);
        if (!validation.ok) {
          setPocMessage(validation.message, false);
          return;
        }

        pocUploadBtn.disabled = true;
        setPocMessage("Uploading file and flagging lead as POC Requested...", true);

        uploadPocFile(latestReportContext, file).then(function (uploadResult) {
          pocUploadBtn.disabled = false;

          if (!uploadResult.ok) {
            setPocMessage(uploadResult.message || "File upload failed. Please try again.", false);
            return;
          }

          setPocMessage("POC file uploaded successfully. Lead flagged as POC Requested.", true);

          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "roi_poc_file_uploaded",
            report_id: latestReportContext.reportMeta.reportId,
            selected_model: latestReportContext.result.profile.name,
            file_extension: getFileExtension(file.name),
            file_size_mb: Number((file.size / (1024 * 1024)).toFixed(2))
          });
        });
      });
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var payload = recomputeAndRender();
      if (!payload) {
        message.textContent = "Unable to generate report. Please review your input selections.";
        message.classList.remove("is-success");
        message.classList.add("is-error");
        return;
      }

      var reportMeta = generateReportMeta();
      latestReportContext = {
        data: payload.data,
        result: payload.result,
        reportMeta: reportMeta,
        leadReference: ""
      };

      var pdfResult = generatePdf(payload.data, payload.result, reportMeta);
      if (!pdfResult.ok) {
        message.textContent = pdfResult.message;
        message.classList.remove("is-success");
        message.classList.add("is-error");
      } else {
        message.textContent = "ROI report ready. PDF download started.";
        message.classList.remove("is-error");
        message.classList.add("is-success");
      }

      sendRoiLead(payload.data, payload.result, reportMeta).then(function (leadResult) {
        if (latestReportContext && latestReportContext.reportMeta.reportId === leadResult.reportId) {
          latestReportContext.leadReference = leadResult.leadReference || "";
        }
      });

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "roi_report_generated",
        report_id: reportMeta.reportId,
        selected_model: payload.result.profile.name,
        capex_mrp: Math.round(payload.result.pricing.capexMrp),
        opex_lease_monthly: Math.round(payload.result.pricing.leaseMonthly),
        monthly_savings: Math.round(payload.result.monthlySavings),
        annual_savings: Math.round(payload.result.annualSavings),
        commercial_selling_mode: payload.result.commercialPnl ? payload.result.commercialPnl.selectedMode : null,
        monthly_gross_revenue: payload.result.commercialPnl ? Math.round(payload.result.commercialPnl.monthlyGrossRevenue) : null,
        monthly_net_cashflow: payload.result.commercialPnl ? Math.round(payload.result.commercialPnl.monthlyNetCashFlow) : null,
        consumables_budget_monthly: Math.round(payload.result.consumables.monthlyBudget),
        payback_months: Number.isFinite(payload.result.paybackMonths) ? Number(payload.result.paybackMonths.toFixed(1)) : null,
        roi_pct: Number(payload.result.roiPct.toFixed(1)),
        industry: payload.result.industryBenchmark.label
      });
    });

    recomputeAndRender();
  }

  document.addEventListener("DOMContentLoaded", initRoiCalculator);
})();
