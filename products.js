/* Products, icons and enquiry config. Edit here; enquiry.js is generic.
   The details modal uses ONLY text that already exists in this project:
   - the category text in TOPICS (main.js), and
   - the insurer list in index.html (#companies).
   Do not add benefits, returns, premiums or eligibility here until the insurer/owner has verified them. */
window.ENQ_CONFIG = {
  whatsapp: (typeof CONFIG !== 'undefined' ? CONFIG.whatsapp : ''),   // inherited from CONFIG.whatsapp in main.js (international format, no +)
  privacyUrl: '/privacy.html'
};

/* Line icons, 24x24, drawn with currentColor so they follow the card / modal colour. */
window.ICONS = {
  'term': '<path d="M12 3 5 6v5.5c0 4.6 3 7.6 7 9.5 4-1.9 7-4.9 7-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
  'term-women': '<path d="M12 3 5 6v5.5c0 4.6 3 7.6 7 9.5 4-1.9 7-4.9 7-9.5V6z"/><circle cx="12" cy="10" r="2.6"/><path d="M12 12.6V17M10 15h4"/>',
  'term-rop': '<path d="M20 12a8 8 0 0 1-13.6 5.7"/><path d="M4 12a8 8 0 0 1 13.6-5.7"/><path d="M17.6 3v3.3h-3.3"/><path d="M6.4 21v-3.3h3.3"/><circle cx="12" cy="12" r="2"/>',
  'gr': '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/><path d="M3 21h18"/>',
  'child': '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5"/><path d="M22 9v6"/>',
  'retire': '<path d="M3 19h18"/><path d="M6.5 19a5.5 5.5 0 0 1 11 0"/><path d="M12 6V3.5M4.9 9.9 3.4 8.4M19.1 9.9l1.5-1.5M2.5 14.5h2M19.5 14.5h2"/>',
  'invest': '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  'h-ind': '<circle cx="10" cy="8" r="3.2"/><path d="M4 20v-1a6 6 0 0 1 12 0v1"/><path d="M19 5v6M16 8h6"/>',
  'h-fam': '<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M2 20v-1a5 5 0 0 1 10 0v1"/><path d="M14.5 15.3a4 4 0 0 1 7.5 2.7v2"/>',
  'h-sr': '<circle cx="10" cy="4.8" r="2.2"/><path d="M10 8.5V15"/><path d="m10 15-2.5 6M10 15l2.5 6"/><path d="M6.5 11.5h7"/><path d="M16 11c0-1.8 3-1.8 3 0v10"/>',
  'h-ci': '<path d="M12 21s-8-4.8-8-11a4.6 4.6 0 0 1 8-3 4.6 4.6 0 0 1 8 3c0 6.2-8 11-8 11z"/><path d="M5.5 12.5h3l1.6-3 2.4 6 1.6-3h4.4"/>',
  'h-grp': '<path d="M4 21V6l8-3v18"/><path d="M12 9h8v12"/><path d="M3 21h18"/><path d="M8 8h.01M8 12h.01M8 16h.01M16 13h.01M16 17h.01"/>',
  'car': '<path d="M3.5 15.5V12l2-5.5h13l2 5.5v3.5z"/><path d="M3.5 12h17"/><circle cx="7.5" cy="17" r="2"/><circle cx="16.5" cy="17" r="2"/>',
  'bike': '<circle cx="5.5" cy="16.5" r="3.5"/><circle cx="18.5" cy="16.5" r="3.5"/><path d="M5.5 16.5 9 9h4l5.5 7.5"/><path d="m13 9 1.5-3H17"/><path d="M9 9H7"/>',
  'travel': '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  'home': '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  'pa': '<path d="M12 3 5 6v5.5c0 4.6 3 7.6 7 9.5 4-1.9 7-4.9 7-9.5V6z"/><path d="M12 8v6M9 11h6"/>',
  'biz': '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>'
};

/* Order matters: the first 14 are shown on the page, the rest appear after "View all products".
   topic = which TOPICS entry in main.js supplies the overview and the "what to check" points.
   lead / overview / pts override or extend that text ONLY where the generic topic would be wrong for the product
   (for example, the Term topic says term plans do not build savings, which would be wrong for Return of Premium).
   badge is intentionally empty: add text only once the offer is verified with the insurer. */
