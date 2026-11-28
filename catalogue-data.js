/* Insurance catalogue. Product TYPES only – no prices, no guaranteed benefits. Insurer names/links appear only where they were checked against insurer or regulator sources; products without a listed insurer are general descriptions. Edit freely; keep wording factual. */
window.SA_CATALOGUE = {
  supabase: { url: "", anonKey: "" },   /* optional: https://xxxx.supabase.co + PUBLIC anon key only (never service_role). See supabase-setup.sql */
  insurers: {
    lic:["LIC of India"], star:["Star Health","https://www.starhealth.in/star-health-insurance"], ni:["New India Assurance"],
    nih:["New India Assurance","https://newindia.co.in/new-india-flexi-griha-raksha"], bj:["Bajaj General Insurance"], ba:["Bajaj Allianz General"], ic:["ICICI Lombard"],
    us:["Universal Sompo","https://www.universalsompo.com/commercial-insurance"], usd:["Universal Sompo (domestic travel)","https://www.universalsompo.com/DomesticTravelQuote"]
  },
  cats: [
  { id:"life", icon:"👨‍👩‍👧", name:"Life Insurance", d:"Protection for your family's financial future, with savings-linked options.",
    feat:["Pays a sum assured to nominees as per policy terms","Policy and premium-paying terms differ by plan","Savings and market-linked plans are different products from pure term cover"],
    ben:["Financial security for dependants","Some plan types add maturity or survival benefits, as stated in the policy"],
    elig:"Entry age, sum assured and medical underwriting vary by plan and insurer.", excl:["Standard exclusions and a non-disclosure clause apply (for example, suicide within the initial policy period) – read the policy wording"],
    subs:[
     {n:"Term Life Insurance",d:"Pure protection cover for a chosen term; generally no maturity benefit if you outlive the term.",i:["lic"]},
     {n:"Whole Life Insurance",d:"Life cover designed to continue for a very long term or whole of life, as per the plan.",i:["lic"]},
     {n:"Endowment Plans",d:"Life cover combined with a savings component paid on survival to maturity.",i:["lic"]},
     {n:"ULIP Plans",d:"Life cover with market-linked investment. Returns are not guaranteed and depend on fund performance.",i:["lic"]},
     {n:"Money Back Plans",d:"Periodic survival payouts during the term plus life cover, as specified in the plan.",i:["lic"]}]},
  { id:"health", icon:"🏥", name:"Health Insurance", d:"Cover for hospitalisation and medical expenses for you and your family.",
    feat:["Sum insured, waiting periods and sub-limits vary by plan","Cashless treatment is available only at network hospitals","Renewal terms differ by insurer"],
    ben:["Helps meet hospitalisation costs","Some plans add covers such as restoration or health check-ups, as listed in the policy"],
    elig:"Entry age and medical acceptance vary. Example: Star Senior Citizens Red Carpet is listed for ages 60–75 – confirm in the current policy wording.",
    excl:["Waiting periods apply, including for pre-existing conditions","Listed permanent exclusions and sub-limits apply – see policy wording"],
    subs:[
     {n:"Individual Health Insurance",d:"A health policy covering one person under their own sum insured.",i:["star"]},
     {n:"Family Floater Health Insurance",d:"One sum insured shared by the family members named in the policy.",i:["star"]},
     {n:"Senior Citizen Health Insurance",d:"Health cover designed for older adults, with its own entry-age rules.",i:["star"]},
     {n:"Critical Illness Insurance",d:"Benefit linked to diagnosis of illnesses specifically listed in the policy.",i:["star"]},
     {n:"Top-Up & Super Top-Up Plans",d:"Extra cover that applies above a chosen deductible or your base policy.",i:["star"]},
     {n:"Personal Accident Insurance",d:"Benefits for accidental death or disability, as defined in the policy.",i:["star","ni"]},
     {n:"Group Health Insurance",d:"Health cover arranged for the members of a group, such as the employees of a company.",i:[]}]},
  { id:"child", icon:"🎒", name:"Child Plans", d:"Plans to build funds for a child's school fees, higher education and future needs.",
    promo:{h:"Your Children's Education and Marriage Dreams, Secured with One Smart Investment Plan.", t:"Plan your children's school fees, higher education and future marriage expenses with a single, well-structured financial plan."},
    feat:["Plans are built around goals such as school fees, higher education and marriage","Benefits are paid at the points stated in the policy","The parent or guardian is generally the life insured"],
    ben:["Planned funds for a child's future, as per the policy","Life cover on the parent, where the plan includes it"],
    elig:"Child and parent age limits, term and premium vary by plan and insurer.", excl:["Plan-specific conditions apply – read the policy wording","Market-linked plans do not guarantee returns"],
    subs:[
     {n:"Children's Education Plans",d:"Plans designed to build funds for a child's higher education, with benefits payable as stated in the policy.",i:[]},
     {n:"Children's Future Plans",d:"Long-term plans that combine life cover with savings for a child's future needs.",i:[]},
     {n:"School Fee Planning",d:"Goal-based planning to help meet school fees at the stages you choose. The right plan is chosen after discussing your needs.",i:[]},
     {n:"Children's Marriage Planning",d:"Goal-based planning to build funds for a child's future marriage expenses, as per the chosen plan.",i:[]}]},
  { id:"retire", icon:"👴", name:"Retirement Plans", d:"Plans to build and receive income after retirement.",
    feat:["Pension and annuity structures differ by plan","Terms and payout options are set by the insurer"],
    ben:["Planned income in later life, as stated in the policy"],
    elig:"Entry age and purchase amount vary by plan.", excl:["Plan-specific conditions apply – read the policy wording"],
    subs:[
     {n:"Retirement Plans",d:"Long-term plans to build a corpus for retirement.",i:["lic"]},
     {n:"Pension Plans",d:"Plans that provide pension income as per the chosen option.",i:["lic"]},
     {n:"Annuity Plans",d:"Income for life or a set period in return for a purchase price.",i:["lic"]}]},
  { id:"business", icon:"🏢", name:"Business Insurance", d:"Cover that protects a business, its key people, employees and partners.",
    feat:["Policies are risk-specific","Underwriting depends on the business type and the values insured","The business is usually the policyholder for key person and partner covers"],
    ben:["Protection of the business and its continuity, as per the policy"],
    elig:"Varies by product and insurer; business details are required.", excl:["Policy-specific exclusions and conditions apply – read the wording"],
    subs:[
     {n:"Keyman Insurance",d:"Life cover taken by a business on a key person whose loss would affect the business. The business is the policyholder and beneficiary.",i:[]},
     {n:"Business Term Insurance",d:"Term life cover linked to business needs, such as loan protection, as per the policy.",i:[]},
     {n:"Employer-Employee Insurance",d:"Cover arranged by an employer for its employees, such as group life or health benefits, as per the policy.",i:[]},
     {n:"Partnership Firm Insurance",d:"Cover for the partners of a firm, for example to support the firm's continuity if a partner dies, as per the policy.",i:[]}]},
  { id:"motor", icon:"🚗", icon2:"🏍️", name:"Motor Insurance", d:"Cover for your car, two-wheeler or commercial vehicle.",
    feat:["Third-party liability cover is mandatory for motor vehicles in India","Comprehensive policies add own-damage cover","Premium depends on the vehicle and the insurer's rating"],
    ben:["Legal compliance","Financial protection for accident damage and third-party claims, as per the policy"],
    elig:"Requires vehicle registration details and the previous policy details, if any.",
    excl:["Driving without a valid licence or under influence, normal wear and tear, and other listed exclusions apply"],
    subs:[
     {n:"Car Insurance",d:"Cover for private cars, third-party only or package (comprehensive).",i:["ni","bj"]},
     {n:"Two-Wheeler Insurance",d:"Cover for bikes and scooters, third-party only or package.",i:["ni","bj"]},
     {n:"Commercial Vehicle Insurance",d:"Cover for goods and passenger vehicles used for business.",i:["ni","bj"]},
     {n:"Third-Party Motor Insurance",d:"Covers your legal liability for injury or damage to others. Does not cover your own vehicle.",i:["ni","bj"]},
     {n:"Comprehensive Motor Insurance",d:"Third-party liability plus own-damage cover for your vehicle.",i:["bj"]}]},
  { id:"travel", icon:"✈️", name:"Travel Insurance", d:"Protection for trips within India and abroad.",
    feat:["Covers differ by plan, for example medical, baggage or trip delay","Overseas plans may be required for some visas","Trip dates and destination decide eligibility"],
    ben:["Support against unexpected travel costs, as listed in the policy"],
    elig:"Based on traveller age, destination and trip duration; varies by insurer.", excl:["Pre-existing conditions, high-risk activities and other listed exclusions may not be covered"],
    subs:[
     {n:"Domestic Travel Insurance",d:"For trips within India. IRDAI has issued guidelines for a standard domestic travel product (Bharat Yatra Suraksha).",i:["ni","usd"]},
     {n:"International Travel Insurance",d:"Overseas medical and travel cover for leisure or business trips.",i:["ni","bj","ic"]},
     {n:"Student Travel Insurance",d:"For students going abroad to study, with study-related covers where the plan includes them.",i:["ni"]},
     {n:"Family Travel Insurance",d:"Travel cover for the family members named on one policy.",i:["ni"]}]},
  { id:"home", icon:"🏠", name:"Home & Property Insurance", d:"Cover for your home, its contents and other property against listed risks.",
    feat:["Building and contents can be insured separately","Insured perils are listed in the policy","Bharat Griha Raksha is a standard home product offered by several insurers"],
    ben:["Financial protection against listed damage such as fire, as per the policy"],
    elig:"Ownership or insurable interest in the property is generally required.", excl:["Wear and tear, intentional damage and other listed exclusions apply"],
    subs:[
     {n:"Home Insurance",d:"Cover for the home building and/or its contents (e.g. Bharat Griha Raksha).",i:["nih","ba","ic","us"]},
     {n:"Fire Insurance",d:"Cover for loss or damage by fire and listed allied perils to property.",i:["ni","bj"]},
     {n:"Property Protection Insurance",d:"Package covers for household or office property.",i:["ni","bj"]}]}
  ]
};