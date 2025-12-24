"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Users, ChefHat, Truck, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const packages = [
  { name: "Paket Arisan", price: "Rp 75.000", unit: "/pax", min: 30, features: ["3 menu utama", "1 appetizer", "1 dessert", "Es teh manis"] },
  { name: "Paket Kantor", price: "Rp 100.000", unit: "/pax", min: 50, popular: true, features: ["5 menu utama", "2 appetizer", "3 varian sambal", "2 dessert", "2 jenis minuman", "Free setup"] },
  { name: "Paket Premium", price: "Rp 150.000", unit: "/pax", min: 100, features: ["10+ menu", "Live cooking", "Chef on-site", "Dessert station", "Unlimited minuman", "Waiter service"] },
];

export default function CateringPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", eventType: "", eventDate: "", guests: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-[#2C1810]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 bg-[#DAA520]/20 text-[#DAA520] text-sm font-medium rounded-full mb-6">Layanan Catering</span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Catering Rasa Negeri</h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">Hadirkan cita rasa autentik Nusantara di setiap momen spesial Anda</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Min. 30 Pax", desc: "Pesanan minimum" },
                { icon: ChefHat, title: "Chef On-Site", desc: "Paket premium" },
                { icon: Truck, title: "Free Delivery", desc: "Area Jakarta" },
                { icon: Clock, title: "Tepat Waktu", desc: "Garansi waktu" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                  <h3 className="font-bold text-[#2C1810] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#3D2314]/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#FDF6E3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-heading text-[#2C1810] text-center mb-12">Pilihan Paket</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative bg-white rounded-2xl p-8 shadow-lg ${pkg.popular ? "ring-2 ring-[#DAA520]" : ""}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#DAA520] text-[#2C1810] text-sm font-bold rounded-full">Populer</span>}
                  <h3 className="text-xl font-bold font-heading text-[#2C1810] mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#8B4513]">{pkg.price}</span>
                    <span className="text-[#3D2314]/60 text-sm">{pkg.unit}</span>
                  </div>
                  <p className="text-sm text-[#3D2314]/60 mb-4">Min. {pkg.min} pax</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-[#3D2314]">
                        <Check className="w-5 h-5 text-green-500" />{f}
                      </li>
                    ))}
                  </ul>
                  <a href="#form" className={`block text-center px-6 py-3 font-medium rounded-full transition-colors ${pkg.popular ? "bg-[#8B4513] text-white hover:bg-[#6B3410]" : "border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white"}`}>Pilih Paket</a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="form" className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-heading text-[#2C1810] text-center mb-8">Konsultasi Catering</h2>
            {isSubmitted ? (
              <div className="bg-[#FDF6E3] rounded-2xl p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#2C1810] mb-4">Terima Kasih!</h3>
                <p className="text-[#3D2314]/70">Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#FDF6E3] rounded-2xl p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Nama *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">WhatsApp *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Jenis Acara *</label>
                    <select required value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white">
                      <option value="">Pilih...</option>
                      <option value="wedding">Pernikahan</option>
                      <option value="corporate">Acara Kantor</option>
                      <option value="birthday">Ulang Tahun</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Tanggal Acara *</label>
                    <input type="date" required value={formData.eventDate} onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3D2314] mb-2">Jumlah Tamu *</label>
                    <input type="number" required min={30} value={formData.guests} onChange={(e) => setFormData({ ...formData, guests: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]" placeholder="Min. 30" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3D2314] mb-2">Pesan</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] resize-none" />
                </div>
                <button type="submit" className="w-full md:w-auto px-8 py-4 bg-[#8B4513] text-white font-semibold rounded-full hover:bg-[#6B3410] transition-colors">
                  Kirim Permintaan <ArrowRight className="w-5 h-5 inline ml-2" />
                </button>
              </form>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
