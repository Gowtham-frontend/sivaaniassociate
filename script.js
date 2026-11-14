/* ============ CONFIG – edit client assets here ============ */
const CONFIG = {
  phone: "+91 73737 90009",
  email: "info@sivaaniassociate.com",
  location: { en: "Erode, Tamil Nadu", ta: "ஈரோடு, தமிழ்நாடு" },
  whatsapp: "917373790009",               // digits only, with country code
  social: { facebook: "#", youtube: "#", linkedin: "#" },
  images: {
    hero: "",                              // e.g. "images/family.jpg"
    avatars: ["", "", ""]                  // reviewer photos
  },
  partners: [],                            // set logo:"images/x.png" to use official logos
  products: [                              // img: path to photo
    { id: "life", icon: "👨‍👩‍👧", img: "", en: "Life Insurance", ta: "ஆயுள் காப்பீடு" },
    { id: "health", icon: "🩺", img: "", en: "Health Insurance", ta: "மருத்துவ காப்பீடு" },
    { id: "child", icon: "🎒", img: "", en: "Child Plans", ta: "குழந்தை திட்டங்கள்" },
    { id: "retire", icon: "🌴", img: "", en: "Retirement Plans", ta: "ஓய்வூதிய திட்டங்கள்" },
    { id: "savings", icon: "🐷", img: "", en: "Savings & Investment", ta: "சேமிப்பு & முதலீடு" },
    { id: "vehicle", icon: "🚗", img: "", en: "Vehicle Insurance", ta: "வாகன காப்பீடு" },
    { id: "term", icon: "🛡️", img: "", en: "Term Plans", ta: "டேர்ம் திட்டங்கள்" },
    { id: "business", icon: "🏢", img: "", en: "Business Insurance Plans", ta: "வணிக காப்பீட்டு திட்டங்கள்" },
    { id: "gift", icon: "🎁", img: "", en: "Gift Plans", ta: "பரிசு திட்டங்கள்" }
  ],
  times: { en: ["Morning (9–12)", "Afternoon (12–4)", "Evening (4–8)"], ta: ["காலை (9–12)", "மதியம் (12–4)", "மாலை (4–8)"] },
  testimonials: [],                         // Add ONLY genuine reviews with the customer's written permission: { en:"…", ta:"…", name:"First name, Town", nameTa:"…" }. While empty, the site shows an honest "reviews will appear here" message.
};

