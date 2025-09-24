import { useState, memo, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { megaMenuContent } from "@/lib/navigation-data";

interface NavigationProps {
  onLogoClick?: () => void;
}

// Optimize: Move navigation array outside component to prevent recreation
const NAVIGATION_ITEMS = [
  { name: "Home", href: "/", hasMenu: false },
  { name: "About", href: "/about", hasMenu: true },
  { name: "Case Studies", href: "/case-studies", hasMenu: true },
  { name: "Creative Design", href: "/creative-design", hasMenu: true },
  { name: "Deep Dives", href: "/deep-dives", hasMenu: true },
  { name: "Skills", href: "/skills", hasMenu: true },
  { name: "Process", href: "/process", hasMenu: true },
  { name: "Demos", href: "/demos", hasMenu: true },
  { name: "Contact", href: "/contact", hasMenu: true },
];

const Navigation = memo(function Navigation({ onLogoClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  // Memoize navigation rendering for better performance
  const navigationItems = useMemo(() => {
    return NAVIGATION_ITEMS.map((item) => (
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
    ));
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="nav-sticky">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity" 
            data-testid="logo-link"
            onClick={(e) => {
              if (onLogoClick) {
                onLogoClick();
              }
            }}
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md transition-all hover:shadow-lg hover:scale-105">
              <span className="text-primary-foreground font-bold text-base tracking-tight">JD</span>
            </div>
            <span className="font-bold text-foreground text-lg tracking-tight">Jacob Darling</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems}
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
          className="absolute top-full left-0 right-0 bg-card backdrop-blur-md border-b border-border shadow-xl z-50"
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
                                activeMenu === "Creative Design" ? "/creative-design" : 
                                activeMenu === "Deep Dives" ? 
                                  (item.name === "The War Room" ? "/deep-dives/war-room" :
                                   item.name === "The Launchpad" ? "/deep-dives/launchpad" :
                                   item.name === "The Signal" ? "/deep-dives/signal" :
                                   "/deep-dives") :
                                activeMenu === "Skills" ? "/skills" :
                                activeMenu === "Process" ? "/process" :
                                activeMenu === "Demos" ? "/demos" :
                                activeMenu === "Contact" ? "/contact" : "#"}
                          className="group flex items-start gap-4 p-3 rounded-lg transition-all hover:bg-muted/50 hover:shadow-md"
                          data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {item.name}
                              </p>
                              <ArrowRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
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
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="container py-4">
            <div className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
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
});

export default Navigation;