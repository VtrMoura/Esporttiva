# 🏆 Esporttiva - Plataforma de Reservas Esportivas

Uma plataforma moderna e minimalista para reservar espaços esportivos, criar campeonatos e encontrar pessoas para jogar. Pense nisso como o "Airbnb dos espaços esportivos".

## 🎯 Sobre o Projeto

**Esporttiva** é uma aplicação web completa construída com Next.js 14, TypeScript e Tailwind CSS, oferecendo uma experiência intuitiva para atletas e entusiastas do esporte encontrarem espaços, organizarem campeonatos e formarem grupos para jogar.

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login e cadastro mock (localStorage)
- Autenticação JWT simulada
- Proteção de rotas privadas

### 🏟️ Gestão de Espaços
- Listar espaços esportivos disponíveis
- Visualizar detalhes de cada espaço
- Cadastrar novos espaços
- Sistema de reservas com bloqueio de horários

### 👥 Patotas (Grupos Esportivos)
- Criar grupos para jogar
- Entrar em patotas existentes
- Visualizar participantes e vagas disponíveis

### 🏆 Campeonatos
- Criar torneios e campeonatos
- Gerenciar times participantes
- Acompanhar competições

### 📅 Calendário
- Visualizar todos os eventos agendados
- Integração com reservas, patotas e campeonatos

## ♿ Recursos de Acessibilidade

O projeto implementa **5 recursos de acessibilidade**:

1. **VLibras** - Tradutor para Língua Brasileira de Sinais
2. **Modo Claro/Escuro** - Alternância de temas com persistência
3. **Modo Daltônico** - Alto contraste para pessoas com daltonismo
4. **Redutor de Animações** - Respeita `prefers-reduced-motion`
5. **Régua de Leitura** - Highlight horizontal que acompanha o mouse

## 🎨 Design

- **Tema**: Minimalista e moderno
- **Fonte**: Inter (Google Fonts)
- **Cores**:
  - Fundo: Preto (`#000000`)
  - Texto: Branco (`#FFFFFF`)
  - Acento: Verde água (`#00C2A8`)

## 🛠️ Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Formulários**: React Hook Form + Zod
- **Testes**: Cypress
- **Gerenciador de Pacotes**: pnpm

## 📁 Estrutura do Projeto

```
esporttiva/
├── app/
│   ├── (public)/          # Rotas públicas
│   │   ├── page.tsx       # Home
│   │   ├── sobre/
│   │   ├── ajuda/
│   │   ├── login/
│   │   └── cadastro/
│   ├── (app)/             # Rotas privadas
│   │   ├── dashboard/
│   │   ├── espacos/
│   │   ├── campeonatos/
│   │   ├── patotas/
│   │   └── calendario/
│   ├── api/               # API Routes (mock)
│   │   ├── auth/
│   │   ├── spaces/
│   │   ├── bookings/
│   │   ├── tournaments/
│   │   └── pickups/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                # Componentes base
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── AccessibilityControls.tsx
├── lib/
│   ├── auth.ts            # Autenticação mock
│   └── helpers.ts         # Funções auxiliares
├── data/
│   └── mock.ts            # Dados mock
├── cypress/
│   └── e2e/               # Testes E2E
│       ├── home.cy.ts
│       └── auth.cy.ts
└── cypress.config.ts
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- pnpm (ou npm/yarn)

### Instalação

```bash
# Clone o repositório
cd esporttiva

# Instale as dependências
pnpm install

# Execute em modo de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Compilar o projeto
pnpm build

# Executar versão de produção
pnpm start
```

## 🧪 Testes

### Executar Testes Cypress

```bash
# Modo interativo
pnpm cypress:open

# Modo headless
pnpm cypress:run
# ou
pnpm test
```

### Rodar Testes pela Interface

Clique no botão **🧪 Testes** na Navbar para executar uma simulação de testes via API mock.

## 📄 Páginas Disponíveis

### Públicas
- `/` - Home (Hero + Cards de funcionalidades)
- `/sobre` - Sobre o projeto
- `/ajuda` - FAQ e ajuda
- `/login` - Login de usuários
- `/cadastro` - Cadastro de novos usuários

### Privadas (requer login)
- `/dashboard` - Painel principal
- `/espacos` - Listagem e cadastro de espaços
- `/espacos/[id]` - Detalhes e reserva de espaço
- `/campeonatos` - Criar e gerenciar campeonatos
- `/patotas` - Encontrar e criar grupos para jogar
- `/calendario` - Visualizar todos os eventos

## 🔑 Credenciais de Teste

Para testar o sistema de autenticação, use qualquer email/senha:

```
Email: teste@email.com
Senha: senha123
```

Ou crie uma nova conta na página de cadastro.

## 🎯 APIs Mock

Todas as APIs são simuladas em memória:

- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Registro
- `GET /api/spaces` - Listar espaços
- `POST /api/spaces` - Criar espaço
- `GET /api/spaces/[id]` - Detalhes do espaço
- `POST /api/bookings` - Criar reserva
- `POST /api/tournaments` - Criar campeonato
- `GET /api/pickups` - Listar patotas
- `POST /api/pickups` - Criar patota
- `GET /api/tests` - Simular execução de testes

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "next": "14.2.33",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.66.1",
    "@hookform/resolvers": "^5.2.2",
    "zod": "^4.1.13",
    "clsx": "^2.1.1"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "cypress": "^15.7.0"
  }
}
```

## 🎨 Customização

### Cores

Edite `tailwind.config.ts` para alterar as cores:

```typescript
colors: {
  accent: "#00C2A8",  // Verde água
  // Adicione suas cores aqui
}
```

### Fonte

A fonte Inter é carregada via Google Fonts no `app/layout.tsx`.

## 🐛 Problemas Conhecidos

- O VLibras pode demorar alguns segundos para carregar
- A régua de leitura funciona apenas com mouse (não em touch)
- Os dados são perdidos ao recarregar a página (mock em memória)

## 🔮 Próximos Passos

- [ ] Integrar com backend real
- [ ] Adicionar sistema de pagamentos
- [ ] Implementar chat entre usuários
- [ ] Sistema de avaliações e comentários
- [ ] Notificações push
- [ ] App mobile com React Native

## 📝 Licença

Este projeto foi criado para fins educacionais e de demonstração.

## 👨‍💻 Autor

Desenvolvido com ❤️ para a comunidade esportiva brasileira.

---

**Esporttiva** - Jogue. Conecte. Viva o esporte. 🏆
