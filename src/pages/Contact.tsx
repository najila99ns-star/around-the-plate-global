import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-heading uppercase mb-4">
            Contact Us
          </h1>
          <p className="text-xl font-body text-muted-foreground">
            We love to hear from fellow flavor explorers.
          </p>
        </div>

        <Card className="p-8">
          <form className="space-y-6">
            <div>
              <label className="block font-body mb-2">Name</label>
              <Input placeholder="Your name" />
            </div>
            
            <div>
              <label className="block font-body mb-2">Email</label>
              <Input type="email" placeholder="your@email.com" />
            </div>
            
            <div>
              <label className="block font-body mb-2">Reason</label>
              <select className="w-full border border-input rounded-md px-3 py-2 font-body">
                <option>Question</option>
                <option>Order Support</option>
                <option>Collaboration</option>
              </select>
            </div>
            
            <div>
              <label className="block font-body mb-2">Message</label>
              <Textarea 
                placeholder="Tell us what's on your mind..." 
                rows={6}
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary-dark hover:bg-primary"
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
