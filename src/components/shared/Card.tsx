"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  showBadge?: boolean;
};

export default function Card({
  title,
  description,
  image,
  showBadge = false,
}: Props) {
  return (
    <div className="fade-in bg-white rounded-2xl shadow-2xl card-hover relative">
      <div className="relative h-64">
        <Image
          src={image}
          alt={`${title} - ${description}`}
          className="w-full h-full object-cover"
          height={256}
          width={256}
        />
        {showBadge && (
          <div className="absolute -left-0 top-1 w-10 h-10 -translate-y-1/2 -translate-x-1/4 z-10">
            <div className="w-full h-full bg-[url('/utils/badge-1.png')] bg-contain bg-no-repeat filter drop-shadow-lg" />
          </div>
        )}
        <div className="image-overlay absolute inset-0" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold text-stone-800 mb-4">
          {title}
        </h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