window.PRODUCTS = [
  { id: 'term', name: 'Term Life Insurance', cat: 'Life', badge: '', topic: 'term', form: 'life', preset: { ptype: 'Term Life' } },
  { id: 'h-ind', name: 'Individual Health Insurance', cat: 'Health', badge: '', topic: 'health', form: 'health', preset: { floater: 'Individual', people: '1' } },
  { id: 'invest', name: 'Investment Plans', cat: 'Life', badge: '', topic: 'savings', form: 'life', preset: { ptype: 'ULIP' } },
  { id: 'car', name: 'Car Insurance', cat: 'Vehicle', badge: '', topic: 'general', form: 'car' },
  { id: 'bike', name: 'Two Wheeler Insurance', cat: 'Vehicle', badge: '', topic: 'general', form: 'bike' },
  { id: 'h-fam', name: 'Family Health Insurance', cat: 'Health', badge: '', topic: 'health', form: 'health', preset: { floater: 'Family Floater' } },
  { id: 'travel', name: 'Travel Insurance', cat: 'Other', badge: '', topic: 'general', form: 'travel' },
  { id: 'term-women', name: 'Term Insurance for Women', cat: 'Life', badge: '', topic: 'term', form: 'life', preset: { ptype: 'Term Life', gender: 'Female' },
    lead: 'This is term insurance for women. Plan conditions, premiums and eligibility are set by the insurer.' },
  { id: 'term-rop', name: 'Term Plans with Return of Premium', cat: 'Life', badge: '', topic: 'term', form: 'life', preset: { ptype: 'Term Life' },
    overview: 'Term plans with return of premium are a variant of term insurance. Whether premiums are returned, how much and when, depends on the plan and the insurer. We will explain the conditions of the plan you are considering.' },
  { id: 'gr', name: 'Guaranteed Return Plans', cat: 'Life', badge: '', topic: 'savings', form: 'life' },
  { id: 'child', name: 'Child Savings Plans', cat: 'Life', badge: '', topic: 'child', form: 'life' },
  { id: 'retire', name: 'Retirement Plans', cat: 'Life', badge: '', topic: 'retire', form: 'life' },
  { id: 'h-grp', name: 'Employee Group Health Insurance', cat: 'Health', badge: '', topic: 'health', form: 'business', preset: { instype: 'Group Health (for employees)' },
    overview: 'Employee group health insurance lets a business arrange health cover for its employees. Plan terms are set by the insurer. We will explain the options for your team.' },
  { id: 'home', name: 'Home Insurance', cat: 'Other', badge: '', topic: 'general', form: 'home' },
  { id: 'h-sr', name: 'Senior Citizen Health Insurance', cat: 'Health', badge: '', topic: 'health', form: 'health', preset: { ptype: 'Senior citizen plan' },
    lead: 'This is health insurance for senior citizens. Entry age, waiting periods and conditions are set by the insurer.' },
  { id: 'h-ci', name: 'Critical Illness Insurance', cat: 'Health', badge: '', topic: 'health', form: 'health', preset: { ptype: 'Critical illness cover' },
    overview: 'Critical illness insurance is a health-related cover. Which illnesses are covered and what is paid depends on the plan and the insurer. We will explain the conditions before you decide.',
    pts: ['Check the sum insured and waiting periods.', 'Read the exclusions in the policy document.', 'Ask how a claim is made and what is paid.'] },
  { id: 'pa', name: 'Personal Accident Insurance', cat: 'Other', badge: '', topic: 'general', form: 'accident' },
  { id: 'biz', name: 'Commercial / Business Insurance', cat: 'Other', badge: '', topic: 'general', form: 'business' }
];

/* ---------- Enquiry forms: one per insurance category (used by enquiry.js, which is generic) ----------
   Field keys: k = name, l = label, m = label used in the WhatsApp message (optional),
   t = text | tel | email | date | age | num | select | radio | multi,
   req = required, o = options, show = (get) => bool (conditional field), full = full-width,
   nm = person-name check, min / max = limits for num, ph = placeholder, list = suggestions.
   Products pick a form with `form` and may pre-fill answers with `preset` (above).
   Nothing here asks for OTPs, passwords, bank/card details, Aadhaar or ID documents. */
