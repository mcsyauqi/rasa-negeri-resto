import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasa Negeri - Cita Rasa Autentik Nusantara",
  description: "Restoran Indonesia dengan cita rasa autentik nusantara. Nikmati hidangan tradisional Indonesia yang lezat dan berkualitas.",
  keywords: "restoran indonesia, makanan indonesia, nasi goreng, rendang, sate, kuliner nusantara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
