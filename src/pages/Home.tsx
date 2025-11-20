import HomeHero from "@/components/HomeHero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import moroccoImage from "@/assets/morocco-tagine-box.jpg";
import nigeriaImage from "@/assets/nigeria-jollof-box.jpg";
import japanImage from "@/assets/japan-ramen-box.jpg";
import subscriptionBg from "@/assets/subscription-bg.jpg";

const Home = () => {
  const products = [
    {
      id: "morocco-tagine",
      country: "Morocco",
      dish: "Tagine",
      description: "Slow-cooked aromatic stew with authentic North African spices",
      price: "€49",
      image: moroccoImage,
    },
    {
      id: "nigeria-jollof",
      country: "Nigeria",
      dish: "Jollof Rice",
      description: "West Africa's beloved one-pot rice dish with bold flavors",
      price: "€45",
      image: nigeriaImage,
    },
    {
      id: "japan-ramen",
      country: "Japan",
      dish: "Ramen",
      description: "Traditional Japanese noodle soup with rich umami broth",
      price: "€52",
      image: japanImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <HomeHero />

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-12 text-primary">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Spin the Globe", desc: "Explore countries on our interactive 3D globe" },
              { step: "2", title: "Choose Your Box", desc: "Select a cuisine that speaks to you" },
              { step: "3", title: "Cook, Explore & Enjoy", desc: "Receive premium ingredients and authentic recipes" },
            ].map((item) => (
              <Card key={item.step} className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 bg-card border-border/50">
                <div className="text-5xl font-heading text-accent mb-4">{item.step}</div>
                <h3 className="text-2xl font-heading uppercase mb-3">{item.title}</h3>
                <p className="font-body text-foreground/80 leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Boxes */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-12 text-primary">
            Featured Boxes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section 
        className="relative py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${subscriptionBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-background/95 backdrop-blur rounded-2xl p-12 shadow-2xl max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 leading-tight text-primary">
                Subscribe to a Monthly Taste Journey
              </h2>
              <p className="text-xl font-body mb-8 leading-relaxed text-foreground/90">
                Get a curated world box delivered to your home every month. Each box features a different country, 
                with premium ingredients and authentic recipes. Discover new flavors, cultures, and culinary traditions.
              </p>
              <ul className="font-body space-y-3 mb-8 text-lg text-left max-w-lg mx-auto">
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl font-bold">✓</span>
                  <span>Premium ingredients from around the world</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl font-bold">✓</span>
                  <span>Authentic recipes with cultural stories</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl font-bold">✓</span>
                  <span>Cultural guide and curated playlist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl font-bold">✓</span>
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent text-xl font-bold">✓</span>
                  <span>Free shipping over €50</span>
                </li>
              </ul>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-12 py-6 shadow-xl rounded-full font-body">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chef Section - Inspire Me */}
      <section className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 text-primary">
            Inspire Me, AI Chef
          </h2>
          <p className="text-xl font-body text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Not sure what you're in the mood for? Let our AI Chef inspire your next culinary adventure.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-body"
            >
              I want something spicy
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-body"
            >
              I want something sweet
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-body"
            >
              Surprise me
            </Button>
          </div>

          <Card className="p-8 max-w-2xl mx-auto bg-card border-border/50">
            <input 
              type="text" 
              placeholder="Tell me what flavor you feel like..."
              className="w-full px-4 py-3 mb-4 border-2 border-border rounded-md font-body focus:outline-none focus:border-primary transition-colors bg-background"
            />
            <Link to="/ai-chef">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body">
                Get Recipe Ideas
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-12 text-primary">
            Why Around the Plate
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Authentic recipes from real world cuisines",
              "Hard to find, high quality ingredients",
              "Designed for ambitious home chefs",
              "Luxury at home, no plane ticket needed",
            ].map((benefit, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all hover:scale-105 bg-card border-border/50">
                <p className="font-body text-lg leading-relaxed">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-heading uppercase mb-4">
            Join Our Culinary Journey
          </h2>
          <p className="font-body mb-8 text-lg opacity-95">
            Get exclusive recipes, cooking tips, and early access to new boxes.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 px-5 py-3 rounded-full text-foreground font-body bg-background"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-8 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
