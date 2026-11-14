/* Trust & credibility content for Sivaani Associate.
   RULE: fill the "verified" block ONLY with facts you can prove (documents, written permission). Anything left empty stays hidden on the site.
   Loaded before script.js. Text for the site's Tamil/English toggle is in i18n below. */
window.SA_TRUST = {
  verified: {
    /* Office address as it appears on your official documents. Example: { en: "12, ... Road, Erode – 638001", ta: "..." } */
    address: { en: "", ta: "" },

    /* Founder / advisor introduction. Photo: path such as "images/advisor.jpg" (use a real photo; add alt text). */
    advisor: {
      name: "",
      role: { en: "", ta: "" },
      bio:  { en: "", ta: "" },
      photo: "", photoAlt: { en: "", ta: "" }
    },

    /* Real office photographs. Example: [{ src: "images/office-1.jpg", alt: { en: "Front of our Erode office", ta: "..." } }] */
    officePhotos: [],

    /* Registration / authorisation details. Add an entry ONLY with the exact value from the document.
       Example: [{ label: { en: "IRDAI licence no.", ta: "IRDAI உரிம எண்" }, value: "<number from your licence>" }] */
    registrations: [],

    /* Optional extra sentence under the insurer names, only if you hold written authorisation, e.g. "Authorised agent of <insurer>". */
    associationNote: { en: "", ta: "" },

    /* Optional, e.g. { en: "Mon–Sat, 9:30 am – 6:30 pm", ta: "..." } */
    supportHours: { en: "", ta: "" },

    /* Shows a "<value> Years Experience" badge next to the insurer names. Leave "" unless you can prove it. Example: "12+" */
    experienceYears: ""
  },

  /* Used by privacy.html (the main site reads CONFIG in script.js). Keep in sync with CONFIG. */
  contact: { phone: "+91 73737 90009", email: "info@sivaaniassociate.com", whatsapp: "917373790009" },

  /* Set onlineRecord to true ONLY if the Supabase keys in catalogue-data.js are filled in (enquiries are then saved online). */
  privacy: { onlineRecord: false },

  i18n: {
    en: {
      trusted: "Insurers We Guide You On",
      p_note: "Sivaani Associate provides guidance on insurance products offered by these companies. Policies are issued by the respective insurers.",
      te_empty: "Genuine customer reviews will be shown here, shared with each customer's permission.",
      tr_title: "How We Guide You",
      tr_sub: "Plain-language guidance, direct contact and clear next steps.",
      tr1_t: "Transparent Insurance Guidance",
      tr1_d: "We explain what a plan is designed to do, and where its limits are, in plain language.",
      tr2_t: "Personalized Customer Support",
      tr2_d: "Your questions are answered with your family's situation in mind.",
      tr3_t: "Assistance Throughout the Insurance Journey",
      tr3_d: "From choosing a plan to renewals and claim paperwork, you can reach us for guidance.",
      tr4_t: "Clear Policy Information",
      tr4_d: "We point you to the insurer's policy wording and written quotation so you can check benefits, exclusions and premiums.",
      tr5_t: "Dedicated Customer Assistance",
      tr5_d: "Call or message us on WhatsApp and talk directly to our team.",
      tr_note: "Benefits, eligibility and premiums are set by the insurer and confirmed in the policy documents.",
      id_title: "About Sivaani Associate", id_office: "Our office", id_advisor: "Your advisor", id_reg: "Registration details",
      su_title: "Customer Support & Claim Assistance",
      su_sub: "Tell us what you need help with, and we'll guide you on the next step.",
      su1_t: "Policy-related questions", su1_d: "Understand your policy's features, terms and documents.",
      su2_t: "Premium information", su2_d: "Get help understanding premium amounts and due dates. Exact premiums are set by the insurer.",
      su3_t: "Policy renewal guidance", su3_d: "Know what to check and which steps to follow before a renewal date.",
      su4_t: "Claim documentation guidance", su4_d: "We help you understand which documents the insurer usually asks for and how to organise them.",
      su5_t: "General insurance assistance", su5_d: "Any other insurance question: ask us, and we'll point you in the right direction.",
      su_cta_t: "Contact our team", su_call: "Call", su_wa: "WhatsApp", su_mail: "Email", su_hours: "Support hours:",
      su_note: "Claim decisions and settlement are made by the insurer. We help with guidance and paperwork; we cannot guarantee that any claim will be approved or settled.",
      ti1: "Transparent Guidance", ti2: "Customer-Focused Service", ti3: "Privacy-Conscious Enquiry", ti4: "Direct Assistance",
      priv_link: "Privacy Notice", su_link: "Customer Support"
    },
    ta: {
      trusted: "நாங்கள் வழிகாட்டும் காப்பீட்டு நிறுவனங்கள்",
      p_note: "இந்த நிறுவனங்களின் காப்பீட்டு தயாரிப்புகள் குறித்து சிவானி அசோசியேட் வழிகாட்டுகிறது. பாலிசிகளை அந்தந்த காப்பீட்டு நிறுவனங்களே வழங்குகின்றன.",
      te_empty: "வாடிக்கையாளர்களின் அனுமதியுடன் பெறப்பட்ட உண்மையான கருத்துகள் இங்கே காட்டப்படும்.",
      tr_title: "நாங்கள் எவ்வாறு வழிகாட்டுகிறோம்",
      tr_sub: "எளிய மொழியில் வழிகாட்டுதல், நேரடி தொடர்பு, தெளிவான அடுத்த படிகள்.",
      tr1_t: "வெளிப்படையான காப்பீட்டு வழிகாட்டுதல்",
      tr1_d: "ஒரு திட்டம் எதற்காக வடிவமைக்கப்பட்டது, அதன் வரம்புகள் என்ன என்பதை எளிய மொழியில் விளக்குகிறோம்.",
      tr2_t: "தனிப்பட்ட வாடிக்கையாளர் உதவி",
      tr2_d: "உங்கள் குடும்பத்தின் சூழலை மனதில் கொண்டு உங்கள் கேள்விகளுக்கு பதிலளிக்கிறோம்.",
      tr3_t: "காப்பீட்டுப் பயணம் முழுவதும் உதவி",
      tr3_d: "திட்டத்தைத் தேர்வு செய்வது முதல் புதுப்பித்தல், கிளெய்ம் ஆவணங்கள் வரை வழிகாட்டுதலுக்கு எங்களை அணுகலாம்.",
      tr4_t: "தெளிவான பாலிசி தகவல்",
      tr4_d: "நன்மைகள், விலக்குகள், பிரீமியத்தை நீங்களே சரிபார்க்க, காப்பீட்டு நிறுவனத்தின் பாலிசி ஆவணத்தையும் எழுத்துப்பூர்வ மேற்கோளையும் காட்டுகிறோம்.",
      tr5_t: "அர்ப்பணிப்புள்ள வாடிக்கையாளர் உதவி",
      tr5_d: "அழையுங்கள் அல்லது வாட்ஸ்அப்பில் செய்தி அனுப்புங்கள்; எங்கள் குழுவுடன் நேரடியாகப் பேசலாம்.",
      tr_note: "நன்மைகள், தகுதி, பிரீமியம் ஆகியவை காப்பீட்டு நிறுவனத்தால் நிர்ணயிக்கப்படுகின்றன; பாலிசி ஆவணங்களில் உறுதி செய்யப்படும்.",
      id_title: "சிவானி அசோசியேட் பற்றி", id_office: "எங்கள் அலுவலகம்", id_advisor: "உங்கள் ஆலோசகர்", id_reg: "பதிவு விவரங்கள்",
      su_title: "வாடிக்கையாளர் உதவி & கிளெய்ம் வழிகாட்டுதல்",
      su_sub: "உங்களுக்கு என்ன உதவி வேண்டும் என்று சொல்லுங்கள்; அடுத்த படியில் வழிகாட்டுவோம்.",
      su1_t: "பாலிசி தொடர்பான கேள்விகள்", su1_d: "உங்கள் பாலிசியின் அம்சங்கள், விதிமுறைகள், ஆவணங்களைப் புரிந்துகொள்ள உதவுகிறோம்.",
      su2_t: "பிரீமியம் தகவல்", su2_d: "பிரீமியம் தொகை, செலுத்த வேண்டிய தேதிகளைப் புரிந்துகொள்ள உதவுகிறோம். சரியான பிரீமியத்தை காப்பீட்டு நிறுவனம் தீர்மானிக்கும்.",
      su3_t: "பாலிசி புதுப்பித்தல் வழிகாட்டுதல்", su3_d: "புதுப்பித்தல் தேதிக்கு முன் எதைச் சரிபார்க்க வேண்டும், எந்த படிகளைப் பின்பற்ற வேண்டும் என்பதை அறியலாம்.",
      su4_t: "கிளெய்ம் ஆவண வழிகாட்டுதல்", su4_d: "காப்பீட்டு நிறுவனம் பொதுவாக கேட்கும் ஆவணங்கள் எவை, அவற்றை எப்படி ஒழுங்குபடுத்துவது என்பதைப் புரிந்துகொள்ள உதவுகிறோம்.",
      su5_t: "பொது காப்பீட்டு உதவி", su5_d: "வேறு எந்த காப்பீட்டு கேள்வியாக இருந்தாலும் கேளுங்கள்; சரியான திசையில் வழிகாட்டுவோம்.",
      su_cta_t: "எங்கள் குழுவைத் தொடர்பு கொள்ளுங்கள்", su_call: "அழைக்க", su_wa: "வாட்ஸ்அப்", su_mail: "மின்னஞ்சல்", su_hours: "உதவி நேரம்:",
      su_note: "கிளெய்ம் முடிவுகளும் தீர்வும் காப்பீட்டு நிறுவனத்தால் எடுக்கப்படுகின்றன. நாங்கள் வழிகாட்டுதலும் ஆவண உதவியும் மட்டுமே வழங்குகிறோம்; எந்த கிளெய்மும் ஏற்கப்படும் அல்லது தீர்க்கப்படும் என்று உறுதி அளிக்க முடியாது.",
      ti1: "வெளிப்படையான வழிகாட்டுதல்", ti2: "வாடிக்கையாளர் மையச் சேவை", ti3: "தனியுரிமை கருதிய விசாரணை", ti4: "நேரடி உதவி",
      priv_link: "தனியுரிமை அறிவிப்பு", su_link: "வாடிக்கையாளர் உதவி"
    }
  }
};
