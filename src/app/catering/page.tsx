"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, CheckCircle, Phone, Mail, Users, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cateringPackages, formatPrice } from "@/lib/data";

export default function CateringPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-screen items-center justify-center bg-[#FDF6E3] pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-4 max-w-md rounded-3xl bg-white p-10 text-center shadow-xl"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[#2C1810]">Terima Kasih!</h2>
            <p className="mb-8 text-[#3D2314]/70">
              Permintaan catering Anda telah kami terima. Tim kami akan segera menghubungi Anda.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-[#8B4513] px-8 py-3 font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
            >
              Kembali
            </button>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#FDF6E3] pt-16">
        {/* Hero */}
        <section className="relative h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Catering"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mx-auto max-w-7xl text-center">
              <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
                Layanan Premium
              </span>
              <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Catering</h1>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2C1810]">Pilihan Paket</h2>
              <p className="text-[#3D2314]/70">Tersedia berbagai paket untuk acara Anda</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {cateringPackages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative overflow-hidden rounded-3xl bg-white shadow-lg ${
                    pkg.popular ? "ring-4 ring-[#DAA520]" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-[#DAA520] py-2 text-center text-sm font-semibold text-[#2C1810]">
                      Paling Populer
                    </div>
                  )}
                  <div className="p-8">
                    <h3 className="mb-2 text-2xl font-bold text-[#2C1810]">{pkg.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-[#8B4513]">
                        {formatPrice(pkg.price)}
                      </span>
                      <span className="text-[#3D2314]/60">/pax</span>
                      <p className="mt-1 text-sm text-[#3D2314]/60">Min. {pkg.minOrder} pax</p>
                    </div>
                    <ul className="mb-8 space-y-3">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#3D2314]">
                          <Check className="shrink-0 text-[#DAA520]" size={18} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#form"
                      className={`block w-full rounded-full py-4 text-center font-semibold transition-colors ${
                        pkg.popular
                          ? "bg-[#DAA520] text-[#2C1810] hover:bg-[#8B4513] hover:text-[#FDF6E3]"
                          : "bg-[#2C1810] text-[#FDF6E3] hover:bg-[#8B4513]"
                      }`}
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" className="gradient-dark py-16">
          <div className="mx-auto max-w-2xl px-6">
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="gradient-warm p-8 text-center">
                <h2 className="text-2xl font-bold text-[#FDF6E3]">Form Pemesanan</h2>
                <p className="mt-2 text-[#FDF6E3]/70">Isi form di bawah ini</p>
              </div>
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Phone size={14} /> Telepon
                      </label>
                      <input
                        type="tel"
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                      <Mail size={14} /> Email
                    </label>
                    <input
                      type="email"
                      required
                      className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Pilih Paket
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      >
                        <option value="">Pilih...</option>
                        {cateringPackages.map((p) => (
                          <option key={p.name} value={p.name}>
                            {p.name} - {formatPrice(p.price)}/pax
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Users size={14} /> Jumlah Porsi
                      </label>
                      <input
                        type="number"
                        min="20"
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                      <Calendar size={14} /> Tanggal Acara
                    </label>
                    <input
                      type="date"
                      required
                      className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                      Alamat Pengiriman
                    </label>
                    <textarea
                      rows={3}
                      required
                      className="w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] p-4 outline-none transition-colors focus:border-[#8B4513]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-14 w-full rounded-full bg-[#8B4513] font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
                  >
                    Kirim Permintaan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
