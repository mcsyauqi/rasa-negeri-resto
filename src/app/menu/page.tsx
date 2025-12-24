"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuCategories, menuItems } from "@/lib/data";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("hidangan-utama");
  const [searchQuery, setSearchQuery] = useState("");

  const items = menuItems[activeCategory] || [];
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Menu Kami</h1>
            <p className="text-lg text-white/70">Jelajahi ragam hidangan autentik Nusantara</p>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-[#8B4513]/10 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4513]/50" />
                <input
                  type="text"
                  placeholder="Cari menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full lg:w-auto">
                {menuCategories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat.slug
                        ? "bg-[#8B4513] text-white"
                        : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-heading text-[#2C1810] mb-8">
              {menuCategories.find((c) => c.slug === activeCategory)?.name} ({filteredItems.length})
            </h2>
            {filteredItems.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
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
            ) : (
              <p className="text-center text-[#3D2314]/60 py-12">Tidak ada menu yang ditemukan</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
