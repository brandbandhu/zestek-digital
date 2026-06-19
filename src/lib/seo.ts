export const SITE_URL = "https://zestek.in";
export const SITE_NAME = "Zestek Digital Solutions";
export const LEGAL_NAME = "Zestek Digital LLP";
export const DEFAULT_OG_IMAGE = "/zestek-logo.png";
export const DEFAULT_OG_IMAGE_ALT = "Zestek Digital Solutions logo";
export const DEFAULT_LOCALE = "en_IN";
export const DEFAULT_LANGUAGE = "en-IN";

const SITE_KEYWORD_BASE = [
  "Zestek Digital LLP",
  "Zestek Digital Solutions",
  "printer solutions Mumbai",
  "printer dealer Mumbai",
  "managed print services Mumbai",
  "business printer solutions India",
  "Epson printer dealer India",
  "Konica Minolta dealer India",
  "commercial printer solutions India",
];

export type SeoStructuredData = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type SeoKeywordInput = {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
};

const titleCaseWord = (word: string) => {
  if (!word) {
    return "";
  }

  if (word.toUpperCase() === word && word.length <= 4) {
    return word;
  }

  return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
};

export const humanizeSlug = (value: string) =>
  value
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map(titleCaseWord)
    .join(" ");

const SITE_KEYWORD_GROUPS: Array<{ pattern: RegExp; keywords: string[] }> = [
  {
    pattern: /^\/$/,
    keywords: [
      "Epson printers Mumbai",
      "Konica Minolta printers India",
      "printer ROI calculator",
      "office printer solutions",
      "business printing support",
    ],
  },
  {
    pattern: /^\/about$/,
    keywords: [
      "printer solutions company Mumbai",
      "Epson partner Mumbai",
      "Konica Minolta partner Mumbai",
      "print consulting India",
      "managed print consulting",
    ],
  },
  {
    pattern: /^(\/service|\/contact)$/,
    keywords: [
      "printer service support Mumbai",
      "printer AMC Mumbai",
      "printer installation support",
      "printer consumables planning",
      "Epson warranty support",
    ],
  },
  {
    pattern: /^\/corporate-solutions$/,
    keywords: [
      "managed print services India",
      "office printer fleet management",
      "print cost optimization",
      "MPS provider Mumbai",
      "enterprise print support",
    ],
  },
  {
    pattern: /^\/epson-ecotank$/,
    keywords: [
      "Epson EcoTank printers India",
      "EcoTank price in India",
      "A3 ink tank printer",
      "low cost color printer",
      "Epson printer dealer Mumbai",
    ],
  },
  {
    pattern: /^\/epson-workforce$/,
    keywords: [
      "Epson WorkForce printers India",
      "business inkjet printer",
      "A3 multifunction printer for office",
      "enterprise inkjet printer",
      "WorkForce printer price Mumbai",
    ],
  },
  {
    pattern: /^\/epson-em-c8100$/,
    keywords: [
      "Epson EM-C8100 printer India",
      "Epson C8100 print shop printer",
      "A3 printer for photocopy centre",
      "low cost colour printer for print shop",
      "high speed Epson printer for business",
      "digital printing machine for print business",
    ],
  },
  {
    pattern: /^\/epson-m5500$/,
    keywords: [
      "Epson M5500 printer India",
      "RC machine alternative India",
      "xerox shop printer low cost",
      "A3 mono multifunction printer India",
      "best printer for xerox business",
      "replace Ricoh machine printer",
      "bulk printing machine India",
    ],
  },
  {
    pattern: /^\/konica-production$/,
    keywords: [
      "Konica Minolta production printer India",
      "AccurioPress",
      "commercial print machine Mumbai",
      "production printer quote India",
      "commercial print solutions",
    ],
  },
  {
    pattern: /^\/photocopy-commercial$/,
    keywords: [
      "photocopier printers",
      "commercial print printers",
      "copy shop printer India",
      "mono production printer",
      "photocopy centre printer",
    ],
  },
  {
    pattern: /^\/roi-calculator$/,
    keywords: [
      "printer ROI calculator",
      "print cost calculator India",
      "business printer savings estimator",
      "managed print ROI",
      "printer savings calculator",
    ],
  },
  {
    pattern: /^\/landing-page$/,
    keywords: [
      "Epson M5500",
      "RC machine replacement",
      "bulk monochrome printing",
      "print business campaign",
      "low running cost printer",
    ],
  },
  {
    pattern: /^\/insights\/.+$/,
    keywords: [
      "print insights",
      "printer buying guide",
      "business printing blog",
      "Epson printer advice",
      "Konica Minolta printing insights",
    ],
  },
  {
    pattern: /^\/commercial\/.+$/,
    keywords: [
      "commercial printer solutions",
      "production press",
      "photocopier and commercial segment",
      "printer dealer Mumbai",
      "commercial print equipment",
    ],
  },
];

