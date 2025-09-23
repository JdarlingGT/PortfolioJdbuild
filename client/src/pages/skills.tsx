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
  Server,
  Star,
  TrendingUp
} from "lucide-react";
import { type Skill, type TechnicalArea, type TechnologyStack } from "@/lib/types";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

interface EnhancedSkill {
  name: string;
  icon: string;
  proficiency: number; // 0-100
  yearsExp: number;
  description: string;
}

const coreSkills: EnhancedSkill[] = [
  { name: "Strategy", icon: "target", proficiency: 95, yearsExp: 8, description: "Strategic planning & execution" },
  { name: "Analytics", icon: "bar-chart-3", proficiency: 90, yearsExp: 6, description: "Data-driven insights & optimization" },
  { name: "Creativity", icon: "lightbulb", proficiency: 85, yearsExp: 10, description: "Creative campaigns & content" },
  { name: "SEO", icon: "settings", proficiency: 88, yearsExp: 7, description: "Technical & content SEO" },
  { name: "Social Media", icon: "share-2", proficiency: 82, yearsExp: 5, description: "Multi-platform marketing" },
  { name: "Content Marketing", icon: "file-text", proficiency: 92, yearsExp: 8, description: "Content strategy & creation" }
];

interface EnhancedTechnicalArea {
  title: string;
  icon: string;
  proficiency: number;
  skills: { name: string; level: number }[];
  description: string;
  color: string;
}

const technicalAreas: EnhancedTechnicalArea[] = [
  {
    title: "Performance",
    icon: "zap",
    proficiency: 92,
    description: "Site speed & optimization expertise",
    color: "text-yellow-400",
    skills: [
      { name: "Core Web Vitals optimization", level: 95 },
      { name: "PageSpeed insights", level: 90 },
      { name: "Database optimization", level: 88 },
      { name: "CDN implementation", level: 85 }
    ]
  },
  {
    title: "Security",
    icon: "shield",
    proficiency: 87,
    description: "Enterprise-grade security implementation",
    color: "text-red-400",
    skills: [
      { name: "SSL/TLS configuration", level: 90 },
      { name: "Cloudflare security", level: 85 },
      { name: "WordPress hardening", level: 88 },
      { name: "GDPR compliance", level: 82 }
    ]
  },
  {
    title: "Analytics",
    icon: "activity",
    proficiency: 94,
    description: "Advanced tracking & insights",
    color: "text-blue-400",
    skills: [
      { name: "Google Analytics 4", level: 95 },
      { name: "Google Tag Manager", level: 92 },
      { name: "Conversion tracking", level: 96 },
      { name: "Custom dashboards", level: 90 }
    ]
  },
  {
    title: "Automation",
    icon: "cog",
    proficiency: 89,
    description: "Workflow optimization & integration",
    color: "text-green-400",
    skills: [
      { name: "CRM workflows", level: 92 },
      { name: "Email sequences", level: 88 },
      { name: "Lead scoring", level: 85 },
      { name: "API integrations", level: 90 }
    ]
  }
];

interface EnhancedTechnologyStack {
  category: string;
  icon: string;
  technologies: { name: string; proficiency: number; isCore: boolean }[];
  description: string;
}

