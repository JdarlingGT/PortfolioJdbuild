import { Link } from "wouter";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-card py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">JD</span>
            </div>
            <span className="font-semibold">Jacob Darling</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com/in/jacob-darling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-card transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/yesmannow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-card transition-colors"
              data-testid="footer-github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:jacob@bearcavemarketing.com"
              className="text-muted hover:text-card transition-colors"
              data-testid="footer-email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-muted/20 mt-6 pt-6 text-center">
          <p className="text-sm text-muted">
            © 2024 Jacob Darling. All rights reserved. • Marketing Strategist & Systems Architect
          </p>
        </div>
      </div>
    </footer>
  );
}
