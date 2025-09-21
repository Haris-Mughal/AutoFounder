import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Play, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-main opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-blue/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-neon-purple/20 rounded-full animate-float blur-xl" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-neon-teal/20 rounded-full animate-float blur-xl" style={{ animationDelay: "4s" }}></div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-slide-up">
          {/* Hero Badge */}
          <GlassCard variant="default" className="inline-block mb-8 px-6 py-3">
            <span className="text-sm font-medium bg-gradient-text bg-clip-text text-transparent">
              ✨ AI-Powered Startup Generation
            </span>
          </GlassCard>

          {/* Hero Headlines */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Launch a{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Startup
            </span>
            <br />
            in Minutes with{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              AI Agents
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            AutoFounder is your AI-powered co-founder team — research, product, finance, and pitch all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Rocket className="mr-2" size={20} />
              Try Demo
            </Button>
            <Button variant="outline_glow" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2" size={20} />
              Watch Video
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <GlassCard variant="feature" className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">2 mins</div>
              <div className="text-sm text-muted-foreground">Average Setup Time</div>
            </GlassCard>
            <GlassCard variant="feature" className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">4 Agents</div>
              <div className="text-sm text-muted-foreground">AI Co-founders</div>
            </GlassCard>
            <GlassCard variant="feature" className="text-center">
              <div className="text-2xl font-bold text-teal mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Startup Ideas</div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;