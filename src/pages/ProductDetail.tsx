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
        <div className="grid lg:grid-cols-2 gap-12 mb-16 animate-fade-in">
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={product.image} 
                alt={product.dish}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Gallery thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-md overflow-hidden border-2 border-border hover:border-primary cursor-pointer transition-colors">
                  <img 
                    src={product.image} 
                    alt={`${product.dish} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 animate-slide-up">
            <div>
              <p className="text-sm font-body text-primary-dark uppercase tracking-wider mb-2">
                {product.country}
              </p>
              <h1 className="text-4xl md:text-5xl font-heading uppercase leading-tight">
                {product.dish}
              </h1>
            </div>
            
            <p className="text-lg font-body text-muted-foreground leading-relaxed">
              {product.description}
            </p>
            
            <div className="flex gap-3 flex-wrap">
              <Badge variant="secondary" className="font-body px-4 py-2 text-sm">
                <span className="font-semibold">Difficulty:</span> {product.difficulty}
              </Badge>
              <Badge variant="secondary" className="font-body px-4 py-2 text-sm">
                <span className="font-semibold">Time:</span> {product.time}
              </Badge>
              <Badge variant="secondary" className="font-body px-4 py-2 text-sm">
                <span className="font-semibold">Servings:</span> {product.servings}
              </Badge>
            </div>
            
            <div className="border-t border-b py-6 my-6">
              <p className="text-5xl font-heading text-primary-dark">{product.price}</p>
              <p className="text-sm font-body text-muted-foreground mt-2">Free shipping over €50</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <label htmlFor="quantity" className="font-body font-medium">Quantity:</label>
                <select 
                  id="quantity"
                  className="border-2 border-border rounded-md px-4 py-3 font-body focus:border-primary focus:outline-none transition-colors"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg" size="lg">
                Add to Cart
              </Button>
              
              <Button variant="outline" className="w-full border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white py-6 text-lg" size="lg">
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>

        {/* What's Inside */}
        <Card className="p-10 mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up">
          <h2 className="text-4xl font-heading uppercase mb-6 text-primary-dark">
            What's Inside the Box?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.ingredients.map((ingredient: string, index: number) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                <span className="text-secondary text-2xl mt-1">✓</span>
                <span className="font-body text-lg">{ingredient}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border-l-4 border-primary">
            <p className="font-body text-muted-foreground">
              <span className="font-semibold text-foreground">Plus:</span> Detailed recipe card, 
              cultural guide, cooking tips, and a QR code for an authentic music playlist.
            </p>
          </div>
        </Card>

        {/* About This Cuisine */}
        <Card className="p-10 mb-16 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-muted/20 animate-slide-up">
          <h2 className="text-4xl font-heading uppercase mb-6 text-primary-dark">
            About This Cuisine
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            {product.story}
          </p>
        </Card>

        {/* You Might Also Like */}
        <div className="animate-fade-in">
          <h2 className="text-4xl font-heading uppercase mb-8 text-center">
            Explore Related Countries
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
