import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-secondary text-accent py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">À Propos de Yo Atelier</h1>
          <p className="text-lg text-accent/80 leading-relaxed">
            Depuis plus d'une décennie, nous sélectionnons les plus belles pièces de design d'intérieur et
            d'architecture pour transformer vos espaces en lieux d'exception.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Our Story */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Yo Atelier Business est née de la passion pour le design d'excellence et l'architecture contemporaine.
              Notre mission est de mettre à disposition des professionnels et des particuliers une sélection curatée de
              luminaires, mobilier et accessoires de décoration d'intérieur.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Chaque pièce de notre collection est choisie pour son design intemporel, sa qualité de fabrication et sa
              capacité à transformer un espace en environnement harmonieux et inspirant.
            </p>
          </div>

          {/* Our Values */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl font-bold mb-8">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-accent border border-border">
                <h3 className="font-serif text-xl font-bold mb-3">Excellence</h3>
                <p className="text-foreground/80">
                  Nous ne proposons que des produits de haute qualité, sélectionnés avec rigueur.
                </p>
              </div>
              <div className="p-6 bg-accent border border-border">
                <h3 className="font-serif text-xl font-bold mb-3">Authenticité</h3>
                <p className="text-foreground/80">
                  Chaque pièce raconte une histoire et reflète l'authenticité du design contemporain.
                </p>
              </div>
              <div className="p-6 bg-accent border border-border">
                <h3 className="font-serif text-xl font-bold mb-3">Service</h3>
                <p className="text-foreground/80">
                  Nous accompagnons nos clients dans leurs projets avec expertise et disponibilité.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="animate-slide-up">
            <h2 className="font-serif text-3xl font-bold mb-6">Notre Équipe</h2>
            <p className="text-foreground/80 leading-relaxed">
              Notre équipe est composée de professionnels passionnés par le design et l'architecture. Avec plusieurs
              années d'expérience dans le secteur, nous mettons notre expertise au service de vos projets pour créer des
              espaces qui vous ressemblent.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
