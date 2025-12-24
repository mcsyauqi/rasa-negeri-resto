"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryImages } from "@/lib/data";

const categories = [
  { id: "all", label: "Semua" },
  { id: "interior", label: "Interior" },
  { id: "eksterior", label: "Eksterior" },
  { id: "makanan", label: "Makanan" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory);

  const handleNav = (dir: "prev" | "next") => {
    if (selectedImage === null) return;
    const idx = filteredImages.findIndex((img) => img.id === selectedImage);
    const newIdx = dir === "prev" ? (idx > 0 ? idx - 1 : filteredImages.length - 1) : (idx < filteredImages.length - 1 ? idx + 1 : 0);
    setSelectedImage(filteredImages[newIdx].id);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Galeri</h1>
            <p className="text-lg text-white/70">Jelajahi suasana dan hidangan Rasa Negeri</p>
          </div>
        </section>

        <section className="py-8 bg-white border-b border-[#8B4513]/10 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id ? "bg-[#8B4513] text-white" : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"}`}>
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(image.id)}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium">{image.alt}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
                <X className="w-6 h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); handleNav("prev"); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={(e) => { e.stopPropagation(); handleNav("next"); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20">
                <ChevronRight className="w-6 h-6" />
              </button>
              <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[80vh] relative w-full aspect-video">
                <Image src={galleryImages.find((img) => img.id === selectedImage)?.src || ""} alt="" fill className="object-contain" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
