/* Dynamic insurance enquiry → WhatsApp. Data: enquiry-data.js (edit via admin.html). Nothing is stored or sent to any server. */
(function(){
const D=(()=>{try{if(/[?&]preview=1/.test(location.search)){const d=JSON.parse(localStorage.getItem("sa_enq_draft"));if(d&&d.forms&&d.products)return d}}catch(e){}return window.SA_ENQUIRY})();
if(!D)return;
const L={en:{pick:"Choose your insurance",cat:"Insurance category",prod:"Select a product",none:"No plans are open for online enquiry right now. Please chat with us directly.",chatDirect:"Chat on WhatsApp",next:"Next",back:"Previous",step:"Step",of:"of",contact:"Your contact details",rev:"Review your details",edit:"Edit",cust:"Customer details",enq:"Enquiry details",comm:"Additional Comments (optional)",consent:"I agree that Sivaani Associate may use these details to contact me about my insurance enquiry.",priv:"We collect only what is needed for your enquiry. Please do not share Aadhaar, PAN, bank details, passwords or medical documents here. Your details are not stored on this website; they go only into the WhatsApp message you choose to send. <a href='privacy.html' target='_blank' rel='noopener'>Privacy Notice</a>",send:"Send Enquiry on WhatsApp",req:"This field is required.",mob:"Enter a valid 10-digit mobile number.",dob:"Enter a valid date of birth.",reg:"Enter a valid registration number.",rng:"Enter a valid value.",email:"Enter a valid email address.",rage:"Retirement age must be higher than current age.",cons:"Please tick the consent box to continue.",sent:"WhatsApp should now be open with your message ready. Please press Send in WhatsApp – your enquiry is delivered only once you send it.",again:"WhatsApp didn't open? Tap here.",name:"Full Name",mobile:"Mobile Number",city:"City",pickHint:"Please choose a category and a product.",opt:"(optional)",close:"Close"},
ta:{pick:"காப்பீட்டைத் தேர்வு செய்யுங்கள்",cat:"காப்பீட்டு வகை",prod:"திட்டத்தைத் தேர்வு செய்யவும்",none:"தற்போது ஆன்லைன் விசாரணைக்கு திட்டங்கள் இல்லை. நேரடியாக வாட்ஸ்அப்பில் பேசுங்கள்.",chatDirect:"வாட்ஸ்அப்பில் பேசுங்கள்",next:"அடுத்து",back:"முந்தைய",step:"படி",of:"/",contact:"உங்கள் தொடர்பு விவரங்கள்",rev:"விவரங்களைச் சரிபார்க்கவும்",edit:"திருத்து",cust:"வாடிக்கையாளர் விவரங்கள்",enq:"விசாரணை விவரங்கள்",comm:"கூடுதல் குறிப்புகள் (விருப்பம்)",consent:"என் காப்பீட்டு விசாரணை தொடர்பாக என்னைத் தொடர்பு கொள்ள சிவானி அசோசியேட் இந்த விவரங்களைப் பயன்படுத்த சம்மதிக்கிறேன்.",priv:"விசாரணைக்குத் தேவையான விவரங்களை மட்டுமே கேட்கிறோம். ஆதார், பான், வங்கி விவரங்கள், கடவுச்சொற்கள், மருத்துவ ஆவணங்களை இங்கே பகிர வேண்டாம். உங்கள் விவரங்கள் இந்த இணையதளத்தில் சேமிக்கப்படாது; நீங்கள் அனுப்பும் வாட்ஸ்அப் செய்தியில் மட்டுமே செல்லும். <a href='privacy.html' target='_blank' rel='noopener'>தனியுரிமை அறிவிப்பு</a>",send:"வாட்ஸ்அப்பில் விசாரணை அனுப்புங்கள்",req:"இது அவசியம்.",mob:"சரியான 10 இலக்க மொபைல் எண்ணை உள்ளிடவும்.",dob:"சரியான பிறந்த தேதியை உள்ளிடவும்.",reg:"சரியான பதிவு எண்ணை உள்ளிடவும்.",rng:"சரியான மதிப்பை உள்ளிடவும்.",email:"சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",rage:"ஓய்வு வயது தற்போதைய வயதை விட அதிகமாக இருக்க வேண்டும்.",cons:"தொடர சம்மதப் பெட்டியைத் தேர்வு செய்யவும்.",sent:"உங்கள் செய்தியுடன் வாட்ஸ்அப் திறந்திருக்க வேண்டும். வாட்ஸ்அப்பில் Send அழுத்துங்கள் – நீங்கள் அனுப்பிய பின்பே விசாரணை சென்றடையும்.",again:"வாட்ஸ்அப் திறக்கவில்லையா? இங்கே தட்டவும்.",name:"முழு பெயர்",mobile:"மொபைல் எண்",city:"ஊர்",pickHint:"வகை மற்றும் திட்டத்தைத் தேர்வு செய்யவும்.",opt:"(விருப்பம்)",close:"மூடு"}};
const T=k=>(L[lang]||L.en)[k]||L.en[k], esc=s=>String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const active=()=>D.products.filter(p=>p.active!==false);
const cname=id=>{const c=CONFIG.products.find(p=>p.id===id);return c?c[lang]:id};
const cnameEn=id=>{const c=CONFIG.products.find(p=>p.id===id);return c?c.en:id};
const number=()=>String(D.whatsapp||CONFIG.whatsapp).replace(/\D/g,"");
const F=(k,l,t,r,x)=>Object.assign({k,l,t,r},x||{});
let S,ov,box;

function buildSteps(p){
  const f=D.forms[p.form]||{steps:[]};
  const st=[{id:"pick"}];
  (f.steps||[]).forEach(s=>st.push({id:"s",t:s.t,f:s.f}));
  if((p.extra||[]).length)st.push({id:"s",t:"Additional details",f:p.extra.map((x,i)=>F("x"+i,x.l,x.t||"text",!!x.r,{o:x.o}))});
  st.push({id:"review"});return st;
}
const vis=f=>!f.w||[].concat(f.w.v).includes(S.vals[f.w.k]);
function readInputs(){
  box.querySelectorAll("[data-k]").forEach(el=>{const k=el.dataset.k;
    if(el.type==="radio"){if(el.checked)S.vals[k]=el.value}else S.vals[k]=el.value.trim()});
  box.querySelectorAll(".rg").forEach(g=>{if(!g.querySelector(":checked"))delete S.vals[g.dataset.g]});
}
function fieldHtml(f){
  const v=S.vals[f.k]==null?"":S.vals[f.k],id="q_"+f.k,lb=`${esc(f.l)}${f.r?" *":""}`;let c;
  if(f.t==="radio")return `<div class="q radio" data-w="${f.w?f.w.k+"|"+[].concat(f.w.v).join(","):""}"><span class="lb">${lb}</span><div class="rg" data-g="${f.k}">${f.o.map(o=>`<label><input type="radio" name="${f.k}" data-k="${f.k}" value="${esc(o)}"${v===o?" checked":""}>${esc(o)}</label>`).join("")}</div><div class="qe"></div></div>`;
  if(f.t==="select")c=`<select id="${id}" data-k="${f.k}"><option value="">—</option>${(f.o||[]).map(o=>`<option${v===o?" selected":""}>${esc(o)}</option>`).join("")}</select>`;
  else if(f.t==="textarea")c=`<textarea id="${id}" data-k="${f.k}" maxlength="400" placeholder="${esc(f.ph||"")}">${esc(v)}</textarea>`;
  else{const ty={tel:"tel",email:"email",date:"date",number:"number"}[f.t]||"text";
    c=`<input id="${id}" data-k="${f.k}" type="${ty}" value="${esc(v)}" maxlength="${f.max||60}"${ty==="tel"?' inputmode="numeric" maxlength="14"':""}${ty==="number"?` inputmode="numeric"${f.min!=null?` min="${f.min}"`:""}${f.max!=null?` max="${f.max}"`:""}`:""}${ty==="date"&&f.v==="dob"?` max="${new Date().toISOString().slice(0,10)}"`:""} placeholder="${esc(f.ph||"")}">`}
  return `<div class="q${f.t==="textarea"?" textarea":""}" data-w="${f.w?f.w.k+"|"+[].concat(f.w.v).join(","):""}"><label for="${id}">${lb}</label>${c}<div class="qe"></div></div>`;
}
function checkField(f){
  const v=(S.vals[f.k]||"").trim();
  if(!v)return f.r?T("req"):"";
  if(f.v==="mobile"||f.k==="mobile"){const m=v.replace(/\D/g,"").replace(/^91(?=\d{10}$)/,"");if(!/^[6-9]\d{9}$/.test(m))return T("mob");S.vals[f.k]=m}
  if(f.v==="dob"){const d=new Date(v),n=new Date();if(isNaN(d)||d>n||n.getFullYear()-d.getFullYear()>110)return T("dob")}
  if(f.v==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))return T("email");
  if(f.k==="rage"&&+S.vals.age&&+v<=+S.vals.age)return T("rage");
  if(f.v==="reg"&&!/^[A-Za-z0-9 \-]{6,14}$/.test(v))return T("reg");
  if(f.t==="number"){const n=+v;if(isNaN(n)||(f.min!=null&&n<f.min)||(f.max!=null&&n>f.max))return T("rng")}
  return "";
}
function validate(){
  readInputs();let first=null;
  box.querySelectorAll(".q").forEach(q=>{const el=q.querySelector("[data-k]");if(!el)return;
    const f=S.cur.f.find(x=>x.k===el.dataset.k);if(!f||!vis(f))return;
    const m=checkField(f);q.classList.toggle("bad",!!m);q.querySelector(".qe").textContent=m;if(m&&!first)first=el});
  if(first){first.focus();return false}return true;
}
function rows(){ // ordered [group,label,value] for review + message
  const out=[];S.steps.forEach(s=>{if(!s.f)return;s.f.forEach(f=>{const v=(S.vals[f.k]||"").trim();if(vis(f)&&v)out.push([f.c?"c":"e",(f.e||f.l).replace(/\s*\(optional\)/i,""),v])})});return out;
}
function buildMessage(){
  const r=rows(),line=a=>`${a[1]}: ${a[2].replace(/[\r\n]+/g," ")}`;
  const cm=(S.vals.comments||"").trim();
  return `*New Insurance Enquiry – Sivaani Associate*\n\n*Insurance Category:* ${cnameEn(S.prod.cat)}\n*Product:* ${S.prod.name}\n\n*Customer Details*\n${r.filter(a=>a[0]==="c").map(line).join("\n")}\n\n*Enquiry Details*\n${r.filter(a=>a[0]==="e").map(line).join("\n")||"-"}\n\n${cm?`\n\n*Additional Comments:* ${cm}`:""}`;
}
function waUrl(){return `https://wa.me/${number()}?text=${encodeURIComponent(buildMessage())}`}

function render(){
  const n=S.steps.length,i=S.i,s=S.cur=S.steps[i],last=i===n-1&&n>1;
  let body="";
  if(s.id==="pick"){
    const cats=CONFIG.products.filter(c=>active().some(p=>p.cat===c.id)),prods=active().filter(p=>p.cat===S.cat);
    body=cats.length?(S.lock?"":`<h3>${T("cat")}</h3><div class="chips">${cats.map(c=>`<button type="button" class="chip${S.cat===c.id?" on":""}" data-cat="${c.id}">${c.icon} ${c[lang]}</button>`).join("")}</div>`)+(S.cat?`<h3>${S.lock?cname(S.cat):T("prod")}</h3><div class="chips pr">${prods.map(p=>`<button type="button" class="chip${S.prod&&S.prod.id===p.id?" on":""}" data-prod="${p.id}">${esc(lang==="ta"&&p.ta?p.ta:p.name)}</button>`).join("")}</div>`:""):`<p>${T("none")}</p><a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/${number()}?text=${encodeURIComponent(I18N[lang].msg)}">${T("chatDirect")}</a>`;
    body+=`<div class="qe" id="pickErr"></div>`;
  }else if(s.id==="review"){
    const r=rows(),g=x=>r.filter(a=>a[0]===x).map(a=>`<div><span>${esc(a[1])}</span><b>${esc(a[2])}</b></div>`).join("");
    body=`<h3>${T("rev")}</h3><div class="rv"><h4>${esc(cnameEn(S.prod.cat))} · ${esc(S.prod.name)}</h4><h4>${T("cust")}</h4>${g("c")}<h4>${T("enq")}</h4>${g("e")||"<div><span>-</span></div>"}</div>
    <div class="q full"><label for="q_comments">${T("comm")}</label><textarea id="q_comments" data-k="comments" maxlength="500">${esc(S.vals.comments||"")}</textarea></div>
    <p class="priv">🔒 ${T("priv")}</p>
    <label class="cons"><input type="checkbox" id="consent"${S.consent?" checked":""}><span>${T("consent")}</span></label><div class="qe" id="consErr"></div>
    <div id="sentBox"></div>`;
  }else body=`<h3>${esc(s.t)}</h3><div class="eq-g">${s.f.map(fieldHtml).join("")}</div>`;
  const title=S.prod?S.prod.name:T("pick");
  box.innerHTML=`<div class="eq-h"><b>${esc(title)}<small>Sivaani Associate</small></b><button class="eq-x" aria-label="${T("close")}" data-close>×</button></div>
  <div class="eq-bar"><i style="width:${Math.round((i+1)/n*100)}%"></i></div>
  <div class="eq-steps">${S.prod?`${T("step")} ${i+1} ${T("of")} ${n}`:""}</div>
  <div class="eq-b">${body}</div>
  <div class="eq-f">${i?`<button type="button" class="btn ghost" data-back>← ${T("back")}</button>`:""}${last?`<button type="button" class="btn wa" data-send>${T("send")}</button>`:`<button type="button" class="btn gold" data-next${S.steps.length<=1?" disabled":""}>${T("next")} →</button>`}</div>`;
  box.querySelectorAll(".eq-steps").forEach(e=>{if(!S.prod)e.style.display="none"});
  applyVis();
}
function applyVis(){
  box.querySelectorAll(".q[data-w]").forEach(q=>{const w=q.dataset.w;if(!w)return;const[k,v]=w.split("|");q.style.display=v.split(",").includes(S.vals[k]||"")?"":"none"});
}
function open(cat){
  if(!ov)init();
  const first=active().find(p=>p.cat===cat);
  S={cat:active().some(p=>p.cat===cat)?cat:"",prod:null,vals:{},i:0,steps:[{id:"pick"}],consent:false,lock:false};
  S.lock=!!S.cat;
  if(S.cat&&active().filter(p=>p.cat===S.cat).length===1){pickProd(first.id,true);S.i=1}
  render();ov.classList.add("open");document.body.style.overflow="hidden";box.querySelector("button")&&setTimeout(()=>box.querySelector(".chip,.eq-x").focus(),30);
}
function close(){ov.classList.remove("open");document.body.style.overflow=""}
function pickProd(id,silent){S.prod=active().find(p=>p.id===id);S.steps=buildSteps(S.prod);S.vals={};if(!silent)render()}
function init(){
  ov=document.createElement("div");ov.className="eq-ov";ov.innerHTML='<div class="eq" role="dialog" aria-modal="true"></div>';document.body.appendChild(ov);box=ov.firstChild;
  ov.addEventListener("click",e=>{
    const t=e.target;
    if(t===ov||t.closest("[data-close]"))return close();
    const c=t.closest("[data-cat]");if(c){S.cat=c.dataset.cat;S.prod=null;S.steps=[{id:"pick"}];return render()}
    const p=t.closest("[data-prod]");if(p)return pickProd(p.dataset.prod);
    if(t.closest("[data-back]")){if(S.cur.f||S.cur.id==="review")readInputs();if(S.cur.id==="review")S.consent=$("#consent").checked;S.i--;return render()}
    if(t.closest("[data-next]")){
      if(S.cur.id==="pick"){if(!S.prod){$("#pickErr").textContent=T("pickHint");return}S.i=1;return render()}
      if(!validate())return;S.i++;return render()}
    if(t.closest("[data-send]")){
      readInputs();S.consent=$("#consent").checked;
      if(!S.consent){$("#consErr").textContent=T("cons");return}
      const u=waUrl();window.open(u,"_blank","noopener");
      $("#sentBox").innerHTML=`<div class="sent">${T("sent")}<br><a href="${u}" target="_blank" rel="noopener">${T("again")}</a></div>`;
    }
  });
  ov.addEventListener("change",e=>{if(e.target.dataset&&e.target.dataset.k){S.vals[e.target.dataset.k]=e.target.value.trim();applyVis()}});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&ov.classList.contains("open"))close()});
}
const $=s=>box.querySelector(s);
window.openEnquiry=open;
window.SAEnq={D,open,_test:{buildSteps,buildMessage,waUrl,rows,get S(){return S},set S(v){S=v},checkField}};
})();
