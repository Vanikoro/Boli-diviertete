import Image from "next/image";

export default function Catalogo() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-center text-4xl font-bold mb-12">
        Catálogo Destacado
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
          <Image
            src="/imagenes/bolirana.jpg"
            alt="Bolirana"
            width={600}
            height={400}
            className="rounded-lg h-56 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Bolirana</h3>
          <p className="text-gray-600 mt-2">
            Ideal para reuniones, fiestas y eventos. Incluye fichas y
            accesorios.
          </p>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Ver detalles
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
          <Image
            src="/imagenes/rana.jpg"
            alt="Juego de Rana"
            width={600}
            height={400}
            className="rounded-lg h-56 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Juego de Rana</h3>
          <p className="text-gray-600 mt-2">
            Juego clásico para exteriores e interiores. Envío a domicilio.
          </p>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Ver detalles
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
          <Image
            src="/imagenes/minitejo.jpg"
            alt="Mini Tejo"
            width={600}
            height={400}
            className="rounded-lg h-56 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-4">Mini Tejo</h3>
          <p className="text-gray-600 mt-2">
            Diversión asegurada. Perfecto para celebraciones familiares.
          </p>
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Ver detalles
          </button>
        </div>
      </div>
    </section>
  );
}
