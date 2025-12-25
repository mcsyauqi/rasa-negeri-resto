"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, menuItems, formatPrice } from "@/lib/data";

export default function CategoryPage() {
  const { category } = useParams();
  const cat = categories.find((c) => c.id === category);
  const items = menuItems.filter((i) => i.category === category);

  if (!cat) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-[#FDF6E3] pt-16">
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
      <Navbar />
      <main className="min-h-screen bg-[#FDF6E3] pt-16">
        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Link
              href="/menu"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[#FDF6E3]/60 transition-colors hover:text-[#DAA520]"
            >
              <ArrowLeft size={16} />
              Kembali ke Menu
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-5xl">{cat.icon}</span>
              <div>
                <h1 className="text-4xl font-bold text-[#FDF6E3]">{cat.name}</h1>
                <p className="text-[#FDF6E3]/60">{items.length} menu tersedia</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm card-hover"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {item.popular && (
                      <span className="absolute left-3 top-3 rounded-full bg-[#DAA520] px-3 py-1 text-xs font-semibold text-[#2C1810]">
                        Favorit
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 font-bold text-[#2C1810]">{item.name}</h3>
                    <p className="mb-3 text-sm text-[#3D2314]/60">{item.desc}</p>
                    <p className="text-lg font-bold text-[#8B4513]">{formatPrice(item.price)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Categories */}
            <div className="mt-16">
              <h2 className="mb-6 text-xl font-bold text-[#2C1810]">Kategori Lainnya</h2>
              <div className="flex flex-wrap gap-3">
                {categories
                  .filter((c) => c.id !== category)
                  .map((c) => (
                    <Link
                      key={c.id}
                      href={`/menu/${c.id}`}
                      className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-medium transition-colors hover:bg-[#8B4513] hover:text-[#FDF6E3]"
                    >
                      {c.icon} {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
