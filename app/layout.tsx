import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yo Atelier Business - Architecture & Design",
  description: "Boutique élégante de produits d'architecture et de design d'intérieur",
  icons: {
    icon: "/yoatelier.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
