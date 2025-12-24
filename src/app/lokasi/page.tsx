"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations } from "@/lib/data";

export default function LokasiPage() {
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
                Lokasi Kami
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Kunjungi cabang Rasa Negeri terdekat untuk menikmati hidangan autentik Nusantara
              </p>
            </motion.div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="mb-4 text-xl font-bold text-[#2C1810] sm:text-2xl">
                      {location.name}
                    </h2>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#8B4513]" />
                        <div>
                          <p className="font-medium text-[#2C1810]">Alamat</p>
                          <p className="text-sm text-[#3D2314]/70">{location.address}, {location.city}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="mt-1 h-5 w-5 shrink-0 text-[#8B4513]" />
                        <div>
                          <p className="font-medium text-[#2C1810]">Telepon</p>
                          <p className="text-sm text-[#3D2314]/70">{location.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="mt-1 h-5 w-5 shrink-0 text-[#8B4513]" />
                        <div>
                          <p className="font-medium text-[#2C1810]">Jam Operasional</p>
                          <p className="text-sm text-[#3D2314]/70">{location.hours}</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#8B4513] px-6 text-sm font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
                    >
                      Lihat di Maps
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#8B4513] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-4 text-2xl font-bold text-[#FDF6E3] sm:text-3xl">
              Ada Pertanyaan?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
              Hubungi kami untuk informasi lebih lanjut atau reservasi
            </p>
            <a
              href="/kontak"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#DAA520] px-8 text-base font-semibold text-[#2C1810] transition-colors hover:bg-[#DAA520]/90"
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
