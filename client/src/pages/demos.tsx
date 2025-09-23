import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { 
  Play, 
  RotateCcw, 
  Monitor, 
  TrendingUp, 
  Users, 
  Mail, 
  Calendar, 
  BarChart3,
  Filter,
  Download,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Simulated automation workflow data
const workflowSteps = [
  { id: 1, name: "Lead Capture", status: "completed", duration: "2s" },
  { id: 2, name: "Data Enrichment", status: "completed", duration: "1.5s" },
  { id: 3, name: "Scoring Analysis", status: "active", duration: "0.8s" },
  { id: 4, name: "Segmentation", status: "pending", duration: "1.2s" },
  { id: 5, name: "Email Trigger", status: "pending", duration: "0.3s" },
  { id: 6, name: "CRM Update", status: "pending", duration: "0.5s" }
];

// Dashboard metrics simulation
const dashboardMetrics = [
  { label: "Active Campaigns", value: 12, change: "+3", trend: "up" },
  { label: "Conversion Rate", value: "24.7%", change: "+2.3%", trend: "up" },
  { label: "Lead Score Avg", value: 78, change: "+5", trend: "up" },
  { label: "Response Time", value: "4.2m", change: "-1.1m", trend: "up" }
];

export default function Demos() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [selectedDemo, setSelectedDemo] = useState<string>("automation");
  const [stepProgress, setStepProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const startSimulation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
    
    setIsRunning(true);
    setCurrentStep(0);
    setStepProgress(0);
    
    // Progress animation for current step
    const updateProgress = () => {
      setStepProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 2;
      });
    };
    
    progressRef.current = setInterval(updateProgress, 30);
    
    // Simulate workflow progression
    intervalRef.current = setInterval(() => {
      setCurrentStep(prev => {
        const nextStep = prev + 1;
        setStepProgress(0); // Reset progress for next step
        
        if (nextStep >= workflowSteps.length) {
          setIsRunning(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          if (progressRef.current) {
            clearInterval(progressRef.current);
            progressRef.current = null;
          }
          return workflowSteps.length - 1;
        }
        return nextStep;
      });
    }, 1500);
  };

  const resetSimulation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
    setIsRunning(false);
    setCurrentStep(-1);
    setStepProgress(0);
  };

  // Helper function to determine step status
  const getStepStatus = (index: number) => {
    if (index < currentStep) return "complete";
    if (index === currentStep && isRunning) return "processing";
    if (index === currentStep && !isRunning && currentStep >= 0) return "complete";
    return "pending";
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="demos-heading">
            Interactive Demos & Labs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the marketing automation tools and dashboards I build for clients. 
            These interactive demos showcase real functionality from actual projects.
          </p>
        </div>

        {/* Demo Selection */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            variant={selectedDemo === "automation" ? "default" : "outline"}
            onClick={() => setSelectedDemo("automation")}
            data-testid="button-demo-automation"
          >
            <Play className="w-4 h-4 mr-2" />
            Automation Workflow
          </Button>
          <Button
            variant={selectedDemo === "dashboard" ? "default" : "outline"}
            onClick={() => setSelectedDemo("dashboard")}
            data-testid="button-demo-dashboard"
          >
            <Monitor className="w-4 h-4 mr-2" />
            Analytics Dashboard
          </Button>
          <Button
            variant={selectedDemo === "crm" ? "default" : "outline"}
            onClick={() => setSelectedDemo("crm")}
            data-testid="button-demo-crm"
          >
            <Users className="w-4 h-4 mr-2" />
            CRM Interface
          </Button>
        </div>

        {/* Automation Demo */}
        {selectedDemo === "automation" && (
          <div className="space-y-8">
            <Card data-testid="card-automation-demo">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary" />
                  Marketing Automation Workflow
                </CardTitle>
                <CardDescription>
                  Watch how leads flow through intelligent automation sequences, 
                  from capture to conversion with real-time processing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-8">
                  <Button
                    onClick={startSimulation}
                    disabled={isRunning}
                    data-testid="button-start-workflow"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {isRunning ? "Processing..." : "Start Workflow"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetSimulation}
                    data-testid="button-reset-workflow"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                </div>

                <div className="grid gap-4">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        index <= currentStep && isRunning
                          ? "bg-primary/10 border-primary"
                          : index < currentStep
                          ? "bg-green-50 border-green-200"
                          : "bg-muted/50 border-border"
                      }`}
                      data-testid={`workflow-step-${index}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              getStepStatus(index) === "complete"
                                ? "bg-green-500 text-white"
                                : getStepStatus(index) === "processing"
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{step.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              Processing time: {step.duration}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            getStepStatus(index) === "complete"
                              ? "default"
                              : getStepStatus(index) === "processing"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {getStepStatus(index) === "complete"
                            ? "Complete"
                            : getStepStatus(index) === "processing"
                            ? "Processing"
                            : "Pending"}
                        </Badge>
                      </div>
                      {getStepStatus(index) === "processing" && (
                        <Progress value={stepProgress} className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Dashboard Demo */}
        {selectedDemo === "dashboard" && (
          <div className="space-y-8">
            <Card data-testid="card-dashboard-demo">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Real-Time Analytics Dashboard
                </CardTitle>
                <CardDescription>
                  Interactive dashboard interfaces built with React and modern data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {dashboardMetrics.map((metric, index) => (
                    <div
                      key={index}
                      className="p-4 bg-muted/50 rounded-lg border"
                      data-testid={`metric-${index}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-green-600">
                        {metric.change} vs last period
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/30 rounded-lg p-6 border-2 border-dashed border-muted-foreground/30">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Interactive Chart Area
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Real dashboards include dynamic charts, filtering, and drill-down capabilities
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter Data
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CRM Demo */}
        {selectedDemo === "crm" && (
          <div className="space-y-8">
            <Card data-testid="card-crm-demo">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  CRM Integration Interface
                </CardTitle>
                <CardDescription>
                  Custom CRM interfaces that streamline client management and automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Simulated Contact Cards */}
                  {[
                    { 
                      name: "Sarah Johnson", 
                      company: "TechStart Inc", 
                      score: 92, 
                      status: "hot",
                      lastContact: "2 hours ago",
                      tags: ["Enterprise", "Decision Maker"]
                    },
                    { 
                      name: "Michael Chen", 
                      company: "Growth Partners", 
                      score: 78, 
                      status: "warm",
                      lastContact: "1 day ago",
                      tags: ["Mid-Market", "Evaluation"]
                    },
                    { 
                      name: "Emily Rodriguez", 
                      company: "Local Services Co", 
                      score: 65, 
                      status: "cold",
                      lastContact: "1 week ago",
                      tags: ["Small Business", "Prospect"]
                    }
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card rounded-lg border flex items-center justify-between hover:bg-muted/50 transition-colors"
                      data-testid={`contact-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{contact.name}</h4>
                          <p className="text-sm text-muted-foreground">{contact.company}</p>
                          <div className="flex gap-2 mt-1">
                            {contact.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium">Score: {contact.score}</span>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              contact.status === "hot"
                                ? "bg-red-500"
                                : contact.status === "warm"
                                ? "bg-orange-500"
                                : "bg-blue-500"
                            }`}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">{contact.lastContact}</p>
                        <div className="flex gap-1 mt-2">
                          <Button variant="ghost" size="sm">
                            <Mail className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Calendar className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Build Your Own System?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These demos represent real functionality from client projects. 
            Let's discuss how custom automation and dashboard solutions can transform your business.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild data-testid="button-view-case-studies">
              <Link href="/case-studies">
                View Case Studies
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild data-testid="button-contact">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}