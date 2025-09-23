import { ArrowRight } from "lucide-react";
import { type CaseStudy } from "@/lib/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="case-study-card bg-card rounded-lg overflow-hidden">
      <div 
        className={`h-48 ${caseStudy.imageGradient} flex items-center justify-center`}
        data-testid={`case-study-image-${caseStudy.id}`}
      >
        <div className={`${caseStudy.textColor} font-bold text-xl`}>
          {caseStudy.title}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-primary font-medium mb-3">
          {caseStudy.subtitle}
        </p>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {caseStudy.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded"
              data-testid={`tech-${caseStudy.id}-${index}`}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-sm text-primary hover:text-primary/80 cursor-pointer">
          <span>View Case Study</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </div>
      </div>
    </div>
  );
}
