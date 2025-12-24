"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryImages } from "@/lib/data";

const filterCategories = [
  { id: "semua", label: "Semua" },
  { id: "makanan", label: "Makanan" },
  { id: "minuman", label: "Minuman" },
  { id: "interior", label: "Interior" },
  { id: "acara", label: "Acara" },
];

export default function GaleriPage() {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeFilter === "semua"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="bg-[#2C1810] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4 text-4xl font-bold text-[#FDF6E3] sm:text-5xl">
                Galeri
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Jelajahi momen-momen indah dan hidangan lezat di Rasa Negeri
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <section className="bg-[#FDF6E3] py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeFilter === cat.id
                      ? "bg-[#8B4513] text-[#FDF6E3]"
                      : "bg-white text-[#3D2314] hover:bg-[#8B4513]/10"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="bg-[#FDF6E3] py-8 pb-16 sm:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-md"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[#2C1810]/0 transition-colors group-hover:bg-[#2C1810]/30" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-[#3D2314]/70">Tidak ada gambar dalam kategori ini</p>
              </div>
            )}
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative h-[80vh] w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
