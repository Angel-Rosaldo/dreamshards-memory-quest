import { Card } from "@/components/ui/card";
import charactersImage from "@/assets/characters-trio.jpg";

const characters = [
  {
    name: "Jason W. Token",
    role: "Protagonista",
    description: "Un joven valiente que busca sus recuerdos perdidos a través del reino de los sueños."
  },
  {
    name: "Feiri",
    role: "Aliado",
    description: "Criaturas místicas que protegen los mundos de sueños y guían a las almas perdidas."
  },
  {
    name: "Liderc",
    role: "Antagonista", 
    description: "Una entidad oscura que roba recuerdos valiosos, dejando vacío a su paso."
  }
];

const CharacterShowcase = () => {
  return (
    <section className="py-20 bg-background relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-3 h-3 bg-crystal rounded-full animate-float opacity-40"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-accent rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-6">
            CONOCE A LOS PERSONAJES
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada sueño cuenta una historia, cada personaje guarda una parte de la verdad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Character artwork */}
          <div className="relative animate-fade-in-up">
            <img 
              src={charactersImage} 
              alt="Personajes del juego: niño protagonista, guardián del sueño y antagonista ladrón de memorias"
              className="w-full h-auto rounded-lg shadow-dream border-2 border-surface"
            />
            <div className="absolute inset-0 bg-gradient-crystal opacity-10 rounded-lg"></div>
            
            {/* Decorative crystals */}
            <div className="absolute -top-3 right-4 w-6 h-6 bg-crystal rounded-full animate-crystal-shine opacity-80 shadow-crystal"></div>
            <div className="absolute bottom-4 -left-3 w-4 h-4 bg-accent rounded-full animate-float opacity-70"></div>
          </div>

          {/* Character descriptions */}
          <div className="space-y-6">
            {characters.map((character, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-2 border-surface hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-pixel text-base text-foreground uppercase tracking-wider">
                      {character.name}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-crystal text-xs font-pixel text-background rounded-full border border-crystal">
                      {character.role}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {character.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;