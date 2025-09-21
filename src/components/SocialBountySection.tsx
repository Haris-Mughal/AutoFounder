import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Share2, Twitter, Linkedin, Trophy } from "lucide-react";

const SocialBountySection = () => {
  const handleLinkedInShare = () => {
    const text = "🚀 Excited to support AutoFounder in the Internet of Agents Hackathon! This AI-powered startup generator creates complete businesses in minutes with 4 specialized agents. The future of entrepreneurship is here! #InternetOfAgents #AIStartup #Hackathon";
    const url = "https://lovable.dev"; // Replace with actual URL
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
  };

  const handleTwitterShare = () => {
    const text = "🚀 Supporting @AutoFounder in the Internet of Agents Hackathon! \n\n4 AI agents → Complete startup in 2 minutes:\n📊 Research Agent\n🎨 Product Agent  \n💳 Finance Agent\n🎙️ Voice Agent\n\nThe future of entrepreneurship! #InternetOfAgents";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-accent/10 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-neon-blue/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full animate-float blur-xl" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neon-purple/20 rounded-full animate-float blur-xl transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <GlassCard variant="feature" className="inline-block mb-8 px-6 py-3">
            <div className="flex items-center gap-2">
              <Trophy className="text-primary" size={20} />
              <span className="text-sm font-medium bg-gradient-text bg-clip-text text-transparent">
                Internet of Agents Hackathon
              </span>
            </div>
          </GlassCard>

          {/* Main Content */}
          <GlassCard variant="hero" size="xl" className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Help us win the{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Internet of Agents
              </span>
              <br />
              Hackathon! 🏆
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Your support means everything! Share AutoFounder on social media and help us showcase 
              how AI agents can revolutionize startup creation. Every share counts towards our hackathon success!
            </p>

            {/* Social Share Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={handleLinkedInShare}
                className="text-lg px-8 py-4 min-w-[200px]"
              >
                <Linkedin className="mr-2" size={20} />
                Share on LinkedIn
              </Button>
              <Button 
                variant="outline_glow" 
                size="lg" 
                onClick={handleTwitterShare}
                className="text-lg px-8 py-4 min-w-[200px]"
              >
                <Twitter className="mr-2" size={20} />
                Share on X (Twitter)
              </Button>
            </div>

            {/* Share Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">🎯</div>
                <div className="text-sm text-muted-foreground">Help us reach 1K shares</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">🚀</div>
                <div className="text-sm text-muted-foreground">Showcase AI innovation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal mb-2">🏆</div>
                <div className="text-sm text-muted-foreground">Win the hackathon!</div>
              </div>
            </div>
          </GlassCard>

          {/* Why It Matters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <GlassCard variant="feature" className="p-6 text-left">
              <Share2 className="text-neon-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Why Your Share Matters
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Social engagement is a key judging criteria. Your shares help demonstrate real-world 
                impact and community interest in AI-powered entrepreneurship tools.
              </p>
            </GlassCard>

            <GlassCard variant="feature" className="p-6 text-left">
              <Trophy className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Hackathon Impact
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AutoFounder represents the future where AI agents collaborate seamlessly. 
                Help us prove that multi-agent systems can democratize entrepreneurship.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBountySection;