import { type CaseStudy } from "@/lib/types";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";

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
    id: "black-letter-legal",
    title: "Black Letter Legal",
    subtitle: "High-Conversion B2B Lead Generation",
    description: "Developed multi-channel digital strategy for specialized legal research firm, achieving 250% increase in qualified leads and 80% improvement in case conversion rate.",
    technologies: ["SEO", "Content Strategy", "LinkedIn", "CRM"],
    imageGradient: "bg-gradient-to-br from-secondary/20 to-secondary/30",
    textColor: "text-muted-foreground",
    category: "Employment" as const,
    challenge: "Black Letter Legal needed to establish thought leadership and generate qualified leads in the competitive legal research market while building trust with potential enterprise clients.",
    solution: [
      "Developed comprehensive content strategy targeting specific legal research pain points",
      "Implemented advanced SEO targeting high-value legal industry keywords",
      "Created LinkedIn outreach campaigns with personalized messaging for decision-makers",
      "Built sophisticated CRM system to track and nurture long sales cycles"
    ],
    impact: "Positioned the firm as the go-to legal research authority while dramatically improving lead quality and conversion rates.",
    results: [
      "250% increase in qualified B2B leads",
      "80% improvement in case conversion rate",
      "Established market leadership in specialized legal research",
      "Created scalable lead generation system for sustained growth"
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
                  <div 
                    className={`aspect-video rounded-lg ${caseStudy.imageGradient} flex items-center justify-center shadow-lg`}
                  >
                    <div className={`${caseStudy.textColor} font-bold text-2xl text-center px-8`}>
                      {caseStudy.title}
                    </div>
                  </div>
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
