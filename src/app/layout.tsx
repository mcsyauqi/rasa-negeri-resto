import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasa Negeri - Cita Rasa Autentik Nusantara",
  description: "Restoran Indonesia dengan cita rasa autentik nusantara. Nikmati hidangan tradisional Indonesia yang lezat dan berkualitas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
