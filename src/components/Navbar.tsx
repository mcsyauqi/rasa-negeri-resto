"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/tentang", label: "Tentang" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/catering", label: "Catering" },
  { href: "/reservasi", label: "Reservasi" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#2C1810]/10 bg-[#FDF6E3]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B4513]">
              <span className="text-lg font-bold text-[#FDF6E3]">RN</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-[#2C1810]">Rasa Negeri</p>
              <p className="text-xs text-[#8B4513]">Cita Rasa Autentik</p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#3D2314] transition-colors hover:bg-[#8B4513]/10 hover:text-[#8B4513]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/reservasi"
              className="hidden rounded-full bg-[#8B4513] px-5 py-2 text-sm font-semibold text-[#FDF6E3] transition-colors hover:bg-[#2C1810] sm:block"
            >
              Reservasi
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2C1810] text-[#FDF6E3] lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-80 bg-[#2C1810] p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="text-xl font-bold text-[#DAA520]">Menu</p>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF6E3]/10 text-[#FDF6E3]"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-1">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[#FDF6E3] transition-colors hover:bg-[#FDF6E3]/10"
                    >
                      <span className="font-medium">{link.label}</span>
                      <ChevronRight size={18} className="text-[#DAA520]" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
