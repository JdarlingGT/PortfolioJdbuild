import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface CaseStudyDetailProps {
  caseStudy: {
    slug: string;
    title: string;
    subtitle: string;
    logo: string;
    cover: string;
    category: string;
    challenge: string;
    reasoning: string;
    execution: string[];
    results: string;
    measurement: string[];
    takeaway: string;
  };
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const { title, subtitle, logo, cover, challenge, reasoning, execution, results, measurement, takeaway } = caseStudy;

  return (
    <div className="pt-24">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Back Navigation */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="p-0 h-auto hover:bg-transparent">
            <Link href="/case-studies" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" data-testid="button-back-to-case-studies">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>

        {/* Hero Banner */}
        <div className="relative h-64 bg-muted/30 flex items-center justify-center rounded-xl shadow-lg overflow-hidden">
          {cover && !cover.includes('placeholder') && (
            <img 
              src={cover} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover opacity-20" 
            />
          )}
          <div className="relative text-center z-10 px-8">
            <div className="mb-4 flex justify-center">
              {logo && !logo.includes('placeholder') ? (
                <img 
                  src={logo} 
                  alt={`${title} logo`} 
                  className="max-h-16 max-w-32 object-contain" 
                />
              ) : (
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">{title.charAt(0)}</span>
                </div>
              )}
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2" data-testid="case-study-title">{title}</h1>
            <p className="text-lg text-primary font-semibold" data-testid="case-study-subtitle">{subtitle}</p>
          </div>
        </div>

        {/* Challenge */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4" data-testid="section-challenge">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{challenge}</p>
        </section>

        {/* Approach & Reasoning */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4" data-testid="section-reasoning">My Approach & Reasoning</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{reasoning}</p>
        </section>

        {/* Execution */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4" data-testid="section-execution">Execution</h2>
          <ul className="space-y-3">
            {execution.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-muted-foreground leading-relaxed text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4" data-testid="section-results">Results</h2>
          <Card className="bg-primary/5 border-primary/20 p-6 shadow-sm">
            <p className="text-foreground leading-relaxed text-lg font-medium">{results}</p>
          </Card>
        </section>

        {/* Measurement */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4" data-testid="section-measurement">How It's Measured</h2>
          <ul className="space-y-3">
            {measurement.map((metric, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-muted-foreground leading-relaxed text-lg font-medium">{metric}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Takeaway */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4" data-testid="section-takeaway">Takeaway</h2>
          <blockquote className="border-l-4 border-primary pl-6 italic text-foreground text-lg leading-relaxed font-medium">
            "{takeaway}"
          </blockquote>
        </section>

        {/* Call to Action */}
        <section className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Let's discuss how strategic marketing and technical excellence can drive similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/case-studies">View More Case Studies</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}