"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart, Users, Utensils } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Cinta Kuliner",
    description: "Setiap hidangan kami buat dengan penuh cinta dan dedikasi terhadap kuliner Nusantara",
  },
  {
    icon: Award,
    title: "Kualitas Terbaik",
    description: "Bahan-bahan segar pilihan untuk menghasilkan rasa yang autentik dan berkualitas",
  },
  {
    icon: Users,
    title: "Keluarga",
    description: "Resep turun-temurun yang telah menjadi warisan keluarga selama puluhan tahun",
  },
  {
    icon: Utensils,
    title: "Tradisi",
    description: "Melestarikan cita rasa tradisional Indonesia untuk generasi mendatang",
  },
];

const milestones = [
  { year: "2010", event: "Rasa Negeri pertama dibuka di Jakarta Pusat" },
  { year: "2013", event: "Pembukaan cabang kedua di Jakarta Selatan" },
  { year: "2016", event: "Ekspansi ke Bandung dengan konsep baru" },
  { year: "2019", event: "Cabang Surabaya resmi dibuka" },
  { year: "2023", event: "Meluncurkan layanan catering premium" },
];

export default function TentangPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#2C1810] py-16 sm:py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
              alt="Tentang Rasa Negeri"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4 text-4xl font-bold text-[#FDF6E3] sm:text-5xl">
                Tentang Kami
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Perjalanan kami dalam melestarikan cita rasa autentik Nusantara
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative aspect-square overflow-hidden rounded-2xl lg:aspect-[4/5]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80"
                  alt="Sejarah Rasa Negeri"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-3xl font-bold text-[#2C1810] sm:text-4xl">
                  Cerita Kami
                </h2>
                <div className="space-y-4 text-base leading-relaxed text-[#3D2314]/80 sm:text-lg">
                  <p>
                    Rasa Negeri lahir dari kecintaan mendalam terhadap kuliner Indonesia. Bermula dari dapur keluarga di tahun 2010, kami bertekad untuk menghadirkan cita rasa autentik Nusantara kepada masyarakat luas.
                  </p>
                  <p>
                    Dengan resep yang diwariskan turun-temurun dan bahan-bahan pilihan terbaik, setiap hidangan kami adalah perpaduan sempurna antara tradisi dan kualitas.
                  </p>
                  <p>
                    Kini, dengan empat cabang di kota-kota besar Indonesia, kami terus berkomitmen untuk melestarikan warisan kuliner Nusantara sambil memberikan pengalaman makan yang tak terlupakan.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#8B4513] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#FDF6E3] sm:text-4xl">
                Nilai-Nilai Kami
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Prinsip yang kami pegang dalam setiap langkah
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-[#FDF6E3] p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#DAA520]">
                    <value.icon className="h-7 w-7 text-[#2C1810]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#2C1810]">{value.title}</h3>
                  <p className="text-sm text-[#3D2314]/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2C1810] sm:text-4xl">
                Perjalanan Kami
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#3D2314]/70 sm:text-lg">
                Tonggak penting dalam sejarah Rasa Negeri
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DAA520] text-sm font-bold text-[#2C1810]">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="mt-2 h-full w-0.5 bg-[#DAA520]/30" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="text-base text-[#3D2314] sm:text-lg">{milestone.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-[#2C1810] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-[#DAA520] sm:text-5xl">15+</p>
                <p className="mt-2 text-base text-[#FDF6E3]/70">Tahun Pengalaman</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-[#DAA520] sm:text-5xl">50+</p>
                <p className="mt-2 text-base text-[#FDF6E3]/70">Menu Pilihan</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-[#DAA520] sm:text-5xl">4</p>
                <p className="mt-2 text-base text-[#FDF6E3]/70">Cabang</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-[#DAA520] sm:text-5xl">100k+</p>
                <p className="mt-2 text-base text-[#FDF6E3]/70">Pelanggan Puas</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
