import Hero from "@/components/sections/hero";
import KeyMetrics from "@/components/sections/key-metrics";
import Testimonials from "@/components/sections/testimonials";
import ChatAgent from "@/components/ChatAgent";
import { useSEO, createPersonSchema, createWebsiteSchema } from "@/hooks/use-seo";

export default function Home() {
  useSEO({
    title: "Jacob Darling | Marketing Strategist & Systems Architect",
    description: "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions for healthcare, legal, and service businesses.",
    keywords: "marketing strategist, systems architect, marketing automation, CRM development, dashboard development, growth marketing, technical marketing",
    ogTitle: "Jacob Darling | Marketing Strategist & Systems Architect",
    ogDescription: "Marketing strategist combining strategic thinking with technical expertise. Specialized in automation systems, custom dashboards, and growth-driven marketing solutions.",
    canonical: "https://jacobdarling.com",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [createPersonSchema(), createWebsiteSchema()]
    }
  });

  return (
    <>
      <Hero />
      
      {/* AI Agent Introduction Section */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-6">Meet Your Interactive Portfolio Assistant</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Want to learn more about my projects, skills, and career achievements? 
              Chat with my AI agent below — it's trained on my portfolio and can guide you through my work.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-border/50">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Chat with my AI Agent to learn more about my work
                </h3>
                <p className="text-muted-foreground">
                  Ask questions about my experience at Graston Technique, Bearcave Marketing projects, 
                  technical skills, or anything else from my portfolio.
                </p>
              </div>
              <ChatAgent />
            </div>
          </div>
        </div>
      </section>
      
      <KeyMetrics />
      <Testimonials />
    </>
  );
}