const technologyStacks: EnhancedTechnologyStack[] = [
  {
    category: "Development",
    icon: "code",
    description: "Full-stack development capabilities",
    technologies: [
      { name: "React", proficiency: 90, isCore: true },
      { name: "WordPress", proficiency: 95, isCore: true },
      { name: "JavaScript", proficiency: 88, isCore: true },
      { name: "PHP", proficiency: 82, isCore: false },
      { name: "Python", proficiency: 75, isCore: false },
      { name: "MySQL", proficiency: 85, isCore: false }
    ]
  },
  {
    category: "Marketing Platforms",
    icon: "mail",
    description: "Marketing automation & CRM expertise",
    technologies: [
      { name: "FluentCRM", proficiency: 98, isCore: true },
      { name: "Mailchimp", proficiency: 85, isCore: false },
      { name: "HubSpot", proficiency: 78, isCore: false },
      { name: "Zapier", proficiency: 92, isCore: true },
      { name: "LearnDash", proficiency: 88, isCore: false }
    ]
  },
  {
    category: "Infrastructure",
    icon: "server",
    description: "Cloud & deployment expertise",
    technologies: [
      { name: "Cloudflare", proficiency: 92, isCore: true },
      { name: "AWS", proficiency: 75, isCore: false },
      { name: "Docker", proficiency: 70, isCore: false },
      { name: "Git", proficiency: 88, isCore: true },
      { name: "Ubuntu", proficiency: 80, isCore: false }
    ]
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

// Circular Progress Component
const CircularProgress = ({ percentage, size = 60, strokeWidth = 6, className = "" }: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setDisplayPercentage(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage]);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (displayPercentage / 100) * circumference;

  return (
    <div ref={ref} className={`relative inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-border opacity-20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="text-primary transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-semibold text-primary">
        {Math.round(displayPercentage)}%
      </span>
    </div>
  );
};

// Animated Progress Bar
const ProgressBar = ({ percentage, className = "", delay = 0 }: {
  percentage: number;
  className?: string;
  delay?: number;
}) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className={`w-full bg-border/30 rounded-full h-2 overflow-hidden ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
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
          <div className="text-center mb-16">
            <h2 className="mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Core Marketing Skills
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Expertise levels across key marketing disciplines with years of experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSkills.map((skill, index) => {
              const IconComponent = getIcon(skill.icon);
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-8 text-center hover:border-primary hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  data-testid={`core-skill-${index}`}
                >
                  {/* Icon & Progress Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <CircularProgress 
                        percentage={skill.proficiency} 
                        size={80} 
                        strokeWidth={8}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Skill Info */}
                  <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{skill.description}</p>
                  
                  {/* Experience Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20">
                    <Star className="w-3 h-3 text-secondary" />
                    <span className="text-xs font-medium">{skill.yearsExp} years</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Spotlights */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Technical Spotlights
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Specialized technical capabilities that drive measurable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalAreas.map((area, index) => {
              const IconComponent = getIcon(area.icon);
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden relative"
                  data-testid={`tech-area-${index}`}
                >
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Header with Circular Progress */}
                  <div className="flex items-center justify-between mb-8 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ${area.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{area.title}</h3>
                        <p className="text-sm text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                    <CircularProgress 
                      percentage={area.proficiency} 
                      size={64} 
                      strokeWidth={6}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4 relative z-10">
                    {area.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium leading-relaxed">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <ProgressBar 
                          percentage={skill.level} 
                          delay={index * 200 + skillIndex * 100}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Proficiency Badge */}
                  <div className="mt-6 flex justify-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">Overall: {area.proficiency}% Expert</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Proficiency levels across development, marketing, and infrastructure technologies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologyStacks.map((stack, index) => {
              const IconComponent = getIcon(stack.icon);
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-8 hover:border-primary hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  data-testid={`tech-stack-${index}`}
                >
                  {/* Header */}
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{stack.category}</h3>
                      <p className="text-sm text-muted-foreground">{stack.description}</p>
                    </div>
                  </div>

                  {/* Technologies with Proficiency */}
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="group/tech hover:bg-muted/30 rounded-lg p-3 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{tech.name}</span>
                            {tech.isCore && (
                              <Star className="w-3 h-3 text-secondary fill-current" />
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{tech.proficiency}%</span>
                        </div>
                        <ProgressBar 
                          percentage={tech.proficiency} 
                          delay={index * 300 + techIndex * 100}
                          className="group-hover/tech:bg-primary/20"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Core Technologies Summary */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Core Technologies</span>
                      <span className="font-medium">
                        {stack.technologies.filter(tech => tech.isCore).length} of {stack.technologies.length}
                      </span>
                    </div>
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
