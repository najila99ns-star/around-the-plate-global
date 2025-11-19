import ProductCard from "@/components/ProductCard";
import moroccoImage from "@/assets/morocco-tagine-box.jpg";
import nigeriaImage from "@/assets/nigeria-jollof-box.jpg";
import japanImage from "@/assets/japan-ramen-box.jpg";

const Catalog = () => {
  const products = [
    {
      id: "morocco-tagine",
      country: "Morocco",
      dish: "Tagine",
      description: "Slow-cooked aromatic stew with authentic North African spices",
      price: "€49",
      image: moroccoImage,
    },
    {
      id: "nigeria-jollof",
      country: "Nigeria",
      dish: "Jollof Rice",
      description: "West Africa's beloved one-pot rice dish with bold flavors",
      price: "€45",
      image: nigeriaImage,
    },
    {
      id: "japan-ramen",
      country: "Japan",
      dish: "Ramen",
      description: "Traditional Japanese noodle soup with rich umami broth",
      price: "€52",
      image: japanImage,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-heading uppercase text-center mb-6">
          Explore the World
        </h1>
        <p className="text-xl font-body text-center text-muted-foreground mb-12">
          Browse our curated boxes by country and dish.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
