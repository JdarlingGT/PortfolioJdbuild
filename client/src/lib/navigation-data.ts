import { 
  User, 
  Lightbulb, 
  Briefcase,
  Building2,
  Users,
  Target,
  Palette,
  Shield,
  Layout,
  Image,
  BarChart3,
  Code,
  Settings,
  Monitor,
  Play,
  Server,
  Rocket,
  TrendingUp,
  BookOpen,
  Mail
} from "lucide-react";

export interface NavigationItem {
  name: string;
  description: string;
  icon: any;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}

export interface MegaMenuContent {
  sections: NavigationSection[];
}

// Separate the mega menu data for better performance and maintainability
export const megaMenuContent: Record<string, MegaMenuContent> = {
  "About": {
    sections: [
      {
        title: "Overview",
        items: [
          { name: "My Story", description: "Marketing strategist & systems architect", icon: User },
          { name: "Philosophy", description: "Strategy meets architecture", icon: Lightbulb },
          { name: "Experience", description: "8+ years in marketing & tech", icon: Briefcase }
        ]
      }
    ]
  },
  "Case Studies": {
    sections: [
      {
        title: "Featured Projects",
        items: [
          { name: "Graston Technique", description: "Healthcare training transformation", icon: Building2 },
          { name: "Black Letter Legal", description: "Logo design & brand identity", icon: Users },
          { name: "Gomez Craft Barbecue", description: "Restaurant brand & digital presence", icon: Target }
        ]
      }
    ]
  },
  "Creative Design": {
    sections: [
      {
        title: "Design Categories",
        items: [
          { name: "Logo Design", description: "Custom logos & brand marks", icon: Palette },
          { name: "Brand Identity", description: "Complete visual systems", icon: Shield },
          { name: "Print Materials", description: "Business cards & collateral", icon: Layout },
          { name: "Digital Graphics", description: "Web & social media assets", icon: Image }
        ]
      }
    ]
  },
  "Skills": {
    sections: [
      {
        title: "Core Marketing",
        items: [
          { name: "Strategy", description: "Data-driven marketing strategy", icon: Target },
          { name: "Analytics", description: "Performance measurement", icon: BarChart3 },
          { name: "Content", description: "Creative content marketing", icon: Lightbulb }
        ]
      },
      {
        title: "Technical Skills",
        items: [
          { name: "Web Development", description: "React, TypeScript, Node.js", icon: Code },
          { name: "Automation", description: "CRM & workflow automation", icon: Settings },
          { name: "Dashboards", description: "Custom analytics interfaces", icon: Monitor }
        ]
      }
    ]
  },
  "Process": {
    sections: [
      {
        title: "My 4-Phase Workflow",
        items: [
          { name: "Discovery & Audit", description: "Understanding your business", icon: Target },
          { name: "Strategy & Architecture", description: "Planning the solution", icon: Lightbulb },
          { name: "Build & Integration", description: "Creating & implementing", icon: Code },
          { name: "Optimization & Growth", description: "Measuring & improving", icon: BarChart3 }
        ]
      }
    ]
  },
  "Demos": {
    sections: [
      {
        title: "Interactive Showcases",
        items: [
          { name: "Automation Workflow", description: "Live marketing automation demo", icon: Play },
          { name: "Analytics Dashboard", description: "Real-time data visualization", icon: Monitor },
          { name: "CRM Interface", description: "Custom contact management", icon: Users }
        ]
      }
    ]
  },
  "Deep Dives": {
    sections: [
      {
        title: "Project Stories",
        items: [
          { name: "The War Room", description: "Full-stack performance overhaul", icon: Server },
          { name: "The Launchpad", description: "Automated membership funnel", icon: Rocket },
          { name: "The Signal", description: "Analytics & attribution overhaul", icon: TrendingUp },
          { name: "All Stories", description: "View complete collection", icon: BookOpen }
        ]
      }
    ]
  },
  "Contact": {
    sections: [
      {
        title: "Get In Touch",
        items: [
          { name: "Send Message", description: "Contact form & inquiries", icon: Mail },
          { name: "Schedule Call", description: "Book a consultation", icon: Users },
          { name: "View Resume", description: "Download my experience", icon: Briefcase }
        ]
      }
    ]
  }
};