/* Enquiry products & forms. Edit via admin.html, then replace this file. whatsapp "" = use CONFIG.whatsapp in script.js. Field flag c:true = listed under Customer Details in the WhatsApp message. */
window.SA_ENQUIRY = {
 "whatsapp": "",
 "cats": {
  "life": "Life Insurance",
  "health": "Health Insurance",
  "child": "Child Plans",
  "retire": "Retirement Plans",
  "savings": "Savings & Investment",
  "vehicle": "Vehicle Insurance"
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
       "k": "pec",
       "l": "Existing Medical Conditions (optional)",
       "t": "textarea",
       "r": false,
       "ph": "Only if you wish to share, e.g. diabetes"
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
  "savings": {
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
       "k": "dob",
       "l": "Date of Birth",
       "t": "date",
       "r": true,
       "v": "dob"
      }
     ]
    },
    {
     "t": "Investment plan",
     "f": [
      {
       "k": "goal",
       "l": "Investment Goal",
       "t": "select",
       "r": true,
       "o": [
        "Wealth creation",
        "Child's future",
        "Tax saving",
        "Regular income",
        "Emergency / short-term savings",
        "Other"
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
       "min": 1,
       "max": 40
      },
      {
       "k": "risk",
       "l": "Risk Preference",
       "t": "radio",
       "r": true,
       "o": [
        "Low",
        "Moderate",
        "High"
       ]
      }
     ]
    }
   ]
  },
  "vehicle": {
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
        "Bike"
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
  }
 },
 "products": [
  {
   "id": "term-insurance",
   "cat": "life",
   "name": "Term Insurance",
   "ta": "கால காப்பீடு",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "endowment-plan",
   "cat": "life",
   "name": "Endowment Plan",
   "ta": "எண்டோவ்மெண்ட் திட்டம்",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "whole-life-plan",
   "cat": "life",
   "name": "Whole Life Plan",
   "ta": "முழு ஆயுள் திட்டம்",
   "active": true,
   "form": "life",
   "extra": []
  },
  {
   "id": "health-insurance",
   "cat": "health",
   "name": "Health Insurance",
   "ta": "மருத்துவ காப்பீடு",
   "active": true,
   "form": "health",
   "extra": []
  },
  {
   "id": "child-plan",
   "cat": "child",
   "name": "Child Plan",
   "ta": "குழந்தை திட்டம்",
   "active": true,
   "form": "child",
   "extra": []
  },
  {
   "id": "retirement-plan",
   "cat": "retire",
   "name": "Retirement Plan",
   "ta": "ஓய்வூதிய திட்டம்",
   "active": true,
   "form": "retire",
   "extra": []
  },
  {
   "id": "savings-investment-plan",
   "cat": "savings",
   "name": "Savings & Investment Plan",
   "ta": "சேமிப்பு & முதலீட்டுத் திட்டம்",
   "active": true,
   "form": "savings",
   "extra": []
  },
  {
   "id": "vehicle-insurance-car-bike",
   "cat": "vehicle",
   "name": "Vehicle Insurance (Car / Bike)",
   "ta": "வாகன காப்பீடு",
   "active": true,
   "form": "vehicle",
   "extra": []
  }
 ]
};
