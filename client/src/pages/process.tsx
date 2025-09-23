import { Search, FileText, Wrench, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

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
  useEffect(() => {
    document.title = "My Process - Jacob Darling | Marketing Strategist & Systems Architect";
  }, []);

  return (
    <section className="py-16 bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            From Insight to Impact: My Approach to Building Marketing Engines
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every successful project is built on a foundation of a clear and collaborative process. 
            Here is the four-phase approach I use to turn ambitious marketing goals into measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {processPhases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < processPhases.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-border hidden lg:block" />
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Phase Number & Icon */}
                  <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                    <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center lg:text-left">
                      <div className="text-3xl font-bold text-primary mb-2">{phase.number}</div>
                      <div className="text-sm text-muted-foreground font-medium">Phase {phase.number}</div>
                    </div>
                  </div>

                  {/* Phase Content */}
                  <div className="lg:col-span-10">
                    <div className="bg-card border border-border rounded-lg p-8">
                      <div className="mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          {phase.title}
                        </h2>
                        <h3 className="text-lg text-primary font-medium mb-4">
                          {phase.subtitle}
                        </h3>
                        <p className="text-foreground leading-relaxed">
                          {phase.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-4">Key Activities:</h4>
                        <div className="space-y-3">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground leading-relaxed">
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              This proven process delivers results. Let's discuss how we can apply it to your unique challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  data-testid="button-start-project"
                >
                  Start Your Project
                </button>
              </Link>
              <Link href="/case-studies">
                <button
                  className="inline-flex items-center justify-center px-6 py-3 border border-border bg-card text-foreground rounded-md hover:bg-muted transition-colors"
                  data-testid="button-see-results"
                >
                  See Results
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}