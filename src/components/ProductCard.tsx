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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={`${country} - ${dish}`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-sm font-body text-muted-foreground uppercase tracking-wide">
          {country}
        </h3>
        <h2 className="text-2xl font-heading uppercase mt-1 mb-2">
          {dish}
        </h2>
        <p className="font-body text-muted-foreground">
          {description}
        </p>
        <p className="text-2xl font-heading mt-4 text-foreground">
          {price}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          className="w-full bg-primary-dark hover:bg-primary"
        >
          <Link to={`/product/${id}`}>View Box</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
