/* Marketplace: product tiles, searchable catalogue and one enquiry wizard with a journey per category.
   No prices are shown: live insurer quotes are not connected. Enquiries go out by WhatsApp + email (same as the site's callback form). */
(() => {
'use strict';
const MP = { wa: '917373790009', email: 'YOUR_CLIENT_EMAIL@gmail.com' }; // keep in sync with script.js
const f = (k, l, t, o, r) => ({ k, l, t: t || 'text', o, r });
const sel = (k, l, o) => f(k, l, 'select', o);
const AGE = f('age', 'Age (years)', 'number', null, [18, 70]);
const GEN = sel('gender', 'Gender', ['Male', 'Female', 'Other']);
const INC = sel('income', 'Annual income', ['Below ₹3 lakh', '₹3–6 lakh', '₹6–12 lakh', '₹12–25 lakh', 'Above ₹25 lakh']);
const COV = sel('cover', 'Life cover wanted', ['₹50 lakh', '₹1 crore', '₹2 crore', '₹5 crore', 'Not sure yet']);
const TERM = f('term', 'Policy term (years)', 'number', null, [5, 60]);
const FREQ = sel('freq', 'Premium payment', ['Monthly', 'Quarterly', 'Half-yearly', 'Yearly']);
const BUD = sel('budget', 'Yearly premium budget', ['Up to ₹25,000', '₹25,000–50,000', '₹50,000–1 lakh', 'Above ₹1 lakh']);
const PAY = sel('payout', 'Payout preference', ['Lump sum at the end', 'Regular income', 'Not sure yet']);
const PA = sel('cover', 'Cover wanted', ['₹10 lakh', '₹25 lakh', '₹50 lakh', '₹1 crore']);
const CITY = Object.assign(f('city', 'City or PIN code'), { dl: 'mpCities' });
const STATE = Object.assign(f('state', 'State'), { dl: 'mpStates' });
const POL = sel('policy', 'Policy type', ['Third-party only', 'Own damage only', 'Comprehensive', 'Not sure']);
const YR = f('year', 'Registration year', 'number', null, [1990, 2026]);
const REG = f('reg', 'Registration number (optional)');
const EXP = [sel('status', 'Vehicle status', ['New vehicle', 'Existing vehicle']), f('expiry', 'Policy expiry date (optional)', 'date'), f('insurer', 'Current insurer (optional)'), POL];
const HEALTH = [['Location', [STATE, CITY]], ['Cover', [
  sel('sum', 'Sum insured', ['₹5 lakh', '₹10 lakh', '₹15 lakh', '₹25 lakh', '₹50 lakh', '₹1 crore']),
  sel('ctype', 'Cover type', ['Family floater', 'Individual for each member', 'Not sure yet']),
  sel('dur', 'Policy duration', ['1 year', '2 years', '3 years']), f('addon', 'Add-ons wanted (optional)')]]];

const C = [
{ id: 'term', n: 'Term life insurance', i: '🛡️', g: 'Life & savings', l: 'index.html#term-insurance', d: 'Pure protection for your family', s: [['About you', [AGE, GEN, sel('tobacco', 'Tobacco use', ['No', 'Yes']), INC]], ['Cover', [COV, TERM, FREQ]]] },
{ id: 'women', n: "Women's term insurance", i: '👩', g: 'Life & savings', d: 'Term cover designed around your needs', s: [['About you', [AGE, INC, sel('work', 'Occupation', ['Salaried', 'Self-employed', 'Homemaker'])]], ['Cover', [COV, TERM]]] },
{ id: 'invest', n: 'Investment plans', i: '🪙', g: 'Life & savings', l: 'index.html#savings-income', d: 'Long-term savings with insurance', s: [['Your goal', [AGE, sel('goal', 'Goal', ['Wealth growth', 'Child education', 'Retirement', 'Tax saving', 'Regular income']), BUD, f('dur', 'Policy duration (years)', 'number', null, [5, 40]), PAY]]] },
{ id: 'guaranteed', n: 'Guaranteed return plans', i: '💰', g: 'Life & savings', d: 'Fixed payouts as per plan terms', s: [['Your plan', [AGE, BUD, f('ppt', 'Premium payment term (years)', 'number', null, [5, 40]), PAY]]] },
{ id: 'child', n: 'Child savings plans', i: '🎓', g: 'Life & savings', l: 'index.html#child-education', d: 'Plan early for education and milestones', s: [['Your child', [f('cage', 'Child age (years)', 'number', null, [0, 17]), AGE, sel('goal', 'Goal', ['Higher education', 'Marriage', 'Both']), BUD]]] },
{ id: 'retire', n: 'Retirement and pension plans', i: '🌅', g: 'Life & savings', l: 'index.html#retirement-pension', d: 'Income for the years after work', s: [['Retirement', [AGE, f('rage', 'Planned retirement age', 'number', null, [40, 75]), f('need', 'Monthly income needed later (₹)', 'number', null, [0, 1e7]), BUD]]] },
{ id: 'health', n: 'Health insurance', i: '❤️', g: 'Health & accident', l: 'index.html#health-insurance', d: 'Hospital costs for you and your family', h: 1, s: HEALTH },
{ id: 'family-health', n: 'Family health insurance', i: '👨‍👩‍👧', g: 'Health & accident', d: 'One cover for the whole family', h: 1, s: HEALTH },
{ id: 'critical', n: 'Critical illness insurance', i: '🩺', g: 'Health & accident', d: 'Lump-sum cover for listed illnesses', s: [['About you', [AGE, CITY, PA]]] },
{ id: 'accident', n: 'Personal accident insurance', i: '🦺', g: 'Health & accident', d: 'Cover for accidental injury or death', s: [['About you', [AGE, f('occ', 'Occupation'), PA]]] },
{ id: 'car', n: 'Car insurance', i: '🚗', g: 'Motor', d: 'Own damage and third-party cover', s: [['Vehicle', [REG, f('make', 'Make'), f('model', 'Model and variant'), YR, sel('fuel', 'Fuel', ['Petrol', 'Diesel', 'CNG', 'Electric']), sel('use', 'Use', ['Private', 'Commercial'])]], ['Existing insurance', EXP]] },
{ id: 'two', n: 'Two-wheeler insurance', i: '🛵', g: 'Motor', d: 'Motorcycles and scooters', s: [['Vehicle', [REG, sel('vtype', 'Type', ['Motorcycle', 'Scooter', 'Electric']), f('make', 'Make'), f('model', 'Model and variant'), YR]], ['Existing insurance', EXP]] },
{ id: 'commercial', n: 'Commercial vehicle insurance', i: '🚚', g: 'Motor', d: 'Trucks, taxis, buses and more', s: [['Vehicle', [sel('vtype', 'Vehicle type', ['Goods carrier', 'Passenger bus or van', 'Taxi', 'Auto-rickshaw', 'Tractor', 'Other']), REG, f('make', 'Make and model'), YR, f('fleet', 'Vehicles to cover', 'number', null, [1, 1000])]], ['Existing insurance', EXP]] },
{ id: 'travel', n: 'Travel insurance', i: '✈️', g: 'Travel & home', d: 'Medical, baggage and trip cover', s: [['Trip', [f('dest', 'Destination country or countries'), f('from', 'Start date', 'date'), f('to', 'End date', 'date'), f('pax', 'Number of travellers', 'number', null, [1, 20]), f('ages', 'Traveller ages (for example 34, 32, 6)'), sel('purpose', 'Trip purpose', ['Leisure', 'Business', 'Study', 'Work', 'Pilgrimage']), sel('trip', 'Trip type', ['Single trip', 'Multi-trip (yearly)'])]]] },
{ id: 'home', n: 'Home insurance', i: '🏠', g: 'Travel & home', d: 'Building and contents cover', s: [['Your home', [CITY, sel('own', 'Ownership', ['Owned', 'Rented']), sel('what', 'Cover for', ['Building', 'Contents', 'Both']), f('value', 'Approximate value to insure (₹)', 'number', null, [0, 1e9])]]] },
{ id: 'group', n: 'Employee group insurance', i: '👥', g: 'Business', d: 'Health, life and accident for staff', s: [['Your company', [f('co', 'Company name'), f('emp', 'Number of employees', 'number', null, [2, 100000]), CITY, sel('gtype', 'Cover needed', ['Group health', 'Group term life', 'Group accident', 'Not sure yet'])]]] },
{ id: 'business', n: 'Business insurance', i: '🏪', g: 'Business', d: 'Shop, office, stock and liability', s: [['Your business', [f('btype', 'Type of business'), CITY, sel('risk', 'Cover needed', ['Fire and burglary', 'Liability', 'Stock', 'Machinery', 'Package for everything', 'Not sure yet']), f('assets', 'Approximate assets to insure (₹)', 'number', null, [0, 1e10])]]] },
{ id: 'marine', n: 'Marine and cargo insurance', i: '🚢', g: 'Business', d: 'Goods in transit by road, rail, sea or air', s: [['Shipment', [f('cargo', 'Cargo type'), sel('mode', 'Transport', ['Road', 'Rail', 'Sea', 'Air']), f('route', 'Route (from – to)'), sel('often', 'How often', ['Single shipment', 'Regular shipments']), f('val', 'Value per shipment (₹)', 'number', null, [0, 1e10])]]] },
{ id: 'cyber', n: 'Cyber insurance', i: '💻', g: 'Business', d: 'Cover for data and online risks', s: [['Your business', [f('btype', 'Type of business'), f('emp', 'Number of employees', 'number', null, [1, 100000]), sel('data', 'Customer data stored online', ['Yes', 'No', 'Not sure'])]]] },
{ id: 'other', n: 'Other insurance products', i: '📋', g: 'Business', d: 'Tell us what you want to insure', s: [['Your need', [f('need', 'What do you want to insure?', 'textarea')]]] },
{ id: 'claim', n: 'Claim assistance', i: '🤝', g: 'Services', d: 'Help with filing an insurer claim', s: [['Your claim', [sel('ctype', 'Claim for', ['Life', 'Health', 'Motor', 'Other']), f('insurer', 'Insurer'), f('about', 'What happened (short, optional)', 'textarea')]]] },
{ id: 'renew', n: 'Policy renewal', i: '🔄', g: 'Services', d: 'Renew an existing policy on time', s: [['Your policy', [sel('ptype', 'Policy type', ['Life', 'Health', 'Motor', 'Other']), f('insurer', 'Insurer'), f('due', 'Renewal due date', 'date')]]] },
{ id: 'docs', n: 'Policy documents', i: '📄', g: 'Services', d: 'Copies of policy papers and receipts', s: [['Documents', [sel('ptype', 'Policy type', ['Life', 'Health', 'Motor', 'Other']), f('insurer', 'Insurer'), f('about', 'Which document do you need? (optional)', 'textarea')]]] }
];
const byId = id => C.find(c => c.id === id);
const REL = ['Self', 'Spouse', 'Son', 'Daughter', 'Father', 'Mother', 'Other'], ONCE = ['Self', 'Spouse', 'Father', 'Mother'];
const STATES = 'Andhra Pradesh,Karnataka,Kerala,Tamil Nadu,Telangana,Puducherry,Maharashtra,Gujarat,Delhi,West Bengal,Uttar Pradesh,Rajasthan,Madhya Pradesh,Punjab,Haryana,Bihar,Odisha,Assam,Other'.split(',');
const CITIES = 'Erode,Coimbatore,Chennai,Salem,Tiruppur,Madurai,Tiruchirappalli,Namakkal,Karur,Mettur,Bhavani,Gobichettipalayam'.split(',');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

const fh = x => {
  const id = 'mp_' + x.k, v = st.d[x.k] == null ? '' : st.d[x.k], req = /optional/i.test(x.l) ? '' : ' required';
  let el;
  if (x.t === 'select') el = `<select id="${id}" name="${x.k}"${req}><option value="">Select</option>${x.o.map(o => `<option${o === v ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  else if (x.t === 'textarea') el = `<textarea id="${id}" name="${x.k}" rows="3"${req}>${esc(v)}</textarea>`;
  else el = `<input id="${id}" name="${x.k}" type="${x.t}"${x.r ? ` min="${x.r[0]}" max="${x.r[1]}"` : ''}${x.t === 'number' ? ' inputmode="numeric"' : ''}${x.dl ? ` list="${x.dl}"` : ''} value="${esc(v)}"${req}>`;
  return `<label for="${id}">${esc(x.l)}${el}</label>`;
};
const flds = a => a.map(fh).join('');

/* ---- wizard state ---- */
const st = { c: null, i: 0, d: {}, steps: [], busy: false, opener: null };
let modal, body;
const NAME = f('name', 'Full name'), MOB = f('mobile', 'Mobile number', 'tel'), MAIL = f('email', 'Email (optional)', 'email');
const TIME = sel('time', 'Best time to call (optional)', ['Morning', 'Afternoon', 'Evening']);
const contact = { t: 'Your contact details',
  r: () => `<p class="mp-hint">We use these only to contact you about this enquiry. No payment, ID or medical details are asked here.</p>${flds([NAME, MOB, MAIL, TIME])}
    <label class="check"><input type="checkbox" name="consent"${st.d.consent ? ' checked' : ''}> <span>I agree to be contacted about this enquiry. <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a></span></label>`,
  v: () => st.d.name.length < 2 ? 'Enter your full name.' : !/^[6-9]\d{9}$/.test(st.d.mobile) ? 'Enter a valid 10-digit mobile number.'
    : st.d.email && !/^\S+@\S+\.\S+$/.test(st.d.email) ? 'Enter a valid email address, or leave it empty.' : !st.d.consent ? 'Please accept the privacy consent to continue.' : '' };

const members = { t: 'Who needs cover',
  r: () => `<p class="mp-hint">Choose everyone to cover. Add a relation again for more than one child.</p>
    <div class="mp-chips">${REL.map(r => `<button type="button" class="mp-chip" data-a="add" data-v="${r}">+ ${r}</button>`).join('')}</div>
    <ul class="mp-sel" aria-label="Selected members">${(st.d.members || []).map((m, i) => `<li>${esc(m.rel)}<button type="button" data-a="rm" data-v="${i}" aria-label="Remove ${esc(m.rel)}">✕</button></li>`).join('') || '<li class="mp-empty">No one selected yet</li>'}</ul>`,
  v: () => (st.d.members || []).length ? '' : 'Choose at least one person to cover.' };
const ages = { t: 'Member details',
  r: () => `<p class="mp-hint">Age is enough to start. No medical details are needed now; your advisor asks only what an insurer requires for a real quote.</p>${st.d.members.map((m, i) => `<label for="mage${i}">${esc(m.rel)}: age (years)<input id="mage${i}" name="mage${i}" type="number" min="0" max="100" inputmode="numeric" value="${esc(m.age)}" required></label>`).join('')}`,
  v: () => { for (let i = 0; i < st.d.members.length; i++) { const a = st.d['mage' + i]; if (a === '' || !(+a >= 0 && +a <= 100)) return `Enter an age between 0 and 100 for ${st.d.members[i].rel}.`; st.d.members[i].age = a; } return ''; } };

function build(c) {
  const steps = [];
  if (c.h) steps.push(members, ages);
  c.s.forEach(([t, fl]) => steps.push({ t, f: fl }));
  steps.push(contact);
  return steps;
}
const collect = () => body.querySelectorAll('[name]').forEach(el => { st.d[el.name] = el.type === 'checkbox' ? el.checked : el.value.trim(); });
const missing = fl => {
  for (const x of fl) {
    const el = body.querySelector(`[name="${x.k}"]`); if (!el) continue;
    const n = x.l.replace(/ \(.*\)/, ''), v = st.d[x.k];
    if (el.required && !v) return `Please fill in “${n}”.`;
    if (v && !el.checkValidity()) return el.min !== '' && el.type === 'number' ? `${n} must be between ${el.min} and ${el.max}.` : `Check “${n}”.`;
  }
  return '';
};
const err = m => { const e = body.querySelector('#mpErr'); if (e) e.textContent = m; };

function show() {
  const s = st.steps[st.i], n = st.steps.length, last = st.i === n - 1;
  body.innerHTML = `<div class="mp-prog" role="progressbar" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${st.i + 1}"><span style="width:${(st.i + 1) / n * 100}%"></span></div>
    <p class="mp-step">Step ${st.i + 1} of ${n}</p><h3 id="mpTitle">${esc(st.c.n)}: ${esc(s.t)}</h3>
    <form id="mpForm" novalidate>${s.r ? s.r() : flds(s.f)}<p class="msg err" id="mpErr" role="alert"></p>
    <div class="mp-actions">${st.i ? '<button type="button" class="btn ghost-dark" data-a="back">Back</button>' : '<span></span>'}<button class="btn gold" type="submit">${last ? 'Send enquiry' : 'Continue'}</button></div></form>`;
  const first = body.querySelector('input:not([type=checkbox]),select,textarea,.mp-chip'); if (first) first.focus();
}

function summary() {
  const L = [], d = st.d;
  if (st.c.h) L.push('Members: ' + d.members.map(m => `${m.rel} (${m.age})`).join(', '));
  st.steps.forEach(s => (s.f || []).forEach(x => { if (d[x.k]) L.push(x.l.replace(/ \(optional\)/, '') + ': ' + d[x.k]); }));
  L.push('Name: ' + d.name, 'Mobile: ' + d.mobile); if (d.email) L.push('Email: ' + d.email); if (d.time) L.push('Best time: ' + d.time);
  return L;
}

async function send() {
  const d = st.d, key = 'mp_sent_' + d.mobile + st.c.id;
  try { if (Date.now() - +sessionStorage.getItem(key) < 3e5) return done(null, false, true); } catch (e) {}
  if (st.busy) return; st.busy = true;
  body.querySelector('button[type=submit]').disabled = true; err('Sending…');
  const lines = summary(), text = 'Hello Sivaani Associate, I would like a quote.\nInsurance: ' + st.c.n + '\n' + lines.join('\n');
  const waUrl = 'https://wa.me/' + MP.wa + '?text=' + encodeURIComponent(text);
  const win = window.open(waUrl, '_blank', 'noopener');   // opened inside the click so browsers allow it
  let emailed = false;
  if (!/YOUR_/.test(MP.email)) try {
    const r = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(MP.email), { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'New quote enquiry: ' + st.c.n + ' (' + d.name + ')', _template: 'table', _captcha: 'false', Insurance: st.c.n, Details: lines.join('\n'), Source: 'Marketplace form' }) });
    emailed = r.ok;
  } catch (e) { console.error(e); }
  if (typeof window.saveLeadToSupabase === 'function') try { await window.saveLeadToSupabase({ category: st.c.id, details: lines }); } catch (e) { console.error(e); }
  try { sessionStorage.setItem(key, Date.now()); } catch (e) {}
  st.busy = false; done(waUrl, emailed, false, !!win);
}
function done(waUrl, emailed, dup, opened) {
  body.innerHTML = `<div class="mp-done"><h3 id="mpTitle">${dup ? 'Already sent' : 'Enquiry ready'}</h3>
    <p>${dup ? 'We already have this enquiry from the last few minutes. Your advisor will call you.' : opened ? 'WhatsApp opened with your details. Press Send there to finish.' : 'Tap the button to send your details on WhatsApp.'}${emailed ? ' A copy was also emailed to Sivaani Associate.' : ''}</p>
    ${waUrl ? `<p><a class="btn gold" href="${waUrl}" target="_blank" rel="noopener">Send on WhatsApp</a></p>` : ''}
    <p class="mp-hint">No premium is shown because live insurer quotes are not connected. Your advisor will share real quotes and policy terms from the insurer.</p>
    <button type="button" class="btn ghost-dark" data-a="close">Close</button></div>`;
}

