# De-para: panel module → code

Each card on the panel home, mapped to its screens, its server code and its API.
Source: the front-end bundle (118 routes, 538 endpoints) cross-checked with the repo's own `MAPA.md`, 2026-11-10.
Code: [davidphilipsp/bar-do-milhao-platform](https://github.com/davidphilipsp/bar-do-milhao-platform). `:p` = id.

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

## Every endpoint, by module

## Vendas

**Screens:** `/vendas`

**Endpoints (6):**
```
GET /admin/vendas
GET /admin/vendas/:p
GET /admin/vendas/push/chave
POST /admin/vendas/push/desinscrever
POST /admin/vendas/push/inscrever
GET /admin/vendas/push/status
```

## Seu Milhão (edições, análises, admin)

**Screens:** `/seu-milhao`, `/seu-milhao/analises`, `/seu-milhao/configuracao`, `/seu-milhao/edicoes`, `/seu-milhao/edicoes/:id`, `/seu-milhao/empresa`, `/seu-milhao/usuarios`, `/usuarios`, `/visao-geral`

**Endpoints (21):**
```
GET,PUT /admin/permissoes/:p
GET /admin/permissoes/mapa
GET /admin/seu-milhao/analises
GET /admin/seu-milhao/analises/canais
GET /admin/seu-milhao/analises/crescimento
GET /admin/seu-milhao/analises/recompra
GET,POST /admin/seu-milhao/edicoes
GET,PUT /admin/seu-milhao/edicoes/:p
POST /admin/seu-milhao/edicoes/:p/arquivo/:p
POST /admin/seu-milhao/edicoes/:p/cancelar
POST /admin/seu-milhao/edicoes/:p/confirmar
GET,PUT /admin/seu-milhao/edicoes/:p/partner-sync
POST /admin/seu-milhao/edicoes/:p/publicar
GET,PUT /admin/seu-milhao/edicoes/padroes
GET /admin/seu-milhao/negocio
GET,POST /admin/usuarios
PATCH /admin/usuarios/:p/papel
POST /admin/usuarios/:p/reenviar-link
PATCH /admin/usuarios/:p/status
GET /admin/visao-geral
GET /config/pixel
```

## Bar do Milhão (bares, ligas, metas, prêmios, saques, gerentes)

**Screens:** `/artes`, `/bares`, `/bares/:id`, `/bares/pendentes`, `/configuracao`, `/formulario`, `/gerentes`, `/ligas-metas`, `/pagamentos`, `/premios`, `/torcida`

**Endpoints (74):**
```
GET,POST /admin/artes
DELETE,PATCH /admin/artes/:p
POST /admin/artes/upload
GET /admin/bares
DELETE,GET,PATCH /admin/bares/:p
POST /admin/bares/:p/aprovar
POST /admin/bares/:p/bloquear-comissao
POST /admin/bares/:p/desbloquear-comissao
GET /admin/bares/:p/detalhes
GET /admin/bares/:p/pendencias-exclusao
POST /admin/bares/:p/reprovar
POST /admin/bares/:p/restaurar
GET /admin/bares/acesso/modelos
GET /admin/bares/lixeira
GET /admin/bares/mensagens
GET /admin/bares/metricas-hub
GET /admin/bares/pendentes
GET /admin/formulario
POST /admin/formulario/campos
DELETE,PATCH /admin/formulario/campos/:p
POST /admin/formulario/reordenar
POST /admin/formulario/secoes
DELETE,PATCH /admin/formulario/secoes/:p
GET /admin/galeria
POST /admin/galeria/upload
GET,POST /admin/gerentes
PATCH /admin/gerentes/:p
GET /admin/gerentes/dashboard
GET /admin/gerentes/vinculos
GET,POST /admin/ligas
GET /admin/ligas-detalhadas
GET /admin/ligas-encerradas
POST /admin/ligas/:p/ativar
GET /admin/ligas/:p/ranking
GET /admin/metas-catalogo
GET,POST /admin/pacotes-meta
POST /admin/pacotes-meta/:p/atribuir
GET,POST /admin/pacotes-premio
GET /admin/pagamentos/metricas
GET /admin/pendencias/percentual
GET /admin/premios/buscar
POST /admin/premios/entregar/:p
GET /admin/premios/entregues
GET /admin/premios/pendentes
GET /admin/premios/resumo
GET /admin/saques
POST /admin/saques/:p/aprovar
POST /admin/saques/:p/pagar
POST /admin/saques/:p/recusar
POST /admin/saques/:p/reprovar-nf
POST /admin/saques/:p/reprovar-pix
GET /admin/saques/historico
POST /admin/saques/multi-aprovar
POST /admin/saques/multi-pagar
GET /gerente/artes
POST /gerente/auth/definir-senha
GET /gerente/auth/eu
POST /gerente/auth/login
POST /gerente/auth/logout
POST /gerente/auth/recuperar-senha
GET /gerente/bares
GET /gerente/bares/:p
GET /gerente/comissao
GET /gerente/visao-geral
GET /painel/artes
GET /painel/central
GET /painel/comissao
GET /painel/liga
GET /painel/ligas
GET /painel/ligas/:p/ranking
GET /painel/metas
POST /painel/saque
POST /painel/saque/:p/nota-fiscal
GET /painel/saques
```

## Afiliados do Milhão

**Screens:** `/afiliados`, `/afiliados/analise/:id`, `/afiliados/artes`, `/afiliados/configuracoes`, `/afiliados/hub`, `/afiliados/pagamentos`, `/afiliados/ranking`

**Endpoints (59):**
```
GET /admin/afiliados
DELETE,GET,PATCH /admin/afiliados/:p
POST /admin/afiliados/:p/aprovar
POST /admin/afiliados/:p/bloquear-comissao
POST /admin/afiliados/:p/colocar-em-revisao
POST /admin/afiliados/:p/contrato/reenviar
POST /admin/afiliados/:p/desbloquear-comissao
GET /admin/afiliados/:p/pendencias-exclusao
POST /admin/afiliados/:p/reprovar
POST /admin/afiliados/:p/restaurar
POST /admin/afiliados/:p/solicitar-btag
GET,POST /admin/afiliados/artes
DELETE,PATCH /admin/afiliados/artes/:p
POST /admin/afiliados/artes/upload
GET,PUT /admin/afiliados/configuracoes
PUT /admin/afiliados/configuracoes/contrato
GET /admin/afiliados/configuracoes/formulario
POST /admin/afiliados/configuracoes/formulario/campos
DELETE,PATCH /admin/afiliados/configuracoes/formulario/campos/:p
POST /admin/afiliados/configuracoes/formulario/reordenar
POST /admin/afiliados/configuracoes/formulario/secoes
DELETE,PATCH /admin/afiliados/configuracoes/formulario/secoes/:p
PUT /admin/afiliados/configuracoes/mensagens/:p
GET /admin/afiliados/gerentes
GET /admin/afiliados/lixeira
GET /admin/afiliados/pagamentos/metricas
GET /admin/afiliados/pendentes
GET /admin/afiliados/saques
POST /admin/afiliados/saques/:p/aprovar
POST /admin/afiliados/saques/:p/pagar
POST /admin/afiliados/saques/:p/rejeitar
POST /admin/afiliados/saques/multi-pagamento
GET /admin/afiliados/visao-geral
GET /admin/afiliados/visao-geral/aquisicao
GET /admin/afiliados/visao-geral/financeiro
GET /admin/afiliados/visao-geral/indicadores
GET /admin/afiliados/visao-geral/ranking
POST /afiliado/auth/acesso-da-equipe
POST /afiliado/auth/definir-senha
POST /afiliado/auth/login
POST /afiliado/auth/logout
GET /afiliado/auth/me
POST /afiliado/auth/recuperar-senha
POST /afiliado/auth/redefinir-senha
GET /afiliado/central
GET /afiliado/comissao
GET /afiliado/divulgacao
GET /afiliado/indicados
GET /afiliado/parceria
POST /afiliado/parceria/assinar
POST /afiliado/parceria/codigo
GET /afiliado/parceria/contrato
GET /afiliado/saques
POST /afiliado/saques/:p/cancelar
POST /afiliado/saques/:p/editar
POST /afiliado/saques/:p/nota-fiscal
POST /afiliado/saques/solicitar
POST /cadastro-afiliado
GET /cadastro-afiliado/cnpj/${String(e||
```

## Tráfego

**Screens:** `/trafego`

**Endpoints (30):**
```
GET /admin/trafego/analise
GET /admin/trafego/analise/canais
GET /admin/trafego/analise/criativos
GET /admin/trafego/analise/criativos/:p/:p/${encodeU
GET /admin/trafego/analise/funil
GET /admin/trafego/analise/safras
GET /admin/trafego/base
GET /admin/trafego/campanhas
GET /admin/trafego/campanhas/detalhes
GET /admin/trafego/captacao
GET,PUT /admin/trafego/conversoes/config
POST /admin/trafego/conversoes/executar
GET /admin/trafego/conversoes/status
POST /admin/trafego/conversoes/testar-conexao
GET,POST /admin/trafego/custo/contas
DELETE,PUT /admin/trafego/custo/contas/:p
POST /admin/trafego/custo/sincronizar
GET /admin/trafego/dia-a-dia
GET,POST /admin/trafego/dia-a-dia/btags
DELETE /admin/trafego/dia-a-dia/btags/:p
GET,PUT /admin/trafego/dia-a-dia/limites
GET,POST /admin/trafego/dia-a-dia/links-diretos
DELETE,PUT /admin/trafego/dia-a-dia/links-diretos/:p
GET,PUT /admin/trafego/dia-a-dia/metas
GET,PUT /admin/trafego/dia-a-dia/regras
GET /admin/trafego/grupos
PUT /admin/trafego/grupos/janela
GET,POST /admin/trafego/grupos/links
DELETE,PUT /admin/trafego/grupos/links/:p
GET /admin/trafego/metricas
```

## Atendimento

**Screens:** `/atendimento`, `/atendimento/:conversaId`, `/atendimento/configuracoes`, `/atendimento/dashboard`, `/atendimento/live-chat`, `/atendimento/modelos`, `/atendimento/numeros`, `/atendimento/reclame-aqui`, `/atendimento/reclame-aqui/:id`

**Endpoints (54):**
```
GET,PUT /admin/atendimento/avaliacao/config
GET /admin/atendimento/central
GET /admin/atendimento/central/terceirizada
GET /admin/atendimento/config
POST /admin/atendimento/configuracoes/causas
PUT /admin/atendimento/configuracoes/causas/:p
GET /admin/atendimento/configuracoes/classificacao
PUT /admin/atendimento/configuracoes/ia
GET /admin/atendimento/configuracoes/matriz
GET,PUT /admin/atendimento/configuracoes/prazos
POST /admin/atendimento/configuracoes/tipos
PUT /admin/atendimento/configuracoes/tipos/:p
GET /admin/atendimento/conversas
GET /admin/atendimento/conversas/:p
POST /admin/atendimento/conversas/:p/caixa
POST /admin/atendimento/conversas/:p/classificacao
POST /admin/atendimento/conversas/:p/enviar-modelo
POST /admin/atendimento/conversas/:p/etiquetas
DELETE /admin/atendimento/conversas/:p/etiquetas/:p
GET /admin/atendimento/conversas/:p/historico
POST /admin/atendimento/conversas/:p/lida
GET /admin/atendimento/conversas/:p/modelos
POST /admin/atendimento/conversas/:p/responder
POST /admin/atendimento/conversas/:p/responder-midia
POST /admin/atendimento/conversas/:p/status
GET /admin/atendimento/dashboard
GET,POST /admin/atendimento/etiquetas
PATCH /admin/atendimento/etiquetas/:p
GET /admin/atendimento/live-chat/ao-vivo
GET /admin/atendimento/live-chat/avaliacoes
GET /admin/atendimento/live-chat/conversas
GET /admin/atendimento/live-chat/filtros
GET /admin/atendimento/live-chat/visao
GET,POST /admin/atendimento/modelos
DELETE /admin/atendimento/modelos/:p
POST /admin/atendimento/modelos/:p/publicar
GET /admin/atendimento/modelos/custo
POST /admin/atendimento/modelos/sincronizar
GET,POST /admin/atendimento/numeros
DELETE,PUT /admin/atendimento/numeros/:p
POST /admin/atendimento/numeros/:p/conta
GET /admin/atendimento/push/chave
POST /admin/atendimento/push/desinscrever
POST /admin/atendimento/push/inscrever
GET,POST /admin/atendimento/reclame-aqui
DELETE,GET,PUT /admin/atendimento/reclame-aqui/:p
PUT /admin/atendimento/reclame-aqui/:p/avaliacao
PUT /admin/atendimento/reclame-aqui/:p/gestao
POST /admin/atendimento/reclame-aqui/:p/interacoes
GET,POST /admin/atendimento/respostas
DELETE,PUT /admin/atendimento/respostas/:p
POST /admin/atendimento/sincronizar
GET /admin/atendimento/taxonomia
GET /suporte
```

## CRM

**Screens:** `/crm`, `/crm/campanhas`, `/crm/campanhas/:id`, `/crm/campanhas/edicao/:id`, `/crm/clientes`, `/crm/configuracoes`, `/crm/frequencia`, `/crm/jornadas`, `/crm/numeros`, `/crm/segmentos`, `/crm/segmentos/:id`, `/crm/segmentos/:id/editar`, `/crm/segmentos/avancado`, `/crm/segmentos/externos`, `/crm/segmentos/novo`, `/crm/templates`, `/crm/testes`

**Endpoints (87):**
```
GET /admin/crm/apuracao/:p
GET /admin/crm/apuracao/:p/historico
POST /admin/crm/apuracao/:p/passos/:p
GET /admin/crm/calendario
GET /admin/crm/calendario/campanha/:p
GET,POST /admin/crm/campanhas
DELETE,GET,PUT /admin/crm/campanhas/:p
GET /admin/crm/campanhas/:p/blocos
POST /admin/crm/campanhas/:p/cancelar
POST /admin/crm/campanhas/:p/duplicar
GET /admin/crm/campanhas/:p/entrega
POST /admin/crm/campanhas/:p/enviar
GET /admin/crm/campanhas/:p/pagina
POST /admin/crm/campanhas/:p/pausar
GET /admin/crm/campanhas/:p/ramos
POST /admin/crm/campanhas/:p/restaurar
POST /admin/crm/campanhas/:p/retomar
GET /admin/crm/campanhas/audiencia
GET /admin/crm/campanhas/base
POST /admin/crm/campanhas/estimar
GET /admin/crm/campanhas/fluxo-base
GET /admin/crm/campanhas/fluxo-conteudo
POST /admin/crm/campanhas/fluxo-sms
POST /admin/crm/campanhas/fluxo-validar
GET /admin/crm/campanhas/lixeira
DELETE,GET /admin/crm/campanhas/lixeira/:p
GET /admin/crm/campanhas/painel
POST /admin/crm/campanhas/teste
PUT /admin/crm/ciclos/:p/meta
PUT /admin/crm/ciclos/:p/premio
GET /admin/crm/clientes
GET /admin/crm/clientes/base
PUT /admin/crm/clientes/cortes
POST /admin/crm/clientes/cortes/simular
GET,POST /admin/crm/clientes/descadastros
GET /admin/crm/faixa
GET /admin/crm/frequencia
PUT /admin/crm/frequencia/:p
GET /admin/crm/frequencia/descadastros
PUT /admin/crm/frequencia/geral
GET,POST /admin/crm/jornadas
DELETE,GET,PUT /admin/crm/jornadas/:p
GET /admin/crm/jornadas/:p/blocos
POST /admin/crm/jornadas/:p/duplicar
GET /admin/crm/jornadas/:p/entrega
PUT /admin/crm/jornadas/:p/estado
GET /admin/crm/jornadas/:p/execucoes
POST /admin/crm/jornadas/:p/restaurar
GET /admin/crm/jornadas/base
GET /admin/crm/jornadas/conteudo
GET /admin/crm/jornadas/execucoes/:p
GET /admin/crm/jornadas/lixeira
DELETE,GET /admin/crm/jornadas/lixeira/:p
POST /admin/crm/jornadas/sms
POST /admin/crm/jornadas/validar
PUT /admin/crm/meta-padrao
GET,POST /admin/crm/numeros
DELETE,PUT /admin/crm/numeros/:p
POST /admin/crm/numeros/:p/conta
POST /admin/crm/numeros/:p/padrao
GET /admin/crm/pix
GET /admin/crm/pix/clientes/:p
GET,POST /admin/crm/segmentos
DELETE,GET,PUT /admin/crm/segmentos/:p
POST /admin/crm/segmentos/:p/duplicar
POST /admin/crm/segmentos/:p/importar
GET /admin/crm/segmentos/:p/painel
POST /admin/crm/segmentos/:p/usos
GET /admin/crm/segmentos/campos
GET,POST /admin/crm/segmentos/externos
GET /admin/crm/segmentos/inicio
GET /admin/crm/segmentos/local
POST /admin/crm/segmentos/previa
GET,POST /admin/crm/templates
DELETE,PUT /admin/crm/templates/:p
POST /admin/crm/templates/imagem
GET,PUT /admin/crm/templates/moldura
POST /admin/crm/templates/previa
GET,POST /admin/crm/templates/rodapes
DELETE,PUT /admin/crm/templates/rodapes/:p
GET /admin/crm/templates/variaveis
POST /admin/crm/templates/voz/conferir
GET /admin/crm/templates/whatsapp
DELETE /admin/crm/templates/whatsapp/:p
POST /admin/crm/templates/whatsapp/:p/editar
POST /admin/crm/templates/whatsapp/texto
GET /admin/crm/visao-geral
```

## Financeiro

**Screens:** `/financeiro`, `/financeiro/configuracoes`, `/financeiro/disparos`, `/financeiro/notas-fiscais`, `/financeiro/precos`, `/financeiro/recebimentos`, `/financeiro/reembolsos`, `/financeiro/saidas`

**Endpoints (34):**
```
GET,POST /admin/financeiro/arquivo/:p
DELETE /admin/financeiro/arquivo/:p/:p
GET /admin/financeiro/calendario
GET /admin/financeiro/centros-de-custo
GET /admin/financeiro/configuracoes
POST /admin/financeiro/configuracoes/centros-de-custo
PATCH /admin/financeiro/configuracoes/centros-de-custo/:p
GET,PUT /admin/financeiro/configuracoes/edicoes/:p
PUT /admin/financeiro/configuracoes/padrao
GET /admin/financeiro/disparos
GET,POST /admin/financeiro/fontes
GET /admin/financeiro/inicio
GET /admin/financeiro/notas
POST /admin/financeiro/notas/:p/dispensar
GET /admin/financeiro/origens
GET,POST /admin/financeiro/pagamentos
DELETE,PUT /admin/financeiro/pagamentos/:p
DELETE,GET,POST /admin/financeiro/precos
GET,POST /admin/financeiro/recebedores
GET /admin/financeiro/recebimentos
GET /admin/financeiro/recebimentos/centros
GET /admin/financeiro/recebimentos/edicoes/:p
DELETE,POST /admin/financeiro/recebimentos/edicoes/:p/:p
GET /admin/financeiro/recebimentos/historico
GET,POST /admin/financeiro/recorrencias
POST /admin/financeiro/recorrencias/:p/centro
POST /admin/financeiro/recorrencias/:p/editar
POST /admin/financeiro/recorrencias/:p/encerrar
POST /admin/financeiro/recorrencias/:p/fonte
GET /admin/financeiro/reembolsos
POST /admin/financeiro/reembolsos/:p/comprovante
POST /admin/financeiro/reembolsos/acertar
GET /admin/financeiro/reembolsos/historico
POST /admin/financeiro/registrar/:p
```

## QR Codes

**Screens:** `/qr`, `/qr/artes`, `/qr/leituras`, `/qr/vendas`

**Endpoints (10):**
```
GET,POST /admin/qr/artes
DELETE,GET,PUT /admin/qr/artes/:p
POST /admin/qr/artes/:p/geracao
GET,POST /admin/qr/codigos
DELETE,GET,PUT /admin/qr/codigos/:p
POST /admin/qr/codigos/:p/destino
POST /admin/qr/codigos/:p/pausa
GET /admin/qr/leituras
GET /admin/qr/pulso
GET /admin/qr/vendas
```

## Canvas

**Screens:** `/canvas`, `/canvas/quadro/:id`

**Endpoints (11):**
```
GET,POST /admin/canvas
DELETE,GET,PUT /admin/canvas/:p
GET,POST /admin/canvas/:p/comentarios
DELETE,PUT /admin/canvas/:p/comentarios/:p
POST /admin/canvas/:p/comentarios/:p/resolver
POST /admin/canvas/:p/comentarios/varrer
PUT /admin/canvas/:p/conteudo
POST /admin/canvas/:p/imagem
POST /admin/canvas/:p/restaurar
GET /admin/canvas/lixeira
GET /admin/canvas/pessoas
```

## WhatsApp

**Screens:** `/whatsapp`, `/whatsapp/grupos`, `/whatsapp/mensagens`, `/whatsapp/times`

**Endpoints (33):**
```
POST /admin/whatsapp/grupos
GET,PUT /admin/whatsapp/grupos/:p
POST /admin/whatsapp/grupos/:p/ajuste
GET,POST /admin/whatsapp/grupos/:p/convite
POST /admin/whatsapp/grupos/:p/mensagem
POST /admin/whatsapp/grupos/:p/participantes
POST /admin/whatsapp/grupos/:p/sair
GET,POST /admin/whatsapp/grupos/comunidades
DELETE,PUT /admin/whatsapp/grupos/comunidades/:p
POST /admin/whatsapp/grupos/comunidades/:p/criar
POST /admin/whatsapp/grupos/sincronizar
GET /admin/whatsapp/grupos${e.toString()
GET,POST /admin/whatsapp/mensagens
DELETE,PUT /admin/whatsapp/mensagens/:p
POST /admin/whatsapp/mensagens/:p/:p
POST /admin/whatsapp/mensagens/:p/cancelar
POST /admin/whatsapp/mensagens/:p/enviar-agora
GET /admin/whatsapp/mensagens/:p/rodadas
POST /admin/whatsapp/mensagens/previa-das-datas
POST /admin/whatsapp/numeros
DELETE,PUT /admin/whatsapp/numeros/:p
GET,PUT /admin/whatsapp/numeros/:p/ajustes
POST /admin/whatsapp/numeros/:p/conectar
POST /admin/whatsapp/numeros/:p/desconectar
GET /admin/whatsapp/numeros/:p/diario
GET /admin/whatsapp/numeros/:p/estado
PUT /admin/whatsapp/numeros/:p/perfil
POST /admin/whatsapp/numeros/:p/reiniciar
POST /admin/whatsapp/numeros/:p/restaurar
GET /admin/whatsapp/numeros${i
GET,POST /admin/whatsapp/times
DELETE,PUT /admin/whatsapp/times/:p
POST /admin/whatsapp/times/:p/comunidade
```

## Times

**Screens:** `/times`, `/times/configuracoes`, `/times/loja`, `/times/parcerias`, `/times/regras`, `/times/resgates`, `/times/resultados`

**Endpoints (49):**
```
GET /admin/times/configuracoes
PUT /admin/times/configuracoes/contrato
PUT /admin/times/configuracoes/mensagens/:p
PUT /admin/times/configuracoes/numero
PUT /admin/times/configuracoes/numero-oficial
POST /admin/times/configuracoes/numero/conectar
GET /admin/times/configuracoes/numero/estado
POST /admin/times/configuracoes/numero/novo
POST /admin/times/configuracoes/template
GET /admin/times/parcerias
GET,POST /admin/times/premios
DELETE,PUT /admin/times/premios/:p
GET /admin/times/regras
PUT /admin/times/regras/:p
PUT /admin/times/regras/instagram
POST /admin/times/regras/instagram/buscar
GET /admin/times/resgates
POST /admin/times/resgates/:p/cancelar
POST /admin/times/resgates/:p/entregar
GET /admin/times/resultados
GET,POST /admin/times/times
DELETE,PUT /admin/times/times/:p
POST /admin/times/times/:p/acesso
GET /admin/times/times/:p/extrato
POST /admin/times/times/:p/liberar
GET,POST /admin/times/times/:p/parceria/contrato
GET /admin/times/times/:p/parceria/dados
POST /admin/times/times/:p/parceria/enviar
POST /admin/times/times/:p/parceria/enviar-link
POST /admin/times/times/:p/parceria/finalizar
POST /admin/times/times/:p/pontos
POST /admin/times/times/:p/recusar
GET,POST /time/auth/acesso
POST /time/auth/login
POST /time/auth/logout
GET /time/auth/me
GET /time/inicio
GET,POST /time/inscricao
GET /time/loja
POST /time/loja/:p/resgatar
GET /time/parceria
POST /time/parceria/assinar
GET /time/parceria/cnpj/:p
POST /time/parceria/codigo
GET /time/parceria/contrato
POST /time/parceria/dados
GET,POST /time/torcedor
GET /time/torcida
GET /time/vitrine
```

## Telegram

**Screens:** `/telegram`, `/telegram/operacao/:id`

**Endpoints (49):**
```
GET /admin/telegram/base
GET,POST /admin/telegram/bots
DELETE /admin/telegram/bots/:p
POST /admin/telegram/bots/:p/reconectar
GET /admin/telegram/canais
DELETE /admin/telegram/canais/:p
DELETE,GET /admin/telegram/canais/:p/ab
PUT /admin/telegram/canais/:p/aceite
PUT /admin/telegram/canais/:p/boas-vindas
POST /admin/telegram/canais/:p/conectar
GET,PUT /admin/telegram/canais/:p/fluxo
GET /admin/telegram/canais/:p/fluxo/numeros
GET,PUT /admin/telegram/canais/:p/funil
GET,POST /admin/telegram/canais/:p/funis
PUT /admin/telegram/canais/:p/pos-compra
PUT /admin/telegram/canais/:p/robo-vendedor
GET /admin/telegram/conversas/:p
POST /admin/telegram/conversas/:p/assumir
POST /admin/telegram/conversas/:p/devolver
POST /admin/telegram/conversas/:p/encerrar
POST /admin/telegram/conversas/:p/etiquetas
POST /admin/telegram/conversas/:p/etiquetas/remover
POST /admin/telegram/conversas/:p/lida
GET /admin/telegram/conversas/:p/mensagens${t
POST /admin/telegram/conversas/:p/responder
POST /admin/telegram/conversas/:p/responder-midia
POST /admin/telegram/disparos
DELETE /admin/telegram/disparos/:p
POST /admin/telegram/disparos/:p/duplicar
POST /admin/telegram/disparos/:p/pausar
POST /admin/telegram/disparos/:p/reagendar
POST /admin/telegram/disparos/:p/retomar
DELETE,PUT /admin/telegram/funis/:p
PUT /admin/telegram/funis/:p/ab
POST /admin/telegram/funis/:p/duplicar
GET,PUT /admin/telegram/funis/:p/fluxo
GET /admin/telegram/funis/:p/numeros
PUT /admin/telegram/inscritos/:p/teste
GET,POST /admin/telegram/links
DELETE,PUT /admin/telegram/links/:p
POST /admin/telegram/midia/voz
GET /admin/telegram/operacoes
GET /admin/telegram/operacoes/:p/clientes
GET /admin/telegram/operacoes/:p/conversas
GET /admin/telegram/operacoes/:p/disparos
GET /admin/telegram/operacoes/:p/etiquetas
POST /admin/telegram/operacoes/:p/liberar-testadores
GET /admin/telegram/operacoes/:p/testadores${t
POST /admin/telegram/upload
```

## Ajuda

**Screens:** `/ajuda`

**Endpoints (1):**
```
GET,PUT /admin/ajuda/conteudo
```

## Auth / cadastro público

**Screens:** `/cadastro`, `/definir-senha`, `/login`, `/recuperar-senha`

**Endpoints (20):**
```
POST /admin/auth/acesso-da-central
POST /admin/auth/definir-senha
GET /admin/auth/eu
POST /admin/auth/login
POST /admin/auth/logout
POST /admin/auth/recuperar-senha
GET /admin/recuperacao-senha/excedidos
GET /admin/recuperacao-senha/tentativas
POST /auth/definir-senha
GET /auth/eu
POST /auth/login
POST /auth/logout
POST /auth/recuperar-senha
POST /cadastro
GET /cadastro/revisao
POST /cadastro/revisar
POST /cadastro/upload-foto
GET /cep/${String(e||
GET /formulario/cadastro
GET /formulario/termos
```
