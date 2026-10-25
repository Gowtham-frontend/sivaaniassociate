/* Styles are bundled here so the tiles look right even if marketplace.css is missing or renamed. */
(function(){if(document.getElementById('mp-inline-css'))return;var s=document.createElement('style');s.id='mp-inline-css';s.textContent=`/* marketplace.css: tiles, catalogue and enquiry wizard. Loads after style.css and reuses its tokens. */
:root{--mp-tile:#eef3fc;--mp-line:#dbe3f2;--mp-ink:#4a5570;--mp-ok:#14662f}

/* Homepage tile grid: 7 across on desktop, like a store shelf; 3 on phones */
.mp{max-width:1240px;margin:0 auto;padding:64px 5vw 24px;text-align:center}
.mp h2{font-family:'Playfair Display',serif;font-size:clamp(1.6rem,3.2vw,2.3rem);margin-bottom:8px}
.mp-sub{color:var(--mp-ink);max-width:560px;margin:0 auto 28px}
.mp-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:22px 16px}
.mp-tile{display:flex;flex-direction:column;align-items:center;gap:10px;background:none;border:0;font:inherit;color:var(--navy);cursor:pointer;padding:0}
.mp-tile .ico{position:relative;display:grid;place-items:center;width:100%;aspect-ratio:1/.64;max-width:128px;border-radius:12px;overflow:hidden;background:var(--mp-tile);border:1px solid transparent;padding-top:16px;transition:border-color .2s,transform .2s}
.mp-tile .ico svg,.mp-card .ico svg{width:46px;height:46px}
.mp-tile .tag{position:absolute;top:0;left:0;right:0;padding:2px 4px;background:#d6e4fb;color:#23407a;font:600 .62rem/1.4 Inter,sans-serif;font-style:normal;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mp-tile .lbl{font-size:.88rem;line-height:1.3;max-width:130px;min-height:2.6em}
.mp-tile:hover .ico,.mp-tile:focus-visible .ico{border-color:var(--gold);transform:translateY(-3px)}
.mp-more{display:inline-block;margin-top:30px;padding:10px 26px;border:1.5px solid var(--navy);border-radius:999px;font-weight:600;transition:background .2s,color .2s}
.mp-more:hover{background:var(--navy);color:#fff}

/* Wizard dialog */
.mp-box{max-width:560px;text-align:left}
.mp-box h3{margin-bottom:12px}
.mp-prog{height:6px;border-radius:99px;background:var(--mp-line);overflow:hidden;margin:6px 40px 8px 0}
.mp-prog span{display:block;height:100%;background:var(--gold);transition:width .3s}
.mp-step{font-size:.8rem;color:var(--mp-ink);margin-bottom:6px}
#mpForm{display:grid;gap:12px}
#mpBody:not([data-still]) #mpForm{animation:mpIn .25s both}
@keyframes mpIn{from{opacity:0;transform:translateX(14px)}to{opacity:1;transform:none}}
#mpForm label{display:grid;gap:4px;font-size:.82rem;font-weight:600}
#mpForm input:not([type=checkbox]),#mpForm select,#mpForm textarea{padding:11px 12px;border:1px solid #cdd3e0;border-radius:10px;font:inherit;font-weight:400;background:#fff;width:100%}
#mpForm input:invalid:not(:placeholder-shown):not(:focus){border-color:#b3261e}
#mpForm .check{display:flex;gap:8px;align-items:flex-start;font-weight:400;font-size:.78rem}
#mpForm .check a{text-decoration:underline}
.mp-hint{font-size:.82rem;color:var(--mp-ink)}
.mp-actions{display:flex;justify-content:space-between;gap:12px;margin-top:6px}
.mp-actions .btn{padding:12px 26px}
.mp-actions button[disabled]{opacity:.6;cursor:progress}
.mp-done{text-align:center;display:grid;gap:12px;padding:10px 0}

/* Health members */
.mp-chips{display:flex;flex-wrap:wrap;gap:8px}
.mp-chip{border:1.5px solid var(--mp-line);background:#fff;border-radius:999px;padding:8px 16px;font:inherit;font-size:.88rem;cursor:pointer;color:var(--navy)}
.mp-chip:hover{border-color:var(--gold)}
.mp-chip[aria-pressed=true]{background:var(--navy);border-color:var(--navy);color:#fff}
.mp-sel{list-style:none;display:flex;flex-wrap:wrap;gap:8px;min-height:44px;padding:10px;border:1px dashed var(--mp-line);border-radius:12px}
.mp-sel li{display:flex;align-items:center;gap:8px;background:var(--mp-tile);border:1px solid var(--gold);border-radius:999px;padding:5px 6px 5px 14px;font-size:.88rem;font-weight:600}
.mp-sel li button{width:24px;height:24px;border-radius:50%;border:0;background:var(--navy);color:#fff;cursor:pointer;font-size:.7rem}
.mp-sel .mp-empty{background:none;border:0;font-weight:400;color:var(--mp-ink)}

/* Catalogue */
.mp-wide{max-width:1000px;text-align:left}
.mp-wide h3{margin-bottom:6px}
.mp-wide .mp-tools{top:0;background:#fff;margin-top:8px}
.mp-wide .mp-cards{grid-template-columns:repeat(auto-fill,minmax(220px,1fr))}

.mp-cat{max-width:1240px;margin:0 auto;padding:110px 5vw 60px}
.mp-cat h1{animation:none;font-size:clamp(1.8rem,4vw,2.6rem);margin:0 0 6px}
.mp-tools{position:sticky;top:64px;z-index:20;background:var(--grey);padding:12px 0;display:grid;gap:10px}
.mp-tools input{padding:12px 16px;border:1px solid #cdd3e0;border-radius:999px;font:inherit;width:100%;max-width:520px}
.mp-gh{margin:28px 0 12px;font-size:1.15rem}
.mp-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
.mp-card{background:#fff;border:1px solid #e5e9f2;border-radius:var(--r);padding:20px;display:flex;flex-direction:column;gap:6px}
.mp-card .ico{display:grid;place-items:center;width:52px;height:52px;border-radius:12px;background:var(--mp-tile);font-size:1.7rem}
.mp-card h4{font-size:1rem;margin-top:6px}
.mp-card p{font-size:.88rem;color:var(--mp-ink);flex:1}
.mp-card .row{display:flex;align-items:center;gap:14px;margin-top:8px;flex-wrap:wrap}
.mp-card .btn{padding:9px 18px;font-size:.88rem}
.mp-card .lm{font-size:.86rem;font-weight:600;text-decoration:underline}
.mp-empty a{text-decoration:underline;font-weight:600}
.mp-note{font-size:.8rem;color:var(--mp-ink);margin-top:30px}

@media(max-width:900px){
  .mp-grid{grid-template-columns:repeat(3,1fr);gap:18px 10px}
  .mp-tile .lbl{font-size:.8rem}
  .mp-tools{top:58px}
}
@media(max-width:380px){.mp-grid{grid-template-columns:repeat(2,1fr)}}
@media(prefers-reduced-motion:reduce){#mpForm{animation:none}}
`;document.head.appendChild(s);})();
/* Marketplace: product tiles, searchable catalogue and one enquiry wizard with a journey per category.
   No prices are shown: live insurer quotes are not connected. Enquiries go out by WhatsApp + email (same as the site's callback form). */
