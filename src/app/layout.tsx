import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasa Negeri | Restoran Masakan Indonesia Autentik Jakarta",
  description: "Restoran Indonesia premium dengan resep warisan 3 generasi. Rendang, gudeg, soto betawi autentik. Reservasi online, catering tersedia.",
  keywords: ["restoran indonesia", "masakan indonesia", "rendang", "gudeg", "soto betawi", "restoran jakarta", "catering indonesia"],
  authors: [{ name: "Rasa Negeri" }],
  openGraph: {
    title: "Rasa Negeri | Restoran Masakan Indonesia Autentik Jakarta",
    description: "Restoran Indonesia premium dengan resep warisan 3 generasi. Rendang, gudeg, soto betawi autentik.",
    type: "website",
    locale: "id_ID",
  },
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
