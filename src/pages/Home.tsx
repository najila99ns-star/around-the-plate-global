import HomeHero from "@/components/HomeHero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import moroccoImage from "@/assets/morocco-tagine-box.jpg";
import nigeriaImage from "@/assets/nigeria-jollof-box.jpg";
import japanImage from "@/assets/japan-ramen-box.jpg";

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
      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Spin the Globe", desc: "Explore countries on our interactive 3D globe" },
              { step: "2", title: "Choose Your Box", desc: "Select a cuisine that speaks to you" },
              { step: "3", title: "Cook, Explore & Enjoy", desc: "Receive premium ingredients and authentic recipes" },
            ].map((item) => (
              <Card key={item.step} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-heading text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-heading uppercase mb-2">{item.title}</h3>
                <p className="font-body text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Boxes */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-12">
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
        style={{ backgroundImage: `url(${require('@/assets/subscription-bg.jpg')})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 leading-tight">
                Subscribe to a Monthly Culinary Journey
              </h2>
              <p className="text-xl font-body mb-6 opacity-95 leading-relaxed">
                Get a curated world box delivered to your home every month. Each box features a different country, 
                with premium ingredients and authentic recipes.
              </p>
              <ul className="font-body space-y-3 mb-8 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Premium ingredients from around the world</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Authentic recipes with cultural stories</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Cultural guide and playlist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Free shipping over €50</span>
                </li>
              </ul>
              <Button size="lg" className="bg-[#E89A61] hover:bg-[#E89A61]/90 text-white text-lg px-8 py-6 shadow-xl">
                Start Your Subscription
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chef Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6">
            AI Inspire Me Chef
          </h2>
          <p className="text-xl font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not sure what you're in the mood for? Let our AI Chef inspire your next culinary adventure.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Surprise me
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Something spicy
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary hover:bg-primary hover:text-white transition-all"
            >
              Comfort food
            </Button>
          </div>

          <Card className="p-8 max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="I want something vegetarian and cozy..."
              className="w-full px-4 py-3 mb-4 border-2 border-border rounded-md font-body focus:outline-none focus:border-primary transition-colors"
            />
            <Link to="/ai-chef">
              <Button size="lg" className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white">
                Open AI Chef
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-heading uppercase text-center mb-12">
            Why Around the Plate
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Authentic recipes from real world cuisines",
              "Hard to find, high quality ingredients",
              "Designed for ambitious home chefs",
              "Luxury at home, no plane ticket needed",
            ].map((benefit, index) => (
              <Card key={index} className="p-6 text-center">
                <p className="font-body text-lg">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-heading uppercase mb-4">
            Join Our Culinary Journey
          </h2>
          <p className="font-body mb-6">
            Get exclusive recipes, cooking tips, and early access to new boxes.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md text-foreground"
            />
            <Button className="bg-primary-dark hover:bg-primary-dark/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
