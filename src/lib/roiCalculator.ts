export type BusinessType = "home" | "small_office" | "corporate" | "print_shop" | "education_legal";
export type PaperSize = "a4" | "a3" | "a3_plus";
export type PaperType = "plain" | "photo" | "art" | "sticker" | "texture" | "other";
export type UsageType = "cost" | "balanced" | "quality";
export type CurrentMachineType = "rc" | "laser" | "ink_tank" | "none";

export type RoiInputs = {
  businessType: BusinessType;
  monoPages: number;
  colorPages: number;
  paperSize: PaperSize;
  paperType: PaperType;
  usageType: UsageType;
  currentMachine: CurrentMachineType;
  usesRcMachine: boolean;
  currentMonoCost?: number;
  currentColorCost?: number;
  monoSellingPrice?: number;
  colorSellingPrice?: number;
};

export type RoiModel = {
  id: string;
  name: string;
  family: string;
  route: string;
  capex: number;
  monoBaseCpp: number;
  colorBaseCpp: number;
  bestFor: string;
  reason: string;
  speedNote: string;
};

export type RoiSummary = {
  recommendation: RoiModel;
  totalPages: number;
  paperCostPerPage: number;
  currentMonoCpp: number;
  currentColorCpp: number;
  suggestedMonoCpp: number;
  suggestedColorCpp: number;
  currentMonthlySpend: number;
  suggestedMonthlySpend: number;
  monthlySavings: number;
  yearlySavings: number;
  roiMonths: number | null;
  savingsPercent: number;
  averageSuggestedCpp: number;
  whyRecommended: string;
  industryHeading: string;
  industryBody: string;
  efficiencyGainPercent: number;
  currentMonthlyProfit: number;
  suggestedMonthlyProfit: number;
  dailyProfitIncrease: number;
  rcSwitchMessage?: string;
};

export const businessTypeOptions = [
  {
    id: "home" as const,
    label: "Home",
    description: "Low-volume in-house printing with simple cost control.",
    defaults: {
      monoPages: 400,
      colorPages: 200,
      paperSize: "a4" as const,
      paperType: "plain" as const,
      usageType: "cost" as const,
      currentMachine: "none" as const,
      usesRcMachine: false,
      monoSellingPrice: 2,
      colorSellingPrice: 8,
    },
  },
  {
    id: "small_office" as const,
    label: "Small Office",
    description: "A4 business printing with compact running cost focus.",
    defaults: {
      monoPages: 2500,
      colorPages: 700,
      paperSize: "a4" as const,
      paperType: "plain" as const,
      usageType: "balanced" as const,
      currentMachine: "laser" as const,
      usesRcMachine: false,
      monoSellingPrice: 2,
      colorSellingPrice: 8,
    },
  },
  {
    id: "corporate" as const,
    label: "Corporate / Big Office",
    description: "Shared office printing with uptime and cost clarity.",
    defaults: {
      monoPages: 20000,
      colorPages: 5000,
      paperSize: "a4" as const,
      paperType: "plain" as const,
      usageType: "balanced" as const,
      currentMachine: "laser" as const,
      usesRcMachine: false,
      monoSellingPrice: 2,
      colorSellingPrice: 5,
    },
  },
  {
    id: "print_shop" as const,
    label: "Print Shop / Photocopy Centre",
    description: "Daily output, margin, and machine-upgrade decisions.",
    defaults: {
      monoPages: 60000,
      colorPages: 10000,
      paperSize: "a3" as const,
      paperType: "plain" as const,
      usageType: "cost" as const,
      currentMachine: "rc" as const,
      usesRcMachine: true,
      monoSellingPrice: 2,
      colorSellingPrice: 5,
    },
  },
  {
    id: "education_legal" as const,
    label: "Education / Legal",
    description: "Bulk document printing with stability and predictable spend.",
    defaults: {
      monoPages: 18000,
      colorPages: 2500,
      paperSize: "a4" as const,
      paperType: "plain" as const,
      usageType: "balanced" as const,
      currentMachine: "laser" as const,
      usesRcMachine: false,
      monoSellingPrice: 2,
      colorSellingPrice: 5,
    },
  },
] as const;

