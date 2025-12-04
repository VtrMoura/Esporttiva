import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccessibilityControls from "@/components/AccessibilityControls";

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
        
        {/* VLibras integrado via HTML puro */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <div vw class="enabled">
                <div vw-access-button></div>
                <div vw-plugin-wrapper>
                  <div class="vw-plugin-top-wrapper"></div>
                </div>
              </div>

              <script src="https://plugin.vlibras.gov.br/app/vlibras-plugin.js"></script>
              <script>
                document.addEventListener("DOMContentLoaded", function() {
                  new window.VLibras.Widget("https://plugin.vlibras.gov.br/app");
                });
              </script>
            `,
          }}
        />

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