(() => {
'use strict';
const MP = { wa: '917373790009', email: 'YOUR_CLIENT_EMAIL@gmail.com' }; // keep in sync with script.js
const f = (k, l, t, o, r) => ({ k, l, t: t || 'text', o, r });
const sel = (k, l, o) => f(k, l, 'select', o);
const AGE = f('age', 'Age (years)', 'number', null, [18, 70]);
const GEN = sel('gender', 'Gender', ['Male', 'Female', 'Other']);
const INC = sel('income', 'Annual income', ['Below ₹3 lakh', '₹3–6 lakh', '₹6–12 lakh', '₹12–25 lakh', 'Above ₹25 lakh']);
const COV = sel('cover', 'Life cover wanted', ['₹50 lakh', '₹1 crore', '₹2 crore', '₹5 crore', 'Not sure yet']);
const TERM = f('term', 'Policy term (years)', 'number', null, [5, 60]);
const FREQ = sel('freq', 'Premium payment', ['Monthly', 'Quarterly', 'Half-yearly', 'Yearly']);
const BUD = sel('budget', 'Yearly premium budget', ['Up to ₹25,000', '₹25,000–50,000', '₹50,000–1 lakh', 'Above ₹1 lakh']);
const PAY = sel('payout', 'Payout preference', ['Lump sum at the end', 'Regular income', 'Not sure yet']);
const PA = sel('cover', 'Cover wanted', ['₹10 lakh', '₹25 lakh', '₹50 lakh', '₹1 crore']);
const CITY = Object.assign(f('city', 'City or PIN code'), { dl: 'mpCities' });
const STATE = Object.assign(f('state', 'State'), { dl: 'mpStates' });
const POL = sel('policy', 'Policy type', ['Third-party only', 'Own damage only', 'Comprehensive', 'Not sure']);
const YR = f('year', 'Registration year', 'number', null, [1990, 2026]);
const REG = f('reg', 'Registration number (optional)');
const EXP = [sel('status', 'Vehicle status', ['New vehicle', 'Existing vehicle']), f('expiry', 'Policy expiry date (optional)', 'date'), f('insurer', 'Current insurer (optional)'), POL];
const HEALTH = [['Location', [STATE, CITY]], ['Cover', [
  sel('sum', 'Sum insured', ['₹5 lakh', '₹10 lakh', '₹15 lakh', '₹25 lakh', '₹50 lakh', '₹1 crore']),
  sel('ctype', 'Cover type', ['Family floater', 'Individual for each member', 'Not sure yet']),
  sel('dur', 'Policy duration', ['1 year', '2 years', '3 years']), f('addon', 'Add-ons wanted (optional)')]]];

const C = [
{ id: 'term', n: 'Term life insurance', i: '🛡️', g: 'Life & savings', l: 'index.html#term-insurance', d: 'Pure protection for your family', s: [['About you', [AGE, GEN, sel('tobacco', 'Tobacco use', ['No', 'Yes']), INC]], ['Cover', [COV, TERM, FREQ]]] },
{ id: 'women', n: "Women's term insurance", i: '👩', g: 'Life & savings', d: 'Term cover designed around your needs', s: [['About you', [AGE, INC, sel('work', 'Occupation', ['Salaried', 'Self-employed', 'Homemaker'])]], ['Cover', [COV, TERM]]] },
{ id: 'invest', n: 'Investment plans', i: '🪙', g: 'Life & savings', l: 'index.html#savings-income', d: 'Long-term savings with insurance', s: [['Your goal', [AGE, sel('goal', 'Goal', ['Wealth growth', 'Child education', 'Retirement', 'Tax saving', 'Regular income']), BUD, f('dur', 'Policy duration (years)', 'number', null, [5, 40]), PAY]]] },
{ id: 'guaranteed', n: 'Guaranteed return plans', i: '💰', g: 'Life & savings', d: 'Fixed payouts as per plan terms', s: [['Your plan', [AGE, BUD, f('ppt', 'Premium payment term (years)', 'number', null, [5, 40]), PAY]]] },
{ id: 'child', n: 'Child savings plans', i: '🎓', g: 'Life & savings', l: 'index.html#child-education', d: 'Plan early for education and milestones', s: [['Your child', [f('cage', 'Child age (years)', 'number', null, [0, 17]), AGE, sel('goal', 'Goal', ['Higher education', 'Marriage', 'Both']), BUD]]] },
{ id: 'retire', n: 'Retirement and pension plans', i: '🌅', g: 'Life & savings', l: 'index.html#retirement-pension', d: 'Income for the years after work', s: [['Retirement', [AGE, f('rage', 'Planned retirement age', 'number', null, [40, 75]), f('need', 'Monthly income needed later (₹)', 'number', null, [0, 1e7]), BUD]]] },
{ id: 'health', n: 'Health insurance', i: '❤️', g: 'Health & accident', l: 'index.html#health-insurance', d: 'Hospital costs for you and your family', h: 1, s: HEALTH },
{ id: 'family-health', n: 'Family health insurance', i: '👨‍👩‍👧', g: 'Health & accident', d: 'One cover for the whole family', h: 1, s: HEALTH },
{ id: 'critical', n: 'Critical illness insurance', i: '🩺', g: 'Health & accident', d: 'Lump-sum cover for listed illnesses', s: [['About you', [AGE, CITY, PA]]] },
{ id: 'accident', n: 'Personal accident insurance', i: '🦺', g: 'Health & accident', d: 'Cover for accidental injury or death', s: [['About you', [AGE, f('occ', 'Occupation'), PA]]] },
{ id: 'car', n: 'Car insurance', i: '🚗', g: 'Motor', d: 'Own damage and third-party cover', s: [['Vehicle', [REG, f('make', 'Make'), f('model', 'Model and variant'), YR, sel('fuel', 'Fuel', ['Petrol', 'Diesel', 'CNG', 'Electric']), sel('use', 'Use', ['Private', 'Commercial'])]], ['Existing insurance', EXP]] },
{ id: 'two', n: 'Two-wheeler insurance', i: '🛵', g: 'Motor', d: 'Motorcycles and scooters', s: [['Vehicle', [REG, sel('vtype', 'Type', ['Motorcycle', 'Scooter', 'Electric']), f('make', 'Make'), f('model', 'Model and variant'), YR]], ['Existing insurance', EXP]] },
{ id: 'commercial', n: 'Commercial vehicle insurance', i: '🚚', g: 'Motor', d: 'Trucks, taxis, buses and more', s: [['Vehicle', [sel('vtype', 'Vehicle type', ['Goods carrier', 'Passenger bus or van', 'Taxi', 'Auto-rickshaw', 'Tractor', 'Other']), REG, f('make', 'Make and model'), YR, f('fleet', 'Vehicles to cover', 'number', null, [1, 1000])]], ['Existing insurance', EXP]] },
{ id: 'travel', n: 'Travel insurance', i: '✈️', g: 'Travel & home', d: 'Medical, baggage and trip cover', s: [['Trip', [f('dest', 'Destination country or countries'), f('from', 'Start date', 'date'), f('to', 'End date', 'date'), f('pax', 'Number of travellers', 'number', null, [1, 20]), f('ages', 'Traveller ages (for example 34, 32, 6)'), sel('purpose', 'Trip purpose', ['Leisure', 'Business', 'Study', 'Work', 'Pilgrimage']), sel('trip', 'Trip type', ['Single trip', 'Multi-trip (yearly)'])]]] },
{ id: 'home', n: 'Home insurance', i: '🏠', g: 'Travel & home', d: 'Building and contents cover', s: [['Your home', [CITY, sel('own', 'Ownership', ['Owned', 'Rented']), sel('what', 'Cover for', ['Building', 'Contents', 'Both']), f('value', 'Approximate value to insure (₹)', 'number', null, [0, 1e9])]]] },
{ id: 'group', n: 'Employee group insurance', i: '👥', g: 'Business', d: 'Health, life and accident for staff', s: [['Your company', [f('co', 'Company name'), f('emp', 'Number of employees', 'number', null, [2, 100000]), CITY, sel('gtype', 'Cover needed', ['Group health', 'Group term life', 'Group accident', 'Not sure yet'])]]] },
{ id: 'business', n: 'Business insurance', i: '🏪', g: 'Business', d: 'Shop, office, stock and liability', s: [['Your business', [f('btype', 'Type of business'), CITY, sel('risk', 'Cover needed', ['Fire and burglary', 'Liability', 'Stock', 'Machinery', 'Package for everything', 'Not sure yet']), f('assets', 'Approximate assets to insure (₹)', 'number', null, [0, 1e10])]]] },
{ id: 'marine', n: 'Marine and cargo insurance', i: '🚢', g: 'Business', d: 'Goods in transit by road, rail, sea or air', s: [['Shipment', [f('cargo', 'Cargo type'), sel('mode', 'Transport', ['Road', 'Rail', 'Sea', 'Air']), f('route', 'Route (from – to)'), sel('often', 'How often', ['Single shipment', 'Regular shipments']), f('val', 'Value per shipment (₹)', 'number', null, [0, 1e10])]]] },
{ id: 'cyber', n: 'Cyber insurance', i: '💻', g: 'Business', d: 'Cover for data and online risks', s: [['Your business', [f('btype', 'Type of business'), f('emp', 'Number of employees', 'number', null, [1, 100000]), sel('data', 'Customer data stored online', ['Yes', 'No', 'Not sure'])]]] },
{ id: 'other', n: 'Other insurance products', i: '📋', g: 'Business', d: 'Tell us what you want to insure', s: [['Your need', [f('need', 'What do you want to insure?', 'textarea')]]] },
{ id: 'claim', n: 'Claim assistance', i: '🤝', g: 'Services', d: 'Help with filing an insurer claim', s: [['Your claim', [sel('ctype', 'Claim for', ['Life', 'Health', 'Motor', 'Other']), f('insurer', 'Insurer'), f('about', 'What happened (short, optional)', 'textarea')]]] },
{ id: 'renew', n: 'Policy renewal', i: '🔄', g: 'Services', d: 'Renew an existing policy on time', s: [['Your policy', [sel('ptype', 'Policy type', ['Life', 'Health', 'Motor', 'Other']), f('insurer', 'Insurer'), f('due', 'Renewal due date', 'date')]]] },
{ id: 'docs', n: 'Policy documents', i: '📄', g: 'Services', d: 'Copies of policy papers and receipts', s: [['Documents', [sel('ptype', 'Policy type', ['Life', 'Health', 'Motor', 'Other']), f('insurer', 'Insurer'), f('about', 'Which document do you need? (optional)', 'textarea')]]] }
];
const ICONS={"shield": "<path d=\"M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11z\" fill=\"#4f46c8\"/><path d=\"M16 24l6 6 10-12\" stroke=\"#fff\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>", "shieldW": "<path d=\"M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11z\" fill=\"#d94452\"/><path d=\"M16 24l6 6 10-12\" stroke=\"#fff\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>", "shieldG": "<path d=\"M24 5l15 6v11c0 10-6 17-15 21C15 39 9 32 9 22V11z\" fill=\"#2f8f6b\"/><path d=\"M16 24l6 6 10-12\" stroke=\"#fff\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>", "heart": "<path d=\"M24 41C8 29 6 19 12 13c5-4 10-1 12 3 2-4 7-7 12-3 6 6 4 16-12 28z\" fill=\"#d94452\"/><path d=\"M10 25h9l3-6 4 11 3-5h9\" stroke=\"#fff\" stroke-width=\"2.5\" fill=\"none\" stroke-linejoin=\"round\"/>", "heartI": "<path d=\"M24 41C8 29 6 19 12 13c5-4 10-1 12 3 2-4 7-7 12-3 6 6 4 16-12 28z\" fill=\"#4f46c8\"/><path d=\"M10 25h9l3-6 4 11 3-5h9\" stroke=\"#fff\" stroke-width=\"2.5\" fill=\"none\" stroke-linejoin=\"round\"/>", "coins": "<ellipse cx=\"18\" cy=\"35\" rx=\"11\" ry=\"4.5\" fill=\"#e0a526\"/><ellipse cx=\"18\" cy=\"29\" rx=\"11\" ry=\"4.5\" fill=\"#e0a526\"/><ellipse cx=\"18\" cy=\"23\" rx=\"11\" ry=\"4.5\" fill=\"#e0a526\"/><path d=\"M30 20l7-8m0 0h-6m6 0v6\" stroke=\"#2f8f6b\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>", "coins2": "<ellipse cx=\"18\" cy=\"35\" rx=\"11\" ry=\"4.5\" fill=\"#4f46c8\"/><ellipse cx=\"18\" cy=\"29\" rx=\"11\" ry=\"4.5\" fill=\"#e0a526\"/><ellipse cx=\"18\" cy=\"23\" rx=\"11\" ry=\"4.5\" fill=\"#4f46c8\"/><path d=\"M30 20l7-8m0 0h-6m6 0v6\" stroke=\"#2f8f6b\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>", "family": "<circle cx=\"16\" cy=\"14\" r=\"6\" fill=\"#e0a526\"/><path d=\"M5 40c0-11 5-16 11-16s11 5 11 16z\" fill=\"#e0a526\"/><circle cx=\"33\" cy=\"17\" r=\"5\" fill=\"#d94452\"/><path d=\"M24 40c0-9 4-14 9-14s9 5 9 14z\" fill=\"#d94452\"/>", "group": "<circle cx=\"16\" cy=\"14\" r=\"6\" fill=\"#4f46c8\"/><path d=\"M5 40c0-11 5-16 11-16s11 5 11 16z\" fill=\"#4f46c8\"/><circle cx=\"33\" cy=\"17\" r=\"5\" fill=\"#2f8f6b\"/><path d=\"M24 40c0-9 4-14 9-14s9 5 9 14z\" fill=\"#2f8f6b\"/>", "car": "<path d=\"M5 29l4-10c1-3 3-4 6-4h18c3 0 5 1 6 4l4 10v7H5z\" fill=\"#9aa5bd\"/><path d=\"M13 19h22l3 8H10z\" fill=\"#e9eefb\"/><circle cx=\"14\" cy=\"36\" r=\"5\" fill=\"#222\"/><circle cx=\"34\" cy=\"36\" r=\"5\" fill=\"#222\"/>", "bike": "<circle cx=\"11\" cy=\"33\" r=\"7\" fill=\"none\" stroke=\"#222\" stroke-width=\"3.5\"/><circle cx=\"37\" cy=\"33\" r=\"7\" fill=\"none\" stroke=\"#222\" stroke-width=\"3.5\"/><path d=\"M11 33l8-14h9l9 14M19 19l-2-5h-5M28 19l-2 14\" stroke=\"#2f8f6b\" stroke-width=\"3.5\" fill=\"none\" stroke-linejoin=\"round\"/>", "truck": "<rect x=\"4\" y=\"12\" width=\"24\" height=\"20\" rx=\"2\" fill=\"#4f46c8\"/><path d=\"M28 18h9l7 8v6H28z\" fill=\"#e0a526\"/><circle cx=\"13\" cy=\"35\" r=\"5\" fill=\"#222\"/><circle cx=\"35\" cy=\"35\" r=\"5\" fill=\"#222\"/>", "plane": "<path d=\"M44 8L5 23l12 5 3 12 6-8 8 6z\" fill=\"#4aa3df\"/><path d=\"M17 28l27-20-20 25z\" fill=\"#2478b5\"/>", "sun": "<path d=\"M8 34a16 16 0 0132 0z\" fill=\"#e0a526\"/><path d=\"M4 38h40M24 8v6M9 16l4 4M39 16l-4 4\" stroke=\"#4f46c8\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>", "home": "<path d=\"M24 6L5 22h6v18h26V22h6z\" fill=\"#4f46c8\"/><rect x=\"20\" y=\"28\" width=\"8\" height=\"12\" fill=\"#fff\"/><path d=\"M5 22L24 6l19 16\" stroke=\"#e0a526\" stroke-width=\"3\" fill=\"none\"/>", "brief": "<rect x=\"6\" y=\"15\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#4f46c8\"/><path d=\"M17 15v-4h14v4M6 26h36\" stroke=\"#e0a526\" stroke-width=\"3\" fill=\"none\"/>", "ship": "<path d=\"M5 28h38l-6 12H11z\" fill=\"#4f46c8\"/><rect x=\"12\" y=\"16\" width=\"10\" height=\"12\" fill=\"#e0a526\"/><rect x=\"24\" y=\"20\" width=\"10\" height=\"8\" fill=\"#d94452\"/>", "laptop": "<rect x=\"9\" y=\"10\" width=\"30\" height=\"21\" rx=\"2\" fill=\"#4f46c8\"/><path d=\"M3 35h42l-3 4H6z\" fill=\"#9aa5bd\"/><path d=\"M24 14l6 3v5c0 4-3 6-6 7-3-1-6-3-6-7v-5z\" fill=\"#e0a526\"/>", "clip": "<rect x=\"10\" y=\"8\" width=\"28\" height=\"34\" rx=\"3\" fill=\"#4f46c8\"/><rect x=\"17\" y=\"5\" width=\"14\" height=\"8\" rx=\"2\" fill=\"#e0a526\"/><path d=\"M16 22h16M16 29h16M16 36h10\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\"/>", "renew": "<path d=\"M38 24a14 14 0 01-25 8M10 24a14 14 0 0125-8\" stroke=\"#4f46c8\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"/><path d=\"M36 6v11H25zM12 42V31h11z\" fill=\"#e0a526\"/>"},IMAP={"term": "shield", "women": "shieldW", "invest": "coins", "guaranteed": "coins2", "child": "family", "retire": "sun", "health": "heart", "family-health": "family", "critical": "heartI", "accident": "shieldG", "car": "car", "two": "bike", "commercial": "truck", "travel": "plane", "home": "home", "group": "group", "business": "brief", "marine": "ship", "cyber": "laptop", "other": "clip", "claim": "clip", "renew": "renew", "docs": "clip"},TAG={'Life & savings':'Protection & savings','Health & accident':'Health','Motor':'Motor','Travel & home':'Travel & home','Business':'Business','Services':'Service'},HOME=['term','health','invest','car','two','family-health','travel','women','critical','guaranteed','child','retire','group','home'];
const svg=c=>`<svg viewBox="0 0 48 48" width="52" height="52" aria-hidden="true" focusable="false">${ICONS[IMAP[c.id]||'clip']}</svg>`;
const byId = id => C.find(c => c.id === id);
const REL = ['Self', 'Spouse', 'Son', 'Daughter', 'Father', 'Mother', 'Other'], ONCE = ['Self', 'Spouse', 'Father', 'Mother'];
const STATES = 'Andhra Pradesh,Karnataka,Kerala,Tamil Nadu,Telangana,Puducherry,Maharashtra,Gujarat,Delhi,West Bengal,Uttar Pradesh,Rajasthan,Madhya Pradesh,Punjab,Haryana,Bihar,Odisha,Assam,Other'.split(',');
const CITIES = 'Erode,Coimbatore,Chennai,Salem,Tiruppur,Madurai,Tiruchirappalli,Namakkal,Karur,Mettur,Bhavani,Gobichettipalayam'.split(',');
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

const fh = x => {
  const id = 'mp_' + x.k, v = st.d[x.k] == null ? '' : st.d[x.k], req = /optional/i.test(x.l) ? '' : ' required';
  let el;
  if (x.t === 'select') el = `<select id="${id}" name="${x.k}"${req}><option value="">Select</option>${x.o.map(o => `<option${o === v ? ' selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  else if (x.t === 'textarea') el = `<textarea id="${id}" name="${x.k}" rows="3"${req}>${esc(v)}</textarea>`;
  else el = `<input id="${id}" name="${x.k}" type="${x.t}"${x.r ? ` min="${x.r[0]}" max="${x.r[1]}"` : ''}${x.t === 'number' ? ' inputmode="numeric"' : ''}${x.dl ? ` list="${x.dl}"` : ''} value="${esc(v)}"${req}>`;
  return `<label for="${id}">${esc(x.l)}${el}</label>`;
};
const flds = a => a.map(fh).join('');

/* ---- wizard state ---- */
const st = { c: null, i: 0, d: {}, steps: [], busy: false, opener: null };
let modal, body;
const NAME = f('name', 'Full name'), MOB = f('mobile', 'Mobile number', 'tel'), MAIL = f('email', 'Email (optional)', 'email');
const TIME = sel('time', 'Best time to call (optional)', ['Morning', 'Afternoon', 'Evening']);
const contact = { t: 'Your contact details',
  r: () => `<p class="mp-hint">We use these only to contact you about this enquiry. No payment, ID or medical details are asked here.</p>${flds([NAME, MOB, MAIL, TIME])}
    <label class="check"><input type="checkbox" name="consent"${st.d.consent ? ' checked' : ''}> <span>I agree to be contacted about this enquiry. <a href="privacy.html" target="_blank" rel="noopener">Privacy Policy</a></span></label>`,
  v: () => st.d.name.length < 2 ? 'Enter your full name.' : !/^[6-9]\d{9}$/.test(st.d.mobile) ? 'Enter a valid 10-digit mobile number.'
    : st.d.email && !/^\S+@\S+\.\S+$/.test(st.d.email) ? 'Enter a valid email address, or leave it empty.' : !st.d.consent ? 'Please accept the privacy consent to continue.' : '' };

const members = { t: 'Who needs cover',
  r: () => `<p class="mp-hint">Choose everyone to cover. Add a relation again for more than one child.</p>
    <div class="mp-chips">${REL.map(r => `<button type="button" class="mp-chip" data-a="add" data-v="${r}">+ ${r}</button>`).join('')}</div>
    <ul class="mp-sel" aria-label="Selected members">${(st.d.members || []).map((m, i) => `<li>${esc(m.rel)}<button type="button" data-a="rm" data-v="${i}" aria-label="Remove ${esc(m.rel)}">✕</button></li>`).join('') || '<li class="mp-empty">No one selected yet</li>'}</ul>`,
  v: () => (st.d.members || []).length ? '' : 'Choose at least one person to cover.' };
const ages = { t: 'Member details',
  r: () => `<p class="mp-hint">Age is enough to start. No medical details are needed now; your advisor asks only what an insurer requires for a real quote.</p>${st.d.members.map((m, i) => `<label for="mage${i}">${esc(m.rel)}: age (years)<input id="mage${i}" name="mage${i}" type="number" min="0" max="100" inputmode="numeric" value="${esc(m.age)}" required></label>`).join('')}`,
  v: () => { for (let i = 0; i < st.d.members.length; i++) { const a = st.d['mage' + i]; if (a === '' || !(+a >= 0 && +a <= 100)) return `Enter an age between 0 and 100 for ${st.d.members[i].rel}.`; st.d.members[i].age = a; } return ''; } };

function build(c) {
  const steps = [];
  if (c.h) steps.push(members, ages);
  c.s.forEach(([t, fl]) => steps.push({ t, f: fl }));
  steps.push(contact);
  return steps;
}
const collect = () => body.querySelectorAll('[name]').forEach(el => { st.d[el.name] = el.type === 'checkbox' ? el.checked : el.value.trim(); });
const missing = fl => {
  for (const x of fl) {
    const el = body.querySelector(`[name="${x.k}"]`); if (!el) continue;
    const n = x.l.replace(/ \(.*\)/, ''), v = st.d[x.k];
    if (el.required && !v) return `Please fill in “${n}”.`;
    if (v && !el.checkValidity()) return el.min !== '' && el.type === 'number' ? `${n} must be between ${el.min} and ${el.max}.` : `Check “${n}”.`;
  }
  return '';
};
const err = m => { const e = body.querySelector('#mpErr'); if (e) e.textContent = m; };

function show() {
  const s = st.steps[st.i], n = st.steps.length, last = st.i === n - 1;
  body.innerHTML = `<div class="mp-prog" role="progressbar" aria-valuemin="1" aria-valuemax="${n}" aria-valuenow="${st.i + 1}"><span style="width:${(st.i + 1) / n * 100}%"></span></div>
    <p class="mp-step">Step ${st.i + 1} of ${n}</p><h3 id="mpTitle">${esc(st.c.n)}: ${esc(s.t)}</h3>
    <form id="mpForm" novalidate>${s.r ? s.r() : flds(s.f)}<p class="msg err" id="mpErr" role="alert"></p>
    <div class="mp-actions">${st.i ? '<button type="button" class="btn ghost-dark" data-a="back">Back</button>' : '<span></span>'}<button class="btn gold" type="submit">${last ? 'Send enquiry' : 'Continue'}</button></div></form>`;
  const first = body.querySelector('input:not([type=checkbox]),select,textarea,.mp-chip'); if (first) first.focus();
}

function summary() {
  const L = [], d = st.d;
  if (st.c.h) L.push('Members: ' + d.members.map(m => `${m.rel} (${m.age})`).join(', '));
  st.steps.forEach(s => (s.f || []).forEach(x => { if (d[x.k]) L.push(x.l.replace(/ \(optional\)/, '') + ': ' + d[x.k]); }));
  L.push('Name: ' + d.name, 'Mobile: ' + d.mobile); if (d.email) L.push('Email: ' + d.email); if (d.time) L.push('Best time: ' + d.time);
  return L;
}

async function send() {
  const d = st.d, key = 'mp_sent_' + d.mobile + st.c.id;
  try { if (Date.now() - +sessionStorage.getItem(key) < 3e5) return done(null, false, true); } catch (e) {}
  if (st.busy) return; st.busy = true;
  body.querySelector('button[type=submit]').disabled = true; err('Sending…');
  const lines = summary(), text = 'Hello Sivaani Associate, I would like a quote.\nInsurance: ' + st.c.n + '\n' + lines.join('\n');
  const waUrl = 'https://wa.me/' + MP.wa + '?text=' + encodeURIComponent(text);
  const win = window.open(waUrl, '_blank'); if (win) win.opener = null;   // opened inside the click so browsers allow it
  let emailed = false;
  if (!/YOUR_/.test(MP.email)) try {
    const r = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(MP.email), { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: 'New quote enquiry: ' + st.c.n + ' (' + d.name + ')', _template: 'table', _captcha: 'false', Insurance: st.c.n, Details: lines.join('\n'), Source: 'Marketplace form' }) });
    emailed = r.ok;
  } catch (e) { console.error(e); }
  if (typeof window.saveLeadToSupabase === 'function') try { await window.saveLeadToSupabase({ category: st.c.id, details: lines }); } catch (e) { console.error(e); }
  try { sessionStorage.setItem(key, Date.now()); } catch (e) {}
  st.busy = false; done(waUrl, emailed, false, !!win);
}
function done(waUrl, emailed, dup, opened) {
  body.innerHTML = `<div class="mp-done"><h3 id="mpTitle">${dup ? 'Already sent' : 'Enquiry ready'}</h3>
    <p>${dup ? 'We already have this enquiry from the last few minutes. Your advisor will call you.' : opened ? 'WhatsApp opened with your details. Press Send there to finish.' : 'Tap the button to send your details on WhatsApp.'}${emailed ? ' A copy was also emailed to Sivaani Associate.' : ''}</p>
    ${waUrl ? `<p><a class="btn gold" href="${waUrl}" target="_blank" rel="noopener">Send on WhatsApp</a></p>` : ''}
    <p class="mp-hint">No premium is shown because live insurer quotes are not connected. Your advisor will share real quotes and policy terms from the insurer.</p>
    <button type="button" class="btn ghost-dark" data-a="close">Close</button></div>`;
}

