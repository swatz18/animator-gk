
import { useEffect } from "react";

function usePageSEO(
  title: string,
  description: string,
  canonicalPath: string
) {
  useEffect(() => {
    // Page title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    // Canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    const cleanPath =
      canonicalPath === "/"
        ? ""
        : `/${canonicalPath.replace(/^\/+|\/+$/g, "")}`;

    canonical.href = `https://www.animatorgk.com${cleanPath}`;

  }, [title, description, canonicalPath]);
}

export default usePageSEO;
