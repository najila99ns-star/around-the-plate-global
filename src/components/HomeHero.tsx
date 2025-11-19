import { Button } from "@/components/ui/button";
import globeHero from "@/assets/globe-hero.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const HomeHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-12 px-6 overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Large Centered Globe Image */}
          <div className="w-full max-w-4xl mb-8 animate-fade-in">
            <img 
              src={globeHero} 
              alt="Interactive World Globe" 
              className="w-full h-auto animate-float drop-shadow-2xl"
            />
          </div>

          {/* Hero Text Below Globe */}
          <div className="max-w-3xl space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading uppercase leading-tight tracking-wide">
              Travel the World Through Taste
            </h1>
            <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore authentic recipe boxes from around the globe, curated for ambitious home chefs.
            </p>
            <p className="text-sm font-body text-muted-foreground/80 italic">
              Spin the globe and click a highlighted country to start your culinary journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
              >
                Explore the Globe
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white transition-all duration-300 text-lg px-8 py-6"
              >
                <Link to="/catalog">View All Boxes</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
