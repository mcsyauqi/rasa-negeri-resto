"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, MapPin, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { locations } from "@/lib/data";

const timeSlots = ["11:00", "11:30", "12:00", "12:30", "13:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export default function ReservasiPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", location: "", date: "", time: "", guests: "", notes: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-[#FDF6E3] flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-xl m-4">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-10 h-10 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold font-heading text-[#2C1810] mb-4">Reservasi Berhasil!</h1>
            <p className="text-[#3D2314]/70 mb-6">Terima kasih. Kami akan menghubungi Anda untuk konfirmasi.</p>
            <a href="/" className="inline-block px-6 py-3 bg-[#8B4513] text-white font-medium rounded-full">Kembali ke Beranda</a>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">Reservasi Meja</h1>
            <p className="text-lg text-white/70">Pesan meja Anda sekarang dan nikmati pengalaman makan yang tak terlupakan</p>
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-heading text-[#2C1810] mb-4">Informasi Pribadi</h2>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Nama Lengkap *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Nomor WhatsApp *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" placeholder="08xx-xxxx-xxxx" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Catatan Khusus</label>
                    <textarea value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} rows={3} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] resize-none" placeholder="Kursi bayi, alergi, dll." />
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-xl font-bold font-heading text-[#2C1810] mb-4">Detail Reservasi</h2>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2"><MapPin className="w-4 h-4 inline mr-1" />Pilih Lokasi *</label>
                    <select required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white">
                      <option value="">Pilih cabang...</option>
                      {locations.map((loc) => (<option key={loc.id} value={loc.name}>{loc.name}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2"><CalendarDays className="w-4 h-4 inline mr-1" />Tanggal *</label>
                    <input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} min={new Date().toISOString().split("T")[0]} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2"><Clock className="w-4 h-4 inline mr-1" />Waktu *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button key={time} type="button" onClick={() => setFormData({ ...formData, time })} className={`py-2 text-sm font-medium rounded-lg transition-colors ${formData.time === time ? "bg-[#8B4513] text-white" : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"}`}>{time}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2"><Users className="w-4 h-4 inline mr-1" />Jumlah Tamu *</label>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <button key={num} type="button" onClick={() => setFormData({ ...formData, guests: String(num) })} className={`w-12 h-12 rounded-full font-medium transition-colors ${formData.guests === String(num) ? "bg-[#8B4513] text-white" : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"}`}>{num}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#8B4513]/10">
                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#6B3410] transition-colors">
                  <CalendarDays className="w-5 h-5 inline mr-2" />Konfirmasi Reservasi
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
