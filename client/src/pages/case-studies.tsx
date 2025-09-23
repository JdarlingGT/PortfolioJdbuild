import CaseStudyCard from "@/components/sections/case-study-card";
import { type CaseStudy } from "@/lib/types";

const caseStudies: CaseStudy[] = [
  {
    id: "graston-technique",
    title: "Graston Technique®",
    subtitle: "Full-Stack Marketing & Systems Transformation",
    description: "Led complete marketing and technology transformation for national healthcare training leader, including custom React dashboard, AI-powered support system, and 400+ CRM automation workflows.",
    technologies: ["WordPress", "React", "FluentCRM", "LearnDash"],
    imageGradient: "bg-gradient-to-br from-primary/10 to-primary/20",
    textColor: "text-primary"
  },
  {
    id: "black-letter-legal",
    title: "Black Letter Legal",
    subtitle: "High-Conversion B2B Lead Generation",
    description: "Developed multi-channel digital strategy for specialized legal research firm, achieving 250% increase in qualified leads and 80% improvement in case conversion rate.",
    technologies: ["SEO", "Content Strategy", "LinkedIn", "CRM"],
    imageGradient: "bg-gradient-to-br from-secondary/20 to-secondary/30",
    textColor: "text-muted-foreground"
  },
  {
    id: "gomez-craft-barbecue",
    title: "Gomez Craft Barbecue",
    subtitle: "Restaurant Brand Launch & Digital Presence",
    description: "Built complete digital footprint from brand identity to custom mobile ordering application for new restaurant in competitive local market.",
    technologies: ["Branding", "Mobile App", "Local SEO", "Social Media"],
    imageGradient: "bg-gradient-to-br from-orange-100 to-orange-200",
    textColor: "text-orange-600"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 bg-card pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into transformative projects that showcase the power of strategic marketing 
            combined with technical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
