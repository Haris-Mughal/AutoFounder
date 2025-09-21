import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Rocket, Search, Palette, CreditCard, Play, FileText, Globe, DollarSign } from "lucide-react";
const DemoSection = () => {
  const [startupIdea, setStartupIdea] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const handleGenerate = async () => {
    if (!startupIdea.trim()) return;
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsGenerating(false);
    setShowResults(true);
  };
  return <section id="demo" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "3s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Try the{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Demo
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter your startup idea and watch AI agents create your complete business in minutes
          </p>
        </div>

        {/* Demo Input */}
        <div className="max-w-3xl mx-auto mb-16">
          <GlassCard variant="input" size="lg" className="relative">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Enter your startup idea... (e.g., 'AI-powered fitness app for busy professionals')" value={startupIdea} onChange={e => setStartupIdea(e.target.value)} className="flex-1 text-lg bg-transparent border-none focus:ring-0 placeholder:text-muted-foreground/60" disabled={isGenerating} />
              <Button variant="hero" size="lg" onClick={handleGenerate} disabled={isGenerating || !startupIdea.trim()} className="px-8">
                {isGenerating ? <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                    Generating...
                  </> : <>
                    <Rocket className="mr-2" size={20} />
                    Generate Startup
                  </>}
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Demo Results */}
        {showResults && <div className="max-w-6xl mx-auto animate-slide-up">
            <GlassCard variant="default" size="lg">
              <Tabs defaultValue="research" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-secondary/50 backdrop-blur-sm">
                  <TabsTrigger value="research" className="flex items-center gap-2">
                    <Search size={16} />
                    <span className="hidden sm:inline">Research</span>
                  </TabsTrigger>
                  <TabsTrigger value="landing" className="flex items-center gap-2">
                    <Globe size={16} />
                    <span className="hidden sm:inline">Landing Page</span>
                  </TabsTrigger>
                  <TabsTrigger value="finance" className="flex items-center gap-2">
                    <DollarSign size={16} />
                    <span className="hidden sm:inline">Finance</span>
                  </TabsTrigger>
                  <TabsTrigger value="pitch" className="flex items-center gap-2">
                    <Play size={16} />
                    <span className="hidden sm:inline">Pitch</span>
                  </TabsTrigger>
                </TabsList>

                <div className="mt-8">
                  <TabsContent value="research" className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Search className="text-neon-blue" size={24} />
                      <h3 className="text-2xl font-semibold">Market Research Report</h3>
                    </div>
                    <div className="space-y-4">
                      <GlassCard variant="feature" className="p-4">
                        <h4 className="font-semibold text-neon-blue mb-2">Market Size</h4>
                        <p className="text-muted-foreground">$4.2B global fitness app market, growing 14.7% annually</p>
                      </GlassCard>
                      <GlassCard variant="feature" className="p-4">
                        <h4 className="font-semibold text-neon-blue mb-2">Target Audience</h4>
                        <p className="text-muted-foreground">25-45 year old professionals, 68% willing to pay for premium features</p>
                      </GlassCard>
                      <GlassCard variant="feature" className="p-4">
                        <h4 className="font-semibold text-neon-blue mb-2">Competitors</h4>
                        <p className="text-muted-foreground">MyFitnessPal, Nike Training Club - opportunity for AI personalization</p>
                      </GlassCard>
                    </div>
                  </TabsContent>

                  <TabsContent value="landing" className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Globe className="text-neon-purple" size={24} />
                      <h3 className="text-2xl font-semibold">Landing Page Preview</h3>
                    </div>
                    <GlassCard variant="feature" className="p-6">
                      <div className="bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg p-8 text-center">
                        <h4 className="text-3xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
                          FitAI Pro
                        </h4>
                        <p className="text-muted-foreground mb-6">
                          Your AI-powered fitness companion that adapts to your busy schedule
                        </p>
                        <Button variant="hero">Start Free Trial</Button>
                      </div>
                    </GlassCard>
                  </TabsContent>

                  <TabsContent value="finance" className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <DollarSign className="text-accent" size={24} />
                      <h3 className="text-2xl font-semibold">Payment Integration</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <GlassCard variant="feature" className="p-6 text-center">
                        <h4 className="text-xl font-semibold mb-4">Basic Plan</h4>
                        <div className="text-3xl font-bold text-primary mb-2">$9.99</div>
                        <div className="text-muted-foreground mb-4">per month</div>
                        <Button variant="outline_glow" className="w-full">Subscribe</Button>
                      </GlassCard>
                      <GlassCard variant="feature" className="p-6 text-center">
                        <h4 className="text-xl font-semibold mb-4">Pro Plan</h4>
                        <div className="text-3xl font-bold text-accent mb-2">$19.99</div>
                        <div className="text-muted-foreground mb-4">per month</div>
                        <Button variant="hero" className="w-full">Subscribe</Button>
                      </GlassCard>
                    </div>
                  </TabsContent>

                  <TabsContent value="pitch" className="space-y-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Play className="text-teal" size={24} />
                      <h3 className="text-2xl font-semibold">AI-Generated Pitch</h3>
                    </div>
                    <GlassCard variant="feature" className="p-8 text-center">
                      <div className="w-32 h-32 mx-auto mb-6 bg-gradient-card rounded-full flex items-center justify-center border border-card-border">
                        <Play className="text-teal" size={48} />
                      </div>
                      <h4 className="text-xl font-semibold mb-4">Investor Pitch Audio</h4>
                      <p className="text-muted-foreground mb-6">
                        AI-generated 3-minute pitch with natural voice explaining your business model, 
                        market opportunity, and growth strategy.
                      </p>
                      <Button variant="neon" size="lg">
                        <Play className="mr-2" size={20} />
                        Play Pitch
                      </Button>
                    </GlassCard>
                  </TabsContent>
                </div>
              </Tabs>
            </GlassCard>
            
            {/* CTA to Launch Page */}
            <div className="text-center mt-8">
              
              <Button variant="hero" size="lg" asChild>
                
              </Button>
            </div>
          </div>}

        {/* Sample Input Suggestions */}
        {!showResults && <div className="max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground mb-6">Try these example ideas:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["AI-powered meal planning app", "Sustainable fashion marketplace", "Remote work productivity tool"].map(idea => <GlassCard key={idea} variant="feature" className="p-4 cursor-pointer hover:border-primary/50 transition-all duration-300" onClick={() => setStartupIdea(idea)}>
                  <p className="text-sm text-center">{idea}</p>
                </GlassCard>)}
            </div>
          </div>}
      </div>
    </section>;
};
export default DemoSection;