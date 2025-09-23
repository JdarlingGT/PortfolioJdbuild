import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  User, 
  Briefcase, 
  Code, 
  Target, 
  Play, 
  Mail,
  ArrowRight,
  Building2,
  Users,
  Lightbulb,
  Settings,
  BarChart3,
  Monitor
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "Home", href: "/", hasMenu: false },
    { name: "About", href: "/about", hasMenu: true },
    { name: "Case Studies", href: "/case-studies", hasMenu: true },
    { name: "Skills", href: "/skills", hasMenu: true },
    { name: "Process", href: "/process", hasMenu: true },
    { name: "Demos", href: "/demos", hasMenu: true },
    { name: "Contact", href: "/contact", hasMenu: true },
  ];

  const megaMenuContent = {
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
            { name: "Black Letter Legal", description: "B2B lead generation system", icon: Users },
            { name: "Gomez Craft Barbecue", description: "Restaurant brand & digital presence", icon: Target }
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

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="nav-sticky">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md transition-all hover:shadow-lg hover:scale-105">
              <span className="text-primary-foreground font-bold text-base tracking-tight">JD</span>
            </div>
            <span className="font-bold text-foreground text-lg tracking-tight">Jacob Darling</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMenu && setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.href}
                  className={`transition-all py-2 px-1 font-medium text-sm tracking-wide ${
                    location === item.href
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-primary hover:border-b-2 hover:border-secondary"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-muted-foreground hover:text-secondary" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground hover:text-primary" />
              )}
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              data-testid="theme-toggle-mobile"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-5 w-5 text-muted-foreground" /> : <Menu className="h-5 w-5 text-muted-foreground" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {activeMenu && megaMenuContent[activeMenu as keyof typeof megaMenuContent] && (
        <div 
          className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-sm border-b border-border shadow-lg"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid gap-8" style={{ gridTemplateColumns: `repeat(${megaMenuContent[activeMenu as keyof typeof megaMenuContent].sections.length}, 1fr)` }}>
              {megaMenuContent[activeMenu as keyof typeof megaMenuContent].sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={itemIndex}
                          href={activeMenu === "About" ? "/about" : 
                                activeMenu === "Case Studies" ? "/case-studies" : 
                                activeMenu === "Skills" ? "/skills" : 
                                activeMenu === "Process" ? "/process" : 
                                activeMenu === "Demos" ? "/demos" : 
                                activeMenu === "Contact" ? "/contact" : "/"}
                          className="group flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                          onClick={() => setActiveMenu(null)}
                          data-testid={`mega-menu-${activeMenu.toLowerCase()}-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </span>
                              <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Ready to get started?</h4>
                  <p className="text-sm text-muted-foreground">Let's discuss your marketing automation and systems architecture needs.</p>
                </div>
                <Button asChild className="flex-shrink-0">
                  <Link href="/contact" onClick={() => setActiveMenu(null)}>
                    Get In Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="container py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-colors ${
                    location === item.href
                      ? "text-primary bg-primary/10 border-l-4 border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
