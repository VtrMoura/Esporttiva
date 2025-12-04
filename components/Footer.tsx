export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-accent font-bold text-lg mb-4">esporttiva</h3>
            <p className="text-zinc-400 text-sm">
              Plataforma de reservas esportivas. Jogue. Conecte. Viva o esporte.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="/sobre" className="hover:text-accent transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/ajuda" className="hover:text-accent transition-colors">
                  Ajuda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <p className="text-zinc-400 text-sm">contato@esporttiva.com</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          © 2024 esporttiva. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