export const paperSizeOptions = [
  { id: "a4" as const, label: "A4" },
  { id: "a3" as const, label: "A3" },
  { id: "a3_plus" as const, label: "A3+" },
] as const;

export const paperTypeOptions = [
  { id: "plain" as const, label: "Plain paper" },
  { id: "photo" as const, label: "Photo paper" },
  { id: "art" as const, label: "Art paper" },
  { id: "sticker" as const, label: "Sticker" },
  { id: "texture" as const, label: "Texture" },
  { id: "other" as const, label: "Any other" },
] as const;

export const usageTypeOptions = [
  { id: "cost" as const, label: "Cost Focused" },
  { id: "balanced" as const, label: "Balanced" },
  { id: "quality" as const, label: "Quality Focused" },
] as const;

export const currentMachineOptions = [
  { id: "rc" as const, label: "RC Machine" },
  { id: "laser" as const, label: "Laser Printer" },
  { id: "ink_tank" as const, label: "Ink Tank" },
  { id: "none" as const, label: "No Machine / Outsourced" },
] as const;

const roiModels: Record<string, RoiModel> = {
  l3250: {
    id: "l3250",
    name: "Epson EcoTank L3250",
    family: "Epson EcoTank",
    route: "/epson-ecotank",
    capex: 14999,
    monoBaseCpp: 0.18,
    colorBaseCpp: 0.55,
    bestFor: "Home users and low-volume A4 color printing.",
    reason: "Low entry cost and simple in-house color printing for everyday needs.",
    speedNote: "Best for basic A4 printing with low running cost.",
  },
  l4360: {
    id: "l4360",
    name: "Epson EcoTank L4360",
    family: "Epson EcoTank",
    route: "/epson-ecotank",
    capex: 24999,
    monoBaseCpp: 0.16,
    colorBaseCpp: 0.52,
    bestFor: "Home offices that want better duplex workflow and reliable color.",
    reason: "Adds stronger business convenience without moving into heavy office CAPEX.",
    speedNote: "A good balance of home-office convenience and color economy.",
  },
  l6270: {
    id: "l6270",
    name: "Epson EcoTank L6270",
    family: "Epson EcoTank",
    route: "/epson-ecotank",
    capex: 32999,
    monoBaseCpp: 0.15,
    colorBaseCpp: 0.48,
    bestFor: "Small offices that need lower color cost with stronger daily throughput.",
    reason: "Better fit for repeat A4 office work and higher daily print expectation.",
    speedNote: "Suitable when A4 volume grows beyond basic home usage.",
  },
  m2120: {
    id: "m2120",
    name: "Epson M2120",
    family: "Epson Mono EcoTank",
    route: "/epson-ecotank",
    capex: 16999,
    monoBaseCpp: 0.12,
    colorBaseCpp: 0,
    bestFor: "Home and low-volume mono printing.",
    reason: "Simple mono-only choice when color volume is negligible and cost matters most.",
    speedNote: "Best for low-volume black-and-white work.",
  },
  m3170: {
    id: "m3170",
    name: "Epson M3170",
    family: "Epson Mono EcoTank",
    route: "/epson-ecotank",
    capex: 27999,
    monoBaseCpp: 0.1,
    colorBaseCpp: 0,
    bestFor: "Small offices with recurring mono-heavy print demand.",
    reason: "Improves mono economics for document-heavy A4 work.",
    speedNote: "Good mono fit for small office counters and admin teams.",
  },
  c8100: {
    id: "c8100",
    name: "Epson EM-C8100",
    family: "Epson WorkForce",
    route: "/epson-em-c8100",
    capex: 160000,
    monoBaseCpp: 0.05,
    colorBaseCpp: 0.55,
    bestFor: "Medium-volume A3 color printing in offices, education, and copy centres.",
    reason: "Strong mid-volume A3 color fit with low running cost and wider business use.",
    speedNote: "Supports profitable everyday A3 color work without jumping to production CAPEX.",
  },
  m5500: {
    id: "m5500",
    name: "Epson AM-M5500",
    family: "Epson WorkForce",
    route: "/epson-m5500",
    capex: 350000,
    monoBaseCpp: 0.04,
    colorBaseCpp: 0,
    bestFor: "Mono-heavy offices and copy shops replacing older RC-style setups.",
    reason: "Best route for bulk A3 black-and-white work with lower running cost and better service stability.",
    speedNote: "Very strong fit for RC-machine replacement and heavy mono workflows.",
  },
  m21000: {
    id: "m21000",
    name: "Epson WF-M21000",
    family: "Epson WorkForce Enterprise",
    route: "/epson-workforce",
    capex: 950000,
    monoBaseCpp: 0.03,
    colorBaseCpp: 0,
    bestFor: "High-volume mono departments, education hubs, and central print rooms.",
    reason: "Built for sustained bulk black-and-white output at enterprise scale.",
    speedNote: "Best mono option when monthly B/W volume is very high.",
  },
  c21000: {
    id: "c21000",
    name: "Epson WF-C21000",
    family: "Epson WorkForce Enterprise",
    route: "/epson-workforce",
    capex: 1100000,
    monoBaseCpp: 0.04,
    colorBaseCpp: 0.45,
    bestFor: "High-volume A3 color work in corporate, education, and central print environments.",
    reason: "Enterprise A3 color choice for very high monthly page volume.",
    speedNote: "Right fit when business color volume outgrows mid-range A3 devices.",
  },
  c4065: {
    id: "c4065",
    name: "Konica Minolta C4065",
    family: "Konica Minolta Production",
    route: "/konica-production",
    capex: 950000,
    monoBaseCpp: 0.14,
    colorBaseCpp: 0.95,
    bestFor: "Print shops that need premium media handling and commercial-color flexibility.",
    reason: "Production fit for high-value print jobs, better media support, and commercial color output.",
    speedNote: "Best for premium print shops moving beyond basic office-style color devices.",
  },
  c4080: {
    id: "c4080",
    name: "Konica Minolta C4080",
    family: "Konica Minolta Production",
    route: "/konica-production",
    capex: 1150000,
    monoBaseCpp: 0.12,
    colorBaseCpp: 0.88,
    bestFor: "Premium production print environments with demanding substrates and color expectations.",
    reason: "Higher-value production recommendation for premium media, special jobs, and serious commercial color throughput.",
    speedNote: "Best when print quality and media flexibility matter more than lowest CPP alone.",
  },
};

