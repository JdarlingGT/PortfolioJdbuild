import { Layers, BusFront, TrendingUp } from "lucide-react";
import { useSEO, createPersonSchema, createBreadcrumbSchema } from "@/hooks/use-seo";

export default function About() {
  useSEO({
    title: "About - Jacob Darling | Marketing Strategist & Systems Architect",
    description: "Learn about Jacob Darling's unique background combining marketing strategy with technical systems architecture. 8+ years of experience building automation systems and growth strategies.",
    keywords: "marketing strategist, systems architect, about jacob darling, marketing automation expert, technical marketing",
    canonical: "https://jacobdarling.com/about",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        createPersonSchema(),
        createBreadcrumbSchema([
          { name: "Home", url: "https://jacobdarling.com" },
          { name: "About", url: "https://jacobdarling.com/about" }
        ])
      ]
    }
  });

  return (
    <section className="py-16 bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h1>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  Great marketing ideas often break at the handoff—the critical point where a creative vision meets 
                  the complex reality of technical execution. My career has been built to solve this problem.
                </p>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  I'm Jacob Darling, a marketing leader who operates as both a brand strategist and a systems architect. 
                  On one side, I direct bold rebrands, craft compelling narratives, and launch creative campaigns. 
                  On the other, I design and build the underlying technical infrastructure—the CRM logic, automation workflows, 
                  and web architecture—that makes those campaigns scalable, measurable, and sustainable.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  This hybrid approach allows me to create deeply integrated solutions that don't just look good, 
                  but function brilliantly. Whether I'm relaunching a national brand or building a custom GPT-powered tool, 
                  I thrive on turning abstract goals into powerful, revenue-focused marketing engines.
                </p>
              </div>
              
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <div className="w-48 h-64 bg-muted rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-3"></div>
                    <p className="text-sm">Professional Headshot</p>
                    <p className="text-xs">Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Philosophy</h2>
            
            {/* Enhanced Pull-Quote Callout Box */}
            <div className="relative bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-lg p-6 mb-8">
              <div className="absolute top-4 left-4 text-primary/30 text-6xl font-serif">"</div>
              <blockquote className="text-xl text-foreground font-medium italic ml-8 relative z-10">
                Strategy without architecture is a daydream; architecture without strategy is a machine with no purpose.
              </blockquote>
              <div className="absolute bottom-4 right-4 text-primary/30 text-6xl font-serif rotate-180">"</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Build for the System</h3>
                <p className="text-sm text-muted-foreground">
                  Every component works in concert with the whole for scalability and seamless experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BusFront className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Translate Complexity</h3>
                <p className="text-sm text-muted-foreground">
                  BusFront the gap between creative vision and technical implementation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Measure & Automate</h3>
                <p className="text-sm text-muted-foreground">
                  Focus on KPIs that drive growth while automating repetitive tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
