import { Button } from "@/components/ui/button";
import DreamshardsBrand from "./DreamshardsBrand";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <DreamshardsBrand />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#game" className="font-pixel text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Juego
            </a>
            <a href="#characters" className="font-pixel text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Personajes
            </a>
            <a href="#story" className="font-pixel text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">
              Historia
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost-pixel" className="hidden sm:inline-flex">
              Wishlist
            </Button>
            <Button variant="pixel">
              Jugar Ya
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;