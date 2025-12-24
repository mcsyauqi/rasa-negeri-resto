"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Users, Car, Music, Utensils, TreePine, Navigation } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { locations } from "@/lib/data";

const featureIcons: Record<string, React.ElementType> = {
  "Private Room": Users,
  "Outdoor Seating": TreePine,
  "Valet Parking": Car,
  "Live Music Weekend": Music,
  "Mall Access": MapPin,
  "Meeting Room": Users,
  "Delivery": Utensils,
  "Beachfront View": TreePine,
  "Kids Playground": Users,
};

export default function LokasiPage() {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-[#2C1810] overflow-hidden">
          <div className="absolute inset-0 batik-pattern opacity-20" />
          <Container className="relative z-10 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-[var(--font-heading)] text-white mb-4"
            >
              Lokasi Kami
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/70 max-w-2xl mx-auto"
            >
              Temukan cabang Rasa Negeri terdekat dari lokasi Anda
            </motion.p>
          </Container>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-[#FDF6E3]">
          <Container>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Location Cards */}
              <div className="lg:col-span-1 space-y-4">
                {locations.map((location) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => setActiveLocation(location)}
                    className={`cursor-pointer p-6 rounded-xl transition-all ${
                      activeLocation.id === location.id
                        ? "bg-[#8B4513] text-white shadow-lg"
                        : "bg-white hover:bg-[#8B4513]/10"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                          activeLocation.id === location.id
                            ? "bg-white/20"
                            : "bg-[#8B4513]/10"
                        }`}
                      >
                        <MapPin
                          className={`w-6 h-6 ${
                            activeLocation.id === location.id
                              ? "text-white"
                              : "text-[#8B4513]"
                          }`}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold font-[var(--font-heading)]">
                            {location.name}
                          </h3>
                          {location.badge && (
                            <span className="px-2 py-0.5 bg-[#DAA520] text-[#2C1810] text-xs font-bold rounded-full">
                              {location.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-sm ${
                            activeLocation.id === location.id
                              ? "text-white/80"
                              : "text-[#3D2314]/70"
                          }`}
                        >
                          {location.address}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Selected Location Details */}
              <div className="lg:col-span-2">
                <motion.div
                  key={activeLocation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-72">
                    <img
                      src={activeLocation.image}
                      alt={activeLocation.name}
                      className="w-full h-full object-cover"
                    />
                    {activeLocation.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-[#DAA520] text-[#2C1810] text-sm font-bold rounded-full">
                        {activeLocation.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold font-[var(--font-heading)] text-[#2C1810] mb-6">
                      {activeLocation.name}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-[#2C1810]">Alamat</p>
                            <p className="text-sm text-[#3D2314]/70">
                              {activeLocation.fullAddress}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-[#2C1810]">Jam Operasional</p>
                            <p className="text-sm text-[#3D2314]/70">{activeLocation.hours}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-[#2C1810]">Telepon</p>
                            <p className="text-sm text-[#3D2314]/70">{activeLocation.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-[#8B4513] flex-shrink-0 mt-1" />
                          <div>
                            <p className="font-medium text-[#2C1810]">Kapasitas</p>
                            <p className="text-sm text-[#3D2314]/70">{activeLocation.capacity}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="font-bold text-[#2C1810] mb-4">Fasilitas</h3>
                      <div className="flex flex-wrap gap-3">
                        {activeLocation.features.map((feature) => {
                          const Icon = featureIcons[feature] || MapPin;
                          return (
                            <div
                              key={feature}
                              className="flex items-center gap-2 px-4 py-2 bg-[#8B4513]/10 rounded-full"
                            >
                              <Icon className="w-4 h-4 text-[#8B4513]" />
                              <span className="text-sm text-[#3D2314]">{feature}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <Button href="/reservasi">Reservasi Meja</Button>
                      <Button
                        href={activeLocation.mapUrl}
                        variant="outline"
                        className="inline-flex items-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Petunjuk Arah
                      </Button>
                      <a
                        href={`https://wa.me/${activeLocation.whatsapp.replace(/-/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Map Placeholder */}
                <div className="mt-8 bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-64 bg-[#8B4513]/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-[#8B4513]/30 mx-auto mb-4" />
                      <p className="text-[#3D2314]/50">Peta Interaktif</p>
                      <a
                        href={activeLocation.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B4513] hover:underline text-sm"
                      >
                        Buka di Google Maps
                      </a>
                    </div>
                  </div>
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
