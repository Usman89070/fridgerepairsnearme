// Central content store for the Fridge Repairs Near Me homepage.
// Keeping copy here mirrors the SEO content brief and keeps components lean.

export const enquiryEmail = "info@fridgerepairsnearme.com.au";
export const enquiryEmailHref = `mailto:${enquiryEmail}`;
export const businessAddress = "Sydney, NSW";
export const businessHours = "Open 24/7";

// Home-page sections are anchors prefixed with "/" so they resolve
// correctly from any route (e.g. clicking "Domestic" while on /blog).
export const navLinks = [
  { label: "Domestic", href: "/#domestic" },
  { label: "Commercial", href: "/#commercial" },
  { label: "Locations", href: "/#locations" },
  { label: "How It Works", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact-us" },
];

export const trustBar = [
  "Domestic Fridge Repairs",
  "Commercial Refrigeration Repairs",
  "Major Fridge Brands Covered",
  "Sydney-Wide Service Coverage",
  "Licensed Technician",
  "Urgent Appointments Where Available",
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
    text: "Traditional top-mount and bottom-mount refrigerators remain common throughout Sydney homes. Typical repairs may involve thermostat problems, fan motors, door seals, defrost faults, temperature sensors, compressor start components or refrigeration system faults.",
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
    text: "Start with your Sydney suburb or postcode so the relevant service coverage can be checked before you book.",
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
    text: "Service availability can be checked for many refrigerator brands commonly used across Sydney.",
  },
  {
    title: "Clear Repair Information",
    text: "Where possible, the fault and repair options should be explained before work proceeds.",
  },
  {
    title: "Urgent Appointments Where Available",
    text: "Cooling failures and commercial breakdowns may require priority service. Availability depends on technician scheduling and your Sydney suburb.",
  },
];

export const testimonials = [
  { quote: "Quick communication and a straightforward booking process. The fridge issue was explained clearly and the whole experience felt professional.", name: "Daniel M." },
  { quote: "Very easy to organise a fridge repair. Clear communication from the start and helpful advice about the problem.", name: "Sarah K." },
  { quote: "Professional service and a simple repair process. We appreciated having the fault explained before deciding what to do next.", name: "Michael R." },
  { quote: "Helpful and responsive when our fridge stopped cooling. The booking process was easy and the service was well organised.", name: "Jessica T." },
  { quote: "Good communication and a professional approach. We were kept informed about the fridge problem and the available repair options.", name: "Andrew P." },
  { quote: "Easy to arrange service for our refrigerator and the problem was explained in a way that was easy to understand.", name: "Emily S." },
  { quote: "A smooth experience from enquiry through to the repair assessment. Helpful, organised and professional throughout.", name: "James L." },
  { quote: "Responsive service and clear communication when our fridge developed a cooling problem. The process was simple from the beginning.", name: "Natalie B." },
  { quote: "Professional and easy to deal with. We appreciated the clear explanation of the fridge fault and what was required.", name: "Chris W." },
  { quote: "Straightforward booking, good communication and a professional overall experience.", name: "Rebecca H." },
];

