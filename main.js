/* Sivaani Associate redesign. Edit CONFIG below; everything else is generic. */
const CONFIG = {
  /* Announcement bar messages (rotate every announceMs). No offers or guaranteed returns. */
  announcements: [
    "Protect your family's financial future.",
    'Explore life and health insurance solutions.',
    "Plan today for tomorrow's financial freedom.",
    'Book a personal insurance consultation.'
  ],
  announceMs: 4500,
  slideMs: 5000,
  /* >>> WHATSAPP NUMBER (the ONE place to edit). International format, digits only, NO "+" or spaces.
     Used by the main enquiry form and every product enquiry form. */
  whatsapp: '917373790009',              // existing verified WhatsApp number
  /* Enquiry email via FormSubmit (same service as the current site). Replace the placeholder
     with the owner's email. While it is a placeholder, the form only opens WhatsApp. */
  ownerEmail: 'YOUR_CLIENT_EMAIL@gmail.com'
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Announcement bar ---------- */
(function () {
  const el = $('#annText'), btn = $('#annPause');
  let i = 0, paused = reduce, t;
  el.textContent = CONFIG.announcements[0];
  const next = () => {
    if (paused) return;
    el.classList.add('out');
    setTimeout(() => { i = (i + 1) % CONFIG.announcements.length; el.textContent = CONFIG.announcements[i]; el.classList.remove('out'); }, 400);
  };
  t = setInterval(next, CONFIG.announceMs);
  btn.addEventListener('click', () => {
    paused = !paused;
    btn.textContent = paused ? '▶' : '❚❚';
    btn.setAttribute('aria-label', paused ? 'Play announcements' : 'Pause announcements');
  });
  if (reduce) btn.textContent = '▶';
})();

/* ---------- Navigation ---------- */
(function () {
  const burger = $('#burger'), nav = $('#nav');
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  $$('.dd > button').forEach(b => b.addEventListener('click', () => {
    const dd = b.parentElement, open = dd.classList.toggle('open');
    b.setAttribute('aria-expanded', open);
  }));
  nav.addEventListener('click', e => { if (e.target.closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); } });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { nav.classList.remove('open'); $$('.dd.open').forEach(d => d.classList.remove('open')); } });
})();

/* ---------- Image slider ---------- */
(function () {
  const root = $('#slider'), slides = $$('.slide', root), dots = $('.dots', root);
  let i = 0, timer, hover = false;
  slides.forEach((s, n) => {
    const b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('aria-label', 'Slide ' + (n + 1));
    b.addEventListener('click', () => { go(n); restart(); });
    dots.appendChild(b);
    const img = $('img', s);   // graceful fallback if an image is missing
    img.addEventListener('error', () => { s.style.background = '#13244a'; img.style.display = 'none'; });
  });
  function go(n) {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => { s.classList.toggle('on', k === i); s.setAttribute('aria-hidden', k !== i); });
    $$('button', dots).forEach((b, k) => b.setAttribute('aria-selected', k === i));
  }
  const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => { if (!hover) go(i + 1); }, CONFIG.slideMs); };
  $('.prev', root).addEventListener('click', () => { go(i - 1); restart(); });
  $('.next', root).addEventListener('click', () => { go(i + 1); restart(); });
  root.addEventListener('mouseenter', () => hover = true);
  root.addEventListener('mouseleave', () => hover = false);
  root.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') { go(i - 1); restart(); } if (e.key === 'ArrowRight') { go(i + 1); restart(); } });
  let x0 = null;   // swipe
  root.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
  root.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); restart(); } x0 = null; });
  go(0); restart();
})();

