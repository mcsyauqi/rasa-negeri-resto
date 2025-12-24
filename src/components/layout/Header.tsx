"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  {
    href: "/menu",
    label: "Menu",
    submenu: [
      { href: "/menu/hidangan-utama", label: "Hidangan Utama" },
      { href: "/menu/appetizer", label: "Appetizer & Snack" },
      { href: "/menu/sambal", label: "Sambal Nusantara" },
      { href: "/menu/minuman", label: "Minuman" },
      { href: "/menu/dessert", label: "Dessert" },
      { href: "/menu/paket", label: "Paket Keluarga" },
    ],
  },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/catering", label: "Catering" },
  { href: "/kontak", label: "Kontak" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#FDF6E3]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="18" fill="#8B4513" />
                <path
                  d="M20 8C20 8 12 14 12 22C12 26 15 30 20 30C25 30 28 26 28 22C28 14 20 8 20 8Z"
                  fill="#DAA520"
                />
                <path
                  d="M20 12C20 12 15 16 15 21C15 24 17 27 20 27C23 27 25 24 25 21C25 16 20 12 20 12Z"
                  fill="#FDF6E3"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-xl font-bold font-[var(--font-heading)] transition-colors",
                  isScrolled ? "text-[#2C1810]" : "text-white"
                )}
              >
                Rasa Negeri
              </span>
              <span
                className={cn(
                  "text-[10px] tracking-widest uppercase transition-colors",
                  isScrolled ? "text-[#8B4513]" : "text-[#DAA520]"
                )}
              >
                Cita Rasa Autentik Nusantara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.href)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-lg hover:bg-[#8B4513]/10",
                    isScrolled ? "text-[#3D2314]" : "text-white"
                  )}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Submenu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-[#8B4513]/10 overflow-hidden min-w-[200px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-4 py-3 text-sm text-[#3D2314] hover:bg-[#8B4513]/10 hover:text-[#8B4513] transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+62215551234"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-[#3D2314]" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              (021) 555-RASA
            </a>
            <Link
              href="/reservasi"
              className="px-6 py-2.5 bg-[#8B4513] text-white text-sm font-medium rounded-full hover:bg-[#6B3410] transition-colors shadow-lg shadow-[#8B4513]/30"
            >
              Reservasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-[#2C1810] hover:bg-[#8B4513]/10"
                : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDF6E3] border-t border-[#8B4513]/10"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => !link.submenu && setIsOpen(false)}
                    className="block px-4 py-3 text-[#3D2314] font-medium hover:bg-[#8B4513]/10 rounded-lg"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-[#3D2314]/70 hover:text-[#8B4513]"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-[#8B4513]/10">
                <Link
                  href="/reservasi"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-[#8B4513] text-white font-medium rounded-full"
                >
                  Reservasi Sekarang
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
