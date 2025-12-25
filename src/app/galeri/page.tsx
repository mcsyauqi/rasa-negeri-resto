"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryImages } from "@/lib/data";

export default function GaleriPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDF6E3] pt-16">
        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
              Momen Indah
            </span>
            <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Galeri</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="mb-4 cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => setSelected(img.src)}
                >
                  <div className="group relative aspect-square overflow-hidden sm:aspect-auto">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#2C1810]/0 transition-colors group-hover:bg-[#2C1810]/30" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <X size={24} />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[80vh] max-w-4xl overflow-hidden rounded-2xl"
              >
                <Image
                  src={selected}
                  alt="Gallery"
                  width={1200}
                  height={800}
                  className="h-auto max-h-[80vh] w-auto object-contain"
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
