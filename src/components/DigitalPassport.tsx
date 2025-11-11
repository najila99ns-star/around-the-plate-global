import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Award } from "lucide-react";
import passportImg from "@/assets/passport.jpg";

const DigitalPassport = () => {
  const countries = [
    { name: "Italy", date: "March 2024", flag: "🇮🇹" },
    { name: "Japan", date: "February 2024", flag: "🇯🇵" },
    { name: "Mexico", date: "January 2024", flag: "🇲🇽" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-glow)]">
              <img
                src={passportImg}
                alt="Digital Passport"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Explorer Level</div>
                  <div className="text-lg font-bold text-foreground">Master Chef</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Track Your Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                Your Digital Passport
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Collect virtual stamps from every country you explore. Track your culinary 
                adventures and unlock exclusive recipes as you travel the world through taste.
              </p>
            </div>

            {/* Countries visited */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Calendar className="w-4 h-4" />
                Recent Destinations
              </div>
              
              {countries.map((country, index) => (
                <div
                  key={country.name}
                  className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{country.flag}</span>
                    <div>
                      <div className="font-semibold text-foreground">{country.name}</div>
                      <div className="text-sm text-muted-foreground">{country.date}</div>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                    Completed
                  </Badge>
                </div>
              ))}
            </div>

            <Button size="lg" variant="default" className="w-full">
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalPassport;
