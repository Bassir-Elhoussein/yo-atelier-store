"use client"

import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative cursor-pointer animate-scale-in card-hover flex flex-col h-full bg-background rounded-lg shadow-sm overflow-hidden">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-accent aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* ✅ Branding Logo (bottom-right corner) */}
          <div className="absolute bottom-2 right-2">
            <Image
              src="/yoatelier.png" // 🖼️ replace with your real logo path (e.g., /logo.png)
              alt="Brand Logo"
              width={40}
              height={40}
              className="opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 justify-between p-4 space-y-3">
          <h3 className="font-serif text-xl font-semibold leading-tight text-foreground group-hover:text-primary btn-transition">
            {product.name}
          </h3>

          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2 group-hover:text-foreground/70 btn-transition">
            {product.description}
          </p>

          <div className="flex items-end justify-between pt-3 mt-auto border-t border-border/50">
            <span className="text-lg font-semibold text-primary group-hover:text-primary/80 btn-transition">
              {product.price} DH
            </span>
            {product.category && (
              <span className="text-xs tracking-widest uppercase text-muted-foreground group-hover:text-foreground/60 btn-transition">
                {product.category}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
