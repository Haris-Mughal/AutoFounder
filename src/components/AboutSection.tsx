import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Users, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main About Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                AutoFounder
              </span>
            </h2>
            
            <GlassCard variant="hero" size="xl" className="text-left">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed text-card-foreground">
                  Built for the{" "}
                  <span className="text-primary font-semibold">Internet of Agents Hackathon</span>, 
                  AutoFounder is a groundbreaking proof-of-concept that demonstrates the incredible 
                  potential when specialized AI agents work together seamlessly.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Traditional startup validation is slow, expensive, and often ineffective. 
                  We reimagined this process by creating four specialized AI agents that collaborate 
                  to transform any idea into a complete, market-ready startup in just minutes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary">The Vision</h3>
                    <p className="text-muted-foreground">
                      Democratize entrepreneurship by making startup creation accessible to everyone, 
                      regardless of technical expertise or financial resources.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-accent">The Technology</h3>
                    <p className="text-muted-foreground">
                      Cutting-edge AI agents powered by leading providers like Mistral AI, ElevenLabs, 
                      and Web3 infrastructure from Crossmint and Coral Protocol.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Meet the{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Team
              </span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Founder Card */}
              <GlassCard variant="feature" className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-card rounded-full border border-card-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-primary" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  Founder & Developer
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Passionate about AI agents and entrepreneurship democratization
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Github size={16} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </GlassCard>

              {/* AI Agents Team */}
              <GlassCard variant="feature" className="p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-card rounded-full border border-card-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-accent" size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  4 AI Agents
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Research, Product, Finance, and Voice AI specialists working in harmony
                </p>
                <div className="text-xs text-primary font-medium">
                  Always Available • Never Sleep
                </div>
              </GlassCard>

              {/* Community */}
              <GlassCard variant="feature" className="p-6 text-center group hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-card rounded-full border border-card-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  Community Driven
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Built with feedback from entrepreneurs, developers, and AI enthusiasts worldwide
                </p>
                <div className="text-xs text-teal font-medium">
                  Open Source • Community First
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Powered by{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Innovation
              </span>
            </h3>
            
            <GlassCard variant="feature" className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="text-sm font-medium text-primary">AI Research</div>
                  <div className="text-xs text-muted-foreground">Mistral AI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎙️</div>
                  <div className="text-sm font-medium text-accent">Voice AI</div>
                  <div className="text-xs text-muted-foreground">ElevenLabs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="text-sm font-medium text-teal">Web3 Payments</div>
                  <div className="text-xs text-muted-foreground">Crossmint</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💜</div>
                  <div className="text-sm font-medium text-neon-purple">Development</div>
                  <div className="text-xs text-muted-foreground">Lovable.dev</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;