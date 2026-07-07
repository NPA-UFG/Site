# Site NPA — Núcleo de Pesquisas Aeroespaciais

Site institucional do **Núcleo de Pesquisas Aeroespaciais (NPA/UFG)**.
*Ad Astra Per Aspera.*

## Páginas

| Página | Arquivo |
|--------|---------|
| Início | `index.html` |
| Sobre | `sobre.html` |
| Projetos | `projetos.html` |
| Contato | `contato.html` |

## Estrutura

```
.
├── index.html / sobre.html / projetos.html / contato.html
├── css/styles.css      # estilos compartilhados
├── js/main.js          # menu mobile + abas de Projetos
├── assets/             # logos, fotos e patrocinadores
└── server.js           # servidor estático local opcional
```

## Rodando localmente

Basta abrir `index.html` no navegador, ou subir um servidor local:

```bash
node server.js
# http://localhost:4599
```

## Tecnologias

HTML + CSS + JavaScript puro (sem dependências). Fontes: Anton, Inter, JetBrains Mono e Source Serif Pro (Google Fonts).

---

Layout baseado no design do Figma do NPA.
