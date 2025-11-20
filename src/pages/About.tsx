import { Card } from "@/components/ui/card";
import aboutBanner from "@/assets/about-banner.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section 
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading uppercase mb-4">
              About Around the Plate
            </h1>
            <p className="text-xl font-body max-w-2xl mx-auto">
              Discover cultures through flavor
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading uppercase mb-6 text-primary-dark">
              Our Story
            </h2>
            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                Around the Plate was born from a simple belief: that food is the most powerful way 
                to connect with cultures, traditions, and people around the world. We created a 
                culinary journey that brings authentic global experiences directly to your kitchen.
              </p>
              <p>
                Each recipe box is carefully curated by culinary experts and cultural researchers 
                to ensure authenticity and quality. We partner with local suppliers to source 
                hard-to-find ingredients, spices, and specialty items that make each dish truly special.
              </p>
              <p>
                Our mission is to inspire ambitious home chefs to explore new flavors, master 
                international techniques, and discover the rich stories behind every dish. With 
                Around the Plate, you don't just cook—you travel through taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 px-6 bg-primary-dark text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <h3 className="text-3xl font-heading uppercase mb-4">Our Vision</h3>
              <p className="font-body text-lg leading-relaxed opacity-95">
                To make authentic global cuisine accessible to home chefs everywhere, creating 
                a world where cultural understanding grows through shared culinary experiences. 
                We believe that every meal is an opportunity to explore, learn, and connect.
              </p>
            </Card>
            
            <Card className="p-8 bg-white/10 backdrop-blur border-white/20">
              <h3 className="text-3xl font-heading uppercase mb-4">Our Values</h3>
              <ul className="space-y-3 font-body text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Authenticity in every ingredient and recipe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Quality and sustainability in sourcing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Cultural respect and education</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-xl">✓</span>
                  <span>Inspiring culinary curiosity and adventure</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center animate-slide-up">
          <h2 className="text-4xl font-heading uppercase mb-6">
            Ready to Start Your Culinary Journey?
          </h2>
          <p className="text-xl font-body text-muted-foreground mb-8">
            Explore our curated recipe boxes and discover authentic flavors from around the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
