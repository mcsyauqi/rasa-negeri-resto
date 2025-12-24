"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { UtensilsCrossed, Salad, Flame, GlassWater, Cake, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const categories = [
  {
    name: "Hidangan Utama",
    icon: UtensilsCrossed,
    count: "45+ pilihan",
    href: "/menu/hidangan-utama",
    color: "bg-[#8B4513]",
  },
  {
    name: "Appetizer & Snack",
    icon: Salad,
    count: "25+ pilihan",
    href: "/menu/appetizer",
    color: "bg-[#D2691E]",
  },
  {
    name: "Sambal Nusantara",
    icon: Flame,
    count: "15 varian sambal",
    href: "/menu/sambal",
    color: "bg-[#C41E3A]",
  },
  {
    name: "Minuman Tradisional",
    icon: GlassWater,
    count: "20+ minuman",
    href: "/menu/minuman",
    color: "bg-[#2E8B57]",
  },
  {
    name: "Dessert Lokal",
    icon: Cake,
    count: "15+ dessert",
    href: "/menu/dessert",
    color: "bg-[#DAA520]",
  },
  {
    name: "Paket Keluarga",
    icon: Users,
    count: "Hemat 20%",
    href: "/menu/paket",
    color: "bg-[#6B4423]",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-[#FDF6E3] batik-pattern">
      <Container>
        <SectionTitle
          title="Jelajahi Menu Kami"
          subtitle="Ragam pilihan hidangan Nusantara untuk setiap selera"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Background Decoration */}
                  <div
                    className={`absolute -right-8 -top-8 w-24 h-24 rounded-full ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${category.color} text-white mb-4`}
                  >
                    <category.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold font-[var(--font-heading)] text-[#2C1810] mb-1 group-hover:text-[#8B4513] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#3D2314]/60">{category.count}</p>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-[#8B4513]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-4 h-4 text-[#8B4513]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
