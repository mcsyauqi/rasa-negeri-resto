"use client";

import { motion } from "framer-motion";
import { Award, Heart, Users, Leaf, ChefHat, Star } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const timeline = [
  {
    year: "1985",
    title: "Awal Mula",
    description: "Ibu Sari membuka warung kecil di Yogyakarta dengan modal seadanya dan resep masakan rumahan dari ibunya.",
  },
  {
    year: "1992",
    title: "Ekspansi Pertama",
    description: "Membuka cabang kedua di Semarang setelah mendapat respon positif dari pelanggan setia.",
  },
  {
    year: "2005",
    title: "Masuk Jakarta",
    description: "Rasa Negeri membuka cabang pertama di Jakarta, tepatnya di Kemang, dengan konsep restoran modern.",
  },
  {
    year: "2015",
    title: "Penghargaan Pertama",
    description: "Menerima penghargaan 'Best Indonesian Restaurant' dari Jakarta Food Festival untuk pertama kalinya.",
  },
  {
    year: "2020",
    title: "Transformasi Digital",
    description: "Meluncurkan sistem reservasi online dan layanan delivery untuk menjangkau lebih banyak pelanggan.",
  },
  {
    year: "2024",
    title: "5 Cabang di Jakarta",
    description: "Kini Rasa Negeri hadir di 5 lokasi strategis di Jakarta dengan total kapasitas 500+ kursi.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Cinta dalam Setiap Hidangan",
    description: "Setiap masakan kami dibuat dengan penuh cinta dan dedikasi, seperti memasak untuk keluarga sendiri.",
  },
  {
    icon: Leaf,
    title: "Bahan Baku Terbaik",
    description: "Kami hanya menggunakan bahan-bahan segar berkualitas tinggi dari petani dan peternak lokal.",
  },
  {
    icon: ChefHat,
    title: "Resep Turun-Temurun",
    description: "Resep autentik yang dijaga selama 3 generasi, tanpa mengurangi keaslian rasa.",
  },
  {
    icon: Users,
    title: "Kebersamaan",
    description: "Kami percaya makanan adalah cara terbaik untuk mempererat hubungan dan menciptakan kenangan.",
  },
];

const team = [
  {
    name: "Ibu Sari Wijaya",
    role: "Founder & Recipe Guardian",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=300&auto=format&fit=crop",
    description: "Pendiri Rasa Negeri yang masih aktif menjaga keaslian resep hingga hari ini.",
  },
  {
    name: "Chef Budi Hartono",
    role: "Executive Chef",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    description: "30 tahun pengalaman dalam masakan Indonesia, bergabung sejak tahun 1995.",
  },
  {
    name: "Diana Wijaya",
    role: "CEO & Managing Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    description: "Putri Ibu Sari yang memimpin ekspansi bisnis Rasa Negeri.",
  },
];

export default function TentangPage() {
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
              Sejak 1985
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-6"
            >
              Cerita Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Perjalanan hampir 40 tahun dalam menyajikan cita rasa autentik Nusantara
            </motion.p>
          </Container>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
                  alt="Warung Rasa Negeri 1985"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#8B4513] text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold font-[var(--font-heading)]">39+</div>
                  <div className="text-sm text-white/80">Tahun Pengalaman</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-6">
                  Dari Warung Kecil di Yogyakarta
                </h2>
                <div className="space-y-4 text-[#3D2314]/80">
                  <p>
                    Kisah Rasa Negeri dimulai pada tahun 1985, ketika Ibu Sari Wijaya membuka
                    sebuah warung kecil di pinggir jalan Malioboro, Yogyakarta. Dengan modal
                    sederhana dan resep masakan yang diwariskan dari ibunya, ia mulai menyajikan
                    masakan rumahan yang sederhana namun penuh cita rasa.
                  </p>
                  <p>
                    Pelanggan datang bukan hanya untuk menikmati kelezatan masakannya, tetapi
                    juga kehangatan yang terpancar dari setiap hidangan. Dari mulut ke mulut,
                    warung kecil itu semakin dikenal dan menjadi destinasi kuliner bagi siapa
                    saja yang rindu akan masakan rumahan Indonesia.
                  </p>
                  <p>
                    Kini, hampir empat dekade kemudian, Rasa Negeri telah berkembang menjadi
                    restoran Indonesia premium dengan 5 cabang di Jakarta. Namun, satu hal
                    yang tidak pernah berubah: komitmen kami untuk menyajikan masakan autentik
                    dengan resep yang sama, cinta yang sama, seperti Ibu Sari memasak di dapur
                    kecilnya dulu.
                  </p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#FDF6E3]">
          <Container>
            <SectionTitle
              title="Filosofi Kami"
              subtitle="Nilai-nilai yang menjadi fondasi setiap hidangan Rasa Negeri"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#8B4513]/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-[#8B4513]" />
                  </div>
                  <h3 className="text-lg font-bold font-[var(--font-heading)] text-[#2C1810] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#3D2314]/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <Container>
            <SectionTitle
              title="Perjalanan Kami"
              subtitle="Tonggak penting dalam sejarah Rasa Negeri"
            />

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#8B4513]/20" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-0 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-[#8B4513] rounded-full flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-[#DAA520] rounded-full" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                      <span className="inline-block px-4 py-1 bg-[#DAA520] text-[#2C1810] text-sm font-bold rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#3D2314]/70">{item.description}</p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-[#FDF6E3]">
          <Container>
            <SectionTitle
              title="Tim Kami"
              subtitle="Orang-orang di balik kelezatan Rasa Negeri"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#8B4513] font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-[#3D2314]/70">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-[#2C1810]">
          <Container>
            <SectionTitle
              title="Penghargaan"
              subtitle="Apresiasi yang kami terima selama bertahun-tahun"
              light
            />

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { year: "2024", award: "Best Indonesian Restaurant", org: "Jakarta Food Awards" },
                { year: "2023", award: "Excellence in Service", org: "TripAdvisor" },
                { year: "2022", award: "Top 10 Restaurants", org: "Indonesia Culinary" },
                { year: "2020", award: "Heritage Restaurant", org: "Ministry of Tourism" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <Award className="w-12 h-12 text-[#DAA520] mx-auto mb-4" />
                  <div className="text-[#DAA520] font-bold mb-2">{item.year}</div>
                  <h3 className="text-white font-bold mb-1">{item.award}</h3>
                  <p className="text-white/60 text-sm">{item.org}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
