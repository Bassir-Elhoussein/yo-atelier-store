"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

{/* Hero Section */}
<section
  className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary text-accent bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/pic3.png')", // 🖼️ replace with your background image
  }}
>
  {/* overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white">
      Nous Contacter
    </h1>
    <p className="text-lg text-white/90">
      Vous avez une question ou un projet ? Nous serions ravis de vous aider.
    </p>
  </div>
</section>


      {/* Main Content */}
      <section className="flex-1 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-slide-up">
              <h2 className="font-serif text-3xl font-bold mb-8">Informations de Contact</h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:yoatelier.business@gmail.com" className="text-primary hover:underline">
                      yoatelier.business@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+33123456789" className="text-primary hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-foreground/80">
                      123 Rue de l'Architecture
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-12 p-6 bg-accent border border-border">
                <h3 className="font-serif text-lg font-bold mb-4">Horaires d'Ouverture</h3>
                <div className="space-y-2 text-sm text-foreground/80">
                  <p>Lundi - Vendredi: 10h - 18h</p>
                  <p>Samedi: 11h - 17h</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up">
              <h2 className="font-serif text-3xl font-bold mb-8">Envoyez-nous un Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
                  Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-primary text-secondary font-semibold tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
