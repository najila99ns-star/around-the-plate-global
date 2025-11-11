import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, Send } from "lucide-react";

const AIChef = () => {
  const [input, setInput] = useState("");

  const suggestions = [
    { text: "Something spicy and new", emoji: "🌶️" },
    { text: "Comfort food for a cozy evening", emoji: "🥘" },
    { text: "Light and fresh for summer", emoji: "🥗" },
    { text: "Rich and indulgent flavors", emoji: "🍷" },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Recommendations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Let Our AI Chef Inspire You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure where to start? Describe what you're craving, and our AI will suggest 
            the perfect culinary adventure for your taste.
          </p>
        </div>

        {/* Input Area */}
        <Card className="p-8 mb-8 border-border shadow-[var(--shadow-soft)]">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="I want something spicy and new..."
              className="flex-1 text-lg"
            />
            <Button size="lg" variant="default">
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* Quick suggestions */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Or try one of these:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setInput(suggestion.text)}
                className="group p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {suggestion.emoji}
                  </span>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {suggestion.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChef;
