"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    quote: "Rendangnya luar biasa! Seperti masakan nenek saya di Padang. Pasti balik lagi.",
    author: "Budi Santoso",
    role: "Food Blogger",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Tempat favorit untuk kumpul keluarga. Suasananya nyaman, makanannya konsisten enak.",
    author: "Keluarga Wijaya",
    role: null,
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Best soto betawi in town! Kuahnya creamy, dagingnya empuk. 10/10!",
    author: "Amanda Putri",
    role: "@jakartafoodie",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Apa Kata Mereka"
          subtitle="Testimoni pelanggan setia Rasa Negeri"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-[#FDF6E3] rounded-2xl p-8"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#DAA520] text-[#DAA520]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#3D2314] text-lg leading-relaxed mb-6 font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-[#2C1810]">{testimonial.author}</div>
                  {testimonial.role && (
                    <div className="text-sm text-[#8B4513]">{testimonial.role}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
