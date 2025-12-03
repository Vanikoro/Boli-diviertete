import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  features: string[];
  onClick: () => void; // <-- añadimos esta prop
};

export default function ProductCard({
  id,
  title,
  description,
  image,
  price,
  features,
}: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 hover:shadow-xl transition flex flex-col">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold mt-4">{title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>

      <ul className="mt-3 text-sm text-gray-500 dark:text-gray-400 list-disc pl-5">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <div className="mt-auto pt-4">
        <p className="text-lg font-bold">
          Desde COP {price.toLocaleString()}
        </p>

        <Link
  href={`/producto/${id}`}
  className="mt-3 w-full block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
>
  Ver detalles
</Link>
      </div>
    </div>
  );
}
