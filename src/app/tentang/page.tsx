"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Users, Utensils } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Cinta Kuliner", desc: "Setiap hidangan dibuat dengan penuh cinta" },
  { icon: Award, title: "Kualitas", desc: "Bahan segar pilihan berkualitas tinggi" },
  { icon: Users, title: "Keluarga", desc: "Resep turun-temurun dari keluarga" },
  { icon: Utensils, title: "Tradisi", desc: "Melestarikan cita rasa tradisional" },
];

const timeline = [
  { year: "2010", event: "Rasa Negeri pertama dibuka di Jakarta" },
  { year: "2013", event: "Ekspansi ke Jakarta Selatan" },
  { year: "2016", event: "Pembukaan cabang Bandung" },
  { year: "2019", event: "Cabang Surabaya dibuka" },
  { year: "2023", event: "Layanan catering premium diluncurkan" },
];

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#FDF6E3] pt-16">
        {/* Hero */}
        <section className="relative h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Tentang"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mx-auto max-w-7xl">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
                Tentang Kami
              </span>
              <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Cerita Kami</h1>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-3xl font-bold text-[#2C1810]">
                  Bermula dari Kecintaan terhadap Kuliner Indonesia
                </h2>
                <div className="space-y-4 text-lg text-[#3D2314]/70">
                  <p>
                    Rasa Negeri lahir dari kecintaan mendalam terhadap kuliner Indonesia. Bermula dari dapur keluarga di tahun 2010, kami bertekad untuk menghadirkan cita rasa autentik Nusantara.
                  </p>
                  <p>
                    Dengan resep yang diwariskan turun-temurun dan bahan-bahan pilihan terbaik, setiap hidangan kami adalah perpaduan sempurna antara tradisi dan kualitas.
                  </p>
                  <p>
                    Kini dengan empat cabang di kota-kota besar Indonesia, kami terus berkomitmen melestarikan warisan kuliner Nusantara.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80"
                    alt="Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-full w-full rounded-3xl bg-[#8B4513]/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="gradient-warm py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#FDF6E3]">Nilai-Nilai Kami</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-[#FDF6E3] p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#DAA520]">
                    <v.icon className="text-[#2C1810]" size={24} />
                  </div>
                  <h3 className="mb-2 font-bold text-[#2C1810]">{v.title}</h3>
                  <p className="text-sm text-[#3D2314]/60">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#2C1810]">Perjalanan Kami</h2>
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B4513] text-sm font-bold text-[#FDF6E3]">
                      {t.year}
                    </div>
                    {i < timeline.length - 1 && <div className="mt-2 h-full w-0.5 bg-[#8B4513]/20" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-lg text-[#3D2314]">{t.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "15+", label: "Tahun Pengalaman" },
                { num: "50+", label: "Menu Pilihan" },
                { num: "4", label: "Cabang" },
                { num: "100k+", label: "Pelanggan Puas" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-bold text-[#DAA520]">{s.num}</p>
                  <p className="mt-1 text-[#FDF6E3]/60">{s.label}</p>
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
