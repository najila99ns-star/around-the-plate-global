import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, USA",
    flag: "🇺🇸",
    rating: 5,
    text: "The Japanese box was incredible! Authentic ingredients and the cultural booklet made me feel like I was actually in Tokyo. Can't wait for next month!",
    avatar: "SC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Marco Rossi",
    location: "Milan, Italy",
    flag: "🇮🇹",
    rating: 5,
    text: "As an Italian, I was skeptical, but the quality of ingredients in every box is outstanding. The Mexican box introduced me to flavors I never knew existed!",
    avatar: "MR",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    flag: "🇮🇳",
    rating: 5,
    text: "The digital passport feature is genius! I've tried 12 countries so far and learned so much about global cuisine. This is education through taste!",
    avatar: "PS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

const Community = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Shared by Our Global Explorers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of food lovers discovering new cultures through authentic cuisine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-[var(--shadow-soft)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <span>{testimonial.flag}</span>
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-card border border-border rounded-full px-8 py-4 shadow-md">
            <div>
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">Happy Explorers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-3xl font-bold text-foreground">4.9★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
