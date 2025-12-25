"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontakPage() {
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
            <h2 className="mb-3 text-2xl font-bold text-[#2C1810]">Pesan Terkirim!</h2>
            <p className="mb-8 text-[#3D2314]/70">
              Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="rounded-full bg-[#8B4513] px-8 py-3 font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
            >
              Kirim Pesan Lagi
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
              Hubungi Kami
            </span>
            <h1 className="text-4xl font-bold text-[#FDF6E3] md:text-5xl">Kontak</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-8 text-2xl font-bold text-[#2C1810]">Informasi Kontak</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8B4513]">
                      <MapPin className="text-[#FDF6E3]" size={22} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Kantor Pusat</h3>
                      <p className="text-[#3D2314]/70">Jl. Sudirman No. 123, Jakarta Pusat</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8B4513]">
                      <Phone className="text-[#FDF6E3]" size={22} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Telepon</h3>
                      <p className="text-[#3D2314]/70">(021) 1234-5678</p>
                      <p className="text-[#3D2314]/70">0812-3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8B4513]">
                      <Mail className="text-[#FDF6E3]" size={22} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Email</h3>
                      <p className="text-[#3D2314]/70">info@rasanegeri.id</p>
                      <p className="text-[#3D2314]/70">catering@rasanegeri.id</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8B4513]">
                      <Clock className="text-[#FDF6E3]" size={22} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Jam Operasional</h3>
                      <p className="text-[#3D2314]/70">Senin - Jumat: 10:00 - 22:00</p>
                      <p className="text-[#3D2314]/70">Sabtu - Minggu: 09:00 - 23:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="mb-4 font-semibold text-[#2C1810]">Ikuti Kami</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B4513] text-[#FDF6E3] transition-colors hover:bg-[#DAA520] hover:text-[#2C1810]"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B4513] text-[#FDF6E3] transition-colors hover:bg-[#DAA520] hover:text-[#2C1810]"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-3xl bg-white shadow-xl"
              >
                <div className="gradient-warm p-6 text-center">
                  <h2 className="text-xl font-bold text-[#FDF6E3]">Kirim Pesan</h2>
                </div>
                <form onSubmit={handleSubmit} className="p-8">
                  <div className="space-y-5">
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
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Subjek
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] px-4 outline-none transition-colors focus:border-[#8B4513]"
                      >
                        <option value="">Pilih subjek...</option>
                        <option value="umum">Pertanyaan Umum</option>
                        <option value="reservasi">Reservasi</option>
                        <option value="catering">Catering</option>
                        <option value="kerjasama">Kerjasama</option>
                        <option value="saran">Saran & Kritik</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        required
                        className="w-full rounded-xl border-2 border-[#2C1810]/10 bg-[#FDF6E3] p-4 outline-none transition-colors focus:border-[#8B4513]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8B4513] font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810]"
                    >
                      <Send size={18} />
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
