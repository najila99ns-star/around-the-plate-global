import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    explore: [
      { name: "All Countries", href: "#" },
      { name: "Featured Boxes", href: "#" },
      { name: "Gift Cards", href: "#" },
      { name: "Recipe Library", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Story", href: "#" },
      { name: "Press", href: "#" },
      { name: "Careers", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Around the Plate
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Your culinary passport to every culture. Discover authentic recipes and 
              ingredients from around the world, delivered to your door.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">
                Join Our Culinary Journey
              </label>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1"
                />
                <Button variant="default">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {links.explore.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Around the Plate. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
              >
                <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