/* ---------- Category tabs (content is general; no invented product terms) ---------- */
const TOPICS = [
  { id: 'life', label: 'Life Insurance', cat: 'Life Insurance', body: 'Life insurance pays a benefit to your nominee as per the policy terms. Some plans are protection only; others combine protection with savings. We help you compare options from LIC and Tata AIA.',
    pts: ['Check entry age, policy term and premium payment term.', 'Ask what is paid on death and on maturity, and what is guaranteed.', 'Read exclusions and lapse or surrender rules in the policy document.'] },
  { id: 'term', label: 'Term Insurance', cat: 'Term Insurance', body: 'Term insurance is pure protection: a benefit is paid to your nominee if the life insured passes away during the policy term, as per conditions. It generally does not build savings.',
    pts: ['Suits sole earners, parents and salaried employees.', 'Match the cover amount and term to loans and family costs.', 'Disclose health and lifestyle details accurately; it can affect claims.'] },
  { id: 'health', label: 'Health Insurance', cat: 'Health Insurance', body: 'A health plan covers eligible medical expenses up to the sum insured, as per its terms. We explain options from Star Health Insurance and Galaxy Health Insurance.',
    pts: ['Compare sum insured, waiting periods and sub-limits.', 'Check the hospital network near Erode and the claim process.', 'Decide between individual plans and a family floater.'] },
  { id: 'general', label: 'General Insurance', cat: 'General Insurance', body: 'General insurance covers items such as vehicles, home, travel and business. Availability depends on the insurer.',
    pts: ['<span class="flag">Owner to confirm which general insurance products are offered.</span>'] },
  { id: 'savings', label: 'Savings & Investment', cat: 'Savings and Investment', body: 'Savings plans help build money over time for a goal; some pay regular income later. Plans from Tata AIA such as Smart Income Plus are described in the insurer\'s brochure. Market-linked products do not guarantee returns.',
    pts: ['A long-term plan needs regular premiums for the full term.', 'Check surrender and lock-in conditions.', 'Ask which benefits are guaranteed and which are not.'] },
  { id: 'child', label: 'Child Education', cat: 'Child Education', body: 'Child education plans combine saving with protection and pay benefits at planned times as per plan terms. Starting early gives more time to plan.',
    pts: ['Match benefit dates to when you expect costs.', 'Check how long you must pay premiums.', 'Understand which benefits are guaranteed versus illustrative.'] },
  { id: 'retire', label: 'Retirement & Pension', cat: 'Retirement and Pension', body: 'A pension plan helps you build a fund during working years and receive income later, as per plan terms. Tata AIA Shubh Flexi Pension Plan is one option we can explain.',
    pts: ['Check when pension payouts begin and whether they are lifelong.', 'Note any market-linked component, which can go up or down.', 'Read exit, surrender and eligibility conditions.'] },
  { id: 'enq', label: 'Insurance Enquiry', cat: '', body: 'Not sure where to start? Tell us about your family and goals and we will explain suitable options in Tamil or English.', pts: [] },
  { id: 'career', label: 'Career / Business', cat: 'Career / Business Opportunity', body: 'Interested in working as an insurance advisor? Details, eligibility and any income potential are to be confirmed by Sivaani Associate. See the career section for more.', pts: [] }
];
(function () {
  const tabs = $('#tabs'), panels = $('#panels');
  TOPICS.forEach((t, n) => {
    const b = document.createElement('button');
    b.type = 'button'; b.role = 'tab'; b.id = 'tab-' + t.id; b.textContent = t.label;
    b.setAttribute('aria-controls', 'pn-' + t.id);
    b.addEventListener('click', () => show(t.id));
    b.addEventListener('keydown', e => {
      const k = { ArrowRight: 1, ArrowLeft: -1 }[e.key]; if (!k) return;
      const nx = TOPICS[(n + k + TOPICS.length) % TOPICS.length].id; show(nx); $('#tab-' + nx).focus();
    });
    tabs.appendChild(b);
    const p = document.createElement('div');
    p.className = 'panel'; p.id = 'pn-' + t.id; p.role = 'tabpanel'; p.setAttribute('aria-labelledby', b.id); p.hidden = true;
    const link = t.id === 'career' ? '<a class="btn gold" href="#career">Know More</a>' : '<a class="btn gold" href="#enquiry" data-cat="' + t.cat + '">Enquire Now</a>';
    p.innerHTML = '<h3>' + t.label + '</h3><p>' + t.body + '</p>' + (t.pts.length ? '<ul>' + t.pts.map(x => '<li>' + x + '</li>').join('') + '</ul>' : '') + link +
      '<p class="note">General information only. Terms, eligibility and premiums depend on the insurer.</p>';
    panels.appendChild(p);
  });
  function show(id) {
    TOPICS.forEach(t => {
      const on = t.id === id;
      $('#tab-' + t.id).setAttribute('aria-selected', on);
      $('#tab-' + t.id).tabIndex = on ? 0 : -1;
      $('#pn-' + t.id).hidden = !on;
    });
  }
  show('life');
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-tab]'); if (a) show(a.dataset.tab);
    const c = e.target.closest('[data-cat]');
    if (c && c.dataset.cat) $('#form select[name=category]').value = c.dataset.cat;
  });
})();

