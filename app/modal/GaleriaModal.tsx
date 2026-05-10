"use client";
import { useState } from "react";
import Image from "next/image";
import { IoClose, IoLogoWhatsapp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

interface Servicio {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  detalles?: string[];
  notaTransporte?: string;
  imagenes: string[];
  categoria: string;
}

interface GaleriaModalProps {
  servicio: Servicio;
  onClose: () => void;
}

export function GaleriaModal({ servicio, onClose }: GaleriaModalProps) {
  
  const [fotoPrincipal, setFotoPrincipal] = useState(servicio.imagenes[0]);

  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center p-0 md:p-6">
      <div
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] md:rounded-3xl overflow-y-auto shadow-2xl flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-all"
        >
          <IoClose size={28} className="text-slate-900" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 p-0 lg:p-10">
          <div className="space-y-4 p-4 lg:p-0">
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <Image
                src={fotoPrincipal}
                alt={servicio.nombre}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover animate-in fade-in zoom-in duration-300"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {servicio.imagenes.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setFotoPrincipal(img)}
                  className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    fotoPrincipal === img
                      ? "border-boli-blue scale-95"
                      : "border-transparent opacity-70"
                  }`}
                >
                  <Image
                    src={img}
                    alt="Vista previa"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col p-6 lg:p-0">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-boli-blue/10 text-boli-blue text-[10px] uppercase tracking-widest font-black px-2 py-1 rounded">
                  {servicio.categoria}
                </span>
              </div>

              <h2 className="text-3xl font-black text-slate-900 leading-tight mb-4">
                {servicio.nombre}
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6">
                {servicio.descripcion}
              </p>

              {servicio.detalles && (
                <div className="space-y-2 mb-6">
                  <p className="font-bold text-sm text-slate-900">
                    ¿Qué incluye?
                  </p>
                  <ul className="grid grid-cols-1 gap-2">
                    {servicio.detalles.map((detalle, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="text-boli-blue mt-1">✔</span>
                        {detalle}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {servicio.notaTransporte && (
                <div className="flex items-start gap-4 p-5 bg-amber-50 rounded-2xl border border-amber-200 mb-8 shadow-sm">
                  {/* Icono un poco más grande y en color de advertencia suave */}
                  <FaTruck className="text-amber-600 shrink-0 mt-1" size={24} />

                  <div className="flex flex-col">
                    <strong className="text-amber-900 text-sm uppercase tracking-wider mb-1 font-black">
                      ¡Importante sobre el transporte!
                    </strong>
                    <p className="text-[14px] md:text-[15px] text-amber-800 font-semibold leading-snug">
                      {servicio.notaTransporte}
                    </p>
                    <p className="text-[16px] text-amber-700/80 mt-1 italic">
                      * El valor final dependerá de la distancia y facilidad de
                      acceso.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">
                  Precio desde
                </p>
                <p className="text-3xl font-black text-slate-900">
                  ${servicio.precio.toLocaleString()}
                </p>
              </div>

              <a
                href={`https://wa.me/573118417533?text=Hola! Me interesa alquilar: ${servicio.nombre}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-boli-blue text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-boli-blue/20"
              >
                <IoLogoWhatsapp size={22} />
                Cotizar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
