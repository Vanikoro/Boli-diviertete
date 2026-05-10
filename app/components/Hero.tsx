import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 md:pt-0 flex items-center justify-center bg-slate-50 overflow-hidden">
      {" "}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Diversión real con{" "}
            <span className="text-boli-blue">Boli-Diviértete</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            ¿Buscas diversión para tu evento? Alquilamos bolirranas, canchas de mini tejo y una gran variedad de juegos tradicionales en Bogotá y la Sabana. Llevamos la fiesta hasta donde estés: en tu casa, en tu evento social o empresarial.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#catalogo"
              className="px-8 py-4 bg-boli-blue text-white rounded-full font-bold hover:shadow-lg transition-all"
            >
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/573118417533"
              target="_blank"
              className="px-8 py-4 border-2 border-boli-blue text-boli-blue rounded-full font-bold hover:bg-boli-blue hover:text-white transition-all"
            >
              Contactar ahora
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 relative"
        >
          <div className="w-full h-100 bg-blue-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
            <Image
              src="/hero-bolirana.jpg"
              alt="Bolirana Principal"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