/* ---------- FAQ (one panel open at a time) ---------- */
(function () {
  const FAQ = [
    ['What is life insurance?', 'It pays a benefit to your nominee as per the policy terms. Some plans are protection only; others add savings.'],
    ['How is term insurance different?', 'Term insurance is pure protection for a fixed period and generally does not build savings.'],
    ['What should I check in a health plan?', 'Sum insured, waiting periods, exclusions, sub-limits, hospital network and the claim process.'],
    ['How can I plan for my child\'s education?', 'Start early, match benefit dates to expected costs, and check which benefits are guaranteed.'],
    ['How does retirement planning work?', 'You build a fund during working years and receive income later, as per the plan. Check what is guaranteed and any market-linked parts.'],
    ['What happens in a consultation?', 'We listen to your goals, explain suitable options and their conditions, and follow up after you decide.'],
    ['How do I contact Sivaani Associate?', 'Call +91 94437 04626, message us on WhatsApp at +91 73737 90009, or use the enquiry form.'],
    ['How is my enquiry handled?', 'The form emails the advisor (when the email is configured) and prepares a WhatsApp message. This site does not store enquiries in a database.']
  ];
  const box = $('#faqList');
  box.innerHTML = FAQ.map(q => '<details><summary>' + q[0] + '</summary><p>' + q[1] + '</p></details>').join('');
  box.addEventListener('toggle', e => { if (e.target.open) $$('details', box).forEach(d => d !== e.target && (d.open = false)); }, true);
})();

/* ---------- Enquiry form: fields that depend on the insurance category ----------
   Name, mobile and email stay in the form; everything else below is shown only for the chosen category.
   No ID numbers or documents are asked at this stage. */
