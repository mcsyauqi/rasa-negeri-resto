import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, Clock } from "lucide-react";

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

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#8B4513] flex items-center justify-center">
                <span className="text-[#DAA520] text-xl">R</span>
              </div>
              <div>
                <div className="text-xl font-bold font-heading">Rasa Negeri</div>
                <div className="text-[10px] tracking-widest uppercase text-[#DAA520]">
                  Cita Rasa Autentik Nusantara
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm mb-6">
              Restoran masakan Indonesia autentik dengan resep warisan 3 generasi.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8B4513] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-6">Menu</h3>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#DAA520] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-6">Informasi</h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-[#DAA520] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-heading mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Reservasi</p>
                  <a href="tel:+62215551234" className="text-white hover:text-[#DAA520]">(021) 555-RASA</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#DAA520] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a href="mailto:halo@rasanegeri.id" className="text-white hover:text-[#DAA520]">halo@rasanegeri.id</a>
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
