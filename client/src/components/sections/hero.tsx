import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-bg section-spacing-lg">
      <div className="container">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="mb-8 tracking-tight">
            Jacob Darling — <span className="text-primary">Marketing Strategist</span> & Systems Architect
          </h1>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-12">
            I design a brand's creative vision, then build the intelligent system that brings it to life. 
            From compelling storytelling to scalable automation, I deliver complete marketing ecosystems that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/case-studies" 
              className="btn-primary text-lg"
              data-testid="button-view-portfolio"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary text-lg"
              data-testid="button-get-in-touch"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