window.ENQ_FIELDS = (function () {
  const f = $('#form'), box = $('#enqFields'), timeLbl = $('#enqTime');
  const none = { validate: () => true, text: () => '' };
  if (!f || !box) return none;
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  const now = new Date(), YEAR = now.getFullYear(), TODAY = now.toLocaleDateString('en-CA');
  const o = (k, l, t, req, x) => Object.assign({ k, l, t: t || 'text', req: !!req }, x || {});
  const T = (k, l, req, x) => o(k, l, 'text', req, x);
  const S = (k, l, opts, req) => o(k, l, 'select', req, { opts });
  const N = (k, l, req, min, max) => o(k, l, 'number', req, { min, max });
  const D = (k, l, req, x) => o(k, l, 'date', req, x);
  const GEN = S('gender', 'Gender', ['Male', 'Female', 'Other'], true);
  const DOB = D('dob', 'Date of birth', true, { dob: 1, min: (YEAR - 100) + '-01-01', max: TODAY });
  const OCC = T('occupation', 'Occupation');
  const INC = N('income', 'Annual income in ₹', false, 0, 1e10);
  const ITYPE = S('itype', 'Insurance type', ['Comprehensive', 'Third Party'], true);
  const EXPIRY = D('expiry', 'Existing policy expiry date');
  const REG = T('reg', 'Vehicle registration number', false, { max: 20 });

  /* time: true = the existing "Preferred contact time" field is shown for this category */
  const TYPES = {
    'Life Insurance': { name: 'Full name', time: 1, f: [DOB, GEN, OCC, INC,
      N('cover', 'Insurance cover amount required in ₹', true, 100000, 1e10),
      S('ptype', 'Policy type', ['Term', 'Whole Life', 'Savings', 'Child Plan', 'Retirement'], true)] },
    'Health Insurance': { name: 'Full name', time: 1, f: [DOB, GEN, T('city', 'City', true),
      N('members', 'Number of family members to cover', true, 1, 20),
      T('mages', 'Age of each family member, for example 34, 32, 6', true, { full: 1 }),
      S('plan', 'Individual or family floater', ['Individual', 'Family Floater'], true),
      S('existing', 'Existing health insurance', ['Yes', 'No'], true),
      S('cover', 'Coverage amount required', ['₹3 lakh', '₹5 lakh', '₹10 lakh', '₹15 lakh', '₹25 lakh', '₹50 lakh', '₹1 crore', 'Not sure yet'], true)] },
    'Education Insurance': { name: 'Parent / guardian name', time: 1, f: [T('child', "Child's name", true),
      D('cdob', "Child's date of birth", true, { dob: 1, min: (YEAR - 25) + '-01-01', max: TODAY }),
      N('cage', "Child's current age in years", true, 0, 25),
      S('goal', 'Education goal', ['School education', 'Graduation', 'Post-graduation', 'Professional course', 'Study abroad', 'Not sure yet'], true),
      N('eyear', 'Expected higher education year', true, YEAR, YEAR + 30),
      N('target', 'Target savings / coverage amount in ₹', true, 10000, 1e10)] },
    'Car Insurance': { name: 'Customer name', time: 1, f: [T('brand', 'Car brand', true), T('model', 'Car model', true),
      N('year', 'Manufacturing year', true, 1990, YEAR + 1), REG, ITYPE, EXPIRY, T('prev', 'Previous insurance provider')] },
    'Bike Insurance': { name: 'Customer name', time: 1, f: [T('brand', 'Bike brand', true), T('model', 'Bike model', true),
      N('year', 'Manufacturing year', true, 1990, YEAR + 1), REG, ITYPE, EXPIRY] },
    'Travel Insurance': { name: 'Full name', f: [T('dest', 'Destination country', true),
      D('from', 'Travel start date', true, { min: TODAY }), D('to', 'Travel end date', true, { min: TODAY }),
      N('pax', 'Number of travellers', true, 1, 20), T('ages', 'Traveller ages, for example 34, 32, 6', true, { full: 1 }),
      S('purpose', 'Travel purpose', ['Tourism', 'Business', 'Education'], true),
      S('cover', 'Coverage amount required', ['USD 50,000', 'USD 1,00,000', 'USD 2,50,000', 'USD 5,00,000', 'Not sure yet'], true)] },
    'Home Insurance': { name: 'Full name', f: [T('loc', 'Property location', true),
      S('ptype', 'Property type', ['House', 'Apartment', 'Villa'], true), S('own', 'Property ownership', ['Owner', 'Rented'], true),
      N('value', 'Property value in ₹', false, 0, 1e11), S('cover', 'Coverage required', ['Building', 'Contents', 'Both'], true)] },
    'Business Insurance': { name: 'Business owner name', f: [T('bname', 'Business name', true), T('btype', 'Business type', true),
      T('loc', 'Business location', true), N('emp', 'Number of employees', false, 0, 100000),
      N('value', 'Estimated business value in ₹', false, 0, 1e11),
      S('cover', 'Insurance coverage required', ['Fire and burglary', 'Liability', 'Stock', 'Machinery', 'Package for everything', 'Not sure yet'], true)] },
    'Personal Accident Insurance': { name: 'Full name', f: [DOB, OCC, INC,
      N('cover', 'Coverage amount required in ₹', true, 100000, 1e10),
      S('ptype', 'Policy type', ['Individual', 'Family', 'Group'], true)] },
    'Retirement / Pension Insurance': { name: 'Full name', f: [DOB, N('age', 'Current age in years', true, 18, 80),
      N('rage', 'Retirement age in years', true, 40, 80), N('budget', 'Monthly investment budget in ₹', true, 500, 1e8),
      N('need', 'Expected retirement income per month in ₹', false, 0, 1e8)] },
    'Career / Business Opportunity': { name: 'Full name', time: 1, f: [] }
  };

  const nameLbl = f.elements.name.parentElement.firstChild;
  const cat = () => TYPES[f.elements.category.value];
  const nm = x => 'q_' + x.k;
  const field = x => {
    const lbl = esc(x.l) + (x.req ? '' : ' (optional)'), r = x.req ? ' required' : '', cls = x.full ? ' class="full"' : '';
    let el;
    if (x.t === 'select') el = `<select name="${nm(x)}"${r}><option value="">Select</option>${x.opts.map(v => `<option>${esc(v)}</option>`).join('')}</select>`;
    else if (x.t === 'number') el = `<input name="${nm(x)}" type="number" inputmode="numeric" step="1" min="${x.min}" max="${x.max}"${r}>`;
    else if (x.t === 'date') el = `<input name="${nm(x)}" type="date"${x.min ? ` min="${x.min}"` : ''}${x.max ? ` max="${x.max}"` : ''}${r}>`;
    else el = `<input name="${nm(x)}" type="text" maxlength="${x.max || 100}"${r}>`;
    return `<label${cls}>${lbl}${el}<small class="err" aria-live="polite"></small></label>`;
  };
  function render() {
    const t = cat();
    box.innerHTML = t ? t.f.map(field).join('') : '';
    if (nameLbl && nameLbl.nodeType === 3) nameLbl.nodeValue = t ? t.name : 'Full name';
    if (timeLbl) { const show = !t || t.time; timeLbl.style.display = show ? '' : 'none'; timeLbl.querySelector('select').disabled = !show; }
  }
  f.elements.category.addEventListener('change', render);
  f.addEventListener('reset', () => setTimeout(render, 0));
  render();

  /* The homepage cards use older category names; map them onto the new list (and pre-fill the policy type where it is obvious). */
  const ALIAS = { 'Term Insurance': ['Life Insurance', { ptype: 'Term' }], 'Savings and Investment': ['Life Insurance', { ptype: 'Savings' }],
    'Child Education': ['Education Insurance'], 'Retirement and Pension': ['Retirement / Pension Insurance'],
    'General Insurance': [''], 'Financial Protection': [''] };
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-cat]'); if (!c || !c.dataset.cat) return;
    const a = ALIAS[c.dataset.cat];
    f.elements.category.value = a ? a[0] : c.dataset.cat;
    render();
    if (a && a[1]) Object.keys(a[1]).forEach(k => { const el = f.elements['q_' + k]; if (el) el.value = a[1][k]; });
  });

  const count = s => String(s).split(/[,\s]+/).filter(Boolean).length;
  const short = x => x.l.replace(/,.*$/, '');
  /* Checks every shown field; reports each problem next to its field using the form's own setErr(). */
  function validate(setErr) {
    const t = cat(); if (!t) return true;
    let ok = true; const v = {}, bad = {};
    for (const x of t.f) {
      const el = f.elements[nm(x)], val = el.value.trim(); let m = '';
      v[x.k] = val;
      if (!val) { if (x.req) m = 'This field is required.'; }
      else if (x.t === 'number' && !(+val >= x.min && +val <= x.max)) m = `Enter a number from ${x.min} to ${x.max}.`;
      else if (x.t === 'date' && (isNaN(Date.parse(val)) || (x.min && val < x.min) || (x.max && val > x.max))) m = x.dob ? 'Check this date.' : 'Choose a date from today onwards.';
      if (m) bad[x.k] = 1;
      ok = setErr(el.name, m) && ok;
    }
    const cross = (k, m) => { if (!bad[k] && f.elements['q_' + k]) ok = setErr('q_' + k, m) && ok; };
    if (v.from && v.to && v.to < v.from) cross('to', 'End date must be on or after the start date.');
    if (v.mages && v.members && count(v.mages) !== +v.members) cross('mages', `Enter ${v.members} age(s), separated by commas.`);
    if (v.ages && v.pax && count(v.ages) !== +v.pax) cross('ages', `Enter ${v.pax} age(s), separated by commas.`);
    if (v.age && v.rage && +v.rage <= +v.age) cross('rage', 'Retirement age must be higher than current age.');
    return ok;
  }
  /* "Label: value" lines for the WhatsApp message and the email copy. */
  function text() {
    const t = cat(); if (!t) return '';
    return t.f.map(x => {
      let val = WA.cut(f.elements[nm(x)].value, 200); if (!val) return '';
      if (x.t === 'date') val = val.split('-').reverse().join('-');
      return short(x) + ': ' + val;
    }).filter(Boolean).join('\n');
  }
  return { validate, text };
})();

