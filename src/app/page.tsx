"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { menuItems, locations, testimonials, formatPrice } from "@/lib/data";

const popularItems = menuItems.filter((i) => i.popular);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero - Split Screen */}
        <section className="relative min-h-screen pt-16">
          <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
            <div className="flex flex-col justify-center bg-[#FDF6E3] px-6 py-20 lg:px-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="mb-4 inline-block rounded-full bg-[#DAA520]/20 px-4 py-2 text-sm font-medium text-[#8B4513]">
                  🍛 Restoran Indonesia Terbaik
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-tight text-[#2C1810] md:text-5xl lg:text-6xl">
                  Rasa Negeri
                </h1>
                <p className="mb-2 text-2xl font-medium text-[#8B4513] md:text-3xl">
                  Cita Rasa Autentik Nusantara
                </p>
                <p className="mb-8 max-w-md text-lg text-[#3D2314]/70">
                  Nikmati hidangan tradisional Indonesia dengan bahan berkualitas dan resep turun-temurun yang telah menjadi warisan keluarga.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-2 rounded-full bg-[#2C1810] px-8 py-4 font-semibold text-[#FDF6E3] transition-all hover:bg-[#8B4513]"
                  >
                    Lihat Menu
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/reservasi"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#2C1810] px-8 py-4 font-semibold text-[#2C1810] transition-all hover:bg-[#2C1810] hover:text-[#FDF6E3]"
                  >
                    Reservasi
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
                alt="Rasa Negeri Restaurant"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FDF6E3] via-transparent to-transparent" />
            </div>
          </div>

          <div className="absolute bottom-8 left-6 right-6 lg:left-16 lg:right-auto">
            <div className="flex flex-wrap gap-8 rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm lg:gap-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#8B4513]">15+</p>
                <p className="text-sm text-[#3D2314]/70">Tahun</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#8B4513]">50+</p>
                <p className="text-sm text-[#3D2314]/70">Menu</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#8B4513]">4</p>
                <p className="text-sm text-[#3D2314]/70">Cabang</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#8B4513]">100k+</p>
                <p className="text-sm text-[#3D2314]/70">Pelanggan</p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Menu - Horizontal Scroll */}
        <section className="bg-[#2C1810] py-20">
          <div className="mb-10 px-6 lg:px-16">
            <div className="flex items-end justify-between">
              <div>
                <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
                  Pilihan Terbaik
                </span>
                <h2 className="text-3xl font-bold text-[#FDF6E3] md:text-4xl">
                  Menu Favorit
                </h2>
              </div>
              <Link
                href="/menu"
                className="hidden items-center gap-2 text-[#DAA520] transition-colors hover:text-[#FDF6E3] sm:flex"
              >
                Lihat Semua
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="scroll-container">
            <div className="flex gap-6 px-6 pb-4 lg:px-16">
              {popularItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="w-72 shrink-0 overflow-hidden rounded-2xl bg-[#FDF6E3] card-hover"
                >
                  <div className="relative aspect-square">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <span className="absolute right-3 top-3 rounded-full bg-[#DAA520] px-3 py-1 text-xs font-semibold text-[#2C1810]">
                      Favorit
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-1 text-lg font-bold text-[#2C1810]">{item.name}</h3>
                    <p className="mb-3 text-sm text-[#3D2314]/70">{item.desc}</p>
                    <p className="text-xl font-bold text-[#8B4513]">{formatPrice(item.price)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About - Asymmetric */}
        <section className="bg-[#FDF6E3] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-16">
            <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-2">
                <div className="relative">
                  <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-3xl">
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                      alt="About"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl bg-[#DAA520]/20" />
                </div>
              </div>

              <div className="lg:col-span-3">
                <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-[#8B4513]">
                  Tentang Kami
                </span>
                <h2 className="mb-6 text-3xl font-bold text-[#2C1810] md:text-4xl">
                  Melestarikan Cita Rasa Tradisional Indonesia
                </h2>
                <div className="mb-8 space-y-4 text-lg text-[#3D2314]/70">
                  <p>
                    Sejak 2010, Rasa Negeri hadir untuk menghadirkan pengalaman kuliner Indonesia yang autentik. Setiap hidangan kami dibuat dengan penuh cinta menggunakan resep turun-temurun.
                  </p>
                  <p>
                    Kami percaya bahwa makanan bukan sekadar nutrisi, tapi juga warisan budaya yang harus dijaga dan dilestarikan untuk generasi mendatang.
                  </p>
                </div>
                <Link
                  href="/tentang"
                  className="inline-flex items-center gap-2 rounded-full bg-[#8B4513] px-8 py-4 font-semibold text-[#FDF6E3] transition-all hover:bg-[#2C1810]"
                >
                  Selengkapnya
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="gradient-warm py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-16">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#FDF6E3]/70">
                Testimoni
              </span>
              <h2 className="text-3xl font-bold text-[#FDF6E3] md:text-4xl">
                Apa Kata Mereka
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-[#FDF6E3] p-6"
                >
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={18} className="fill-[#DAA520] text-[#DAA520]" />
                    ))}
                  </div>
                  <p className="mb-4 text-[#3D2314]">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-[#2C1810]">{t.name}</p>
                    <p className="text-sm text-[#3D2314]/60">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="bg-[#FDF6E3] py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-16">
            <div className="mb-12 text-center">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#8B4513]">
                Lokasi
              </span>
              <h2 className="text-3xl font-bold text-[#2C1810] md:text-4xl">
                Cabang Kami
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border-2 border-[#2C1810]/10 bg-white p-6 card-hover"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#8B4513]">
                    <MapPin className="text-[#FDF6E3]" size={20} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#2C1810]">{loc.city}</h3>
                  <p className="mb-1 text-sm text-[#3D2314]/70">{loc.address}</p>
                  <div className="flex items-center gap-2 text-sm text-[#8B4513]">
                    <Clock size={14} />
                    <span>{loc.hours}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/lokasi"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#2C1810] px-8 py-4 font-semibold text-[#2C1810] transition-all hover:bg-[#2C1810] hover:text-[#FDF6E3]"
              >
                Lihat Semua Lokasi
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-dark py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#FDF6E3] md:text-4xl">
              Siap Menikmati Hidangan Kami?
            </h2>
            <p className="mb-8 text-lg text-[#FDF6E3]/70">
              Reservasi sekarang atau hubungi kami untuk layanan catering
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/reservasi"
                className="inline-flex items-center gap-2 rounded-full bg-[#DAA520] px-8 py-4 font-semibold text-[#2C1810] transition-all hover:bg-[#FDF6E3]"
              >
                Reservasi Sekarang
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/catering"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FDF6E3] px-8 py-4 font-semibold text-[#FDF6E3] transition-all hover:bg-[#FDF6E3] hover:text-[#2C1810]"
              >
                Layanan Catering
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
