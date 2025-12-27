import Image from 'next/image';
import Link from 'next/link';

interface CardProductProps {
  image: string;
  title: string;
  description: string;
}

export default function CardProduct({ image, title, description }: CardProductProps) {
  return (
    <div className="group relative h-96 p-6 rounded-2xl transition-all duration-300 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden hover:-translate-y-2.5 hover:shadow-xl">
      <div className="absolute flex gap-2 top-4 left-4">
        <Link
          href="#"
          className="px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-sm hover:bg-gray-800 transition-colors"
        >
          preview
        </Link>
        <Link
          href="#"
          className="px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-sm hover:bg-gray-800 transition-colors"
        >
          view details
        </Link>
      </div>
      <Image src={image} alt={title} width={320} height={320} className="w-full h-52 mt-10 object-contain" />
      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="mb-2 text-2xl font-bold line-clamp-1 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
