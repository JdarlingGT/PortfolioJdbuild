import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Clock, Eye, CheckCircle } from "lucide-react";
import { Link } from "wouter";

interface DeepDiveSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface DeepDiveTemplateProps {
  title: string;
  subtitle: string;
  readTime: string;
  keyTakeaways: string[];
  sections: DeepDiveSection[];
  heroIcon?: React.ComponentType<any>;
  heroIconBg?: string;
}

export default function DeepDiveTemplate({
  title,
  subtitle,
  readTime,
  keyTakeaways,
  sections,
  heroIcon: HeroIcon,
  heroIconBg = "bg-primary"
}: DeepDiveTemplateProps) {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Intersection Observer for tracking active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "-20% 0px -70% 0px"
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Show table of contents after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="pt-24">
      {/* Immersive Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]" style={{ backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="relative container section-spacing">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Navigation */}
            <div className="mb-8">
              <Link 
                href="/deep-dives"
                className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Deep Dives
              </Link>
            </div>

            {/* Hero Icon */}
            {HeroIcon && (
              <div className={`w-20 h-20 ${heroIconBg} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl`}>
                <HeroIcon className="w-10 h-10 text-white" />
              </div>
            )}

            {/* Title & Subtitle */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              {subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span className="text-sm">In-depth analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="relative">
        {/* Sticky Table of Contents */}
        <div className={`hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-30 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}>
          <div className="bg-card border border-border rounded-xl p-4 shadow-lg max-w-xs">
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Story Chapters
            </h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className={`section-spacing ${index > 0 ? "border-t border-border/30" : ""}`}
            >
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-em:text-primary">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="text-primary">{String(index + 1).padStart(2, '0')}.</span>
                  {section.title}
                </h2>
                <div className="leading-relaxed space-y-6">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Key Takeaways */}
        <section className="section-spacing bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
          <div className="container max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                Key Takeaways
              </h2>
              <p className="text-muted-foreground mb-6">
                Core skills and strategic insights demonstrated in this project:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyTakeaways.map((takeaway, index) => (
                  <div
                    key={index}
                    className="bg-accent text-accent-foreground px-4 py-3 rounded-lg font-medium text-center"
                  >
                    {takeaway}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Navigation to Next */}
        <section className="section-spacing bg-background border-t border-border">
          <div className="container max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Want to See More Project Stories?
            </h3>
            <p className="text-muted-foreground mb-8">
              Explore other deep dives that showcase strategic thinking and technical expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/deep-dives" className="btn-secondary">
                All Deep Dives
              </Link>
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}