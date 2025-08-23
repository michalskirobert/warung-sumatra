"use client";

import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: Props) {
  return (
    <div className="fade-in bg-white rounded-2xl overflow-hidden shadow-2xl card-hover">
      <div className="relative h-64">
        <Image
          src={image}
          alt={`${title} - ${description}`}
          className="w-full h-full object-cover"
          height={256}
          width={256}
        />
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
