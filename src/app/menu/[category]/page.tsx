"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Flame } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCategoryById, getMenuByCategory, formatPrice, categories } from "@/lib/data";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const category = getCategoryById(categoryId);
  const items = getMenuByCategory(categoryId);

  if (!category) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen items-center justify-center pt-16 sm:pt-20">
          <div className="text-center">
            <h1 className="mb-4 text-2xl font-bold text-[#2C1810]">Kategori tidak ditemukan</h1>
            <Link href="/menu" className="text-[#8B4513] hover:underline">
              Kembali ke Menu
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#2C1810] py-16 sm:py-20">
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <Link
              href="/menu"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[#FDF6E3]/70 transition-colors hover:text-[#DAA520]"
            >
              <ChevronLeft className="h-4 w-4" />
              Kembali ke Menu
            </Link>
            <h1 className="mb-4 text-4xl font-bold text-[#FDF6E3] sm:text-5xl">
              {category.name}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
              {category.description}
            </p>
          </div>
        </section>

        {/* Menu Items */}
        <section className="bg-[#FDF6E3] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
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

            {items.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-[#3D2314]/70">Belum ada menu dalam kategori ini</p>
              </div>
            )}
          </div>
        </section>

        {/* Other Categories */}
        <section className="bg-[#FDF6E3] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-[#2C1810]">
              Kategori Lainnya
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {categories
                .filter((cat) => cat.id !== categoryId)
                .map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/menu/${cat.id}`}
                    className="group block overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-base font-semibold text-[#FDF6E3]">{cat.name}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
