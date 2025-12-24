"use client";

import { motion } from "framer-motion";
import { ChevronDown, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?q=80&w=2064&auto=format&fit=crop')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/80 via-[#2C1810]/60 to-[#2C1810]/90" />
      </div>

      {/* Batik Pattern Overlay */}
      <div className="absolute inset-0 batik-pattern opacity-30" />

      {/* Content */}
      <Container className="relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Award Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#DAA520]/20 backdrop-blur-sm rounded-full border border-[#DAA520]/30 mb-8"
          >
            <Award className="w-5 h-5 text-[#DAA520]" />
            <span className="text-sm text-[#DAA520] font-medium">
              Best Indonesian Restaurant 2024 - Jakarta Food Awards
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold font-[var(--font-heading)] text-white mb-6 leading-tight"
          >
            Nikmati Kelezatan
            <br />
            <span className="text-[#DAA520]">Autentik Masakan Nusantara</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Perjalanan rasa dari Sabang sampai Merauke, disajikan dengan cinta dan
            resep turun-temurun yang telah dijaga lebih dari 3 generasi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/menu" size="lg" variant="secondary">
              Lihat Menu
            </Button>
            <Button
              href="/reservasi"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2C1810]"
            >
              Reservasi Meja
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <span className="text-white/60 text-sm">Scroll untuk explore</span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
