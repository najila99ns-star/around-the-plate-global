import { Button } from "@/components/ui/button";
import globeHero from "@/assets/globe-hero.png";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center py-16 px-6 overflow-hidden bg-gradient-to-b from-white via-primary/5 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Large Centered Globe */}
          <div className="relative w-full max-w-4xl mb-4">
            <img 
              src={globeHero} 
              alt="Interactive World Globe" 
              className="w-full h-auto"
            />
            
            {/* Hero Text Overlay on Globe */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase leading-tight tracking-wide text-foreground drop-shadow-lg">
                Travel the World Through Taste
              </h1>
              <p className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4 drop-shadow">
                Explore authentic recipe boxes from around the globe, curated for ambitious home chefs.
              </p>
            </div>
          </div>

          {/* CTA Buttons Below Globe */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-[#E89A61] hover:bg-[#E89A61]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
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
    </section>
  );
};

export default HomeHero;
