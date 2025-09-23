import { useSEO, createBreadcrumbSchema } from "@/hooks/use-seo";
import DeepDiveTemplate from "@/components/DeepDiveTemplate";
import { Server } from "lucide-react";

export default function WarRoomDeepDive() {
  useSEO({
    title: "The War Room: Full-Stack Performance Overhaul | Jacob Darling",
    description: "A transparent look at executing a multi-week site optimization project for GrastonTechnique.com, transforming performance, security, and reliability from server to browser.",
    keywords: "server optimization, performance tuning, WordPress optimization, LiteSpeed, site speed, web performance",
    canonical: "https://jacobdarling.com/deep-dives/war-room",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "The War Room: Anatomy of a Full-Stack Performance Overhaul",
      "description": "A transparent, real-time look at executing a multi-week site optimization project",
      "breadcrumb": createBreadcrumbSchema([
        { name: "Home", url: "https://jacobdarling.com" },
        { name: "Project Deep Dives", url: "https://jacobdarling.com/deep-dives" },
        { name: "The War Room", url: "https://jacobdarling.com/deep-dives/war-room" }
      ])
    }
  });

  const sections = [
    {
      id: "challenge",
      title: "The Challenge - Beyond Slow Pages",
      content: (
        <div>
          <p>
            The problem wasn't just that a few pages felt sluggish. The entire digital ecosystem was showing signs of strain. 
            Technical debt was accumulating, from a bloated database with ~805 KB of orphaned plugin options to an unoptimized 
            server configuration that led to resource spikes of up to 14 GB of memory under load.
          </p>
          <p>
            Our analytics were unreliable due to legacy GTM tags and attribution gaps, meaning we were flying blind on key 
            marketing decisions.
          </p>
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 italic">
            We needed more than a quick fix; we needed a foundational overhaul.
          </blockquote>
        </div>
      )
    },
    {
      id: "strategy",
      title: "The Strategy - A Multi-Layered Approach",
      content: (
        <div>
          <p>My plan was to tackle the performance and reliability issues from every possible angle, moving from the outside in:</p>
          <div className="bg-card border border-border rounded-lg p-6 my-6">
            <h4 className="font-bold text-primary mb-4">Strategic Blueprint:</h4>
            <ul className="space-y-3">
              <li><strong>Secure the Edge:</strong> Harden the site at the DNS and CDN level with Cloudflare to stop threats before they could even reach our server.</li>
              <li><strong>Optimize the Server:</strong> Migrate from Apache to the more performant LiteSpeed, tune PHP-FPM, and implement Redis caching to slash database query times.</li>
              <li><strong>Streamline the Application:</strong> Clean up the WordPress backend, optimize the asset pipeline (CSS/JS), and refactor heavy front-end components.</li>
              <li><strong>Rebuild the Data Layer:</strong> Overhaul Google Tag Manager for accurate, reliable conversion tracking and user behavior analytics.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "execution",
      title: "The Execution - A Look Inside the Updates",
      content: (
        <div>
          <p>
            Executing a project of this scale requires clear, consistent communication to manage expectations and ensure 
            stakeholders are aware of progress and potential intermittent issues. Here's a look at how we communicated the rollout:
          </p>
          
          <div className="my-8">
            <h4 className="text-xl font-bold text-primary mb-4">Week 1: Laying the Foundation</h4>
            <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-6">
              <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from weekly update email:</p>
              <p className="italic">
                "Over the past week we've tackled a series of critical backend improvements designed to make GrastonTechnique.com 
                faster, more secure, and more reliable. Many of these changes—such as cache purges, PHP configuration tweaks, 
                and asset pipeline updates—will begin to show noticeable gains in our performance metrics within the next 24–48 hours..."
              </p>
            </div>
            
            <h5 className="font-bold mb-3">Key Achievements This Week:</h5>
            <ul className="space-y-2 ml-4">
              <li><strong>Cloudflare Hardening:</strong> Deployed WAF rules to stop common WordPress attacks, enabled Bot Fight Mode (blocking ~85k bad-bot hits/mo), and configured rate-limiting to prevent brute-force floods.</li>
              <li><strong>Server & Caching Kickstart:</strong> Migrated from Apache to LiteSpeed, enabled WP Rocket for page caching, and configured Redis for object caching to reduce database load.</li>
              <li><strong>Database Cleanup:</strong> Removed over 805 KB of unused autoloaded options from the database, resulting in leaner, faster queries.</li>
            </ul>
          </div>

          <div className="my-8">
            <h4 className="text-xl font-bold text-primary mb-4">Week 2: Building Momentum</h4>
            <div className="bg-accent/10 border border-accent rounded-lg p-6 mb-6">
              <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from weekly update email:</p>
              <p className="italic">
                "Building on the extensive improvements we rolled out last week, this latest round takes things further. 
                I focused on tightening tracking accuracy, streamlining front-end performance, resolving key dashboard friction points, 
                and strengthening server-side stability. Performance has improved measurably—and we're not slowing down."
              </p>
            </div>
            
            <h5 className="font-bold mb-3">Key Achievements This Week:</h5>
            <ul className="space-y-2 ml-4">
              <li><strong>GTM & Analytics Overhaul:</strong> Deployed a completely restructured GTM container (v28), removing legacy tags and implementing a clean hierarchy for GA4, Google Ads, and advanced event tracking.</li>
              <li><strong>Front-End Optimization:</strong> Replaced heavy Divi modules (Sliders, Maps) with lightweight, core components, reducing DOM complexity. Enabled static CSS file generation and deferred non-essential JavaScript.</li>
              <li><strong>Instructor Dashboard UX:</strong> Implemented a jQuery-based dynamic filter for event listings and pulled in instrument_model data from FluentCRM.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "results",
      title: "The Results - A Measurable Transformation",
      content: (
        <div>
          <p>The cumulative impact of these changes was a dramatic improvement across the board.</p>
          
          <div className="bg-accent/10 border border-accent rounded-lg p-6 my-6">
            <p className="text-sm font-medium text-muted-foreground mb-2">Excerpt from results summary email:</p>
            <p className="italic">
              "We're already seeing meaningful improvements—page load times are down by nearly 30% on our key public pages, 
              user engagement is up, and our Core Web Vitals are consistently in the green. These updates establish a strong 
              foundation for the next phase."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-2">~30% Faster Page Loads</h5>
              <p className="text-sm">Achieved through LiteSpeed, Redis, Cloudflare Tiered Caching, and on-site asset optimization.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-2">Consistent Green Core Web Vitals</h5>
              <p className="text-sm">Validating a superior user experience for our visitors.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-2">-40% CPU Usage During Peak</h5>
              <p className="text-sm">By replacing WP-Cron with a server-side cron job, significantly reducing server load.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-2">Stable & Reliable</h5>
              <p className="text-sm">Eliminated critical PHP errors, 503 timeouts, and database connection failures.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "next-frontier",
      title: "The Next Frontier - Planned Rollouts",
      content: (
        <div>
          <p>A project like this is never truly "done." The next phase of our strategy involves further isolating services to maximize performance:</p>
          
          <div className="space-y-6 mt-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">FluentCRM Multisite Rollout</h5>
              <p>We are launching crm.grastontechnique.com to handle all CRM queries off the main site, which is expected to deliver an immediate 15-20% site-wide speed boost.</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h5 className="font-bold text-primary mb-3">LearnDash Multisite Separation</h5>
              <p>Following the CRM rollout, we will move our Learning Management System to learn.grastontechnique.com, isolating heavy course and quiz-related AJAX calls for another 10-15% reduction in main-site load.</p>
            </div>
          </div>

          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-8 italic">
            This project is a testament to my philosophy that true marketing success is built on a foundation of robust, 
            scalable, and meticulously optimized technical architecture.
          </blockquote>
        </div>
      )
    }
  ];

  return (
    <DeepDiveTemplate
      title="The War Room"
      subtitle="Anatomy of a Full-Stack Performance Overhaul"
      readTime="12 min read"
      keyTakeaways={["Server Administration", "Performance Tuning", "DevOps Principles", "Project Management", "Technical Communication"]}
      sections={sections}
      heroIcon={Server}
      heroIconBg="bg-red-500"
    />
  );
}