import { GlassCard } from "@/components/ui/glass-card";
import { Clock, DollarSign, Brain, TrendingUp } from "lucide-react";

const BusinessValueSection = () => {
  const valueProps = [
    {
      icon: Clock,
      title: "Faster",
      subtitle: "Minutes vs Weeks",
      description: "Traditional startup validation takes weeks of research and planning. AutoFounder does it instantly.",
      color: "text-neon-blue",
      stat: "100x",
    },
    {
      icon: DollarSign,
      title: "Cheaper",
      subtitle: "AI vs Human Cost",
      description: "Skip expensive consultants and market research firms. Get professional-grade insights for free.",
      color: "text-neon-purple",
      stat: "$0",
    },
    {
      icon: Brain,
      title: "Smarter",
      subtitle: "AI-Powered Insights",
      description: "Leverage advanced AI agents with access to real-time market data and industry best practices.",
      color: "text-accent",
      stat: "4 AIs",
    },
  ];

  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Value Proposition */}
        <div className="text-center mb-20">
          <GlassCard variant="hero" size="xl" className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Startups waste{" "}
              <span className="text-destructive">weeks</span>
              {" "}validating ideas.
              <br />
              AutoFounder does it in{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                minutes.
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {valueProps.map((prop, index) => (
                <div key={prop.title} className="relative">
                  <GlassCard 
                    variant="feature" 
                    className="h-full text-center group hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Icon and Stat */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-card border border-card-border/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <prop.icon className={`${prop.color}`} size={32} />
                      </div>
                      <div className={`text-3xl font-bold ${prop.color} mb-2`}>
                        {prop.stat}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {prop.title}
                    </h3>
                    <p className={`text-sm font-medium mb-4 ${prop.color}`}>
                      {prop.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {prop.description}
                    </p>
                  </GlassCard>

                  {/* Connection Line (Desktop) */}
                  {index < valueProps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-card-border to-transparent transform -translate-y-1/2 z-10"></div>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* ROI Comparison */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Traditional vs{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              AutoFounder
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Way */}
            <GlassCard variant="default" className="p-8">
              <h4 className="text-xl font-semibold mb-6 text-center">
                Traditional Way
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Market Research</span>
                  <span className="text-destructive font-semibold">2-4 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Consultant Fees</span>
                  <span className="text-destructive font-semibold">$5,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Landing Page</span>
                  <span className="text-destructive font-semibold">1-2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Payment Setup</span>
                  <span className="text-destructive font-semibold">3-5 days</span>
                </div>
                <div className="border-t border-card-border pt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span>Total Time</span>
                    <span className="text-destructive">4-6 weeks</span>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* AutoFounder Way */}
            <GlassCard variant="hero" className="p-8 border-primary/50">
              <h4 className="text-xl font-semibold mb-6 text-center text-primary">
                AutoFounder Way
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-card-foreground">AI Market Analysis</span>
                  <span className="text-primary font-semibold">30 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-card-foreground">Total Cost</span>
                  <span className="text-primary font-semibold">FREE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-card-foreground">Auto Landing Page</span>
                  <span className="text-primary font-semibold">30 seconds</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-card-foreground">Payment Integration</span>
                  <span className="text-primary font-semibold">10 seconds</span>
                </div>
                <div className="border-t border-primary/30 pt-4">
                  <div className="flex justify-between items-center font-bold">
                    <span className="text-card-foreground">Total Time</span>
                    <span className="text-primary text-xl">2 minutes</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessValueSection;