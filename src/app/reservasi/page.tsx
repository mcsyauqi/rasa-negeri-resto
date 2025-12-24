"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, MapPin, Phone, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { locations } from "@/lib/data";

const timeSlots = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00"
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, "9+"];

export default function ReservasiPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-[#FDF6E3]">
          <Container className="py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto text-center bg-white rounded-2xl p-10 shadow-xl"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-4">
                Reservasi Berhasil!
              </h1>
              <p className="text-[#3D2314]/70 mb-6">
                Terima kasih telah melakukan reservasi di Rasa Negeri. Kami akan menghubungi
                Anda melalui WhatsApp untuk konfirmasi lebih lanjut.
              </p>
              <div className="bg-[#FDF6E3] rounded-xl p-6 text-left mb-6">
                <h3 className="font-bold text-[#2C1810] mb-3">Detail Reservasi:</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-[#3D2314]/60">Nama:</span> {formData.name}</p>
                  <p><span className="text-[#3D2314]/60">Lokasi:</span> {formData.location}</p>
                  <p><span className="text-[#3D2314]/60">Tanggal:</span> {formData.date}</p>
                  <p><span className="text-[#3D2314]/60">Waktu:</span> {formData.time}</p>
                  <p><span className="text-[#3D2314]/60">Jumlah Tamu:</span> {formData.guests} orang</p>
                </div>
              </div>
              <Button href="/" variant="primary">
                Kembali ke Beranda
              </Button>
            </motion.div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

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
              Reservasi Meja
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Pesan meja Anda sekarang dan nikmati pengalaman makan yang tak terlupakan
            </motion.p>
          </Container>
        </section>

        {/* Reservation Form */}
        <section className="py-16 bg-[#FDF6E3]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Personal Info */}
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-4">
                      Informasi Pribadi
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors"
                        placeholder="08xx-xxxx-xxxx"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Catatan Khusus
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors resize-none"
                        placeholder="Contoh: kursi bayi, alergi makanan, dll."
                      />
                    </div>
                  </div>

                  {/* Right Column - Reservation Details */}
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-4">
                      Detail Reservasi
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Pilih Lokasi *
                      </label>
                      <select
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors bg-white"
                      >
                        <option value="">Pilih cabang...</option>
                        {locations.map((loc) => (
                          <option key={loc.id} value={loc.name}>
                            {loc.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        <CalendarDays className="w-4 h-4 inline mr-2" />
                        Tanggal *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Waktu *
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({ ...formData, time })}
                            className={`py-2 text-sm font-medium rounded-lg transition-colors ${
                              formData.time === time
                                ? "bg-[#8B4513] text-white"
                                : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Jumlah Tamu *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {guestOptions.map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setFormData({ ...formData, guests: String(num) })}
                            className={`w-12 h-12 rounded-full font-medium transition-colors ${
                              formData.guests === String(num)
                                ? "bg-[#8B4513] text-white"
                                : "bg-[#8B4513]/10 text-[#8B4513] hover:bg-[#8B4513]/20"
                            }`}
                          >
                            {num}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-10 pt-8 border-t border-[#8B4513]/10">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <CalendarDays className="w-5 h-5" />
                    Konfirmasi Reservasi
                  </Button>
                  <p className="mt-4 text-sm text-[#3D2314]/60">
                    Dengan melakukan reservasi, Anda menyetujui syarat dan ketentuan yang berlaku.
                    Tim kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi.
                  </p>
                </div>
              </motion.form>

              {/* Contact Info */}
              <div className="mt-8 text-center">
                <p className="text-[#3D2314]/70 mb-4">
                  Butuh bantuan? Hubungi kami langsung:
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+62215551234"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Phone className="w-5 h-5 text-[#8B4513]" />
                    <span className="text-[#3D2314] font-medium">(021) 555-RASA</span>
                  </a>
                  <a
                    href="https://wa.me/628118888RASA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full shadow-md hover:shadow-lg hover:bg-green-600 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
