export type Product = {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  price: number;
  features: string[];
};

export const mockProducts: Product[] = [
  {
    id: "bolirana",
    title: "Bolirana Profesional",
    type: "bolirana",
    description: "Juego completo ideal para fiestas y eventos grandes.",
    image: "/bolirana.jpg",
    price: 120000,
    features: ["Incluye 10 fichas", "Madera resistente", "Medidas estándar"],
  },
  {
    id: "rana",
    title: "Juego de Rana",
    type: "rana",
    description: "Perfecto para competencias y reuniones familiares.",
    image: "/rana.jpg",
    price: 90000,
    features: ["Incluye monedas", "Metal reforzado", "Uso interior o exterior"],
  },
  {
    id: "minitejo",
    title: "Mini Tejo",
    type: "tejo",
    description: "Diversión asegurada sin usar pólvora.",
    image: "/minitejo.jpg",
    price: 80000,
    features: ["Tejos incluidos", "Tablero compacto", "Ideal para espacios pequeños"],
  },
];
