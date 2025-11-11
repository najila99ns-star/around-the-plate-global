import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CountryCardProps {
  name: string;
  image: string;
  cuisine: string;
  description: string;
}

const CountryCard = ({ name, image, cuisine, description }: CountryCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-glow)] transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name} recipe box`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-primary font-medium">{cuisine}</p>
        </div>
      </div>
      
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <Button variant="default" className="w-full group/btn">
          Explore Cuisine
          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
