"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Flame } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { menuCategories, menuItems } from "@/lib/data";

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const categoryInfo = menuCategories.find((c) => c.slug === category);
  const items = menuItems[category as keyof typeof menuItems] || [];

  if (!categoryInfo) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#2C1810] mb-4">Kategori tidak ditemukan</h1>
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
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-[#2C1810] overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <Container className="relative z-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Menu
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-4"
            >
              {categoryInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70"
            >
              {items.length} pilihan hidangan
            </motion.p>
          </Container>
        </section>

        {/* Menu Grid */}
        <section className="py-16 bg-[#FDF6E3]">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {"spicy" in item && item.spicy && item.spicy > 0 && (
                      <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        {"🌶️".repeat(item.spicy)}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold font-[var(--font-heading)] text-[#2C1810] mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#3D2314]/70 mb-4 line-clamp-2">
                      {item.description}
                    </p>
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
          </Container>
        </section>

        {/* Other Categories */}
        <section className="py-16 bg-white">
          <Container>
            <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-8 text-center">
              Kategori Lainnya
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {menuCategories
                .filter((c) => c.slug !== category)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/menu/${cat.slug}`}
                    className="px-6 py-3 bg-[#8B4513]/10 text-[#8B4513] font-medium rounded-full hover:bg-[#8B4513] hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
