/* Prepare 2027 – konceptprototype. Ren HTML/JS uden build-trin. */

/* ---------- ikoner ---------- */
const I = (d) => `<svg class="i" viewBox="0 0 24 24">${d}</svg>`;
const ic = {
  back: I('<path d="M15 4 7 12l8 8"/>'),
  up: I('<path d="M12 20V4M5 11l7-7 7 7"/>'), down: I('<path d="M12 4v16M5 13l7 7 7-7"/>'),
  pdf: I('<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/><text x="8" y="19" font-size="5" fill="currentColor" stroke="none">PDF</text>'),
  book: I('<path d="M3 5c3-1 6-1 9 1v14c-3-2-6-2-9-1z"/><path d="M21 5c-3-1-6-1-9 1v14c3-2 6-2 9-1z"/>'),
  search: I('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
  doc: I('<path d="M6 3h8l4 4v14H6z"/><path d="M9 12h6M9 16h6"/>'),
  chat: I('<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>'),
  lock: I('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  chev: I('<path d="M9 5l7 7-7 7"/>'),
  spark: I('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" fill="currentColor"/>'),
  menu: I('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  home: I('<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>'),
  live: I('<circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M6.3 6.3a8 8 0 0 0 0 11.4M17.7 6.3a8 8 0 0 1 0 11.4"/>'),
  track: I('<path d="M4 6h10M4 12h16M4 18h7"/><circle cx="18" cy="6" r="2"/><circle cx="14" cy="18" r="2"/>'),
  wheel: I('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/>'),
  user: I('<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>'),
  users: I('<circle cx="9" cy="8" r="3.5"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c1-3.5 3.5-5 7-5s6 1.5 7 5M15 15c3 0 5.5 1.3 6.5 4"/>'),
  gear: I('<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>'),
  bell: I('<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
  clock: I('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  pin: I('<path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
  pen: I('<path d="M4 20l4-1 11-11-3-3L5 16z"/>'),
  eraser: I('<path d="M3 17l8-8 6 6-4 4H7z"/><path d="M11 9l4-4 6 6-4 4"/>'),
  undo: I('<path d="M9 7 4 12l5 5"/><path d="M4 12h11a5 5 0 0 1 0 10h-2"/>'),
  redo: I('<path d="M15 7l5 5-5 5"/><path d="M20 12H9a5 5 0 0 0 0 10h2"/>')
};

/* fyldte ikoner i FirstAgenda-stil */
const F = (d) => `<svg class="f" viewBox="0 0 24 24">${d}</svg>`;
const fi = {
  home: F('<path d="M12 2.5 1.5 11.5H5V21h5.2v-6h3.6v6H19v-9.5h3.5z"/>'),
  doc: F('<path fill-rule="evenodd" d="M5 2h9.5L19 6.5V22H5zM8 11h8v1.8H8zm0 4h8v1.8H8z"/>'),
  live: F('<circle cx="12" cy="12" r="3.2"/><path d="M5.6 5.6a9 9 0 0 0 0 12.8l1.6-1.6a6.8 6.8 0 0 1 0-9.6zM18.4 5.6l-1.6 1.6a6.8 6.8 0 0 1 0 9.6l1.6 1.6a9 9 0 0 0 0-12.8z"/>'),
  track: F('<path d="M2.5 3.5h5v5h-5zM10 5h11.5v2H10zM2.5 9.5h5v5h-5zM10 11h11.5v2H10zM2.5 15.5h5v5h-5zM10 17h11.5v2H10z"/>'),
  wheel: F('<path fill-rule="evenodd" d="M12 1.5a10.5 10.5 0 1 1 0 21 10.5 10.5 0 0 1 0-21zm0 5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"/><path d="M12 8.5V12h3.5A3.5 3.5 0 0 0 12 8.5z"/>'),
  gear: F('<path fill-rule="evenodd" d="M10.3 1.5h3.4l.5 2.9 1.9.8 2.4-1.7 2.4 2.4-1.7 2.4.8 1.9 2.9.5v3.4l-2.9.5-.8 1.9 1.7 2.4-2.4 2.4-2.4-1.7-1.9.8-.5 2.9h-3.4l-.5-2.9-1.9-.8-2.4 1.7-2.4-2.4 1.7-2.4-.8-1.9-2.9-.5v-3.4l2.9-.5.8-1.9-1.7-2.4 2.4-2.4 2.4 1.7 1.9-.8zM12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z"/>'),
  users: F('<circle cx="8.5" cy="7" r="3.6"/><circle cx="16.8" cy="8" r="2.9"/><path d="M1.5 20c0-3.9 3.1-6.6 7-6.6s7 2.7 7 6.6v1h-14zM17 21v-1c0-2.2-.8-4-2.2-5.2.6-.2 1.3-.3 2-.3 3.2 0 5.7 2.2 5.7 5.5v1z"/>'),
  clock: F('<path fill-rule="evenodd" d="M12 1.5a10.5 10.5 0 1 1 0 21 10.5 10.5 0 0 1 0-21zm0 2.4a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2z"/><path d="M10.9 6.5h2.2v5l3.6 2.2-1.1 1.8-4.7-2.8z"/>'),
  pin: F('<path fill-rule="evenodd" d="M12 1.5a7.5 7.5 0 0 1 7.5 7.5c0 5.4-7.5 13.5-7.5 13.5S4.5 14.4 4.5 9A7.5 7.5 0 0 1 12 1.5zm0 4.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4z"/>'),
  user: F('<circle cx="12" cy="7.2" r="4.7"/><path d="M3 22c.5-5 4.2-8 9-8s8.5 3 9 8z"/>'),
  trash: F('<path d="M8.5 2h7l.8 1.8H21V6.5H3V3.8h4.7zM4.8 8h14.4l-1 14H5.8z"/>'),
  pen: F('<path d="M3 17.3V21h3.7L17.8 9.9l-3.7-3.7zM20.7 7a1 1 0 0 0 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0l-1.8 1.8 3.7 3.7z"/>'),
  unlock: F('<path d="M7 10.5V7a5 5 0 0 1 9.7-1.7l-2.1.8A2.8 2.8 0 0 0 9.2 7v3.5H18a1.2 1.2 0 0 1 1.2 1.2v9.1A1.2 1.2 0 0 1 18 22H6a1.2 1.2 0 0 1-1.2-1.2v-9.1A1.2 1.2 0 0 1 6 10.5z"/>'),
  lock: F('<path fill-rule="evenodd" d="M7 10.5V7a5 5 0 0 1 10 0v3.5h1a1.2 1.2 0 0 1 1.2 1.2v9.1A1.2 1.2 0 0 1 18 22H6a1.2 1.2 0 0 1-1.2-1.2v-9.1A1.2 1.2 0 0 1 6 10.5zm2.2 0h5.6V7a2.8 2.8 0 0 0-5.6 0z"/>'),
  cloud: F('<path d="M19.4 10.1A7.5 7.5 0 0 0 5.4 8 6 6 0 0 0 6 20h13a5 5 0 0 0 .4-9.9z"/><path class="ar" d="M12 8.5 7.5 13H10.5v4.5h3V13h3z"/>')
};
const chk = I('<path d="M5 12.5l4.5 4.5L19 7.5"/>');
const ext = I('<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>');
const sortI = I('<path d="M6 4v16M3 17l3 3 3-3"/><text x="12" y="10" font-size="8" fill="currentColor" stroke="none" font-family="Arial" font-weight="700">1</text><text x="12" y="20" font-size="8" fill="currentColor" stroke="none" font-family="Arial" font-weight="700">9</text>');
const chevD = I('<path d="M6 9l6 6 6-6"/>');

/* ---------- tilstand ---------- */
const S = {
  tab: 'ai', chats: {}, comments: {}, hl: true, pen: 0, votes: {}, approved: {}, drafts: {}, editing: false,
  acts: {}, prog: {}, sel: {}, created: [], trackSel: null, filter: 'all', query: '', memRes: null,
  menu: null, modal: null, wtab: 'afvikl', saved: null
};
MEETINGS.forEach(m => m.items.forEach((it, i) => { S.comments[m.id + '-' + (i + 1)] = it.comments.map(c => ({ ...c })); }));

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const key = (m, n) => m + '-' + n;
const meeting = id => MEETINGS.find(m => m.id === id) || MEETINGS[0];
function toast(t) { const e = $('#toast'); e.textContent = t; e.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove('on'), 2200); }
function go(h) { if (location.hash === h) render(); else location.hash = h; }
function route() {
  const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
  const v = p[0] || 'home';
  const m = meeting(p[1] || 'ou');
  let n = parseInt(p[2] || (v === 'moede' && m.id === 'ou' ? 3 : 1), 10);
  if (!(n >= 1 && n <= m.items.length)) n = 1;
  return { v, m, n, it: m.items[n - 1], k: key(m.id, n) };
}
const srcs = a => a.map(s => `<span class="src">${s}</span>`).join('');

/* ---------- skal ---------- */
function shell(inner, active) {
  const rail = [['home', '#/', fi.home, 'Overblik'], ['moede', '#/moede/ou/3', fi.doc, 'Forbered'], ['afvikl', '#/afvikl/ou/1', fi.live, 'Afvikl'],
    ['opfolgning', '#/opfolgning', fi.track, 'Beslutninger'], ['aarshjul', '#/aarshjul', fi.wheel, 'Årshjul']];
  return `<header class="whead">
    <button class="menu" onclick="toast('Menu – ikke en del af konceptet')" aria-label="Menu">${ic.menu}</button>
    <div class="wlogo" onclick="go('#/')"><img src="logo.png" alt="FirstAgenda Prepare" onerror="this.outerHTML='<div class=mk>P</div><div><span>FirstAgenda</span><b>Prepare</b></div>'"></div>
    <span class="sp"></span>
    <span class="orgsel" onclick="toast('Kun Vestby Kommune i prototypen')">Vestby Kommune ${chevD}</span>
    <button class="wava" onclick="S.menu=S.menu==='user'?null:'user';render()" aria-label="Profil og notifikationer">${USER.initials}</button>
  </header>
  <nav class="rail">${rail.map(r => `<button class="${active === r[0] ? 'on' : ''}" onclick="go('${r[1]}')" aria-label="${r[3]}">${r[2]}<span class="tip">${r[3]}</span></button>`).join('')}
    <button class="hide-m" onclick="toast('Indstillinger – ikke en del af konceptet')" aria-label="Indstillinger">${fi.gear}<span class="tip">Indstillinger</span></button></nav>
  <main>${inner}</main>${menus()}${modal()}`;
}
function menus() {
  if (S.menu === 'bell') return `<div class="menu-pop"><div class="hd"><b>Notifikationer</b></div>
    <button onclick="S.menu=null;go('#/moede/kmu/2')"><b>Nye bilag</b><br><span class="sub">Klima- og Miljøudvalget · punkt 2</span></button>
    <button onclick="S.menu=null;S.tab='kom';go('#/moede/ou/3')"><b>Anders Krogh kommenterede</b><br><span class="sub">Økonomiudvalget · punkt 3</span></button></div>`;
  if (S.menu === 'user') return `<div class="menu-pop"><div class="hd"><b>${USER.name}</b><br><span class="sub">${USER.role} · Vestby Kommune</span></div>
    <button onclick="S.menu=null;go('#/moede/kmu/2')"><b>Nye bilag</b><br><span class="sub">Klima- og Miljøudvalget · punkt 2</span></button>
    <button onclick="S.menu=null;S.tab='kom';go('#/moede/ou/3')"><b>Anders Krogh kommenterede</b><br><span class="sub">Økonomiudvalget · punkt 3</span></button>
    <button onclick="S.menu=null;toast('Profil – ikke en del af konceptet')">Min profil</button>
    <button onclick="S.menu=null;resetDemo()">Nulstil demo</button>
    <button onclick="S.menu=null;toast('Log ud – ikke en del af konceptet')">Log ud</button></div>`;
  return '';
}
function modal() {
  if (!S.modal) return '';
  const { it, b } = S.modal;
  const idx = it.bilag.indexOf(b) + 1;
  const sum = it.sum.filter(s => s[1].startsWith('Bilag ' + idx));
  return `<div class="modal" onclick="if(event.target===this){S.modal=null;render()}"><div class="box">
    <div class="mh">${ic.pdf}&nbsp; Bilag ${idx}: ${b[0]} <span class="sub" style="margin-left:8px">${b[1]} sider</span><button onclick="S.modal=null;render()">×</button></div>
    <div class="mb">${sum.length ? `<div class="hist" style="margin:0 0 18px"><span class="spark">✦ AI-resumé af bilaget</span><ul class="ai-list">${sum.map(s => `<li>${s[0]}</li>`).join('')}</ul></div>` : ''}
    <h2 style="font-weight:400">${b[0]}</h2><p>Vestby Kommune · ${it.t}</p>
    <p style="color:#555">Dette er et eksempel på bilagets indhold i konceptprototypen. I den rigtige løsning vises PDF-dokumentet her med mulighed for overstregning, noter og delte kommentarer.</p>
    <p style="color:#555">${it.desc.join(' ')}</p></div></div></div>`;
}
function resetDemo() { location.hash = '#/'; location.reload(); }

/* ---------- forside ---------- */
function vHome() {
  return `<div class="pad"><h1>Godmorgen, ${USER.name.split(' ')[0]}</h1><div class="sub">${USER.role} · ${USER.committees}</div>
  <div class="grid2"><div>
    <div class="h2">Kommende møder</div>
    ${MEETINGS.map(m => `<div class="mcard" onclick="go('#/moede/${m.id}/${m.id === 'ou' ? 3 : 1}')"><div class="dbox"><b>${m.d}</b><span>${m.mon}</span></div>
      <div class="info"><h3>${m.name}</h3><div class="sub">${m.place} · ${m.time.split(' ')[0]}</div><div class="sub">${m.items.length} punkter · ${m.pages} sider</div></div>
      <span class="tag ${m.status[0]}">${m.status[1]}</span>
      <div class="acts"><button class="btn btn-o" onclick="event.stopPropagation();go('#/afvikl/${m.id}/1')">Afvikl</button></div><span class="chev">${ic.chev}</span></div>`).join('')}
    <div class="h2" style="margin-top:22px">Seneste beslutninger</div>
    <div class="wcard" style="padding:6px 10px">${trackRows().slice(0, 3).map(r => `<div class="row" style="padding:10px 4px;border-bottom:1px solid #f0f2f5;cursor:pointer" onclick="S.trackSel='${esc(r.t)}';go('#/opfolgning')"><b style="flex:1">${r.t}</b><span class="sub">${r.u} · ${r.d}</span><span class="tag ${r.s[0]}">${r.s[1]}</span></div>`).join('')}</div>
  </div><div>
    <div class="aibox"><div class="spark">✦ Dit overblik for ugen</div>
      <p style="line-height:1.5;margin:8px 0">Du har <b>3 møder</b> og <b>214 sider</b> mødemateriale. Normal læsetid: ca. 4 timer. Med AI-resuméer: ca. <b>25 minutter</b> til overblik – derefter kan du gå i dybden, hvor det betyder mest.</p>
      <p style="line-height:1.5;margin:8px 0">Vigtigst: <b>Klimahandleplan 2027–2030</b> har budgetkonsekvenser på 38,5 mio. kr.</p>
      <div class="row"><button class="btn btn-p" onclick="S.tab='ai';go('#/moede/ou/3')">Start forberedelse</button><button class="btn btn-o" onclick="S.tab='ask';go('#/moede/ou/3')">✦ Spørg sagen</button></div></div>
    <div class="h2" style="margin-top:20px">Fra årshjulet <span class="tag t-violet">Plandisc</span></div>
    <div class="wcard" style="cursor:pointer" onclick="go('#/aarshjul')">${ring(160)}<div class="sub" style="margin-top:6px">Møder og afrapporteringer synkroniseres automatisk fra kommunens årshjul. Klik for at åbne.</div></div>
  </div></div></div>`;
}
function ring(size, interactive) {
  const c = size / 2, R = size * 0.33, L = size * 0.42; let s = '';
  ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'].forEach((m, i) => { const a = (i + .5) / 12 * 2 * Math.PI - Math.PI / 2; s += `<text x="${c + L * Math.cos(a)}" y="${c + 3 + L * Math.sin(a)}" text-anchor="middle">${m}</text>`; });
  const per = {};
  WHEEL.forEach(e => { const j = per[e.m] = (per[e.m] || 0) + 1; const a = (e.m + .3 + j * .2) / 12 * 2 * Math.PI - Math.PI / 2;
    s += `<circle class="ev" cx="${c + R * Math.cos(a)}" cy="${c + R * Math.sin(a)}" r="${size / 30}" fill="${e.c}" ${interactive ? `onclick="wheelGo('${esc(e.t)}')"` : ''}><title>${e.t}</title></circle>`; });
  const legend = WHEEL.filter(e => e.go).map(e => `<div><span class="tag t-blue">Dec</span> ${e.t.split(' ').slice(0, -2).join(' ')}</div>`).join('') + '<div><span class="tag t-violet">Jun</span> Klimastatus</div>';
  return `<div class="row"><svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${c}" cy="${c}" r="${R}" fill="none" stroke="#eef1f6" stroke-width="${size / 11}"/>${s}
    <text x="${c}" y="${c - 2}" text-anchor="middle" style="font-size:${size / 13}px;fill:#16304f;font-weight:700">2026</text><text x="${c}" y="${c + size / 14}" text-anchor="middle">Årshjul</text></svg>
    ${interactive ? '' : `<div style="font-size:12px;line-height:2">${legend}</div>`}</div>`;
}
function wheelGo(t) { const e = WHEEL.find(x => x.t === t); if (e && e.go) go(`#/moede/${e.go}/1`); else toast(t + ' – åbnes i Plandisc'); }

/* ---------- forbered (mødedeltager) ---------- */
function vMoede(r) {
  const { m, n, it, k } = r;
  return shell(`<div class="meet">
    <aside class="side"><div class="lbl">${m.date} · ${m.time}</div><div class="mt">${m.name}</div>
      ${m.items.map((x, i) => `<button class="scard ${n === i + 1 ? 'on' : ''}" onclick="S.tab='${S.tab}';go('#/moede/${m.id}/${i + 1}')"><span class="circ">${x.lock ? ic.lock : ic.doc}${x.bilag.length ? `<b>${x.bilag.length}</b>` : ''}</span><span class="tt">${i + 1}. ${x.t}<small>${x.lock ? 'Lukket punkt' : x.type + (x.pages ? ' · ' + x.pages + (x.pages === 1 ? ' side' : ' sider') : '')}</small></span><span class="chev">${ic.chev}</span></button>`).join('')}
      <button class="scard" onclick="S.tab='kom';render()"><span class="circ">${ic.chat}<b>${Object.keys(S.comments).filter(x => x.startsWith(m.id)).reduce((a, x) => a + S.comments[x].length, 0)}</b></span><span class="tt">Overblik<small>Noter og kommentarer</small></span><span class="chev">${ic.chev}</span></button>
    </aside>
    <section class="docwrap">
      <div class="doctools">
        <button class="ib" onclick="go('#/')" title="Til overblik">${ic.back}</button><span>${m.date} ${m.time.split(' ')[0]}</span>
        <span class="arrows"><button ${n === 1 ? 'disabled' : ''} onclick="go('#/moede/${m.id}/${n - 1}')" title="Forrige punkt">${ic.up}</button><button ${n === m.items.length ? 'disabled' : ''} onclick="go('#/moede/${m.id}/${n + 1}')" title="Næste punkt">${ic.down}</button></span>
        <span class="t">Punkt ${n}</span>
        <button class="ib" style="color:var(--violet)" onclick="S.tab='ai';render()" title="AI-resumé">${ic.spark}</button>
        <button class="ib hm" onclick="${it.bilag.length ? `openBilag(0)` : `toast('Ingen bilag på dette punkt')`}" title="Bilag">${ic.pdf}</button>
        <button class="ib hm" onclick="S.hl=!S.hl;render()" title="Vis/skjul overstregninger">${ic.book}</button>
        <button class="ib" onclick="S.tab='ask';render();setTimeout(()=>$('#q')&&$('#q').focus(),50)" title="Søg i sagen">${ic.search}</button>
      </div>
      <div class="docscroll">${page(m, n, it, k)}</div>
      <div class="dockbar"><button class="live-pill" onclick="go('#/afvikl/${m.id}/${n}')"><span class="L">L</span>Live</button>
        <div class="annot">${['#e8d94a', '#e23b3b', '#2fa84f', '#1777cf', '#9b59b6'].map((c, i) => `<button class="${S.pen === i ? 'on' : ''}" onclick="S.pen=${i};render()">${ic.pen}<i style="background:${c}"></i></button>`).join('')}
          <button onclick="S.hl=!S.hl;render()" title="Viskelæder">${ic.eraser}</button><button onclick="toast('Fortrudt')">${ic.undo}</button><button onclick="toast('Gentaget')">${ic.redo}</button><span class="pg">1 af ${Math.max(1, Math.ceil((it.pages || 1) / 10))}</span></div></div>
    </section>
    ${pop(m, n, it, k)}
  </div>`, 'moede');
}
function page(m, n, it, k) {
  if (it.lock) return `<div class="page"><div class="locked">${ic.lock}<h2>Lukket punkt</h2><p>Punktet behandles for lukkede døre og er kun tilgængeligt for udvalgets medlemmer.</p></div></div>`;
  const cc = S.comments[k].length;
  return `<div class="page ${S.hl ? '' : 'hl-off'}"><div class="tagline"><span class="tag t-blue">${it.type}</span></div>
    <h1>${it.t}</h1>
    <h4>Indhold</h4>
    <h4>Indstilling:</h4>
    <p><span class="mark-y">Forvaltningen indstiller til ${m.name}:</span></p>
    <button class="cbub" style="top:250px" onclick="S.tab='kom';render()">${ic.chat}${cc ? `<b>${cc}</b>` : ''}</button>
    <ol>${it.ind.map(x => `<li>${x}</li>`).join('')}</ol>
    <h4>Beskrivelse af sagen:</h4>${it.desc.map(p => `<p>${p}</p>`).join('')}
    ${it.econ ? `<h4>Økonomi:</h4><p>${it.econ}</p>` : ''}
    ${it.bilag.length ? `<h4>Bilag:</h4><div class="bilag">${it.bilag.map((b, i) => `<button class="bil" onclick="openBilag(${i})">${ic.pdf}${i + 1}. ${b[0]}${b[1] ? ` (${b[1]} s.)` : ''}</button>`).join('')}</div>` : ''}
    ${S.approved[k] ? `<h4>Beslutning:</h4><p><span class="mark-g">${S.drafts[k] || it.decision}</span></p>` : ''}
  </div>`;
}
function openBilag(i) { const r = route(); S.modal = { it: r.it, b: r.it.bilag[i] }; render(); }
function pop(m, n, it, k) {
  let b = '', compose = '';
  if (it.lock) b = `<div class="sub">AI er slået fra på lukkede punkter.</div>`;
  else if (S.tab === 'ai') {
    b = `<div class="sub">${it.pages || 1} sider · læsetid ca. ${Math.max(1, Math.round((it.pages || 1) * 1.7))} min → under 1 min</div>
      <ul class="ai-list">${it.sum.map(s => `<li>${s[0]}<br><span class="src">${s[1]}</span></li>`).join('')}</ul>
      ${it.memory ? `<div class="hist"><b>🏛 Kommunens hukommelse</b><br>${it.memory}<br><a onclick="S.trackSel='Klimahandleplan 2022–2026';go('#/opfolgning')">Se beslutningssporing →</a></div>` : ''}
      ${it.qa.length ? `<button class="btn btn-o" style="margin-top:12px" onclick="S.tab='ask';render()">✦ Stil spørgsmål til sagen</button>` : ''}
      <p class="sub" style="font-size:11px;margin-top:14px">AI benyttes som hjælpeværktøj – aldrig selvstændigt. Dansk hostet sprogmodel.</p>`;
  } else if (S.tab === 'ask') {
    const chat = S.chats[k] || [];
    b = `<div class="to">Svar med kilder fra sagens bilag og tidligere beslutninger</div>
      <div class="chips">${it.qa.map((x, i) => `<button class="chip" onclick="ask(${i})">${x.q}</button>`).join('')}<button class="chip" onclick="askText('Hvad har vi besluttet tidligere?')">Hvad har vi besluttet tidligere?</button></div>
      <div id="chat">${chat.map(c => `${c.r === 'me' ? `<div class="meta"><span>I dag</span><span>Dig</span></div>` : ''}<div class="bub ${c.r}">${c.t}</div>`).join('')}</div>`;
    compose = `<div class="compose"><input id="q" placeholder="Spørg sagen…" onkeydown="if(event.key==='Enter')askText(this.value)"><button class="send" onclick="askText($('#q').value)">Send</button></div>`;
  } else {
    b = `<div class="to">To: ${m.name} (alle medlemmer)</div>${S.comments[k].length ? S.comments[k].map(c => `<div class="meta"><span>${c.time}</span><span>${c.who}</span></div><div class="bub ${c.who === 'Dig' ? 'me' : 'other'}">${esc(c.txt)}</div>`).join('') : '<div class="sub">Ingen kommentarer endnu.</div>'}`;
    compose = `<div class="compose"><input id="c" placeholder="Ny kommentar" onkeydown="if(event.key==='Enter')addComment()"><button class="send" onclick="addComment()">Send</button></div>`;
  }
  const head = { ai: '✦ AI-resumé', ask: '✦ Spørg sagen', kom: 'Del kommentar' }[S.tab];
  return `<aside class="pop"><div class="ph">${head}<button class="plus" onclick="S.tab='kom';render();setTimeout(()=>$('#c')&&$('#c').focus(),50)" title="Ny kommentar">+</button></div>
    <div class="seg">${[['ai', 'Resumé'], ['ask', 'Spørg sagen'], ['kom', 'Kommentarer']].map(t => `<button class="${S.tab === t[0] ? 'on' : ''}" onclick="S.tab='${t[0]}';render()">${t[1]}</button>`).join('')}</div>
    <div class="pbody" id="pbody">${b}</div>${compose}</aside>`;
}
function pushAnswer(k, q, a) {
  (S.chats[k] = S.chats[k] || []).push({ r: 'me', t: esc(q) }, { r: 'ai', t: '<span class="typing"><i></i><i></i><i></i></span>' });
  render(); scrollChat();
  setTimeout(() => { const c = S.chats[k]; c[c.length - 1] = { r: 'ai', t: a }; render(); scrollChat(); }, 900);
}
function scrollChat() { const p = $('#pbody'); if (p) p.scrollTop = 1e6; }
function ask(i) { const r = route(); const x = r.it.qa[i]; pushAnswer(r.k, x.q, x.a + '<br>' + srcs(x.s)); }
function askText(v) {
  v = (v || '').trim(); if (!v) return;
  const r = route(), l = v.toLowerCase();
  if (/tidligere|før|historik|besluttet/.test(l)) {
    const mem = MEMORY.find(x => x.k.test(r.it.t.toLowerCase() + ' ' + l));
    return pushAnswer(r.k, v, mem ? `Om ${mem.t} har kommunen tidligere besluttet:<br>` + mem.r.map(x => `• ${x[0]}: ${x[1]} <span class="src">${x[2]}</span>`).join('<br>') : 'Jeg kan ikke finde tidligere beslutninger om emnet i kommunens mødearkiv.');
  }
  const words = l.split(/\W+/).filter(w => w.length > 3);
  let best = null, score = 0;
  r.it.qa.forEach(x => { const t = (x.q + ' ' + x.a).toLowerCase(); const s = words.filter(w => t.includes(w)).length; if (s > score) { score = s; best = x; } });
  if (!best && /kost|pris|økonomi|budget|mio|betal/.test(l)) best = r.it.qa.find(x => /kost|pris|betal|kasse/.test(x.q.toLowerCase()));
  pushAnswer(r.k, v, best ? best.a + '<br>' + srcs(best.s) : `Det kan jeg ikke finde i sagens bilag. ${r.it.econ ? 'Sagens økonomi: ' + r.it.econ : ''}`);
}
function addComment() { const v = ($('#c') || {}).value; if (!v || !v.trim()) return; const r = route(); S.comments[r.k].push({ who: 'Dig', time: 'Lige nu', txt: v.trim() }); render(); scrollChat(); toast('Kommentar delt med udvalget'); }

/* ---------- afvikl (sekretariat) ---------- */
function meetHead(m, right) {
  return `<div class="mhead"><div class="mbox"><h2>${m.name}</h2>
    <div class="cbtns"><button class="cbtn" title="Slet møde" onclick="toast('Sletning er ikke en del af konceptet')">${fi.trash}</button><button class="cbtn" title="Redigér møde" onclick="toast('Redigering af mødeoplysninger – ikke en del af konceptet')">${fi.pen}</button></div>
    <div class="mrow">${fi.users}<a onclick="toast('Udvalgets medlemmer')">${m.name}</a></div><div class="mrow">${fi.clock}<span>${m.date} <i>${m.time.replace(' – ', ' - ')}</i></span></div>
    <div class="mrow">${fi.pin}${m.place}</div><div class="mrow">${fi.user}<a onclick="toast('9 af 9 mødedeltagere er til stede')">Mødedeltagere</a></div></div><div>${right}</div></div>`;
}
function vAfvikl(r) {
  const { m, n, it, k } = r;
  const done = m.items.filter((x, i) => S.approved[key(m.id, i + 1)]).length;
  const tabs = `<div class="wtabs"><button class="${S.wtab === 'afvikl' ? 'on' : ''}" onclick="S.wtab='afvikl';render()">AFVIKL <span class="livebadge">● Live</span></button><button class="${S.wtab === 'referat' ? 'on' : ''}" onclick="S.wtab='referat';render()">REFERAT ${done === m.items.length ? `<span class="tchk">${chk}</span>` : `<span class="tgear">${fi.gear}</span>`}</button></div>
    <div class="wtabpane"><a class="laes" onclick="go('#/moede/${m.id}/${n}')">Læs ${ext}</a>
      ${S.wtab === 'afvikl'
        ? `<button class="btn btn-o" onclick="toast('Afstemning og punkt vises på storskærmen')">Vis på storskærm</button><span class="sp"></span><button class="btn btn-p" onclick="S.wtab='referat';render()">Gå til referat</button>`
        : `<button class="btn btn-o" onclick="toast('Referatet er sendt til gennemlæsning')">Send til gennemlæsning</button><span class="sp"></span><button class="btn btn-p" onclick="toast('${done} af ${m.items.length} beslutninger godkendt – frigivelse er ikke en del af konceptet')">Gå til frigivelse</button>`}</div>`;
  const list = `<div><button class="sortbtn" onclick="toast('Sortering af punkter – ikke en del af konceptet')">${sortI} Sortér</button><div class="alist">${m.items.map((x, i) => { const kk = key(m.id, i + 1), cur = n === i + 1 && S.wtab === 'afvikl';
    return `<div class="aitem ${cur ? 'on' : ''}" onclick="S.wtab='afvikl';S.editing=false;go('#/afvikl/${m.id}/${i + 1}')"><span class="st">${S.approved[kk] ? `<span class="okc">${chk}</span>` : fi.pen}</span>
      <span class="box"><span class="ncirc">${i + 1}</span><span class="txt">${x.t}</span></span>
      <span class="ab"><button class="cbtn" title="${x.lock ? 'Lukket punkt' : 'Åbent punkt'}" onclick="event.stopPropagation();toast('${x.lock ? 'Lukket punkt – kun for udvalgets medlemmer' : 'Åbent punkt – offentliggøres med referatet'}')">${x.lock ? fi.lock : fi.unlock}</button><button class="cbtn" title="Slet punkt" onclick="event.stopPropagation();toast('Sletning er ikke en del af konceptet')">${fi.trash}</button></span></div>`; }).join('')}</div>
    <button class="addpt" onclick="toast('Tilføj nyt punkt – ikke en del af konceptet')"><b>+</b>Tilføj nyt punkt</button></div>`;
  const right = S.wtab === 'referat' ? referat(m) : decisionPanel(m, n, it, k);
  const save = `<div class="savebox ${S.saved ? 'dirty' : ''}"><div><b>${S.saved ? 'Ændringer gemt' : 'Ingen ændringer'}</b><small>Sidst opdateret : ${S.saved || m.date.slice(0, 6) + '2026 - 15:16'}</small></div><span>${chk}</span></div>`;
  return shell(`<div class="pad">${meetHead(m, tabs)}<div class="cols">${list}${right}</div></div>${save}`, 'afvikl');
}
function decisionPanel(m, n, it, k) {
  const v = S.votes[k];
  const needsVote = !!it.vote;
  const voted = !needsVote || v === 'done';
  let vote = '';
  if (needsVote) vote = `<div class="wsec"><h5>Afstemning</h5>${v === 'done' ? `<div class="vote"><div><b style="color:#1d7a37">${it.vote[0]}</b>For</div><div><b style="color:#b52a2a">${it.vote[1]}</b>Imod</div><div><b>${it.vote[2]}</b>Undlod</div></div><span class="tag ${it.vote[0] > it.vote[1] ? 't-green' : 't-red'}">${it.vote[0] > it.vote[1] ? 'Vedtaget' : 'Forkastet'}</span>`
    : v === 'run' ? `<p><span class="spinner"></span> Afstemning i gang – medlemmerne stemmer i Prepare-appen…</p>`
    : `<p style="margin:0 0 12px">Indstillingen er klar til afstemning.</p><button class="btn btn-p" onclick="startVote('${k}')">Start afstemning</button>`}</div>`;
  const draft = S.drafts[k] || it.decision;
  const ai = `<div class="wsec"><h5><span class="spark">✦</span> AI-udkast til beslutning</h5>
    ${voted ? `<div class="draft" id="draft" contenteditable="${S.editing && !S.approved[k]}">${draft}</div>
      <div class="row" style="margin-top:12px">${S.approved[k]
        ? `<span class="done-ok">✓ Godkendt af sekretariatet</span><span style="flex:1"></span>${it.actions.length ? `<button class="btn btn-p" onclick="go('#/handling/${m.id}/${n}')">Næste skridt →</button>` : n < m.items.length ? `<button class="btn btn-p" onclick="go('#/afvikl/${m.id}/${n + 1}')">Næste punkt →</button>` : `<button class="btn btn-p" onclick="S.wtab='referat';render()">Se referat →</button>`}`
        : `${S.editing ? `<button class="btn btn-o" onclick="saveDraft('${k}')">Gem ændringer</button>` : `<button class="btn btn-o" onclick="S.editing=true;render();$('#draft').focus()">Redigér</button>`}<button class="btn btn-p" onclick="approve('${k}')">Godkend beslutning</button>`}</div>`
      : `<div class="draft" style="color:var(--muted)"><span class="typing"><i></i><i></i><i></i></span> AI lytter til mødet og skriver med…</div>`}</div>`;
  const bil = `<div class="wsec"><h5>Bilag</h5>${it.bilag.length ? `<div class="bilist">${it.bilag.map((b, i) => `<button onclick="openBilag(${i})">${ic.pdf}${b[0]}${b[1] ? `<small>${b[1]} sider</small>` : ''}</button>`).join('')}</div>` : ''}
    <div class="drop" onclick="toast('Upload af bilag – ikke en del af konceptet')">${fi.cloud}Drag/drop dine filer eller klik her for at uploade din(e) filer</div></div>`;
  return `<div class="wpanel"><div class="wh"><b>${n}.</b>${it.t}</div>${it.lock ? `<div class="wsec"><p>Lukket punkt – behandles for lukkede døre. Beslutningen fremgår kun af den lukkede beslutningsprotokol.</p></div>` : ''}${vote}${ai}${bil}</div>`;
}
function startVote(k) { S.votes[k] = 'run'; render(); setTimeout(() => { S.votes[k] = 'done'; render(); }, 1600); }
function saveDraft(k) { const d = $('#draft'); if (d) S.drafts[k] = d.innerHTML; S.editing = false; stamp(); render(); toast('Udkast gemt'); }
function stamp() { const d = new Date(), p = x => String(x).padStart(2, '0'); S.saved = `${p(d.getDate())}.${p(d.getMonth() + 1)}.${d.getFullYear()} - ${p(d.getHours())}:${p(d.getMinutes())}`; }
function approve(k) { if (S.editing) { const d = $('#draft'); if (d) S.drafts[k] = d.innerHTML; S.editing = false; } S.approved[k] = true; stamp(); render(); toast('Beslutning godkendt'); }
function referat(m) {
  return `<div class="wpanel"><div class="wh">Beslutningsprotokol · ${m.name} ${m.date}</div>${m.items.map((x, i) => { const kk = key(m.id, i + 1); return `<div class="wsec"><h5>${i + 1}. ${x.t}</h5>${S.approved[kk] ? `<div>${S.drafts[kk] || x.decision}</div>` : `<span class="sub">Ikke behandlet endnu · </span><a onclick="S.wtab='afvikl';go('#/afvikl/${m.id}/${i + 1}')">Behandl punkt</a>`}</div>`; }).join('')}</div>`;
}

/* ---------- beslutning → handling ---------- */
function vHandling(r) {
  const { m, n, it, k } = r;
  if (!S.approved[k]) return shell(`<div class="pad"><div class="mbox"><h2>Beslutningen er ikke godkendt endnu</h2><p>Godkend beslutningen under afviklingen, før opgaverne kan oprettes.</p><button class="btn btn-p" onclick="go('#/afvikl/${m.id}/${n}')">Gå til afvikling</button></div></div>`, 'afvikl');
  const st = S.acts[k] || 'idle';
  const sel = S.sel[k] = S.sel[k] || it.actions.map(() => true);
  return shell(`<div class="pad" style="max-width:1000px"><div class="crumbs"><a onclick="go('#/')">Overblik</a> / <a onclick="go('#/afvikl/${m.id}/${n}')">${m.name}</a> / Beslutning → handling</div>
    <div class="mbox" style="margin-bottom:16px"><span class="tag t-green">Beslutning godkendt</span><h2 style="margin-top:8px">Fra beslutning til handling</h2>
      <div class="sub">${m.name} · ${m.date} · Punkt ${n}: ${it.t}</div>
      <div class="flow"><span class="node t-green">Prepare · beslutning</span><span class="arr">→</span><span class="node t-blue">XFlow · arbejdsgange</span><span class="arr">→</span><span class="node t-violet">Plandisc · årshjul</span><span class="arr">→</span><span class="node t-amber">Opfølgning</span></div>
      <div class="sub"><span class="spark">✦</span> AI har fundet ${it.actions.length} ${it.actions.length === 1 ? 'opgave' : 'opgaver'} i beslutningen. Vælg dem, der skal oprettes.</div></div>
    ${it.actions.map((a, i) => `<label class="action"><input type="checkbox" ${sel[i] ? 'checked' : ''} ${st !== 'idle' ? 'disabled' : ''} onchange="S.sel['${k}'][${i}]=this.checked;render()"><span class="ncirc" style="font-size:13px;font-weight:700">${a[0]}</span><span><b>${a[2]}</b><div class="sub">${a[3]}</div></span>
      <span class="st">${!sel[i] ? '<span class="tag t-grey">Fravalgt</span>' : st === 'idle' ? `<span class="tag ${a[1]}">${a[4]}</span>` : st === 'run' && i >= (S.prog[k] || 0) ? '<span class="spinner"></span> Opretter…' : `<span class="row done-ok"><span class="okc">✓</span>Oprettet i ${a[4]}</span>`}</span></label>`).join('')}
    <div class="row" style="margin-top:8px">${st === 'done'
      ? `<span class="done-ok">Opgaverne er oprettet og koblet til beslutningen.</span><span style="flex:1"></span><button class="btn btn-o" onclick="go('#/afvikl/${m.id}/${Math.min(n + 1, m.items.length)}')">Tilbage til mødet</button><button class="btn btn-p" onclick="S.trackSel='${esc(it.t)}';go('#/opfolgning')">Se opfølgning →</button>`
      : `<button class="btn btn-o" onclick="go('#/afvikl/${m.id}/${n}')">Tilbage</button><span style="flex:1"></span><button class="btn btn-p" ${st === 'run' || !sel.some(Boolean) ? 'disabled' : ''} onclick="runActions('${k}')">Opret ${sel.filter(Boolean).length} valgte</button>`}</div>
    <div class="hist" style="margin-top:18px"><b>Hvorfor det betyder noget:</b> I dag stopper mødesystemet ved referatet. Her bliver beslutningen sporbar hele vejen fra dagsorden til gennemførelse – på tværs af tre produkter, som kommunerne allerede bruger.</div></div>`, 'afvikl');
}
function runActions(k) {
  const r = route(); S.acts[k] = 'run'; S.prog[k] = 0; render();
  const idx = S.sel[k].map((v, i) => v ? i : -1).filter(i => i >= 0);
  const t = setInterval(() => {
    S.prog[k]++;
    if (S.prog[k] >= r.it.actions.length) {
      clearInterval(t); S.acts[k] = 'done';
      if (!S.created.find(c => c.t === r.it.t)) S.created.unshift({ t: r.it.t, u: ({ ou: 'ØU', kmu: 'KMU', by: 'BY' })[r.m.id], d: r.m.date.slice(0, 6) + r.m.date.slice(8), o: 'Forvaltningen', p: 5, s: ['t-green', 'Netop oprettet'], log: idx.map(i => ['#1777cf', 'Nu', r.it.actions[i][2] + ' – oprettet i ' + r.it.actions[i][4]]), fresh: true });
    }
    render();
  }, 650);
}

/* ---------- beslutningssporing ---------- */
function trackRows() { return [...S.created, ...TRACK]; }
function memSearch(q) {
  q = (q || '').toLowerCase(); if (!q) { S.memRes = null; return; }
  const hit = MEMORY.find(m => m.k.test(q));
  S.memRes = hit ? { t: hit.t, r: hit.r } : { t: null, r: [] };
}
function vOpf() {
  const rows = trackRows();
  const f = { all: () => true, late: r => /Forsinket|overskredet/.test(r.s[1]), run: r => /I gang|Netop/.test(r.s[1]), done: r => r.s[1] === 'Gennemført' }[S.filter];
  const shown = rows.filter(f);
  const sel = rows.find(r => r.t === S.trackSel);
  const cnt = k => rows.filter({ late: r => /Forsinket|overskredet/.test(r.s[1]), run: r => /I gang|Netop/.test(r.s[1]), done: r => r.s[1] === 'Gennemført' }[k]).length;
  const res = S.memRes ? `<div class="res">${S.memRes.t ? `<b>${S.memRes.r.length} relevante beslutninger om ${S.memRes.t}:</b><br>${S.memRes.r.map(x => `• <b>${x[0]}</b>: ${x[1]} <span class="src">${x[2]}</span>`).join('<br>')}` : 'Ingen beslutninger fundet. Prøv fx "kollektiv trafik", "skoler" eller "klima".'}</div>` : '';
  return shell(`<div class="pad"><div class="crumbs"><a onclick="go('#/')">Overblik</a> / Beslutningssporing</div>
    <h1>Beslutningssporing</h1><div class="sub">Følg hvordan politiske beslutninger bliver ført ud i livet</div>
    <div class="stat">${[['all', rows.length + 120, 'beslutninger i 2026'], ['run', cnt('run'), 'i gang'], ['late', cnt('late'), 'forsinkede'], ['done', cnt('done'), 'gennemført']].map(s => `<button class="${S.filter === s[0] ? 'on' : ''}" onclick="S.filter='${s[0]}';render()"><b style="${s[0] === 'late' ? 'color:#b52a2a' : s[0] === 'done' ? 'color:#1d7a37' : ''}">${s[1]}</b><span class="sub">${s[2]}</span></button>`).join('')}</div>
    <div class="search"><input id="sq" value="${esc(S.query)}" placeholder="Spørg kommunens hukommelse, fx: Hvad har vi besluttet om kollektiv trafik?" onkeydown="if(event.key==='Enter'){S.query=this.value;askMem()}"><button class="btn btn-p" onclick="S.query=$('#sq').value;askMem()">✦ Søg</button></div>
    <div class="chips">${['Hvad har vi besluttet om kollektiv trafik i landdistrikterne?', 'Beslutninger om skoler og børneområdet', 'Klima og energi'].map(q => `<button class="chip" onclick="S.query='${q}';askMem()">${q}</button>`).join('')}</div>
    <div id="sres">${res}</div>
    <div class="tw"><div class="wpanel" style="padding:6px 10px;overflow:auto"><table><thead><tr><th>Beslutning</th><th class="hm">Udvalg</th><th class="hm">Dato</th><th class="hm">Ansvarlig</th><th>Fremdrift</th><th>Status</th></tr></thead>
      <tbody>${shown.map(r => `<tr class="${S.trackSel === r.t ? 'on' : ''}" onclick="S.trackSel='${esc(r.t)}';render()"><td><b>${r.t}</b></td><td class="hm">${r.u}</td><td class="hm">${r.d}</td><td class="hm">${r.o}</td><td><div class="bar"><i style="width:${r.p}%"></i></div></td><td><span class="tag ${r.s[0]}">${r.s[1]}</span></td></tr>`).join('') || '<tr><td colspan="6" class="sub">Ingen beslutninger i dette filter.</td></tr>'}</tbody></table></div>
    <div class="detail">${sel ? `<span class="tag ${sel.s[0]}">${sel.s[1]}</span><h2 style="margin:8px 0 4px;font-size:18px">${sel.t}</h2><div class="sub">${sel.u} · ${sel.d} · ${sel.o}</div>
      <div class="row" style="margin-top:12px"><div class="bar" style="width:100%"><i style="width:${sel.p}%"></i></div><b>${sel.p}%</b></div>
      <ul class="tl">${sel.log.map(l => `<li><span class="dot" style="background:${l[0]}"></span><span><b>${l[1]}</b> · ${l[2]}</span></li>`).join('')}</ul>
      ${/Klimahandleplan 2027/.test(sel.t) ? `<button class="btn btn-o" style="margin-top:12px" onclick="go('#/moede/ou/3')">Åbn sagen i Prepare</button>` : `<button class="btn btn-o" style="margin-top:12px" onclick="toast('Påmindelse sendt til ${sel.o}')">Send påmindelse</button>`}`
      : '<div class="sub">Vælg en beslutning for at se forløbet.</div>'}</div></div></div>`, 'opfolgning');
}
function askMem() { const el = $('#sres'); memSearch(S.query); if (el) { el.innerHTML = '<div class="res"><span class="typing"><i></i><i></i><i></i></span></div>'; setTimeout(render, 800); } else render(); }

/* ---------- årshjul ---------- */
function vAarshjul() {
  const months = ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'];
  const by = {}; WHEEL.forEach(e => (by[e.m] = by[e.m] || []).push(e));
  return shell(`<div class="pad"><div class="crumbs"><a onclick="go('#/')">Overblik</a> / Årshjul</div>
    <h1>Årshjul 2026 <span class="tag t-violet" style="vertical-align:middle">Synkroniseret fra Plandisc</span></h1><div class="sub">Politiske møder, budgetproces og afrapporteringer samlet ét sted</div>
    <div class="grid2"><div class="wcard" style="display:grid;place-items:center">${ring(420, true)}</div>
    <div class="wcard">${Object.keys(by).sort((a, b) => a - b).map(mi => `<div class="h2" style="margin-top:8px">${months[mi]}</div>${by[mi].map(e => `<div class="mcard" style="padding:10px;margin-bottom:6px;border:1px solid var(--line)" onclick="wheelGo('${esc(e.t)}')"><span style="width:12px;height:12px;border-radius:50%;background:${e.c}"></span><b style="flex:1">${e.t}</b><span class="chev">${ic.chev}</span></div>`).join('')}`).join('')}</div></div></div>`, 'aarshjul');
}

/* ---------- render ---------- */
function render() {
  const r = route();
  const views = { home: () => shell(vHome(), 'home'), moede: () => vMoede(r), afvikl: () => vAfvikl(r), handling: () => vHandling(r), opfolgning: vOpf, aarshjul: vAarshjul };
  $('#app').innerHTML = (views[r.v] || views.home)();
  const on = document.querySelector('.side .scard.on'); if (on && window.innerWidth <= 900) on.scrollIntoView({ inline: 'center', block: 'nearest' });
  document.title = 'Prepare – ' + ({ home: 'Overblik', moede: r.m.name, afvikl: 'Afvikling', handling: 'Beslutning → handling', opfolgning: 'Beslutningssporing', aarshjul: 'Årshjul' }[r.v] || 'Overblik');
}
window.addEventListener('hashchange', () => { S.menu = null; S.modal = null; S.editing = false; render(); const mn = $('main'); if (mn) mn.scrollTop = 0; });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && (S.modal || S.menu)) { S.modal = null; S.menu = null; render(); } });
render();
