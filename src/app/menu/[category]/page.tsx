"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuCategories, menuItems } from "@/lib/data";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const categoryInfo = menuCategories.find((c) => c.slug === category);
  const items = menuItems[category] || [];

  if (!categoryInfo) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#2C1810] mb-4">Kategori tidak ditemukan</h1>
            <Link href="/menu" className="text-[#8B4513] hover:underline">Kembali ke Menu</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/menu" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5" /> Kembali ke Menu
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">{categoryInfo.name}</h1>
            <p className="text-lg text-white/70">{items.length} pilihan hidangan</p>
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold font-heading text-[#2C1810] mb-2">{item.name}</h3>
                    <p className="text-sm text-[#3D2314]/70 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-[#8B4513]">{item.price}</span>
                      <button className="px-4 py-2 bg-[#8B4513]/10 text-[#8B4513] text-sm font-medium rounded-full hover:bg-[#8B4513] hover:text-white transition-colors">
                        Pesan
                      </button>
                    </div>
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
