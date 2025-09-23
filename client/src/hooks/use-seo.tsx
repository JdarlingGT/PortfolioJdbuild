import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  structuredData?: object;
  canonical?: string;
}

const defaultSEO: SEOProps = {
  title: "Jacob Darling | Marketing Strategist & Systems Architect",
  description: "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions.",
  keywords: "marketing strategist, systems architect, marketing automation, CRM development, dashboard development, growth marketing, technical marketing",
  ogTitle: "Jacob Darling | Marketing Strategist & Systems Architect",
  ogDescription: "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions.",
  ogImage: "https://jacobdarling.com/og-image.png",
  ogUrl: "https://jacobdarling.com"
};

export function useSEO(seoProps: SEOProps = {}) {
  // Derive ogUrl from canonical if provided
  const derivedOgUrl = seoProps.canonical || seoProps.ogUrl || defaultSEO.ogUrl;
  const seo = { 
    ...defaultSEO, 
    ...seoProps,
    ogUrl: derivedOgUrl
  };

  useEffect(() => {
    // Set title
    document.title = seo.title || defaultSEO.title!;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    if (seo.description) {
      setMetaTag('description', seo.description);
    }
    
    if (seo.keywords) {
      setMetaTag('keywords', seo.keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', seo.ogTitle || seo.title!, 'property');
    setMetaTag('og:description', seo.ogDescription || seo.description!, 'property');
    setMetaTag('og:type', 'website', 'property');
    setMetaTag('og:site_name', 'Jacob Darling Portfolio', 'property');
    
    if (seo.ogImage) {
      setMetaTag('og:image', seo.ogImage, 'property');
      setMetaTag('og:image:alt', 'Jacob Darling - Marketing Strategist & Systems Architect', 'property');
    }
    
    if (seo.ogUrl) {
      setMetaTag('og:url', seo.ogUrl, 'property');
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', seo.ogTitle || seo.title!);
    setMetaTag('twitter:description', seo.ogDescription || seo.description!);
    setMetaTag('twitter:site', '@jacobdarling');
    setMetaTag('twitter:creator', '@jacobdarling');
    
    if (seo.ogImage) {
      setMetaTag('twitter:image', seo.ogImage);
      setMetaTag('twitter:image:alt', 'Jacob Darling - Marketing Strategist & Systems Architect');
    }

    // Canonical URL
    if (seo.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = seo.canonical;
    }

    // Structured data
    if (seo.structuredData) {
      let structuredDataScript = document.querySelector('#structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        (structuredDataScript as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(seo.structuredData);
    }
  }, [seo]);
}

// Predefined structured data schemas
export const createPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Jacob Darling",
  "jobTitle": "Marketing Strategist & Systems Architect",
  "description": "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions.",
  "url": "https://jacobdarling.com",
  "sameAs": [
    "https://linkedin.com/in/jacobdarling"
  ],
  "knowsAbout": [
    "Marketing Strategy",
    "Marketing Automation",
    "CRM Development",
    "Dashboard Development",
    "Systems Architecture",
    "Growth Marketing"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Marketing Strategist & Systems Architect"
  }
});

export const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Jacob Darling Portfolio",
  "url": "https://jacobdarling.com",
  "description": "Professional portfolio showcasing marketing strategy and systems architecture expertise",
  "author": {
    "@type": "Person",
    "name": "Jacob Darling"
  }
});

export const createBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});