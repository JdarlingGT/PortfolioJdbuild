import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import Home from "@/pages/home";
import About from "@/pages/about";
import CaseStudies from "@/pages/case-studies";
import CaseStudyDetail from "@/pages/case-study-detail";
import CreativeDesign from "@/pages/creative-design";
import Skills from "@/pages/skills";
import Process from "@/pages/process";
import Demos from "@/pages/demos";
import Contact from "@/pages/contact";
import DeepDives from "@/pages/deep-dives";
import WarRoomDeepDive from "@/pages/deep-dives/war-room";
import LaunchpadDeepDive from "@/pages/deep-dives/launchpad";
import SignalDeepDive from "@/pages/deep-dives/signal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-studies/:id" component={CaseStudyDetail} />
          <Route path="/creative-design" component={CreativeDesign} />
          <Route path="/skills" component={Skills} />
          <Route path="/process" component={Process} />
          <Route path="/demos" component={Demos} />
          <Route path="/contact" component={Contact} />
          <Route path="/deep-dives" component={DeepDives} />
          <Route path="/deep-dives/war-room" component={WarRoomDeepDive} />
          <Route path="/deep-dives/launchpad" component={LaunchpadDeepDive} />
          <Route path="/deep-dives/signal" component={SignalDeepDive} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
