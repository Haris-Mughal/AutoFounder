import { GlassCard } from "@/components/ui/glass-card";

const SponsorsSection = () => {
  const sponsors = [
    { name: "Coral Protocol", logo: "🏛️" },
    { name: "Mistral AI", logo: "🌊" },
    { name: "AI/ML API", logo: "🤖" },
    { name: "Crossmint", logo: "💎" },
    { name: "ElevenLabs", logo: "🎙️" },
    { name: "Nebius", logo: "☁️" },
    { name: "Lovable.dev", logo: "💜" },
  ];

  return (
    <section id="sponsors" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/5 via-neon-purple/5 to-neon-teal/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Amazing Tech
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Special thanks to our sponsors for enabling free credits & cutting-edge tools
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
          {sponsors.map((sponsor, index) => (
            <GlassCard
              key={sponsor.name}
              variant="feature"
              className="p-6 text-center group cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {sponsor.logo}
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                {sponsor.name}
              </h3>
            </GlassCard>
          ))}
        </div>

        {/* Sponsor Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <GlassCard variant="feature" className="text-center p-6">
            <div className="text-2xl mb-4">⚡</div>
            <h3 className="font-semibold mb-2 text-neon-blue">Free API Credits</h3>
            <p className="text-sm text-muted-foreground">
              Generous free tiers from our AI and Web3 partners
            </p>
          </GlassCard>
          <GlassCard variant="feature" className="text-center p-6">
            <div className="text-2xl mb-4">🛠️</div>
            <h3 className="font-semibold mb-2 text-neon-purple">Premium Tools</h3>
            <p className="text-sm text-muted-foreground">
              Access to enterprise-grade AI and blockchain services
            </p>
          </GlassCard>
          <GlassCard variant="feature" className="text-center p-6">
            <div className="text-2xl mb-4">🚀</div>
            <h3 className="font-semibold mb-2 text-teal">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Cutting-edge technology enabling the future of startups
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;