/* ---------- Enquiry form (validate -> open WhatsApp with the message pre-filled) ---------- */
(function () {
  const f = $('#form'), status = $('#status'), send = $('#send');
  let busy = false, lockUntil = 0;
  const setErr = (name, msg) => { const i = f.elements[name]; const s = i.parentElement.querySelector('.err'); if (s) s.textContent = msg; i.setAttribute('aria-invalid', !!msg); return !msg; };
  function validate() {
    let ok = true;
    f.elements.mobile.value = WA.mobile(f.elements.mobile.value);
    ok = setErr('name', f.elements.name.value.trim().length < 2 ? 'Enter your full name.' : '') && ok;
    ok = setErr('mobile', /^[6-9]\d{9}$/.test(f.elements.mobile.value) ? '' : 'Enter a valid 10-digit mobile number.') && ok;
    ok = setErr('email', !f.elements.email.value.trim() || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.elements.email.value.trim()) ? '' : 'Enter a valid email or leave it empty.') && ok;
    ok = setErr('category', f.elements.category.value ? '' : 'Choose a category.') && ok;
    ok = ENQ_FIELDS.validate(setErr) && ok;
    const agreed = f.elements.consent.checked;
    $('#consentErr').textContent = agreed ? '' : 'Please accept the Privacy Policy to continue.';
    f.elements.consent.setAttribute('aria-invalid', !agreed);
    return ok && agreed;
  }
  /* Clear a field's error as soon as the customer edits it. */
  f.addEventListener('input', e => { const t = e.target; if (t.getAttribute && t.getAttribute('aria-invalid') === 'true') { t.setAttribute('aria-invalid', 'false'); const s = t.type === 'checkbox' ? $('#consentErr') : t.parentElement.querySelector('.err'); if (s) s.textContent = ''; } });
  f.addEventListener('change', e => { if (e.target.type === 'checkbox') { e.target.setAttribute('aria-invalid', 'false'); $('#consentErr').textContent = ''; } });

  /* Optional email copy to the owner via FormSubmit. Never blocks or cancels WhatsApp. */
  async function emailOwner(d) {
    if (CONFIG.ownerEmail.startsWith('YOUR_')) return false;
    try {
      const r = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(CONFIG.ownerEmail), { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ name: d.name, mobile: d.mobile, email: d.email, category: d.category, time: d.time, details: d.details, _subject: 'New enquiry: ' + d.category }) });
      return r.ok;
    } catch (_) { return false; }
  }
  function compose(d) {
    const L = ['Hello Sivaani Associate,', '', 'I would like to enquire about *' + d.category + '*.', '', '*Customer details*', 'Name: ' + d.name, 'Mobile: ' + d.mobile];
    if (d.email) L.push('Email: ' + d.email);
    if (d.time) L.push('Preferred contact time: ' + d.time);
    if (d.details) L.push('', '*Enquiry details*', d.details);
    L.push('', 'Please contact me with suitable options. Thank you.');
    return WA.clean(L.join('\n'));
  }
  f.addEventListener('submit', async e => {
    e.preventDefault();
    try { await onSubmit(); } catch (err) {
      console.error('Enquiry submit failed:', err); busy = false; send.disabled = false;
      status.className = 'status full bad';
      status.textContent = 'Something went wrong. Please refresh the page (Ctrl+F5) and try again, or call +91 94437 04626.';
    }
  });
  async function onSubmit() {
    if (busy || Date.now() < lockUntil) return;            // prevent duplicate submissions
    status.className = 'status full'; status.textContent = '';
    if (f.elements._hp.value) return;                       // honeypot: bots fill this hidden field
    if (!validate()) { status.classList.add('bad'); status.textContent = 'Please fix the highlighted fields.'; const bad = f.querySelector('[aria-invalid=true]'); if (bad) bad.focus(); return; }
    const num = WA.number();
    if (!num) { status.classList.add('bad'); status.textContent = 'WhatsApp is not set up on this website yet. Please call +91 94437 04626.'; return; }
    busy = true; send.disabled = true;
    const d = Object.fromEntries(new FormData(f));
    ['name', 'mobile', 'email', 'category', 'time'].forEach(k => d[k] = WA.clean(d[k]));
    d.details = ENQ_FIELDS.text();
    try {
      const text = compose(d), chat = WA.chatUrl(num, text), web = WA.webUrl(num, text);
      const emailing = emailOwner(d);                       // started now, but WhatsApp does not wait for it on desktop
      status.classList.add('ok'); status.textContent = 'Opening WhatsApp…';
      const how = await WA.open(chat, emailing);
      const emailed = await emailing;
      const lead = 'WhatsApp is opening with your enquiry pre-filled.';
      status.className = 'status full ok';
      WA.showResult(status, lead + (emailed ? ' A copy was emailed to the advisor.' : '') + ' Press Send in WhatsApp to deliver your enquiry.', chat, web);
      f.reset();
    } catch (err) {
      status.className = 'status full bad';
      status.textContent = 'We could not open WhatsApp. Please try again or call +91 94437 04626.';
    } finally { busy = false; send.disabled = false; lockUntil = Date.now() + 3000; }
  }
})();
