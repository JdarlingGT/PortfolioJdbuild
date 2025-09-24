import { 
  Zap,
  Shield,
  Activity,
  Server,
  Code,
  Database,
  Globe,
  Settings
} from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import SkillsRadarChart from "@/components/SkillsRadarChart";

interface TechnicalCategory {
  title: string;
  icon: any;
  description: string;
  skills: string[];
}

const technicalCategories: TechnicalCategory[] = [
  {
    title: "Performance & Optimization",
    icon: Zap,
    description: "Site speed, Core Web Vitals, and optimization expertise",
    skills: [
      "Cloudflare CDN & optimization",
      "WP Rocket caching",
      "LiteSpeed Cache",
      "Apache/PHP tuning",
      "Core Web Vitals optimization",
      "Database query optimization",
      "Image optimization & compression"
    ]
  },
  {
    title: "Security & Infrastructure",
    icon: Shield,
    description: "Enterprise-grade security and infrastructure management",
    skills: [
      "Web Application Firewall (WAF)",
      "Bot Management",
      "DNSSEC configuration",
      "API key hardening",
      "SSL/TLS configuration",
      "Cloudflare security setup",
      "WordPress security hardening"
    ]
  },
  {
    title: "Analytics & Conversion Tracking",
    icon: Activity,
    description: "Advanced tracking, insights, and conversion optimization",
    skills: [
      "Google Tag Manager (GTM)",
      "Google Analytics 4 (GA4)",
      "Custom event scripting",
      "Conversion tracking & attribution",
      "E-commerce tracking",
      "Custom dashboards & reporting",
      "A/B testing & optimization"
    ]
  },
  {
    title: "Server Administration & DevOps",
    icon: Server,
    description: "Cloud infrastructure and deployment expertise",
    skills: [
      "Server monitoring",
      "PHP upgrades",
      "Debugging & troubleshooting",
      "Scalability optimization",
      "Linux server administration",
      "Apache/Nginx configuration",
      "MySQL database management"
    ]
  }
];

interface TechnologyStack {
  category: string;
  icon: any;
  technologies: string[];
}

const technologyStacks: TechnologyStack[] = [
  {
    category: "CDN/Security",
    icon: Shield,
    technologies: [
      "Cloudflare",
      "Netdata"
    ]
  },
  {
    category: "Analytics",
    icon: Activity,
    technologies: [
      "GTM",
      "GA4",
      "Umami"
    ]
  },
  {
    category: "Ads",
    icon: Globe,
    technologies: [
      "Google Ads",
      "PixelYourSite Pro",
      "OptinMonster"
    ]
  },
  {
    category: "Hosting",
    icon: Server,
    technologies: [
      "Liquid Web",
      "GoDaddy",
      "Apache",
      "PHP-FPM"
    ]
  },
  {
    category: "WordPress",
    icon: Code,
    technologies: [
      "WP-CLI",
      "MU Plugins",
      "Cron",
      "Heartbeat API"
    ]
  },
  {
    category: "Plugins",
    icon: Settings,
    technologies: [
      "FluentCRM",
      "Gravity Forms",
      "WPForms",
      "LearnDash",
      "Divi",
      "Autoptimize"
    ]
  },
  {
    category: "Languages",
    icon: Database,
    technologies: [
      "PHP",
      "JavaScript",
      "jQuery",
      "SQL",
      "CSS",
      "HTML"
    ]
  }
];

export default function Skills() {
  useSEO({
    title: "Technical Skills & Expertise - Jacob Darling | Marketing Systems Architect",
    description: "Deep technical expertise in performance optimization, security, analytics, and server administration powering exceptional marketing outcomes.",
    keywords: "technical marketing skills, performance optimization, security, analytics, server administration, WordPress development, CRM automation",
    canonical: "https://jacobdarling.com/skills",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Skills", url: "https://jacobdarling.com/skills" }
      ])
    }
  });

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="section-spacing bg-background">
        <div className="container text-center">
          <h1 className="mb-6">Technical Skills & Expertise</h1>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            My technical expertise powers marketing outcomes. Deep knowledge across performance optimization, 
            security implementation, analytics systems, and server administration enables me to build 
            marketing systems that are both sophisticated and reliable.
          </p>
        </div>
      </section>

      {/* Skills Radar Chart */}
      <section className="section-spacing bg-muted/30 border-t border-border">
        <div className="container">
          <SkillsRadarChart />
        </div>
      </section>

      {/* Technical Categories - Accordion */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Core Technical Categories
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized expertise organized by technical discipline
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {technicalCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`category-${index}`}
                  className="border border-border rounded-lg px-6 bg-background/50"
                  data-testid={`accordion-item-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 pb-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex}
                            className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg"
                            data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </section>

      {/* Technology Stacks */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6">Technology Stacks</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Comprehensive tool proficiency across development, analytics, and marketing platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologyStacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  data-testid={`tech-stack-${stack.category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{stack.category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="text-sm text-muted-foreground py-1 border-b border-border/30 last:border-0"
                        data-testid={`technology-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}