"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, ChevronDown, ChevronRight, MapPin, Clock, Users, Star, Quote, Check, ArrowRight, UtensilsCrossed, Salad, Flame, GlassWater, Cake, CalendarDays } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { menuItems, locations } from "@/lib/data";

export default function Home() {
  const featuredItems = menuItems["hidangan-utama"].slice(0, 6);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1920"
            alt="Indonesian Food"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/80 via-[#2C1810]/60 to-[#2C1810]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#DAA520]/20 rounded-full border border-[#DAA520]/30 mb-8"
          >
            <Award className="w-5 h-5 text-[#DAA520]" />
            <span className="text-sm text-[#DAA520] font-medium">Best Indonesian Restaurant 2024 - Jakarta Food Awards</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-6"
          >
            Nikmati Kelezatan<br />
            <span className="text-[#DAA520]">Autentik Masakan Nusantara</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Perjalanan rasa dari Sabang sampai Merauke, disajikan dengan cinta dan resep turun-temurun yang telah dijaga lebih dari 3 generasi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/menu" className="px-8 py-4 bg-[#DAA520] text-[#2C1810] font-semibold rounded-full hover:bg-[#C49520] transition-colors">
              Lihat Menu
            </Link>
            <Link href="/reservasi" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#2C1810] transition-colors">
              Reservasi Meja
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-[#FDF6E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#2C1810] mb-4">
              Hidangan Favorit Kami
            </h2>
            <p className="text-lg text-[#3D2314]/70 max-w-2xl mx-auto">
              Resep warisan keluarga yang telah memikat ribuan lidah
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                  {item.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold font-heading text-[#2C1810] mb-2">{item.name}</h3>
                  <p className="text-sm text-[#3D2314]/70 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#8B4513]">{item.price}</span>
                    <button className="px-4 py-2 bg-[#8B4513]/10 text-[#8B4513] text-sm font-medium rounded-full hover:bg-[#8B4513] hover:text-white transition-colors">
                      Pesan
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu" className="inline-flex items-center gap-2 px-8 py-3 bg-[#8B4513] text-white font-medium rounded-full hover:bg-[#6B3410] transition-colors">
              Lihat Semua Menu <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
                  alt="Suasana Restoran"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8B4513]/10 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#8B4513]/10 text-[#8B4513] text-sm font-medium rounded-full mb-6">
                Sejak 1985
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#2C1810] mb-6">
                Warisan Cita Rasa Indonesia
              </h2>
              <p className="text-[#3D2314]/80 text-lg mb-4">
                Rasa Negeri lahir dari dapur Ibu Sari di tahun 1985, bermula dari warung kecil di Yogyakarta yang menyajikan masakan rumahan dengan resep keluarga.
              </p>
              <p className="text-[#3D2314]/80 text-lg mb-8">
                Kini, setelah hampir 40 tahun, kami telah berkembang menjadi restoran Indonesia premium dengan 5 cabang di Jakarta.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { value: "39", label: "Tahun Pengalaman" },
                  { value: "5", label: "Lokasi" },
                  { value: "500K+", label: "Pelanggan" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-[#8B4513] font-heading">{stat.value}</div>
                    <div className="text-sm text-[#3D2314]/60">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/tentang" className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B4513] text-white font-medium rounded-full hover:bg-[#6B3410] transition-colors">
                Cerita Lengkap Kami <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-[#FDF6E3] batik-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#2C1810] mb-4">
              Jelajahi Menu Kami
            </h2>
            <p className="text-lg text-[#3D2314]/70">Ragam pilihan hidangan Nusantara untuk setiap selera</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Hidangan Utama", icon: UtensilsCrossed, count: "45+", href: "/menu/hidangan-utama", color: "bg-[#8B4513]" },
              { name: "Appetizer & Snack", icon: Salad, count: "25+", href: "/menu/appetizer", color: "bg-[#D2691E]" },
              { name: "Sambal Nusantara", icon: Flame, count: "15", href: "/menu/sambal", color: "bg-[#C41E3A]" },
              { name: "Minuman Tradisional", icon: GlassWater, count: "20+", href: "/menu/minuman", color: "bg-[#2E8B57]" },
              { name: "Dessert Lokal", icon: Cake, count: "15+", href: "/menu/dessert", color: "bg-[#DAA520]" },
              { name: "Paket Keluarga", icon: Users, count: "Hemat 20%", href: "/menu/paket", color: "bg-[#6B4423]" },
            ].map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={cat.href} className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${cat.color} text-white mb-4`}>
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-[#2C1810] mb-1 group-hover:text-[#8B4513] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#3D2314]/60">{cat.count} pilihan</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#2C1810] mb-4">
              Temukan Rasa Negeri Terdekat
            </h2>
            <p className="text-lg text-[#3D2314]/70">Kunjungi cabang kami di berbagai lokasi strategis Jakarta</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FDF6E3] rounded-2xl overflow-hidden shadow-lg"
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
                  <div className="space-y-3">
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
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Link href="/reservasi" className="flex-1 text-center px-4 py-2 bg-[#8B4513] text-white text-sm font-medium rounded-full hover:bg-[#6B3410] transition-colors">
                      Reservasi
                    </Link>
                    <Link href="/lokasi" className="flex-1 text-center px-4 py-2 border-2 border-[#8B4513] text-[#8B4513] text-sm font-medium rounded-full hover:bg-[#8B4513] hover:text-white transition-colors">
                      Lihat Peta
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#FDF6E3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#2C1810] mb-4">
              Apa Kata Mereka
            </h2>
            <p className="text-lg text-[#3D2314]/70">Testimoni pelanggan setia Rasa Negeri</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Rendangnya luar biasa! Seperti masakan nenek saya di Padang. Pasti balik lagi.", author: "Budi Santoso", role: "Food Blogger" },
              { quote: "Tempat favorit untuk kumpul keluarga. Suasananya nyaman, makanannya konsisten enak.", author: "Keluarga Wijaya", role: null },
              { quote: "Best soto betawi in town! Kuahnya creamy, dagingnya empuk. 10/10!", author: "Amanda Putri", role: "@jakartafoodie" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8"
              >
                <div className="absolute -top-4 left-8 w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                  ))}
                </div>
                <p className="text-[#3D2314] text-lg mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-[#2C1810]">{testimonial.author}</div>
                  {testimonial.role && <div className="text-sm text-[#8B4513]">{testimonial.role}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering CTA */}
      <section className="py-20 bg-[#2C1810] batik-pattern relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-[#DAA520]/20 text-[#DAA520] text-sm font-medium rounded-full mb-6">
              Layanan Catering
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
              Butuh Catering untuk Acara Anda?
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Kami melayani catering untuk acara kantor, pernikahan, hingga arisan keluarga.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {["Menu Customizable", "Chef On-Site", "Min. 50 pax"].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#DAA520] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#2C1810]" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Link href="/catering" className="inline-flex items-center gap-2 px-8 py-4 bg-[#DAA520] text-[#2C1810] font-semibold rounded-full hover:bg-[#C49520] transition-colors">
              Konsultasi Catering <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gradient-to-r from-[#8B4513] to-[#6B3410]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 mb-4">
                <CalendarDays className="w-8 h-8 text-[#DAA520]" />
                <span className="text-[#DAA520] font-medium">Reservasi Online</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Pesan Meja Anda Sekarang
              </h2>
              <p className="text-lg text-white/80 max-w-xl">
                Hindari antrian dan nikmati pengalaman makan yang lebih nyaman.
              </p>
            </div>
            <Link href="/reservasi" className="px-8 py-4 bg-[#DAA520] text-[#2C1810] font-semibold rounded-full hover:bg-[#C49520] transition-colors whitespace-nowrap">
              Reservasi Online
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