const paperSizeMultiplier: Record<PaperSize, number> = {
  a4: 1,
  a3: 2,
  a3_plus: 2.6,
};

const paperTypeMultiplier: Record<PaperType, number> = {
  plain: 1,
  photo: 2.5,
  art: 2,
  sticker: 2.8,
  texture: 2.4,
  other: 1.8,
};

const currentMachineBaseCpp: Record<Exclude<CurrentMachineType, "none">, { mono: number; color: number }> = {
  rc: { mono: 1.8, color: 5.2 },
  laser: { mono: 0.72, color: 3.1 },
  ink_tank: { mono: 0.15, color: 0.55 },
};

const noMachineBaseCppByBusiness: Record<BusinessType, { mono: number; color: number }> = {
  home: { mono: 1.6, color: 7.6 },
  small_office: { mono: 1.45, color: 6.2 },
  corporate: { mono: 1.1, color: 4.1 },
  print_shop: { mono: 1.2, color: 3.6 },
  education_legal: { mono: 1.05, color: 3.8 },
};

const currentMachineRisk: Record<CurrentMachineType, number> = {
  rc: 0.36,
  laser: 0.22,
  ink_tank: 0.12,
  none: 0.18,
};

const recommendedMachineRisk: Record<string, number> = {
  l3250: 0.08,
  l4360: 0.08,
  l6270: 0.07,
  m2120: 0.07,
  m3170: 0.07,
  c8100: 0.06,
  m5500: 0.05,
  m21000: 0.04,
  c21000: 0.04,
  c4065: 0.06,
  c4080: 0.06,
};

const specialMediaTypes: PaperType[] = ["photo", "art", "sticker", "texture", "other"];

export const getBusinessDefaults = (businessType: BusinessType) =>
  businessTypeOptions.find((option) => option.id === businessType)?.defaults ?? businessTypeOptions[0].defaults;

