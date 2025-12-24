"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { locations } from "@/lib/data";

const contactInfo = [
  {
    icon: Phone,
    title: "Reservasi",
    content: "(021) 555-RASA",
    href: "tel:+62215551234",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "0811-8888-RASA",
    href: "https://wa.me/628118888RASA",
  },
  {
    icon: Mail,
    title: "Email",
    content: "halo@rasanegeri.id",
    href: "mailto:halo@rasanegeri.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "11:00 - 22:00 (Setiap Hari)",
    href: null,
  },
];

const inquiryTypes = [
  "Pertanyaan Umum",
  "Reservasi",
  "Catering",
  "Kerjasama",
  "Karir",
  "Feedback",
  "Komplain",
  "Lainnya",
];

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-[#2C1810] overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <Container className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-4"
            >
              Hubungi Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Ada pertanyaan atau feedback? Kami senang mendengar dari Anda
            </motion.p>
          </Container>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block p-6 bg-[#FDF6E3] rounded-xl hover:bg-[#8B4513]/10 transition-colors text-center group"
                    >
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center group-hover:bg-[#8B4513] transition-colors">
                        <info.icon className="w-7 h-7 text-[#8B4513] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-[#2C1810] mb-1">{info.title}</h3>
                      <p className="text-[#8B4513]">{info.content}</p>
                    </a>
                  ) : (
                    <div className="block p-6 bg-[#FDF6E3] rounded-xl text-center">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                        <info.icon className="w-7 h-7 text-[#8B4513]" />
                      </div>
                      <h3 className="font-bold text-[#2C1810] mb-1">{info.title}</h3>
                      <p className="text-[#3D2314]/70">{info.content}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Form & Locations */}
        <section className="py-16 bg-[#FDF6E3]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-6">
                  Kirim Pesan
                </h2>

                {isSubmitted ? (
                  <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-4">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-[#3D2314]/70 mb-6">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons
                      pesan Anda dalam 1x24 jam.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Kirim Pesan Lagi
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl p-8 shadow-lg space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#3D2314] mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3D2314] mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#3D2314] mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                          placeholder="08xx-xxxx-xxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3D2314] mb-2">
                          Jenis Pertanyaan *
                        </label>
                        <select
                          required
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white"
                        >
                          <option value="">Pilih jenis pertanyaan...</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                        placeholder="Subjek pesan"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Pesan *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] resize-none"
                        placeholder="Tuliskan pesan Anda..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-6">
                  Lokasi Kami
                </h2>

                <div className="space-y-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="bg-white rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#8B4513]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-[#2C1810]">{location.name}</h3>
                            {location.badge && (
                              <span className="px-2 py-0.5 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                                {location.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#3D2314]/70 mb-2">
                            {location.fullAddress}
                          </p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className="flex items-center gap-1 text-[#3D2314]/60">
                              <Phone className="w-4 h-4" />
                              {location.phone}
                            </span>
                            <span className="flex items-center gap-1 text-[#3D2314]/60">
                              <Clock className="w-4 h-4" />
                              {location.hours}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="h-64 bg-[#8B4513]/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#8B4513]/30 mx-auto mb-4" />
                      <p className="text-[#3D2314]/50">Peta Interaktif</p>
                      <a
                        href="https://maps.google.com/?q=Kemang+Jakarta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B4513] hover:underline text-sm"
                      >
                        Buka di Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-8 text-center">
                Pertanyaan Umum
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Apakah perlu reservasi untuk makan di Rasa Negeri?",
                    a: "Untuk hari biasa, Anda bisa langsung datang (walk-in). Namun untuk weekend dan hari libur, kami sangat menyarankan untuk melakukan reservasi terlebih dahulu untuk memastikan ketersediaan meja.",
                  },
                  {
                    q: "Apakah tersedia menu vegetarian?",
                    a: "Ya, kami menyediakan beberapa pilihan menu vegetarian. Silakan informasikan kepada waiter kami untuk rekomendasi menu vegetarian.",
                  },
                  {
                    q: "Berapa minimum order untuk catering?",
                    a: "Minimum order untuk layanan catering adalah 30 pax. Untuk informasi lebih lanjut, silakan hubungi tim catering kami atau kunjungi halaman Catering.",
                  },
                  {
                    q: "Apakah tersedia ruang private untuk acara?",
                    a: "Ya, cabang Kemang (Flagship) kami memiliki private room yang dapat menampung hingga 30 orang. Untuk reservasi private room, harap hubungi kami minimal 3 hari sebelumnya.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#FDF6E3] rounded-xl p-6"
                  >
                    <h3 className="font-bold text-[#2C1810] mb-2">{faq.q}</h3>
                    <p className="text-[#3D2314]/70 text-sm">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
