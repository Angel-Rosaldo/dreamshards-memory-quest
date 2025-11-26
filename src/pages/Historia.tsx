import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import fondo from "@/assets/fondo.jpg";
import hero from "@/assets/hero-character.jpg";

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
                  El joven Jason William Token vivía en un pequeño pueblo, donde los días transcurrían sin mayores emociones. 
                  Sin embargo, una noche, Liderc, un ser misterioro que con su sola presencia emanaba oscuridad, tras una lucha con él, nuestro joven protagonista perdió sus memorias
                  a costas del villano.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Ahora debe embarcarse en una aventura a través de bosques mágicos y cavernas oscuras junto con Fairy, un hada que lo guiará en su misión para recuperar sus recuerdos perdidos
                  y pelear con distintos enemigos.
                </p>
              </div>

              {/* Imagen 1 */}
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-full h-[400px] bg-surface/20 rounded-lg border-2 border-surface flex items-center justify-center overflow-hidden">
                  <img src={fondo} alt="Fondo Historia" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg"></div>
              </div>
            </div>

            {/* Segunda sección de historia con imagen (invertida) */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagen 2 */}
              <div className="relative animate-fade-in-up order-2 lg:order-1">
                <div className="w-full h-[400px] bg-surface/20 rounded-lg border-2 border-surface flex items-center justify-center overflow-hidden">
                  <img src={hero} alt="Personaje principal" className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg"></div>
              </div>

              <div className="space-y-6 animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-pixel text-xl text-primary uppercase tracking-wider">
                  Los Mundos de Sueños
                </h3>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  A medida que Jason y Fairy avanzan en su viaje, descubren mundos llenos de maravillas y peligros.
                  Desde bosques encantados hasta cavernas subterráneas, cada lugar presenta nuevos desafíos y enemigos que deben superar.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  Con cada recuerdo recuperado, Jason se acerca más a descubrir la verdad detrás de su pérdida de memoria y el oscuro plan de Liderc.
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
