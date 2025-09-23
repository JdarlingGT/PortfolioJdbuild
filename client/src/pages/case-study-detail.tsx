import { useRoute } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/types";
import blackLetterLogoColor from "@assets/black-letter-logo-color.png";

// Case study data - matches the data from case-studies.tsx
const caseStudiesData: Record<string, CaseStudy> = {
  "graston-technique": {
    id: "graston-technique",
    title: "Graston Technique®",
    subtitle: "Full-Stack Marketing & Systems Transformation",
    description: "Led complete marketing and technology transformation for national healthcare training leader, including custom React dashboard, AI-powered support system, and 400+ CRM automation workflows.",
    technologies: ["WordPress", "React", "FluentCRM", "LearnDash"],
    imageGradient: "bg-gradient-to-br from-primary/10 to-primary/20",
    textColor: "text-primary",
    category: "Employment" as const,
    challenge: "Graston Technique needed to modernize their training platform and support systems to scale their operations efficiently while maintaining quality education standards for healthcare professionals.",
    solution: [
      "Designed and developed custom React-based training dashboard with real-time progress tracking",
      "Implemented AI-powered support chatbot to reduce manual customer service workload by 70%",
      "Built 400+ automated CRM workflows for lead nurturing and student engagement",
      "Created comprehensive LMS integration with FluentCRM for seamless data flow"
    ],
    impact: "Transformed the organization's operational efficiency and student experience through strategic technology implementation.",
    results: [
      "400+ CRM workflows built",
      "AI-powered support reduced tickets by 70%",
      "Checkout innovation boosted conversions 40%",
      "Instructor dashboard enabled real-time training data"
    ]
  },
  "pike-medical-consultants": {
    id: "pike-medical-consultants",
    title: "Pike Medical Consultants",
    subtitle: "Integrated Digital Strategy & Campaign Management",
    description: "Developed comprehensive digital presence for medical practice group, including PrimaryCare Indy and UrgentCare Indy websites, Google Ads campaigns, seasonal email marketing, and complete branding package.",
    technologies: ["WordPress", "Google Ads", "Email Marketing", "SEO", "Branding"],
    imageGradient: "bg-gradient-to-br from-blue-100 to-blue-200",
    textColor: "text-blue-600",
    category: "Bearcave Marketing" as const,
    challenge: "Pike Medical Consultants needed to establish distinct digital presences for their PrimaryCare and UrgentCare divisions while maintaining brand consistency and driving patient acquisition across multiple service areas.",
    solution: [
      "Built responsive WordPress websites for PrimaryCare Indy and UrgentCare Indy with patient-focused UX",
      "Developed and managed Google Ads campaigns targeting local healthcare searches",
      "Created seasonal email marketing campaigns for patient retention and health awareness",
      "Designed comprehensive brand identity including logos, banners, and marketing materials"
    ],
    impact: "Established strong digital foundation for medical practice growth with cohesive branding and effective patient acquisition channels.",
    results: [
      "Built/refined websites (PrimaryCare Indy, UrgentCare Indy)",
      "Google Ads campaigns driving patient traffic",
      "Seasonal email campaigns (flu shots, allergy season)",
      "Logo, banners, signage for brand consistency"
    ]
  }
};

export default function CaseStudyDetail() {
  const [match, params] = useRoute("/case-studies/:id");
  const caseStudy = params?.id ? caseStudiesData[params.id] : null;

  // SEO for the detail page
  useSEO({
    title: caseStudy ? `${caseStudy.title} - Case Study | Jacob Darling` : "Case Study Not Found",
    description: caseStudy ? caseStudy.description : "Case study not found",
    keywords: caseStudy ? `${caseStudy.title.toLowerCase()}, case study, marketing automation, ${caseStudy.technologies.join(', ').toLowerCase()}` : "",
    canonical: `https://jacobdarling.com/case-studies/${params?.id}`,
    structuredData: caseStudy ? {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": caseStudy.title,
      "description": caseStudy.description,
      "author": {
        "@type": "Person",
        "name": "Jacob Darling"
      },
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Case Studies", url: "https://jacobdarling.com/case-studies" },
        { name: caseStudy.title, url: `https://jacobdarling.com/case-studies/${caseStudy.id}` }
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

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="section-spacing bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/case-studies">
              <Button variant="ghost" className="mb-8" data-testid="button-back-to-case-studies">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>

            {/* Hero Content */}
            <div className="text-center mb-16">
              <h1 className="mb-4" data-testid="case-study-title">{caseStudy.title}</h1>
              <p className="text-xl text-primary font-semibold mb-6" data-testid="case-study-subtitle">
                {caseStudy.subtitle}
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground" data-testid="case-study-description">
                {caseStudy.description}
              </p>
            </div>

            {/* Hero Image */}
            <div className="mb-16">
              {caseStudy.id === 'black-letter-legal' ? (
                <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg">
                  <div className="h-full flex items-center justify-center gap-8">
                    <div className="flex-1 flex items-center justify-center">
                      <img 
                        src={blackLetterLogoColor} 
                        alt="Black Letter Legal Logo" 
                        className="max-h-24 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div 
                  className={`aspect-video rounded-lg ${caseStudy.imageGradient} flex items-center justify-center shadow-lg`}
                  data-testid="case-study-hero-image"
                >
                  <div className={`${caseStudy.textColor} font-bold text-3xl text-center px-8`}>
                    {caseStudy.title}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Challenge */}
                <div>
                  <h2 className="mb-6" data-testid="section-challenge">The Challenge</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                {caseStudy.solution && (
                  <div>
                    <h2 className="mb-6" data-testid="section-solution">My Solution</h2>
                    <ul className="space-y-4">
                      {caseStudy.solution.map((item, index) => (
                        <li key={index} className="flex items-start gap-4" data-testid={`solution-item-${index}`}>
                          <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Impact */}
                <div>
                  <h2 className="mb-6" data-testid="section-impact">The Impact</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    {caseStudy.impact}
                  </p>

                  {/* Results */}
                  {caseStudy.results && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caseStudy.results.map((result, index) => (
                        <div 
                          key={index} 
                          className="bg-background border border-border rounded-lg p-6 text-center"
                          data-testid={`result-${index}`}
                        >
                          <div className="w-3 h-3 bg-primary rounded-full mx-auto mb-3"></div>
                          <p className="font-medium text-foreground">{result}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-background border border-border rounded-lg p-6 sticky top-8">
                  
                  {/* Project Info */}
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4" data-testid="project-info-title">Project Info</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-muted-foreground">Category</span>
                        <p className="font-medium" data-testid="project-category">{caseStudy.category}</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold mb-4" data-testid="technologies-title">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-medium"
                          data-testid={`technology-${index}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your Marketing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how strategic marketing combined with technical excellence can drive 
              exceptional results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="text-lg" data-testid="button-get-in-touch">
                  Get in Touch
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="text-lg" data-testid="button-view-more-case-studies">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}