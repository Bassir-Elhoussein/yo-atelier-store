"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

const categories = ["Tous", "Luminaires", "Chaises", "Tables", "Décoration"]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const filteredProducts =
    selectedCategory === "Tous" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
     <section
  className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-secondary text-accent bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/pic2.png')", // 🖼️ replace with your image path
  }}
>
  {/* overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white">
      Notre Boutique
    </h1>
    <p className="text-lg text-white/90">
      Découvrez notre sélection exclusive de pièces de design
    </p>
  </div>
</section>


      {/* Main Content */}
      <section className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-12 animate-slide-up">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 text-sm tracking-wide transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-secondary font-semibold"
                      : "bg-accent text-foreground hover:bg-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted">Aucun produit trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
