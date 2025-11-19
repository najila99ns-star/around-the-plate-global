import HomeHero from "@/components/HomeHero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      <section className="py-20 px-6 bg-primary-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6">
            Subscribe to a Monthly Culinary Journey
          </h2>
          <p className="text-xl font-body mb-8 opacity-90">
            Get a curated world box delivered to your home every month. Each box features a different country, 
            with premium ingredients and authentic recipes.
          </p>
          <Card className="p-8 text-foreground">
            <h3 className="text-2xl font-heading uppercase mb-4">Monthly Subscription</h3>
            <ul className="font-body text-left space-y-2 mb-6">
              <li>✓ Premium ingredients from around the world</li>
              <li>✓ Authentic recipes with cultural stories</li>
              <li>✓ Cultural guide and playlist</li>
              <li>✓ Cancel anytime</li>
              <li>✓ Free shipping over €50</li>
            </ul>
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90">
              Start Your Subscription
            </Button>
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
