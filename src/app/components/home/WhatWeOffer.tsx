import { 
  PuzzlePieceIcon, 
  TruckIcon, 
  MapPinIcon, 
  SparklesIcon 
} from "@heroicons/react/24/outline";

export default function WhatWeOffer() {
  const services = [
    {
      title: "Alquiler de Boliranas",
      description: "Boliranas profesionales y familiares para eventos, negocios y reuniones.",
      icon: SparklesIcon,
    },
    {
      title: "Alquiler de Rana",
      description: "Juego tradicional colombiano para divertirse en casa o en tu negocio.",
      icon: PuzzlePieceIcon,
    },
    {
      title: "Mini Tejo y Juegos de Bar",
      description: "Diversión asegurada con mini tejo y otros juegos clásicos.",
      icon: PuzzlePieceIcon,
    },
    {
      title: "Servicio a Domicilio",
      description: "Entregamos y recogemos en Bogotá y municipios cercanos.",
      icon: TruckIcon,
    },
    {
      title: "Punto Físico en Kennedy",
      description: "También puedes visitarnos en nuestro bar con juegos disponibles.",
      icon: MapPinIcon,
    },
  ];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          ¿Qué ofrecemos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 
                           border border-gray-200 dark:border-gray-700 
                           hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <Icon className="w-12 h-12 text-primary-500" />
                </div>

                <h3 className="text-xl font-semibold text-center mb-2">
                  {service.title}
                </h3>

                <p className="text-center text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
