/* Renders the parts of the trust layer that depend on verified data (trust-data.js) or on CONFIG/lang from script.js.
   Nothing is shown for an empty field. Re-runs on every language switch via window.renderTrust (called from applyLang). */
(function(){
const T=window.SA_TRUST;if(!T||typeof CONFIG==="undefined")return;
const V=T.verified||{};
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pick=o=>o&&typeof o==="object"?(o[lang]||o.en||""):(o||"");
const $=id=>document.getElementById(id);

function identity(){
  const root=$("identity");if(!root)return;
  const addr=pick(V.address),adv=V.advisor||{},photos=(V.officePhotos||[]).filter(p=>p&&p.src),regs=(V.registrations||[]).filter(r=>r&&r.value);
  const hasAdv=!!adv.name;
  if(!(addr||hasAdv||photos.length||regs.length)){root.hidden=true;root.innerHTML="";return}
  const cards=[];
  if(hasAdv){
    const role=pick(adv.role),bio=pick(adv.bio);
    cards.push(`<article class="id-card id-adv">${adv.photo?`<img src="${esc(adv.photo)}" alt="${esc(pick(adv.photoAlt)||adv.name)}" width="96" height="96" loading="lazy" decoding="async">`:""}
      <div><small>${esc(t("id_advisor"))}</small><h3>${esc(adv.name)}</h3>${role?`<p class="id-role">${esc(role)}</p>`:""}${bio?`<p>${esc(bio)}</p>`:""}</div></article>`);
  }
  if(addr)cards.push(`<article class="id-card"><small>${esc(t("id_office"))}</small><p class="id-addr">${esc(addr)}</p></article>`);
  if(regs.length)cards.push(`<article class="id-card"><small>${esc(t("id_reg"))}</small><dl class="id-reg">${regs.map(r=>`<div><dt>${esc(pick(r.label))}</dt><dd>${esc(r.value)}</dd></div>`).join("")}</dl></article>`);
  const gal=photos.length?`<div class="id-photos">${photos.map(p=>`<img src="${esc(p.src)}" alt="${esc(pick(p.alt))}" width="320" height="240" loading="lazy" decoding="async">`).join("")}</div>`:"";
  root.hidden=false;
  root.innerHTML=`<div class="wrap"><h2 class="title"><span>${esc(t("id_title"))}</span></h2>${cards.length?`<div class="id-grid">${cards.join("")}</div>`:""}${gal}</div>`;
}
function support(){
  const call=$("suCall");if(!call)return;
  call.href="tel:"+tel;$("suNum").textContent=CONFIG.phone;
  $("suWa").href=wa(t("msg"));
  $("suMail").href="mailto:"+CONFIG.email;
  const h=pick(V.supportHours),el=$("suHours");el.hidden=!h;el.textContent=h?t("su_hours")+" "+h:"";
}
function badge(){
  const b=$("pExp");if(!b)return;
  const y=String(V.experienceYears||"").trim();
  b.hidden=!y;if(y)b.querySelector(".laurel").textContent=y;
  const n=document.querySelector(".p-note");if(n){const x=pick(V.associationNote);n.textContent=t("p_note")+(x?" "+x:"")}
}
window.renderTrust=function(){identity();support();badge()};
window.renderTrust();
})();
