import { type Metric } from "@/lib/types";

const metrics: Metric[] = [
  {
    value: "70%",
    description: "Reduction in support tickets via AI & automation"
  },
  {
    value: "400+",
    description: "CRM workflows built for lead scoring & engagement"
  },
  {
    value: "40%",
    description: "Increase in e-commerce conversions through innovation"
  },
  {
    value: "35%",
    description: "Increase in qualified leads post-SEO & brand overhaul"
  }
];

export default function KeyMetrics() {
  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Results I Deliver</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable impact through strategic marketing and technical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-card bg-card border border-border rounded-lg p-6 text-center"
              data-testid={`metric-${index}`}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <p className="text-sm text-muted-foreground">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
