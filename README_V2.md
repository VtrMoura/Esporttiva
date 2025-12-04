# 🏆 Esporttiva v2.0 - Plataforma de Reservas Esportivas

> **Jogue. Conecte. Viva o esporte.**

Uma plataforma moderna e minimalista para reservar espaços esportivos, criar campeonatos e encontrar pessoas para jogar. Pense nisso como o "Airbnb dos espaços esportivos".

## 🎯 Sobre o Projeto

**Esporttiva** é uma aplicação web completa construída com Next.js 14, TypeScript e Tailwind CSS, oferecendo uma experiência intuitiva para atletas e entusiastas do esporte encontrarem espaços, organizarem campeonatos e formarem grupos para jogar.

## 🆕 Novidades da v2.0

### ✅ Melhorias Implementadas

1. **Modo Claro/Escuro Corrigido**
   - Cores ajustadas para evitar texto branco em fundo claro
   - Fundo cinza claro (#f5f5f5) em vez de branco puro
   - Texto preto escuro (#1a1a1a) para máxima legibilidade

2. **6 Recursos de Acessibilidade** (5 + VLibras)
   - ☀️ **Modo Claro/Escuro** - Toggle persistido
   - 👁️ **Modo Daltônico** - Alto contraste
   - 📏 **Régua de Leitura** - Highlight horizontal
   - 🔤 **Aumentar Fonte** - 120% de tamanho (NOVO!)
   - 🎯 **Modo Foco** - Outline verde em elementos focados (NOVO!)
   - 🤟 **VLibras** - Tradutor para LIBRAS

3. **Imagens Reais nos Espaços**
   - Fotos de quadras poliesportivas
   - Campos de futebol society
   - Quadras de beach tennis

4. **Hero Redesenhado**
   - Imagem de fundo com atletas correndo
   - Overlay escuro para legibilidade
   - Design inspirado na referência fornecida

5. **Botão Funcional de Testes**
   - Executa Cypress via API backend
   - Feedback visual durante execução
   - Resultados exibidos em alert

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login e cadastro mock (localStorage)
- Autenticação JWT simulada
- Proteção de rotas privadas

### 🏟️ Gestão de Espaços
- Listar espaços esportivos com **imagens reais**
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

## ♿ Recursos de Acessibilidade (6 Total)

### 1. VLibras 🤟
- Tradutor automático para Língua Brasileira de Sinais
- Botão de ativação integrado nos controles

### 2. Modo Claro/Escuro ☀️🌙
- Alternância entre temas
- Persistência no localStorage
- Cores otimizadas para legibilidade em ambos os modos

### 3. Modo Daltônico 👁️
- Alto contraste (150%)
- Saturação reduzida (80%)
- Facilita visualização para pessoas com daltonismo

### 4. Régua de Leitura 📏
- Highlight horizontal que acompanha o mouse
- Fundo semi-transparente verde accent
- Facilita leitura de textos longos

### 5. Aumentar Fonte 🔤 (NOVO!)
- Aumenta todos os textos em 120%
- Aplica-se a títulos, parágrafos, botões e inputs
- Melhora legibilidade para pessoas com baixa visão

### 6. Modo Foco 🎯 (NOVO!)
- Destaca elementos em foco com outline verde de 3px
- Facilita navegação por teclado
- Essencial para acessibilidade

## 🎨 Design

### Paleta de Cores

**Modo Escuro (padrão)**
- Fundo: `#000000` (preto)
- Texto: `#ffffff` (branco)
- Accent: `#00C2A8` (verde água)

**Modo Claro**
- Fundo: `#f5f5f5` (cinza claro)
- Texto: `#1a1a1a` (preto escuro)
- Accent: `#00C2A8` (verde água)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Tamanhos**: Responsivos e escaláveis

### Hero
- Imagem de fundo: Atletas correndo em pista
- Overlay: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))`
- Altura: 85vh
- Background attachment: fixed (parallax)

## 🛠️ Tecnologias

- **Framework**: Next.js 14.2.33 (App Router)
- **Linguagem**: TypeScript 5+
- **Estilização**: Tailwind CSS 3.4+
- **Formulários**: React Hook Form 7+ + Zod 4+
- **Testes**: Cypress 15+
- **Gerenciador**: pnpm

## 📁 Estrutura do Projeto

```
esporttiva/
├── app/
│   ├── page.tsx                    # Home com hero
│   ├── sobre/page.tsx              # Sobre
│   ├── ajuda/page.tsx              # Ajuda/FAQ
│   ├── login/page.tsx              # Login
│   ├── cadastro/page.tsx           # Cadastro
│   ├── dashboard/page.tsx          # Dashboard
│   ├── espacos/
│   │   ├── page.tsx                # Lista de espaços
│   │   └── [id]/page.tsx           # Detalhes do espaço
│   ├── campeonatos/page.tsx        # Campeonatos
│   ├── patotas/page.tsx            # Patotas
│   ├── calendario/page.tsx         # Calendário
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   └── register/route.ts
│   │   ├── spaces/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   ├── bookings/route.ts
│   │   ├── tournaments/route.ts
│   │   ├── pickups/route.ts
│   │   └── run-tests/route.ts      # API para rodar Cypress
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── AccessibilityControls.tsx   # 6 recursos de acessibilidade
├── lib/
│   ├── auth.ts
│   └── helpers.ts
├── data/
│   └── mock.ts
├── cypress/
│   ├── e2e/
│   │   ├── home.cy.ts
│   │   └── auth.cy.ts
│   └── cypress.config.ts
├── public/
│   └── images/
│       ├── hero-bg.jpg             # Imagem do hero
│       ├── quadra-poliesportiva.jpeg
│       ├── campo-society.png
│       └── beach-tennis.jpg
└── package.json
```

## 🚀 Como Executar

### Instalação

```bash
cd esporttiva
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Acesse: `http://localhost:3000`

