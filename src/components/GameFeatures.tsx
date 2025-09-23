import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Dreamy Worlds",
    description: "Explore beautifully crafted pixel art landscapes filled with wonder and mystery.",
    icon: "🌙"
  },
  {
    title: "Memory Fragments",
    description: "Collect lost memory shards to piece together the boy's forgotten past.",
    icon: "💎"
  },
  {
    title: "Epic Adventure",
    description: "Journey through challenging platformer levels with unique mechanics.",
    icon: "⚔️"
  },
  {
    title: "Magical Creatures",
    description: "Meet mystical dream guardians and face the memory-stealing antagonist.",
    icon: "✨"
  }
];

const GameFeatures = () => {
  return (
    <section className="py-20 bg-gradient-night relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-6">
            GAME FEATURES
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in a world where dreams and reality collide
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