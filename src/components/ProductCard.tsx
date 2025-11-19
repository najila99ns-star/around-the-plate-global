import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: string;
  country: string;
  dish: string;
  description: string;
  price: string;
  image: string;
}

const ProductCard = ({ id, country, dish, description, price, image }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-lg border-2 border-border hover:border-primary/30">
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={`${country} - ${dish}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-sm font-body text-primary-dark uppercase tracking-wider mb-1">
            {country}
          </h3>
          <h2 className="text-2xl font-heading uppercase mb-3">
            {dish}
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          <p className="text-3xl font-heading text-primary-dark">
            {price}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            className="w-full bg-primary-dark hover:bg-primary group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 shadow-md"
          >
            View Box
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
