/* Homepage highlight carousel text (6 slides), partners heading and assistance badges. Loaded after messages-data.js; only the keys below are overridden. */
(function(){
const M=window.SA_MESSAGES=window.SA_MESSAGES||{};M.en=M.en||{};M.ta=M.ta||{};
const note="Benefits and eligibility are subject to the insurer’s policy terms.";
Object.assign(M.en,{
 trusted:"We Guide You On",
 hc_more:"Enquire now",
 hc1_tag:"Child Plans",hc1_h:"Your Children’s School Fees – Don’t Let Them Become a Financial Burden!",hc1_s:"Plan Today. Secure Your Children’s Education Tomorrow.",hc1_d:"Smart financial planning can help you prepare for your children’s school fees, higher education and future marriage expenses.",hc1_c:"Explore Child Plans",hc1_n:note,
 hc2_tag:"Health Insurance",hc2_h:"Why Pay Medical Bills from Your Savings?",hc2_s:"Protect Your Family Against Unexpected Medical Expenses.",hc2_d:"Explore suitable health insurance options for individuals, families and senior citizens.",hc2_c:"Explore Health Insurance",hc2_n:note,
 hc3_tag:"Life Insurance",hc3_h:"Secure Your Family’s Financial Future.",hc3_d:"Explore life insurance options that can support your loved ones when they need it most.",hc3_c:"Explore Life Insurance",hc3_n:note,
 hc4_tag:"Retirement Planning",hc4_h:"Plan Today for a Comfortable Tomorrow.",hc4_d:"Explore pension, annuity and retirement plans to help you prepare for life after work.",hc4_c:"Explore Retirement Plans",hc4_n:note,
 hc5_tag:"Business Insurance",hc5_h:"Protect Your Business and Its Future.",hc5_d:"Explore cover for the key people, employees and partners of your business.",hc5_c:"Explore Business Insurance",hc5_n:note,
 hc6_tag:"Motor Insurance",hc6_h:"Protection for Your Vehicle and Peace of Mind.",hc6_d:"Explore cover for your car, two-wheeler or commercial vehicle.",hc6_c:"Explore Motor Insurance",hc6_n:note,
 ti1:"Clear Policy Documentation",ti2:"Dedicated Customer Assistance",ti3:"Professional Insurance Guidance",ti4:"Reliable Policy Support"
});
const noteT="பலன்கள் மற்றும் தகுதி, காப்பீட்டு நிறுவனத்தின் பாலிசி விதிமுறைகளுக்கு உட்பட்டவை.";
Object.assign(M.ta,{
 trusted:"நாங்கள் வழிகாட்டும் நிறுவனங்கள்",
 hc_more:"இப்போதே விசாரிக்க",
 hc1_tag:"குழந்தை திட்டங்கள்",hc1_h:"உங்கள் குழந்தைகளின் பள்ளிக் கட்டணம் – நிதிச் சுமையாக மாற விடாதீர்கள்!",hc1_s:"இன்றே திட்டமிடுங்கள். குழந்தைகளின் கல்வியை நாளைக்கு உறுதி செய்யுங்கள்.",hc1_d:"புத்திசாலித்தனமான நிதித் திட்டமிடல், குழந்தைகளின் பள்ளிக் கட்டணம், உயர்கல்வி மற்றும் எதிர்கால திருமணச் செலவுகளுக்குத் தயாராக உதவும்.",hc1_c:"குழந்தை திட்டங்களைப் பாருங்கள்",hc1_n:noteT,
 hc2_tag:"மருத்துவ காப்பீடு",hc2_h:"மருத்துவச் செலவுகளை ஏன் உங்கள் சேமிப்பிலிருந்து செலுத்த வேண்டும்?",hc2_s:"எதிர்பாராத மருத்துவச் செலவுகளிலிருந்து உங்கள் குடும்பத்தைப் பாதுகாக்கவும்.",hc2_d:"தனிநபர்கள், குடும்பங்கள் மற்றும் மூத்த குடிமக்களுக்கு ஏற்ற மருத்துவ காப்பீட்டு வாய்ப்புகளைப் பாருங்கள்.",hc2_c:"மருத்துவ காப்பீட்டைப் பாருங்கள்",hc2_n:noteT,
 hc3_tag:"ஆயுள் காப்பீடு",hc3_h:"உங்கள் குடும்பத்தின் நிதி எதிர்காலத்தைப் பாதுகாக்கவும்.",hc3_d:"உங்கள் அன்புக்குரியவர்களுக்கு மிகவும் தேவைப்படும் நேரத்தில் துணை நிற்கக்கூடிய ஆயுள் காப்பீட்டு வாய்ப்புகளைப் பாருங்கள்.",hc3_c:"ஆயுள் காப்பீட்டைப் பாருங்கள்",hc3_n:noteT,
 hc4_tag:"ஓய்வூதிய திட்டமிடல்",hc4_h:"இன்றே திட்டமிடுங்கள், நாளைய வாழ்க்கை நிம்மதியாக இருக்கட்டும்.",hc4_d:"பணி ஓய்விற்குப் பிந்தைய வாழ்க்கைக்குத் தயாராக ஓய்வூதியம் மற்றும் ஆன்யூட்டி திட்டங்களைப் பாருங்கள்.",hc4_c:"ஓய்வூதிய திட்டங்களைப் பாருங்கள்",hc4_n:noteT,
 hc5_tag:"வணிக காப்பீடு",hc5_h:"உங்கள் தொழிலையும் அதன் எதிர்காலத்தையும் பாதுகாக்கவும்.",hc5_d:"முக்கிய நபர்கள், ஊழியர்கள் மற்றும் கூட்டாளிகளுக்கான காப்பீட்டு வாய்ப்புகளைப் பாருங்கள்.",hc5_c:"வணிக காப்பீட்டைப் பாருங்கள்",hc5_n:noteT,
 hc6_tag:"மோட்டார் காப்பீடு",hc6_h:"உங்கள் வாகனத்துக்குப் பாதுகாப்பு, மனதுக்கு நிம்மதி.",hc6_d:"கார், இருசக்கர வாகனம் மற்றும் வணிக வாகனங்களுக்கான காப்பீட்டு வாய்ப்புகளைப் பாருங்கள்.",hc6_c:"மோட்டார் காப்பீட்டைப் பாருங்கள்",hc6_n:noteT,
 ti1:"தெளிவான பாலிசி ஆவணங்கள்",ti2:"அர்ப்பணிப்புடன் கூடிய வாடிக்கையாளர் உதவி",ti3:"தொழில்முறை காப்பீட்டு வழிகாட்டுதல்",ti4:"நம்பகமான பாலிசி ஆதரவு"
});
})();