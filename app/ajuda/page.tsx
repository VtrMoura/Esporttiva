import Card from "@/components/ui/Card";

export default function Ajuda() {
  const faqs = [
    {
      question: "Como faço para reservar um espaço?",
      answer:
        "Navegue até a página de Espaços, escolha o local desejado, selecione data e horário disponíveis e confirme a reserva.",
    },
    {
      question: "Posso cancelar uma reserva?",
      answer:
        "Sim, você pode cancelar reservas através do seu Dashboard, desde que respeite o prazo de cancelamento de cada espaço.",
    },
    {
      question: "Como criar um campeonato?",
      answer:
        "Acesse a página de Campeonatos, clique em 'Criar Campeonato', preencha as informações e adicione os times participantes.",
    },
    {
      question: "O que são patotas?",
      answer:
        "Patotas são grupos de pessoas que se reúnem regularmente para jogar. Você pode criar sua própria patota ou entrar em uma existente.",
    },
    {
      question: "Como funciona o pagamento?",
      answer:
        "Atualmente, a plataforma é apenas para organização. O pagamento deve ser combinado diretamente com o proprietário do espaço.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-8">Central de Ajuda</h1>

      <p className="text-zinc-300 mb-12">
        Encontre respostas para as perguntas mais frequentes sobre a plataforma.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <h3 className="text-lg font-semibold text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-zinc-400">{faq.answer}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
        <h2 className="text-xl font-bold text-white mb-2">
          Ainda precisa de ajuda?
        </h2>
        <p className="text-zinc-400">
          Entre em contato conosco através do email:{" "}
          <a
            href="mailto:contato@esporttiva.com"
            className="text-accent hover:underline"
          >
            contato@esporttiva.com
          </a>
        </p>
      </div>
    </div>
  );
}
