/* "View Our Products" catalogue: search, filter, details, enquiry (Supabase optional) + WhatsApp. */
(function(){
const C=window.SA_CATALOGUE,root=document.getElementById("catalogue");if(!C||!root)return;
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const cat=id=>C.cats.find(c=>c.id===id);let flt="all",q="",ov,box,last,G,F,built=0,tm;
function build(){root.innerHTML=`<div class="wrap"><a class="ct-back" href="#home">← Back to Home</a>
<div class="ct-head"><h2>Explore Our Insurance Products</h2><p>Find the Right Insurance Protection for Every Stage of Your Life.</p></div>
<div class="ct-tools"><input id="ctQ" type="search" placeholder="Search insurance products…" aria-label="Search insurance products"></div>
<div class="ct-chips" id="ctF"></div><div class="ct-grid" id="ctG" aria-live="polite"></div>
<p class="ct-note">Information here is indicative and general. Product types were checked against insurer and regulator sources; availability, eligibility, premiums and benefits are confirmed only in the insurer's policy documents and a written quotation. No returns or claims are guaranteed.</p></div>`;
G=root.querySelector("#ctG");F=root.querySelector("#ctF");built=1;draw()}
const ins=k=>k.map(x=>{const[n,u]=C.insurers[x];return u?`<a href="${u}" target="_blank" rel="noopener noreferrer">${esc(n)} ↗</a>`:`<span class="in">${esc(n)}</span>`}).join("");
function draw(){
  F.innerHTML=[["all","All Products"],...C.cats.map(c=>[c.id,c.name])].map(([i,n])=>`<button type="button" data-f="${i}" class="${flt===i?"on":""}">${esc(n)}</button>`).join("");
  const s=q.trim().toLowerCase();
  const list=C.cats.filter(c=>(flt==="all"||c.id===flt)&&(!s||(c.name+" "+c.d+" "+c.subs.map(x=>x.n+" "+x.d).join(" ")).toLowerCase().includes(s)));
  G.innerHTML=list.length?list.map(c=>`<article class="ct-card"><div class="ct-ic" aria-hidden="true"><span>${c.icon}</span>${c.icon2?`<span>${c.icon2}</span>`:""}</div><div class="ct-b"><h3>${esc(c.name)}</h3><p>${esc(c.d)}</p>
  <div class="ct-subs">${c.subs.map(x=>`<button type="button" data-d="${c.id}" data-s="${c.subs.indexOf(x)}">${esc(x.n)}</button>`).join("")}</div>
  <div class="ct-act"><button type="button" class="v" data-d="${c.id}">View Details</button><button type="button" class="e" data-e="${c.id}">Enquiry Now</button></div></div></article>`).join(""):`<p class="ct-empty">No products match "${esc(q)}". Try another word or choose All Products.</p>`;
}
function modal(html){
  if(!ov){ov=document.createElement("div");ov.className="eq-ov";ov.innerHTML='<div class="eq" role="dialog" aria-modal="true"></div>';document.body.appendChild(ov);box=ov.firstChild;
    ov.addEventListener("click",e=>{if(e.target===ov||e.target.closest("[data-x]"))return shut();
      const d=e.target.closest("[data-ed]");if(d)return enquiry(d.dataset.ed,+d.dataset.es);
      const bk=e.target.closest("[data-bk]");if(bk)return details(bk.dataset.bk)});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&ov.classList.contains("open"))shut()})}
  box.innerHTML=html;ov.classList.add("open");document.body.style.overflow="hidden";box.querySelector(".eq-x").focus();
}
function shut(){ov.classList.remove("open");document.body.style.overflow="";last&&last.focus&&last.focus()}
const head=t=>`<div class="eq-h"><b>${esc(t)}<small>Sivaani Associate</small></b><button class="eq-x" data-x aria-label="Close">×</button></div>`;
const ul=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;
function details(id,si){
  const c=cat(id);
  modal(`${head(c.name)}<div class="eq-b dt"><p>${esc(c.d)}</p>
  <h4>Available product types</h4>${c.subs.map((x,i)=>`<div class="sp${i===si?" on":""}"><button data-ed="${id}" data-es="${i}">Enquiry Now</button><b>${esc(x.n)}</b><p>${esc(x.d)}</p><span class="in" style="color:#4a5876">Offered by:</span> ${ins(x.i)}</div>`).join("")}
  <h4>Key features</h4>${ul(c.feat)}<h4>Main benefits</h4>${ul(c.ben)}<h4>Eligibility</h4><p>${esc(c.elig)}</p><h4>Important exclusions and limitations</h4>${ul(c.excl)}
  <p class="ct-note" style="margin-top:14px">Indicative information only – not a quotation. Confirm all details in the insurer's policy wording.</p></div>
  <div class="eq-f"><button class="btn gold" data-ed="${id}" data-es="${si||0}">Enquiry Now →</button></div>`);
  if(si!=null)setTimeout(()=>{const o=box.querySelector(".sp.on");o&&o.scrollIntoView({block:"nearest"})},50);
}
const wa=()=>String((window.SAEnq&&SAEnq.D.whatsapp)||CONFIG.whatsapp).replace(/\D/g,"");
function enquiry(id,si){
  const c=cat(id);
  modal(`${head("Enquiry – "+c.name)}<form id="cqF" novalidate><div class="eq-b"><div class="eq-g">
  <div class="q"><label for="cq1">Full Name *</label><input id="cq1" maxlength="80" autocomplete="name"><div class="qe"></div></div>
  <div class="q"><label for="cq2">Mobile Number *</label><input id="cq2" type="tel" inputmode="numeric" maxlength="14" autocomplete="tel"><div class="qe"></div></div>
  <div class="q"><label for="cq3">Email Address *</label><input id="cq3" type="email" maxlength="100" autocomplete="email"><div class="qe"></div></div>
  <div class="q"><label for="cq4">City *</label><input id="cq4" maxlength="60"><div class="qe"></div></div>
  <div class="q"><label for="cq5">Insurance Category</label><input id="cq5" value="${esc(c.name)}" readonly></div>
  <div class="q"><label for="cq6">Insurance Product *</label><select id="cq6">${c.subs.map((x,i)=>`<option value="${esc(x.n)}"${i===si?" selected":""}>${esc(x.n)}</option>`).join("")}</select></div>
  <div class="q full"><label for="cq7">Message (optional)</label><textarea id="cq7" maxlength="500" placeholder="Tell us what you need"></textarea></div></div>
  <p class="priv" style="margin-top:10px">🔒 We use these details only to follow up on your insurance enquiry. Please do not share Aadhaar, PAN, bank details or passwords.</p><div id="cqR" role="status" style="margin-top:10px"></div></div>
  <div class="eq-f"><button type="button" class="btn ghost" data-bk="${id}">← Back</button><button type="submit" class="btn gold" id="cqS">Submit Enquiry</button></div></form>`);
  box.querySelector("#cqF").addEventListener("submit",e=>submit(e,c));
}
async function submit(e,c){
  e.preventDefault();const v=i=>box.querySelector("#cq"+i).value.trim(),R=box.querySelector("#cqR"),B=box.querySelector("#cqS");
  const mob=v(2).replace(/\D/g,"").replace(/^91(?=\d{10}$)/,""),err=[[1,v(1).length<2,"Enter your full name."],[2,!/^[6-9]\d{9}$/.test(mob),"Enter a valid 10-digit mobile number."],[3,!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v(3)),"Enter a valid email address."],[4,!v(4),"Enter your city."]];
  let bad=null;err.forEach(([i,b,m])=>{const q=box.querySelector("#cq"+i).parentNode;q.classList.toggle("bad",b);q.querySelector(".qe").textContent=b?m:"";if(b&&!bad)bad=i});
  if(bad)return box.querySelector("#cq"+bad).focus();
  const rec={full_name:v(1),mobile:mob,email:v(3),city:v(4),category:c.name,product:v(6),message:v(7)||null};
  const text=`*New Insurance Enquiry – Sivaani Associate*\n\n*Category:* ${rec.category}\n*Product:* ${rec.product}\n\nName: ${rec.full_name}\nMobile: ${rec.mobile}\nEmail: ${rec.email}\nCity: ${rec.city}${rec.message?`\n\n*Message:* ${rec.message}`:""}`;
  const link=`<a class="btn wa" style="margin-top:10px" target="_blank" rel="noopener" href="https://wa.me/${wa()}?text=${encodeURIComponent(text)}">Send Enquiry on WhatsApp</a>`;
  B.disabled=true;B.textContent="Submitting…";R.innerHTML="";
  const s=C.supabase;let out;
  try{
    if(s&&s.url&&s.anonKey){const r=await fetch(s.url.replace(/\/$/,"")+"/rest/v1/enquiries",{method:"POST",headers:{apikey:s.anonKey,Authorization:"Bearer "+s.anonKey,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(rec)});if(!r.ok)throw new Error(r.status);
      out=`<div class="ok">✅ Thank you! Your enquiry has been recorded. Our advisor will contact you. For a faster reply you can also message us on WhatsApp.${link}</div>`}
    else out=`<div class="ok">Your enquiry is ready. This website is not connected to a database, so it has <b>not</b> been sent yet – please send it on WhatsApp. It reaches our advisor only after you press Send in WhatsApp.${link}</div>`;
    B.textContent="Submitted";
  }catch(x){out=`<div class="bd">We couldn't save your enquiry online just now. Please send it on WhatsApp instead – it reaches us only after you press Send there.${link}</div>`;B.disabled=false;B.textContent="Try Again"}
  R.innerHTML=out;R.scrollIntoView({block:"nearest"});
}
root.addEventListener("click",e=>{const t=e.target;last=t.closest("button")||last;
  const f=t.closest("[data-f]");if(f){flt=f.dataset.f;return draw()}
  const en=t.closest("[data-e]");if(en)return enquiry(en.dataset.e,0);
  const d=t.closest("[data-d]");if(d)return details(d.dataset.d,d.dataset.s!=null?+d.dataset.s:undefined)});
root.addEventListener("input",e=>{if(e.target.id!=="ctQ")return;clearTimeout(tm);const v=e.target.value;tm=setTimeout(()=>{q=v;draw()},120)});
function route(){const on=location.hash==="#catalogue";if(on&&!built)build();document.body.classList.toggle("cat-view",on);if(on){window.scrollTo(0,0);setTimeout(function(){window.scrollTo(0,0)},60)}}
addEventListener("hashchange",route);route();(window.requestIdleCallback||setTimeout)(function(){if(!built)build()});
})();
