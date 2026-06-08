import { useEffect } from "react";
import {
  buildBreadcrumbItems,
  buildBreadcrumbSchema,
  buildWebPageSchema,
  DEFAULT_LOCALE,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  LEGAL_NAME,
  SITE_NAME,
  getCanonicalUrl,
  toAbsoluteUrl,
  type SeoStructuredData,
} from "@/lib/seo";

type PageMetaProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  ogType?: "website" | "article";
  structuredData?: SeoStructuredData | SeoStructuredData[];
  breadcrumbLabel?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
};

const upsertMetaTag = (attribute: "name" | "property", key: string, content: string) => {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const removeMetaTag = (attribute: "name" | "property", key: string) => {
  const tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (tag) {
    tag.remove();
  }
};

const upsertCanonicalLink = (href: string) => {
  let linkTag = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!linkTag) {
    linkTag = document.createElement("link");
    linkTag.setAttribute("rel", "canonical");
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute("href", href);
};

const upsertAlternateLanguageLink = (href: string, hrefLang: string) => {
  let linkTag = document.head.querySelector(`link[rel="alternate"][hreflang="${hrefLang}"]`) as HTMLLinkElement | null;

  if (!linkTag) {
    linkTag = document.createElement("link");
    linkTag.setAttribute("rel", "alternate");
    linkTag.setAttribute("hreflang", hrefLang);
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute("href", href);
};

const upsertJsonLd = (data: SeoStructuredData | SeoStructuredData[]) => {
  const scriptId = "zestek-page-structured-data";
  const payload = Array.isArray(data) ? data : [data];
  let scriptTag = document.head.querySelector(`#${scriptId}`) as HTMLScriptElement | null;

  if (!scriptTag) {
    scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.id = scriptId;
    document.head.appendChild(scriptTag);
  }

  scriptTag.textContent = JSON.stringify(payload.length === 1 ? payload[0] : payload);
};

const PageMeta = ({
  title,
  description,
  keywords,
  image,
  imageAlt,
  canonicalPath,
  noIndex = false,
  ogType = "website",
  structuredData,
  breadcrumbLabel,
  publishedTime,
  modifiedTime,
  authors,
  section,
}: PageMetaProps) => {
  useEffect(() => {
    const currentUrl = getCanonicalUrl(canonicalPath);
    const ogImage = toAbsoluteUrl(image ?? DEFAULT_OG_IMAGE);
    const resolvedImageAlt = image ? imageAlt ?? title : DEFAULT_OG_IMAGE_ALT;

    document.title = title;

    upsertMetaTag("name", "description", description);
    upsertMetaTag("name", "author", LEGAL_NAME);
    upsertMetaTag("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMetaTag("name", "twitter:card", "summary_large_image");
    if (keywords && keywords.length > 0) {
      upsertMetaTag("name", "keywords", keywords.join(", "));
    } else {
      removeMetaTag("name", "keywords");
    }

    upsertMetaTag("property", "og:site_name", SITE_NAME);
    upsertMetaTag("property", "og:locale", DEFAULT_LOCALE);
    upsertMetaTag("property", "og:type", ogType);
    upsertMetaTag("property", "og:url", currentUrl);
    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("property", "og:image", ogImage);
    upsertMetaTag("property", "og:image:alt", resolvedImageAlt);
    upsertMetaTag("name", "twitter:title", title);
    upsertMetaTag("name", "twitter:description", description);
    upsertMetaTag("name", "twitter:image", ogImage);
    upsertMetaTag("name", "twitter:image:alt", resolvedImageAlt);
    upsertMetaTag("name", "twitter:url", currentUrl);

    if (ogType === "article") {
      if (publishedTime) {
        upsertMetaTag("property", "article:published_time", publishedTime);
      } else {
        removeMetaTag("property", "article:published_time");
      }

      if (modifiedTime) {
        upsertMetaTag("property", "article:modified_time", modifiedTime);
      } else {
        removeMetaTag("property", "article:modified_time");
      }

      if (section) {
        upsertMetaTag("property", "article:section", section);
      } else {
        removeMetaTag("property", "article:section");
      }

      if (authors?.length) {
        upsertMetaTag("property", "article:author", authors.join(", "));
      } else {
        removeMetaTag("property", "article:author");
      }
    } else {
      removeMetaTag("property", "article:published_time");
      removeMetaTag("property", "article:modified_time");
      removeMetaTag("property", "article:section");
      removeMetaTag("property", "article:author");
    }

    upsertCanonicalLink(currentUrl);
    upsertAlternateLanguageLink(currentUrl, "en-IN");
    upsertAlternateLanguageLink(currentUrl, "x-default");

    if (noIndex) {
      const existingJsonLd = document.head.querySelector("#zestek-page-structured-data");
      if (existingJsonLd) {
        existingJsonLd.remove();
      }
      return;
    }

    const autoSchemas: SeoStructuredData[] = [buildWebPageSchema({ title, description, canonicalPath, image })];

    if (canonicalPath && canonicalPath !== "/") {
      const breadcrumbItems = buildBreadcrumbItems(canonicalPath, breadcrumbLabel);
      if (breadcrumbItems.length > 1) {
        autoSchemas.push(buildBreadcrumbSchema(breadcrumbItems));
      }
    }

    if (structuredData) {
      const additionalSchemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      upsertJsonLd([...autoSchemas, ...additionalSchemas]);
    } else {
      upsertJsonLd(autoSchemas);
    }
  }, [
    authors,
    breadcrumbLabel,
    canonicalPath,
    description,
    image,
    imageAlt,
    keywords,
    modifiedTime,
    noIndex,
    ogType,
    publishedTime,
    section,
    structuredData,
    title,
  ]);

  return null;
};

export default PageMeta;
