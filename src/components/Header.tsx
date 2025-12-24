"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/catering", label: "Catering" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[#FDF6E3]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#8B4513] flex items-center justify-center">
              <span className="text-[#DAA520] text-xl">R</span>
            </div>
            <div>
              <div className={cn("text-xl font-bold font-heading", isScrolled ? "text-[#2C1810]" : "text-white")}>
                Rasa Negeri
              </div>
              <div className={cn("text-[10px] tracking-widest uppercase", isScrolled ? "text-[#8B4513]" : "text-[#DAA520]")}>
                Cita Rasa Autentik Nusantara
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  isScrolled
                    ? "text-[#3D2314] hover:bg-[#8B4513]/10"
                    : "text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+62215551234" className={cn("flex items-center gap-2 text-sm", isScrolled ? "text-[#3D2314]" : "text-white")}>
              <Phone className="w-4 h-4" />
              (021) 555-RASA
            </a>
            <Link
              href="/reservasi"
              className="px-6 py-2.5 bg-[#8B4513] text-white text-sm font-medium rounded-full hover:bg-[#6B3410] transition-colors"
            >
              Reservasi
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("lg:hidden p-2 rounded-lg", isScrolled ? "text-[#2C1810]" : "text-white")}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#FDF6E3] border-t border-[#8B4513]/10">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-[#3D2314] font-medium hover:bg-[#8B4513]/10 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservasi"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-6 py-3 bg-[#8B4513] text-white font-medium rounded-full text-center"
            >
              Reservasi Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