export const serviceAreas = [
  {
    region: "Inner West & Western Sydney",
    suburbs: [
      "Abbotsford", "Alexandria", "Annandale", "Ashbury", "Ashfield", "Auburn", "Balmain",
      "Bardwell Park", "Bankstown", "Bass Hill", "Baulkham Hills", "Belfield", "Belmore",
      "Berala", "Birchgrove", "Birrong", "Breakfast Point", "Burwood", "Cabarita", "Concord",
      "Croydon", "Croydon Park", "Drummoyne", "Dulwich Hill", "Earlwood", "Enfield", "Enmore",
      "Erskineville", "Five Dock", "Forest Lodge", "Glebe", "Granville", "Haberfield",
      "Homebush", "Lakemba", "Leichhardt", "Lewisham", "Liberty Grove", "Lilyfield",
      "Marrickville", "Merrylands", "Newington", "Newtown", "Parramatta", "Petersham",
      "Punchbowl", "Regents Park", "Rhodes", "Rodd Point", "Rosehill", "Rozelle",
      "Russell Lea", "Rydalmere", "Sefton", "Silverwater", "St Peters", "Stanmore",
      "Strathfield", "Summer Hill", "Sydenham", "Telopea", "Tempe", "Wareemba", "Waverton",
      "West Pymble", "West Ryde", "Willoughby", "Wollstonecraft", "Yagoona",
    ],
  },
  {
    region: "Northern Suburbs, North Shore & Northern Beaches",
    suburbs: [
      "Allambie Heights", "Artarmon", "Balgowlah", "Balgowlah Heights", "Beacon Hill",
      "Beecroft", "Belrose", "Brookvale", "Cremorne", "Cromer", "Crows Nest", "Denistone",
      "Dundas", "East Killara", "East Lindfield", "East Ryde", "Eastwood", "Epping",
      "Ermington", "Fairlight", "Forestville", "Frenchs Forest", "Freshwater (Harbord)",
      "Gladesville", "Gordon", "Greenwich", "Henley", "Hunters Hill", "Huntleys Point",
      "Killara", "Killarney Heights", "Kirribilli", "Lane Cove", "Lavender Bay", "Lindfield",
      "Linley Point", "Longueville", "Macquarie Park", "Manly", "Manly Vale", "Marsfield",
      "McMahons Point", "Meadowbank", "Melrose Park", "Middle Cove", "Milsons Point",
      "Mortlake", "Mosman", "Naremburn", "North Balgowlah", "North Epping", "North Ryde",
      "North Sydney", "Northbridge", "Northwood", "Oatlands", "Putney", "Pymble",
      "Queenscliff", "Riverview", "Roseville", "Ryde", "Seaforth", "St Ives", "Tennyson",
    ],
  },
  {
    region: "Southern Sydney, St George & Surrounding Areas",
    suburbs: [
      "Alfords Point", "Allawah", "Arncliffe", "Banksia", "Banksmeadow", "Beverley Park",
      "Beverly Hills", "Bexley", "Blakehurst", "Botany", "Brighton-Le-Sands", "Connells Point",
      "Cronulla", "Dolls Point", "East Hills", "Eastlakes", "Hillsdale", "Hurlstone Park",
      "Hurstville", "Illawong", "Kangaroo Point", "Kareela", "Kensington", "Kingsford",
      "Kingsgrove", "Kogarah", "Kyeemagh", "Kyle Bay", "Little Bay", "Lugarno", "Malabar",
      "Maroubra", "Mascot", "Matraville", "Menai", "Miranda", "Monterey", "Mortdale",
      "Narwee", "Oatley", "Padstow", "Pagewood", "Panania", "Peakhurst", "Penshurst",
      "Port Botany", "Port Hacking", "Ramsgate", "Revesby", "Riverwood", "Rockdale",
      "Roselands", "Sandringham", "Sans Souci", "South Hurstville", "Sylvania",
      "Taren Point", "Turrella", "Undercliffe", "Wiley Park", "Wolli Creek",
    ],
  },
  {
    region: "Sydney CBD, City & Eastern Suburbs",
    suburbs: [
      "Balmoral", "Beaconsfield", "Bellevue Hill", "Bondi", "Bronte", "Coogee", "Daceyville",
      "Darling Point", "Darlinghurst", "Darlington", "Double Bay", "Dover Heights",
      "Eastgardens", "Edgecliff", "Elizabeth Bay", "Millers Point", "Moore Park",
      "Paddington", "Point Piper", "Potts Point", "Pyrmont", "Queens Park", "Randwick",
      "Redfern", "Rose Bay", "Rosebery", "Rushcutters Bay", "South Coogee", "Surry Hills",
      "Tamarama", "Ultimo", "Vaucluse", "Waterloo", "Watsons Bay", "Waverley", "Woollahra",
      "Woolloomooloo", "Zetland",
    ],
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
    q: "How do I find fridge repairs near you in Sydney?",
    a: "Enter your Sydney suburb or postcode along with the fridge brand, model if available and a short description of the problem. This helps determine whether a suitable fridge repair service is available near you. For urgent faults, mention if the appliance has completely stopped cooling or if food or commercial stock is at risk.",
  },
  {
    q: "Are there fridge repair technicians near you in Sydney?",
    a: "Technician availability depends on your Sydney suburb, appliance type and required service. Enter your location and appliance details to check whether fridge repair help is available near you.",
  },
  {
    q: "Which Sydney suburbs do you service?",
    a: "Coverage includes supported suburbs across Sydney's Inner West, Western Sydney, Northern Suburbs, North Shore, Northern Beaches, southern suburbs, Sydney CBD and eastern suburbs. Use your suburb or postcode to confirm current domestic or commercial fridge repair availability near you.",
  },
  {
    q: "Can I get same-day fridge repairs near you?",
    a: "Same-day fridge repairs may be available depending on your Sydney suburb, when you enquire and technician scheduling. If your fridge has completely stopped cooling or commercial stock is at risk, mention this when booking.",
  },
  {
    q: "How much do fridge repairs near you cost?",
    a: "Fridge repair costs in Sydney vary depending on the brand, model, fault, required parts, labour and service location. Some issues can be discussed initially over the phone, while others require diagnosis before an accurate repair price can be confirmed.",
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
    q: "Do you provide commercial fridge repairs near you?",
    a: "Commercial refrigeration support may be available across supported Sydney suburbs for equipment such as upright fridges, display units, underbench fridges, prep units, commercial freezers and coolrooms. Provide your postcode and equipment details to check availability near you.",
  },
  {
    q: "Can I find freezer repairs near you?",
    a: "Yes, freezer repair services may be available across supported Sydney suburbs for upright freezers, chest freezers, fridge-freezer combinations and selected commercial freezer equipment.",
  },
  {
    q: "What fridge brands can be repaired?",
    a: "Service may be available for many major refrigerator brands used across Sydney, including Samsung, LG, Fisher & Paykel, Westinghouse, Electrolux, Kelvinator, Hisense, Haier, Bosch, Miele, Whirlpool and others. Provide the exact make and model so availability can be confirmed.",
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
