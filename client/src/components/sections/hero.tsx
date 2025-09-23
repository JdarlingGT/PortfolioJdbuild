import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-bg pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Jacob Darling — <span className="text-primary">Marketing Strategist</span> & Systems Architect
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            I design a brand's creative vision, then build the intelligent system that brings it to life. 
            From compelling storytelling to scalable automation, I deliver complete marketing ecosystems that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/case-studies">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-4 text-lg hover:bg-primary/90"
                data-testid="button-view-portfolio"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-card text-foreground border-border px-8 py-4 text-lg hover:bg-muted"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
