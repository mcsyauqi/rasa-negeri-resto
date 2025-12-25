"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { locations } from "@/lib/data";

export default function LokasiPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDF6E3] pt-16">
        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
              Temui Kami
            </span>
            <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Lokasi Kami</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-3xl bg-white shadow-lg"
                >
                  <div className="gradient-warm p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FDF6E3]">
                        <MapPin className="text-[#8B4513]" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#FDF6E3]">{loc.city}</h2>
                        <p className="text-[#FDF6E3]/70">Rasa Negeri</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 shrink-0 text-[#8B4513]" size={20} />
                        <div>
                          <p className="font-medium text-[#2C1810]">Alamat</p>
                          <p className="text-[#3D2314]/70">{loc.address}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="mt-1 shrink-0 text-[#8B4513]" size={20} />
                        <div>
                          <p className="font-medium text-[#2C1810]">Telepon</p>
                          <p className="text-[#3D2314]/70">{loc.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="mt-1 shrink-0 text-[#8B4513]" size={20} />
                        <div>
                          <p className="font-medium text-[#2C1810]">Jam Buka</p>
                          <p className="text-[#3D2314]/70">{loc.hours}</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8B4513] px-6 py-3 font-medium text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
                    >
                      Lihat di Maps
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-bold text-[#FDF6E3]">Ada Pertanyaan?</h2>
            <p className="mb-6 text-[#FDF6E3]/70">
              Hubungi kami untuk informasi lebih lanjut
            </p>
            <a
              href="/kontak"
              className="inline-flex rounded-full bg-[#DAA520] px-8 py-4 font-semibold text-[#2C1810] transition-colors hover:bg-[#FDF6E3]"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
