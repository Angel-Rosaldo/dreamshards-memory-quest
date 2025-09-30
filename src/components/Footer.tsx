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
              Un viaje mágico a través de mundos de sueños para recuperar recuerdos perdidos.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-pixel text-sm text-foreground uppercase tracking-wider">
              Juego
            </h3>
            <div className="space-y-2">
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Jugar Ahora
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Requisitos del Sistema
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Kit de Prensa
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="font-pixel text-sm text-foreground uppercase tracking-wider">
              Comunidad
            </h3>
            <div className="space-y-2">
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="block font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">
                Boletín
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-surface mt-8 pt-8 text-center">
          <p className="font-pixel text-xs text-muted-foreground uppercase tracking-wider">
            © 2024 Dreamshards. Todos los recuerdos preservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;