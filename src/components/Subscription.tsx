import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Single Box",
    price: "$49",
    period: "one-time",
    description: "Perfect for trying your first culinary adventure",
    features: [
      "Choose any country",
      "Premium ingredients",
      "Detailed recipe guide",
      "Cultural story booklet",
      "Virtual cooking class access",
    ],
    cta: "Explore À La Carte",
    variant: "outline" as const,
  },
  {
    name: "Taste the World Passport",
    price: "$39",
    period: "per month",
    description: "The ultimate culinary journey through global flavors",
    features: [
      "New country every month",
      "Premium ingredients",
      "Exclusive recipes",
      "Cultural extras (playlists, AR postcards)",
      "Virtual cooking classes",
      "Digital passport tracking",
      "20% off additional boxes",
    ],
    cta: "Start Your Passport",
    variant: "default" as const,
    popular: true,
  },
];

const Subscription = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Choose Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to explore one country at a time or embark on a monthly 
            culinary journey, we have the perfect option for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden ${
                plan.popular 
                  ? "border-primary shadow-[var(--shadow-glow)] scale-105" 
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-8 pt-8">
                <CardTitle className="text-2xl font-serif mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">
                    / {plan.period}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif font-semibold mb-6 text-foreground">
            Enhance Your Experience
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Spice Kit Collection", price: "$19" },
              { name: "Live Chef Masterclass", price: "$29" },
              { name: "AR Culture Cards Set", price: "$15" },
            ].map((addon, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg px-6 py-3 hover:border-primary hover:shadow-md transition-all cursor-pointer"
              >
                <div className="font-semibold text-foreground">{addon.name}</div>
                <div className="text-sm text-primary font-medium">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
