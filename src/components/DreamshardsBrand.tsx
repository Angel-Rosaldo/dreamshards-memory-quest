const DreamshardsBrand = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-crystal rounded border-2 border-crystal animate-crystal-shine"></div>
        <div className="absolute inset-0 bg-gradient-crystal rounded opacity-50 blur-sm"></div>
      </div>
      <h1 className="font-pixel text-lg text-foreground tracking-wider">
        DREAMSHARDS
      </h1>
    </div>
  );
};

export default DreamshardsBrand;