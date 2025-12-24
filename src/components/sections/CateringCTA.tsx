"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const features = [
  "Menu Customizable",
  "Chef On-Site",
  "Min. 50 pax",
];

export default function CateringCTA() {
  return (
    <section className="py-20 bg-[#2C1810] batik-pattern relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B4513]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DAA520]/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#DAA520]/20 text-[#DAA520] text-sm font-medium rounded-full mb-6">
              Layanan Catering
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-heading)] text-white mb-6">
              Butuh Catering untuk Acara Anda?
            </h2>

            <p className="text-lg text-white/70 mb-8">
              Kami melayani catering untuk acara kantor, pernikahan, hingga arisan keluarga.
              Hadirkan cita rasa autentik Nusantara di setiap momen spesial Anda.
            </p>

            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-[#DAA520] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#2C1810]" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button href="/catering" variant="secondary" size="lg">
              Konsultasi Catering
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
