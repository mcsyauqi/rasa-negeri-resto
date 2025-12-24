"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Instagram, Facebook } from "lucide-react";
import Header from "@/components/Header";
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
              Pesan Terkirim!
            </h2>
            <p className="mb-6 text-[#3D2314]/70">
              Terima kasih telah menghubungi kami. Tim kami akan segera membalas pesan Anda.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#8B4513] px-6 text-sm font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
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
                Hubungi Kami
              </h1>
              <p className="mx-auto max-w-2xl text-base text-[#FDF6E3]/70 sm:text-lg">
                Ada pertanyaan atau saran? Kami senang mendengar dari Anda
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#FDF6E3] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 text-2xl font-bold text-[#2C1810] sm:text-3xl">
                  Informasi Kontak
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B4513]">
                      <MapPin className="h-5 w-5 text-[#FDF6E3]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Kantor Pusat</h3>
                      <p className="text-sm text-[#3D2314]/70">
                        Jl. Sudirman No. 123<br />
                        Jakarta Pusat, 10220
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B4513]">
                      <Phone className="h-5 w-5 text-[#FDF6E3]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Telepon</h3>
                      <p className="text-sm text-[#3D2314]/70">
                        (021) 1234-5678<br />
                        0812-3456-7890
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B4513]">
                      <Mail className="h-5 w-5 text-[#FDF6E3]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Email</h3>
                      <p className="text-sm text-[#3D2314]/70">
                        info@rasanegeri.id<br />
                        catering@rasanegeri.id
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8B4513]">
                      <Clock className="h-5 w-5 text-[#FDF6E3]" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-[#2C1810]">Jam Operasional</h3>
                      <p className="text-sm text-[#3D2314]/70">
                        Senin - Jumat: 10:00 - 22:00<br />
                        Sabtu - Minggu: 09:00 - 23:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 font-semibold text-[#2C1810]">Ikuti Kami</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B4513] text-[#FDF6E3] transition-colors hover:bg-[#DAA520]"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B4513] text-[#FDF6E3] transition-colors hover:bg-[#DAA520]"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="bg-[#8B4513] px-6 py-6 text-center">
                  <h2 className="text-xl font-bold text-[#FDF6E3]">
                    Kirim Pesan
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-5">
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
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
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
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Subjek
                      </label>
                      <select
                        required
                        className="h-12 w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] px-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                      >
                        <option value="">Pilih subjek...</option>
                        <option value="umum">Pertanyaan Umum</option>
                        <option value="reservasi">Reservasi</option>
                        <option value="catering">Catering</option>
                        <option value="kerjasama">Kerjasama</option>
                        <option value="saran">Saran & Kritik</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#2C1810]">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        required
                        className="w-full rounded-lg border border-[#3D2314]/20 bg-[#FDF6E3] p-4 text-[#2C1810] outline-none transition-colors focus:border-[#8B4513] focus:ring-2 focus:ring-[#8B4513]/20"
                        placeholder="Tulis pesan Anda..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#8B4513] text-base font-semibold text-[#FDF6E3] transition-colors hover:bg-[#8B4513]/90"
                    >
                      <Send className="h-4 w-4" />
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-[#2C1810] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-[#FDF6E3] sm:text-3xl">
              Temukan Kami
            </h2>
            <div className="overflow-hidden rounded-2xl bg-[#3D2314]">
              <div className="flex aspect-video items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 h-12 w-12 text-[#DAA520]" />
                  <p className="text-[#FDF6E3]/70">Peta interaktif akan ditampilkan di sini</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
