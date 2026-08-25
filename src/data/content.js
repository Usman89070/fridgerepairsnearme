// Central content store for the Fridge Repairs Near Me homepage.
// Keeping copy here mirrors the SEO content brief and keeps components lean.

export const enquiryEmail = "info@fridgerepairsnearme.com.au";
export const enquiryEmailHref = `mailto:${enquiryEmail}`;
export const businessAddress = "Sydney, NSW";
export const businessHours = "Open 24/7";

export const navLinks = [
  { label: "Domestic", href: "#domestic" },
  { label: "Commercial", href: "#commercial" },
  { label: "Locations", href: "#locations" },
  { label: "How It Works", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact-us" },
];

export const trustBar = [
  "Domestic Fridge Repairs",
  "Commercial Refrigeration Repairs",
  "Major Fridge Brands Covered",
  "Local Service Availability",
  "Fault Diagnosis & Repair",
  "Urgent Appointments Where Available",
];

export const cityLocations = [
  {
    city: "Sydney",
    blurb:
      "Need local fridge repair help in Sydney? Service may be available across supported Greater Sydney locations for domestic refrigerators, household freezers and commercial refrigeration equipment. Customers commonly request help for fridges that are no longer cooling correctly, freezers developing heavy frost, water leaks, unusual noises and commercial units that cannot maintain temperature.",
  },
  {
    city: "Melbourne",
    blurb:
      "Find fridge repair services near you across supported Melbourne suburbs for cooling faults, leaks, frost problems, noisy refrigerators and other common appliance issues. Residential and commercial service availability depends on your suburb, appliance type and technician scheduling.",
  },
  {
    city: "Brisbane",
    blurb:
      "Looking for a fridge technician near you in Brisbane? Domestic and commercial refrigeration service may be available for cooling faults, electrical problems, defrost issues, fan failures and refrigeration system concerns.",
  },
  {
    city: "Perth",
    blurb:
      "Find local fridge repair service across supported Perth locations for household refrigerators, freezers and selected commercial refrigeration equipment. Provide your suburb, appliance type, brand and symptoms when enquiring so service options can be checked.",
  },
  {
    city: "Adelaide",
    blurb:
      "Need fridge repairs near you in Adelaide? Enter your suburb and appliance details to check available fridge repair services for warm fridges, water leaks, frost build-up, noisy operation and other common faults.",
  },
  {
    city: "Canberra",
    blurb:
      "Fridge and freezer repair support may be available across supported Canberra suburbs. Tell us what the appliance is doing, the brand and model if known, and your suburb or postcode so the appropriate service availability can be confirmed.",
  },
];

export const problems = [
  {
    title: "Fridge Not Cooling Properly",
    summary:
      "A refrigerator that feels warmer than normal can have several possible causes. Sometimes the fridge is still running even though the cabinet is not reaching the correct temperature. A technician can inspect the cooling system and operating conditions before recommending the appropriate repair.",
    causes: [
      "blocked airflow",
      "evaporator fan problems",
      "condenser fan faults",
      "temperature sensor problems",
      "thermostat faults",
      "control board issues",
      "compressor start component faults",
      "sealed refrigeration system problems",
    ],
  },
  {
    title: "Freezer Cold but Fridge Warm",
    summary:
      "If the freezer is still cold but the fresh-food section is warm, the compressor may not necessarily be the problem. Ice around the evaporator can restrict airflow and prevent cold air from reaching the refrigerator section.",
    causes: [
      "blocked airflow between compartments",
      "evaporator fan failure",
      "excessive frost around the evaporator",
      "defrost system faults",
      "air damper problems",
      "temperature sensor faults",
    ],
  },
  {
    title: "Fridge Leaking Water",
    summary:
      "Water around or inside a refrigerator can come from several areas. Leaks should be investigated before they cause damage to surrounding flooring, cabinetry or electrical components.",
    causes: [
      "blocked defrost drain",
      "damaged drain components",
      "water supply line problems",
      "faulty inlet valve",
      "overflowing drain pan",
      "excessive condensation",
      "door seal problems",
    ],
  },
  {
    title: "Excessive Frost or Ice Build-Up",
    summary:
      "Heavy frost inside the freezer is not always normal. If ice builds up around the evaporator, airflow can eventually become restricted and cooling performance may decline.",
    causes: [
      "defrost heater failure",
      "defrost sensor problems",
      "control system faults",
      "damaged door gasket",
      "door not closing correctly",
      "moisture entering the cabinet",
    ],
  },
  {
    title: "Fridge Making Strange Noises",
    summary:
      "Refrigerators normally make some operating sounds, but new or unusually loud buzzing, clicking, grinding, rattling or scraping may indicate a fault. The location and timing of the noise can help narrow down the likely cause.",
    causes: [
      "evaporator fan motor",
      "condenser fan motor",
      "compressor",
      "start relay",
      "loose panels",
      "vibration",
      "ice contacting a fan blade",
    ],
  },
  {
    title: "Fridge Running Constantly",
    summary:
      "A refrigerator will cycle on and off as it maintains temperature. If it appears to run almost continuously, the appliance should be checked before assuming the compressor itself has failed.",
    causes: [
      "damaged door seals",
      "poor airflow",
      "dirty or restricted condenser area",
      "faulty temperature sensor",
      "thermostat problem",
      "fan motor issues",
      "refrigeration system fault",
      "excessive heat entering the cabinet",
    ],
  },
  {
    title: "Fridge Not Turning On",
    summary:
      "If the refrigerator appears completely dead, the problem may involve either the appliance or its electrical supply. Electrical repairs should only be handled by appropriately qualified people.",
    causes: [
      "power supply",
      "control components",
      "start relay",
      "overload protector",
      "wiring",
      "thermostat",
      "electronic control board",
      "compressor start circuit",
    ],
  },
  {
    title: "Fridge Temperature Keeps Changing",
    summary:
      "Temperature fluctuations can affect food storage and may indicate an underlying fault. Consistent temperature control is particularly important for commercial refrigeration where stored food or products may require controlled conditions.",
    causes: [
      "temperature sensor problems",
      "thermostat faults",
      "controller issues",
      "airflow problems",
      "fan faults",
      "door gasket leaks",
      "excessive frost",
      "refrigeration system issues",
    ],
  },
];

export const domesticTypes = [
  {
    title: "French-Door Fridges",
    text: "French-door refrigerators combine large fresh-food compartments with lower freezer storage and often include multiple temperature zones. Common issues can involve uneven cooling, ice build-up, fan faults, temperature sensors, water leaks, control systems and door seals.",
  },
  {
    title: "Side-by-Side Fridges",
    text: "Side-by-side refrigerators can develop airflow, defrost, fan or temperature-control problems that affect one side of the appliance more than the other. A technician can check whether the problem is related to airflow, cooling components or the electronic control system.",
  },
  {
    title: "Top-Mount and Bottom-Mount Fridges",
    text: "Traditional top-mount and bottom-mount refrigerators remain common throughout Australian homes. Typical repairs may involve thermostat problems, fan motors, door seals, defrost faults, temperature sensors, compressor start components or refrigeration system faults.",
  },
  {
    title: "Integrated Fridges",
    text: "Integrated refrigerators are designed to sit within cabinetry and may require additional care during access and diagnosis. Provide the brand and model when booking so the appliance can be assessed for service availability in your area.",
  },
  {
    title: "Bar and Compact Fridges",
    text: "Small refrigerators can experience many of the same problems as full-size appliances, including poor cooling, thermostat faults, start component problems and refrigeration system issues. Repair viability usually depends on the fault, appliance age and replacement cost.",
  },
  {
    title: "Wine Fridges",
    text: "Wine cabinets rely on stable temperature control. Problems may include temperature fluctuations, fan issues, sensor faults, controller problems, excessive condensation or cooling system faults.",
  },
  {
    title: "Household Freezers",
    text: "Freezer repair availability may include upright freezers, chest freezers and fridge-freezer combinations. Common problems include poor freezing, excessive ice, temperature fluctuations, compressor start issues, fan faults and damaged seals.",
  },
];

export const commercialEquipment = [
  "Upright commercial fridges",
  "Underbench refrigerators",
  "Prep fridges",
  "Makeline units",
  "Display refrigerators",
  "Glass-door fridges",
  "Beverage fridges",
  "Commercial freezers",
  "Coolrooms",
  "Walk-in refrigeration systems",
];

export const commercialSegments = [
  {
    title: "Cafe and Restaurant Refrigeration",
    text: "Commercial kitchens depend on reliable refrigeration throughout the working day. A fridge that cannot hold temperature can interrupt food preparation and place stock at risk. Enquiries can be made for prep fridges, underbench units, upright fridges, beverage fridges, commercial freezers and coolrooms where service is supported.",
  },
  {
    title: "Retail and Display Refrigeration",
    text: "Retail refrigeration may include glass-door fridges, display cabinets and beverage units. Problems such as condensation, temperature instability, fan failures or compressor issues should be investigated before they affect stock or customer-facing equipment.",
  },
  {
    title: "Coolroom and Walk-In Refrigeration",
    text: "Depending on local service capabilities, repair support may also be available for coolrooms and walk-in refrigeration systems. Possible faults include inadequate cooling, evaporator icing, fan motor failure, temperature controller faults, refrigeration leaks, condenser problems and compressor issues.",
  },
];

export const brands = [
  "Samsung", "LG", "Fisher & Paykel", "Westinghouse", "Electrolux", "Kelvinator",
  "Hisense", "Haier", "Bosch", "Miele", "Whirlpool", "Mitsubishi Electric",
  "Beko", "Smeg", "Vintec", "Liebherr",
];

export const processSteps = [
  {
    step: "01",
    title: "Tell Us What Is Wrong",
    text: "Provide your suburb or postcode, fridge type, brand, model if available and symptoms. You can also include a photo of the appliance or model label.",
  },
  {
    step: "02",
    title: "Confirm Service Availability",
    text: "Your location and appliance details are used to determine whether the required fridge repair service is available in your area. Commercial equipment may require additional information about the unit and business location.",
  },
  {
    step: "03",
    title: "Diagnose the Fault",
    text: "The technician checks the appliance to identify the actual cause of the problem. A symptom such as poor cooling can be caused by several different components, so diagnosis should come before parts replacement.",
  },
  {
    step: "04",
    title: "Review the Repair Options",
    text: "Once the likely fault is identified, the repair requirements and available options can be explained. If the appliance is not economical to repair, that should also form part of the discussion.",
  },
  {
    step: "05",
    title: "Repair and Test",
    text: "Where the repair proceeds, the appliance should be tested afterwards to check that the original fault has been addressed and the system is operating correctly.",
  },
];

export const diagnosisComponents = [
  { title: "Compressor", text: "Circulates refrigerant through the sealed cooling system. A compressor that does not start is not always faulty; start components, electrical supply and control systems may also need to be checked." },
  { title: "Condenser", text: "Releases heat from the refrigeration system. Restricted airflow or condenser-related problems can reduce cooling efficiency." },
  { title: "Evaporator", text: "Absorbs heat from inside the refrigerator. Heavy frost around the evaporator can restrict airflow and affect cooling." },
  { title: "Evaporator Fan", text: "Helps distribute cold air through the appliance. A failed fan can leave one section cold while another becomes warm." },
  { title: "Condenser Fan", text: "Moves air across the condenser and compressor area on some refrigerators. Fan problems can contribute to overheating or poor performance." },
  { title: "Thermostat", text: "Mechanical or electronic temperature controls influence when the cooling system operates." },
  { title: "Thermistor / Temperature Sensor", text: "Sends temperature information to the appliance controller. Incorrect readings can affect cooling cycles and defrost operation." },
  { title: "Electronic Controller or PCB", text: "Modern refrigerators rely on electronic control boards to manage fans, sensors, compressors and defrost cycles." },
  { title: "Defrost Heater", text: "Helps remove frost from the evaporator. Failure can eventually cause heavy ice build-up and blocked airflow." },
  { title: "Defrost Sensor", text: "Helps regulate the defrost process and temperature." },
  { title: "Door Gasket", text: "A damaged or loose door seal allows warm, humid air into the cabinet, contributing to condensation, ice build-up and longer compressor run times." },
  { title: "Drain System", text: "Blocked defrost drains are a common cause of water inside or underneath a refrigerator." },
  { title: "Start Relay and Overload Protector", text: "Help start and protect the compressor. A faulty start component can sometimes produce clicking sounds or prevent the compressor from operating." },
  { title: "Refrigerant Circuit", text: "The sealed circuit includes the compressor, condenser, evaporator, filter drier and capillary tube or expansion device. Faults within this system require appropriate refrigeration expertise." },
];

export const regasSteps = [
  "Diagnose the cooling fault to determine whether the symptoms actually indicate a refrigerant problem.",
  "Investigate the system for a suspected refrigerant leak where low charge is indicated.",
  "Repair the leak where practical and appropriate.",
  "Evacuate air and moisture from the sealed circuit before recharging.",
  "Recharge the correct refrigerant type and amount according to appliance requirements.",
  "Test operating conditions and cooling performance after the service.",
];

export const worthRepairingFactors = [
  "age of the fridge",
  "original purchase quality",
  "type of fault",
  "cost of the repair",
  "cost of replacement",
  "parts availability",
  "previous repair history",
  "overall appliance condition",
  "energy efficiency",
  "how well the fridge otherwise meets your needs",
];

export const whyChoose = [
  {
    title: "Local Service Availability",
    text: "Start with your suburb or postcode so the relevant service coverage can be checked before you book.",
  },
  {
    title: "Domestic and Commercial Refrigeration",
    text: "Depending on location, support may be available for household fridges and freezers as well as commercial refrigeration equipment.",
  },
  {
    title: "Diagnosis Before Parts Replacement",
    text: "Similar symptoms can have different causes. Proper fault diagnosis helps avoid replacing components based only on assumptions.",
  },
  {
    title: "Major Refrigerator Brands",
    text: "Service availability can be checked for many refrigerator brands commonly used across Australia.",
  },
  {
    title: "Clear Repair Information",
    text: "Where possible, the fault and repair options should be explained before work proceeds.",
  },
  {
    title: "Urgent Appointments Where Available",
    text: "Cooling failures and commercial breakdowns may require priority service. Availability depends on technician scheduling and location.",
  },
];

export const testimonials = [
  { quote: "Insert genuine customer review here.", name: "Customer Name", location: "Suburb, State" },
  { quote: "Insert genuine customer review here.", name: "Customer Name", location: "Suburb, State" },
  { quote: "Insert genuine customer review here.", name: "Customer Name", location: "Suburb, State" },
];

export const serviceAreas = [
  {
    state: "New South Wales",
    region: "Sydney & Greater Sydney",
    suburbs: [
      "Sydney CBD", "Western Sydney", "Inner West", "Hills District", "North Shore",
      "Northern Beaches", "Eastern Suburbs", "South Sydney", "South West Sydney",
    ],
  },
  {
    state: "Victoria",
    region: "Melbourne",
    suburbs: [
      "Melbourne CBD", "Inner Melbourne", "Northern suburbs", "Eastern suburbs",
      "South-eastern suburbs", "Western suburbs",
    ],
  },
  {
    state: "Queensland",
    region: "Brisbane & Surrounding Areas",
    suburbs: [
      "Brisbane Northside", "Brisbane Southside", "Western Brisbane", "Bayside",
      "Logan", "Ipswich", "Moreton Bay",
    ],
  },
  {
    state: "Western Australia",
    region: "Perth",
    suburbs: ["Supported Perth metropolitan locations"],
  },
  {
    state: "South Australia",
    region: "Adelaide",
    suburbs: ["Supported Adelaide metropolitan locations"],
  },
  {
    state: "ACT",
    region: "Canberra",
    suburbs: ["Supported Canberra suburbs"],
  },
];

export const costFactors = [
  "fridge brand and model",
  "type of fault",
  "required parts",
  "labour involved",
  "accessibility",
  "appliance type",
  "service location",
  "refrigeration system",
  "whether sealed-system work is required",
];

export const faqs = [
  {
    q: "How do I find fridge repairs near me?",
    a: "Enter your suburb or postcode along with the fridge brand, model if available and a short description of the problem. This information helps determine whether a suitable fridge repair service is available near you. For urgent faults, mention if the appliance has completely stopped cooling or if food or commercial stock is at risk.",
  },
  {
    q: "Are there fridge repair technicians near me?",
    a: "Technician availability depends on your suburb, appliance type and required service. Enter your location and appliance details to check whether fridge repair help is available in your area.",
  },
  {
    q: "Do you provide fridge repairs across Australia?",
    a: "Fridge repair services can be arranged in supported Australian locations. Coverage varies by city, suburb, appliance type and technician availability. Use the suburb or postcode checker to confirm whether residential or commercial fridge repair service is available in your area.",
  },
  {
    q: "Can I get same-day fridge repairs near me?",
    a: "Same-day fridge repairs may be available depending on your location, when you enquire and technician scheduling. If your fridge has completely stopped cooling or commercial stock is at risk, mention this when booking.",
  },
  {
    q: "How much do fridge repairs near me cost?",
    a: "Fridge repair costs vary depending on the brand, model, fault, required parts, labour and service location. Some issues can be discussed initially over the phone, while others require diagnosis before an accurate repair price can be confirmed.",
  },
  {
    q: "Is my fridge worth repairing?",
    a: "It depends on the fault, appliance age, replacement value, condition and parts availability. Many fridge problems can be repaired economically, while major sealed-system faults or repeated failures may make replacement worth considering. A diagnosis gives you the information needed to make a more informed decision.",
  },
  {
    q: "Why is my fridge not cooling?",
    a: "Possible causes include airflow restrictions, failed fan motors, thermostat problems, faulty sensors, control board faults, excessive frost, compressor start issues or refrigeration system faults. The symptom alone is not enough to identify the correct repair.",
  },
  {
    q: "Why is my freezer cold but the fridge section warm?",
    a: "This often indicates that cold air is not reaching the refrigerator section correctly. Possible causes include an evaporator fan fault, ice around the evaporator, defrost system problems, blocked airflow or an air damper issue.",
  },
  {
    q: "Why is my fridge leaking water?",
    a: "Common causes can include a blocked defrost drain, water supply problem, inlet valve fault, damaged drain components or excessive condensation. The source should be identified before deciding on the repair.",
  },
  {
    q: "Why is there ice building up in my freezer?",
    a: "Excessive ice may be caused by a damaged door gasket, moisture entering the cabinet or a fault within the automatic defrost system. If heavy ice builds around the evaporator, cooling performance can also be affected.",
  },
  {
    q: "Why is my fridge making a clicking or buzzing noise?",
    a: "Clicking can sometimes be associated with compressor start components, while buzzing, grinding or scraping may come from fan motors, vibration or the compressor area. The exact cause depends on when and where the noise occurs.",
  },
  {
    q: "Does a fridge that is not cooling need regassing?",
    a: "Not necessarily. Poor cooling can result from fan problems, sensors, thermostats, defrost faults, airflow restrictions, start components or other issues. If the refrigerant level is low, the sealed system should also be investigated for the underlying cause.",
  },
  {
    q: "Do you provide commercial fridge repairs near me?",
    a: "Commercial refrigeration support may be available in supported locations for equipment such as upright fridges, display units, underbench fridges, prep units, commercial freezers and coolrooms. Provide your postcode and equipment details to check local availability.",
  },
  {
    q: "Can I find freezer repairs near me?",
    a: "Yes, freezer repair services may be available for upright freezers, chest freezers, fridge-freezer combinations and selected commercial freezer equipment depending on your location.",
  },
  {
    q: "What fridge brands can be repaired?",
    a: "Service may be available for many major refrigerator brands sold in Australia, including Samsung, LG, Fisher & Paykel, Westinghouse, Electrolux, Kelvinator, Hisense, Haier, Bosch, Miele, Whirlpool and others. Provide the exact make and model so availability can be confirmed.",
  },
  {
    q: "Can my fridge be repaired at home?",
    a: "Many household fridge problems can be diagnosed and repaired onsite. Some repairs may require specific parts or additional work depending on the appliance and fault. Commercial refrigeration service is also generally carried out at the equipment location where available.",
  },
  {
    q: "How long does fridge repair take?",
    a: "Repair time depends on the fault, access to the affected components and whether parts are available. Some faults may be resolved during the initial visit, while others may require a return appointment after the appropriate part has been sourced.",
  },
  {
    q: "Do fridge repairs come with a warranty?",
    a: "Warranty terms depend on the service provider, parts used and type of repair. Insert your genuine repair and parts warranty information here once confirmed. Do not advertise a warranty period unless it applies consistently to the service being offered.",
  },
  {
    q: "What information should I provide when booking?",
    a: "To help assess the job, provide your suburb or postcode, fridge brand, model number if available, appliance type, a description of the problem and when the fault started. A photo of the appliance and model label can also be useful.",
  },
];

export const applianceOptions = [
  "Domestic Fridge",
  "Domestic Freezer",
  "Commercial Fridge",
  "Commercial Freezer",
  "Coolroom / Walk-In",
  "Other",
];

export const blogPosts = [
  {
    category: "Maintenance Tips",
    title: "5 Signs Your Fridge Needs Professional Repair",
    excerpt:
      "From warm spots to unusual noises, some symptoms are easy to dismiss. Here's what generally warrants a proper inspection rather than a wait-and-see approach.",
  },
  {
    category: "Troubleshooting",
    title: "Fridge Not Cooling? Here's What Could Be Wrong",
    excerpt:
      "A warm fridge doesn't always mean a dead compressor. We walk through the more common causes technicians check first, and why diagnosis comes before parts.",
  },
  {
    category: "Buying Guide",
    title: "Is It Time to Repair or Replace Your Fridge?",
    excerpt:
      "Age isn't the only factor. A look at how fault type, repair cost and appliance condition weigh into a sensible repair-or-replace decision.",
  },
];
