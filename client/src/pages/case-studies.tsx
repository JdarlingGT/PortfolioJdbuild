import { type CaseStudy } from "@/lib/types";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import blackLetterLogoColor from "@assets/black-letter-logo-color.png";
import blackLetterLogoGrayscale from "@assets/black-letter-logo-grayscale.png";

const caseStudies: CaseStudy[] = [
  {
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
      "70% reduction in support tickets through automation",
      "400+ CRM workflows deployed for seamless operations",
      "Enhanced training platform serving thousands of healthcare professionals",
      "Streamlined administrative processes across multiple departments"
    ]
  },
  {
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
      "Dual-branded websites serving distinct patient populations",
      "Successful Google Ads campaigns driving qualified patient leads",
      "Engaging seasonal email campaigns improving patient retention",
      "Complete brand package supporting offline and online marketing efforts"
    ]
  },
  {
    id: "black-letter-legal",
    title: "Black Letter Legal",
    subtitle: "Premium Logo Design & Brand Identity",
    description: "Crafted sophisticated brand identity for legal research firm, featuring custom typography and distinctive logo design that balances professional authority with modern elegance.",
    technologies: ["Logo Design", "Typography", "Brand Identity", "Color Theory"],
    imageGradient: "bg-gradient-to-br from-orange-100 to-orange-200",
    textColor: "text-orange-600",
    category: "Bearcave Marketing" as const,
    challenge: "Black Letter Legal needed a distinctive brand identity that would establish credibility in the competitive legal market while standing out from traditional, conservative law firm aesthetics.",
    solution: [
      "Designed elegant monogram featuring stylized 'B' with flowing, calligraphic elements",
      "Developed sophisticated color palette with professional grayscale and vibrant orange accent",
      "Created custom typography treatment balancing traditional serif elegance with modern readability",
      "Engineered scalable logo system working across digital and print applications"
    ],
    impact: "Delivered a premium brand identity that positions Black Letter Legal as both authoritative and approachable, setting them apart in the legal research marketplace.",
    results: [
      "Distinctive monogram design establishing immediate brand recognition",
      "Versatile color system supporting both conservative and dynamic brand applications",
      "Professional typography enhancing credibility and trust",
      "Scalable brand system ready for digital and print implementation"
    ]
  },
  {
    id: "gomez-craft-barbecue",
    title: "Gomez Craft Barbecue",
    subtitle: "Restaurant Brand Launch & Digital Presence",
    description: "Built complete digital footprint from brand identity to custom mobile ordering application for new restaurant in competitive local market.",
    technologies: ["Branding", "Mobile App", "Local SEO", "Social Media"],
    imageGradient: "bg-gradient-to-br from-orange-100 to-orange-200",
    textColor: "text-orange-600",
    category: "Bearcave Marketing" as const,
    challenge: "A new barbecue restaurant needed to build brand recognition and compete against established local competitors while creating an efficient ordering system for modern customers.",
    solution: [
      "Created distinctive brand identity that captured authentic barbecue culture and local flavor",
      "Developed custom mobile ordering application with integrated payment processing",
      "Implemented local SEO strategy targeting neighborhood and barbecue-specific searches",
      "Launched social media presence showcasing food quality and restaurant personality"
    ],
    impact: "Successfully launched a new restaurant brand with strong local recognition and efficient operations from day one.",
    results: [
      "Successful brand launch in competitive local market",
      "Custom mobile app driving repeat customer orders",
      "Strong local search presence for barbecue-related queries",
      "Engaged social media community supporting word-of-mouth marketing"
    ]
  }
];

export default function CaseStudies() {
  useSEO({
    title: "Selected Works - Jacob Darling | Marketing Case Studies",
    description: "Explore detailed case studies showcasing marketing automation, CRM development, and growth strategies for healthcare, legal, and restaurant clients with measurable results.",
    keywords: "marketing case studies, automation projects, CRM development, healthcare marketing, legal marketing, restaurant marketing",
    canonical: "https://jacobdarling.com/case-studies",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Marketing Case Studies",
      "description": "Portfolio of marketing automation and systems architecture projects",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Case Studies", url: "https://jacobdarling.com/case-studies" }
      ])
    }
  });

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="section-spacing bg-background">
        <div className="container text-center">
          <h1 className="mb-6">Selected Works</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Deep dives into transformative projects that showcase the power of strategic marketing 
            combined with technical excellence
          </p>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((caseStudy, index) => {
        const isEven = index % 2 === 0;
        return (
          <section 
            key={caseStudy.id} 
            className="section-spacing border-t border-border"
            data-testid={`case-study-${caseStudy.id}`}
          >
            <div className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                
                {/* Image Section */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  {caseStudy.id === 'black-letter-legal' ? (
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-lg">
                      <div className="h-full flex items-center justify-center gap-8">
                        <div className="flex-1 flex items-center justify-center">
                          <img 
                            src={blackLetterLogoGrayscale} 
                            alt="Black Letter Legal - Grayscale Logo" 
                            className="max-h-24 w-auto object-contain"
                          />
                        </div>
                        <div className="w-px h-16 bg-gray-600"></div>
                        <div className="flex-1 flex items-center justify-center">
                          <img 
                            src={blackLetterLogoColor} 
                            alt="Black Letter Legal - Color Logo" 
                            className="max-h-24 w-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className={`aspect-video rounded-lg ${caseStudy.imageGradient} flex items-center justify-center shadow-lg`}
                    >
                      <div className={`${caseStudy.textColor} font-bold text-2xl text-center px-8`}>
                        {caseStudy.title}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-8">
                    {/* Project Header */}
                    <div>
                      <h2 className="mb-4">{caseStudy.title}</h2>
                      <p className="text-lg text-primary font-semibold mb-4">
                        {caseStudy.subtitle}
                      </p>
                      <p className="text-lg leading-relaxed">
                        {caseStudy.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-3">
                        {caseStudy.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-accent text-accent-foreground px-3 py-1 rounded-md text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge */}
                    {caseStudy.challenge && (
                      <div>
                        <h3 className="mb-3">The Challenge</h3>
                        <p className="leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>
                    )}

                    {/* Solution */}
                    {caseStudy.solution && (
                      <div>
                        <h3 className="mb-3">My Solution</h3>
                        <ul className="space-y-2">
                          {caseStudy.solution.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Impact */}
                    {caseStudy.impact && (
                      <div>
                        <h3 className="mb-3">The Impact</h3>
                        <p className="leading-relaxed mb-4">
                          {caseStudy.impact}
                        </p>
                        {caseStudy.results && (
                          <ul className="space-y-2">
                            {caseStudy.results.map((result, resultIndex) => (
                              <li key={resultIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed font-medium text-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Call to Action */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container text-center">
          <h2 className="mb-6">Ready to Transform Your Marketing?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how strategic marketing combined with technical excellence 
            can drive measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Start Your Project
            </a>
            <a href="/demos" className="btn-secondary">
              View Live Demos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
