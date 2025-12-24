"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    alt: "Interior Restoran",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=400&auto=format&fit=crop",
    alt: "Eksterior",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400&auto=format&fit=crop",
    alt: "Private Room",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop",
    alt: "Dapur Terbuka",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=400&auto=format&fit=crop",
    alt: "Detail Dekor",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=400&auto=format&fit=crop",
    alt: "Taman",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Suasana Hangat Khas Indonesia"
          subtitle="Interior dengan sentuhan budaya Nusantara yang nyaman"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${image.span} relative group overflow-hidden rounded-xl`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[150px] md:min-h-[200px] group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button href="/galeri" variant="outline">
            Lihat Semua Galeri
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