const dedupeKeywords = (items: string[]) => {
  const seen = new Set<string>();
  const keywords: string[] = [];

  for (const item of items) {
    const normalized = item.trim();
    if (!normalized) {
      continue;
    }

    const key = normalized.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    keywords.push(normalized);
  }

  return keywords;
};

export const buildSeoKeywords = ({ title, description, canonicalPath, keywords }: SeoKeywordInput) => {
  const normalizedPath = canonicalPath?.split("?")[0].replace(/\/+$/, "") || "/";
  const routeKeywords =
    SITE_KEYWORD_GROUPS.find((group) => group.pattern.test(normalizedPath))?.keywords ?? [
      "printer solutions Mumbai",
      "business printer support India",
      "managed print services",
    ];

  const titleKeywords = title
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 2);

  return dedupeKeywords([
    ...SITE_KEYWORD_BASE,
    ...routeKeywords,
    ...titleKeywords,
    ...(keywords ?? []),
  ]);
};

export const toAbsoluteUrl = (pathOrUrl: string) => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${normalizedPath}`;
};

export const getCanonicalUrl = (canonicalPath?: string) => {
  if (canonicalPath) {
    return toAbsoluteUrl(canonicalPath);
  }

  if (typeof window === "undefined") {
    return SITE_URL;
  }

  const path = `${window.location.pathname}${window.location.search}`;
  return toAbsoluteUrl(path);
};

export const buildBreadcrumbItems = (canonicalPath: string, currentLabel?: string): BreadcrumbItem[] => {
  const normalizedPath = canonicalPath.split("?")[0].replace(/\/+$/, "") || "/";

  if (normalizedPath === "/") {
    return [{ name: "Home", path: "/" }];
  }

  const segments = normalizedPath.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: "Home", path: "/" }];

  segments.forEach((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const isCurrent = index === segments.length - 1;
    items.push({
      name: isCurrent && currentLabel ? currentLabel : humanizeSlug(segment),
      path,
    });
  });

  return items;
};

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): SeoStructuredData => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path),
  })),
});

export const buildWebPageSchema = ({
  title,
  description,
  canonicalPath,
  image,
}: {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
}): SeoStructuredData => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: getCanonicalUrl(canonicalPath),
  inLanguage: DEFAULT_LANGUAGE,
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: toAbsoluteUrl(image ?? DEFAULT_OG_IMAGE),
  },
  publisher: {
    "@type": "Organization",
    name: LEGAL_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    },
  },
});

export const buildArticleSchema = ({
  headline,
  description,
  canonicalPath,
  image,
  keywords,
  section,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  canonicalPath: string;
  image?: string;
  keywords?: string[];
  section?: string;
  datePublished?: string;
  dateModified?: string;
}): SeoStructuredData => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  description,
  mainEntityOfPage: getCanonicalUrl(canonicalPath),
  url: getCanonicalUrl(canonicalPath),
  image: [toAbsoluteUrl(image ?? DEFAULT_OG_IMAGE)],
  author: {
    "@type": "Organization",
    name: LEGAL_NAME,
  },
  publisher: {
    "@type": "Organization",
    name: LEGAL_NAME,
    logo: {
      "@type": "ImageObject",
      url: toAbsoluteUrl(DEFAULT_OG_IMAGE),
    },
  },
  articleSection: section,
  keywords,
  datePublished,
  dateModified: dateModified ?? datePublished,
  inLanguage: DEFAULT_LANGUAGE,
});

export const buildProductSchema = ({
  name,
  description,
  canonicalPath,
  image,
  brand,
  category,
  officialUrl,
}: {
  name: string;
  description: string;
  canonicalPath: string;
  image?: string;
  brand: string;
  category: string;
  officialUrl?: string;
}): SeoStructuredData => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  url: getCanonicalUrl(canonicalPath),
  image: [toAbsoluteUrl(image ?? DEFAULT_OG_IMAGE)],
  brand: {
    "@type": "Brand",
    name: brand,
  },
  category,
  manufacturer: {
    "@type": "Organization",
    name: brand,
  },
  seller: {
    "@type": "Organization",
    name: LEGAL_NAME,
    url: SITE_URL,
  },
  sameAs: officialUrl,
});
