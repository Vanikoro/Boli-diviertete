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
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Diversión real con{" "}
            <span className="text-boli-blue">Boli-Diviértete</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            ¿Buscas diversión para tu evento? Alquilamos bolirranas, canchas de
            mini tejo y una gran variedad de juegos tradicionales en Bogotá y la
            Sabana. Llevamos la fiesta hasta donde estés: en tu casa, en tu
            evento social o empresarial.
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
          className="md:w-1/2 mt-12 md:mt-0 relative px-4 md:px-0"
        >
          <div className="relative w-full h-87.5 md:h-125 bg-slate-50 flex items-center justify-center overflow-hidden">
            <Image
              src="/hero_full.jpeg"
              alt="Bolirana Principal"
              width={400}
              height={500}
              priority
              className="hidden max-md:block object-contain p-2 scale-110"
            />

            <Image
              src="/hero_full.jpeg"
              alt="Bolirana Principal"
              fill
              className="hidden md:block object-contain p-4 scale-100"
              sizes="50vw"
            />
          </div>

          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-boli-blue/15 blur-3xl rounded-full z-0" />
        </motion.div>
      </div>
    </section>
  );
}
