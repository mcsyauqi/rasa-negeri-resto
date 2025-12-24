"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations } from "@/lib/data";

export default function LokasiPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Lokasi Kami</h1>
            <p className="text-lg text-white/70">Temukan cabang Rasa Negeri terdekat dari lokasi Anda</p>
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative h-48">
                    <Image src={location.image} alt={location.name} fill className="object-cover" />
                    {location.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                        {location.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-[#2C1810] mb-4">{location.name}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#3D2314]/70">{location.address}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#3D2314]/70">{location.capacity}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#3D2314]/70">{location.hours}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[#3D2314]/70">{location.phone}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Link href="/reservasi" className="flex-1 text-center px-4 py-2 bg-[#8B4513] text-white text-sm font-medium rounded-full hover:bg-[#6B3410] transition-colors">
                        Reservasi
                      </Link>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 border-2 border-[#8B4513] text-[#8B4513] text-sm font-medium rounded-full hover:bg-[#8B4513] hover:text-white transition-colors"
                      >
                        Petunjuk Arah
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
