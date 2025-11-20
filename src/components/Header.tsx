import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-light.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Around the Plate" className="h-12" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className="text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              Discover Boxes
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors font-body text-lg"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body px-6"
            >
              Order
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
