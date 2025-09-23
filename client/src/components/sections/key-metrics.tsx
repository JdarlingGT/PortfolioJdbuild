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
    <section className="section-spacing bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">Results I Deliver</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Measurable impact through strategic marketing and technical excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="metric-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`metric-${index}`}
            >
              <div className="metric-number">
                {metric.value}
              </div>
              <p className="metric-label">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
