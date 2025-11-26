import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Historia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-dream relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-4 h-4 bg-crystal rounded-full animate-float opacity-70"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-32 w-5 h-5 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-60 right-20 w-2 h-2 bg-crystal-glow rounded-full animate-float opacity-80" style={{ animationDelay: '0.5s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-6">
                LA HISTORIA
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
                Un viaje a través de los sueños para recuperar lo que se perdió
              </p>
            </div>

            {/* Primera sección de historia con imagen */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6 animate-fade-in-up">
                <h3 className="font-pixel text-xl text-primary uppercase tracking-wider">
                  El Comienzo del Viaje
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Imagen 1 - AGREGAR MANUALMENTE */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-full h-[400px] bg-surface/20 rounded-lg border-2 border-surface flex items-center justify-center">
                  <p className="font-pixel text-xs text-muted-foreground">
                    [AGREGAR IMAGEN AQUÍ]
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg"></div>
              </div>
            </div>

            {/* Segunda sección de historia con imagen (invertida) */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagen 2 - AGREGAR MANUALMENTE */}
              <div className="relative animate-fade-in-up order-2 lg:order-1">
                <div className="w-full h-[400px] bg-surface/20 rounded-lg border-2 border-surface flex items-center justify-center">
                  <p className="font-pixel text-xs text-muted-foreground">
                    [AGREGAR IMAGEN AQUÍ]
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg"></div>
              </div>

              <div className="space-y-6 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-pixel text-xl text-primary uppercase tracking-wider">
                  Los Mundos de Sueños
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
                  qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Historia;