function open(id, opener) {
  const c = byId(id); if (!c) return;
  Object.assign(st, { c, i: 0, d: c.h ? { members: [] } : {}, steps: build(c), busy: false, opener });
  modal.hidden = false; document.body.style.overflow = 'hidden'; show();
}
function close() { modal.hidden = true; document.body.style.overflow = ''; if (st.opener) st.opener.focus(); }

function init() {
  modal = document.createElement('div');
  modal.className = 'modal'; modal.hidden = true; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'mpTitle');
  modal.innerHTML = `<div class="modal-box mp-box"><button type="button" class="modal-x" aria-label="Close" data-a="close">✕</button><div id="mpBody"></div></div>
    <datalist id="mpStates">${STATES.map(s => `<option value="${s}">`).join('')}</datalist><datalist id="mpCities">${CITIES.map(s => `<option value="${s}">`).join('')}</datalist>`;
  document.body.appendChild(modal); body = modal.querySelector('#mpBody');

  modal.addEventListener('click', e => {
    if (e.target === modal) return close();
    const b = e.target.closest('[data-a]'); if (!b) return;
    const a = b.dataset.a;
    if (a === 'close') close();
    else if (a === 'back') { collect(); st.i--; show(); }
    else if (a === 'add') {
      const r = b.dataset.v, m = st.d.members;
      if (ONCE.includes(r) && m.some(x => x.rel === r)) return err(r + ' is already selected.');
      m.push({ rel: r, age: '' }); show();
    } else if (a === 'rm') { st.d.members.splice(+b.dataset.v, 1); show(); }
  });
  modal.addEventListener('submit', e => {
    e.preventDefault(); const s = st.steps[st.i]; collect();
    const m = s.v ? s.v() : missing(s.f); if (m) return err(m);
    if (st.i < st.steps.length - 1) { st.i++; show(); } else send();
  });
  addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') return close();
    if (e.key !== 'Tab') return;
    const q = [...modal.querySelectorAll('button,input,select,textarea,a[href]')].filter(x => !x.disabled && x.offsetParent);
    if (!q.length) return; const a = q[0], z = q[q.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  });
  document.addEventListener('click', e => { const t = e.target.closest('[data-open]'); if (t) { e.preventDefault(); open(t.dataset.open, t); } });

  const tile = c => `<button type="button" class="mp-tile" data-open="${c.id}"><span class="ico" aria-hidden="true">${c.i}</span><span class="lbl">${esc(c.n)}</span></button>`;
  document.querySelectorAll('[data-mp-grid]').forEach(el => { el.innerHTML = C.slice(0, +el.dataset.limit || C.length).map(tile).join(''); });

  const root = document.getElementById('mpCatalogue');
  if (root) {
    const q = document.getElementById('mpSearch'), chips = document.getElementById('mpChips'), GR = [...new Set(C.map(c => c.g))]; let g = 'All';
    chips.innerHTML = ['All', ...GR].map(x => `<button type="button" class="mp-chip" aria-pressed="${x === g}">${x}</button>`).join('');
    const card = c => `<article class="mp-card"><span class="ico" aria-hidden="true">${c.i}</span><h4>${esc(c.n)}</h4><p>${esc(c.d)}</p><div class="row"><button type="button" class="btn gold" data-open="${c.id}">${c.g === 'Services' ? 'Ask an advisor' : 'Get a quote'}</button>${c.l ? `<a class="lm" href="${c.l}">Learn more</a>` : ''}</div></article>`;
    const draw = () => {
      const k = q.value.trim().toLowerCase(), list = C.filter(c => (g === 'All' || c.g === g) && (!k || (c.n + ' ' + c.d).toLowerCase().includes(k)));
      root.innerHTML = list.length ? GR.map(x => { const l = list.filter(c => c.g === x); return l.length ? `<h3 class="mp-gh">${x}</h3><div class="mp-cards">${l.map(card).join('')}</div>` : ''; }).join('')
        : `<p class="mp-empty">Nothing matches “${esc(q.value)}”. Try a shorter word, or <a href="#" data-open="other">tell us what you need</a>.</p>`;
    };
    chips.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; g = b.textContent; [...chips.children].forEach(x => x.setAttribute('aria-pressed', x === b)); draw(); });
    q.addEventListener('input', draw); draw();
  }
  const h = location.hash.slice(1); if (byId(h)) open(h);
}
init();
})();
