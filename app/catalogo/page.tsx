"use client";
import Link from "next/link";
import { Catalogo } from "../components/Catalogo";

export default function PaginaCatalogo() {
  return (
    <main className="min-h-screen pt-28 bg-slate-50">
      <div className="container mx-auto px-6 mb-10">
        <Link href="/" className="text-slate-500 font-bold hover:text-boli-blue transition-colors">
          ← Volver al inicio
        </Link>
      </div>
      
      <Catalogo limitar={false} />
      
      <footer className="py-10 text-center text-slate-400 text-sm">
        Boli-Diviértete © 2026 - Todos los derechos reservados
      </footer>
    </main>
  );
}