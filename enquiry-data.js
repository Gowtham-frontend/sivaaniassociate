/* Enquiry products & forms. Edit via admin.html, then replace this file. whatsapp "" = use CONFIG.whatsapp in script.js. Field flag c:true = listed under Customer Details in the WhatsApp message. */
window.SA_ENQUIRY = {
 "whatsapp": "",
 "cats": {
  "life": "Life Insurance",
  "health": "Health Insurance",
  "child": "Child Plans",
  "retire": "Retirement Plans",
  "business": "Business Insurance",
  "motor": "Motor Insurance",
  "travel": "Travel Insurance",
  "home": "Home & Property Insurance"
 },
 "forms": {
  "life": {
   "steps": [
    {
     "t": "Personal details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "dob",
       "l": "Date of Birth",
       "t": "date",
       "r": true,
       "v": "dob"
      },
      {
       "k": "gender",
       "l": "Gender",
       "t": "radio",
       "r": true,
       "o": [
        "Male",
        "Female",
        "Other"
       ]
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      }
     ]
    },
    {
     "t": "Cover details",
     "f": [
      {
       "k": "occupation",
       "l": "Occupation",
       "t": "text",
       "r": true
      },
      {
       "k": "income",
       "l": "Annual Income",
       "t": "select",
       "r": true,
       "o": [
        "Below ₹3 Lakh",
        "₹3–6 Lakh",
        "₹6–10 Lakh",
        "₹10–25 Lakh",
        "Above ₹25 Lakh"
       ]
      },
      {
       "k": "tobacco",
       "l": "Smoking / Tobacco Habit",
       "t": "radio",
       "r": true,
       "o": [
        "Yes",
        "No"
       ]
      },
      {
       "k": "sum",
       "l": "Required Sum Assured",
       "t": "select",
       "r": true,
       "o": [
        "₹25 Lakh",
        "₹50 Lakh",
        "₹1 Crore",
        "₹2 Crore",
        "Above ₹2 Crore"
       ]
      }
     ]
    }
   ]
  },
  "health": {
   "steps": [
    {
     "t": "Personal details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "dob",
       "l": "Date of Birth",
       "t": "date",
       "r": true,
       "v": "dob"
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      },
      {
       "k": "city",
       "l": "City",
       "t": "text",
       "r": true,
       "c": true
      }
     ]
    },
    {
     "t": "Family & cover",
     "f": [
      {
       "k": "members",
       "l": "Number of Family Members",
       "t": "number",
       "r": true,
       "min": 1,
       "max": 12
      },
      {
       "k": "ages",
       "l": "Family Members' Ages",
       "t": "text",
       "r": true,
       "ph": "e.g. 38, 35, 9, 6"
      },
      {
       "k": "coverage",
       "l": "Required Coverage Amount",
       "t": "select",
       "r": true,
       "o": [
        "₹3 Lakh",
        "₹5 Lakh",
        "₹10 Lakh",
        "₹15 Lakh",
        "₹25 Lakh",
        "₹50 Lakh+"
       ]
      }
     ]
    }
   ]
  },
  "child": {
   "steps": [
    {
     "t": "Parent details",
     "f": [
      {
       "k": "name",
       "l": "Parent Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      }
     ]
    },
    {
     "t": "Child & investment",
     "f": [
      {
       "k": "cname",
       "l": "Child Name",
       "t": "text",
       "r": true
      },
      {
       "k": "cdob",
       "l": "Child Date of Birth",
       "t": "date",
       "r": true,
       "v": "dob"
      },
      {
       "k": "cgender",
       "l": "Child Gender",
       "t": "radio",
       "r": true,
       "o": [
        "Boy",
        "Girl"
       ]
      },
      {
       "k": "amount",
       "l": "Investment Amount (₹)",
       "t": "number",
       "r": true,
       "min": 500
      },
      {
       "k": "dur",
       "l": "Investment Duration (years)",
       "t": "number",
       "r": true,
       "min": 3,
       "max": 40
      }
     ]
    }
   ]
  },
  "retire": {
   "steps": [
    {
     "t": "Personal details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "dob",
       "l": "Date of Birth",
       "t": "date",
       "r": true,
       "v": "dob"
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      }
     ]
    },
    {
     "t": "Retirement plan",
     "f": [
      {
       "k": "age",
       "l": "Current Age",
       "t": "number",
       "r": true,
       "min": 18,
       "max": 80
      },
      {
       "k": "rage",
       "l": "Retirement Age",
       "t": "number",
       "r": true,
       "min": 40,
       "max": 80
      },
      {
       "k": "monthly",
       "l": "Monthly Investment Budget (₹)",
       "t": "number",
       "r": true,
       "min": 500
      },
      {
       "k": "corpus",
       "l": "Expected Retirement Corpus (₹)",
       "t": "number",
       "r": true,
       "min": 10000
      }
     ]
    }
   ]
  },
  "motor": {
   "steps": [
    {
     "t": "Contact details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      }
     ]
    },
    {
     "t": "Vehicle details",
     "f": [
      {
       "k": "vtype",
       "l": "Vehicle Type",
       "t": "radio",
       "r": true,
       "o": [
        "Car",
        "Two-wheeler",
        "Commercial vehicle"
       ]
      },
      {
       "k": "reg",
       "l": "Vehicle Registration Number",
       "t": "text",
       "r": true,
       "v": "reg",
       "ph": "e.g. TN 33 AB 1234"
      },
      {
       "k": "model",
       "l": "Vehicle Brand & Model",
       "t": "text",
       "r": true,
       "ph": "e.g. Honda City"
      },
      {
       "k": "year",
       "l": "Manufacturing Year",
       "t": "number",
       "r": true,
       "min": 1990,
       "max": 2027
      }
     ]
    },
    {
     "t": "Existing policy",
     "f": [
      {
       "k": "status",
       "l": "Existing Policy Status",
       "t": "select",
       "r": true,
       "o": [
        "Active policy",
        "Expired policy",
        "No existing policy / New vehicle"
       ]
      },
      {
       "k": "expiry",
       "l": "Policy Expiry Date",
       "t": "date",
       "r": true,
       "w": {
        "k": "status",
        "v": [
         "Active policy",
         "Expired policy"
        ]
       }
      }
     ]
    }
   ]
  },
  "business": {
   "steps": [
    {
     "t": "Contact details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      },
      {
       "k": "city",
       "l": "City",
       "t": "text",
       "r": true,
       "c": true
      }
     ]
    },
    {
     "t": "Business details",
     "f": [
      {
       "k": "bname",
       "l": "Business / Firm Name",
       "t": "text",
       "r": true
      },
      {
       "k": "btype",
       "l": "Type of Business",
       "t": "select",
       "r": true,
       "o": [
        "Shop / Retail",
        "Manufacturing",
        "Service / Professional",
        "Trading / Distribution",
        "Other"
       ]
      },
      {
       "k": "turn",
       "l": "Approximate Annual Turnover",
       "t": "select",
       "r": false,
       "o": [
        "Below ₹25 Lakh",
        "₹25 Lakh–1 Crore",
        "₹1–5 Crore",
        "Above ₹5 Crore"
       ]
      }
     ]
    }
   ]
  },
  "travel": {
   "steps": [
    {
     "t": "Contact details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      }
     ]
    },
    {
     "t": "Trip details",
     "f": [
      {
       "k": "dest",
       "l": "Destination",
       "t": "text",
       "r": true,
       "ph": "e.g. Singapore / Goa"
      },
      {
       "k": "tdate",
       "l": "Travel Start Date",
       "t": "date",
       "r": true
      },
      {
       "k": "days",
       "l": "Trip Duration (days)",
       "t": "number",
       "r": true,
       "min": 1,
       "max": 365
      },
      {
       "k": "trav",
       "l": "Number of Travellers",
       "t": "number",
       "r": true,
       "min": 1,
       "max": 20
      },
      {
       "k": "tages",
       "l": "Travellers' Ages",
       "t": "text",
       "r": true,
       "ph": "e.g. 38, 35, 9"
      }
     ]
    }
   ]
  },
  "home": {
   "steps": [
    {
     "t": "Contact details",
     "f": [
      {
       "k": "name",
       "l": "Full Name",
       "t": "text",
       "r": true,
       "c": true,
       "max": 80
      },
      {
       "k": "mobile",
       "l": "Mobile Number",
       "t": "tel",
       "r": true,
       "c": true,
       "v": "mobile"
      },
      {
       "k": "email",
       "l": "Email Address",
       "t": "email",
       "r": true,
       "c": true,
       "v": "email",
       "max": 100
      },
      {
       "k": "city",
       "l": "City",
       "t": "text",
       "r": true,
       "c": true
      }
     ]
    },
    {
     "t": "Property details",
     "f": [
      {
       "k": "ptype",
       "l": "Property Type",
       "t": "select",
       "r": true,
       "o": [
        "Own house / villa",
        "Apartment / flat",
        "Rented home (contents only)",
        "Shop / office building",
        "Other"
       ]
      },
      {
       "k": "cover",
       "l": "Cover Needed For",
       "t": "radio",
       "r": true,
       "o": [
        "Building",
        "Contents",
        "Building + contents"
       ]
      },
      {
       "k": "pval",
       "l": "Approximate Value to Insure",
       "t": "select",
       "r": true,
       "o": [
        "Below ₹25 Lakh",
        "₹25–50 Lakh",
        "₹50 Lakh–1 Crore",
        "Above ₹1 Crore"
       ]
      }
     ]
    }
   ]
  }
 },
 "products": [
  {
   "id": "term-life-insurance",
   "cat": "life",
   "name": "Term Life Insurance",
   "ta": "கால ஆயுள் காப்பீடு",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "whole-life-insurance",
   "cat": "life",
   "name": "Whole Life Insurance",
   "ta": "முழு ஆயுள் காப்பீடு",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "endowment-plans",
   "cat": "life",
   "name": "Endowment Plans",
   "ta": "எண்டோவ்மெண்ட் திட்டங்கள்",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "ulip-plans",
   "cat": "life",
   "name": "ULIP Plans",
   "ta": "யூலிப் திட்டங்கள்",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "money-back-plans",
   "cat": "life",
   "name": "Money Back Plans",
   "ta": "மணி பேக் திட்டங்கள்",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "individual-health-insurance",
   "cat": "health",
   "name": "Individual Health Insurance",
   "ta": "தனிநபர் மருத்துவ காப்பீடு",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "family-floater-health-insurance",
   "cat": "health",
   "name": "Family Floater Health Insurance",
   "ta": "குடும்ப ஃப்ளோட்டர் மருத்துவ காப்பீடு",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "senior-citizen-health-insurance",
   "cat": "health",
   "name": "Senior Citizen Health Insurance",
   "ta": "மூத்த குடிமக்கள் மருத்துவ காப்பீடு",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "critical-illness-insurance",
   "cat": "health",
   "name": "Critical Illness Insurance",
   "ta": "தீவிர நோய் காப்பீடு",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "top-up-super-top-up-plans",
   "cat": "health",
   "name": "Top-Up & Super Top-Up Plans",
   "ta": "டாப்-அப் & சூப்பர் டாப்-அப் திட்டங்கள்",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "personal-accident-insurance",
   "cat": "health",
   "name": "Personal Accident Insurance",
   "ta": "தனிநபர் விபத்து காப்பீடு",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "group-health-insurance",
   "cat": "health",
   "name": "Group Health Insurance",
   "ta": "குழு மருத்துவ காப்பீடு",
   "active": true,
   "form": "health",
   "extra": [
    {
     "l": "Company / Organisation Name",
     "t": "text",
     "r": true,
     "o": []
    },
    {
     "l": "Number of Employees / Members",
     "t": "number",
     "r": true,
     "o": []
    }
   ]
  },
  {
   "id": "children-s-education-plans",
   "cat": "child",
   "name": "Children's Education Plans",
   "ta": "குழந்தைகள் கல்வித் திட்டங்கள்",
   "active": true,
   "form": "child",
   "extra": []
  },
  {
   "id": "children-s-future-plans",
   "cat": "child",
   "name": "Children's Future Plans",
   "ta": "குழந்தைகள் எதிர்காலத் திட்டங்கள்",
   "active": true,
   "form": "child",
   "extra": []
  },
  {
   "id": "school-fee-planning",
   "cat": "child",
   "name": "School Fee Planning",
   "ta": "பள்ளிக் கட்டணத் திட்டமிடல்",
   "active": true,
   "form": "child",
   "extra": []
  },
  {
   "id": "children-s-marriage-planning",
   "cat": "child",
   "name": "Children's Marriage Planning",
   "ta": "குழந்தைகள் திருமணத் திட்டமிடல்",
   "active": true,
   "form": "child",
   "extra": []
  },
  {
   "id": "retirement-plans",
   "cat": "retire",
   "name": "Retirement Plans",
   "ta": "ஓய்வூதிய திட்டங்கள்",
   "active": true,
   "form": "retire",
   "extra": []
  },
  {
   "id": "pension-plans",
   "cat": "retire",
   "name": "Pension Plans",
   "ta": "பென்ஷன் திட்டங்கள்",
   "active": true,
   "form": "retire",
   "extra": []
  },
  {
   "id": "annuity-plans",
   "cat": "retire",
   "name": "Annuity Plans",
   "ta": "ஆன்யூட்டி திட்டங்கள்",
   "active": true,
   "form": "retire",
   "extra": []
  },
  {
   "id": "keyman-insurance",
   "cat": "business",
   "name": "Keyman Insurance",
   "ta": "கீமேன் காப்பீடு",
   "active": true,
   "form": "business",
   "extra": [
    {
     "l": "Key Person's Role in the Business",
     "t": "text",
     "r": true,
     "o": []
    }
   ]
  },
  {
   "id": "business-term-insurance",
   "cat": "business",
   "name": "Business Term Insurance",
   "ta": "வணிக கால காப்பீடு",
   "active": true,
   "form": "business",
   "extra": []
  },
  {
   "id": "employer-employee-insurance",
   "cat": "business",
   "name": "Employer-Employee Insurance",
   "ta": "முதலாளி-பணியாளர் காப்பீடு",
   "active": true,
   "form": "business",
   "extra": [
    {
     "l": "Number of Employees",
     "t": "number",
     "r": true,
     "o": []
    }
   ]
  },
  {
   "id": "partnership-firm-insurance",
   "cat": "business",
   "name": "Partnership Firm Insurance",
   "ta": "கூட்டாண்மை நிறுவன காப்பீடு",
   "active": true,
   "form": "business",
   "extra": [
    {
     "l": "Number of Partners",
     "t": "number",
     "r": true,
     "o": []
    }
   ]
  },
  {
   "id": "car-insurance",
   "cat": "motor",
   "name": "Car Insurance",
   "ta": "கார் காப்பீடு",
   "active": true,
   "form": "motor",
   "extra": []
  },
  {
   "id": "two-wheeler-insurance",
   "cat": "motor",
   "name": "Two-Wheeler Insurance",
   "ta": "இருசக்கர வாகன காப்பீடு",
   "active": true,
   "form": "motor",
   "extra": []
  },
  {
   "id": "commercial-vehicle-insurance",
   "cat": "motor",
   "name": "Commercial Vehicle Insurance",
   "ta": "வணிக வாகன காப்பீடு",
   "active": true,
   "form": "motor",
   "extra": []
  },
  {
   "id": "third-party-motor-insurance",
   "cat": "motor",
   "name": "Third-Party Motor Insurance",
   "ta": "மூன்றாம் தரப்பு மோட்டார் காப்பீடு",
   "active": true,
   "form": "motor",
   "extra": []
  },
  {
   "id": "comprehensive-motor-insurance",
   "cat": "motor",
   "name": "Comprehensive Motor Insurance",
   "ta": "முழுமையான மோட்டார் காப்பீடு",
   "active": true,
   "form": "motor",
   "extra": []
  },
  {
   "id": "domestic-travel-insurance",
   "cat": "travel",
   "name": "Domestic Travel Insurance",
   "ta": "உள்நாட்டுப் பயணக் காப்பீடு",
   "active": true,
   "form": "travel",
   "extra": []
  },
  {
   "id": "international-travel-insurance",
   "cat": "travel",
   "name": "International Travel Insurance",
   "ta": "வெளிநாட்டுப் பயணக் காப்பீடு",
   "active": true,
   "form": "travel",
   "extra": []
  },
  {
   "id": "student-travel-insurance",
   "cat": "travel",
   "name": "Student Travel Insurance",
   "ta": "மாணவர் பயணக் காப்பீடு",
   "active": true,
   "form": "travel",
   "extra": [
    {
     "l": "University / Course",
     "t": "text",
     "r": true,
     "o": []
    }
   ]
  },
  {
   "id": "family-travel-insurance",
   "cat": "travel",
   "name": "Family Travel Insurance",
   "ta": "குடும்பப் பயணக் காப்பீடு",
   "active": true,
   "form": "travel",
   "extra": []
  },
  {
   "id": "home-insurance",
   "cat": "home",
   "name": "Home Insurance",
   "ta": "வீட்டுக் காப்பீடு",
   "active": true,
   "form": "home",
   "extra": []
  },
  {
   "id": "fire-insurance",
   "cat": "home",
   "name": "Fire Insurance",
   "ta": "தீ காப்பீடு",
   "active": true,
   "form": "home",
   "extra": []
  },
  {
   "id": "property-protection-insurance",
   "cat": "home",
   "name": "Property Protection Insurance",
   "ta": "சொத்துப் பாதுகாப்பு காப்பீடு",
   "active": true,
   "form": "home",
   "extra": []
  }
 ]
};