import { Quote, Building2, Users, Target } from "lucide-react";

interface TestimonialArea {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  highlight: string;
}

const testimonialAreas: TestimonialArea[] = [
  {
    icon: Building2,
    title: "Healthcare & Training",
    description: "Developed comprehensive marketing automation systems and custom dashboards that streamlined operations and improved engagement for national training organizations.",
    highlight: "Custom React dashboards and CRM automation"
  },
  {
    icon: Users,
    title: "Professional Services",
    description: "Executed complete rebranding initiatives and digital marketing strategies for law firms and healthcare practices, enhancing their market presence and client acquisition.",
    highlight: "Full rebrand and lead generation systems"
  },
  {
    icon: Target,
    title: "Local Businesses",
    description: "Built integrated marketing ecosystems for restaurants, barbershops, and service providers, combining brand identity with digital marketing automation.",
    highlight: "Brand identity and digital presence"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="testimonials-heading">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven results across diverse industries, combining strategic marketing with technical excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8"
                data-testid={`success-story-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-bold text-foreground mb-3 text-lg">
                  {area.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  {area.description}
                </p>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-primary font-medium">
                    Key Deliverables: {area.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto" data-testid="trust-indicators">
            <h3 className="font-semibold text-foreground mb-3">
              Trusted by Organizations Across Industries
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              From healthcare and legal services to restaurants and trades, 
              I've delivered measurable results for diverse businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-muted rounded-full">Healthcare</span>
              <span className="px-3 py-1 bg-muted rounded-full">Legal Services</span>
              <span className="px-3 py-1 bg-muted rounded-full">Restaurants</span>
              <span className="px-3 py-1 bg-muted rounded-full">Professional Services</span>
              <span className="px-3 py-1 bg-muted rounded-full">Education</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}