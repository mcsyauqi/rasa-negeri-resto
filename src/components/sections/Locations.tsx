"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const locations = [
  {
    name: "Rasa Negeri Kemang",
    badge: "Flagship",
    address: "Jl. Kemang Raya No. 45, Jakarta Selatan",
    capacity: "150 kursi + Private Room",
    hours: "11:00 - 22:00",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Rasa Negeri SCBD",
    badge: null,
    address: "Pacific Place Mall, Lt. 3, SCBD",
    capacity: "80 kursi",
    hours: "10:00 - 22:00",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Rasa Negeri PIK",
    badge: null,
    address: "Jl. Pantai Indah Utara No. 12, PIK",
    capacity: "120 kursi + Outdoor",
    hours: "11:00 - 23:00",
    image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=500&auto=format&fit=crop",
  },
];

export default function Locations() {
  return (
    <section className="py-20 bg-[#FDF6E3]">
      <Container>
        <SectionTitle
          title="Temukan Rasa Negeri Terdekat"
          subtitle="Kunjungi cabang kami yang tersebar di berbagai lokasi strategis Jakarta"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {location.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                    {location.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-4">
                  {location.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D2314]/70">{location.address}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D2314]/70">{location.capacity}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#3D2314]/70">{location.hours}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#8B4513]/10 flex gap-3">
                  <Button href="/reservasi" size="sm" className="flex-1">
                    Reservasi
                  </Button>
                  <Button href="/lokasi" variant="outline" size="sm" className="flex-1">
                    Lihat Peta
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
