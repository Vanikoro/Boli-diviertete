"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicios } from "../data/servicios";
import { GaleriaModal } from "../modal/GaleriaModal";

interface CatalogoProps {
  limitar?: boolean;
}

export function Catalogo({ limitar = false }: CatalogoProps) {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<
    (typeof servicios)[0] | null
  >(null);

  const listaMostrar = limitar ? servicios.slice(0, 4) : servicios;

  return (
    <section id="catalogo" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-12 text-slate-900">
          {limitar ? "Nuestros Favoritos" : "Catálogo Completo"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {listaMostrar.map((item) => (
            <div
              key={item.id}
              onClick={() => setServicioSeleccionado(item)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-t-3xl">
                <Image
                  src={item.imagenes[0]}
                  alt={item.nombre}
                  fill
                  className="object-contain bg-slate-50"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-black mt-3 leading-tight">
                  {item.nombre}
                </h3>
                <p className="text-boli-blue font-black mt-2">
                  ${item.precio.toLocaleString("es-CO")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {limitar && (
          <div className="mt-16 text-center">
            <Link
              href="/catalogo"
              className="inline-block bg-slate-900 text-white px-12 py-5 rounded-2xl font-black hover:bg-boli-blue transition-all shadow-xl"
            >
              Ver Catálogo Completo
            </Link>
          </div>
        )}
      </div>

      {servicioSeleccionado && (
        <GaleriaModal
          servicio={servicioSeleccionado}
          onClose={() => setServicioSeleccionado(null)}
        />
      )}
    </section>
  );
}
