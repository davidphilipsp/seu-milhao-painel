const I={
 receipt:'<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M14.5 8.5c-.5-.9-1.5-1.3-2.5-1.3-1.4 0-2.5.8-2.5 1.9 0 2.6 5 1.3 5 3.9 0 1.1-1.1 1.9-2.5 1.9-1 0-2-.4-2.5-1.3M12 6v1.2M12 14.8V16"/>',
 chart:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M9 17v-3M12 17v-5M15 17v-2"/>',
 store:'<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/><path d="M5 11v9h14v-9M10 20v-5h4v5"/>',
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6"/>',
 funnel:'<path d="M3 4h18l-7 9v6l-4 2v-8z"/>',
 headset:'<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/><path d="M19 20a3 3 0 0 1-3 2h-3"/>',
 contact:'<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7.5 17a4.5 4.5 0 0 1 9 0"/>',
 wallet:'<path d="M4 7h15a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h11v3"/><path d="M16 12h4v4h-4a2 2 0 0 1 0-4z"/>',
 qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3M21 14v.01M14 21h3M20 17v4"/>',
 canvas:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M6.5 10v4.5a2 2 0 0 0 2 2H14"/>',
 phone:'<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
 trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M9 21l1-4h4l1 4"/>',
 send:'<path d="M21 3L3 10.5l7 2.5 2.5 7z"/><path d="M21 3L10 13"/>',
 help:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M5.6 5.6l3.6 3.6M14.8 14.8l3.6 3.6M18.4 5.6l-3.6 3.6M9.2 14.8l-3.6 3.6"/>'
};
const M=[
 {k:'Vendas',ico:'receipt',d:'Sales for the period, with the buyer and their history',
  what:'Live list of sales per period with the buyer\'s purchase history. Push notifications on new sales to the team\'s installed app.',
  screens:['/vendas'],ep:6,front:'web/src/paineis/backoffice/vendas/',back:'src/paineis/backoffice/vendas/',ok:true},
 {k:'Seu Milhão',ico:'chart',d:'Whole-business view, results per bar and affiliate, campaigns and system admin',
  what:'Business overview and analyses (channels, growth, repeat purchase). Manages each draw edition from setup to publish, plus company branding, users and the role permission map.',
  screens:['/seu-milhao','/seu-milhao/analises','/seu-milhao/edicoes','/seu-milhao/edicoes/:id','/seu-milhao/empresa','/seu-milhao/usuarios','/seu-milhao/configuracao'],ep:21,front:'web/src/paineis/backoffice/seu-milhao/',back:'src/paineis/backoffice/seu-milhao/ + src/edicoes/',ok:true},
 {k:'Bar do Milhão',ico:'store',d:'Bars, commissions, results and payouts',
  what:'Bar sign-up review (approve / reject / restore), commission blocking, regional leagues and goal packages, prize delivery, regional managers, sign-up form editor, art library, and payout approval with Pix and invoice checks and batch pay.',
  screens:['/','/bares','/bares/:id','/bares/pendentes','/gerentes','/ligas-metas','/premios','/pagamentos','/artes','/formulario'],ep:74,front:'web/src/admin/pages/ (VisaoGeral, Bares*, Gerentes, LigasMetas, Pagamentos…)',back:'src/routes/backoffice.js',ok:false},
 {k:'Afiliados do Milhão',ico:'users',d:'Individual affiliate program',
  what:'Same model for individuals: application review, e-signed partnership contract, tracking tag requests, ranking, acquisition and finance dashboards, configurable sign-up form and messages, payout queue.',
  screens:['/afiliados','/afiliados/analise/:id','/afiliados/hub','/afiliados/ranking','/afiliados/pagamentos','/afiliados/artes','/afiliados/configuracoes'],ep:59,front:'web/src/paineis/backoffice/afiliados/',back:'src/paineis/backoffice/afiliados/',ok:true},
 {k:'Tráfego',ico:'funnel',d:'Advanced tracking, traffic management and lead capture',
  what:'Attribution analysis by channel, creative, funnel and cohort. Ad-cost sync per ad account, conversions sent back to ad platforms, daily pacing rules and goals, tracked direct links and group links.',
  screens:['/trafego'],ep:30,front:'web/src/admin/pages/Trafego.jsx + components/trafego/',back:'src/routes/trafego.js + src/trafego/',ok:false},
 {k:'Atendimento',ico:'headset',d:'Support for bars, affiliates and customers',
  what:'Shared WhatsApp inbox with tags, inboxes, saved replies and approved message templates. Live-chat view, CSAT ratings, SLA settings, AI triage, outsourced-team access, and a complaint-site case tracker.',
  screens:['/atendimento','/atendimento/:conversaId','/atendimento/dashboard','/atendimento/live-chat','/atendimento/modelos','/atendimento/numeros','/atendimento/reclame-aqui','/atendimento/configuracoes'],ep:54,front:'web/src/admin/pages/Atendimento*.jsx + atendimento/',back:'src/routes/atendimento*.js + src/atendimento/',ok:false},
 {k:'CRM',ico:'contact',d:'Customer base management',
  what:'Segments (visual builder, advanced, external import), campaigns with flow editor, test sends and delivery tracking, drag-and-drop journeys, email/SMS/WhatsApp/voice templates, frequency caps, opt-outs, sender numbers, Pix-based buyer view.',
  screens:['/crm','/crm/clientes','/crm/segmentos','/crm/segmentos/novo','/crm/segmentos/avancado','/crm/segmentos/externos','/crm/campanhas','/crm/campanhas/:id','/crm/jornadas','/crm/templates','/crm/frequencia','/crm/numeros','/crm/testes','/crm/configuracoes'],ep:87,front:'web/src/admin/pages/Crm*.jsx',back:'src/routes/crm*.js + src/crm/',ok:false},
 {k:'Financeiro',ico:'wallet',d:'Operating cost management and tracking',
  what:'Payables and recurring costs by cost center and source, receivables per edition, reimbursements with receipts, invoices, price tables, payment calendar and exportable reports.',
  screens:['/financeiro','/financeiro/saidas','/financeiro/recebimentos','/financeiro/reembolsos','/financeiro/notas-fiscais','/financeiro/precos','/financeiro/disparos','/financeiro/configuracoes'],ep:34,front:'web/src/admin/pages/Financeiro.jsx + financeiro/',back:'src/routes/financeiro*.js + src/financeiro/',ok:false},
 {k:'QR Codes',ico:'qr',d:'Advanced QR code management',
  what:'Dynamic QR codes with editable destination and pause, scan log, live "pulse", sales per code, and print-ready art generated as PDF.',
  screens:['/qr','/qr/leituras','/qr/vendas','/qr/artes'],ep:10,front:'web/src/paineis/backoffice/qr/',back:'src/paineis/backoffice/qr/',ok:true},
 {k:'Canvas',ico:'canvas',d:'Flows, briefs and mind maps',
  what:'In-house whiteboard (React Flow): boards, threaded comments with resolve, image upload, trash and restore.',
  screens:['/canvas','/canvas/quadro/:id'],ep:11,front:'web/src/paineis/backoffice/canvas/',back:'src/paineis/backoffice/canvas/',ok:true},
 {k:'WhatsApp',ico:'phone',d:'Numbers connected by QR code and their groups',
  what:'Numbers connected by QR code with health status and daily log, groups and communities (invites, participants, settings), scheduled group messages in rounds.',
  screens:['/whatsapp','/whatsapp/grupos','/whatsapp/mensagens','/whatsapp/times'],ep:33,front:'web/src/paineis/backoffice/whatsapp/',back:'src/paineis/backoffice/whatsapp/ + src/whatsapp-conexao/',ok:true},
 {k:'Times',ico:'trophy',d:'Partner teams: sign-up, rewards store and redemptions',
  what:'Partner sports teams: approval, e-signed partnership contract, points rules (including Instagram), rewards store, redemption delivery, statements and results.',
  screens:['/times','/times/parcerias','/times/regras','/times/loja','/times/resgates','/times/resultados','/times/configuracoes'],ep:49,front:'web/src/paineis/backoffice/times/',back:'src/paineis/backoffice/times/ + src/times/',ok:true},
 {k:'Telegram',ico:'send',d:'Telegram operations: bot, channel, welcome, funnel and broadcasts',
  what:'Bots and channels, join approval, welcome message, funnels with A/B tests and a visual flow editor, scheduled broadcasts, the AI sales bot, live conversations with handoff to a human.',
  screens:['/telegram','/telegram/operacao/:id'],ep:49,front:'web/src/paineis/backoffice/telegram/',back:'src/paineis/backoffice/telegram/ + src/telegram/',ok:true},
 {k:'Ajuda',ico:'help',d:'Help center: categories and articles',
  what:'Editable help center content shown to bars, affiliates and the team.',
  screens:['/ajuda'],ep:1,front:'web/src/paineis/backoffice/ajuda/',back:'src/paineis/backoffice/ajuda/',ok:true}
];
const svg=k=>`<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg>`;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const grid=document.getElementById('grid'),det=document.getElementById('detail');
M.forEach((m,i)=>{
  const b=document.createElement('button');b.className='mod';b.setAttribute('aria-pressed','false');
  b.innerHTML=`${svg(m.ico)}<span class="arr">→</span><h3>${m.k}</h3><p>${m.d}</p><div class="n">${m.screens.length} screens · ${m.ep} endpoints</div>`;
  b.onclick=()=>{
    const open=b.getAttribute('aria-pressed')==='true';
    grid.querySelectorAll('.mod').forEach(x=>x.setAttribute('aria-pressed','false'));
    if(open){det.classList.remove('open');return}
    b.setAttribute('aria-pressed','true');
    det.innerHTML=`<h3>${m.k}</h3><p style="color:var(--muted)">${esc(m.what)}</p>
     <dl class="row"><dt>Screens</dt><dd>${m.screens.map(s=>`<code>${s}</code>`).join(' ')}</dd>
     <dt>API</dt><dd>${m.ep} endpoints</dd>
     <dt>Front</dt><dd><code>${esc(m.front)}</code></dd>
     <dt>Server</dt><dd><code>${esc(m.back)}</code></dd>
     <dt>Layout</dt><dd>${m.ok?'<span class="tag ok">in panel folders</span>':'<span class="tag todo">still in shared folders</span>'}</dd></dl>`;
    det.classList.add('open');det.scrollIntoView({behavior:'smooth',block:'nearest'});
  };
  grid.appendChild(b);
});
document.querySelector('#tbl tbody').innerHTML=M.map(m=>`<tr><td><b>${m.k}</b></td><td><code>${m.screens[0]}</code></td><td><code>${esc(m.front)}</code></td><td><code>${esc(m.back)}</code></td><td>${m.ep}</td><td>${m.ok?'<span class="tag ok">done</span>':'<span class="tag todo">to move</span>'}</td></tr>`).join('');
