import { type Metric } from "@/lib/types";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { TrendingUp, Target, Zap, Users } from "lucide-react";

interface EnhancedMetric {
  value: number;
  suffix: string;
  description: string;
  icon: any;
  color: string;
  bgGradient: string;
}

const metrics: EnhancedMetric[] = [
  {
    value: 70,
    suffix: "%",
    description: "Reduction in support tickets via AI & automation",
    icon: Zap,
    color: "text-yellow-400",
    bgGradient: "from-yellow-500/10 to-orange-500/10"
  },
  {
    value: 400,
    suffix: "+",
    description: "CRM workflows built for lead scoring & engagement",
    icon: Target,
    color: "text-blue-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    value: 40,
    suffix: "%",
    description: "Increase in e-commerce conversions through innovation",
    icon: TrendingUp,
    color: "text-green-400",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    value: 35,
    suffix: "%",
    description: "Increase in qualified leads post-SEO & brand overhaul",
    icon: Users,
    color: "text-purple-400",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  }
];

export default function KeyMetrics() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section className="section-spacing bg-gradient-to-br from-card to-muted/30" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Results I Deliver
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Measurable impact through strategic marketing and technical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className={`
                  relative group cursor-pointer
                  bg-gradient-to-br ${metric.bgGradient} 
                  backdrop-blur-sm border border-border/50
                  rounded-2xl p-8 
                  transform transition-all duration-500 ease-out
                  hover:scale-105 hover:shadow-2xl hover:shadow-primary/10
                  animate-fade-in
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`metric-${index}`}
              >
                {/* Background decoration */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className={`${metric.color} mb-4 relative z-10`}>
                  <IconComponent className="w-8 h-8 mb-2" />
                </div>

                {/* Animated Counter */}
                <div className="relative z-10">
                  <div className="metric-number text-4xl lg:text-5xl font-bold mb-3">
                    {isVisible ? (
                      <CountUp
                        start={0}
                        end={metric.value}
                        duration={2.5}
                        delay={index * 0.2}
                        suffix={metric.suffix}
                        preserveValue={true}
                      />
                    ) : (
                      `0${metric.suffix}`
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="metric-label text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Hover effect indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            );
          })}
        </div>

        {/* Additional visual elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 rounded-full border border-secondary/20">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">
              Proven results across {metrics.length} key performance areas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
