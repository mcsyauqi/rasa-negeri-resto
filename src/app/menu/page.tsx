"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, menuItems, formatPrice } from "@/lib/data";

export default function MenuPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? menuItems
    : menuItems.filter((i) => i.category === active);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDF6E3] pt-16">
        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
              Pilihan Lengkap
            </span>
            <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Menu Kami</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            {/* Filter Tabs */}
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActive("all")}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  active === "all"
                    ? "bg-[#2C1810] text-[#FDF6E3]"
                    : "bg-white text-[#3D2314] hover:bg-[#2C1810]/10"
                }`}
              >
                Semua
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                    active === cat.id
                      ? "bg-[#2C1810] text-[#FDF6E3]"
                      : "bg-white text-[#3D2314] hover:bg-[#2C1810]/10"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
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
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="font-bold text-[#2C1810]">{item.name}</h3>
                    </div>
                    <p className="mb-3 text-sm text-[#3D2314]/60">{item.desc}</p>
                    <p className="text-lg font-bold text-[#8B4513]">{formatPrice(item.price)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Category Links */}
            <div className="mt-16">
              <h2 className="mb-6 text-center text-2xl font-bold text-[#2C1810]">
                Jelajahi Kategori
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/menu/${cat.id}`}
                    className="flex items-center justify-center gap-3 rounded-xl bg-white p-5 text-center shadow-sm transition-all hover:bg-[#8B4513] hover:text-[#FDF6E3]"
                  >
                    <span className="text-2xl">{cat.icon}</span>
                    <span className="font-medium">{cat.name}</span>
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
