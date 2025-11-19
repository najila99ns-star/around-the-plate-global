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
              className="text-foreground hover:text-primary-dark transition-colors font-body"
            >
              Home
            </Link>
            <Link 
              to="/catalog" 
              className="text-foreground hover:text-primary-dark transition-colors font-body"
            >
              Catalog
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary-dark transition-colors font-body"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary-dark transition-colors font-body"
            >
              Contact
            </Link>
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
