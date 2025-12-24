"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ReservationCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#8B4513] to-[#6B3410] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 batik-pattern opacity-10" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-10 w-32 h-32 border-2 border-white/10 rounded-full" />
      <div className="absolute top-1/4 right-20 w-20 h-20 border-2 border-white/10 rounded-full" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <CalendarDays className="w-8 h-8 text-[#DAA520]" />
              <span className="text-[#DAA520] font-medium">Reservasi Online</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] text-white mb-4">
              Pesan Meja Anda Sekarang
            </h2>
            <p className="text-lg text-white/80 max-w-xl">
              Hindari antrian dan nikmati pengalaman makan yang lebih nyaman.
              Reservasi mudah dan cepat melalui website kami.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button
              href="/reservasi"
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Reservasi Online
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
