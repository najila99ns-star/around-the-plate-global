import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import moroccoImage from "@/assets/morocco-tagine-box.jpg";
import nigeriaImage from "@/assets/nigeria-jollof-box.jpg";
import japanImage from "@/assets/japan-ramen-box.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  const products: Record<string, any> = {
    "morocco-tagine": {
      id: "morocco-tagine",
      country: "Morocco",
      dish: "Tagine Box",
      description: "Experience the warmth of Moroccan hospitality with our authentic Tagine box. This slow-cooked masterpiece brings the vibrant flavors of North Africa to your kitchen.",
      price: "€49",
      image: moroccoImage,
      difficulty: "Medium",
      time: "2.5 hours",
      servings: "4-6",
      ingredients: [
        "Preserved lemons",
        "Moroccan spice blend (ras el hanout)",
        "Saffron threads",
        "Dried apricots",
        "Almonds",
        "Fresh cilantro",
      ],
      story: "The tagine is more than just a dish—it's a symbol of Moroccan culture and hospitality. Named after the earthenware pot in which it's cooked, this slow-simmered stew has been bringing families together for centuries.",
    },
    "nigeria-jollof": {
      id: "nigeria-jollof",
      country: "Nigeria",
      dish: "Jollof Rice Box",
      description: "Discover West Africa's most celebrated dish. Our Jollof Rice box delivers the perfect balance of smoky, spicy, and savory flavors that make this one-pot wonder so beloved.",
      price: "€45",
      image: nigeriaImage,
      difficulty: "Easy",
      time: "1 hour",
      servings: "6-8",
      ingredients: [
        "Long-grain parboiled rice",
        "Nigerian pepper mix",
        "Tomato paste blend",
        "Scotch bonnet peppers",
        "Bay leaves",
        "Thyme",
      ],
      story: "Jollof rice is the heart of West African celebrations. This iconic dish sparks friendly debates across nations about who makes it best, but everyone agrees it brings people together.",
    },
    "japan-ramen": {
      id: "japan-ramen",
      country: "Japan",
      dish: "Ramen Box",
      description: "Master the art of authentic Japanese ramen at home. Our box includes everything you need to create a rich, umami-packed bowl that rivals Tokyo's best ramen shops.",
      price: "€52",
      image: japanImage,
      difficulty: "Advanced",
      time: "3 hours",
      servings: "4",
      ingredients: [
        "Premium ramen noodles",
        "Miso paste",
        "Dashi powder",
        "Nori sheets",
        "Menma (bamboo shoots)",
        "Sesame oil",
      ],
      story: "Ramen is Japan's soul food. What started as Chinese-inspired noodles has evolved into an art form, with each region developing its own style and passionate following.",
    },
  };

  const product = products[id || ""] || products["morocco-tagine"];
  const otherProducts = Object.values(products).filter(p => p.id !== product.id).slice(0, 2);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={product.image} 
              alt={product.dish}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading uppercase">
              {product.country} – {product.dish}
            </h1>
            <p className="text-xl font-body text-muted-foreground">
              {product.description}
            </p>
            
            <div className="flex gap-3">
              <Badge variant="secondary" className="font-body">
                Difficulty: {product.difficulty}
              </Badge>
              <Badge variant="secondary" className="font-body">
                Time: {product.time}
              </Badge>
              <Badge variant="secondary" className="font-body">
                Servings: {product.servings}
              </Badge>
            </div>
            
            <div className="border-t border-b py-6">
              <p className="text-4xl font-heading">{product.price}</p>
            </div>
            
            <div className="flex gap-4">
              <select className="border rounded-md px-4 py-2 font-body">
                <option>Quantity: 1</option>
                <option>Quantity: 2</option>
                <option>Quantity: 3</option>
              </select>
              <Button className="flex-1 bg-primary-dark hover:bg-primary" size="lg">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* What's Inside */}
        <Card className="p-8 mb-8">
          <h2 className="text-3xl font-heading uppercase mb-6">
            What's Inside the Box?
          </h2>
          <ul className="grid md:grid-cols-2 gap-3 font-body text-lg">
            {product.ingredients.map((ingredient: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                {ingredient}
              </li>
            ))}
          </ul>
        </Card>

        {/* About This Cuisine */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-heading uppercase mb-6">
            About This Cuisine
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {product.story}
          </p>
        </Card>

        {/* You Might Also Like */}
        <div>
          <h2 className="text-3xl font-heading uppercase mb-8">
            You Might Also Like
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProducts.map((p: any) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
