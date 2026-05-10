"use client";
import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Carlos Rodríguez", text: "Excelente servicio, la bolirana llegó impecable y a tiempo para el cumple de mi hijo.", stars: 5 },
  { name: "Empresa Tech-S.A", text: "Alquilamos 3 juegos para un evento corporativo y fue un éxito total. Muy profesionales.", stars: 5 },
  { name: "Martha Lucía", text: "Súper cumplidos con la entrega en Chía. Los equipos están como nuevos.", stars: 5 },
];

export function Testimonios() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(rev.stars)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-4">&quot;{rev.text}&quot;</p>
              <p className="font-bold text-gray-800 text-sm">- {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}