/* ============ i18n ============ */
const I18N = {
  en: { tagline:"Your Trusted Insurance Partner", htag:"Your Trusted Insurance Partner", nav_home:"Home", nav_about:"About Us", nav_products:"Insurance Products", nav_career:"Career", nav_testi:"Testimonials", nav_contact:"Contact Us", dd_why:"Why Choose Us", dd_exp:"Our Experience", enquire:"Enquire Now",
    h1a:"Your Family.<br>Your Future.", h1b:"Our Priority.", hsub:"உங்கள் குடும்பத்தின் எதிர்காலத்தை பாதுகாக்க சரியான Insurance வழிகாட்டுதல்.", explore:"Explore Insurance Plans",
    gh:"Get Expert Guidance", gs:"Find the Right Insurance Plan", chat:"Chat on WhatsApp", safe:"We ask only for what's needed",
    trusted:"Insurers We Guide You On", years:"Years Experience", sol:"Our Insurance Solutions",
    why:"Why Choose <b>Sivaani Associate?</b>", w1:"Expert Guidance & Support", w2:"Wide Range of Policy Options", w3:"Transparent Advice", w4:"Dedicated Service",
    happy:"Happy Customers", secure:"Let's Secure Your Future Together", getin:"Get in touch with our Insurance Experts today",
    callus:"Call Us Today", drop:"Drop an Email", visit:"Visit Our Office", viewp:"View Our Products",
    ph_name:"Your Name *", ph_mobile:"Mobile Number *", ph_city:"Your City", ph_type:"Select Insurance Type", ph_time:"Preferred Time",
    e_name:"Please enter your name.", e_mobile:"Enter a valid 10-digit mobile number.", e_type:"Please select an insurance type.",
    msg:"Hello Sivaani Associate, I need insurance guidance." },
  ta: { tagline:"உங்கள் நம்பகமான காப்பீட்டு துணை", htag:"உங்கள் நம்பகமான காப்பீட்டு துணை", nav_home:"முகப்பு", nav_about:"எங்களை பற்றி", nav_products:"காப்பீட்டு திட்டங்கள்", nav_career:"வேலைவாய்ப்பு", nav_testi:"வாடிக்கையாளர் கருத்துகள்", nav_contact:"தொடர்புக்கு", dd_why:"ஏன் எங்களை தேர்வு செய்ய வேண்டும்", dd_exp:"எங்கள் அனுபவம்", enquire:"விசாரிக்க",
    h1a:"உங்கள் குடும்பம்.<br>உங்கள் எதிர்காலம்.", h1b:"எங்கள் முன்னுரிமை.", hsub:"உங்கள் குடும்பத்தின் எதிர்காலத்தை பாதுகாக்க சரியான காப்பீட்டு வழிகாட்டுதல்.", explore:"காப்பீட்டு திட்டங்களை பாருங்கள்",
    gh:"நிபுணர் ஆலோசனை பெறுங்கள்", gs:"சரியான காப்பீட்டு திட்டத்தை கண்டறியுங்கள்", chat:"வாட்ஸ்அப்பில் பேசுங்கள்", safe:"தேவையான விவரங்களை மட்டுமே கேட்கிறோம்",
    trusted:"நாங்கள் வழிகாட்டும் காப்பீட்டு நிறுவனங்கள்", years:"ஆண்டுகள் அனுபவம்", sol:"எங்கள் காப்பீட்டு தீர்வுகள்",
    why:"ஏன் <b>சிவானி அசோசியேட்?</b>", w1:"நிபுணர் வழிகாட்டுதல் & ஆதரவு", w2:"பல்வேறு பாலிசி தேர்வுகள்", w3:"வெளிப்படையான ஆலோசனை", w4:"அர்ப்பணிப்புடன் சேவை",
    happy:"மகிழ்ச்சியான வாடிக்கையாளர்கள்", secure:"உங்கள் எதிர்காலத்தை சேர்ந்து பாதுகாப்போம்", getin:"எங்கள் காப்பீட்டு நிபுணர்களை இன்றே தொடர்பு கொள்ளுங்கள்",
    callus:"இன்றே அழையுங்கள்", drop:"மின்னஞ்சல் அனுப்புங்கள்", visit:"எங்கள் அலுவலகம்", viewp:"எங்கள் திட்டங்களை பாருங்கள்",
    ph_name:"உங்கள் பெயர் *", ph_mobile:"மொபைல் எண் *", ph_city:"உங்கள் ஊர்", ph_type:"காப்பீட்டு வகையை தேர்வு செய்யவும்", ph_time:"வசதியான நேரம்",
    e_name:"உங்கள் பெயரை உள்ளிடவும்.", e_mobile:"சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.", e_type:"காப்பீட்டு வகையை தேர்வு செய்யவும்.",
    msg:"வணக்கம் சிவானி அசோசியேட், எனக்கு காப்பீட்டு ஆலோசனை வேண்டும்." }
};
if (window.SA_TRUST && SA_TRUST.i18n) { Object.assign(I18N.en, SA_TRUST.i18n.en); Object.assign(I18N.ta, SA_TRUST.i18n.ta); }   /* trust-data.js */
let lang = localStorage.getItem("sa_lang") || "ta", tIdx = 0, timer;
const $ = s => document.querySelector(s), t = k => I18N[lang][k];
const wa = txt => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(txt)}`;
const tel = CONFIG.phone.replace(/[^\d+]/g, "");

function icon(p){return `<svg viewBox="0 0 24 24"><path d="${p}"/></svg>`}
function buildStatic(){
  $("#tbPhone").href = $("#fPhone").href = "tel:" + tel;
  $("#tbPhone span").textContent = $("#fPhone").textContent = CONFIG.phone;
  $("#tbMail").href = $("#fMail").href = "mailto:" + CONFIG.email;
  $("#tbMail span").textContent = $("#fMail").textContent = CONFIG.email;
  $("#enqBtn").href = wa(I18N.en.msg);
  $("#social").innerHTML =
    `<a href="${CONFIG.social.facebook}" aria-label="Facebook">${icon("M14 8V6a1 1 0 011-1h2V1h-3a5 5 0 00-5 5v2H6v4h3v11h4V12h3l1-4z")}</a>
     <a href="${CONFIG.social.youtube}" aria-label="YouTube">${icon("M22 8a3 3 0 00-2-2c-2-.5-8-.5-8-.5s-6 0-8 .5A3 3 0 002 8a31 31 0 000 8 3 3 0 002 2c2 .5 8 .5 8 .5s6 0 8-.5a3 3 0 002-2 31 31 0 000-8zM10 15V9l5 3z")}</a>
     <a href="${CONFIG.social.linkedin}" aria-label="LinkedIn">${icon("M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zm4 6h4v2c.7-1.200 2-2.200 4-2.200 4 0 4 3 4 5.200V21h-4v-6c0-1.500-.5-2.500-2-2.500S14 13.500 14 15v6h-4z")}</a>`;
  const ns = document.createElement("div"); ns.className = "social nav-social"; ns.innerHTML = $("#social").innerHTML; $("#nav").appendChild(ns);
  $("#partners").innerHTML = CONFIG.partners.map(p => p.logo
    ? `<img src="${p.logo}" alt="${p.name}">` : `<span style="color:${p.color}">${p.name}</span>`).join("");
  $("#cards").innerHTML = CONFIG.products.map(p =>
    `<a class="pc" href="#" data-id="${p.id}"><div class="ph" style="${p.img ? `background-image:url('${p.img}')` : "background:linear-gradient(135deg,#dfe9f7,#f4e7c3)"}">${p.img ? "" : p.icon}</div><div class="bar"><span data-p="${p.id}"></span><i>→</i></div></a>`).join("");
  $("#cards").addEventListener("click", e => {
    const c = e.target.closest(".pc"); if (!c) return; e.preventDefault();
    if (window.openEnquiry) { window.openEnquiry(c.dataset.id); return; }
    $("#fType").value = c.dataset.id; $("#leadForm").scrollIntoView({behavior:"smooth", block:"center"}); $("#fName").focus({preventScroll:true});
  });
  if (CONFIG.images.hero){const v=$("#heroVis");v.style.backgroundImage=`url('${CONFIG.images.hero}')`;v.classList.add("has-img")}
  $("#dots").innerHTML = CONFIG.testimonials.map((_, i) => `<i data-i="${i}"></i>`).join("");
}

