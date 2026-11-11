# Seu Milhão Panel: live case study

**Live page:** https://davidphilipsp.github.io/seu-milhao-painel/

A public, interactive map of the operations panel behind **Seu Milhão**, a Brazilian prize-draw brand.
I designed it and built it with Claude Code as my pair programmer, from August to November 2026.

| | |
|---|---|
| [`index.html`](index.html) | the live page: 5 apps, 14 modules (click-through), money flow, Claude in the product, how it was built, stack |
| [`docs/de-para.md`](docs/de-para.md) | de-para: each panel module → screens → front folder → server folder → API size |
| Code | [davidphilipsp/bar-do-milhao-platform](https://github.com/davidphilipsp/bar-do-milhao-platform) (sanitized copy of the private repo) |

## At a glance

- **5 apps, 1 front end:** back office, bar portal, affiliate portal, manager portal, team portal
- **14 back-office modules:** Vendas, Seu Milhão, Bar do Milhão, Afiliados, Tráfego, Atendimento, CRM, Financeiro, QR Codes, Canvas, WhatsApp, Times, Telegram, Ajuda
- **118 routes · 538 API endpoints · 216 migrations · 134 test scripts**
- **Stack:** Node 20 + Fastify 5, React 19 + Vite + Tailwind 4, PostgreSQL 16 + PgBouncer
- **Claude in the product:** Haiku triages support tickets (with PII masked, never replying to customers) and runs an opt-in Telegram sales bot. Whisper transcribes voice notes.

Business figures, domains, partner names and personal data are left out on purpose.
Static site with no build step and no tracking. Served by GitHub Pages from `main`.
