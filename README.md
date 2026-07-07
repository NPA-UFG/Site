# Site NPA — Núcleo de Pesquisas Aeroespaciais

Site institucional do **Núcleo de Pesquisas Aeroespaciais (NPA/UFG)**.
*Ad Astra Per Aspera.*

## Tecnologias

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 3**
- **ESLint** (`next/core-web-vitals` + `next/typescript`)
- **react-icons** (ícones de marca) e **lucide-react** (ícones de UI)
- `clsx` + `tailwind-merge` (`cn`) e `class-variance-authority`

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Início — hero, quem somos, áreas e patrocinadores |
| `/sobre` | Missão, pilares, missão tripartite e oportunidades |
| `/projetos` | Áreas de atuação (abas), lista de projetos e galeria |
| `/contato` | Redes sociais e localização |

## Estrutura

```
.
├── app/                  # App Router: layout, páginas e globals.css
│   ├── layout.tsx        # fontes, metadata, Navbar e Footer
│   ├── page.tsx          # /  (Início)
│   ├── sobre/            # /sobre
│   ├── projetos/         # /projetos
│   └── contato/          # /contato
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # blocos de cada página
│   ├── ui/               # Button, Card, Container, Section, SectionHeading
│   └── shared/           # SocialLinks
├── data/                 # conteúdo tipado (navegação, home, sobre, projetos)
├── lib/                  # fonts.ts (next/font), utils.ts (cn)
├── types/                # interfaces compartilhadas
└── public/assets/        # logos, fotos e patrocinadores
```

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros scripts: `npm run build`, `npm run start`, `npm run lint`.

## Deploy

Publicado na **Vercel** ([site-npa.vercel.app](https://site-npa.vercel.app)) — o framework Next.js é detectado automaticamente e cada push na `main` dispara um novo deploy.

---

Layout baseado no design do Figma do NPA.
