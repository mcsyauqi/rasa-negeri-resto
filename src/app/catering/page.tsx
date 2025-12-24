"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Users, ChefHat, Truck, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const packages = [
  {
    name: "Paket Arisan",
    price: "Rp 75.000",
    unit: "per pax",
    minOrder: 30,
    description: "Cocok untuk arisan dan acara keluarga kecil",
    features: [
      "Pilihan 3 menu utama",
      "1 appetizer",
      "1 dessert",
      "Es teh manis",
      "Peralatan makan standar",
    ],
  },
  {
    name: "Paket Kantor",
    price: "Rp 100.000",
    unit: "per pax",
    minOrder: 50,
    popular: true,
    description: "Ideal untuk meeting dan acara kantor",
    features: [
      "Pilihan 5 menu utama",
      "2 appetizer",
      "Sambal 3 varian",
      "2 dessert",
      "Minuman 2 jenis",
      "Peralatan makan premium",
      "Free setup & cleanup",
    ],
  },
  {
    name: "Paket Premium",
    price: "Rp 150.000",
    unit: "per pax",
    minOrder: 100,
    description: "Untuk pernikahan dan acara besar",
    features: [
      "Menu lengkap (10+ pilihan)",
      "Live cooking station",
      "Chef on-site",
      "Dessert station",
      "Minuman unlimited",
      "Dekorasi meja",
      "Peralatan makan premium",
      "Waiter service",
    ],
  },
];

const menuOptions = [
  { category: "Hidangan Utama", items: ["Rendang Padang", "Gudeg Jogja", "Ayam Betutu", "Iga Bakar", "Bebek Goreng", "Soto Betawi"] },
  { category: "Appetizer", items: ["Sate Lilit", "Lumpia Semarang", "Tahu Telor", "Perkedel Jagung", "Kerupuk Udang"] },
  { category: "Sambal", items: ["Sambal Matah", "Sambal Terasi", "Sambal Ijo", "Sambal Bajak"] },
  { category: "Dessert", items: ["Klepon", "Es Pisang Ijo", "Kolak Pisang", "Dadar Gulung", "Es Cendol"] },
];

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    package: "",
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
        <section className="relative py-24 bg-[#2C1810] overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <Container className="relative z-10 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-[#DAA520]/20 text-[#DAA520] text-sm font-medium rounded-full mb-6"
            >
              Layanan Catering
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-6"
            >
              Catering Rasa Negeri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Hadirkan cita rasa autentik Nusantara di setiap momen spesial Anda.
              Kami melayani acara kantor, pernikahan, hingga arisan keluarga.
            </motion.p>
          </Container>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <Container>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, title: "Min. 30 Pax", desc: "Pesanan minimum" },
                { icon: ChefHat, title: "Chef On-Site", desc: "Tersedia untuk paket premium" },
                { icon: Truck, title: "Free Delivery", desc: "Area Jakarta & sekitarnya" },
                { icon: Clock, title: "Tepat Waktu", desc: "Garansi ketepatan waktu" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                  <h3 className="font-bold text-[#2C1810] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#3D2314]/60">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Packages */}
        <section className="py-16 bg-[#FDF6E3]">
          <Container>
            <SectionTitle
              title="Pilihan Paket Catering"
              subtitle="Sesuaikan dengan kebutuhan dan budget acara Anda"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                    pkg.popular ? "ring-2 ring-[#DAA520]" : ""
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#DAA520] text-[#2C1810] text-sm font-bold rounded-full">
                      Paling Populer
                    </span>
                  )}
                  <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-[#3D2314]/60 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[#8B4513]">{pkg.price}</span>
                    <span className="text-[#3D2314]/60 text-sm"> {pkg.unit}</span>
                  </div>
                  <p className="text-sm text-[#3D2314]/60 mb-4">
                    Minimum order: {pkg.minOrder} pax
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-[#3D2314]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="#form"
                    variant={pkg.popular ? "primary" : "outline"}
                    className="w-full"
                  >
                    Pilih Paket
                  </Button>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Menu Options */}
        <section className="py-16 bg-white">
          <Container>
            <SectionTitle
              title="Pilihan Menu"
              subtitle="Semua menu dapat dicustomize sesuai kebutuhan"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {menuOptions.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#FDF6E3] rounded-xl p-6"
                >
                  <h3 className="font-bold text-[#2C1810] mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-[#3D2314]/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Inquiry Form */}
        <section id="form" className="py-16 bg-[#FDF6E3]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionTitle
                title="Konsultasi Catering"
                subtitle="Isi formulir di bawah dan tim kami akan menghubungi Anda"
              />

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-10 shadow-xl text-center"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-4">
                    Terima Kasih!
                  </h3>
                  <p className="text-[#3D2314]/70 mb-6">
                    Permintaan konsultasi catering Anda telah kami terima.
                    Tim kami akan menghubungi Anda dalam 1x24 jam.
                  </p>
                  <Button href="/">Kembali ke Beranda</Button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-xl"
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
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
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
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Jenis Acara *
                      </label>
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] bg-white"
                      >
                        <option value="">Pilih jenis acara...</option>
                        <option value="wedding">Pernikahan</option>
                        <option value="corporate">Acara Kantor</option>
                        <option value="birthday">Ulang Tahun</option>
                        <option value="arisan">Arisan</option>
                        <option value="other">Lainnya</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Tanggal Acara *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Jumlah Tamu *
                      </label>
                      <input
                        type="number"
                        required
                        min={30}
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513]"
                        placeholder="Minimum 30 pax"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#3D2314] mb-2">
                        Pesan atau Permintaan Khusus
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-[#8B4513]/20 focus:outline-none focus:border-[#8B4513] resize-none"
                        placeholder="Tuliskan detail acara, menu yang diinginkan, atau permintaan khusus lainnya..."
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Kirim Permintaan Konsultasi
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </div>
                </motion.form>
              )}

              {/* Contact */}
              <div className="mt-10 text-center">
                <p className="text-[#3D2314]/70 mb-4">Atau hubungi langsung tim catering kami:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:+62215551234"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md"
                  >
                    <Phone className="w-5 h-5 text-[#8B4513]" />
                    <span className="text-[#3D2314] font-medium">(021) 555-RASA ext. 2</span>
                  </a>
                  <a
                    href="mailto:catering@rasanegeri.id"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md"
                  >
                    <Mail className="w-5 h-5 text-[#8B4513]" />
                    <span className="text-[#3D2314] font-medium">catering@rasanegeri.id</span>
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