(function () {
  const yr = new Date().getFullYear();
  const f = {
    name: l => ({ k: 'name', l: l || 'Full Name', t: 'text', req: 1, nm: 1, max: 60 }),
    dob: () => ({ k: 'dob', l: 'Date of Birth', t: 'date', req: 1 }),
    age: () => ({ k: 'age', l: 'Age', t: 'age', req: 1 }),
    gender: () => ({ k: 'gender', l: 'Gender', t: 'radio', req: 1, o: ['Male', 'Female', 'Other'] }),
    mobile: () => ({ k: 'mobile', l: 'Mobile Number', t: 'tel', req: 1 }),
    email: () => ({ k: 'email', l: 'Email Address', t: 'email', req: 1, max: 80 }),
    city: () => ({ k: 'city', l: 'City / Location', t: 'text', req: 1, max: 60 }),
    time: () => ({ k: 'ctime', l: 'Preferred Contact Time', t: 'select', req: 1, o: ['Morning (9 am - 12 pm)', 'Afternoon (12 pm - 4 pm)', 'Evening (4 pm - 8 pm)', 'Anytime'] }),
    yn: (k, l) => ({ k, l, t: 'radio', req: 1, o: ['Yes', 'No'] }),
    cover: (o, l) => ({ k: 'cover', l: l || 'Coverage Amount Required', t: 'select', req: 1, o }),
    income: () => ({ k: 'income', l: 'Annual Income Range', t: 'select', req: 1, o: ['Below ₹3 lakh', '₹3 - 5 lakh', '₹5 - 10 lakh', '₹10 - 25 lakh', 'Above ₹25 lakh', 'Prefer to discuss'] })
  };
  const NS = 'Not sure - please advise';
  const INR_LIFE = ['₹25 lakh', '₹50 lakh', '₹1 crore', '₹2 crore', '₹5 crore or more', NS];
  const INR_HEALTH = ['₹3 lakh', '₹5 lakh', '₹10 lakh', '₹25 lakh', '₹50 lakh or more', NS];
  const INR_PA = ['₹5 lakh', '₹10 lakh', '₹25 lakh', '₹50 lakh', '₹1 crore or more', NS];
  const INR_HOME = ['Up to ₹10 lakh', '₹10 - 25 lakh', '₹25 - 50 lakh', '₹50 lakh - 1 crore', 'Above ₹1 crore', NS];
  const INR_BIZ = ['Up to ₹10 lakh', '₹10 - 50 lakh', '₹50 lakh - 1 crore', '₹1 - 5 crore', 'Above ₹5 crore', NS];
  const VINS = ['Comprehensive', 'Third Party', 'Own Damage'];
  const isExisting = g => g('condition') === 'Existing';
  const hasPrev = g => isExisting(g) && !!g('prevstatus') && g('prevstatus') !== 'No previous insurance';

  window.ENQ_FORMS = {
    life: { title: 'Life Insurance', fields: [
      f.name(), f.dob(), f.age(), f.gender(), f.mobile(), f.email(), f.city(),
      { k: 'occupation', l: 'Occupation', t: 'text', req: 1, max: 60 }, f.income(),
      f.cover(INR_LIFE),
      { k: 'ptype', l: 'Policy Type', t: 'select', req: 1, o: ['Term Life', 'Whole Life', 'Endowment', 'ULIP', NS] },
      { k: 'duration', l: 'Policy Duration', t: 'select', req: 1, o: ['10 years', '15 years', '20 years', '25 years', '30 years', '35 years', 'Up to age 60', 'Up to age 85', NS] },
      { k: 'smoker', l: 'Smoker / Non-Smoker', t: 'radio', req: 1, o: ['Smoker', 'Non-Smoker'] },
      f.yn('existing', 'Existing Life Insurance'), f.time()
    ] },
    health: { title: 'Health Insurance', fields: [
      f.name(), f.dob(), f.age(), f.gender(), f.mobile(), f.email(), f.city(),
      { k: 'people', l: 'Number of People to be Covered', t: 'num', req: 1, min: 1, max: 20, ph: 'e.g. 4' },
      { k: 'floater', l: 'Individual / Family Floater', t: 'radio', req: 1, o: ['Individual', 'Family Floater'] },
      { k: 'relations', l: 'Relationship of Family Members', t: 'multi', req: 1, full: 1, o: ['Self', 'Spouse', 'Son', 'Daughter', 'Father', 'Mother', 'Other'],
        show: g => g('floater') === 'Family Floater' || Number(g('people')) > 1 },
      f.cover(INR_HEALTH),
      f.yn('existing', 'Existing Health Insurance'),
      { k: 'preexisting', l: 'Pre-existing Conditions', t: 'radio', req: 0, o: ['Yes', 'No', 'Prefer to Discuss'],
        hint: 'Optional. No medical details are needed here; we will discuss them on the call.' },
      { k: 'ptype', l: 'Preferred Policy Type', t: 'select', req: 1, o: ['Base health plan', 'Top-up / Super top-up', 'Critical illness cover', 'Senior citizen plan', 'Maternity cover', NS] },
      f.time()
    ] },
    car: { title: 'Car Insurance', fields: [
      f.name('Customer Full Name'), f.mobile(), f.email(), f.city(),
      { k: 'brand', l: 'Car Brand', t: 'text', req: 1, max: 40, list: ['Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Kia', 'Toyota', 'Honda', 'Renault', 'Skoda', 'Volkswagen', 'MG', 'Nissan', 'Ford', 'BMW', 'Mercedes-Benz', 'Audi'] },
      { k: 'model', l: 'Car Model', t: 'text', req: 1, max: 40 },
      { k: 'variant', l: 'Car Variant', t: 'text', req: 1, max: 40, ph: 'e.g. VXi / ZX Petrol' },
      { k: 'mfgyear', l: 'Manufacturing Year', t: 'num', req: 1, min: 1990, max: yr + 1, ph: 'YYYY' },
      { k: 'fuel', l: 'Fuel Type', t: 'select', req: 1, o: ['Petrol', 'Diesel', 'Electric', 'CNG', 'Hybrid'] },
      { k: 'regno', l: 'Registration Number (Optional)', m: 'Registration Number', t: 'text', req: 0, reg: 1, max: 15, ph: 'e.g. TN33AB1234' },
      { k: 'regyear', l: 'Registration Year', t: 'num', req: 1, min: 1990, max: yr + 1, ph: 'YYYY', notBefore: 'mfgyear' },
      { k: 'condition', l: 'New Car / Existing Car', t: 'radio', req: 1, o: ['New', 'Existing'] },
      { k: 'instype', l: 'Insurance Type', t: 'select', req: 1, o: VINS },
      { k: 'prevstatus', l: 'Previous Insurance Status', t: 'select', req: 1, o: ['Active policy', 'Expired', 'No previous insurance'], show: isExisting },
      { k: 'prevexpiry', l: 'Previous Policy Expiry Date', t: 'date', req: 1, expiry: 1, show: hasPrev },
      { k: 'claim', l: 'Claim History', t: 'radio', req: 1, o: ['Yes', 'No'], show: hasPrev },
      f.time()
    ] },
    bike: { title: 'Two-Wheeler Insurance', fields: [
      f.name('Customer Full Name'), f.mobile(), f.email(), f.city(),
      { k: 'brand', l: 'Bike / Scooter Brand', t: 'text', req: 1, max: 40, list: ['Hero', 'Honda', 'TVS', 'Bajaj', 'Royal Enfield', 'Suzuki', 'Yamaha', 'KTM', 'Ather', 'Ola Electric', 'Revolt'] },
      { k: 'model', l: 'Model', t: 'text', req: 1, max: 40 },
      { k: 'mfgyear', l: 'Manufacturing Year', t: 'num', req: 1, min: 1990, max: yr + 1, ph: 'YYYY' },
      { k: 'regno', l: 'Vehicle Registration Number (Optional)', m: 'Registration Number', t: 'text', req: 0, reg: 1, max: 15, ph: 'e.g. TN33AB1234' },
      { k: 'fuel', l: 'Fuel Type', t: 'select', req: 1, o: ['Petrol', 'Electric'] },
      { k: 'condition', l: 'New / Existing Vehicle', t: 'radio', req: 1, o: ['New', 'Existing'] },
      { k: 'instype', l: 'Insurance Type', t: 'select', req: 1, o: VINS },
      { k: 'prevexpiry', l: 'Previous Policy Expiry Date', t: 'date', req: 0, expiry: 1, show: isExisting, hint: 'Optional. Leave blank if you are not sure.' },
      { k: 'claim', l: 'Claim History', t: 'radio', req: 1, o: ['Yes', 'No'], show: isExisting }
    ] },
    travel: { title: 'Travel Insurance', fields: [
      f.name(), f.mobile(), f.email(), f.city(),
      { k: 'country', l: 'Destination Country', t: 'text', req: 1, max: 50 },
      { k: 'start', l: 'Travel Start Date', t: 'date', req: 1, future: 1 },
      { k: 'end', l: 'Travel End Date', t: 'date', req: 1, future: 1, notBefore: 'start' },
      { k: 'travellers', l: 'Number of Travellers', t: 'num', req: 1, min: 1, max: 20, ph: 'e.g. 2' },
      { k: 'ages', l: 'Traveller Age(s)', t: 'text', req: 1, ages: 1, max: 80, ph: 'e.g. 35, 32, 8' },
      { k: 'purpose', l: 'Travel Purpose', t: 'select', req: 1, o: ['Tourism', 'Business', 'Education', 'Other'] },
      { k: 'trip', l: 'Single Trip / Multiple Trip', t: 'radio', req: 1, o: ['Single Trip', 'Multiple Trip'] },
      f.cover(['$50,000', '$100,000', '$250,000', '$500,000', NS])
    ] },
    home: { title: 'Home Insurance', fields: [
      f.name(), f.mobile(), f.email(), f.city(),
      { k: 'ptype', l: 'Property Type', t: 'select', req: 1, o: ['Apartment', 'Independent House', 'Villa'] },
      { k: 'owner', l: 'Property Ownership', t: 'radio', req: 1, o: ['Owner', 'Tenant'] },
      { k: 'ploc', l: 'Property Location', t: 'text', req: 1, max: 80, ph: 'Area / locality and city' },
      { k: 'size', l: 'Property Size (sq ft)', m: 'Property Size', unit: 'sq ft', t: 'num', req: 1, min: 100, max: 100000, ph: 'e.g. 1200' },
      { k: 'bage', l: 'Building Age (years)', m: 'Building Age', unit: 'years', t: 'num', req: 1, min: 0, max: 150, ph: 'e.g. 8' },
      { k: 'bvalue', l: 'Building Value Range', t: 'select', req: 1, o: INR_HOME },
      f.yn('contents', 'Contents Coverage Required'),
      f.cover(INR_HOME)
    ] },
    accident: { title: 'Personal Accident Insurance', fields: [
      f.name(), f.dob(), f.age(), f.gender(), f.mobile(), f.email(), f.city(),
      { k: 'occupation', l: 'Occupation', t: 'text', req: 1, max: 60 }, f.income(),
      f.cover(INR_PA),
      { k: 'who', l: 'Individual / Family Coverage', t: 'radio', req: 1, o: ['Individual', 'Family'] },
      f.yn('existing', 'Existing Accident Policy')
    ] },
    business: { title: 'Commercial / Business Insurance', fields: [
      f.name('Business Owner Name'),
      { k: 'bname', l: 'Business Name', t: 'text', req: 1, max: 80 },
      f.mobile(), f.email(), f.city(),
      { k: 'btype', l: 'Business Type', t: 'select', req: 1, o: ['Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited', 'Other'] },
      { k: 'industry', l: 'Industry', t: 'text', req: 1, max: 60, ph: 'e.g. Textiles, Retail, Hospital' },
      { k: 'employees', l: 'Number of Employees', t: 'num', req: 1, min: 0, max: 100000, ph: 'e.g. 25' },
      { k: 'bloc', l: 'Business Location', t: 'text', req: 1, max: 80, ph: 'Area / locality and city' },
      { k: 'instype', l: 'Insurance Type Required', t: 'select', req: 1, o: ['Shop / Office package', 'Fire & Burglary', 'Marine / Goods in transit', 'Liability', 'Group Health (for employees)', 'Group Accident (for employees)', 'Machinery / Engineering', NS] },
      { k: 'assets', l: 'Approximate Business Asset Value', t: 'select', req: 1, o: INR_BIZ },
      f.cover(INR_BIZ)
    ] }
  };
})();
