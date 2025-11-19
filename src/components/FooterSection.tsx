import { Link } from "react-router-dom";
import logo from "@/assets/logo-teal.png";

const FooterSection = () => {
  return (
    <footer className="bg-primary-dark text-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Around the Plate" className="h-12 mb-4 brightness-0 invert" />
            <p className="font-body text-sm opacity-80">
              Discover cultures through flavor
            </p>
          </div>
          
          <div>
            <h3 className="font-heading uppercase mb-4">Navigation</h3>
            <ul className="space-y-2 font-body">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/catalog" className="hover:text-secondary transition-colors">Catalog</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading uppercase mb-4">Social</h3>
            <ul className="space-y-2 font-body">
              <li><a href="#" className="hover:text-secondary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pinterest</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading uppercase mb-4">Newsletter</h3>
            <p className="font-body text-sm mb-4 opacity-80">
              Get exclusive recipes and early access
            </p>
            <input 
              type="email" 
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-foreground mb-2"
            />
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center font-body text-sm opacity-80">
          © {new Date().getFullYear()} Around the Plate – Discover cultures through flavor
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
