"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import MenuCard from "@/components/ui/MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Rendang Padang Premium",
    description: "Daging sapi pilihan dimasak 8 jam dengan rempah autentik Minang",
    price: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?q=80&w=500&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Sate Lilit Bali",
    description: "Sate ikan khas Bali dengan bumbu lengkuas dan kelapa parut segar",
    price: "Rp 55.000",
    image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Gudeg Jogja Komplit",
    description: "Gudeg nangka muda dengan areh, krecek, telur, dan ayam kampung",
    price: "Rp 65.000",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500&auto=format&fit=crop",
    badge: "Signature",
  },
  {
    id: 4,
    name: "Bebek Goreng Madura",
    description: "Bebek kampung dimarinasi 24 jam, goreng kering dengan sambal korek",
    price: "Rp 95.000",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Iga Bakar Kalasan",
    description: "Iga sapi bakar dengan bumbu manis khas Kalasan yang legendaris",
    price: "Rp 120.000",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Soto Betawi Susu",
    description: "Soto khas Jakarta dengan kuah santan susu yang creamy dan kaya rempah",
    price: "Rp 55.000",
    image: "https://images.unsplash.com/photo-1547928578-bca3e9c5a0ab?q=80&w=500&auto=format&fit=crop",
  },
];

export default function MenuHighlights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-[#FDF6E3]">
      <Container>
        <SectionTitle
          title="Hidangan Favorit Kami"
          subtitle="Resep warisan keluarga yang telah memikat ribuan lidah"
        />

        {/* Scroll Controls */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors -translate-x-4 hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-colors translate-x-4 hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 px-4 -mx-4"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <MenuCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  badge={item.badge}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <motion.a
            href="/menu"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B4513] text-white font-medium rounded-full hover:bg-[#6B3410] transition-colors shadow-lg shadow-[#8B4513]/30"
          >
            Lihat Semua Menu
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
