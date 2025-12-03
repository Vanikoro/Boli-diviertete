import Image from "next/image";
import { mockProducts } from "@/data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = mockProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">Producto no encontrado</h1>
      </div>
    );
  }

  return (
    <section className="py-20 max-w-5xl mx-auto px-4">
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">{product.title}</h1>

      {/* IMAGE */}
      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* DESCRIPTION */}
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
        {product.description}
      </p>

      {/* FEATURES */}
      <ul className="mt-6 list-disc pl-6 text-gray-700 dark:text-gray-300">
        {product.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      {/* PRICE */}
      <p className="text-3xl font-bold mt-8">
        COP {product.price.toLocaleString()}
      </p>

      {/* BUTTON */}
      <button
        className="mt-10 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Reservar ahora
      </button>
    </section>
  );
}
