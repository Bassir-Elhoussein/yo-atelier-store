export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary text-accent">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">Yo Atelier Business</h1>
        <p className="text-lg md:text-xl text-accent/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Découvrez notre collection exclusive de luminaires, mobilier et accessoires de design d'intérieur. Chaque
          pièce est sélectionnée pour son excellence architecturale et son élégance intemporelle.
        </p>
        <a
          href="/shop"
          className="inline-block px-8 py-3 bg-primary text-secondary font-semibold tracking-wide hover:bg-primary/90 transition-colors"
        >
          Découvrir la Boutique
        </a>
      </div>
    </section>
  )
}
