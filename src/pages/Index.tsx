import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedBoxes from "@/components/FeaturedBoxes";
import AIChef from "@/components/AIChef";
import DigitalPassport from "@/components/DigitalPassport";
import Community from "@/components/Community";
import Subscription from "@/components/Subscription";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <FeaturedBoxes />
      <AIChef />
      <DigitalPassport />
      <Community />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Index;
