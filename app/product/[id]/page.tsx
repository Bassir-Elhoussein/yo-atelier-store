"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import { MessageCircle, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find((p) => p.id === productId)
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold mb-4">Produit non trouvé</h1>
            <Link href="/shop" className="text-primary hover:underline">
              Retour à la boutique
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const whatsappMessage = `Bonjour, je suis intéressé par le produit ${product.name} sur Yo Atelier Business.`
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-accent border-b border-border px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
          <Link href="/shop" className="text-muted hover:text-foreground transition-colors flex items-center gap-1">
            <ArrowLeft size={16} />
            Boutique
          </Link>
          <span className="text-muted">/</span>
          <span className="text-foreground font-semibold">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="animate-fade-in">
              <div className="relative bg-accent aspect-square overflow-hidden mb-4">
                <Image
                  src={product.images[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="space-y-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {product.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative w-16 h-16 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                          idx === currentImageIndex ? "border-primary" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${product.name} ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevImage}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border hover:bg-accent transition-colors"
                      aria-label="Image précédente"
                    >
                      <ChevronLeft size={18} />
                      Précédent
                    </button>
                    <button
                      onClick={nextImage}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-border hover:bg-accent transition-colors"
                      aria-label="Image suivante"
                    >
                      Suivant
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="animate-slide-up">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-accent text-xs tracking-widest font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted mb-6">{product.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <p className="text-4xl font-bold text-primary">{product.price} DH</p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="font-serif text-lg font-semibold mb-3">Description</h3>
                <p className="text-foreground/80 leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Quantity & Action */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="text-sm font-semibold">Quantité:</label>
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-accent transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-accent transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-secondary font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle size={20} />
                  Contacter via WhatsApp
                </a>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-border space-y-3 text-sm text-muted">
                <p>✓ Livraison disponible</p>
                <p>✓ Consultation gratuite</p>
                <p>✓ Garantie qualité</p>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-border pt-16">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Produits Similaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                    <div className="group cursor-pointer animate-scale-in">
                      <div className="relative overflow-hidden bg-accent mb-4 aspect-square">
                        <Image
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-primary font-semibold">{relatedProduct.price} DH</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
