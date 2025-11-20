import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AIChef = () => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const suggestions = [
    "I want something spicy",
    "I want something sweet",
    "Surprise me",
  ];

  const handleGenerate = () => {
    if (input.trim()) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading uppercase mb-6 text-primary">
            Inspire Me, AI Chef
          </h1>
          <p className="text-xl font-body text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Tell us what you're craving, and our AI Chef will inspire your next culinary adventure with personalized recipe box suggestions from around the world.
          </p>
        </div>

        {/* Suggestion Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="outline"
              size="lg"
              onClick={() => setInput(suggestion)}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-body"
            >
              {suggestion}
            </Button>
          ))}
        </div>

        {/* Input Card */}
        <Card className="p-8 mb-12 bg-card border-border/50 animate-scale-in">
          <label className="block font-body text-lg mb-4 text-foreground">
            Tell me what flavor you feel like:
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="E.g., I want something vegetarian and cozy, or I'm craving bold spices and citrus..."
            className="w-full px-4 py-3 border-2 border-border rounded-md font-body focus:outline-none focus:border-primary transition-colors bg-background min-h-[120px] resize-none"
          />
          <Button
            onClick={handleGenerate}
            size="lg"
            className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-body text-lg py-6"
          >
            Generate Inspiration
          </Button>
        </Card>

        {/* Simulated Results */}
        {showResult && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-heading uppercase text-center mb-8 text-primary">
              Your Personalized Recommendations
            </h2>

            <Card className="p-6 hover:shadow-xl transition-all hover:scale-[1.02] bg-card border-border/50">
              <h3 className="text-2xl font-heading uppercase mb-3 text-accent">
                Morocco - Tagine
              </h3>
              <p className="font-body text-foreground/80 mb-4 leading-relaxed">
                Experience the aromatic spices of North Africa with our authentic Moroccan Tagine box.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-body">
                View Box
              </Button>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChef;
