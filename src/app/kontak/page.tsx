"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations } from "@/lib/data";

export default function KontakPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Hubungi Kami</h1>
            <p className="text-lg text-white/70">Ada pertanyaan atau feedback? Kami senang mendengar dari Anda</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Phone, title: "Reservasi", content: "(021) 555-RASA", href: "tel:+62215551234" },
                { icon: MessageCircle, title: "WhatsApp", content: "0811-8888-RASA", href: "https://wa.me/628118888RASA" },
                { icon: Mail, title: "Email", content: "halo@rasanegeri.id", href: "mailto:halo@rasanegeri.id" },
                { icon: Clock, title: "Jam Operasional", content: "11:00 - 22:00", href: null },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} className="block p-6 bg-[#FDF6E3] rounded-xl hover:bg-[#8B4513]/10 transition-colors text-center group">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center group-hover:bg-[#8B4513] transition-colors">
                        <item.icon className="w-7 h-7 text-[#8B4513] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bold text-[#2C1810] mb-1">{item.title}</h3>
                      <p className="text-[#8B4513]">{item.content}</p>
                    </a>
                  ) : (
                    <div className="block p-6 bg-[#FDF6E3] rounded-xl text-center">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-[#8B4513]" />
                      </div>
                      <h3 className="font-bold text-[#2C1810] mb-1">{item.title}</h3>
                      <p className="text-[#3D2314]/70">{item.content}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold font-heading text-[#2C1810] mb-6">Kirim Pesan</h2>
                {isSubmitted ? (
                  <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C1810] mb-4">Pesan Terkirim!</h3>
                    <p className="text-[#3D2314]/70">Tim kami akan merespons dalam 1x24 jam.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#3D2314] mb-2">Nama *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3D2314] mb-2">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">Jenis Pertanyaan *</label>
                      <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white">
                        <option value="">Pilih...</option>
                        <option value="general">Pertanyaan Umum</option>
                        <option value="reservation">Reservasi</option>
                        <option value="catering">Catering</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">Subjek *</label>
                      <input type="text" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">Pesan *</label>
                      <textarea required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] resize-none" />
                    </div>
                    <button type="submit" className="px-8 py-4 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#6B3410] transition-colors">
                      <Send className="w-5 h-5 inline mr-2" />Kirim Pesan
                    </button>
                  </form>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-bold font-heading text-[#2C1810] mb-6">Lokasi Kami</h2>
                <div className="space-y-4">
                  {locations.map((location) => (
                    <div key={location.id} className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-[#8B4513]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#2C1810] mb-1">{location.name}</h3>
                          <p className="text-sm text-[#3D2314]/70 mb-2">{location.address}</p>
                          <div className="flex gap-4 text-sm text-[#3D2314]/60">
                            <span className="flex items-center gap-1"><Phone className="w-4 h-4" />{location.phone}</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{location.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold font-heading text-[#2C1810] mb-8 text-center">Pertanyaan Umum</h2>
            <div className="space-y-4">
              {[
                { q: "Apakah perlu reservasi?", a: "Untuk weekend dan hari libur, kami sangat menyarankan untuk reservasi terlebih dahulu." },
                { q: "Apakah tersedia menu vegetarian?", a: "Ya, kami menyediakan beberapa pilihan menu vegetarian." },
                { q: "Berapa minimum order untuk catering?", a: "Minimum order untuk layanan catering adalah 30 pax." },
                { q: "Apakah tersedia private room?", a: "Ya, cabang Kemang memiliki private room yang dapat menampung hingga 30 orang." },
              ].map((faq, i) => (
                <div key={i} className="bg-[#FDF6E3] rounded-xl p-6">
                  <h3 className="font-bold text-[#2C1810] mb-2">{faq.q}</h3>
                  <p className="text-[#3D2314]/70 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
