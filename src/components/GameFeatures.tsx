import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Mundos Oníricos",
    description: "Explora paisajes de pixel art bellamente diseñados llenos de maravilla y misterio.",
    icon: "🌙"
  },
  {
    title: "Fragmentos de Memoria",
    description: "Recolecta fragmentos de memoria perdidos para reconstruir el pasado olvidado del niño.",
    icon: "💎"
  },
  {
    title: "Aventuras Épicas",
    description: "Viaja a través de desafiantes niveles de plataformas con mecánicas únicas.",
    icon: "⚔️"
  },
  {
    title: "Criaturas Mágicas",
    description: "Conoce guardianes místicos del sueño y enfréntate al antagonista que roba recuerdos.",
    icon: "✨"
  }
];

const GameFeatures = () => {
  return (
    <section className="py-20 bg-gradient-night relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-6">
            CARACTERÍSTICAS DEL JUEGO
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Sumérgete en un mundo donde los sueños y la realidad se entrelazan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-2 border-surface hover:border-primary transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-pixel text-sm text-foreground uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;