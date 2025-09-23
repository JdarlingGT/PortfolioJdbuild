import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import DeepDiveTemplate from "@/components/DeepDiveTemplate";
import { TrendingUp } from "lucide-react";

export default function SignalDeepDive() {
  useSEO({
    title: "The Signal: Analytics & Attribution Overhaul | Jacob Darling",
    description: "How I rebuilt the entire tracking infrastructure for GrastonTechnique.com, eliminating data chaos and creating a unified system for precise attribution and deep user insights.",
    keywords: "analytics overhaul, attribution tracking, Google Tag Manager, data integrity, conversion tracking, marketing analytics",
    canonical: "https://jacobdarling.com/deep-dives/signal",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The Signal: Anatomy of an Analytics & Attribution Overhaul",
      "description": "Rebuilding tracking infrastructure to eliminate data chaos and create unified attribution",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Project Deep Dives", url: "https://jacobdarling.com/deep-dives" },
        { name: "The Signal", url: "https://jacobdarling.com/deep-dives/signal" }
      ])
    }
  });

  const sections = [
    {
      id: "problem",
      title: "The Problem - Flying Blind with Bad Data",
      content: (
        <div>
          <p>
            The marketing team was making decisions based on incomplete and inaccurate data. The analytics infrastructure 
            was suffering from years of technical debt, including:
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-red-600 mb-4">Critical Issues Identified:</h4>
            <ul className="space-y-3">
              <li>
                <strong>Legacy Tag Bloat:</strong> The site was bogged down with old UA tags, duplicate tracking codes 
                from different plugins, and legacy Facebook Pixel code, leading to slow performance and conflicting data.
              </li>
              <li>
                <strong>Attribution Drift:</strong> We had unreliable UTM and Ads tracking, with significant session loss 
                across domains. We couldn't confidently trace a conversion back to its original source.
              </li>
              <li>
                <strong>Missing Insights:</strong> We lacked deep engagement tracking. We didn't know if users were watching 
                videos, scrolling to key sections, or interacting with important page elements.
              </li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 italic">
            We had plenty of data, but very little reliable information.
          </blockquote>
        </div>
      )
    },
    {
      id: "architecture",
      title: "The Architecture - Designing a System for Truth",
      content: (
        <div>
          <p>
            My goal was to build a clean, unified, and scalable tracking stack centered around Google Tag Manager (GTM) 
            as the single source of truth.
          </p>
          
          <div className="bg-accent/10 border border-accent rounded-lg p-6 my-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from project update email:</p>
            <p className="italic">
              "This update covers everything now live across the site, from a fully restructured GTM setup and dashboard 
              UX enhancements to deeper caching logic and critical error recovery... Impact: Precise attribution, 
              cross-domain consistency, and deeper engagement insights."
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-primary mb-4">The Strategic Blueprint:</h4>
            <ul className="space-y-4">
              <li>
                <strong>Unify Under GTM:</strong> Remove all hardcoded tracking scripts and manage everything through 
                a single, clean GTM container.
              </li>
              <li>
                <strong>Cross-Domain Tracking:</strong> Implement proper cross-domain tracking to maintain session 
                integrity as users move between our main site, subdomain properties, and external checkout flows.
              </li>
              <li>
                <strong>Enhanced Event Tracking:</strong> Deploy comprehensive event tracking for video engagement, 
                form interactions, scroll depth, and key user behaviors that indicate purchase intent.
              </li>
              <li>
                <strong>Attribution Preservation:</strong> Ensure UTM parameters and campaign data are preserved 
                throughout the entire user journey, from first click to final conversion.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "implementation",
      title: "The Implementation - Rebuilding from the Ground Up",
      content: (
        <div>
          <p>
            The implementation required a systematic approach to avoid breaking existing tracking while building the new system.
          </p>
          
          <div className="space-y-6 my-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Phase 1: Clean Slate</h5>
              <p>Removed all legacy tracking codes, duplicate pixels, and conflicting analytics implementations. This immediately improved page load times by 15%.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Phase 2: GTM Container Rebuild</h5>
              <p>Built a completely new GTM container (v28) with a clean hierarchy, proper naming conventions, and organized trigger structure for maintainability.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Phase 3: Advanced Event Architecture</h5>
              <p>Implemented comprehensive event tracking including:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Video engagement metrics (25%, 50%, 75%, completion)</li>
                <li>Form interaction tracking (focus, submission, abandonment)</li>
                <li>Scroll depth tracking for content optimization</li>
                <li>File download and external link tracking</li>
                <li>Search functionality usage patterns</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Phase 4: Cross-Domain Integration</h5>
              <p>Configured seamless tracking across all properties including course platforms, event registration systems, and e-commerce checkouts.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "validation",
      title: "The Validation - Testing Every Data Point",
      content: (
        <div>
          <p>
            A tracking system is only as good as its accuracy. I implemented comprehensive testing and validation 
            procedures to ensure data integrity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Real-Time Testing</h5>
              <p>Used GTM Preview mode and Google Analytics Real-Time reports to verify event firing and data accuracy across all user flows.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Cross-Platform Verification</h5>
              <p>Validated data consistency between GA4, Google Ads, Facebook Ads Manager, and internal CRM systems.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Attribution Testing</h5>
              <p>Tested UTM parameter preservation through complex user journeys including course enrollment and multi-step checkouts.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">Performance Impact</h5>
              <p>Monitored page load times and Core Web Vitals to ensure tracking enhancements didn't compromise user experience.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "results",
      title: "The Results - Clear Signal from the Noise",
      content: (
        <div>
          <p>
            The new tracking infrastructure transformed our ability to make data-driven marketing decisions.
          </p>
          
          <div className="space-y-6 my-8">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">🎯 Attribution Accuracy</h5>
              <p>Achieved 95%+ attribution accuracy across all marketing channels, eliminating the "dark funnel" that was obscuring conversion sources.</p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">📊 Conversion Insights</h5>
              <p>Gained deep visibility into user behavior patterns, identifying that video engagement beyond 50% increased conversion probability by 340%.</p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">⚡ Performance Improvement</h5>
              <p>Reduced tracking-related page load time by 25% while dramatically increasing data collection depth and accuracy.</p>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">🔄 Cross-Domain Continuity</h5>
              <p>Eliminated session loss between domains, providing complete user journey visibility from awareness to purchase.</p>
            </div>
          </div>

          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-8 italic">
            The result: a marketing team empowered with reliable, actionable data that drives confident decision-making 
            and measurable ROI improvements across all channels.
          </blockquote>
        </div>
      )
    }
  ];

  return (
    <DeepDiveTemplate
      title="The Signal"
      subtitle="Anatomy of an Analytics & Attribution Overhaul"
      readTime="8 min read"
      keyTakeaways={["Analytics Engineering", "Data Integrity", "Marketing ROI Optimization", "Cross-Domain Tracking", "Performance Optimization"]}
      sections={sections}
      heroIcon={TrendingUp}
      heroIconBg="bg-green-500"
    />
  );
}