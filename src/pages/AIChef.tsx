import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AIChef = () => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);

  const suggestions = [
    { text: "Surprise me", color: "bg-primary" },
    { text: "Something spicy", color: "bg-[#E89A61]" },
    { text: "Comfort food", color: "bg-secondary" },
  ];

  const handleGenerate = () => {
    if (input.trim()) {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading uppercase mb-4">
            AI Inspire Me Chef
          </h1>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Get personalized cuisine inspirations based on your mood, preferences, and cravings.
          </p>
        </div>

        {/* Suggestion Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up">
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              size="lg"
              onClick={() => setInput(suggestion.text)}
              className={`${suggestion.color} text-white hover:opacity-90 transition-all`}
            >
              {suggestion.text}
            </Button>
          ))}
        </div>

        {/* Input Card */}
        <Card className="p-8 mb-8 shadow-lg animate-slide-up">
          <div className="space-y-4">
            <label className="block text-lg font-body font-medium mb-2">
              Tell us what you're craving:
            </label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="I want something vegetarian and cozy..."
              className="w-full px-4 py-3 border-2 border-border rounded-md font-body focus:outline-none focus:border-primary transition-colors text-lg"
            />
            <Button
              size="lg"
              onClick={handleGenerate}
              className="w-full bg-primary-dark hover:bg-primary-dark/90 text-white text-lg py-6"
            >
              Generate Inspiration
            </Button>
          </div>
        </Card>

        {/* Simulated Result */}
        {showResult && (
          <Card className="p-8 animate-fade-in bg-gradient-to-br from-background to-muted/20">
            <h3 className="text-2xl font-heading uppercase mb-6 text-primary-dark">
              Your Personalized Recommendations:
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-heading uppercase mb-2 text-primary">
                  Italy – Risotto
                </h4>
                <p className="font-body text-muted-foreground mb-3">
                  Creamy, comforting, and sophisticated. Perfect for a cozy evening with rich flavors.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Box
                </Button>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-heading uppercase mb-2 text-primary">
                  India – Butter Chicken
                </h4>
                <p className="font-body text-muted-foreground mb-3">
                  Warm spices meet creamy tomato curry. A comforting dish with aromatic depth.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Box
                </Button>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-heading uppercase mb-2 text-primary">
                  Morocco – Tagine
                </h4>
                <p className="font-body text-muted-foreground mb-3">
                  Slow-cooked aromatic stew with authentic North African warmth and spices.
                </p>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Box
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AIChef;
