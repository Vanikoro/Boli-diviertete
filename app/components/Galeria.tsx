"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const FOTOS = [
  "/trayectoria/galeria-1.jpg",
  "/trayectoria/galeria-2.jpg",
  "/trayectoria/galeria-3.jpg",
  "/trayectoria/galeria-4.jpg",
  "/trayectoria/galeria-5.jpg",
  "/trayectoria/galeria-6.jpg",
  "/trayectoria/galeria-7.jpg",
  "/trayectoria/galeria-8.jpg",
];

export function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Galería de Eventos
          </h2>
          <p className="text-gray-500">
            Momentos Boli-Diviértete en Bogotá y la Sabana.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {FOTOS.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={src}
                alt={`Evento ${index}`}
                width={500} // O las medidas que prefieras
                height={600}
                // Si es la primera imagen de la galería, que cargue con prioridad
                priority={index === 0}
                className="w-full h-auto object-cover hover:opacity-90 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
