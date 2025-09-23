import Hero from "@/components/sections/hero";
import KeyMetrics from "@/components/sections/key-metrics";
import Testimonials from "@/components/sections/testimonials";
import { useSEO, createPersonSchema, createWebsiteSchema } from "@/hooks/use-seo";

export default function Home() {
  useSEO({
    title: "Jacob Darling | Marketing Strategist & Systems Architect",
    description: "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions for healthcare, legal, and service businesses.",
    keywords: "marketing strategist, systems architect, marketing automation, CRM development, dashboard development, growth marketing, technical marketing",
    ogTitle: "Jacob Darling | Marketing Strategist & Systems Architect",
    ogDescription: "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions.",
    canonical: "https://jacobdarling.com",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [createPersonSchema(), createWebsiteSchema()]
    }
  });

  return (
    <>
      <Hero />
      <KeyMetrics />
      <Testimonials />
    </>
  );
}
