import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/galeri", label: "Galeri" },
  { href: "/catering", label: "Catering" },
  { href: "/reservasi", label: "Reservasi" },
  { href: "/kontak", label: "Kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C1810] text-[#FDF6E3]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-[#DAA520]">
              Rasa Negeri
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-[#FDF6E3]/80">
              Cita Rasa Autentik Nusantara. Menyajikan hidangan tradisional Indonesia dengan bahan berkualitas dan resep turun-temurun.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF6E3]/10 transition-colors hover:bg-[#DAA520]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF6E3]/10 transition-colors hover:bg-[#DAA520]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-[#DAA520]">Menu Cepat</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#FDF6E3]/80 transition-colors hover:text-[#DAA520]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-[#DAA520]">Jam Operasional</h4>
            <ul className="flex flex-col gap-2 text-sm text-[#FDF6E3]/80">
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#DAA520]" />
                <div>
                  <p>Senin - Jumat</p>
                  <p>10:00 - 22:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#DAA520]" />
                <div>
                  <p>Sabtu - Minggu</p>
                  <p>09:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-[#DAA520]">Kontak</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#FDF6E3]/80">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#DAA520]" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#DAA520]" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#DAA520]" />
                <span>info@rasanegeri.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FDF6E3]/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-[#FDF6E3]/60">
              &copy; {new Date().getFullYear()} Rasa Negeri. Semua hak dilindungi.
            </p>
            <p className="text-sm text-[#FDF6E3]/60">
              Website dibuat oleh{" "}
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
      </div>
    </footer>
  );
}
