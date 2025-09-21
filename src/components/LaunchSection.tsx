import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Rocket } from "lucide-react";

const LaunchSection = () => {
  const [startupIdea, setStartupIdea] = useState("");

  const handleGenerateStartup = () => {
    // Future: Multi-step flow implementation
    console.log("Generating startup for:", startupIdea);
  };

  return (
    <section 
      id="launch-startup" 
      className="min-h-screen relative flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Web3 Background with Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-black/40"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-main opacity-10 animate-glow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            🚀 Launch Your Startup
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Turn your ideas into reality with AI-powered tools. Enter your concept and let us build 
            your startup identity, pitch, and brand instantly.
          </p>
        </div>

        {/* Input Card */}
        <GlassCard variant="hero" className="max-w-2xl mx-auto backdrop-blur-md bg-white/5 border-white/10">
          <div className="space-y-6">
            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 text-white/60">
                <div className="w-8 h-8 rounded-full bg-gradient-button flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <span className="text-sm">Enter Your Startup Idea</span>
              </div>
            </div>

            {/* Input Field */}
            <div className="relative">
              <textarea
                value={startupIdea}
                onChange={(e) => setStartupIdea(e.target.value)}
                placeholder="Describe your startup idea... (e.g., 'A platform that connects freelance designers with small businesses')"
                className="w-full h-32 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/40 resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                rows={4}
              />
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerateStartup}
              disabled={!startupIdea.trim()}
              className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Rocket className="mr-2" size={20} />
              Generate Startup Plan
            </Button>

            {/* Future Steps Preview */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-white/40 text-sm mb-3">Coming next:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center space-x-2 text-white/30">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs">2</div>
                  <span>Branding Kit</span>
                </div>
                <div className="flex items-center space-x-2 text-white/30">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs">3</div>
                  <span>Pitch Deck</span>
                </div>
                <div className="flex items-center space-x-2 text-white/30">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs">4</div>
                  <span>Launch Checklist</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default LaunchSection;