function applyLang(l){
  lang = l; localStorage.setItem("sa_lang", l);
  document.documentElement.lang = l === "ta" ? "ta" : "en"; document.body.classList.toggle("ta", l === "ta");
  document.querySelectorAll("[data-i18n]").forEach(el => el.innerHTML = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); el.setAttribute("aria-label", el.placeholder.replace(/\s*\*$/, "")); });
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === l));
  document.querySelectorAll("[data-p]").forEach(el => el.textContent = CONFIG.products.find(p => p.id === el.dataset.p)[l]);
  $("#ddProducts").innerHTML = CONFIG.products.map(p => `<li><a href="#products">${p[l]}</a></li>`).join("");
  const keepT = $("#fType").value, keepM = $("#fTime").value;
  $("#fType").innerHTML = `<option value="">${t("ph_type")}</option>` + CONFIG.products.map(p => `<option value="${p.id}">${p[l]}</option>`).join("");
  $("#fTime").innerHTML = `<option value="">${t("ph_time")}</option>` + CONFIG.times[l].map((x, i) => `<option value="${i}">${x}</option>`).join("");
  $("#fType").value = keepT; $("#fTime").value = keepM;
  $("#fType").setAttribute("aria-label", t("ph_type")); $("#fTime").setAttribute("aria-label", t("ph_time"));
  const bg = $("#burger"); if (bg && !$("#nav").classList.contains("open")) bg.setAttribute("aria-label", l === "ta" ? "மெனு" : "Menu");
  const loc = CONFIG.location[l]; $("#tbLoc span").textContent = $("#fLoc").textContent = loc;
  $("#ctaWa").href = wa(t("msg")); renderT(); if (window.renderTrust) window.renderTrust();
}

