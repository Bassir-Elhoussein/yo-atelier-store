export default function HeroSection() {
  return (
<section
  className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary text-accent bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/pic1.png')",
  }}
>
  <div className="absolute inset-0 bg-black/40"></div> {/* overlay for readability */}
  
  <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
    <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance text-white">
      Yo Atelier Business
    </h1>
    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
      Découvrez notre collection exclusive de luminaires, mobilier et accessoires de design d'intérieur. Chaque
      pièce est sélectionnée pour son excellence architecturale et son élégance intemporelle.
    </p>
    <a
      href="/shop"
      className="inline-block px-8 py-3 bg-primary text-secondary font-semibold tracking-wide hover:bg-primary/90 transition-colors rounded-full"
    >
      Découvrir la Boutique
    </a>
  </div>
</section>

  )
}
