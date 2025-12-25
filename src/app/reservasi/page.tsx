"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, User, Phone, Mail, Calendar, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
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
            <h2 className="mb-3 text-2xl font-bold text-[#2C1810]">Reservasi Berhasil!</h2>
            <p className="mb-8 text-[#3D2314]/70">
              Terima kasih telah melakukan reservasi. Tim kami akan menghubungi Anda untuk konfirmasi.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-[#8B4513] px-8 py-3 font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
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
      <Navbar />
      <main className="min-h-screen bg-[#FDF6E3] pt-16">
        <section className="gradient-dark py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <span className="mb-2 block text-sm font-medium uppercase tracking-wider text-[#DAA520]">
              Pesan Meja
            </span>
            <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Reservasi</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-2xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="gradient-warm p-8 text-center">
                <h2 className="text-2xl font-bold text-[#FDF6E3]">Form Reservasi</h2>
                <p className="mt-2 text-[#FDF6E3]/70">Pastikan tempat Anda</p>
              </div>

              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <User size={14} /> Nama Lengkap
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

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                      Pilih Cabang
                    </label>
                    <select
                      required
                      className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                    >
                      <option value="">Pilih lokasi...</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          Rasa Negeri {loc.city}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Calendar size={14} /> Tanggal
                      </label>
                      <input
                        type="date"
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Clock size={14} /> Waktu
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      >
                        <option value="">Pilih...</option>
                        {["11:00", "12:00", "13:00", "18:00", "19:00", "20:00"].map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-[#2C1810]">
                        <Users size={14} /> Jumlah
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      >
                        <option value="">Pilih...</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>{n} orang</option>
                        ))}
                        <option value="10+">Lebih dari 10</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                      Catatan Khusus (Opsional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] p-4 outline-none transition-colors focus:border-[#8B4513]"
                      placeholder="Contoh: meja dekat jendela, ada anak kecil..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="h-14 w-full rounded-full bg-[#8B4513] font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
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