export const calculatePaperCostPerPage = (paperSize: PaperSize, paperType: PaperType) =>
  0.4 * paperSizeMultiplier[paperSize] * paperTypeMultiplier[paperType];

const getCurrentBaseCpp = (
  businessType: BusinessType,
  currentMachine: CurrentMachineType,
  usesRcMachine: boolean,
) => {
  if (usesRcMachine) {
    return currentMachineBaseCpp.rc;
  }

  if (currentMachine === "none") {
    return noMachineBaseCppByBusiness[businessType];
  }

  return currentMachineBaseCpp[currentMachine];
};

export const recommendRoiModel = (inputs: RoiInputs): RoiModel => {
  const totalPages = inputs.monoPages + inputs.colorPages;
  const colorShare = totalPages > 0 ? inputs.colorPages / totalPages : 0;
  const monoHeavy = inputs.monoPages >= Math.max(inputs.colorPages * 3, 1500);
  const highColor = colorShare >= 0.32 || inputs.colorPages >= 12000;
  const specialMedia = specialMediaTypes.includes(inputs.paperType);
  const premiumProductionNeed =
    inputs.paperSize === "a3_plus" || specialMedia || (inputs.businessType === "print_shop" && inputs.usageType === "quality");

  if (inputs.businessType === "home" || inputs.businessType === "small_office") {
    if (monoHeavy && inputs.colorPages <= 200) {
      return totalPages > 2000 ? roiModels.m3170 : roiModels.m2120;
    }

    if (inputs.paperSize !== "a4" || totalPages > 3000) {
      return roiModels.l6270;
    }

    if (inputs.usageType === "quality" || inputs.colorPages > 800 || inputs.paperType === "photo") {
      return roiModels.l4360;
    }

    return roiModels.l3250;
  }

  if (inputs.businessType === "corporate" || inputs.businessType === "education_legal") {
    if (monoHeavy && inputs.monoPages >= 100000) {
      return roiModels.m21000;
    }

    if (highColor && totalPages >= 80000) {
      return roiModels.c21000;
    }

    if (monoHeavy) {
      return roiModels.m5500;
    }

    if (inputs.colorPages >= 25000) {
      return roiModels.c21000;
    }

    return roiModels.c8100;
  }

  if (premiumProductionNeed) {
    return totalPages >= 80000 || inputs.usageType === "quality" ? roiModels.c4080 : roiModels.c4065;
  }

  if (monoHeavy && inputs.monoPages >= 120000) {
    return roiModels.m21000;
  }

  if (monoHeavy) {
    return roiModels.m5500;
  }

  if (highColor && totalPages >= 90000) {
    return roiModels.c21000;
  }

  if (highColor) {
    return roiModels.c8100;
  }

  return roiModels.c4065;
};

