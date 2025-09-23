import { 
  Target, 
  BarChart3, 
  Lightbulb, 
  Settings, 
  Share2, 
  FileText,
  Zap,
  Shield,
  Activity,
  Cog,
  Code,
  Mail,
  Server
} from "lucide-react";
import { type Skill, type TechnicalArea, type TechnologyStack } from "@/lib/types";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";

const coreSkills: Skill[] = [
  { name: "Strategy", icon: "target" },
  { name: "Analytics", icon: "bar-chart-3" },
  { name: "Creativity", icon: "lightbulb" },
  { name: "SEO", icon: "settings" },
  { name: "Social Media", icon: "share-2" },
  { name: "Content Marketing", icon: "file-text" }
];

const technicalAreas: TechnicalArea[] = [
  {
    title: "Performance",
    icon: "zap",
    skills: [
      "Core Web Vitals optimization",
      "PageSpeed insights",
      "Database optimization",
      "CDN implementation"
    ]
  },
  {
    title: "Security",
    icon: "shield",
    skills: [
      "SSL/TLS configuration",
      "Cloudflare security",
      "WordPress hardening",
      "GDPR compliance"
    ]
  },
  {
    title: "Analytics",
    icon: "activity",
    skills: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Conversion tracking",
      "Custom dashboards"
    ]
  },
  {
    title: "Automation",
    icon: "cog",
    skills: [
      "CRM workflows",
      "Email sequences",
      "Lead scoring",
      "API integrations"
    ]
  }
];

const technologyStacks: TechnologyStack[] = [
  {
    category: "Development",
    icon: "code",
    technologies: ["React", "WordPress", "JavaScript", "PHP", "Python", "MySQL"]
  },
  {
    category: "Marketing Platforms",
    icon: "mail",
    technologies: ["FluentCRM", "Mailchimp", "HubSpot", "Zapier", "LearnDash"]
  },
  {
    category: "Infrastructure",
    icon: "server",
    technologies: ["Cloudflare", "AWS", "Docker", "Git", "Ubuntu"]
  }
];

const getIcon = (iconName: string) => {
  const icons = {
    target: Target,
    "bar-chart-3": BarChart3,
    lightbulb: Lightbulb,
    settings: Settings,
    "share-2": Share2,
    "file-text": FileText,
    zap: Zap,
    shield: Shield,
    activity: Activity,
    cog: Cog,
    code: Code,
    mail: Mail,
    server: Server
  };
  return icons[iconName as keyof typeof icons] || Target;
};

export default function Skills() {
  useSEO({
    title: "Skills & Expertise - Jacob Darling | Technical Marketing Capabilities",
    description: "Comprehensive overview of marketing and technical skills including web performance, security, analytics, automation, and full-stack development capabilities.",
    keywords: "marketing skills, technical expertise, web performance, security, analytics, automation, CRM development, dashboard development",
    canonical: "https://jacobdarling.com/skills"
  });

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="section-spacing bg-background">
        <div className="container text-center">
          <h1 className="mb-6">Skills & Expertise</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Deep expertise spanning marketing strategy, web development, automation systems, and data analytics
          </p>
        </div>
      </section>

      {/* Core Marketing Skills */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <h2 className="mb-12 text-center">Core Marketing Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {coreSkills.map((skill, index) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 text-center hover:border-primary hover:shadow-md transition-all duration-200"
                  data-testid={`core-skill-${index}`}
                >
                  <IconComponent className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Spotlights */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Technical Spotlights</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Specialized technical capabilities that drive measurable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalAreas.map((area, index) => {
              const IconComponent = getIcon(area.icon);
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all duration-200"
                  data-testid={`tech-area-${index}`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {area.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <h2 className="mb-12 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyStacks.map((stack, index) => {
              const IconComponent = getIcon(stack.icon);
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-8"
                  data-testid={`tech-stack-${index}`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{stack.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-accent text-accent-foreground px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="mb-6">Ready to Put These Skills to Work?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how my unique combination of marketing strategy and technical expertise 
            can help achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary" data-testid="link-contact-cta">
              Get Started
            </a>
            <a href="/case-studies" className="btn-secondary" data-testid="link-case-studies-cta">
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
