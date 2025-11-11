import { Globe, Map, Package } from "lucide-react";

const steps = [
  {
    icon: Globe,
    number: "01",
    title: "Spin the Globe",
    description: "Explore our interactive 3D globe and discover culinary destinations from every corner of the world.",
  },
  {
    icon: Map,
    number: "02",
    title: "Choose a Country",
    description: "Click on any country to unlock authentic recipes, ingredients, and cultural stories waiting to be discovered.",
  },
  {
    icon: Package,
    number: "03",
    title: "Receive Your Box",
    description: "Get a curated box with premium ingredients, recipe guides, and cultural extras delivered to your door.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">
          How It Works
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Your culinary journey in three simple steps
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 h-full">
                <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="text-primary/20 text-6xl font-bold mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-serif font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
