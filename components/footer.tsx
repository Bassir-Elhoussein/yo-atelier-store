import Link from "next/link"
import { Instagram, Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Brand */}
          <div>
            <div className="w-16 h-16 mb-4">
              <Image
                src="/yoatelier.png"
                alt="Yo Atelier Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Votre destination pour l'architecture et le design d'intérieur d'excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-accent transition-colors duration-300">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-300">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+33123456789" className="hover:text-accent transition-colors duration-300">
                  +212 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:yoatelier.business@gmail.com" className="hover:text-accent transition-colors duration-300">
                  yoatelier.business@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bouskoura, Morocco</span>
              </li>
            </ul>
          </div>

          {/* Social Links with WhatsApp */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wide">Nous Suivre</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/33123456789?text=Bonjour%2C%20je%20suis%20intéressé%20par%20vos%20produits%20Yo%20Atelier%20Business."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label="WhatsApp"
                title="Contactez-nous sur WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.instagram.com/yo.atelier.design"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label="Instagram"
                title="Suivez-nous sur Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:yoatelier.business@gmail.com"
                className="hover:text-accent transition-colors duration-300 hover:scale-110 transform"
                aria-label="Email"
                title="Envoyez-nous un email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

       {/* Footer Bottom */}
<div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
  <div className="flex flex-col items-center gap-2">
    
    <a
      href="https://brandflox.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
    >
      {/* Logo */}
      <img
        src="/darklogo.png" // change path if needed
        alt="BrandFlox Logo"
        className="h-6 w-auto"
      />

      {/* Company Name */}
      <span className="font-semibold">
        BrandFlox
      </span>
    </a>

    <p className="text-xs">
      Developed & crafted by{" "}
      <span className="font-medium text-primary-foreground">
        BrandFlox
      </span>
    </p>

    <p className="text-xs">
      &copy; 2025 Yo Atelier Business. Tous droits réservés.
    </p>
  </div>
</div>

      </div>
    </footer>
  )
}
