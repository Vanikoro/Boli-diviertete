import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative text-center py-24 px-6 overflow-hidden">
      {/* Fondo temporal (imagen genérica) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imagenes/hero-bolirana.jpg"
          alt="Bolirana"
          fill
          className="object-cover opacity-40 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-black/80"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          BoliDiviértete
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-100 drop-shadow">
          Alquiler de boliranas, rana, mini tejo y juegos de bar. Servicio a
          domicilio en Bogotá y alrededores. También puedes visitarnos en
          nuestro punto físico.
        </p>

        <div className="flex justify-center gap-4">
          {/* <a
            href="/reservas"
            className="px-6 py-3 rounded-lg font-semibold bg-primary-500 hover:bg-primary-600 text-white shadow-lg transition"
          >
            Reservar ahora
          </a> */}

          <a
            href="/catalogo"
            className="px-6 py-3 rounded-lg font-medium border border-white/70 hover:bg-white/10 transition text-white"
          >
            Ver catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
