/* Product grid, product details modal, enquiry form and WhatsApp hand-off. */

/* ---------- WhatsApp helper (shared by the main form and every product enquiry form; lives here so the
   product tiles work on their own, and always replaces any older copy) ----------
   Opens the official click-to-chat URL https://wa.me/NUMBER?text=ENCODED_MESSAGE with the message
   pre-filled. The customer must still press Send in WhatsApp; nothing is sent automatically. */
window.WA = (function () {
  const digits = v => String(v == null ? '' : v).replace(/\D/g, '');
  /* Valid international number (10-15 digits, no leading zero) or '' when missing / still a placeholder. */
  const number = (n = CONFIG.whatsapp) => { const d = digits(n); return /^[1-9]\d{9,14}$/.test(d) ? d : ''; };
  /* Accepts 9876543210, +91 98765 43210, 09876543210 and returns the plain 10-digit mobile number. */
  const mobile = v => { let d = digits(v); if (d.length === 12 && d.slice(0, 2) === '91') d = d.slice(2); else if (d.length === 11 && d[0] === '0') d = d.slice(1); return d; };
  /* Remove control characters and unpaired surrogates (they make encodeURIComponent throw); keep Tamil and emoji intact. */
  const clean = s => String(s == null ? '' : s).normalize('NFC').replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, m => m.length === 2 ? m : '').trim();
  const cut = (s, n) => { s = clean(s); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
  const encode = text => encodeURIComponent(cut(text, 1800));
  const chatUrl = (n, text) => 'https://wa.me/' + n + '?text=' + encode(text);
  const webUrl = (n, text) => 'https://web.whatsapp.com/send?phone=' + n + '&text=' + encode(text);
  const isMobile = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  /* Desktop: new tab, opened synchronously inside the click so popup blockers allow it.
     Phones (iPhone Safari, Android): same-tab navigation, which hands the link to the WhatsApp app.
     `pending` (e.g. the email request) gets up to 2.5 s to finish before the page navigates away.
     Resolves 'opened' | 'redirect'. */
  async function open(url, pending) {
    const go = async () => { if (pending) await Promise.race([pending, sleep(2500)]); location.href = url; return 'redirect'; };
    if (isMobile()) return go();
    const w = window.open(url, '_blank');
    if (!w) return go();                       // popup blocked: continue to WhatsApp in this tab instead of stopping
    try { w.opener = null; } catch (_) { /* ignore */ }
    return 'opened';
  }
  /* Fill a status element: message + "Open WhatsApp again" + "WhatsApp Web" fallback links. */
  function showResult(el, text, chat, web) {
    el.textContent = text + ' ';
    [['Open WhatsApp', chat], ['Use WhatsApp Web', web]].forEach(([label, href], i) => {
      if (i) el.append(' · ');
      const a = document.createElement('a'); a.href = href; a.target = '_blank'; a.rel = 'noopener';
      const b = document.createElement('b'); b.textContent = label; a.append(b); el.append(a);
    });
  }
  /* Phone fields accept a pasted "+91 98765 43210" and keep digits only. */
  document.addEventListener('input', e => { const t = e.target; if (t && t.type === 'tel') { const v = mobile(t.value); if (v !== t.value) t.value = v; } });
  return { number, mobile, clean, cut, chatUrl, webUrl, open, showResult };
})();

