"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Users, Phone, Mail, Calendar, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
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
        <Header />
        <main className="flex min-h-screen items-center justify-center bg-[#FDF6E3] pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-4 max-w-md rounded-2xl bg-white p-8 text-center shadow-lg"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-[#2C1810]">
              Permintaan Terkirim!
            </h2>
            <p className="mb-6 text-[#3D2314]/70">
              Terima kasih atas permintaan catering Anda. Tim kami akan segera menghubungi Anda.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#8B4513] px-6 text-sm font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
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
      <Header />
      <main className="pt-16 sm:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#2C1810] py-16 sm:py-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
              alt="Catering"
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
                Layanan Catering
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Percayakan acara spesial Anda kepada kami dengan berbagai pilihan paket catering berkualitas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#2C1810] sm:text-4xl">
                Pilihan Paket
              </h2>
              <p className="mx-auto max-w-2xl text-base text-[#3D2314]/70 sm:text-lg">
                Tersedia berbagai paket untuk berbagai jenis acara
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {cateringPackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`overflow-hidden rounded-2xl bg-white shadow-lg ${index === 1 ? "ring-2 ring-[#DAA520]" : ""}`}
                >
                  {index === 1 && (
                    <div className="bg-[#DAA520] py-2 text-center text-sm font-semibold text-[#2C1810]">
                      Paling Populer
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-[#2C1810]">
                      {pkg.name}
                    </h3>
                    <p className="mb-4 text-sm text-[#3D2314]/70">{pkg.description}</p>
                    <div className="mb-6">
                      <p className="text-3xl font-bold text-[#8B4513]">
                        {formatPrice(pkg.price)}
                        <span className="text-base font-normal text-[#3D2314]/70">/pax</span>
                      </p>
                      <p className="text-sm text-[#3D2314]/70">Min. {pkg.minOrder} pax</p>
                    </div>
                    <ul className="mb-6 space-y-2">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-[#3D2314]">
                          <Check className="h-4 w-4 shrink-0 text-[#DAA520]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#form"
                      className={`flex h-12 w-full items-center justify-center rounded-full text-base font-semibold transition-colors ${
                        index === 1
                          ? "bg-[#DAA520] text-[#2C1810] hover:bg-[#DAA520]/90"
                          : "bg-[#8B4513] text-[#FDF6E3] hover:bg-[#8B4513]/90"
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

        {/* Features */}
        <section className="bg-[#8B4513] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#FDF6E3] sm:text-4xl">
                Kenapa Memilih Kami?
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Menu Autentik", desc: "Hidangan khas Nusantara dengan resep turun-temurun" },
                { title: "Bahan Berkualitas", desc: "Menggunakan bahan-bahan segar pilihan terbaik" },
                { title: "Tim Profesional", desc: "Pelayanan dari tim yang berpengalaman" },
                { title: "Harga Terjangkau", desc: "Paket dengan harga kompetitif dan fleksibel" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DAA520]">
                    <Check className="h-6 w-6 text-[#2C1810]" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-[#FDF6E3]">{feature.title}</h3>
                  <p className="text-sm text-[#FDF6E3]/70">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="form" className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="bg-[#2C1810] px-6 py-8 text-center">
                <h2 className="text-xl font-bold text-[#FDF6E3] sm:text-2xl">
                  Form Pemesanan Catering
                </h2>
                <p className="mt-2 text-sm text-[#FDF6E3]/70">
                  Isi form di bawah dan tim kami akan menghubungi Anda
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                        placeholder="Nama Anda"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Phone className="h-4 w-4 text-[#8B4513]" />
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                      <Mail className="h-4 w-4 text-[#8B4513]" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 text-sm font-medium text-[#2C1810]">
                        Jenis Acara
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      >
                        <option value="">Pilih jenis acara...</option>
                        <option value="pernikahan">Pernikahan</option>
                        <option value="ulang-tahun">Ulang Tahun</option>
                        <option value="arisan">Arisan</option>
                        <option value="kantor">Acara Kantor</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 text-sm font-medium text-[#2C1810]">
                        Pilih Paket
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      >
                        <option value="">Pilih paket...</option>
                        {cateringPackages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} - {formatPrice(pkg.price)}/pax
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Calendar className="h-4 w-4 text-[#8B4513]" />
                        Tanggal Acara
                      </label>
                      <input
                        type="date"
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Users className="h-4 w-4 text-[#8B4513]" />
                        Jumlah Porsi
                      </label>
                      <input
                        type="number"
                        required
                        min="20"
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                        placeholder="Min. 20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 text-sm font-medium text-[#2C1810]">
                      Alamat Pengiriman
                    </label>
                    <textarea
                      rows={3}
                      required
                      className="w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] p-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      placeholder="Alamat lengkap lokasi acara"
                    />
                  </div>

                  <div>
                    <label className="mb-2 text-sm font-medium text-[#2C1810]">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] p-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      placeholder="Permintaan khusus, alergi, dll."
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-12 w-full rounded-full bg-[#8B4513] text-base font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
                  >
                    Kirim Permintaan
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
