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
      <div className="group cursor-pointer animate-scale-in card-hover">
        <div className="relative overflow-hidden bg-accent mb-4 aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        <h3 className="font-serif text-lg font-semibold mb-2 group-hover:text-primary btn-transition">
          {product.name}
        </h3>
        <p className="text-sm text-muted mb-3 line-clamp-2 group-hover:text-foreground/80 btn-transition">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold group-hover:text-primary/80 btn-transition">
            {product.price} €
          </span>
          <span className="text-xs tracking-widest text-muted group-hover:text-foreground btn-transition">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
