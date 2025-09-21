import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowUp } from "lucide-react";

// Components
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import SponsorsSection from "@/components/SponsorsSection";
import BusinessValueSection from "@/components/BusinessValueSection";
import SocialBountySection from "@/components/SocialBountySection";
import AboutSection from "@/components/AboutSection";

import Footer from "@/components/Footer";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-main opacity-20 animate-glow"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <DemoSection />
        <BusinessValueSection />
        <SponsorsSection />
        <SocialBountySection />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            variant="hero"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full shadow-glow animate-float"
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
