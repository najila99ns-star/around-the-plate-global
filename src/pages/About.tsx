import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-6 bg-primary-dark text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-heading uppercase mb-6">
            About Around the Plate
          </h1>
          <p className="text-xl font-body opacity-90">
            Your culinary passport to authentic global flavors
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 font-body text-lg leading-relaxed text-muted-foreground">
            <p>
              Around the Plate is more than a webshop—it's a gateway to the world's kitchens. 
              We believe that food is the most delicious way to explore different cultures, 
              and that ambitious home chefs deserve access to authentic ingredients and recipes.
            </p>
            <p>
              Our interactive 3D globe lets you spin the world and discover culinary traditions 
              from every continent. Each recipe box is carefully curated by food experts and 
              cultural consultants to ensure authenticity and quality.
            </p>
            <p>
              We partner with specialty importers to source hard-to-find ingredients, 
              and our recipes are designed for passionate cooks who want to go beyond 
              the basics and truly master international cuisine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-3xl font-heading uppercase mb-4">Our Vision</h2>
              <p className="font-body text-lg text-muted-foreground">
                To make authentic global cuisine accessible to every home chef, 
                breaking down borders one recipe at a time. We envision kitchens 
                around the world filled with the aromas and flavors of distant lands.
              </p>
            </Card>
            
            <Card className="p-8">
              <h2 className="text-3xl font-heading uppercase mb-4">Our Values</h2>
              <ul className="font-body text-lg text-muted-foreground space-y-2">
                <li>✓ Authenticity above all</li>
                <li>✓ Quality ingredients only</li>
                <li>✓ Cultural respect and education</li>
                <li>✓ Supporting ambitious home cooks</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading uppercase mb-6">
            Join the Journey
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8">
            Whether you're a seasoned chef or an adventurous beginner, 
            there's a world of flavors waiting to be discovered.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
