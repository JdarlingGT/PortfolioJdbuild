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
  return (
    <section className="py-16 bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Capabilities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise spanning marketing strategy, web development, automation systems, and data analytics
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Core Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreSkills.map((skill, index) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <div
                  key={index}
                  className="skill-item bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition-colors"
                  data-testid={`core-skill-${index}`}
                >
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Specializations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technicalAreas.map((area, index) => {
            const IconComponent = getIcon(area.icon);
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6"
                data-testid={`tech-area-${index}`}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary mr-2" />
                  <h3 className="font-bold text-foreground">{area.title}</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>• {skill}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyStacks.map((stack, index) => {
              const IconComponent = getIcon(stack.icon);
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6"
                  data-testid={`tech-stack-${index}`}
                >
                  <h3 className="font-bold text-foreground mb-4 flex items-center">
                    <IconComponent className="w-5 h-5 text-primary mr-2" />
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
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
      </div>
    </section>
  );
}
