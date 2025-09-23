import { useState } from "react";
import CaseStudyCard from "@/components/sections/case-study-card";
import { type CaseStudy } from "@/lib/types";
import { Button } from "@/components/ui/button";

const caseStudies: CaseStudy[] = [
  {
    id: "graston-technique",
    title: "Graston Technique®",
    subtitle: "Full-Stack Marketing & Systems Transformation",
    description: "Led complete marketing and technology transformation for national healthcare training leader, including custom React dashboard, AI-powered support system, and 400+ CRM automation workflows.",
    technologies: ["WordPress", "React", "FluentCRM", "LearnDash"],
    imageGradient: "bg-gradient-to-br from-primary/10 to-primary/20",
    textColor: "text-primary",
    category: "Employment" as const
  },
  {
    id: "black-letter-legal",
    title: "Black Letter Legal",
    subtitle: "High-Conversion B2B Lead Generation",
    description: "Developed multi-channel digital strategy for specialized legal research firm, achieving 250% increase in qualified leads and 80% improvement in case conversion rate.",
    technologies: ["SEO", "Content Strategy", "LinkedIn", "CRM"],
    imageGradient: "bg-gradient-to-br from-secondary/20 to-secondary/30",
    textColor: "text-muted-foreground",
    category: "Employment" as const
  },
  {
    id: "gomez-craft-barbecue",
    title: "Gomez Craft Barbecue",
    subtitle: "Restaurant Brand Launch & Digital Presence",
    description: "Built complete digital footprint from brand identity to custom mobile ordering application for new restaurant in competitive local market.",
    technologies: ["Branding", "Mobile App", "Local SEO", "Social Media"],
    imageGradient: "bg-gradient-to-br from-orange-100 to-orange-200",
    textColor: "text-orange-600",
    category: "Bearcave Marketing" as const
  },
  {
    id: "primarycare-indy",
    title: "PrimaryCare Indy",
    subtitle: "Healthcare Branding & Digital Marketing",
    description: "Designed comprehensive branding package and launched targeted Google Ads campaigns for primary care practice, strengthening online presence and boosting patient acquisition through data-driven marketing.",
    technologies: ["Branding", "Google Ads", "Web Design", "Photography"],
    imageGradient: "bg-gradient-to-br from-blue-100 to-blue-200",
    textColor: "text-blue-600",
    category: "Bearcave Marketing" as const
  },
  {
    id: "hoosier-boy-barbershop",
    title: "Hoosier Boy Barbershop",
    subtitle: "Local Business Digital Growth",
    description: "Enhanced community engagement and boosted bookings through consistent content marketing, email campaigns, and social media outreach for neighborhood barbershop.",
    technologies: ["Content Marketing", "Email Marketing", "Social Media", "Local SEO"],
    imageGradient: "bg-gradient-to-br from-purple-100 to-purple-200", 
    textColor: "text-purple-600",
    category: "Bearcave Marketing" as const
  },
  {
    id: "riley-bennett-egloff",
    title: "Riley Bennett Egloff",
    subtitle: "Law Firm Rebranding & Digital Presence",
    description: "Executed full rebrand including logo design, website development, and integrated marketing campaigns, enhancing brand image and securing greater recognition in the legal sector.",
    technologies: ["Branding", "Web Design", "Content Marketing", "Photography"],
    imageGradient: "bg-gradient-to-br from-gray-100 to-gray-200",
    textColor: "text-gray-600",
    category: "Employment" as const
  }
];

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Employment" | "Bearcave Marketing">("All");
  
  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

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

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
            {["All", "Employment", "Bearcave Marketing"].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category as typeof selectedCategory)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-background"
                }`}
                data-testid={`filter-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        
        {/* Results Count */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
        
        {selectedCategory !== "All" && (
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCaseStudies.length} {selectedCategory.toLowerCase()} project{filteredCaseStudies.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
