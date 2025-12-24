"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const stats = [
  { value: "39", label: "Tahun Pengalaman" },
  { value: "5", label: "Lokasi" },
  { value: "500.000+", label: "Pelanggan" },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop"
                alt="Suasana Restoran Rasa Negeri"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#8B4513]/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#DAA520]/20 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-[#8B4513]/10 text-[#8B4513] text-sm font-medium rounded-full mb-6">
              Sejak 1985
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-6">
              Warisan Cita Rasa Indonesia
            </h2>

            {/* Paragraphs */}
            <p className="text-[#3D2314]/80 text-lg leading-relaxed mb-4">
              Rasa Negeri lahir dari dapur Ibu Sari di tahun 1985, bermula dari
              warung kecil di Yogyakarta yang menyajikan masakan rumahan dengan
              resep keluarga.
            </p>
            <p className="text-[#3D2314]/80 text-lg leading-relaxed mb-8">
              Kini, setelah hampir 40 tahun, kami telah berkembang menjadi
              restoran Indonesia premium dengan 5 cabang di Jakarta, tanpa pernah
              melupakan akar dan keaslian rasa yang menjadi fondasi kami.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[#8B4513] font-[var(--font-heading)]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#3D2314]/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Button href="/tentang" variant="primary">
              Cerita Lengkap Kami
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
