import { Search, FileText, Wrench, TrendingUp, CheckCircle } from "lucide-react";
import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";

interface ProcessPhase {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  icon: React.ComponentType<any>;
  color: string;
}

const processPhases: ProcessPhase[] = [
  {
    number: "01",
    title: "Discovery & Audit",
    subtitle: "Understanding the 'Why'",
    description: "Before a single line of code is written or a campaign is launched, we must deeply understand the landscape. This phase is about asking the right questions and gathering the data needed to inform our strategy. I immerse myself in your business goals, target audience, competitive environment, and existing technology stack.",
    activities: [
      "Stakeholder Interviews: Aligning on business objectives, defining what success looks like, and understanding pain points",
      "Technical Audit: A deep dive into your current systems. I analyze site performance, security vulnerabilities, and database health",
      "Analytics & Tracking Review: Assessing the current state of your analytics (GA4/GTM) to ensure data is clean, accurate, and actionable",
      "Brand & Market Analysis: Evaluating your current brand positioning and messaging systems to identify opportunities for growth"
    ],
    icon: Search,
    color: "bg-primary/80"
  },
  {
    number: "02", 
    title: "Strategy & Architecture",
    subtitle: "Designing the Blueprint",
    description: "With a clear understanding of the goals and challenges, I design the blueprint for the entire marketing ecosystem. This is where my hybrid role as strategist and architect truly comes to life. I create a comprehensive plan that outlines the creative direction, the technical infrastructure, and the specific tactics we'll use to achieve our objectives.",
    activities: [
      "Brand Strategy Development: Crafting the core messaging, visual identity, and content pillars that will guide the creative execution",
      "Systems Architecture Design: Mapping out the technology stack and data flows. This includes designing the CRM tagging taxonomy, planning automation sequences, and selecting the right tools",
      "Measurement Plan: Defining the key performance indicators (KPIs) and creating a detailed plan for how we will track and report on them using tools like Google Tag Manager",
      "Project Roadmapping: Breaking down the project into clear phases, deliverables, and timelines using agile methodologies"
    ],
    icon: FileText,
    color: "bg-primary"
  },
  {
    number: "03",
    title: "Build & Integration", 
    subtitle: "Bringing the Vision to Life",
    description: "This is the execution phase where the blueprint becomes a reality. I manage the development process, build out the marketing systems, and ensure that all the moving parts are seamlessly integrated. My hands-on technical skills allow me to not only direct the work but also contribute directly to the build.",
    activities: [
      "Web & App Development: Building responsive, high-performance websites and custom features, such as the React-based Instructor Dashboard",
      "CRM & Automation Implementation: Building out the hundreds of email workflows, lead scoring systems, and re-engagement flows that power the customer lifecycle",
      "Analytics & Tracking Setup: Implementing the measurement plan in GTM, setting up custom event tracking, and configuring dashboards for real-time insights",
      "Creative Production: Directing and producing the necessary creative assets, including photography, videography, and copy"
    ],
    icon: Wrench,
    color: "bg-primary/60"
  },
  {
    number: "04",
    title: "Optimization & Growth",
    subtitle: "Data-Driven Evolution", 
    description: "A marketing system is a living entity that must be continuously monitored, analyzed, and improved. The launch is just the beginning. In this phase, we use the data we're collecting to make intelligent decisions, refine our approach, and drive sustained growth.",
    activities: [
      "Performance Monitoring: Using tools like Netdata and Google Analytics to monitor site speed, server health, and user behavior, and proactively address issues",
      "A/B Testing & Conversion Rate Optimization (CRO): Systematically testing headlines, calls-to-action, and user flows to improve conversion rates", 
      "Funnel Analysis: Analyzing the entire customer journey to identify drop-off points and opportunities for improvement",
      "Iterative Refinement: Using insights from our analysis to make ongoing improvements to the strategy, the creative, and the underlying technology"
    ],
    icon: TrendingUp,
    color: "bg-primary/40"
  }
];

export default function Process() {
  useSEO({
    title: "My Process - Jacob Darling | Marketing Strategy & Implementation",
    description: "Discover my proven four-phase approach to building marketing engines: from discovery and audit to optimization and growth with measurable results.",
    keywords: "marketing process, strategy development, systems architecture, discovery audit, optimization growth",
    canonical: "https://jacobdarling.com/process",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Marketing Process & Methodology",
      "description": "Four-phase approach to building marketing engines with measurable results",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Process", url: "https://jacobdarling.com/process" }
      ])
    }
  });

  return (
    <div className="pt-24">
      {/* Header Section */}
      <section className="section-spacing bg-background">
        <div className="container text-center">
          <h1 className="mb-6">My Process</h1>
          <p className="text-lg max-w-3xl mx-auto">
            A proven four-phase approach that transforms ambitious marketing goals into measurable results 
            through strategic thinking and technical excellence.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-spacing bg-card border-t border-border">
        <div className="container">
          <div className="relative">
            {/* Timeline Connector Line - Using border instead of background for gradient */}
            <div className="absolute left-16 top-20 h-full w-px hidden lg:block" 
                 style={{
                   background: 'linear-gradient(to bottom, hsl(210, 100%, 12%), hsl(177, 100%, 70%), hsl(210, 100%, 12%))'
                 }} 
            />
            
            <div className="space-y-24">
              {processPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <div key={index} className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      
                      {/* Phase Number & Icon */}
                      <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
                        <div className="relative flex flex-col items-center lg:items-start">
                          {/* Large numbered icon badge */}
                          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg relative z-10">
                            <span className="text-2xl font-bold text-white">{phase.number}</span>
                          </div>
                          {/* Icon below number */}
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          {/* Timeline dot for desktop */}
                          <div className="absolute left-6 top-6 w-4 h-4 bg-secondary rounded-full border-4 border-card hidden lg:block z-20" />
                        </div>
                        <div className="text-center lg:text-left">
                          <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                            Phase {phase.number}
                          </div>
                        </div>
                      </div>

                      {/* Phase Content */}
                      <div className="lg:col-span-9">
                        <div className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-200 shadow-sm">
                          <div className="mb-8">
                            <h2 className="mb-3">{phase.title}</h2>
                            <h3 className="text-xl text-primary font-semibold mb-6">
                              {phase.subtitle}
                            </h3>
                            <p className="text-lg leading-relaxed">
                              {phase.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-6">Key Activities</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {phase.activities.map((activity, activityIndex) => (
                                <div key={activityIndex} className="flex items-start gap-4">
                                  <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="leading-relaxed">
                                    {activity}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-background border-t border-border">
        <div className="container text-center">
          <h2 className="mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            This proven process delivers results. Let's discuss how we can apply it to your unique 
            challenges and goals to create measurable marketing success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary" data-testid="link-start-project-cta">
              Start Your Project
            </a>
            <a href="/case-studies" className="btn-secondary" data-testid="link-see-results-cta">
              See Results
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}