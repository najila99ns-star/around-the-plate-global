import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading uppercase mb-4 text-primary">
            Contact Us
          </h1>
          <p className="text-xl font-body text-foreground/80 leading-relaxed">
            We love to hear from fellow flavor explorers.
          </p>
        </div>

        <Card className="p-8 bg-card border-border/50 animate-scale-in">
          <form className="space-y-6">
            <div>
              <label className="block font-body mb-2 text-foreground">Name</label>
              <Input placeholder="Your name" className="font-body" />
            </div>
            
            <div>
              <label className="block font-body mb-2 text-foreground">Email</label>
              <Input type="email" placeholder="your@email.com" className="font-body" />
            </div>
            
            <div>
              <label className="block font-body mb-2 text-foreground">Reason</label>
              <select className="w-full border-2 border-input rounded-md px-3 py-2 font-body focus:outline-none focus:border-primary transition-colors bg-background">
                <option>Question</option>
                <option>Order Support</option>
                <option>Collaboration</option>
              </select>
            </div>
            
            <div>
              <label className="block font-body mb-2 text-foreground">Message</label>
              <Textarea 
                placeholder="Tell us what's on your mind..." 
                rows={6}
                className="font-body"
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
