"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-yellow-400 rounded-full border-2 border-blue-600 flex items-center justify-center">
              🎱
            </div>
            <span className="text-xl font-bold">Bolidiviertete</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-lg">
            <Link href="/" className="hover:text-blue-600">Inicio</Link>
            <Link href="/catalogo" className="hover:text-blue-600">Catálogo</Link>
            {/* <Link href="/reservas" className="hover:text-blue-600">Reservas</Link> */}
            <Link href="/contacto" className="hover:text-blue-600">Contáctanos</Link>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* HAMBURGER */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
