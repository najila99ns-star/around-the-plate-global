import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Globe from "./Globe";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Culinary Passport Awaits</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              <span className="text-foreground">Travel the World</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Through Taste
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Discover authentic recipes, premium ingredients, and cultural stories from every corner of the globe. 
              Your journey begins with a single click.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="text-lg">
                Explore the Globe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Get Your First Box
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Recipes</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Explorers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="relative animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="aspect-square max-w-2xl mx-auto">
              <Globe />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 -left-4 animate-float">
              <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                <span className="text-2xl">🍝</span>
              </div>
            </div>
            <div className="absolute bottom-20 -right-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                <span className="text-2xl">🍜</span>
              </div>
            </div>
            <div className="absolute top-1/2 -right-8 animate-float" style={{ animationDelay: '2s' }}>
              <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                <span className="text-2xl">🌮</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
};

export default Hero;
