import { Button } from "@/components/ui/button";
import crystalShard from "@/assets/crystal-shard.png";
import gifDreamshard from "@/assets/gifdream2.gif";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dream">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-crystal rounded-full animate-float opacity-70"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-crystal-glow rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Floating crystal */}
            <div className="flex justify-center lg:justify-start mb-6">
              <img 
                src={crystalShard} 
                alt="Memory Crystal"
                className="w-16 h-16 animate-crystal-shine drop-shadow-glow"
              />
            </div>

            <h1 className="font-pixel text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight">
              DREAM
              <span className="block text-primary animate-glow-pulse">SHARDS</span>
            </h1>

            <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Embark on a magical journey through <span className="text-primary">dream worlds</span> as a young boy 
              searching for fragments of his <span className="text-crystal">lost memories</span>.
            </p>

            <div className="space-y-4">
              <p className="font-pixel text-sm text-accent uppercase tracking-wider">
                Adventure • Platformer • Pixel Art
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" className="group">
                  Play Now
                  <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
                </Button>
                <Button variant="crystal">
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* GIF decorativo más grande */}
            <div className="relative flex justify-center">
              <img
                src={gifDreamshard}
                alt="Dreamshard animado"
                className="w-[800px] h-auto rounded-lg shadow-dream border-2 border-surface"
              />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-crystal rounded-full animate-float opacity-80 shadow-crystal"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;