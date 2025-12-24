"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Leaf, ChefHat, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Cinta dalam Setiap Hidangan", desc: "Setiap masakan kami dibuat dengan penuh cinta dan dedikasi" },
  { icon: Leaf, title: "Bahan Baku Terbaik", desc: "Kami hanya menggunakan bahan-bahan segar berkualitas tinggi" },
  { icon: ChefHat, title: "Resep Turun-Temurun", desc: "Resep autentik yang dijaga selama 3 generasi" },
  { icon: Users, title: "Kebersamaan", desc: "Makanan adalah cara terbaik untuk mempererat hubungan" },
];

const timeline = [
  { year: "1985", title: "Awal Mula", desc: "Ibu Sari membuka warung kecil di Yogyakarta" },
  { year: "1992", title: "Ekspansi Pertama", desc: "Membuka cabang kedua di Semarang" },
  { year: "2005", title: "Masuk Jakarta", desc: "Membuka cabang pertama di Kemang, Jakarta" },
  { year: "2024", title: "5 Cabang", desc: "Kini hadir di 5 lokasi strategis Jakarta" },
];

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-[#DAA520]/20 text-[#DAA520] text-sm font-medium rounded-full mb-6">Sejak 1985</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6">Cerita Kami</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Perjalanan hampir 40 tahun dalam menyajikan cita rasa autentik Nusantara</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800" alt="Warung Rasa Negeri" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#8B4513] text-white p-6 rounded-xl">
                  <div className="text-3xl font-bold font-heading">39+</div>
                  <div className="text-sm text-white/80">Tahun Pengalaman</div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2C1810] mb-6">Dari Warung Kecil di Yogyakarta</h2>
                <p className="text-[#3D2314]/80 text-lg mb-4">
                  Kisah Rasa Negeri dimulai pada tahun 1985, ketika Ibu Sari Wijaya membuka sebuah warung kecil di pinggir jalan Malioboro, Yogyakarta.
                </p>
                <p className="text-[#3D2314]/80 text-lg mb-4">
                  Dengan modal sederhana dan resep masakan yang diwariskan dari ibunya, ia mulai menyajikan masakan rumahan yang sederhana namun penuh cita rasa.
                </p>
                <p className="text-[#3D2314]/80 text-lg">
                  Kini, hampir empat dekade kemudian, Rasa Negeri telah berkembang menjadi restoran Indonesia premium dengan 5 cabang di Jakarta.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2C1810] mb-4">Filosofi Kami</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#2C1810] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#3D2314]/70">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2C1810] mb-4">Perjalanan Kami</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 mb-8">
                  <div className="flex-shrink-0 w-20">
                    <span className="inline-block px-3 py-1 bg-[#DAA520] text-[#2C1810] text-sm font-bold rounded-full">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#2C1810] mb-1">{item.title}</h3>
                    <p className="text-[#3D2314]/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Penghargaan</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: "2024", award: "Best Indonesian Restaurant", org: "Jakarta Food Awards" },
                { year: "2023", award: "Excellence in Service", org: "TripAdvisor" },
                { year: "2022", award: "Top 10 Restaurants", org: "Indonesia Culinary" },
                { year: "2020", award: "Heritage Restaurant", org: "Ministry of Tourism" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/10 rounded-xl p-6 text-center">
                  <Award className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                  <div className="text-[#DAA520] font-bold mb-2">{item.year}</div>
                  <h3 className="text-white font-bold mb-1">{item.award}</h3>
                  <p className="text-white/60 text-sm">{item.org}</p>
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
