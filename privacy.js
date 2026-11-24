/* Privacy page: shares the site's language choice (localStorage "sa_lang"); removes the "online record" line unless enabled in trust-data.js. */
(function(){
const T=window.SA_TRUST||{};
if(!(T.privacy&&T.privacy.onlineRecord))document.querySelectorAll("[data-if=online]").forEach(e=>e.remove());
let lang="ta";try{lang=localStorage.getItem("sa_lang")||"ta"}catch(e){}
if(lang!=="en")lang="ta";
const TITLE={en:"Privacy Notice – Sivaani Associate",ta:"தனியுரிமை அறிவிப்பு – சிவானி அசோசியேட்"};
function apply(l){
  lang=l;try{localStorage.setItem("sa_lang",l)}catch(e){}
  document.documentElement.lang=l;document.body.classList.toggle("ta",l==="ta");
  document.querySelectorAll("[data-l]").forEach(e=>{e.hidden=e.dataset.l!==l});
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("on",b.dataset.lang===l));
  document.title=TITLE[l];
}
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>apply(b.dataset.lang));
apply(lang);
})();
