import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-dream relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-6 h-6 bg-crystal rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-20 w-3 h-3 bg-crystal-glow rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-5 h-5 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
          <h2 className="font-pixel text-3xl md:text-5xl text-foreground leading-tight">
            YOUR ADVENTURE
            <span className="block text-primary animate-glow-pulse">AWAITS</span>
          </h2>

          <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed">
            Step into a world where <span className="text-crystal">memories</span> become reality 
            and <span className="text-primary">dreams</span> hold the key to your past. 
            Will you help the boy reclaim what was lost?
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button variant="hero" className="group text-base">
              Start Your Journey
              <div className="ml-2 group-hover:translate-x-1 transition-transform">→</div>
            </Button>
            <Button variant="crystal" className="text-base">
              Learn More
            </Button>
          </div>

          <div className="pt-8">
            <p className="font-pixel text-xs text-accent uppercase tracking-wider">
              Available on PC • Coming Soon to Consoles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;