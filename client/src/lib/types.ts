export interface Metric {
  value: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  imageGradient: string;
  textColor: string;
  category: "Employment" | "Bearcave Marketing";
  challenge?: string;
  solution?: string[];
  impact?: string;
  results?: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface TechnicalArea {
  title: string;
  icon: string;
  skills: string[];
}

export interface TechnologyStack {
  category: string;
  icon: string;
  technologies: string[];
}
