"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, menuItems, formatPrice } from "@/lib/data";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="bg-[#2C1810] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold text-[#FDF6E3] sm:text-5xl">
              Menu Kami
            </h1>
            <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
              Jelajahi berbagai hidangan autentik Nusantara yang kami sajikan dengan penuh cinta
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-[#FDF6E3] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-[#2C1810] sm:text-3xl">
              Kategori
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={`/menu/${category.id}`}
                    className="group block overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-base font-semibold text-[#FDF6E3]">{category.name}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Menu Items */}
        <section className="bg-[#FDF6E3] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-[#2C1810] sm:text-3xl">
              Semua Menu
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute left-3 top-3 flex gap-2">
                      {item.isPopular && (
                        <span className="rounded-full bg-[#DAA520] px-3 py-1 text-xs font-semibold text-[#2C1810]">
                          Favorit
                        </span>
                      )}
                      {item.isSpicy && (
                        <span className="flex items-center gap-1 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                          <Flame className="h-3 w-3" />
                          Pedas
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-[#2C1810]">{item.name}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-[#3D2314]/70">{item.description}</p>
                    <p className="text-lg font-bold text-[#8B4513]">{formatPrice(item.price)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
