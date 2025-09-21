import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, FileText, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Demo", href: "#demo" },
      { name: "Sponsors", href: "#sponsors" },
      { name: "About", href: "#about" },
    ],
    resources: [
      { name: "Documentation", href: "#", icon: FileText },
      { name: "GitHub", href: "#", icon: Github },
      { name: "Contact", href: "#", icon: Mail },
      { name: "Discord", href: "#", icon: MessageCircle },
    ],
    social: [
      { name: "LinkedIn", href: "#", icon: Linkedin },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "GitHub", href: "#", icon: Github },
    ],
  };

  return (
    <footer className="relative py-16 border-t border-card-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-background pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <GlassCard variant="default" className="border-none bg-gradient-card/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold bg-gradient-text bg-clip-text text-transparent">
                  AutoFounder 🚀
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Your AI-powered co-founder team that transforms startup ideas into complete businesses 
                in minutes. Built for the Internet of Agents Hackathon.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {footerLinks.social.map((social) => (
                  <Button
                    key={social.name}
                    variant="glass"
                    size="icon"
                    className="hover:scale-110 transition-transform duration-300"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon size={18} />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-button transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <link.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-card-border/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-muted-foreground text-sm">
                © {currentYear} AutoFounder. Built with ❤️ for the Internet of Agents Hackathon.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Terms of Service
                </a>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Made with</span>
                  <span className="text-neon-purple">💜</span>
                  <span>by Lovable.dev</span>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
};

export default Footer;