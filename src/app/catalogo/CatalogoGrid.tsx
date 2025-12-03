"use client";

import { useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import Modal from "../components/ui/Modal";
import Image from "next/image";

const mockProducts = [
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

export default function CatalogoGrid() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [modalOpen, setModalOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modalData, setModalData] = useState<any>(null);

  const filtered = mockProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" ? true : product.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="py-20">
      <h1 className="text-center text-4xl font-bold mb-10">Nuestro Catálogo</h1>

      {/* Search + Filter */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 px-4 mb-10">
        <input
          type="text"
          placeholder="Buscar un juego..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-4"
        />

        <select
          className="w-full md:w-60 border border-gray-300 dark:border-gray-700 rounded-lg py-2 px-3"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Todos los tipos</option>
          <option value="bolirana">Boliranas</option>
          <option value="rana">Rana</option>
          <option value="tejo">Mini Tejo</option>
        </select>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            {...p}
            onClick={() => {
              setModalData(p);
              setModalOpen(true);
            }}
          />
        ))}
      </div>

      {/* MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {modalData && (
          <>
            <h2 className="text-2xl font-bold mb-3">{modalData.title}</h2>

            <div className="relative w-full h-48 mb-4">
              <Image
                src={modalData.image}
                alt={modalData.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              {modalData.description}
            </p>

            <ul className="mt-3 text-sm text-gray-500 dark:text-gray-400 list-disc pl-5">
              {modalData.features.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <p className="mt-4 text-lg font-bold">
              COP {modalData.price.toLocaleString()}
            </p>

            <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
              Ir a reservar
            </button>
          </>
        )}
      </Modal>
    </section>
  );
}
