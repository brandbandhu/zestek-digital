export const SITE_URL = "https://zestek.in";
export const SITE_NAME = "Zestek Digital Solutions";
export const LEGAL_NAME = "Zestek Digital LLP";
export const DEFAULT_OG_IMAGE = "/zestek-logo.png";
export const DEFAULT_OG_IMAGE_ALT = "Zestek Digital Solutions logo";
export const DEFAULT_LOCALE = "en_IN";
export const DEFAULT_LANGUAGE = "en-IN";

export type SeoStructuredData = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  path: string;
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
