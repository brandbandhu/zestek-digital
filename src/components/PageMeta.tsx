import { useEffect } from "react";

type PageMetaProps = {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
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

const PageMeta = ({ title, description, keywords, image }: PageMetaProps) => {
  useEffect(() => {
    document.title = title;

    upsertMetaTag("name", "description", description);

    if (keywords && keywords.length > 0) {
      upsertMetaTag("name", "keywords", keywords.join(", "));
    }

    upsertMetaTag("property", "og:title", title);
    upsertMetaTag("property", "og:description", description);
    upsertMetaTag("name", "twitter:title", title);
    upsertMetaTag("name", "twitter:description", description);

    if (image) {
      upsertMetaTag("property", "og:image", image);
      upsertMetaTag("name", "twitter:image", image);
    }
  }, [description, image, keywords, title]);

  return null;
};

export default PageMeta;
