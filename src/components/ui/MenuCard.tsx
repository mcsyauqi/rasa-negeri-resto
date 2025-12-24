"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  className?: string;
}

export default function MenuCard({
  name,
  description,
  price,
  image,
  badge,
  className,
}: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 min-w-[280px] max-w-[300px]",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {badge && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold font-[var(--font-heading)] text-[#2C1810] mb-2">
          {name}
        </h3>
        <p className="text-sm text-[#3D2314]/70 mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-[#8B4513]">{price}</span>
          <button className="px-4 py-2 bg-[#8B4513]/10 text-[#8B4513] text-sm font-medium rounded-full hover:bg-[#8B4513] hover:text-white transition-colors">
            Pesan
          </button>
        </div>
      </div>
    </motion.div>
  );
}
