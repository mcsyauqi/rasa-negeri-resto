"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations } from "@/lib/data";

export default function ReservasiPage() {
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
              Reservasi Berhasil!
            </h2>
            <p className="mb-6 text-[#3D2314]/70">
              Terima kasih telah melakukan reservasi. Tim kami akan menghubungi Anda untuk konfirmasi.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#8B4513] px-6 text-sm font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
            >
              Buat Reservasi Lagi
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
        <section className="bg-[#2C1810] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-4 text-4xl font-bold text-[#FDF6E3] sm:text-5xl">
                Reservasi
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Pesan meja Anda dan nikmati pengalaman makan yang nyaman
              </p>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >
              <div className="bg-[#8B4513] px-6 py-8 text-center">
                <h2 className="text-xl font-bold text-[#FDF6E3] sm:text-2xl">
                  Form Reservasi
                </h2>
                <p className="mt-2 text-sm text-[#FDF6E3]/70">
                  Isi form di bawah untuk memesan meja
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <User className="h-4 w-4 text-[#8B4513]" />
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

                  <div>
                    <label className="mb-2 text-sm font-medium text-[#2C1810]">
                      Pilih Lokasi
                    </label>
                    <select
                      required
                      className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                    >
                      <option value="">Pilih cabang...</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Calendar className="h-4 w-4 text-[#8B4513]" />
                        Tanggal
                      </label>
                      <input
                        type="date"
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Clock className="h-4 w-4 text-[#8B4513]" />
                        Waktu
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      >
                        <option value="">Pilih waktu...</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Users className="h-4 w-4 text-[#8B4513]" />
                        Jumlah Tamu
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      >
                        <option value="">Pilih...</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} orang
                          </option>
                        ))}
                        <option value="10+">Lebih dari 10</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 text-sm font-medium text-[#2C1810]">
                      Catatan Khusus (Opsional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] p-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      placeholder="Contoh: meja dekat jendela, ada anak kecil, dll."
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-12 w-full rounded-full bg-[#8B4513] text-base font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
                  >
                    Kirim Reservasi
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
