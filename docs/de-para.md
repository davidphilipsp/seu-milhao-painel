# De-para: panel module → code

Each card on the panel home, mapped to its screens, its server code and its API.
Source: the front-end bundle (118 routes, 538 endpoints) cross-checked with the repo's own `MAPA.md`, 2026-11-10.
Code: [davidphilipsp/bar-do-milhao-platform](https://github.com/davidphilipsp/bar-do-milhao-platform). 

**The rule:** each panel lives at `web/src/paineis/<audience>/<panel>/` (screens) and `src/paineis/<audience>/<panel>/` (server), with the same name on both sides and a read-me per folder. Code shared by several panels (commission engine, permissions, email, utils) stays outside the panel folders.

## Back office

| Module | Route | Front now | Server now | API | Layout | Target (for the ones still to move) |
|---|---|---|---|---|---|---|
| **Vendas** | `/vendas` | `web/src/paineis/backoffice/vendas/` | `src/paineis/backoffice/vendas/` | 6 | done | — |
| **Seu Milhão** | `/seu-milhao` | `web/src/paineis/backoffice/seu-milhao/` | `src/paineis/backoffice/seu-milhao/ + src/edicoes/` | 21 | done | — |
| **Bar do Milhão** | `/, /bares, /gerentes, /ligas-metas, /pagamentos` | `web/src/admin/pages/ (VisaoGeral, Bares*, BarAnalise, Gerentes, LigasMetas, Pagamentos, ArtesEditor, FormularioEditor)` | `src/routes/backoffice.js` | 74 | to move | web/src/paineis/backoffice/bares/ + src/paineis/backoffice/bares/ |
| **Afiliados do Milhão** | `/afiliados` | `web/src/paineis/backoffice/afiliados/` | `src/paineis/backoffice/afiliados/` | 59 | done | — |
| **Tráfego** | `/trafego` | `web/src/admin/pages/Trafego.jsx + web/src/admin/components/trafego/` | `src/routes/trafego.js + src/trafego/` | 30 | to move | web/src/paineis/backoffice/trafego/ + src/paineis/backoffice/trafego/ (engine stays in src/trafego/) |
| **Atendimento** | `/atendimento` | `web/src/admin/pages/Atendimento*.jsx + pages/atendimento/ + components/atendimento/` | `src/routes/atendimento*.js + src/routes/whatsapp*.js + src/atendimento/` | 54 | to move | web/src/paineis/backoffice/atendimento/ + src/paineis/backoffice/atendimento/ (engine stays in src/atendimento/) |
| **CRM** | `/crm` | `web/src/admin/pages/Crm*.jsx + loose web/src/admin/components/` | `src/routes/crm*.js + src/crm/` | 87 | to move | web/src/paineis/backoffice/crm/ + src/paineis/backoffice/crm/ (engine stays in src/crm/) |
| **Financeiro** | `/financeiro` | `web/src/admin/pages/Financeiro.jsx + pages/financeiro/ + components/financeiro/` | `src/routes/financeiro.js + financeiro-recebimentos.js + src/financeiro/` | 34 | to move | web/src/paineis/backoffice/financeiro/ + src/paineis/backoffice/financeiro/ |
| **QR Codes** | `/qr` | `web/src/paineis/backoffice/qr/` | `src/paineis/backoffice/qr/` | 10 | done | — |
| **Canvas** | `/canvas` | `web/src/paineis/backoffice/canvas/` | `src/paineis/backoffice/canvas/` | 11 | done | — |
| **WhatsApp** | `/whatsapp` | `web/src/paineis/backoffice/whatsapp/` | `src/paineis/backoffice/whatsapp/ + src/whatsapp-conexao/` | 33 | done | — |
| **Times** | `/times` | `web/src/paineis/backoffice/times/` | `src/paineis/backoffice/times/ + src/times/` | 49 | done | — |
| **Telegram** | `/telegram` | `web/src/paineis/backoffice/telegram/` | `src/paineis/backoffice/telegram/ + src/telegram/` | 49 | done | — |
| **Ajuda** | `/ajuda` | `web/src/paineis/backoffice/ajuda/` | `src/paineis/backoffice/ajuda/` | 1 | done | — |

## Portals (outside the back office)

| Portal | Mount | Front | Server |
|---|---|---|---|
| Public site + sign-up | `/`, `/cadastro`, `/cadastro-afiliado` | `web/src/paineis/cliente/site/` | `src/paineis/cliente/site/` |
| Bar | `/painel/*` | `web/src/paineis/cliente/bar/` | `src/paineis/cliente/bar/` |
| Affiliate | `/afiliado/*` | `web/src/paineis/cliente/afiliado/` | `src/paineis/cliente/afiliado/` |
| Manager | `/gerente/*` | `web/src/paineis/cliente/gerente/` | `src/paineis/cliente/gerente/` |
| Team | `/time/*` | `web/src/paineis/cliente/time/` | `src/paineis/cliente/time/` + `src/times/` |
| Central (sells installs) | own host | `web/central/` | `src/central/` |

> The per-endpoint list is kept private on purpose: it describes a live production API. Counts above are per module.
