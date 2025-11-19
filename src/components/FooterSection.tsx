import { Link } from "react-router-dom";
import logo from "@/assets/logo-teal.png";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-[hsl(175,42%,30%)] text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src={logo} alt="Around the Plate" className="h-14 mb-4 brightness-0 invert" />
            <p className="font-body text-sm opacity-90 leading-relaxed">
              Discover cultures through flavor. Your culinary passport to authentic global experiences.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <span className="text-lg">📌</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading uppercase mb-6 text-lg tracking-wider">Navigation</h3>
            <ul className="space-y-3 font-body">
              <li><Link to="/" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">Home</Link></li>
              <li><Link to="/catalog" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">Catalog</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">About</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading uppercase mb-6 text-lg tracking-wider">Support</h3>
            <ul className="space-y-3 font-body">
              <li><a href="#" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">FAQs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">Shipping Info</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">Returns</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors hover:pl-2 inline-block transition-all duration-200">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading uppercase mb-6 text-lg tracking-wider">Newsletter</h3>
            <p className="font-body text-sm mb-4 opacity-90 leading-relaxed">
              Get exclusive recipes, cooking tips, and early access to new boxes.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-md text-foreground bg-white/95 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
              />
              <button className="w-full px-4 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-md font-body font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm opacity-80">
            © {new Date().getFullYear()} Around the Plate – Discover cultures through flavor
          </p>
          <div className="flex gap-6 font-body text-sm opacity-80">
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
