"use client";

import { Catalogo } from "./components/Catalogo";
import { Footer } from "./components/Footer";
import { Galeria } from "./components/Galeria";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Testimonios } from "./components/Testimonios";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <WhatsAppFloat />
      <Hero />
      <Catalogo limitar={true} />
      <Galeria />
      <Testimonios />
      <Footer />
    </main>
  );
}