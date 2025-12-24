"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, Salad, Flame, GlassWater, Cake, Users, Search } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { menuCategories, menuItems } from "@/lib/data";
import Link from "next/link";

const categoryIcons: Record<string, React.ElementType> = {
  "hidangan-utama": UtensilsCrossed,
  "appetizer": Salad,
  "sambal": Flame,
  "minuman": GlassWater,
  "dessert": Cake,
  "paket": Users,
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("hidangan-utama");
  const [searchQuery, setSearchQuery] = useState("");

  const items = menuItems[activeCategory as keyof typeof menuItems] || [];
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-[#2C1810] overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <Container className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-4"
            >
              Menu Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Jelajahi ragam hidangan autentik Nusantara yang kami sajikan dengan cinta
            </motion.p>
          </Container>
        </section>

        {/* Search & Filter */}
        <section className="py-8 bg-white border-b border-[#8B4513]/10 sticky top-20 z-40">
          <Container>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B4513]/50" />
                <input
                  type="text"
                  placeholder="Cari menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar w-full lg:w-auto">
                {menuCategories.map((category) => {
                  const Icon = categoryIcons[category.slug];
                  return (
                    <button
                      key={category.slug}
                      onClick={() => setActiveCategory(category.slug)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeCategory === category.slug
                          ? "bg-[#8B4513] text-white"
                          : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Menu Grid */}
        <section className="py-16 bg-[#FDF6E3]">
          <Container>
            <SectionTitle
              title={menuCategories.find(c => c.slug === activeCategory)?.name || ""}
              subtitle={`${filteredItems.length} pilihan hidangan`}
              align="left"
            />

            {filteredItems.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-[#3D2314]/60 text-lg">Tidak ada menu yang ditemukan</p>
              </div>
            )}
          </Container>
        </section>

        {/* Category Links */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Kategori Menu Lainnya"
              subtitle="Jelajahi menu kami berdasarkan kategori"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {menuCategories.map((category, index) => {
                const Icon = categoryIcons[category.slug];
                return (
                  <motion.div
                    key={category.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/menu/${category.slug}`}
                      className="block p-6 bg-[#FDF6E3] rounded-xl text-center hover:bg-[#8B4513]/10 transition-colors group"
                    >
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#8B4513]/10 flex items-center justify-center group-hover:bg-[#8B4513] transition-colors">
                        <Icon className="w-6 h-6 text-[#8B4513] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-[#2C1810] text-sm">{category.name}</h3>
                      <p className="text-xs text-[#3D2314]/60">{category.count}+ menu</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
