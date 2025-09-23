import { Layers, BusFront, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="py-16 bg-background pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h1>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
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

          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Philosophy</h2>
            <p className="text-lg text-muted-foreground mb-6 italic">
              "Strategy without architecture is a daydream; architecture without strategy is a machine with no purpose."
            </p>
            
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
