import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import playerImg from "@/assets/player.png";
import heroCharacter from "@/assets/feiri.png";
import charactersTrio from "@/assets/villano.png";

const Personajes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-background relative">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-3 h-3 bg-crystal rounded-full animate-float opacity-40"></div>
            <div
              className="absolute top-32 right-20 w-2 h-2 bg-accent rounded-full animate-float opacity-50"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-30"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-6">
                PERSONAJES
              </h2>
              <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce a los habitantes de los mundos de sueños
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Imagen del personaje - AGREGAR MANUALMENTE */}
              <div className="relative animate-fade-in-up">
                <div className="w-full h-[500px] bg-surface/20 rounded-lg border-2 border-surface overflow-hidden">
                  <img
                    src={playerImg}
                    alt="Nombre del Personaje"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg pointer-events-none"></div>

                {/* Decorative crystals */}
                <div className="absolute -top-3 right-4 w-6 h-6 bg-crystal rounded-full animate-crystal-shine opacity-80 shadow-crystal"></div>
                <div className="absolute bottom-4 -left-3 w-4 h-4 bg-accent rounded-full animate-float opacity-70"></div>
              </div>

              {/* Descripción del personaje */}
              <div
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-4">
                  <h3 className="font-pixel text-2xl text-foreground uppercase tracking-wider">
                    Jason William Token
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    Nacido en una pequeña ciudad rodeada de bosques y campos
                    abiertos, el nino de 13 años creció en un ambiente tranquilo
                    junto a su familia. Su vida cambió de manera drástica tras
                    la aparición de Liderc, una entidad oscura que robó sus
                    recuerdos, dejando su mente fragmentada y su identidad
                    incompleta. Marcado por este evento, el niño comienza a
                    vivir una serie de experiencias únicas dentro de mundos
                    oníricos. A medida que avanza en su aventura, logra
                    recuperar fragmentos de su memoria dispersos en diferentes
                    escenarios. Cada recuerdo recuperado se manifiesta en una
                    esfera luminosa, que poco a poco se va llenando,
                    simbolizando su reconstrucción personal y el retorno de su
                    verdadera identidad.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="font-pixel text-sm text-primary uppercase tracking-wider mb-3">
                    Habilidades Especiales
                  </h4>
                  <ul className="space-y-2">
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      Salto doble
                    </li>
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      Ataque con su recuerdo
                    </li>
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      En proceso...
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Segundo Personaje */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-32">
              {/* Descripción del personaje 2 */}
              <div
                className="space-y-6 animate-fade-in-up order-2 lg:order-1"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-4">
                  <h3 className="font-pixel text-2xl text-foreground uppercase tracking-wider">
                    Fairy
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    Feiry nació en una pequeña aldea de hadas, donde reinaba la
                    paz. Todo cambió cuando un líder oscuro ataco y encarcelo a
                    su pueblo. Solo Feiry logro escapar. Lleno de culpa y
                    decidido a salvar a su familia, salió en busca de ayuda,
                    pero terminó perdido en el bosque. Allí construyó un refugio
                    para sobrevivir. Durante su soledad, conoció a Json, un
                    viajero que buscaba recuperar su memoria. Feiry vio en él
                    una oportunidad y, movido por la esperanza, decidió
                    seguirlo, confiando en que juntos podrían rescatar a su
                    pueblo.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="font-pixel text-sm text-primary uppercase tracking-wider mb-3">
                    Habilidades Especiales
                  </h4>
                  <ul className="space-y-2">
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      Volar
                    </li>
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      Provee pistas sobre objetivos y peligros
                    </li>
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      En proceso...
                    </li>
                  </ul>
                </div>
              </div>

              {/* Imagen del personaje 2 - AGREGAR MANUALMENTE */}
              <div className="relative animate-fade-in-up order-1 lg:order-2">
                <div className="w-full h-[500px] bg-surface/20 rounded-lg border-2 border-surface overflow-hidden">
                  <img
                    src={heroCharacter}
                    alt="Nombre del Personaje 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg pointer-events-none"></div>

                {/* Decorative crystals */}
                <div className="absolute -top-3 left-4 w-6 h-6 bg-accent rounded-full animate-crystal-shine opacity-80 shadow-crystal"></div>
                <div className="absolute bottom-4 -right-3 w-4 h-4 bg-crystal rounded-full animate-float opacity-70"></div>
              </div>
            </div>

            {/* Tercer Personaje */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-32">
              {/* Imagen del personaje 3 - AGREGAR MANUALMENTE */}
              <div className="relative animate-fade-in-up">
                <div className="w-full h-[500px] bg-surface/20 rounded-lg border-2 border-surface overflow-hidden">
                  <img
                    src={charactersTrio}
                    alt="Nombre del Personaje 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg pointer-events-none"></div>

                {/* Decorative crystals */}
                <div className="absolute -top-3 right-4 w-6 h-6 bg-primary rounded-full animate-crystal-shine opacity-80 shadow-crystal"></div>
                <div className="absolute bottom-4 -left-3 w-4 h-4 bg-accent rounded-full animate-float opacity-70"></div>
              </div>

              {/* Descripción del personaje 3 */}
              <div
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="space-y-4">
                  <h3 className="font-pixel text-2xl text-foreground uppercase tracking-wider">
                    Liderc
                  </h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    Liderc es una entidad oscura nacida del miedo y los traumas
                    reprimidos de un corazón joven. Se alimenta de recuerdos
                    para intentar llenar el vacío emocional que lo consume. Al
                    encontrar Json, le robó sus recuerdos pensando que así lo
                    liberaría del dolor, sin saber que eso solo aumentaría su
                    propio caos. Ahora reina en un mundo distorsionado hecho de
                    memorias fragmentadas. Representa la confusión, el miedo y
                    aquello que el protagonista intenta olvidar. No es malvado
                    por naturaleza, sino el resultado del dolor que jamás fue
                    enfrentado.
                  </p>
                </div>

                <div className="pt-4">
                  <h4 className="font-pixel text-sm text-primary uppercase tracking-wider mb-3">
                    Habilidades Especiales
                  </h4>
                  <ul className="space-y-2">
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      Esfera de oscuridad
                    </li>
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      Ataque a distancia absorcion
                    </li>
                    <li className="font-sans text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-crystal">●</span>
                      En proceso...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Personajes;