/* ============ testimonials slider ============ */
function renderT(){
  const card = $("#testimonials"), none = !CONFIG.testimonials.length; card.classList.toggle("is-empty", none);
  if (none) { $("#tQ").textContent = t("te_empty"); $("#tN").textContent = ""; $("#tAv").textContent = ""; return; }
  const x = CONFIG.testimonials[tIdx], nm = lang === "ta" ? x.nameTa : x.name, av = CONFIG.images.avatars[tIdx];
  const s = $(".slide"); s.style.animation = "none"; void s.offsetWidth; s.style.animation = "";
  $("#tQ").textContent = `“${x[lang]}”`; $("#tN").textContent = "– " + nm;
  const a = $("#tAv"); a.style.backgroundImage = av ? `url('${av}')` : ""; a.textContent = av ? "" : nm.trim().charAt(0);
  document.querySelectorAll("#dots i").forEach((d, i) => d.classList.toggle("on", i === tIdx));
}
function go(n){if (!CONFIG.testimonials.length) return; tIdx = (n + CONFIG.testimonials.length) % CONFIG.testimonials.length; renderT(); clearInterval(timer); timer = setInterval(() => go(tIdx + 1), 6000)}

/* ============ form → WhatsApp ============ */
$("#leadForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#fName").value.trim(), mob = $("#fMobile").value.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, ""), type = $("#fType").value, err = $("#fErr");
  err.textContent = !name ? t("e_name") : !/^[6-9]\d{9}$/.test(mob) ? t("e_mobile") : !type ? t("e_type") : "";
  if (err.textContent) return;
  const prod = CONFIG.products.find(p => p.id === type).en, tm = $("#fTime").value !== "" ? CONFIG.times.en[+$("#fTime").value] : "-";
  const msg = `Hello Sivaani Associate,\nI need insurance guidance.\n\nName: ${name}\nMobile: ${mob}\nInsurance Type: ${prod}\nCity: ${$("#fCity").value.trim() || "-"}\nPreferred Time: ${tm}`;
  window.open(wa(msg), "_blank", "noopener");
});

/* ============ init ============ */
/* mobile menu: accessible toggle, backdrop, Esc to close, focus kept inside while open, scroll lock */
(function mobileMenu(){
  const burger = $("#burger"), nav = $("#nav"), header = document.querySelector(".header");
  const back = document.createElement("div"); back.className = "nav-backdrop"; back.setAttribute("aria-hidden", "true"); header.appendChild(back);
  const wide = window.matchMedia("(min-width:1101px)");
  function setMenu(o, refocus){
    nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); document.body.classList.toggle("menu-open", o);
    burger.setAttribute("aria-label", (lang === "ta" ? (o ? "மெனுவை மூடு" : "மெனு") : (o ? "Close menu" : "Menu")));
    if (o) { setTimeout(() => { const a = nav.querySelector("a"); a && a.focus({preventScroll:true}); }, 60); } else if (refocus) burger.focus({preventScroll:true});
  }
  burger.onclick = () => setMenu(!nav.classList.contains("open"), true);
  back.onclick = () => setMenu(false, true);
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", e => {
    if (!nav.classList.contains("open")) return;
    if (e.key === "Escape") { setMenu(false, true); return; }
    if (e.key === "Tab") { /* manual cycle: burger -> menu links -> burger (burger sits after the nav in the DOM) */
      const items = [burger, ...nav.querySelectorAll("a")], i = items.indexOf(document.activeElement);
      e.preventDefault(); items[(i + (e.shiftKey ? -1 : 1) + items.length) % items.length].focus();
    }
  });
  (wide.addEventListener ? wide.addEventListener("change", () => wide.matches && setMenu(false)) : wide.addListener(() => wide.matches && setMenu(false)));
})();
document.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => applyLang(b.dataset.lang));
$("#prev").onclick = () => go(tIdx - 1); $("#next").onclick = () => go(tIdx + 1);
$("#dots").onclick = e => { if (e.target.dataset.i) go(+e.target.dataset.i) };
buildStatic(); applyLang(lang); go(0);

