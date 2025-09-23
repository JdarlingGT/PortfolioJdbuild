import { Link } from "wouter";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import { 
  Rocket, 
  Shield, 
  Wrench, 
  Navigation, 
  MapPin, 
  Server,
  TrendingUp,
  Zap
} from "lucide-react";

interface DeepDive {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: React.ComponentType<any>;
  iconBg: string;
  route: string;
  readTime: string;
  keyTakeaways: string[];
}

const deepDives: DeepDive[] = [
  {
    id: "war-room",
    title: "The War Room",
    subtitle: "Anatomy of a Full-Stack Performance Overhaul",
    summary: "A transparent, real-time look at executing a multi-week site optimization project, transforming performance, security, and reliability from server to browser.",
    icon: Server,
    iconBg: "bg-red-500",
    route: "/deep-dives/war-room",
    readTime: "12 min read",
    keyTakeaways: ["Server Administration", "Performance Tuning", "DevOps Principles"]
  },
  {
    id: "launchpad",
    title: "The Launchpad", 
    subtitle: "Anatomy of an Automated Membership Funnel",
    summary: "Transforming a provider directory from a simple listing into a fully automated, value-driven product that converts trials into long-term subscribers.",
    icon: Rocket,
    iconBg: "bg-blue-500",
    route: "/deep-dives/launchpad",
    readTime: "10 min read",
    keyTakeaways: ["Product Vision", "Automation Architecture", "Lifecycle Marketing"]
  },
  {
    id: "signal",
    title: "The Signal",
    subtitle: "Anatomy of an Analytics & Attribution Overhaul", 
    summary: "Rebuilding entire tracking infrastructure to eliminate data chaos and create a unified system for precise attribution and deep user insights.",
    icon: TrendingUp,
    iconBg: "bg-green-500",
    route: "/deep-dives/signal",
    readTime: "8 min read",
    keyTakeaways: ["Analytics Engineering", "Data Integrity", "Marketing ROI Optimization"]
  }
];

export default function DeepDives() {
  useSEO({
    title: "Project Deep Dives - Jacob Darling | Strategic Marketing & Technical Implementation",
    description: "Go beyond case studies with in-depth stories revealing strategic thinking, technical problem-solving, and complex project management across marketing automation, performance optimization, and system architecture.",
    keywords: "project deep dives, marketing strategy, technical implementation, system architecture, performance optimization, automation",
    canonical: "https://jacobdarling.com/deep-dives",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Project Deep Dives",
      "description": "In-depth stories revealing strategic thinking and technical problem-solving",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Project Deep Dives", url: "https://jacobdarling.com/deep-dives" }
      ])
    }
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6">Project Deep Dives</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              From Spark to System: The Stories Behind the Work
            </h2>
            <p className="text-lg leading-relaxed">
              Go beyond the final result. This section offers a transparent, behind-the-scenes look at 
              the strategy, architecture, and problem-solving that goes into building robust, scalable marketing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dives Grid */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deepDives.map((dive) => {
              const IconComponent = dive.icon;
              return (
                <Link 
                  key={dive.id} 
                  href={dive.route}
                  className="group"
                  data-testid={`deep-dive-card-${dive.id}`}
                >
                  <div className="bg-background border border-border rounded-xl p-8 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/50 hover:bg-gradient-to-br hover:from-background hover:to-primary/5">
                    {/* Icon Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 ${dive.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {dive.readTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {dive.title}
                      </h3>
                      <p className="text-sm font-medium text-primary mb-4">
                        {dive.subtitle}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {dive.summary}
                      </p>
                    </div>

                    {/* Key Takeaways */}
                    <div className="border-t border-border pt-4">
                      <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                        Key Takeaways
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {dive.keyTakeaways.map((takeaway, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-md"
                          >
                            {takeaway}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Indicator */}
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium">Read the story</span>
                      <Zap className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="mb-6">Ready to Dive Deeper Into My Work?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            These stories showcase the strategic thinking and technical expertise behind successful marketing systems. 
            Let's discuss how this approach can drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary" data-testid="link-contact-cta">
              Start a Conversation
            </a>
            <a href="/case-studies" className="btn-secondary" data-testid="link-case-studies-cta">
              View Case Studies
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}