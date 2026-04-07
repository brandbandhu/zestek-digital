import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  canonicalPath?: string;
  noIndex?: boolean;
  ogType?: "website" | "article";
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
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

const upsertCanonicalLink = (href: string) => {
  let linkTag = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!linkTag) {
    linkTag = document.createElement("link");
    linkTag.setAttribute("rel", "canonical");
    document.head.appendChild(linkTag);
  }

  linkTag.setAttribute("href", href);
};

const upsertJsonLd = (data: Record<string, unknown> | Array<Record<string, unknown>>) => {
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

const getAbsoluteUrl = (pathOrUrl: string) => {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const origin = window.location.origin;
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${origin}${normalizedPath}`;
};

const PageMeta = ({
  title,
  description,
  keywords,
  image,
  canonicalPath,
  noIndex = false,
  ogType = "website",
  structuredData,
}: PageMetaProps) => {
  useEffect(() => {
    const currentUrl = canonicalPath ? getAbsoluteUrl(canonicalPath) : window.location.href;
    const ogImage = image ? getAbsoluteUrl(image) : getAbsoluteUrl("/zestek-logo.png");

    document.title = title;

    upsertMetaTag("name", "description", description);
    upsertMetaTag("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMetaTag("name", "twitter:card", "summary_large_image");

    if (keywords && keywords.length > 0) {
      upsertMetaTag("name", "keywords", keywords.join(", "));
    }

    upsertMetaTag("property", "og:type", ogType);
    upsertMetaTag("property", "og:url", currentUrl);
    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("property", "og:image", ogImage);
    upsertMetaTag("property", "og:image:alt", title);
    upsertMetaTag("name", "twitter:title", title);
    upsertMetaTag("name", "twitter:description", description);
    upsertMetaTag("name", "twitter:image", ogImage);
    upsertMetaTag("name", "twitter:url", currentUrl);

    upsertCanonicalLink(currentUrl);

    if (structuredData) {
      upsertJsonLd(structuredData);
    } else {
      const existingJsonLd = document.head.querySelector("#zestek-page-structured-data");
      if (existingJsonLd) {
        existingJsonLd.remove();
      }
    }
  }, [canonicalPath, description, image, keywords, noIndex, ogType, structuredData, title]);

  return null;
};

export default PageMeta;
