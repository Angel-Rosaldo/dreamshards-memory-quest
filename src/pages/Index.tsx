import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameFeatures from "@/components/GameFeatures";
import CharacterShowcase from "@/components/CharacterShowcase";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <GameFeatures />
        <CharacterShowcase />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;