function open(id, opener) {
  const c = byId(id); if (!c) return;
  Object.assign(st, { c, i: 0, d: c.h ? { members: [] } : {}, steps: build(c), busy: false, opener });
  delete body.dataset.still; modal.hidden = false; document.body.style.overflow = 'hidden'; show();
}
function close() { modal.hidden = true; document.body.style.overflow = ''; if (st.opener) st.opener.focus(); }

function init() {
  modal = document.createElement('div');
  modal.className = 'modal'; modal.hidden = true; modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'mpTitle');
  modal.innerHTML = `<div class="modal-box mp-box"><button type="button" class="modal-x" aria-label="Close" data-a="close">✕</button><div id="mpBody"></div></div>
    <datalist id="mpStates">${STATES.map(s => `<option value="${s}">`).join('')}</datalist><datalist id="mpCities">${CITIES.map(s => `<option value="${s}">`).join('')}</datalist>`;
  document.body.appendChild(modal); body = modal.querySelector('#mpBody');

  modal.addEventListener('click', e => {
    if (e.target === modal) return close();
    const b = e.target.closest('[data-a]'); if (!b) return;
    const a = b.dataset.a;
    if (a === 'close') close();
    else if (a === 'back') { collect(); delete body.dataset.still; st.i--; show(); }
    else if (a === 'add') {
      const r = b.dataset.v, m = st.d.members;
      if (ONCE.includes(r) && m.some(x => x.rel === r)) return err(r + ' is already selected.');
      m.push({ rel: r, age: '' }); body.dataset.still = 1; show();
    } else if (a === 'rm') { st.d.members.splice(+b.dataset.v, 1); body.dataset.still = 1; show(); }
  });
  modal.addEventListener('submit', e => {
    e.preventDefault(); const s = st.steps[st.i]; collect();
    const m = s.v ? s.v() : missing(s.f); if (m) return err(m);
    if (st.i < st.steps.length - 1) { delete body.dataset.still; st.i++; show(); } else send();
  });
  addEventListener('keydown', e => {
    if (modal.hidden) return;
    if (e.key === 'Escape') return close();
    if (e.key !== 'Tab') return;
    const q = [...modal.querySelectorAll('button,input,select,textarea,a[href]')].filter(x => !x.disabled && x.offsetParent);
    if (!q.length) return; const a = q[0], z = q[q.length - 1];
    if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
  });
  document.addEventListener('click', e => { const t = e.target.closest('[data-open]'); if (t) { e.preventDefault(); open(t.dataset.open, t); } });

  const tile = c => `<button type="button" class="mp-tile" data-open="${c.id}"><span class="ico"><em class="tag">${TAG[c.g]}</em>${svg(c)}</span><span class="lbl">${esc(c.n)}</span></button>`;
  document.querySelectorAll('[data-mp-grid]').forEach(el => { el.innerHTML = (el.dataset.limit ? HOME.map(byId) : C).map(tile).join(''); });

  const initCat = root => {
    const q = document.getElementById('mpSearch'), chips = document.getElementById('mpChips'), GR = [...new Set(C.map(c => c.g))]; let g = 'All';
    chips.innerHTML = ['All', ...GR].map(x => `<button type="button" class="mp-chip" aria-pressed="${x === g}">${x}</button>`).join('');
    const card = c => `<article class="mp-card"><span class="ico">${svg(c)}</span><h4>${esc(c.n)}</h4><p>${esc(c.d)}</p><div class="row"><button type="button" class="btn gold" data-open="${c.id}">${c.g === 'Services' ? 'Ask an advisor' : 'Get a quote'}</button>${c.l ? `<a class="lm" href="${c.l}">Learn more</a>` : ''}</div></article>`;
    const draw = () => {
      const k = q.value.trim().toLowerCase(), list = C.filter(c => (g === 'All' || c.g === g) && (!k || (c.n + ' ' + c.d).toLowerCase().includes(k)));
      root.innerHTML = list.length ? GR.map(x => { const l = list.filter(c => c.g === x); return l.length ? `<h3 class="mp-gh">${x}</h3><div class="mp-cards">${l.map(card).join('')}</div>` : ''; }).join('')
        : `<p class="mp-empty">Nothing matches “${esc(q.value)}”. Try a shorter word, or <a href="#" data-open="other">tell us what you need</a>.</p>`;
    };
    chips.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; g = b.textContent; [...chips.children].forEach(x => x.setAttribute('aria-pressed', x === b)); draw(); });
    q.addEventListener('input', draw); draw();
  };
  const pageRoot = document.getElementById('mpCatalogue');
  if (pageRoot) initCat(pageRoot);
  else {
    /* On the homepage, "View all products" opens the catalogue here, so it works even if products.html is missing. */
    let cat = null, catOpener = null;
    const openCat = a => {
      if (!cat) {
        cat = document.createElement('div');
        cat.className = 'modal'; cat.hidden = true; cat.setAttribute('role', 'dialog'); cat.setAttribute('aria-modal', 'true'); cat.setAttribute('aria-label', 'All insurance products');
        cat.innerHTML = `<div class="modal-box mp-wide"><button type="button" class="modal-x" aria-label="Close" data-ca="x">✕</button><h3>All insurance products</h3>
          <div class="mp-tools"><label for="mpSearch" style="position:absolute;left:-9999px">Search products</label><input id="mpSearch" type="search" placeholder="Search, for example car, travel or child" autocomplete="off"><div class="mp-chips" id="mpChips" role="group" aria-label="Filter by group"></div></div>
          <div id="mpCatalogue" aria-live="polite"></div>
          <p class="mp-note">No premiums are shown because live insurer quotes are not connected yet. Product availability depends on the insurer.</p></div>`;
        document.body.insertBefore(cat, modal);   // sits under the enquiry dialog, so tiles open the wizard on top
        cat.addEventListener('click', e => { if (e.target === cat || e.target.closest('[data-ca]') || e.target.closest('a.lm')) closeCat(); });
        initCat(cat.querySelector('#mpCatalogue'));
      }
      catOpener = a; cat.hidden = false; document.body.style.overflow = 'hidden';
      cat.querySelector('#mpSearch').focus();
    };
    const closeCat = () => { cat.hidden = true; document.body.style.overflow = ''; if (catOpener) catOpener.focus(); };
    document.addEventListener('click', e => { const a = e.target.closest('a.mp-more'); if (a) { e.preventDefault(); openCat(a); } });
    addEventListener('keydown', e => { if (e.key === 'Escape' && cat && !cat.hidden && modal.hidden) closeCat(); }, true);   // capture: runs before the wizard's own Escape handler
  }
  const h = location.hash.slice(1); if (byId(h)) open(h);
}
init();
})();
/* Announcement ticker: scrolls the text bar by cloning its group and setting the loop speed.
   Skipped automatically if another script has already started it. */
