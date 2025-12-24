"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star, MapPin, Utensils, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories, getPopularItems, locations, testimonials, formatPrice } from "@/lib/data";

export default function Home() {
  const popularItems = getPopularItems();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#2C1810]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
              alt="Rasa Negeri Restaurant"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/50 via-transparent to-[#2C1810]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-4xl font-bold text-[#FDF6E3] sm:text-5xl md:text-6xl lg:text-7xl">
                Rasa Negeri
              </h1>
              <p className="mb-8 text-xl text-[#DAA520] sm:text-2xl md:text-3xl">
                Cita Rasa Autentik Nusantara
              </p>
              <p className="mx-auto mb-10 max-w-2xl text-base text-[#FDF6E3]/80 sm:text-lg">
                Nikmati hidangan tradisional Indonesia dengan bahan berkualitas dan resep turun-temurun yang telah menjadi warisan keluarga.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/menu"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#DAA520] px-8 text-base font-semibold text-[#2C1810] transition-all hover:bg-[#DAA520]/90"
                >
                  Lihat Menu
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/reservasi"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#FDF6E3] px-8 text-base font-semibold text-[#FDF6E3] transition-all hover:bg-[#FDF6E3] hover:text-[#2C1810]"
                >
                  Reservasi
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Menu Section */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2C1810] sm:text-4xl">
                Menu Favorit
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#3D2314]/70 sm:text-lg">
                Hidangan terpopuler yang menjadi pilihan favorit pelanggan kami
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {popularItems.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {item.isPopular && (
                      <span className="absolute left-3 top-3 rounded-full bg-[#DAA520] px-3 py-1 text-xs font-semibold text-[#2C1810]">
                        Favorit
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 text-lg font-semibold text-[#2C1810]">{item.name}</h3>
                    <p className="mb-3 line-clamp-2 text-sm text-[#3D2314]/70">{item.description}</p>
                    <p className="text-lg font-bold text-[#8B4513]">{formatPrice(item.price)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/menu"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#8B4513] px-8 text-base font-semibold text-[#8B4513] transition-all hover:bg-[#8B4513] hover:text-[#FDF6E3]"
              >
                Lihat Semua Menu
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-[#2C1810] py-16 sm:py-20 lg:py-24">
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
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Tentang Rasa Negeri"
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
                <h2 className="mb-6 text-3xl font-bold text-[#FDF6E3] sm:text-4xl">
                  Tentang Rasa Negeri
                </h2>
                <p className="mb-6 text-base leading-relaxed text-[#FDF6E3]/80 sm:text-lg">
                  Sejak tahun 2010, Rasa Negeri hadir untuk melestarikan cita rasa autentik Nusantara. Kami percaya bahwa setiap hidangan memiliki cerita dan warisan budaya yang patut dijaga.
                </p>
                <p className="mb-8 text-base leading-relaxed text-[#FDF6E3]/80 sm:text-lg">
                  Dengan bahan-bahan segar pilihan dan resep turun-temurun, kami menghadirkan pengalaman kuliner yang mengingatkan Anda pada masakan rumah.
                </p>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-[#DAA520] sm:text-4xl">15+</p>
                    <p className="mt-1 text-sm text-[#FDF6E3]/70">Tahun Pengalaman</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#DAA520] sm:text-4xl">50+</p>
                    <p className="mt-1 text-sm text-[#FDF6E3]/70">Menu Pilihan</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#DAA520] sm:text-4xl">4</p>
                    <p className="mt-1 text-sm text-[#FDF6E3]/70">Cabang</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/tentang"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#DAA520] px-8 text-base font-semibold text-[#2C1810] transition-all hover:bg-[#DAA520]/90"
                  >
                    Selengkapnya
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="batik-pattern bg-[#FDF6E3] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2C1810] sm:text-4xl">
                Kategori Menu
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#3D2314]/70 sm:text-lg">
                Jelajahi berbagai kategori hidangan khas Indonesia
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/menu/${category.id}`}
                    className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-lg font-semibold text-[#FDF6E3]">{category.name}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#8B4513] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#FDF6E3] sm:text-4xl">
                Apa Kata Mereka
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Testimoni dari pelanggan setia kami
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl bg-[#FDF6E3] p-6"
                >
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#DAA520] text-[#DAA520]" />
                    ))}
                  </div>
                  <p className="mb-4 text-base text-[#3D2314]">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-[#2C1810]">{testimonial.name}</p>
                    <p className="text-sm text-[#3D2314]/70">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2C1810] sm:text-4xl">
                Lokasi Kami
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#3D2314]/70 sm:text-lg">
                Kunjungi cabang Rasa Negeri terdekat
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-semibold text-[#2C1810]">{location.city}</h3>
                    <p className="mb-2 flex items-start gap-2 text-sm text-[#3D2314]/70">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8B4513]" />
                      {location.address}
                    </p>
                    <p className="text-sm text-[#3D2314]/70">{location.phone}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/lokasi"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#8B4513] px-8 text-base font-semibold text-[#8B4513] transition-all hover:bg-[#8B4513] hover:text-[#FDF6E3]"
              >
                Lihat Semua Lokasi
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-[#2C1810] py-16 sm:py-20 lg:py-24">
          <div className="batik-pattern absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Catering CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[#8B4513] p-8"
              >
                <Users className="mb-4 h-12 w-12 text-[#DAA520]" />
                <h3 className="mb-3 text-2xl font-bold text-[#FDF6E3]">
                  Layanan Catering
                </h3>
                <p className="mb-6 text-base text-[#FDF6E3]/80">
                  Percayakan acara spesial Anda kepada kami. Tersedia berbagai paket catering untuk berbagai kebutuhan.
                </p>
                <Link
                  href="/catering"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#DAA520] px-8 text-base font-semibold text-[#2C1810] transition-all hover:bg-[#DAA520]/90"
                >
                  Lihat Paket
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </motion.div>

              {/* Reservation CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-[#D2691E] p-8"
              >
                <Utensils className="mb-4 h-12 w-12 text-[#FDF6E3]" />
                <h3 className="mb-3 text-2xl font-bold text-[#FDF6E3]">
                  Reservasi Meja
                </h3>
                <p className="mb-6 text-base text-[#FDF6E3]/80">
                  Pastikan tempat Anda dengan melakukan reservasi. Nikmati pengalaman makan yang nyaman.
                </p>
                <Link
                  href="/reservasi"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FDF6E3] px-8 text-base font-semibold text-[#2C1810] transition-all hover:bg-[#FDF6E3]/90"
                >
                  Reservasi Sekarang
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