### Build para Produção

```bash
pnpm build
pnpm start
```

## 🧪 Testes

### Via Interface (NOVO!)

Clique no botão **"🧪 Rodar Testes"** na Navbar para executar os testes Cypress diretamente pelo navegador.

### Via Terminal

```bash
# Modo headless
pnpm test

# Modo interativo
pnpm cypress:open
```

## 🔑 Credenciais de Teste

```
Email: teste@email.com
Senha: senha123
```

Ou crie uma nova conta na página de cadastro.

## 📄 Páginas

### Públicas
- `/` - Home (Hero + 3 cards)
- `/sobre` - Sobre o projeto
- `/ajuda` - FAQ
- `/login` - Login
- `/cadastro` - Cadastro

### Privadas
- `/dashboard` - Painel principal
- `/espacos` - Espaços esportivos
- `/espacos/[id]` - Detalhes e reserva
- `/campeonatos` - Campeonatos
- `/patotas` - Patotas
- `/calendario` - Calendário

## 🎯 APIs Mock

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/spaces`
- `POST /api/spaces`
- `GET /api/spaces/[id]`
- `POST /api/bookings`
- `POST /api/tournaments`
- `GET /api/pickups`
- `POST /api/pickups`
- `POST /api/run-tests` ⭐ **NOVO!**

## 📊 Estatísticas

- **11 páginas** funcionais
- **10+ componentes** reutilizáveis
- **10 APIs** mock
- **6 recursos** de acessibilidade
- **2 suites** de testes E2E
- **~3500 linhas** de código
- **Build sem erros** ✅

## ✅ Checklist Completo

- [x] Next.js 14 com App Router
- [x] TypeScript
- [x] Tailwind CSS
- [x] Fonte Inter
- [x] Modo claro/escuro **CORRIGIDO**
- [x] 6 recursos de acessibilidade (5 + VLibras)
- [x] Hero com imagem de fundo **NOVO**
- [x] Imagens reais nos espaços **NOVO**
- [x] Botão funcional para rodar Cypress **NOVO**
- [x] Autenticação mock
- [x] CRUD de espaços
- [x] Sistema de reservas
- [x] Patotas e campeonatos
- [x] Calendário integrado
- [x] Testes Cypress
- [x] Build sem erros
- [x] Design minimalista

## 🎨 Comparação v1.0 vs v2.0

| Recurso | v1.0 | v2.0 |
|---------|------|------|
| Modo Claro | ⚠️ Texto branco em fundo claro | ✅ Cores corrigidas |
| Acessibilidade | 2 recursos | 6 recursos |
| Hero | Texto simples | Imagem de fundo |
| Espaços | Placeholder | Imagens reais |
| Testes | API mock simples | Execução real via Cypress |
| Design | Básico | Inspirado em referência |

## 🐛 Problemas Conhecidos

- VLibras pode demorar alguns segundos para carregar
- Régua de leitura funciona apenas com mouse
- Dados são perdidos ao recarregar (mock em memória)
- Testes Cypress podem demorar ~30s para executar

## 🔮 Próximos Passos

- [ ] Integrar com backend real (PostgreSQL + Prisma)
- [ ] Sistema de pagamentos (Stripe)
- [ ] Chat entre usuários (WebSocket)
- [ ] Avaliações e comentários
- [ ] Notificações push
- [ ] App mobile (React Native)
- [ ] Upload de imagens (S3)
- [ ] Geolocalização (Google Maps)

## 📝 Licença

MIT © 2024 Esporttiva

---

**Desenvolvido com ❤️ para a comunidade esportiva brasileira**

🏆 **Esporttiva** - Jogue. Conecte. Viva o esporte.
