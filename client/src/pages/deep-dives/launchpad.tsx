import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import DeepDiveTemplate from "@/components/DeepDiveTemplate";
import { Rocket } from "lucide-react";

export default function LaunchpadDeepDive() {
  useSEO({
    title: "The Launchpad: Automated Membership Funnel | Jacob Darling",
    description: "How we transformed the Graston Technique provider directory from a simple listing into a fully automated, value-driven product that converts trial users into long-term subscribers.",
    keywords: "automated membership funnel, product strategy, lifecycle marketing, conversion optimization, trial to paid",
    canonical: "https://jacobdarling.com/deep-dives/launchpad",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Launchpad: Anatomy of an Automated Membership Funnel",
      "description": "Transforming a provider directory into a fully automated, value-driven product",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Project Deep Dives", url: "https://jacobdarling.com/deep-dives" },
        { name: "The Launchpad", url: "https://jacobdarling.com/deep-dives/launchpad" }
      ])
    }
  });

  const sections = [
    {
      id: "opportunity",
      title: "The Opportunity - A Hidden Asset",
      content: (
        <div>
          <p>
            Every business has underutilized assets. For Graston Technique®, one of those was the provider directory. 
            It was a functional but passive listing. The opportunity was to transform it from a simple utility into a 
            strategic tool for demonstrating the value of our training and creating a new, automated revenue stream.
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 italic">
            The vision was clear: build a system where a clinician completes their training and is seamlessly enrolled 
            into a free trial of a premium directory profile, with a fully automated onboarding and upgrade email sequence 
            designed to showcase ROI and drive conversions.
          </blockquote>
        </div>
      )
    },
    {
      id: "architecture",
      title: "The Architecture - Building the Conversion Engine",
      content: (
        <div>
          <p>
            To make this vision a reality, I architected a deeply integrated system that connected our training platform, 
            e-commerce system, and CRM.
          </p>
          
          <div className="bg-accent/10 border border-accent rounded-lg p-6 my-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from project update email:</p>
            <p className="italic">
              "Profiles Are Add-Ons: Listings aren't sold separately—they're included in our training bundles... 
              [The system will] Trigger by Training Completion: Essential Training → 2-month Preferred Provider trial; 
              Advanced Training → 2-month Premier Provider trial."
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-primary mb-4">The Technical Blueprint:</h4>
            <ul className="space-y-4">
              <li>
                <strong>Automated Trial Activation:</strong> Using Uncanny Automator, I built a workflow that triggers 
                the moment a clinician completes their training in LearnDash. The system automatically creates their new 
                provider profile and activates a 60-day trial of the premium tier.
              </li>
              <li>
                <strong>Dynamic Content & UX:</strong> I enhanced the directory with new, value-driven features, including 
                interactive tier comparison tables and an ROI calculator that loaded asynchronously to avoid impacting page performance.
              </li>
              <li>
                <strong>Lifecycle Email Automation:</strong> The core of the conversion engine is a 60-day automated email 
                sequence built in FluentCRM. This sequence is designed to onboard the new user, demonstrate the value of 
                their profile, and create a compelling case for upgrading to a paid subscription.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "user-journey",
      title: "The User Journey - A 60-Day Automated Onboarding",
      content: (
        <div>
          <p>
            A successful conversion is about more than just a good product; it's about effective communication and 
            demonstrating value over time. I designed the email sequence to be a guided tour of the benefits.
          </p>
          
          <div className="bg-accent/10 border border-accent rounded-lg p-6 my-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from project update email, detailing the automated email sequence:</p>
            <div className="space-y-2 mt-4">
              <p><strong>Day 0:</strong> Welcome & "Your Profile Is Live"</p>
              <p><strong>Day 1:</strong> Quick-Start Setup Guide</p>
              <p><strong>Day 7:</strong> Optimization Tips (photos, bio, specialties)</p>
              <p><strong>Day 30:</strong> Dashboard & Analytics Overview</p>
              <p><strong>Day 53:</strong> "Your Trial Ends Soon" Reminder</p>
              <p><strong>Day 61:</strong> Trial Wrap-Up + Renewal Options</p>
            </div>
          </div>

          <p>
            This sequence ensures that every new clinician understands exactly how to get the most out of their profile. 
            By providing ongoing tips and showcasing their personal profile analytics (clicks, views, form submissions), 
            we give them clear ROI data and a powerful reason to continue their subscription.
          </p>
        </div>
      )
    },
    {
      id: "rollout",
      title: "The Rollout Strategy - Data-Driven & Iterative",
      content: (
        <div>
          <p>
            Launching a new system like this requires a careful, data-driven approach. We couldn't simply turn it on 
            for everyone at once.
          </p>
          
          <div className="bg-accent/10 border border-accent rounded-lg p-6 my-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from rollout plan:</p>
            <div className="italic">
              <p className="font-medium mb-2">Next Steps: Batch Rollout to Previous Clinicians</p>
              <ul className="space-y-1 ml-4">
                <li>• <strong>Identify Cohorts:</strong> Segment past Essential and Advanced graduates by completion date.</li>
                <li>• <strong>Staggered Launch:</strong> Roll out in 2–3-week intervals to monitor engagement and optimize messaging.</li>
                <li>• <strong>Analyze & Refine:</strong> After each batch, review open rates, profile completions, and upgrade interest before proceeding.</li>
              </ul>
            </div>
          </div>

          <p>
            This iterative approach allowed us to test our messaging, analyze user behavior, and refine the process with 
            each cohort, ensuring the highest possible conversion rate when we launched the system to all new graduates.
          </p>
        </div>
      )
    },
    {
      id: "impact",
      title: "The Impact - From Cost Center to Conversion Engine",
      content: (
        <div>
          <p>This project transformed the provider directory from a simple feature into a fully automated product. It now serves as:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 my-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">A Value-Add for Training</h5>
              <p>It provides a tangible, immediate benefit to clinicians upon completing their training.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">An Automated Onboarding System</h5>
              <p>It educates users and demonstrates the value of the platform without any manual intervention.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">A New Revenue Stream</h5>
              <p>It creates a predictable and scalable source of recurring revenue for the business.</p>
            </div>
          </div>

          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-8 italic">
            This is a prime example of my philosophy in action: by blending marketing strategy with robust technical 
            architecture, we can build systems that not only look good but also drive measurable business growth.
          </blockquote>
        </div>
      )
    }
  ];

  return (
    <DeepDiveTemplate
      title="The Launchpad"
      subtitle="Anatomy of an Automated Membership Funnel"
      readTime="10 min read"
      keyTakeaways={["Product Vision", "Automation Architecture", "Lifecycle Marketing", "Trial Conversion Strategy", "System Integration"]}
      sections={sections}
      heroIcon={Rocket}
      heroIconBg="bg-blue-500"
    />
  );
}