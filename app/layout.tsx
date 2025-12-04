import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityControls from "@/components/AccessibilityControls";

// IMPORTA O VLibras AQUI 👇
import VLibras from "@/components/VLibras";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "esporttiva - Plataforma de Reservas Esportivas",
  description: "Jogue. Conecte. Viva o esporte.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>

        {/* VLibras funcionando */}
        <VLibras />

        {/* Cabeçalho */}
        <Navbar />

        {/* Acessibilidade */}
        <AccessibilityControls />

        {/* Conteúdo */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Rodapé */}
        <Footer />
      </body>
    </html>
  );
}
