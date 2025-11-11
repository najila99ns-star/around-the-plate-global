import CountryCard from "./CountryCard";
import boxItaly from "@/assets/box-italy.jpg";
import boxJapan from "@/assets/box-japan.jpg";
import boxMexico from "@/assets/box-mexico.jpg";

const countries = [
  {
    name: "Italy",
    image: boxItaly,
    cuisine: "Mediterranean Excellence",
    description: "Fresh pasta, aromatic herbs, and sun-ripened tomatoes come together with authentic Italian recipes and cultural insights.",
  },
  {
    name: "Japan",
    image: boxJapan,
    cuisine: "Traditional Harmony",
    description: "Experience the art of Japanese cuisine with premium ingredients, traditional techniques, and centuries-old culinary wisdom.",
  },
  {
    name: "Mexico",
    image: boxMexico,
    cuisine: "Vibrant Flavors",
    description: "Bold spices, fresh ingredients, and rich traditions bring the authentic taste of Mexico to your kitchen.",
  },
];

const FeaturedBoxes = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            Discover Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each box is a carefully curated journey featuring authentic ingredients, 
            detailed recipe guides, and cultural stories that bring distant lands to your kitchen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div
              key={country.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CountryCard {...country} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBoxes;
