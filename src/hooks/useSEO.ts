import { useEffect } from "react";
import { site } from "@/config/siteConfig";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
}

/** Lightweight per-page SEO: title, description, canonical + OG tags. */
export function useSEO({ title, description, path = "/" }: SEOOptions) {
  useEffect(() => {
    const fullTitle =
      title === site.name ? title : `${title} — ${site.name}`;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        if (selector.startsWith('meta[name="')) {
          el.setAttribute("name", selector.slice(11, -2));
        } else {
          el.setAttribute("property", selector.slice(15, -2));
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta(
      'meta[property="og:url"]',
      "content",
      `${site.url}${path === "/" ? "" : path}`,
    );

    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${site.url}${path === "/" ? "/" : path}`;
  }, [title, description, path]);
}