export const buildRoiSummary = (inputs: RoiInputs): RoiSummary => {
  const recommendation = recommendRoiModel(inputs);
  const totalPages = inputs.monoPages + inputs.colorPages;
  const paperCostPerPage = calculatePaperCostPerPage(inputs.paperSize, inputs.paperType);
  const currentBaseCpp = getCurrentBaseCpp(inputs.businessType, inputs.currentMachine, inputs.usesRcMachine);

  const currentMonoCpp = inputs.currentMonoCost ?? currentBaseCpp.mono + paperCostPerPage;
  const currentColorCpp = inputs.currentColorCost ?? currentBaseCpp.color + paperCostPerPage;
  const suggestedMonoCpp = recommendation.monoBaseCpp + paperCostPerPage;
  const suggestedColorCpp =
    recommendation.colorBaseCpp > 0
      ? recommendation.colorBaseCpp + paperCostPerPage
      : inputs.colorPages > 0
        ? currentColorCpp
        : 0;

  const currentMonthlySpend = inputs.monoPages * currentMonoCpp + inputs.colorPages * currentColorCpp;
  const suggestedMonthlySpend = inputs.monoPages * suggestedMonoCpp + inputs.colorPages * suggestedColorCpp;
  const monthlySavings = Math.max(currentMonthlySpend - suggestedMonthlySpend, 0);
  const yearlySavings = monthlySavings * 12;
  const roiMonths = monthlySavings > 0 ? recommendation.capex / monthlySavings : null;
  const savingsPercent = currentMonthlySpend > 0 ? (monthlySavings / currentMonthlySpend) * 100 : 0;
  const averageSuggestedCpp = totalPages > 0 ? suggestedMonthlySpend / totalPages : 0;

  const whyParts = [recommendation.reason];
  if (inputs.paperSize !== "a4") {
    whyParts.push(`It supports your ${inputs.paperSize.toUpperCase().replace("_PLUS", "+")} requirement better than basic A4 devices.`);
  }
  if (specialMediaTypes.includes(inputs.paperType)) {
    whyParts.push(`Your ${inputs.paperType.replace("_", " ")} requirement pushes the fit toward a more capable print engine.`);
  }
  if (inputs.usesRcMachine && recommendation.id === "m5500") {
    whyParts.push("It is a strong upgrade path for RC-machine users who want lower mono running cost.");
  }
  const whyRecommended = whyParts.join(" ");

  const monoSellingPrice = inputs.monoSellingPrice ?? 2;
  const colorSellingPrice = inputs.colorSellingPrice ?? 5;
  const currentMonthlyProfit =
    inputs.businessType === "print_shop"
      ? Math.max(monoSellingPrice - currentMonoCpp, 0) * inputs.monoPages +
        Math.max(colorSellingPrice - currentColorCpp, 0) * inputs.colorPages
      : 0;
  const suggestedMonthlyProfit =
    inputs.businessType === "print_shop"
      ? Math.max(monoSellingPrice - suggestedMonoCpp, 0) * inputs.monoPages +
        Math.max(colorSellingPrice - suggestedColorCpp, 0) * inputs.colorPages
      : 0;
  const dailyProfitIncrease =
    inputs.businessType === "print_shop" ? Math.max((suggestedMonthlyProfit - currentMonthlyProfit) / 26, 0) : 0;

  const selectedMachineKey = inputs.usesRcMachine ? "rc" : inputs.currentMachine;
  const efficiencyGainPercent = Math.max(
    0,
    Math.round(
      ((currentMachineRisk[selectedMachineKey] - (recommendedMachineRisk[recommendation.id] ?? 0.06)) /
        Math.max(currentMachineRisk[selectedMachineKey], 0.01)) *
        100,
    ),
  );

  let industryHeading = "Best fit for your business";
  let industryBody = recommendation.speedNote;

  if (inputs.businessType === "print_shop") {
    industryHeading = "Print shop impact";
    industryBody = `Estimated daily profit increase of INR ${dailyProfitIncrease.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    })} based on your selling price and the recommended in-house print cost.`;
  } else if (inputs.businessType === "corporate") {
    industryHeading = "Office impact";
    industryBody = `Estimated cost reduction plus about ${efficiencyGainPercent}% better workflow stability versus your current setup.`;
  } else if (inputs.businessType === "education_legal") {
    industryHeading = "Bulk printing stability";
    industryBody = "Built for repetitive document packs, better uptime, and more predictable operating cost.";
  } else if (inputs.businessType === "small_office") {
    industryHeading = "Small office impact";
    industryBody = "Keeps monthly print cost predictable while reducing dependence on outside printing.";
  } else {
    industryHeading = "Home printing impact";
    industryBody = "Moves everyday printing in-house with far better control over per-page cost.";
  }

  const rcSwitchMessage =
    inputs.usesRcMachine || inputs.currentMachine === "rc"
      ? `Most print shops using RC machines save 30-50% after switching. Based on your inputs, the estimated reduction is ${Math.round(
          savingsPercent,
        )}% per month.`
      : undefined;

  return {
    recommendation,
    totalPages,
    paperCostPerPage,
    currentMonoCpp,
    currentColorCpp,
    suggestedMonoCpp,
    suggestedColorCpp,
    currentMonthlySpend,
    suggestedMonthlySpend,
    monthlySavings,
    yearlySavings,
    roiMonths,
    savingsPercent,
    averageSuggestedCpp,
    whyRecommended,
    industryHeading,
    industryBody,
    efficiencyGainPercent,
    currentMonthlyProfit,
    suggestedMonthlyProfit,
    dailyProfitIncrease,
    rcSwitchMessage,
  };
};
