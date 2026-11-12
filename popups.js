/* Career, Testimonials and Contact Us popups (opened from the existing nav items). Uses CONFIG / lang / wa() from script.js and
   window.SA_CATALOGUE.supabase (existing config) – nothing there is changed. */
(function(){
/* ===== EDIT HERE ===== */
const CAREER_IMAGE_URL = "";   // paste your hosted Career photo URL (https://...). While empty, the image block is simply not shown.
const CAREER = {
  en:{title:"Career Opportunities",sub:"Grow with Sivaani Associate",
    intro:"Build a rewarding career in insurance with Sivaani Associate, Erode. We help families choose the right protection – and we welcome people who want to do the same with honesty and care.",
    jobsH:"Job Opportunities",jobs:["Insurance Advisor (Life, Health, Child & Retirement plans)","Vehicle & General Insurance Advisor","Customer Relationship & Policy Service Executive","Part-time / Referral Associates"],
    reqH:"Eligibility & Requirements",req:["Minimum age 18 years","Education as required by insurer / IRDAI rules for advisors","Good communication in Tamil (English is a plus)","Honest, customer-first attitude and willingness to learn","Readiness to complete the licensing / exam requirements for insurance advisors"],
    apply:"Apply Now / Career Enquiry",msg:"Hello Sivaani Associate, I am interested in a career opportunity with you. Please share the details.",zoom:"Tap to enlarge",alt:"Career opportunities at Sivaani Associate"},
  ta:{title:"வேலைவாய்ப்புகள்",sub:"சிவானி அசோசியேட்டுடன் வளருங்கள்",
    intro:"ஈரோடு சிவானி அசோசியேட்டுடன் காப்பீட்டுத் துறையில் சிறந்த வாழ்க்கைப் பாதையை உருவாக்குங்கள். குடும்பங்கள் சரியான பாதுகாப்பைத் தேர்வு செய்ய உதவுகிறோம்; நேர்மையுடனும் அக்கறையுடனும் அதையே செய்ய விரும்புபவர்களை வரவேற்கிறோம்.",
    jobsH:"வேலை வாய்ப்புகள்",jobs:["காப்பீட்டு ஆலோசகர் (ஆயுள், மருத்துவம், குழந்தை & ஓய்வூதிய திட்டங்கள்)","வாகன & பொது காப்பீட்டு ஆலோசகர்","வாடிக்கையாளர் உறவு & பாலிசி சேவை அலுவலர்","பகுதி நேர / பரிந்துரை இணைப்பாளர்கள்"],
    reqH:"தகுதிகள் & தேவைகள்",req:["குறைந்தபட்ச வயது 18","காப்பீட்டு நிறுவனம் / IRDAI விதிகளின்படி தேவையான கல்வித் தகுதி","தமிழில் நல்ல தொடர்புத் திறன் (ஆங்கிலம் கூடுதல் சிறப்பு)","நேர்மை, வாடிக்கையாளருக்கு முன்னுரிமை, கற்றுக்கொள்ளும் ஆர்வம்","காப்பீட்டு ஆலோசகருக்கான உரிமம் / தேர்வு தேவைகளை முடிக்கத் தயார்"],
    apply:"இப்போதே விண்ணப்பிக்கவும் / வேலைவாய்ப்பு விசாரணை",msg:"வணக்கம் சிவானி அசோசியேட், உங்களிடம் வேலைவாய்ப்பில் ஆர்வமாக உள்ளேன். விவரங்களை பகிரவும்.",zoom:"பெரிதாக்க தட்டவும்",alt:"சிவானி அசோசியேட் வேலைவாய்ப்புகள்"}
};
/* ===================== */
const U={en:{close:"Close",tTitle:"Customer Reviews",tSub:"What our customers say",tNone:"Reviews will appear here soon.",
    cTitle:"Contact Us",cSub:"We're happy to help",phone:"Phone",mail:"Email",addr:"Office",wa:"Chat on WhatsApp",form:"Send us an enquiry",
    name:"Full Name",mob:"Mobile Number",em:"Email Address",subj:"Subject",msg:"Message",send:"Submit Enquiry",sending:"Submitting…",retry:"Try Again",
    eName:"Enter your full name.",eMob:"Enter a valid 10-digit mobile number.",eMail:"Enter a valid email address.",eSubj:"Enter a subject.",eMsg:"Enter your message.",
    priv:"We use these details only to follow up on your enquiry. Please do not share Aadhaar, PAN, bank details or passwords.",
    okDb:"✅ Thank you! Your enquiry has been recorded. Our advisor will contact you. For a faster reply you can also message us on WhatsApp.",
    okWa:"Your enquiry is ready. This website is not connected to a database, so it has <b>not</b> been sent yet – please send it on WhatsApp. It reaches our advisor only after you press Send in WhatsApp.",
    bad:"We couldn't save your enquiry online just now. Please send it on WhatsApp instead – it reaches us only after you press Send there.",sendWa:"Send Enquiry on WhatsApp"},
  ta:{close:"மூடு",tTitle:"வாடிக்கையாளர் கருத்துகள்",tSub:"எங்கள் வாடிக்கையாளர்கள் கூறுவது",tNone:"கருத்துகள் விரைவில் இங்கே தோன்றும்.",
    cTitle:"தொடர்புக்கு",cSub:"உதவ மகிழ்ச்சி",phone:"தொலைபேசி",mail:"மின்னஞ்சல்",addr:"அலுவலகம்",wa:"வாட்ஸ்அப்பில் பேசுங்கள்",form:"உங்கள் விசாரணையை அனுப்புங்கள்",
    name:"முழு பெயர்",mob:"மொபைல் எண்",em:"மின்னஞ்சல் முகவரி",subj:"தலைப்பு",msg:"செய்தி",send:"விசாரணை அனுப்புங்கள்",sending:"அனுப்புகிறது…",retry:"மீண்டும் முயற்சிக்கவும்",
    eName:"உங்கள் முழு பெயரை உள்ளிடவும்.",eMob:"சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.",eMail:"சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",eSubj:"தலைப்பை உள்ளிடவும்.",eMsg:"உங்கள் செய்தியை உள்ளிடவும்.",
    priv:"உங்கள் விசாரணைக்குத் தொடர்புகொள்ள மட்டுமே இந்த விவரங்களைப் பயன்படுத்துவோம். ஆதார், பான், வங்கி விவரங்கள், கடவுச்சொற்களை பகிர வேண்டாம்.",
    okDb:"✅ நன்றி! உங்கள் விசாரணை பதிவு செய்யப்பட்டது. எங்கள் ஆலோசகர் உங்களைத் தொடர்பு கொள்வார். விரைவான பதிலுக்கு வாட்ஸ்அப்பிலும் தொடர்பு கொள்ளலாம்.",
    okWa:"உங்கள் விசாரணை தயாராக உள்ளது. இந்த இணையதளம் தரவுத்தளத்துடன் இணைக்கப்படவில்லை, எனவே இது இன்னும் <b>அனுப்பப்படவில்லை</b> – வாட்ஸ்அப்பில் அனுப்பவும். வாட்ஸ்அப்பில் Send அழுத்திய பின்பே எங்களை வந்தடையும்.",
    bad:"உங்கள் விசாரணையை இப்போது ஆன்லைனில் சேமிக்க முடியவில்லை. தயவுசெய்து வாட்ஸ்அப்பில் அனுப்பவும் – அங்கே Send அழுத்திய பின்பே எங்களை வந்தடையும்.",sendWa:"வாட்ஸ்அப்பில் விசாரணை அனுப்புங்கள்"}};
const L=()=>(typeof lang!=="undefined"&&U[lang])?lang:"en", T=k=>U[L()][k];
const esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const waNum=()=>String((window.SAEnq&&SAEnq.D&&SAEnq.D.whatsapp)||CONFIG.whatsapp).replace(/\D/g,"");
const waLink=t=>`https://wa.me/${waNum()}?text=${encodeURIComponent(t)}`;
let ov,box,lb,openKind=null,lastFocus=null;

function mk(cls){const o=document.createElement("div");o.className="eq-ov pp-ov "+(cls||"");o.setAttribute("aria-hidden","true");document.body.appendChild(o);return o}
function head(t,s){return `<div class="eq-h"><b>${esc(t)}<small>${esc(s)}</small></b><button type="button" class="eq-x" data-ppx aria-label="${T("close")}">×</button></div>`}
function show(kind,html){
  if(!ov){ov=mk();ov.innerHTML='<div class="eq" role="dialog" aria-modal="true"></div>';box=ov.firstChild;
    ov.addEventListener("click",e=>{if(e.target===ov||e.target.closest("[data-ppx]"))return shut();
      const z=e.target.closest("[data-zoom]");if(z)zoom(z.dataset.zoom)});}
  if(!openKind)lastFocus=document.activeElement;
  openKind=kind;box.innerHTML=html;box.setAttribute("aria-label",kind);
  ov.setAttribute("aria-hidden","false");void ov.offsetWidth;ov.classList.add("open");document.body.style.overflow="hidden";
  const b=box.querySelector(".eq-b");if(b)b.scrollTop=0;
  setTimeout(()=>{const x=box.querySelector(".eq-x");x&&x.focus({preventScroll:true})},40);
}
function shut(){
  if(lb&&lb.classList.contains("open"))return unzoom();
  if(!ov||!openKind)return;openKind=null;ov.classList.remove("open");ov.setAttribute("aria-hidden","true");document.body.style.overflow="";
  lastFocus&&lastFocus.focus&&lastFocus.focus({preventScroll:true});
}
function zoom(src){
  if(!lb){lb=mk("pp-lb");lb.innerHTML=`<button type="button" class="eq-x" aria-label="${T("close")}">×</button><img alt="">`;
    lb.addEventListener("click",e=>{if(e.target!==lb.querySelector("img"))unzoom()})}
  const im=lb.querySelector("img");im.src=src;im.alt=CAREER[L()].alt;lb.setAttribute("aria-hidden","false");void lb.offsetWidth;lb.classList.add("open");lb.querySelector(".eq-x").focus({preventScroll:true});
}
function unzoom(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");const b=box&&box.querySelector("[data-zoom]");b&&b.focus({preventScroll:true})}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&((lb&&lb.classList.contains("open"))||openKind)){e.stopImmediatePropagation();shut()}},true);

/* ---- Career ---- */
function career(){
  const c=CAREER[L()];
  const img=CAREER_IMAGE_URL?`<button type="button" class="pp-img" data-zoom="${esc(CAREER_IMAGE_URL)}" aria-label="${esc(c.zoom)}"><img src="${esc(CAREER_IMAGE_URL)}" alt="${esc(c.alt)}" loading="lazy"><span>🔍 ${esc(c.zoom)}</span></button>`:"";
  show("career",`${head(c.title,c.sub)}<div class="eq-b pp-b">${img}<p>${esc(c.intro)}</p>
  <h3>${esc(c.jobsH)}</h3><ul class="pp-list">${c.jobs.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
  <h3>${esc(c.reqH)}</h3><ul class="pp-list">${c.req.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>
  <div class="eq-f"><a class="btn gold" target="_blank" rel="noopener" href="${waLink(c.msg)}">${esc(c.apply)} →</a></div>`);
  const im=box.querySelector(".pp-img img");if(im)im.onerror=()=>im.parentNode.classList.add("bad");
}

/* ---- Testimonials (existing CONFIG.testimonials only; stars only if an item has rating 1–5) ---- */
function testi(){
  const l=L(),list=(CONFIG.testimonials||[]);
  const cards=list.map((x,i)=>{const nm=l==="ta"&&x.nameTa?x.nameTa:x.name,r=Math.round(+x.rating),av=(CONFIG.images&&CONFIG.images.avatars&&CONFIG.images.avatars[i])||"";
    return `<article class="pp-tc"><div class="top"><div class="av" style="${av?`background-image:url('${esc(av)}')`:""}">${av?"":esc(nm.trim().charAt(0))}</div><div><cite>${esc(nm)}</cite>${r>=1&&r<=5?`<div class="pp-stars" role="img" aria-label="${r} / 5">${"★".repeat(r)}${"☆".repeat(5-r)}</div>`:""}</div></div><p>“${esc(x[l]||x.en)}”</p></article>`}).join("");
  show("testimonials",`${head(T("tTitle"),T("tSub"))}<div class="eq-b pp-b">${cards?`<div class="pp-tcards">${cards}</div>`:`<p>${T("tNone")}</p>`}</div>`);
}

/* ---- Contact ---- */
function contact(){
  const loc=CONFIG.location[L()]||CONFIG.location.en,tel=CONFIG.phone.replace(/[^\d+]/g,"");
  show("contact",`${head(T("cTitle"),T("cSub"))}<form id="ppF" novalidate><div class="eq-b pp-b">
  <div class="pp-ci"><a href="tel:${tel}"><i>📞</i><span><b>${T("phone")}</b>${esc(CONFIG.phone)}</span></a>
  <a href="mailto:${esc(CONFIG.email)}"><i>✉️</i><span><b>${T("mail")}</b>${esc(CONFIG.email)}</span></a>
  <div><i>📍</i><span><b>${T("addr")}</b>${esc(loc)}</span></div></div>
  <div class="pp-btns"><a class="btn wa" target="_blank" rel="noopener" href="${waLink(I18N[L()].msg)}">💬 ${T("wa")}</a></div>
  <h3>${T("form")}</h3><div class="eq-g">
  <div class="q"><label for="pp1">${T("name")} *</label><input id="pp1" maxlength="80" autocomplete="name"><div class="qe"></div></div>
  <div class="q"><label for="pp2">${T("mob")} *</label><input id="pp2" type="tel" inputmode="numeric" maxlength="14" autocomplete="tel"><div class="qe"></div></div>
  <div class="q"><label for="pp3">${T("em")} *</label><input id="pp3" type="email" maxlength="100" autocomplete="email"><div class="qe"></div></div>
  <div class="q"><label for="pp4">${T("subj")} *</label><input id="pp4" maxlength="100"><div class="qe"></div></div>
  <div class="q full"><label for="pp5">${T("msg")} *</label><textarea id="pp5" maxlength="500"></textarea><div class="qe"></div></div></div>
  <p class="priv" style="margin-top:10px">🔒 ${T("priv")}</p><div class="pp-res" id="ppR" role="status"></div></div>
  <div class="eq-f"><button type="submit" class="btn gold" id="ppS">${T("send")}</button></div></form>`);
  box.querySelector("#ppF").addEventListener("submit",submit);
}
async function submit(e){
  e.preventDefault();const v=i=>box.querySelector("#pp"+i).value.trim(),R=box.querySelector("#ppR"),B=box.querySelector("#ppS");
  const mob=v(2).replace(/\D/g,"").replace(/^91(?=\d{10}$)/,"");
  const chk=[[1,v(1).length<2,"eName"],[2,!/^[6-9]\d{9}$/.test(mob),"eMob"],[3,!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v(3)),"eMail"],[4,!v(4),"eSubj"],[5,!v(5),"eMsg"]];
  let bad=null;chk.forEach(([i,b,k])=>{const q=box.querySelector("#pp"+i).parentNode;q.classList.toggle("bad",b);q.querySelector(".qe").textContent=b?T(k):"";if(b&&!bad)bad=i});
  if(bad)return box.querySelector("#pp"+bad).focus();
  /* same table/columns as the existing catalogue enquiry (no schema change): subject -> product, city not collected -> "-" */
  const rec={full_name:v(1),mobile:mob,email:v(3),city:"-",category:"Contact Enquiry",product:v(4).slice(0,100),message:v(5)};
  const text=`*New Contact Enquiry – Sivaani Associate*\n\n*Subject:* ${rec.product}\n\nName: ${rec.full_name}\nMobile: ${rec.mobile}\nEmail: ${rec.email}\n\n*Message:* ${rec.message}`;
  const link=`<a class="btn wa" target="_blank" rel="noopener" href="${waLink(text)}">${T("sendWa")}</a>`;
  B.disabled=true;B.textContent=T("sending");R.innerHTML="";
  const s=window.SA_CATALOGUE&&SA_CATALOGUE.supabase;let out;
  try{
    if(s&&s.url&&s.anonKey){const r=await fetch(s.url.replace(/\/$/,"")+"/rest/v1/enquiries",{method:"POST",headers:{apikey:s.anonKey,Authorization:"Bearer "+s.anonKey,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(rec)});if(!r.ok)throw new Error(r.status);
      out=`<div class="ok">${T("okDb")}${link}</div>`}
    else out=`<div class="ok">${T("okWa")}${link}</div>`;
    B.textContent="✓";
  }catch(x){out=`<div class="bd">${T("bad")}${link}</div>`;B.disabled=false;B.textContent=T("retry")}
  R.innerHTML=out;R.scrollIntoView({block:"nearest"});
}

/* ---- wire up: ONLY the three top-level nav links (About/Products dropdown links are untouched) ---- */
const MAP={"#career":career,"#testimonials":testi,"#contact":contact};
document.addEventListener("click",e=>{
  if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;
  const a=e.target.closest("#nav > a");if(!a)return;
  const fn=MAP[a.getAttribute("href")];if(!fn)return;
  e.preventDefault();fn();
});
})();