/* ============ cinematic hero slider ============ */
(function heroSlider(){
  const root = $("#heroSlider"), ctrl = $("#heroCtrl"); if (!root || !ctrl) return;
  const HOLD = 5000, FADE = 1600;
  const slides = [...root.querySelectorAll(".hs")], dotsBox = $("#hsDots"), toggle = $("#hsToggle");
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  let cur = 0, timer = 0, busy = false, userPaused = false, hidden = document.hidden, offscreen = false;
  const loads = new Map();

  dotsBox.innerHTML = slides.map((_, i) => `<button type="button" aria-label="Go to slide ${i + 1}"${i ? "" : ' aria-current="true"'}></button>`).join("");
  const dots = [...dotsBox.children];

  function load(i){ // lazy-load a slide's image once, resolve when decoded
    const s = slides[i]; if (loads.has(i)) return loads.get(i);
    const img = s.querySelector("img"), src = s.querySelector("source");
    const p = new Promise(res => {
      if (!img.dataset.src) return res();
      if (src && src.dataset.srcset) src.srcset = src.dataset.srcset;
      img.srcset = img.dataset.srcset; img.src = img.dataset.src;
      const done = () => res();
      (img.decode ? img.decode() : Promise.reject()).then(done, () => { img.complete && img.naturalWidth ? done() : (img.onload = img.onerror = done); });
    });
    loads.set(i, p); return p;
  }
  function canRun(){ return !userPaused && !hidden && !offscreen && !mq.matches; }
  function schedule(){ clearTimeout(timer); if (canRun()) timer = setTimeout(() => show(cur + 1), HOLD); }
  function syncUI(){
    const stopped = !canRun();
    root.classList.toggle("is-paused", stopped); ctrl.classList.toggle("is-paused", userPaused);
    ctrl.classList.toggle("is-static", mq.matches);
    toggle.setAttribute("aria-pressed", userPaused); toggle.setAttribute("aria-label", userPaused ? "Play slideshow" : "Pause slideshow");
    root.setAttribute("aria-live", canRun() ? "off" : "polite");
  }
  function restartBar(){ const d = dots[cur]; d.removeAttribute("aria-current"); void d.offsetWidth; d.setAttribute("aria-current", "true"); }
  function show(n){
    n = (n + slides.length) % slides.length;
    if (n === cur || busy) return;
    busy = true; clearTimeout(timer);
    load(n).then(() => {
      const prev = slides[cur], next = slides[n];
      prev.classList.remove("is-active"); prev.classList.add("is-leaving");
      next.dataset.kb = n % 2 ? "out" : "in"; next.classList.remove("kb"); void next.offsetWidth; next.classList.add("kb");
      next.classList.add("is-active"); next.removeAttribute("aria-hidden"); prev.setAttribute("aria-hidden", "true");
      dots[cur].removeAttribute("aria-current"); dots[n].setAttribute("aria-current", "true");
      cur = n;
      setTimeout(() => { prev.classList.remove("is-leaving", "kb"); busy = false; }, mq.matches ? 20 : FADE + 80);
      schedule();
      // warm the following slide
      load((n + 1) % slides.length);
    });
  }
  function go(n){ show(n); }
  $("#hsPrev").onclick = () => go(cur - 1);
  $("#hsNext").onclick = () => go(cur + 1);
  dots.forEach((d, i) => d.onclick = () => go(i));
  toggle.onclick = () => { userPaused = !userPaused; syncUI(); if (!userPaused) { restartBar(); } schedule(); };
  ctrl.addEventListener("keydown", e => { if (e.key === "ArrowLeft") go(cur - 1); else if (e.key === "ArrowRight") go(cur + 1); });
  document.addEventListener("visibilitychange", () => { hidden = document.hidden; syncUI(); if (!hidden) restartBar(); schedule(); });
  if ("IntersectionObserver" in window) new IntersectionObserver(([en]) => { offscreen = !en.isIntersecting; syncUI(); schedule(); }, { threshold: .05 }).observe(root);
  (mq.addEventListener ? mq.addEventListener("change", () => { syncUI(); schedule(); }) : mq.addListener(() => { syncUI(); schedule(); }));

  // first image is preloaded in <head>; fetch the rest once the page is idle
  const warm = () => { slides.forEach((_, i) => i && setTimeout(() => load(i), i * 400)); };
  const idle = window.requestIdleCallback || (f => setTimeout(f, 1200));
  if (document.readyState === "complete") idle(warm); else window.addEventListener("load", () => idle(warm));
  syncUI(); schedule();
})();
