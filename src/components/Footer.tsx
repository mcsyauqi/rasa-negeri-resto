import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/tentang", label: "Tentang" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/catering", label: "Catering" },
  { href: "/reservasi", label: "Reservasi" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#FDF6E3]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DAA520]">
                <span className="text-xl font-bold text-[#2C1810]">RN</span>
              </div>
              <div>
                <p className="text-xl font-bold text-[#DAA520]">Rasa Negeri</p>
                <p className="text-xs text-[#FDF6E3]/60">Cita Rasa Autentik Nusantara</p>
              </div>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-[#FDF6E3]/70">
              Menyajikan hidangan tradisional Indonesia dengan bahan berkualitas dan resep turun-temurun sejak 2010.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF6E3]/10 transition-colors hover:bg-[#DAA520] hover:text-[#2C1810]"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF6E3]/10 transition-colors hover:bg-[#DAA520] hover:text-[#2C1810]"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#DAA520]">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FDF6E3]/70 transition-colors hover:text-[#DAA520]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#DAA520]">
              Jam Buka
            </h4>
            <div className="space-y-4 text-sm text-[#FDF6E3]/70">
              <div>
                <p className="font-medium text-[#FDF6E3]">Senin - Jumat</p>
                <p>10:00 - 22:00 WIB</p>
              </div>
              <div>
                <p className="font-medium text-[#FDF6E3]">Sabtu - Minggu</p>
                <p>09:00 - 23:00 WIB</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#DAA520]">
              Kontak
            </h4>
            <ul className="space-y-4 text-sm text-[#FDF6E3]/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#DAA520]" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-[#DAA520]" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-[#DAA520]" />
                <span>info@rasanegeri.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FDF6E3]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-[#FDF6E3]/50">
            © {new Date().getFullYear()} Rasa Negeri. All rights reserved.
          </p>
          <p className="text-sm text-[#FDF6E3]/50">
            Dibuat oleh{" "}
            <a
              href="https://creativism.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DAA520] transition-colors hover:underline"
            >
              Creativism Digital Marketing Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
