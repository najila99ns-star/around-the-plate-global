import { Button } from "@/components/ui/button";
import globeHero from "@/assets/globe-hero.png";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-16 px-6 overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-8 animate-fade-in">
          {/* Main Heading - Centered Above Globe */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading uppercase leading-tight tracking-wide text-primary text-center">
            Travel the World Through Taste
          </h1>

          {/* Three Column Layout: Left Text | Globe | Right Text */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full max-w-6xl">
            {/* Left Text Block */}
            <div className="text-center lg:text-right animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xl md:text-2xl font-body text-foreground leading-relaxed">
                Explore authentic recipe boxes from around the globe, curated for ambitious home chefs.
              </p>
            </div>

            {/* Center Globe */}
            <div className="relative w-full max-w-md mx-auto animate-float">
              <img 
                src={globeHero} 
                alt="Interactive World Globe" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>

            {/* Right Text Block */}
            <div className="text-center lg:text-left animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl md:text-2xl font-body text-foreground leading-relaxed">
                Turn the globe. Tap a pin. Explore the taste.
              </p>
            </div>
          </div>

          {/* CTA Button Below Globe */}
          <div className="flex justify-center pt-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/catalog">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl px-12 py-7 rounded-full font-body"
              >
                Start Your Taste Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
