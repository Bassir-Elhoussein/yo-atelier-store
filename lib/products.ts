export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: "Luminaires" | "Chaises" | "Tables" | "Décoration"
  image: string
  images: string[]
  fullDescription: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Luminaire Suspendu Minimaliste",
    description: "Suspension élégante en métal noir avec finition mate",
    price: 189,
    category: "Luminaires",
    image: "/modern-pendant-light-minimalist-black-metal.jpg",
    images: ["/modern-pendant-light-minimalist-black-metal.jpg", "/pendant-light-detail-close-up.jpg", "/pendant-light-installed-in-room.jpg"],
    fullDescription:
      "Luminaire suspendu au design épuré et contemporain. Parfait pour créer une ambiance sophistiquée dans votre espace de vie. Fabriqué en métal noir avec finition mate, cette suspension apporte une touche minimaliste à votre intérieur.",
  },
  {
    id: "2",
    name: "Chaise Lounge Moderne",
    description: "Chaise confortable avec structure en bois massif",
    price: 450,
    category: "Chaises",
    image: "/modern-lounge-chair-wood.jpg",
    images: ["/modern-lounge-chair-wood.jpg", "/lounge-chair-side-view.jpg", "/lounge-chair-in-living-room.jpg"],
    fullDescription:
      "Chaise lounge au design épuré combinant confort et élégance. Idéale pour les espaces de détente. Structure en bois massif avec assise ergonomique, cette chaise offre un confort optimal tout en conservant une esthétique minimaliste.",
  },
  {
    id: "3",
    name: "Table Basse Architecturale",
    description: "Table basse géométrique en marbre et acier",
    price: 320,
    category: "Tables",
    image: "/geometric-coffee-table-marble-steel.jpg",
    images: ["/geometric-coffee-table-marble-steel.jpg", "/coffee-table-top-view-marble.jpg", "/coffee-table-in-living-room.jpg"],
    fullDescription:
      "Table basse au design architectural avec plateau en marbre et structure en acier brossé. Les lignes géométriques épurées en font une pièce maîtresse de votre salon. Combinaison parfaite de matériaux nobles pour un style intemporel.",
  },
  {
    id: "4",
    name: "Lampe de Bureau Élégante",
    description: "Lampe de travail avec bras articulé en laiton",
    price: 145,
    category: "Luminaires",
    image: "/elegant-desk-lamp-brass-articulated.jpg",
    images: ["/elegant-desk-lamp-brass-articulated.jpg", "/desk-lamp-detail-brass-arm.jpg", "/desk-lamp-on-workspace.jpg"],
    fullDescription:
      "Lampe de bureau au design intemporel avec bras articulé en laiton doré et abat-jour en lin. Parfaite pour un espace de travail élégant, elle offre un éclairage optimal tout en ajoutant une touche de sophistication à votre bureau.",
  },
  {
    id: "5",
    name: "Accessoire Mural Géométrique",
    description: "Sculpture murale abstraite en bois naturel",
    price: 95,
    category: "Décoration",
    image: "/geometric-wall-art-wood-sculpture.jpg",
    images: ["/geometric-wall-art-wood-sculpture.jpg", "/wall-art-detail-wood-texture.jpg", "/wall-art-installed-on-wall.jpg"],
    fullDescription:
      "Accessoire mural au design géométrique en bois naturel. Ajoute une touche artistique à votre intérieur. Cette sculpture abstraite crée une ambiance contemporaine tout en restant intemporelle, parfaite pour les amateurs de design minimaliste.",
  },
  {
    id: "6",
    name: "Miroir Encadré Minimaliste",
    description: "Miroir mural avec cadre en acier noir",
    price: 210,
    category: "Décoration",
    image: "/minimalist-framed-mirror-black-steel.jpg",
    images: ["/minimalist-framed-mirror-black-steel.jpg", "/mirror-frame-detail-steel.jpg", "/mirror-installed-on-wall.jpg"],
    fullDescription:
      "Miroir mural au cadre épuré en acier noir. Parfait pour agrandir visuellement votre espace. Le design minimaliste du cadre en acier brossé complète parfaitement tout type de décoration intérieure, du moderne au classique.",
  },
  {
    id: "7",
    name: "Suspension Sculpturale Cônique",
    description: "Lampe à suspension en bois foncé avec coupelle décorative jaune",
    price: 145,
    category: "Luminaires",
    image: "/sculptural-wooden-pendant-lamp2.jpeg",
    images: ["/sculptural-wooden-pendant-lamp1.jpeg", "/sculptural-wooden-pendant-lamp2.jpeg", "/sculptural-wooden-pendant-lamp3.png"],
    fullDescription:
      "Cette suspension apporte une touche de design organique et moderne à votre intérieur. Elle présente un corps cylindrique en bois de noyer foncé, surmonté d'une coupelle décorative jaune terre. Suspendue par un cordon noir discret, elle est dotée d'une ampoule Edison sphérique apparente qui diffuse une lumière chaude et accueillante. Idéale au-dessus d'une table d'appoint, d'un îlot de cuisine ou pour éclairer un coin lecture. Un luminaire qui est aussi une œuvre d'art minimaliste."
  }
]
