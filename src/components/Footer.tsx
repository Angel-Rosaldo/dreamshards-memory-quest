import DreamshardsBrand from "./DreamshardsBrand";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-surface py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <DreamshardsBrand />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              A magical journey through dream worlds to recover lost memories.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-pixel text-sm text-foreground uppercase tracking-wider">
              Game
            </h3>
            <div className="space-y-2">
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Play Now
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                System Requirements
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Press Kit
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-pixel text-sm text-foreground uppercase tracking-wider">
              Community
            </h3>
            <div className="space-y-2">
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Newsletter
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface mt-8 pt-8 text-center">
          <p className="font-pixel text-xs text-muted-foreground uppercase tracking-wider">
            © 2024 Dreamshards. All memories preserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;