(() => {
'use strict';
const start = () => {
  const track = document.getElementById('tickerTrack');
  if (!track || track.classList.contains('run')) return;
  const first = track.querySelector('.tk-group');
  if (!first) return;
  if (track.querySelectorAll('.tk-group').length < 2) {
    const copy = first.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    copy.querySelectorAll('a,button').forEach(x => x.setAttribute('tabindex', '-1'));
    track.appendChild(copy);
  }
  const speed = () => { track.style.setProperty('--tk-dur', Math.max(20, Math.round(first.getBoundingClientRect().width / 55)) + 's'); };
  speed();
  track.classList.add('run');
  addEventListener('resize', speed);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(speed);
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

/* Site basics: callback form -> WhatsApp, agent popup, plan popup, mobile menu, language switch, sticky nav.
   These normally live in script.js. Handlers run first (capture phase), so if script.js is also present nothing fires twice. */
(() => {
'use strict';
const WA = '917373790009', $ = id => document.getElementById(id);
const take = e => { e.preventDefault(); e.stopImmediatePropagation(); };
const sent = (key) => { try { return Date.now() - +sessionStorage.getItem(key) < 3e5; } catch (e) { return false; } };
const mark = key => { try { sessionStorage.setItem(key, Date.now()); } catch (e) {} };
const say = (el, text, ok) => { if (!el) return; el.textContent = text; el.className = 'msg ' + (ok ? 'ok' : 'err'); };
const val = (f, n) => (f.elements[n] ? f.elements[n].value.trim() : '');

function submitForm(form, out, kind) {
  const name = val(form, 'name'), mobile = val(form, 'mobile'), cat = val(form, 'category'), note = val(form, 'message');
  const consent = form.elements.consent && form.elements.consent.checked;
  if (name.length < 2) return say(out, 'Enter your name.');
  if (!/^[6-9]\d{9}$/.test(mobile)) return say(out, 'Enter a valid 10-digit mobile number.');
  if (kind === 'callback' && !cat) return say(out, 'Choose an insurance type.');
  if (!consent) return say(out, 'Please tick the box to agree to be contacted.');
  const key = 'sa_sent_' + kind + mobile;
  const lines = kind === 'agent'
    ? ['Hello Sivaani Associate, I am interested in becoming an insurance agent. Please contact me.', 'Name: ' + name, 'Mobile: ' + mobile].concat(note ? ['Message: ' + note] : [])
    : ['Hello Sivaani Associate, I would like a callback.', 'Name: ' + name, 'Mobile: ' + mobile, 'Insurance: ' + cat];
  const url = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n'));
  if (sent(key)) return say(out, 'We already have your request from the last few minutes. We will call you soon.', true);
  const btn = form.querySelector('button[type=submit]'); if (btn) btn.disabled = true;
  const win = window.open(url, '_blank'); if (win) win.opener = null;   // opened inside the submit, so browsers allow it
  mark(key);
  if (typeof window.saveLeadToSupabase === 'function') { try { Promise.resolve(window.saveLeadToSupabase({ category: kind === 'agent' ? 'agent' : cat, details: lines })).catch(console.error); } catch (e) { console.error(e); } }
  if (win) say(out, 'WhatsApp opened with your details. Press Send there to finish.', true);
  else { out.textContent = ''; out.className = 'msg ok'; const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'Tap here to send your details on WhatsApp'; a.style.textDecoration = 'underline'; out.appendChild(a); }
  setTimeout(() => { if (btn) btn.disabled = false; }, 4000);
}

document.addEventListener('submit', e => {
  if (e.target.id === 'enquiry') { take(e); submitForm(e.target, $('msg'), 'callback'); }
  else if (e.target.id === 'agentForm') { take(e); submitForm(e.target, $('agentMsg'), 'agent'); }
}, true);

const show = (m, on) => { if (!m) return; m.hidden = !on; document.body.style.overflow = on ? 'hidden' : ''; };
let lastBtn = null;
document.addEventListener('click', e => {
  const t = e.target;
  const hit = sel => t.closest && t.closest(sel);
  if (hit('#agentOpen')) { take(e); lastBtn = hit('#agentOpen'); show($('agentModal'), true); const i = $('agentForm') && $('agentForm').elements.name; if (i) i.focus(); }
  else if (hit('#agentClose') || t === $('agentModal')) { take(e); show($('agentModal'), false); if (lastBtn) lastBtn.focus(); }
  else if (hit('#planClose') || t === $('planModal')) { take(e); show($('planModal'), false); if (lastBtn) lastBtn.focus(); }
  else if (hit('button.plan')) {
    take(e); const b = hit('button.plan'); lastBtn = b;
    $('planTitle').textContent = b.dataset.title; $('planImg').src = b.dataset.img; $('planImg').alt = b.dataset.title + ' brochure';
    $('planWa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hello Sivaani Associate, I would like details about ' + b.dataset.title + '.');
    show($('planModal'), true);
  }
  else if (hit('#burger')) { take(e); const l = $('links'); if (l) { const o = l.classList.toggle('open'); $('burger').setAttribute('aria-expanded', o); } }
  else if (hit('#links a')) { const l = $('links'); if (l) l.classList.remove('open'); }
  else if (hit('#lang')) {
    take(e); const ta = document.documentElement.lang !== 'ta'; document.documentElement.lang = ta ? 'ta' : 'en';
    document.querySelectorAll('[data-en][data-ta]').forEach(el => { el.textContent = ta ? el.dataset.ta : el.dataset.en; });
    $('lang').textContent = ta ? 'English' : 'தமிழ்'; try { localStorage.setItem('sa_lang', ta ? 'ta' : 'en'); } catch (x) {}
  }
}, true);

addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  ['agentModal', 'planModal'].forEach(id => { const m = $(id); if (m && !m.hidden) { show(m, false); if (lastBtn) lastBtn.focus(); } });
});
const nav = $('nav');
if (nav) { const f = () => nav.classList.toggle('solid', scrollY > 40); addEventListener('scroll', f, { passive: true }); f(); }
})();
