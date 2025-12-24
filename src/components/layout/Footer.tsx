"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

const menuLinks = [
  { href: "/menu/hidangan-utama", label: "Hidangan Utama" },
  { href: "/menu/appetizer", label: "Appetizer" },
  { href: "/menu/minuman", label: "Minuman" },
  { href: "/menu/dessert", label: "Dessert" },
  { href: "/menu/paket", label: "Paket Hemat" },
];

const infoLinks = [
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/karir", label: "Karir" },
  { href: "/press", label: "Press & Media" },
  { href: "/franchise", label: "Franchise" },
];

const socialLinks = [
  { href: "https://facebook.com/rasanegeri", icon: Facebook, label: "Facebook" },
  { href: "https://instagram.com/rasanegeri", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/rasanegeri", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com/rasanegeri", icon: Youtube, label: "Youtube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
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
              <div className="flex flex-col">
                <span className="text-xl font-bold font-[var(--font-heading)]">
                  Rasa Negeri
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#DAA520]">
                  Cita Rasa Autentik Nusantara
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Restoran masakan Indonesia autentik dengan resep warisan 3 generasi.
              Menyajikan kelezatan Nusantara dari Sabang sampai Merauke.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B4513] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu Column */}
          <div>
            <h3 className="text-lg font-bold font-[var(--font-heading)] mb-6">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#DAA520] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-bold font-[var(--font-heading)] mb-6">
              Informasi
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#DAA520] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold font-[var(--font-heading)] mb-6">
              Kontak
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Reservasi</p>
                  <a
                    href="tel:+62215551234"
                    className="text-white hover:text-[#DAA520] transition-colors"
                  >
                    (021) 555-RASA
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">WhatsApp</p>
                  <a
                    href="https://wa.me/628118888RASA"
                    className="text-white hover:text-[#DAA520] transition-colors"
                  >
                    0811-8888-RASA
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a
                    href="mailto:halo@rasanegeri.id"
                    className="text-white hover:text-[#DAA520] transition-colors"
                  >
                    halo@rasanegeri.id
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Jam Operasional</p>
                  <p className="text-white">11:00 - 22:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Rasa Negeri Restaurant. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Website ini dibuat dengan ❤️ oleh{" "}
              <a
                href="https://creativism.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DAA520] hover:underline"
              >
                Creativism Digital Marketing Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