(function () {
  const C = window.ENQ_CONFIG, $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PHONE_TEL = '+919443704626', PHONE_SHOW = '+91 94437 04626';
  const catName = c => (c === 'Other' ? 'General' : c) + ' Insurance';
  const svg = (inner, cls) => `<svg class="${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
  const ico = id => svg(ICONS[id] || '');
  const X = svg('<path d="M6 6l12 12M18 6 6 18"/>');
  const CHEV = svg('<path d="m9 6 6 6-6 6"/>', 'chev');
  const TICK = svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>');
  /* Insurers already listed in index.html (#companies). Shown only for categories they actually serve there. */
  const INSURERS = { Life: 'LIC and Tata AIA', Health: 'Star Health Insurance and Galaxy Health Insurance' };

  /* ---------- Product content (existing text only) ---------- */
  function content(p) {
    const t = (typeof TOPICS !== 'undefined' && TOPICS.find(x => x.id === p.topic)) || { body: '', pts: [] };
    let overview = p.overview || ((p.lead ? p.lead + ' ' : '') + t.body);
    if (p.topic === 'general') overview += ' Cover, premiums and availability for ' + p.name.toLowerCase() + ' depend on the insurer. We will confirm current options when you enquire.';
    let pts = p.pts || t.pts.filter(x => x.indexOf('<') < 0);     // skip owner-flag placeholders that contain markup
    if (!pts.length) pts = ['Compare what is covered and what is excluded.', 'Check the claim process before you buy.'];
    return { overview, pts };
  }

  /* ---------- Product grid + category filter ---------- */
  const grid = $('#productGrid'), chips = $('#prodFilters'), count = $('#prodCount');
  if (!grid) return;
  const TOP = 14;                                   // tiles shown before "View all products"
  grid.innerHTML = PRODUCTS.map((p, i) => `<li data-group="${esc(p.cat)}"${i >= TOP ? ' class="more"' : ''}><button type="button" class="pcard" data-id="${esc(p.id)}" aria-haspopup="dialog" aria-label="View details: ${esc(p.name)}, ${catName(p.cat)}">
    <span class="pimg" aria-hidden="true">${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}<span class="pico">${ico(p.id)}</span></span>
    <span class="pname">${esc(p.name)}</span></button></li>`).join('');

  const more = $('#prodMore');
  if (more) {
    if (PRODUCTS.length <= TOP) more.hidden = true;
    more.addEventListener('click', () => {
      const on = grid.classList.toggle('all');
      more.setAttribute('aria-expanded', on);
      more.textContent = on ? 'Show fewer products' : 'View all products';
      if (!on) grid.scrollIntoView({ block: 'nearest', behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  if (chips) {
    const groups = [...new Set(PRODUCTS.map(p => p.cat))];
    chips.innerHTML = ['All', ...groups].map((g, i) => `<button type="button" class="fchip" data-f="${esc(g)}" aria-pressed="${i === 0}">${g === 'All' ? 'All products' : g === 'Other' ? 'General' : esc(g)}</button>`).join('');
    chips.addEventListener('click', e => {
      const b = e.target.closest('.fchip'); if (!b) return;
      chips.querySelectorAll('.fchip').forEach(x => x.setAttribute('aria-pressed', x === b));
      grid.classList.add('all'); if (more) more.hidden = true;
      let n = 0;
      grid.querySelectorAll('li').forEach(li => { const show = b.dataset.f === 'All' || li.dataset.group === b.dataset.f; li.hidden = !show; if (show) n++; });
      if (count) count.textContent = 'Showing ' + n + ' of ' + PRODUCTS.length + ' products';
    });
  }
  grid.addEventListener('click', e => { const b = e.target.closest('.pcard'); if (b) openProduct(b.dataset.id, b); });
  document.querySelectorAll('[data-product]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); openProduct(a.dataset.product, a); }));

  /* ---------- Centered modal (one <dialog>, three views: details, enquiry form, done) ---------- */
  const dlg = document.createElement('dialog');
  dlg.className = 'pm'; dlg.setAttribute('aria-labelledby', 'pmTitle');
  document.body.appendChild(dlg);
  let product, opener, busy = false, closing = false, lockUntil = 0, downOnBackdrop = false;

  function lockScroll(on) {
    const de = document.documentElement;
    if (on) { de.style.setProperty('--sbw', Math.max(0, innerWidth - de.clientWidth) + 'px'); de.classList.add('pm-lock'); }
    else { de.classList.remove('pm-lock'); de.style.removeProperty('--sbw'); }
  }
  function openProduct(id, from) {
    product = PRODUCTS.find(p => p.id === id); if (!product) return;
    opener = from; busy = false; closing = false; lockUntil = 0;
    dlg.classList.remove('is-closing');
    renderDetails(false);
    if (!dlg.open) dlg.showModal();
    lockScroll(true);
    $('#pmTitle', dlg).focus({ preventScroll: true });
  }
  function requestClose() {
    if (busy || closing || !dlg.open) return;
    if (reduce) { dlg.close(); return; }
    closing = true; dlg.classList.add('is-closing');
    setTimeout(() => dlg.close(), 180);
  }
  dlg.addEventListener('cancel', e => { e.preventDefault(); requestClose(); });          // Escape key
  dlg.addEventListener('close', () => { lockScroll(false); closing = false; dlg.classList.remove('is-closing'); if (opener && opener.isConnected) opener.focus(); });
  /* Keep Tab / Shift+Tab inside the modal (native dialogs can otherwise hand focus to the browser toolbar). */
  dlg.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const f = [...dlg.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]):not(.hp),select,textarea,[tabindex]:not([tabindex="-1"])')].filter(x => x.offsetParent !== null || x === document.activeElement);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1], a = document.activeElement;
    if (e.shiftKey && (a === first || a === $('#pmTitle', dlg) || a === $('#pmDone', dlg) || !dlg.contains(a))) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && (a === last || !dlg.contains(a))) { e.preventDefault(); first.focus(); }
  });
  dlg.addEventListener('pointerdown', e => { downOnBackdrop = e.target === dlg; });       // outside click, but not a text-selection drag that ends outside
  dlg.addEventListener('click', e => {
    if (e.target === dlg && downOnBackdrop) { requestClose(); return; }
    if (e.target.closest('[data-close]')) requestClose();
    else if (e.target.closest('[data-enquire]')) renderForm();
    else if (e.target.closest('[data-back]')) { renderDetails(true); $('#pmTitle', dlg).focus({ preventScroll: true }); }
  });

  const head = (p, label) => `<header class="pm-head"><span class="pm-ico">${ico(p.id)}</span><div class="pm-ht"><p class="pm-cat">${label}</p><h2 id="pmTitle" tabindex="-1">${esc(p.name)}</h2></div><button type="button" class="pm-x" data-close aria-label="Close">${X}</button></header>`;
  const shell = (inner, swap) => { dlg.innerHTML = `<div class="pm-shell${swap ? ' pm-swap' : ''}">${inner}</div>`; };

  function renderDetails(swap) {
    const c = content(product), ins = INSURERS[product.cat];
    shell(`${head(product, catName(product.cat))}
      <div class="pm-body">
        <section><h3>Overview</h3><p>${esc(c.overview)}</p></section>
        <section><h3>What to check before you choose</h3><ul class="pm-list">${c.pts.map(x => `<li>${TICK}<span>${esc(x)}</span></li>`).join('')}</ul></section>
        <section class="pm-note"><h3>Benefits and eligibility</h3><p>Benefits, premiums and eligibility are set by the insurer for each plan, so they are not listed here. We will explain them for your age and needs when you enquire.</p></section>
        ${ins ? `<p class="pm-ins">Insurers we guide you on: <b>${esc(ins)}</b></p>` : ''}
      </div>
      <footer class="pm-foot"><button type="button" class="btn royal" data-enquire>Enquire Now</button><a class="btn lite" href="tel:${PHONE_TEL}">Call ${PHONE_SHOW}</a></footer>`, swap);
  }

  /* ---------- Enquiry form (built from ENQ_FORMS for the selected product) ---------- */
  const FORMS = window.ENQ_FORMS || {};
  const formOf = p => FORMS[p.form] || FORMS[{ Life: 'life', Health: 'health', Vehicle: 'car' }[p.cat]] || FORMS.life;
  const pad = n => String(n).padStart(2, '0');
  const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const today = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const nice = v => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v); return m ? m[3] + '/' + m[2] + '/' + m[1] : v; };
  const ageOf = v => { const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v); if (!m) return ''; const t = today(); let a = t.getFullYear() - +m[1]; if (t.getMonth() + 1 < +m[2] || (t.getMonth() + 1 === +m[2] && t.getDate() < +m[3])) a--; return a; };
  const req = f => f.req ? ' <abbr title="required">*</abbr>' : ' <span class="pm-opt-tag">(optional)</span>';
  const wrap = (f, inner, cls) => `<div class="pm-f${cls || ''}${f.full ? ' pm-full' : ''}" data-k="${f.k}"${f.show ? ' hidden' : ''}>${inner}<small class="err" id="e_pf_${f.k}" aria-live="polite"></small>${f.hint ? `<small class="pm-sub">${esc(f.hint)}</small>` : ''}</div>`;

  function control(f, preset) {
    const id = 'pf_' + f.k, dv = preset[f.k] == null ? '' : String(preset[f.k]), a = `id="${id}" name="${f.k}" aria-describedby="e_${id}"${f.req ? ' required' : ''}`;
    const d = new Date(), y = d.getFullYear();
    if (f.t === 'radio' || f.t === 'multi') {
      const type = f.t === 'radio' ? 'radio' : 'checkbox';
      return `<fieldset class="pm-f pm-rg${f.full ? ' pm-full' : ''}" id="${id}" data-k="${f.k}" aria-describedby="e_${id}"${f.show ? ' hidden' : ''}><legend>${esc(f.l)}${req(f)}</legend><div class="pm-opts">${f.o.map(o => `<label class="pm-opt"><input type="${type}" name="${f.k}" value="${esc(o)}"${o === dv ? ' checked' : ''}><span>${esc(o)}</span></label>`).join('')}</div><small class="err" id="e_${id}" aria-live="polite"></small>${f.hint ? `<small class="pm-sub">${esc(f.hint)}</small>` : ''}</fieldset>`;
    }
    let c;
    if (f.t === 'select') c = `<select ${a}><option value="">Select…</option>${f.o.map(o => `<option${o === dv ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
    else if (f.t === 'tel') c = `<div class="pm-tel"><span aria-hidden="true">+91</span><input ${a} type="tel" inputmode="numeric" autocomplete="tel-national" maxlength="16" placeholder="10-digit number"></div>`;
    else if (f.t === 'email') c = `<input ${a} type="email" inputmode="email" autocomplete="email" maxlength="${f.max || 80}" placeholder="name@example.com">`;
    else if (f.t === 'age') c = `<input ${a} type="text" inputmode="numeric" readonly placeholder="Filled from date of birth">`;
    else if (f.t === 'date') {
      let min = '', max = '';
      if (f.k === 'dob') { min = (y - 100) + '-01-01'; max = iso(today()); }
      else if (f.future) { min = iso(today()); max = (y + 5) + '-12-31'; }
      else if (f.expiry) { min = (y - 5) + '-01-01'; max = (y + 2) + '-12-31'; }
      c = `<input ${a} type="date" min="${min}" max="${max}">`;
    }
    else if (f.t === 'num') c = `<input ${a} type="number" inputmode="numeric" min="${f.min}" max="${f.max}" step="1" placeholder="${esc(f.ph || '')}" value="${esc(dv)}">`;
    else c = `<input ${a} type="text" maxlength="${f.max || 80}" autocomplete="off"${f.ph ? ` placeholder="${esc(f.ph)}"` : ''}${f.list ? ` list="dl_${f.k}"` : ''}${f.reg ? ' style="text-transform:uppercase"' : ''}>${f.list ? `<datalist id="dl_${f.k}">${f.list.map(o => `<option value="${esc(o)}">`).join('')}</datalist>` : ''}`;
    return wrap(f, `<label for="${id}">${esc(f.l)}${req(f)}</label>${c}`);
  }

  let schema = null;
  function renderForm() {
    schema = formOf(product);
    const preset = product.preset || {};
    shell(`${head(product, 'Enquire about this plan')}
      <form class="pm-formwrap" id="pmForm" novalidate>
        <div class="pm-body">
          <p class="pm-hint">Fill in your details and we will prepare a WhatsApp message to Sivaani Associate. Please do not enter OTPs, passwords, bank or card details, Aadhaar numbers or ID documents.</p>
          <div class="pm-grid">
            <div class="pm-f pm-full"><label for="pf_product">Selected insurance product</label><input id="pf_product" name="product" type="text" value="${esc(product.name)}" readonly><small class="pm-sub">${catName(product.cat)} · ${esc(schema.title)} enquiry</small></div>
            ${schema.fields.map(f => control(f, preset)).join('')}
            <input class="hp" name="_hp" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">
            <div class="pm-f pm-full"><label class="check" for="pf_consent"><input id="pf_consent" name="consent" type="checkbox" aria-describedby="e_pf_consent" required><span>I accept the <a href="${esc(C.privacyUrl)}" target="_blank" rel="noopener">Privacy Policy</a> and agree to be contacted about this enquiry. <abbr title="required">*</abbr></span></label><small class="err" id="e_pf_consent" aria-live="polite"></small></div>
          </div>
          <p class="status" id="pmStatus" role="status"></p>
        </div>
        <footer class="pm-foot"><button type="button" class="btn lite" data-back>Back</button><button class="btn royal" type="submit" id="pmSend">Submit Enquiry</button></footer>
      </form>`, true);
    const form = $('#pmForm', dlg);
    form.addEventListener('submit', e => { e.preventDefault(); submit(form); });
    const sync = () => {
      const dob = form.elements.dob, age = form.elements.age;
      if (dob && age) age.value = dob.value ? ageOf(dob.value) : '';
      schema.fields.forEach(f => {
        if (!f.show) return;
        const w = form.querySelector(`[data-k="${f.k}"]`); if (w) w.hidden = !f.show(get(form));
      });
      const s = form.elements.start, en = form.elements.end;               // travel end date cannot be before the start date
      if (s && en) en.min = s.value || iso(today());
    };
    const unflag = e => {
      const t = e.target, el = (t.closest && t.closest('fieldset[aria-invalid="true"]')) || t;
      if (el.getAttribute && el.getAttribute('aria-invalid') === 'true') mark(el, '');
    };
    form.addEventListener('input', e => { unflag(e); sync(); });
    form.addEventListener('change', e => { unflag(e); sync(); });
    sync();
    $('#pf_name', form).focus({ preventScroll: true });
  }

  function mark(el, msg) {
    const s = $('#e_' + el.id, dlg); if (s) s.textContent = msg;
    el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  /* Current value of one field: string, or array for checkbox groups. */
  function get(form) {
    return k => {
      const els = form.querySelectorAll(`[name="${k}"]`); if (!els.length) return '';
      const t = els[0].type;
      if (t === 'radio') { const c = form.querySelector(`[name="${k}"]:checked`); return c ? c.value : ''; }
      if (t === 'checkbox') return [...form.querySelectorAll(`[name="${k}"]:checked`)].map(x => x.value);
      return WA.clean(els[0].value);
    };
  }
  const visible = (form, f) => { const w = form.querySelector(`[data-k="${f.k}"]`); return !!w && !w.hidden; };

  function check(f, v, g) {
    const empty = Array.isArray(v) ? !v.length : !v;
    if (empty) return f.req ? (f.t === 'select' || f.t === 'radio' || f.t === 'multi' ? 'Please select an option.' : f.t === 'date' ? 'Please choose a date.' : 'This field is required.') : '';
    const t = today(), tn = iso(t);
    switch (f.t) {
      case 'tel': return /^[6-9]\d{9}$/.test(v) ? '' : 'Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9.';
      case 'email': return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? '' : 'Enter a valid email address.';
      case 'date': {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return 'Choose a valid date.';
        if (f.k === 'dob') { const a = ageOf(v); return a < 18 ? 'You must be 18 or above to enquire.' : a > 100 ? 'Enter a valid date of birth.' : ''; }
        if (f.future && v < tn) return 'Date cannot be in the past.';
        if (f.notBefore && g(f.notBefore) && v < g(f.notBefore)) return 'End date cannot be before the start date.';
        if (f.expiry) { const lo = (t.getFullYear() - 5) + '-01-01', hi = (t.getFullYear() + 2) + '-12-31'; if (v < lo || v > hi) return 'Enter a valid expiry date.'; }
        return '';
      }
      case 'num': {
        if (!/^\d+$/.test(v)) return 'Enter a whole number.';
        const n = +v; if (n < f.min || n > f.max) return 'Enter a value between ' + f.min + ' and ' + f.max + '.';
        if (f.notBefore && g(f.notBefore) && n < +g(f.notBefore)) return 'Cannot be earlier than the manufacturing year.';
        return '';
      }
      case 'text': {
        if (f.nm) return v.length < 2 || !/^[\p{L}][\p{L}\p{M} .,&'’()-]*$/u.test(v) ? 'Enter a valid name using letters only.' : '';
        if (f.reg) return /^[A-Za-z0-9 -]{4,15}$/.test(v) ? '' : 'Enter a valid registration number, or leave it blank.';
        if (f.ages) {
          if (!/^\d{1,3}(\s*[,;]\s*\d{1,3})*$/.test(v)) return 'Enter ages as numbers separated by commas, e.g. 35, 32, 8.';
          const list = v.split(/\s*[,;]\s*/).map(Number);
          if (list.some(n => n < 0 || n > 100)) return 'Each age must be between 0 and 100.';
          const n = +g('travellers'); if (n && list.length !== n) return 'Enter ' + n + ' age' + (n > 1 ? 's' : '') + ' to match the number of travellers.';
          return '';
        }
        if (v.length < 2) return 'Please enter at least 2 characters.';
        if ((v.match(/\d/g) || []).length >= 9) return 'Please do not enter ID, card or account numbers here.';
        return '';
      }
      default: return '';
    }
  }
  function validate(form) {
    let first;
    const g = get(form), flag = (el, msg, focusEl) => { if (!mark(el, msg) && !first) first = focusEl || el; };
    form.elements.mobile && (form.elements.mobile.value = WA.mobile(form.elements.mobile.value));
    schema.fields.forEach(f => {
      if (!visible(form, f) || f.t === 'age') return;
      const el = (f.t === 'radio' || f.t === 'multi') ? form.querySelector('#pf_' + f.k) : form.elements[f.k];
      const v = g(f.k);
      flag(el, check(f, v, g), (f.t === 'radio' || f.t === 'multi') ? el.querySelector('input') : el);
    });
    const age = form.elements.age; if (age && visible(form, schema.fields.find(f => f.k === 'age'))) flag(age, age.value ? '' : 'Choose your date of birth.');
    flag(form.elements.consent, form.elements.consent.checked ? '' : 'Please accept the Privacy Policy to continue.');
    if (first) first.focus();
    return !first;
  }

  /* WhatsApp message: header, selected product, then ONLY the fields that were shown and answered. */
  function compose(d) {
    return WA.clean([
      'Hello Sivaani Associate,', '',
      'I would like to enquire about an insurance product.', '',
      'Selected Insurance Product: ' + product.name,
      'Insurance Category: ' + catName(product.cat), '',
      'Customer Details:',
      ...d.map(([l, v]) => l + ': ' + v), '',
      'Please contact me regarding this insurance plan.', '',
      'Thank you.'
    ].join('\n'));
  }
  function collect(form) {
    const g = get(form), out = [];
    schema.fields.forEach(f => {
      if (!visible(form, f)) return;
      let v = g(f.k); v = Array.isArray(v) ? v.join(', ') : v;
      if (!v) return;
      if (f.t === 'tel') v = '+91 ' + v; else if (f.t === 'date') v = nice(v); else if (f.reg) v = v.toUpperCase(); else if (f.unit) v += ' ' + f.unit;
      out.push([(f.m || f.l).replace(/\s*\((?:Optional|sq ft|years)\)$/i, ''), WA.cut(v, 120)]);
    });
    return out;
  }

  async function submit(form) {
    if (busy || Date.now() < lockUntil || form.elements._hp.value) return;      // duplicate-tap guard + honeypot
    const st = $('#pmStatus', form), btn = $('#pmSend', form);
    st.className = 'status'; st.textContent = '';
    if (!validate(form)) { st.classList.add('bad'); st.textContent = 'Please correct the highlighted fields.'; return; }
    const num = WA.number(C.whatsapp);
    if (!num) { st.classList.add('bad'); st.textContent = 'WhatsApp is not set up on this website yet. Please call ' + PHONE_SHOW + '.'; return; }
    busy = true; btn.disabled = true; btn.classList.add('loading'); btn.textContent = 'Opening WhatsApp…'; form.setAttribute('aria-busy', 'true');
    try {
      const text = compose(collect(form)), chat = WA.chatUrl(num, text), web = WA.webUrl(num, text);
      await WA.open(chat);        // called synchronously from the submit click, so popup blockers allow it. Nothing is sent until the customer presses Send in WhatsApp.
      renderDone(chat, web);
    } catch (err) {
      console.error('Enquiry failed:', err);
      btn.disabled = false; btn.classList.remove('loading'); btn.textContent = 'Submit Enquiry'; form.removeAttribute('aria-busy');
      st.className = 'status bad'; st.textContent = 'We could not open WhatsApp. Your details are kept. Please try again or call ' + PHONE_SHOW + '.';
    } finally { busy = false; lockUntil = Date.now() + 3000; }
  }

  function renderDone(chat, web) {
    shell(`${head(product, 'Enquiry ready')}
      <div class="pm-body pm-done">
        <span class="pm-check">${TICK}</span>
        <h3 id="pmDone" tabindex="-1">WhatsApp is opening with your enquiry</h3>
        <p>Your message for <b>${esc(product.name)}</b> is filled in but <b>not sent yet</b>. Press <b>Send</b> in WhatsApp to deliver it to Sivaani Associate.</p>
        <p class="status ok" id="pmLinks"></p>
      </div>
      <footer class="pm-foot"><button type="button" class="btn royal" data-close>Done</button></footer>`, true);
    WA.showResult($('#pmLinks', dlg), 'WhatsApp did not open?', chat, web);
    $('#pmDone', dlg).focus({ preventScroll: true });
  }
})();
