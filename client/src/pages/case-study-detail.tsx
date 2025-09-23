import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import CaseStudyDetail from "@/components/CaseStudyDetail";
import caseStudiesData from "@/data/caseStudies.json";

// Transform JSON data into a lookup object
const caseStudiesLookup = caseStudiesData.reduce((acc, study) => {
  acc[study.slug] = study;
  return acc;
}, {} as Record<string, typeof caseStudiesData[0]>);

export default function CaseStudyDetailPage() {
  const [match, params] = useRoute("/case-studies/:id");
  const caseStudy = params?.id ? caseStudiesLookup[params.id] : null;

  // SEO for the detail page
  useSEO({
    title: caseStudy ? `${caseStudy.title} - Case Study | Jacob Darling` : "Case Study Not Found",
    description: caseStudy ? `${caseStudy.subtitle}. ${caseStudy.challenge.substring(0, 150)}...` : "Case study not found",
    keywords: caseStudy ? `${caseStudy.title.toLowerCase()}, case study, marketing automation, ${caseStudy.category.toLowerCase()}` : "",
    canonical: `https://jacobdarling.com/case-studies/${params?.id}`,
    structuredData: caseStudy ? {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": caseStudy.title,
      "description": caseStudy.subtitle,
      "author": {
        "@type": "Person",
        "name": "Jacob Darling"
      },
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Case Studies", url: "https://jacobdarling.com/case-studies" },
        { name: caseStudy.title, url: `https://jacobdarling.com/case-studies/${caseStudy.slug}` }
      ])
    } : undefined
  });

  if (!match || !caseStudy) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-6">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies">
            <Button data-testid="button-back-to-case-studies">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}