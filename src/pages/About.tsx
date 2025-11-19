import { Card } from "@/components/ui/card";
import aboutBanner from "@/assets/about-banner.jpg";
import teamFounder from "@/assets/team-founder.jpg";
import teamChef from "@/assets/team-chef.jpg";
import teamResearcher from "@/assets/team-researcher.jpg";
import teamDesigner from "@/assets/team-designer.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Concept Designer",
      image: teamFounder,
      bio: "Former food journalist with 15 years exploring global cuisines."
    },
    {
      name: "Marco Rossi",
      role: "Culinary Specialist",
      image: teamChef,
      bio: "Michelin-trained chef passionate about authentic world recipes."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Cultural Researcher",
      image: teamResearcher,
      bio: "Anthropologist specializing in food traditions and cultural heritage."
    },
    {
      name: "Tom van Berg",
      role: "Visual Designer",
      image: teamDesigner,
      bio: "Creative director bringing culinary stories to life through design."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-primary-dark to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-heading uppercase mb-6 tracking-wider">
            About Around the Plate
          </h1>
          <p className="text-2xl font-body opacity-95 leading-relaxed">
            Your culinary passport to authentic global flavors
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl animate-slide-up">
          <div className="space-y-8 font-body text-lg leading-relaxed text-muted-foreground">
            <p className="text-2xl text-foreground font-medium">
              Around the Plate is more than a webshop—it's a gateway to the world's kitchens.
            </p>
            <p>
              We believe that food is the most delicious way to explore different cultures, 
              and that ambitious home chefs deserve access to authentic ingredients and recipes 
              that transport them across continents without leaving their kitchen.
            </p>
            <p>
              Our interactive 3D globe lets you spin the world and discover culinary traditions 
              from every continent. Each recipe box is carefully curated by food experts and 
              cultural consultants to ensure authenticity and quality. We don't just send 
              ingredients—we share stories, traditions, and the heart of each culture.
            </p>
            <p>
              We partner with specialty importers to source hard-to-find ingredients, 
              and our recipes are designed for passionate cooks who want to go beyond 
              the basics and truly master international cuisine. Every box is an invitation 
              to explore, create, and celebrate the rich diversity of our world.
            </p>
          </div>
        </div>
      </section>

      {/* Global Food Banner */}
      <section className="py-0">
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img 
            src={aboutBanner} 
            alt="Global Cuisines" 
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
            <Card className="p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🌍</span>
                </div>
                <h2 className="text-4xl font-heading uppercase text-primary-dark">Our Vision</h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  To make authentic global cuisine accessible to every home chef, 
                  breaking down borders one recipe at a time. We envision kitchens 
                  around the world filled with the aromas and flavors of distant lands, 
                  creating connections through the universal language of food.
                </p>
              </div>
            </Card>
            
            <Card className="p-10 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h2 className="text-4xl font-heading uppercase text-secondary">Our Values</h2>
                <ul className="font-body text-lg text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Authenticity above all—respecting culinary traditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Quality ingredients sourced from trusted partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Cultural respect and education in every box</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Supporting ambitious home cooks on their journey</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-heading uppercase mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
              A passionate group of food lovers, cultural explorers, and creative minds 
              dedicated to bringing the world to your kitchen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slide-up border-2 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-heading uppercase mb-1 text-primary-dark">
                    {member.name}
                  </h3>
                  <p className="text-sm font-body text-secondary uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-white">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="text-5xl font-heading uppercase mb-6">
            Join the Journey
          </h2>
          <p className="font-body text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Whether you're a seasoned chef or an adventurous beginner, 
            there's a world of flavors waiting to be discovered. Start your 
            culinary adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-lg font-body font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Our Boxes
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary-dark rounded-lg font-body font-medium text-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
