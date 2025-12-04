"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [runningTests, setRunningTests] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-accent">
          esporttiva
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/sobre" className="text-white hover:text-accent transition-colors">
            Sobre
          </Link>
          <Link href="/ajuda" className="text-white hover:text-accent transition-colors">
            Ajuda
          </Link>

          <button
            onClick={async () => {
              if (runningTests) return;
              setRunningTests(true);
              try {
                const res = await fetch("/api/run-tests", { method: "POST" });
                const data = await res.json();
                if (data.success) {
                  alert("✅ Testes executados com sucesso!\n\n" + data.output);
                } else {
                  alert("❌ Erro ao executar testes:\n\n" + data.errors);
                }
              } catch (error) {
                alert("❌ Erro ao executar testes: " + error);
              } finally {
                setRunningTests(false);
              }
            }}
            className={`text-white hover:text-accent transition-colors text-sm ${
              runningTests ? "opacity-50 cursor-not-allowed" : ""
            }`}
            title="Rodar Testes Cypress"
            disabled={runningTests}
          >
            {runningTests ? "⏳ Executando..." : "🧪 Rodar Testes"}
          </button>

          {isLoggedIn ? (
            <>
              <Link href="/dashboard" className="text-white hover:text-accent transition-colors">
                Dashboard
              </Link>
              <Button onClick={handleLogout} variant="outline" className="!py-2">
                Sair
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" className="!py-2">
                  Entrar
                </Button>
              </Link>
              <Link href="/cadastro">
                <Button className="!py-2">Cadastrar</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
