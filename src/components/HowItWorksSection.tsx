import { GlassCard } from "@/components/ui/glass-card";
import { Search, Palette, CreditCard, Mic } from "lucide-react";

const HowItWorksSection = () => {
  const agents = [
    {
      icon: Search,
      title: "Research Agent",
      description: "Market analysis, competitor breakdown, and industry insights powered by AI research.",
      color: "text-neon-blue",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--neon-blue)/0.3)]",
    },
    {
      icon: Palette,
      title: "Product Agent",
      description: "Auto-generated landing page and pitch deck with beautiful design and compelling copy.",
      color: "text-neon-purple",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--neon-purple)/0.3)]",
    },
    {
      icon: CreditCard,
      title: "Finance Agent",
      description: "Instant subscriptions & payments setup with Crossmint Web3 integration.",
      color: "text-accent",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]",
    },
    {
      icon: Mic,
      title: "Voice Agent",
      description: "AI-generated investor pitch with natural voice using ElevenLabs technology.",
      color: "text-teal",
      glowColor: "hover:shadow-[0_0_30px_hsl(var(--teal)/0.3)]",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four AI agents working together to transform your idea into a complete startup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <GlassCard
              key={agent.title}
              variant="feature"
              className={`text-center group cursor-pointer ${agent.glowColor} transition-all duration-500`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-card border border-card-border/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <agent.icon className={`${agent.color} transition-colors duration-300`} size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {agent.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {agent.description}
                </p>

                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-button text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Process Flow */}
        <div className="mt-16 text-center">
          <GlassCard variant="hero" className="inline-block px-8 py-4">
            <p className="text-lg font-medium">
              <span className="text-neon-blue">Input Idea</span>
              <span className="mx-3 text-muted-foreground">→</span>
              <span className="text-neon-purple">AI Processing</span>
              <span className="mx-3 text-muted-foreground">→</span>
              <span className="text-teal">Complete Startup</span>
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;