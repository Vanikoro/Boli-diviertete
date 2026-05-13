"use client";

import { Catalogo } from "./components/Catalogo";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Testimonios } from "./components/Testimonios";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Catalogo limitar={true} />
      <Galeria />
      <Testimonios />
      <Footer />
    </main>
  );
}