import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import moroccoImage from "@/assets/morocco-tagine-box.jpg";
import nigeriaImage from "@/assets/nigeria-jollof-box.jpg";
import japanImage from "@/assets/japan-ramen-box.jpg";
import curacaoImage from "@/assets/curacao-stoba-box.jpg";
import spainImage from "@/assets/spain-paella-box.jpg";
import mexicoImage from "@/assets/mexico-mole-box.jpg";
import netherlandsImage from "@/assets/netherlands-stamppot-box.jpg";
import italyImage from "@/assets/italy-risotto-box.jpg";
import indiaImage from "@/assets/india-butter-chicken-box.jpg";
import thailandImage from "@/assets/thailand-pad-thai-box.jpg";
import jamaicaImage from "@/assets/jamaica-jerk-chicken-box.jpg";
import turkeyImage from "@/assets/turkey-borek-box.jpg";
import brazilImage from "@/assets/brazil-feijoada-box.jpg";

const Catalog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const products = [
    {
      id: "morocco-tagine",
      country: "Morocco",
      region: "Africa",
      dish: "Tagine",
      description: "Slow-cooked aromatic stew with authentic North African spices",
      price: "€49",
      image: moroccoImage,
    },
    {
      id: "nigeria-jollof",
      country: "Nigeria",
      region: "Africa",
      dish: "Jollof Rice",
      description: "West Africa's beloved one-pot rice dish with bold flavors",
      price: "€45",
      image: nigeriaImage,
    },
    {
      id: "japan-ramen",
      country: "Japan",
      region: "Asia",
      dish: "Ramen",
      description: "Traditional Japanese noodle soup with rich umami broth",
      price: "€52",
      image: japanImage,
    },
    {
      id: "curacao-stoba",
      country: "Curaçao",
      region: "Caribbean",
      dish: "Stobá",
      description: "Caribbean slow-cooked stew with papaya and warm spices",
      price: "€48",
      image: curacaoImage,
    },
    {
      id: "spain-paella",
      country: "Spain",
      region: "Europe",
      dish: "Paella",
      description: "Saffron-infused rice with seafood from the Valencian coast",
      price: "€54",
      image: spainImage,
    },
    {
      id: "mexico-mole",
      country: "Mexico",
      region: "Latin America",
      dish: "Mole Poblano",
      description: "Rich chocolate-chili sauce with complex Mexican spices",
      price: "€50",
      image: mexicoImage,
    },
    {
      id: "netherlands-stamppot",
      country: "Netherlands",
      region: "Europe",
      dish: "Stamppot",
      description: "Dutch comfort food with mashed vegetables and smoked sausage",
      price: "€42",
      image: netherlandsImage,
    },
    {
      id: "italy-risotto",
      country: "Italy",
      region: "Europe",
      dish: "Risotto",
      description: "Creamy Arborio rice cooked to perfection with Parmigiano",
      price: "€46",
      image: italyImage,
    },
    {
      id: "india-butter-chicken",
      country: "India",
      region: "Asia",
      dish: "Butter Chicken",
      description: "Creamy tomato curry with aromatic Indian spices and naan",
      price: "€47",
      image: indiaImage,
    },
    {
      id: "thailand-pad-thai",
      country: "Thailand",
      region: "Asia",
      dish: "Pad Thai",
      description: "Stir-fried rice noodles with tamarind, peanuts, and lime",
      price: "€44",
      image: thailandImage,
    },
    {
      id: "jamaica-jerk-chicken",
      country: "Jamaica",
      region: "Caribbean",
      dish: "Jerk Chicken",
      description: "Spicy grilled chicken with authentic Jamaican jerk seasoning",
      price: "€49",
      image: jamaicaImage,
    },
    {
      id: "turkey-borek",
      country: "Turkey",
      region: "Europe",
      dish: "Börek",
      description: "Flaky layered pastry filled with cheese and fresh herbs",
      price: "€43",
      image: turkeyImage,
    },
    {
      id: "brazil-feijoada",
      country: "Brazil",
      region: "Latin America",
      dish: "Feijoada",
      description: "Hearty black bean stew with pork, Brazil's national dish",
      price: "€51",
      image: brazilImage,
    },
  ];

  const filters = ["All", "Africa", "Europe", "Asia", "Latin America", "Caribbean"];

  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.region === activeFilter);

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-heading uppercase mb-4">
            Explore the World
          </h1>
          <p className="text-xl font-body text-muted-foreground">
            Browse our curated boxes by country and dish.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary-dark text-white shadow-lg scale-105"
                  : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary-dark"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
