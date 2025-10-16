import {
  waterOutline,
  flashOutline,
  optionsOutline,
  logoBitbucket,
  bookOutline,
} from "ionicons/icons";

const baseCleaningData = [
  {
    id: 1,
    title: "Machine-Based Cleaning (Mechanized)",
    description:
      "Heavy-duty scrubbing machine that tackles hard floor stains and reaches into corners using various cleaning heads.",
    image: "/assets/images/apart1 (2).jpg",
  },
  {
    id: 2,
    title: "Hand (Manual) Cleaning",
    description:
      "We scrub, wipe, and polish your home by hand—ensuring precision where machines can’t reach.",
    image: "/assets/images/apart1 (3).jpg",
  },
];

const baseRequirements = [
  { id: 1, label: "Bucket", icon: logoBitbucket },
  { id: 2, label: "Ladder", icon: flashOutline },
  { id: 3, label: "Switch Board", icon: optionsOutline },
  { id: 4, label: "Water", icon: waterOutline },
];

const baseServiceData = [
  {
    title: "Bathroom",
    image: "/assets/images/apart1 (2).jpg",
    points: [
      "Scrubbing of sink, taps, toilet seat, and showerhead",
      "Cleaning and disinfecting of floor & wall tiles",
      "Wiping of geyser exterior (if installed)",
      "Dusting and wiping of mirrors and basic shelves",
    ],
  },
  {
    title: "Living Area",
    image: "/assets/images/apart1 (2).jpg",
    points: [
      "Vacuuming and dusting of sofa sets or chairs (if any)",
      "Wiping of TV unit, shelves, or basic furniture",
      "Cleaning of fans, lights, and electrical switchboards",
      "Deep cleaning of walls, ceiling, windows & sills",
    ],
  },
  {
    title: "Kitchen",
    image: "/assets/images/apart1 (2).jpg",
    points: [
      "Deep cleaning of kitchen platform, sink, and taps",
      "Degreasing of stove area & wall tiles",
      "Cleaning of exhaust fan or chimney exterior (if installed)",
      "Wiping of modular cabinet exteriors and handles",
    ],
  },
];

const baseItems = [
  {
    title: "Dry Dusting",
    description:
      "Removes loose dust and dirt from the surface using a dry cloth or brush. Prepares the material for deeper cleaning steps.",
  },
  {
    title: "Dry Vacuuming",
    description:
      "High-power vacuuming to extract dust, crumbs, and allergens. Covers top, sides, and crevices thoroughly.",
  },
  {
    title: "Shampooing",
    description:
      "Deep cleaning using a fabric-safe shampoo solution. Targets stains, sweat marks, and odor-causing bacteria.",
  },
  {
    title: "Wet Vacuuming",
    description:
      "Extracts moisture, shampoo residue, and deep-seated dirt using a wet vacuum. Ensures hygienic cleaning without soaking.",
  },
  {
    title: "Drying",
    description:
      "Final step to completely dry. Prevents mold or mildew; ensures it’s ready for use.",
  },
];

const baseReviewBreakdown = {
  average: 4.5,
  total: 58000,
  ratings: [
    { stars: 5, count: 25000 },
    { stars: 4, count: 20000 },
    { stars: 3, count: 10000 },
    { stars: 2, count: 2000 },
    { stars: 1, count: 1000 },
  ],
};
const basePrecautions = [
  {
    icon: "/assets/icons/adult.png",
    description: "Only adults (18+) should book and supervise the service.",
  },
  {
    icon: "/assets/icons/children.png",
    description: "Keep children and elderly away from the service area.",
  },
  {
    icon: "/assets/icons/pet.png",
    description: "Ensure pets are secured in a separate space.",
  },

]
export const cleaningDetails: Record<string, any> = {
  // deep clean data
  "unfurnished-apartment": {
    header: { title: "Unfurnished Apartment", subtitle: "Starts At 2,999" },
    cleaningData: baseCleaningData,
    requirements: baseRequirements,
    serviceData: baseServiceData,
  },
  "furnished-apartment": {
    header: { title: "Furnished Apartment", subtitle: "Starts At 2,999" },
    cleaningData: baseCleaningData,
    requirements: baseRequirements,
    serviceData: baseServiceData,
  },
  "semi-furnished-apartment": {
    header: { title: "Semi-Furnished Apartment", subtitle: "Starts At 2,999" },
    cleaningData: baseCleaningData,
    requirements: baseRequirements,
    serviceData: baseServiceData,
  },
  "duplex-bunglow": {
    header: { title: "Duplex Bunglow", subtitle: "Starts At 2,999" },
    cleaningData: baseCleaningData,
    requirements: baseRequirements,
    serviceData: baseServiceData,
  },
  "triplex-bunglow": {
    header: { title: "Triplex Bunglow", subtitle: "Starts At 2,999" },
    cleaningData: baseCleaningData,
    requirements: baseRequirements,
    serviceData: baseServiceData,
  },
  // sofaMAters data
  "matresses-cleaning": {
    header: { title: "Mattresses Cleaning", subtitle: "Say goodbye to dust mites, stains, and odors" },
    serviceData: {
      title: "Mattresses Cleaning",
      image: "/assets/images/mattress.jpg",
      description: "Say goodbye to dust mites, stains, and odors — your mattress deserves care too.",
      rating: 4.4,
      reviews: "3000+ reviews",
      items: baseItems,
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  "carpet-cleaning": {
    header: { title: "Carpet Cleaning", subtitle: "Step onto freshness — deep-cleaned carpets, every time" },
    serviceData: {
      title: "Carpet Cleaning",
      image: "/assets/images/carpet.jpg",
      description: "Deep-cleaned carpets that look, smell, and feel fresh.",
      rating: 4.6,
      reviews: "4000+ reviews",
      items: baseItems,
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  "sofa-cleaning": {
    header: { title: "Sofa Cleaning", subtitle: "Breathe new life into your living room with a clean sofa" },
    serviceData: {
      title: "Sofa Cleaning",
      image: "/assets/images/sofa.jpg",
      description: "Professional sofa cleaning for fabric and leather — fresh, safe, and spotless.",
      rating: 4.7,
      reviews: "5000+ reviews",
      items: baseItems,
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // Commerical space
  "office-cleaning": {
    header: { title: "Office Cleaning", subtitle: "Clean Spaces, Clear Minds. Keep Your Office Sparkling and Productive" },
    serviceData: {
      title: "Office Cleaning",
      image: "/assets/images/office.jpg",
      description: "Removes dust from desks, chairs, workstations, shelves, and electronic equipment.",
      rating: 4.4,
      reviews: "3200+ reviews",
      items: [
        { title: "Dry Dusting", description: "Removes dust from desks, chairs, workstations, shelves, and electronic equipment." },
        { title: "Dry Vacuuming", description: "Vacuuming carpets, rugs, and upholstery to remove dirt, pet hairs, and allergens." },
        { title: "Surface Disinfection", description: "Wiping keyboards, telephones, doorknobs, and other desk surfaces using disinfectants." },
        { title: "Glass & Window Cleaning", description: "Streak-free cleaning of internal glass panels and windows." },
        { title: "Trash Removal", description: "Collecting and replacing trash liners in cabins, pantry, and work areas." },
      ],
    },
    reviewBreakdown: {
      average: 4.5,
      total: 12000,
      ratings: [
        { stars: 5, count: 6000 },
        { stars: 4, count: 4000 },
        { stars: 3, count: 1500 },
        { stars: 2, count: 300 },
        { stars: 1, count: 200 },
      ],
    },
  },
  "retail-store-cleaning": {
    header: { title: "Retail Store Cleaning", subtitle: "Spotless Stores That Impress – Cleanliness Your Customers Notice" },
    serviceData: {
      title: "Retail Store Cleaning",
      image: "/assets/images/shop.jpg",
      description: "Thorough cleaning for display racks, shelves, storage, and retail counters.",
      rating: 4.6,
      reviews: "2800+ reviews",
      items: [
        { title: "Dry Dusting", description: "Dusting of display racks, shelves, signage, and counters." },
        { title: "Dry Vacuuming", description: "Vacuuming of floors, rugs, and corners to remove fine dust and footfall dirt." },
        { title: "Glass & Mirror Cleaning", description: "Streak-free cleaning of mirrors, glass doors, and panels." },
        { title: "Disinfection of High-Touch Areas", description: "Handles, counters, and doorknobs sanitized regularly." },
        { title: "Trash Removal", description: "Trash removal from rooms, billing counters, and storerooms." },
      ],
    },
    reviewBreakdown: {
      average: 4.6,
      total: 10000,
      ratings: [
        { stars: 5, count: 5500 },
        { stars: 4, count: 3000 },
        { stars: 3, count: 1000 },
        { stars: 2, count: 300 },
        { stars: 1, count: 200 },
      ],
    },
  },
  "warehouse-cleaning": {
    header: { title: "Warehouse Cleaning", subtitle: "Heavy-Duty Cleaning for High-Performance Warehouses" },
    serviceData: {
      title: "Warehouse Cleaning",
      image: "/assets/images/warehouse.jpg",
      description: "Specialized cleaning for large storage spaces and machinery.",
      rating: 4.5,
      reviews: "2500+ reviews",
      items: [
        { title: "Dry Dusting", description: "Manual or extended pole dusting of shelves, machinery, and other surfaces." },
        { title: "Dry Vacuuming / Sweeping", description: "Vacuuming or sweeping of large floor spaces to remove debris and dust." },
        { title: "Surface Scrubbing / Deep Cleaning", description: "Machine scrubbing of stained floor areas using industrial-grade cleaners." },
        { title: "High-Touch Area Cleaning", description: "Sanitization of switches, handles, and paperwork counters." },
        { title: "Trash & Waste Disposal", description: "Disposing packaging materials, pallets, and general refuse." },
      ],
    },
    reviewBreakdown: {
      average: 4.4,
      total: 9000,
      ratings: [
        { stars: 5, count: 5000 },
        { stars: 4, count: 2500 },
        { stars: 3, count: 1000 },
        { stars: 2, count: 300 },
        { stars: 1, count: 200 },
      ],
    },
  },
  "gym-fitness-center-cleaning": {
    header: { title: "Gym Cleaning", subtitle: "Strong bodies. Stronger services." },
    serviceData: {
      title: "Gym Cleaning",
      image: "/assets/images/gym.jpg",
      description: "Professional sanitization for gyms, workout machines, and high-contact areas.",
      rating: 4.7,
      reviews: "5000+ reviews",
      items: [
        { title: "Dry Dusting", description: "Dust removal from machines, weight racks, benches, and mirrors." },
        { title: "Dry Vacuuming", description: "Vacuuming of rubber floors, carpets, and corners to remove sweat particles and dust." },
        { title: "Equipment Sanitization", description: "Sanitizing gym equipment, mats, and accessories." },
        { title: "Glass & Mirror Cleaning", description: "Cleaning mirrors and glass dividers." },
        { title: "Odor Control & Drying", description: "Using dehumidifiers to prevent sweat odor." },
      ],
    },
    reviewBreakdown: {
      average: 4.7,
      total: 15000,
      ratings: [
        { stars: 5, count: 9000 },
        { stars: 4, count: 4000 },
        { stars: 3, count: 1500 },
        { stars: 2, count: 300 },
        { stars: 1, count: 200 },
      ],
    },
  },
  // Bathroom
  "basic-bathroom-cleaning": {
    header: {
      title: "Basic Bathroom Cleaning",
      subtitle: "Essential cleaning for bathrooms – Starts at ₹999",
    },
    beforeAfterImages: [
      { before: "/assets/images/washroom.jpg" },
      { before: "/assets/images/sink.jpg" },
      { before: "/assets/images/Tap.jpg" },
      { before: "/assets/images/shower.jpg" },
    ],
    requirements: baseRequirements,
    serviceData: [
      {
        type: "covered",
        title: "What’s Covered",
        items: [
          "Cleaning of mirror and glass surfaces",
          "Scrubbing of toilet bowl and sink",
          "Tap and faucet cleaning",
          "Tile surface spot-cleaning",
          "Floor scrubbing and mopping",
          "Shelf and countertop wiping",
          "Exhaust fan (exterior only) wiping",
          "Removal of basic stains and water marks",
        ],
      },
      {
        type: "notCovered",
        title: "What's Not Covered",
        items: [
          "Deep removal of hard water stains",
          "Pipe, drainage, or plumbing repair",
          "Exhaust fan internal cleaning",
          "Ceiling cleaning",
          "Wall repainting or waterproofing",
          "Mold or fungus treatment",
          "Replacement of broken fixtures",
        ],
      },
    ],
    precautions: basePrecautions,
    reviewBreakdown: {
      average: 4.5,
      total: 5000,
      ratings: [
        { stars: 5, count: 2500 },
        { stars: 4, count: 1500 },
        { stars: 3, count: 700 },
        { stars: 2, count: 200 },
        { stars: 1, count: 100 },
      ],
    },
  },
  "advance-bathroom-cleaning": {
    header: {
      title: "Advance Bathroom Cleaning",
      subtitle: "Deep cleaning with descaling – Starts at ₹1499",
    },
    beforeAfterImages: [
      { before: "/assets/images/washroom.jpg" },
      { before: "/assets/images/sink.jpg" },
      { before: "/assets/images/Tap.jpg" },
      { before: "/assets/images/shower.jpg" },
    ],
    requirements: baseRequirements,
    serviceData: [
      {
        type: "covered",
        title: "What’s Covered",
        items: ["Toilet seat cleaning (inside & outside)",
          "Wash basin, taps, & shower cleaning",
          "Floor & wall tile scrubbing with machin",
          "Removal of hard water stains & limescale",
          "Drain cover cleaning",
          "Complete disinfection & odor removal"
        ],
      },
      {
        type: "notCovered",
        title: "What's Not Covered",
        items: [
          "Plumbing repairs or replacements",
          "Internal pipeline unclogging",
          "Broken tile or structural repairs",
          "Electrical fixture repairs",
          "Removal of permanent, irreparable stains",

        ],
      },
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
  },
  "combo-service": {
    header: {
      title: "Combo Service",
      subtitle: "Bathroom + Minor Repairs – Starts at ₹1999",
    },
    beforeAfterImages: [
      { before: "/assets/images/washroom.jpg" },
      { before: "/assets/images/sink.jpg" },
      { before: "/assets/images/Tap.jpg" },
      { before: "/assets/images/shower.jpg" },
    ],
    requirements: baseRequirements,
    serviceData: [
      {
        type: "covered",
        title: "What’s Covered",
        items: [
          "Cleaning of mirror and glass surfaces",
          "Scrubbing of toilet bowl and sink",
          "Tap and faucet cleaning",
          "Tile surface spot-cleaning",
          "Floor scrubbing and mopping",
          "Shelf and countertop wiping",
          "Exhaust fan (exterior only) wiping",
          "Removal of basic stains and water marks",
        ],
      },
      {
        type: "notCovered",
        title: "What's Not Covered",
        items: [
          "Deep removal of hard water stains",
          "Pipe, drainage, or plumbing repair",
          "Exhaust fan internal cleaning",
          "Ceiling cleaning",
          "Wall repainting or waterproofing",
          "Mold or fungus treatment",
          "Replacement of broken fixtures",
        ],
      },
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
  },
  // Glass&windows
  "interior-glass-cleaning": {
    header: {
      title: "Interior Glass Cleaning",
      subtitle: "Crystal-clear finish for interior glass – Starts at ₹499",
    },
    steps: [
      {
        title: "Surface Inspection",
        description: "Check glass panels, mirrors, or partitions for stains, fingerprints, and scratches"
      },
      {
        title: "Dust & Debris Removal",
        description: "Gently wipe away dust, cobwebs, and loose dirt using a microfiber cloth"
      },
      {
        title: "Stain & Spot Treatment",
        description: "Apply eco-friendly cleaning solution to remove smudges, grease, or water spots"
      },
      {
        title: "Polishing & Shine",
        description: "Buff the glass to a streak-free, crystal-clear finish"
      },
      {
        title: "Final Quality Check",
        description: "Ensure all glass surfaces are spotless and free from residue"
      }
    ],

    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
  },
  "exterior-glass-cleaning": {
    header: {
      title: "Exterior Window Cleaning",
      subtitle: "Spotless clarity for outdoor windows – Starts at ₹699",
    },
    steps: [
      {
        title: "Initial Inspection",
        description: "Check windows for dust, dirt buildup, hard water stains, or bird droppings"
      },
      {
        title: "Pre-Clean Rinse",
        description: "Spray with water to loosen stubborn dirt and debris"
      },
      {
        title: "Deep Cleaning Solution",
        description: "Apply specialized cleaning agents to dissolve stains and grime"
      },
      {
        title: "Scrubbing & Rinsing",
        description: "Use professional tools to scrub and rinse for a spotless finish"
      },
      {
        title: "Final Wipe & Shine",
        description: "Dry and polish glass to ensure streak-free clarity and shine"
      }
    ],

    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
  },

  "skylight-roof-cleaning": {
    header: {
      title: "Skylight / Roof Glass Cleaning",
      subtitle: "Safe and thorough cleaning of skylights – Starts at ₹799",
    },

    steps: [
      {
        title: "Safety & Condition Check",
        description: "Inspect the skylight or roof glass for cracks, dirt buildup, and ensure safe access"
      },
      {
        title: "Dust & Debris Removal",
        description: "Clear away leaves, dust, and loose debris using soft brushes or blowers"
      },
      {
        title: "Deep Cleaning Solution",
        description: "Apply a gentle, non-abrasive cleaner suitable for roof glass"
      },
      {
        title: "Rinse & Streak Removal",
        description: "Thoroughly rinse and wipe to achieve a clear, streak-free surface"
      },
      {
        title: "Final Inspection",
        description: "Ensure glass panels are spotless, damage-free, and allow maximum light in"
      }
    ],

    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
  },
  // post construction
  "site-clearance-service": {
    header: {
      title: "Site Clearance Service",
      subtitle: "Efficient removal of waste and debris – Starts at ₹1299",
    },
    serviceData: [
      {
        type: "offer",
        title: "What We Offer",
        items: [
          "Removal of garbage, debris, and unwanted materials",
          "Clearing weeds, bushes, and overgrown plants",
          "Disposal of old furniture or scrap items left on site"
        ],
      },
    ],
    steps: [
      {
        title: "Site Evaluation",
        description: "Inspect the site to assess the type and volume of waste or unwanted materials"
      },
      {
        title: "Debris & Waste Removal",
        description: "Clear construction waste, vegetation, and unwanted objects from the area"
      },
      {
        title: "Land Leveling",
        description: "Smooth and prepare the surface for further use or construction"
      },
      {
        title: "Safe Disposal",
        description: "Transport and dispose of waste in compliance with safety and environmental rules"
      },
      {
        title: "Final Inspection",
        description: "Ensure the site is completely cleared and ready for the next stage of work"
      }
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: true
  },
  "ground-preparation-service": {
    header: {
      title: "Ground Preparation Service",
      subtitle: "Professional soil preparation and leveling – Starts at ₹1499",
    },
    serviceData: [
      {
        type: "offer",
        title: "What We Offer",
        items: [
          "Leveling uneven soil (basic manual leveling)",
          "Removal of rocks, stones, and rubble",
          "Clearing drainage lines for water flow"
        ],
      },
    ],
    steps: [
      {
        title: "Site Survey",
        description: "Inspect the soil and the land to understand soil type, slope, and surface condition"
      },
      {
        title: "Clearing & Cleaning",
        description: "Remove vegetation, stones, and debris to create a clean working area"
      },
      {
        title: "Soil Treatment",
        description: "Manage soil quality through leveling, compaction, or adding stabilizers"
      },
      {
        title: "Surface Leveling",
        description: "Ensure the ground is even and stable for the intended use"
      },
      {
        title: "Final Readiness Check",
        description: "Confirm the site is fully prepared for construction, landscaping, or planting"
      }
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: true
  },
  // disinfection sanitization
  "house-disinfection-and-sanitization": {
    header: {
      title: "House Disinfection & Sanitization",
      subtitle: "Thorough home sanitization for a safe and healthy living space",
    },

    steps: [
      {
        title: "Area Assessment",
        description: "Inspect the property to identify high-touch and high-risk areas"
      },
      {
        title: "Surface Cleaning",
        description: "Remove dust, dirt, and debris from all surfaces before disinfection"
      },
      {
        title: "Disinfection Process",
        description: "Apply certified disinfectants to kill viruses, bacteria, and harmful microorganisms"
      },
      {
        title: "Deep Sanitization",
        description: "Use advanced techniques like misting or spraying for complete coverage"
      },
      {
        title: "Final Safety Check",
        description: "Ensure the home is safe, odor-free, and ready for use"
      }
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },
  "office-disinfection-and-sanitization": {
    header: {
      title: "Office Disinfection & Sanitization",
      subtitle: "Comprehensive sanitization for a safe and healthy workplace",
    },
    steps: [
      {
        title: "Workplace Survey",
        description: "Inspect the office space, identifying shared areas, workstations, and high-touch surfaces"
      },
      {
        title: "Pre-Cleaning",
        description: "Clear dust, dirt, and waste from desks, floors, and common zones"
      },
      {
        title: "Targeted Disinfection",
        description: "Sanitize high-contact points like keyboards, doorknobs, switches, and meeting tables"
      },
      {
        title: "Full-Area Sanitization",
        description: "Use approved disinfectants through spraying or misting for complete coverage"
      },
      {
        title: "Post-Service Verification",
        description: "Ensure all areas are germ-free, safe, and ready for staff use"
      }
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },
  // water tank dta
  "water-tank-sintex-installation": {
    header: {
      title: "Water Tank /Sintex Installation",
      subtitle: "Professional installation for reliable water storage solutions",
    },
    steps: [
      {
        title: "Site Assessment",
        description: "Check the location, space availability, and water inlet/outlet requirements."
      },
      {
        title: "Base Preparation",
        description: "Level and prepare a strong base to support the tank's weight when filled."
      },
      {
        title: "Tank Positioning",
        description: "Place the tank securely, ensuring correct alignment for pipe connections."
      },
      {
        title: "Plumbing & Fittings",
        description: "Install inlet, outlet, and overflow pipes with leak-proof fittings."
      },
      {
        title: "Final Inspection",
        description: "Test the installation for stability and water flow efficiency."
      }
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },
  "water-tank-sintex-service-repair": {
    header: {
      title: "Water Tank/Sintex Service/Repair",
      subtitle: "Expert repair and maintenance to extend the life of your water tank",
    },
    steps: [
      {
        title: "Inspection & Issue Check",
        description: "Examine the tank for cracks, leaks, blockages, or damaged fittings."
      },
      {
        title: "Drain & Clean",
        description: "Empty the tank and remove dirt, algae, and sediment buildup."
      },
      {
        title: "Repair & Sealing",
        description: "Fix cracks, replace faulty pipes, and apply sealants where needed."
      },
      {
        title: "Fittings & Connections",
        description: "Check and replace damaged inlet, outlet, and overflow fittings."
      },
      {
        title: "Final Testing",
        description: "Refill and test for leaks, ensuring water quality and flow."
      }
    ],
    precautions: basePrecautions,
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },
  // Kitchen&chimney data
  "chimney-cleaning": {
    header: {
      title: "Chimney Cleaning",
      subtitle: "Professional chimney maintenance – Starts at ₹1,199",
    },
    requirements: baseRequirements,
    steps: [
      {
        title: "Filter Detachment",
        description: "Gently detach filters from the filter unit for a detailed cleaning process."
      },
      {
        title: "Outer Surface Treatment",
        description: "Apply targeted steam treatment to dissolve tough grease, grime, and surface buildup on the chimney body."
      },
      {
        title: "Intensive Filter Purge",
        description: "Deep cleanse the filter using industry-grade degreasers and high-temperature steam to eliminate stubborn residue."
      },
      {
        title: "Finishing Touch",
        description: "Polish all cleaned areas with a damp microfiber cloth, leaving the chimney spotless and refreshed."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },
  "complete-kitchen-cleaning": {
    header: {
      title: "Complete Kitchen Cleaning",
      subtitle: "Comprehensive kitchen deep clean – Starts at ₹1,499",
    },
    requirements: baseRequirements,
    steps: [
      {
        title: "Area Prep & Declutter",
        description: "Remove loose items and prep all zones to ensure an organized and efficient cleaning flow."
      },
      {
        title: "Appliance Surface Sanitization",
        description: "Wipe and disinfect exterior surfaces of kitchen appliances including oven, fridge, microwave, and stove."
      },
      {
        title: "Countertops & Cabinets Cleanse",
        description: "Degrease and scrub countertops, cabinet doors, and handles to remove stains, oil, and food buildup."
      },
      {
        title: "Sink & Tap Descaling",
        description: "Deep clean the sink and faucets using limescale removers and sanitizers to restore shine."
      },
      {
        title: "Floor Mopping & Scrubbing",
        description: "Scrub and mop the kitchen floor with disinfectant to eliminate odils, grease, and bacteria."
      },
      {
        title: "Final Inspection & Finishing",
        description: "Do a final check and polish all surfaces with microfiber cloths for a sparkling, hygienic finish."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },
  "stove-chimney-cleaning": {
    header: {
      title: "Stove & Chimney Cleaning",
      subtitle: "Full kitchen restoration service – Starts at ₹1,499",
    },
    requirements: baseRequirements,
    steps: [
      {
        title: "Initial Setup",
        description: "Secure the area by covering nearby surfaces and preparing tools for mess-free service."
      },
      {
        title: "Filter & Grate Removal",
        description: "Detach chimney filters and stove grates carefully for in-depth servicing."
      },
      {
        title: "Degreasing Treatment",
        description: "Apply specialized cleaning agents to break down tough oil, soot, and grease from all components."
      },
      {
        title: "Steam Cleaning Process",
        description: "Use high-temperature steam machines to sanitize both the chimney interior and stove surface effectively."
      },
      {
        title: "Surface Wipe Down",
        description: "Thoroughly wipe all surfaces with microfiber cloths for a polished, fresh look."
      },
      {
        title: "Reassembly & Final Check",
        description: "Reinstall cleaned parts and perform a final inspection to ensure everything is spotless and fully functional."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,
    isPostConstruction: false
  },

  // gardening data
  "gardening-setup-landscaping": {
    header: {
      title: "Gardening Setup & Landscaping",
      subtitle: "Professional garden design and setup – Starts at ₹2,499"
    },
    gardenImages: [
      { image: "/assets/images/gardening.jpg" },
      { image: "/assets/images/gardening.jpg" },

    ],
    steps: [
      {
        title: "Site Assessment",
        description: "Evaluate the available space, soil condition, sunlight exposure, and water access to plan the garden layout."
      },
      {
        title: "Design Planning",
        description: "Create a landscaping design including plant selection, pathways, borders, and decorative elements."
      },
      {
        title: "Soil Preparation",
        description: "Test soil quality, improve soil nutrition with organic matter and fertilizers for optimal plant growth."
      },
      {
        title: "Installation & Planting",
        description: "Set up garden beds, install drainage systems, plant selected flora, and install decorative or functional features."
      },
      {
        title: "Maintenance Setup",
        description: "Install drip or sprinkler systems, add mulch to retain moisture, and provide guidance for ongoing care."
      },
      {
        title: "Final Touch",
        description: "Clean up the work area, provide care instructions, and ensure all elements are properly established."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,

  },

  "planting-transplanting": {
    header: {
      title: "Planting and Transplanting",
      subtitle: "Expert plant installation service – Starts at ₹899"
    },
    gardenImages: [
      { image: "/assets/images/planting1.jpg" },
      { image: "/assets/images/planting.jpg" },

    ],
    steps: [
      {
        title: "Site & Plant Assessment",
        description: "Identify the right locations based on plant type, sunlight, soil, and watering needs."
      },
      {
        title: "Soil Preparation",
        description: "Prepare soil with proper nutrients and fertilizer to ensure plant health."
      },
      {
        title: "Careful Transplanting",
        description: "Carefully transplant or plant items in new location, maintaining root integrity and proper spacing."
      },
      {
        title: "Watering & Support",
        description: "Provide immediate water after transplanting and install stakes or support systems as needed."
      },
      {
        title: "Aftercare",
        description: "Monitor growth, maintain soil moisture, and protect from pests for healthy transition."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,

  },

  "trimming-pruning": {
    header: {
      title: "Trimming and Pruning",
      subtitle: "Professional plant maintenance – Starts at ₹699"
    },
    gardenImages: [
      { image: "/assets/images/trimming.jpg" },
      { image: "/assets/images/trimming1.jpg" },

    ],
    steps: [
      {
        title: "Plant Assessment",
        description: "Identify branches, shoots, or leaves that need trimming for plant health or safety."
      },
      {
        title: "Selective Cutting",
        description: "Trim dead, diseased, or overgrown parts to encourage healthy growth."
      },
      {
        title: "Shaping",
        description: "Shape plants, shrubs, or trees to maintain aesthetic appeal and structural integrity."
      },
      {
        title: "Seasonal Care",
        description: "Perform pruning at the right season to avoid stress on plants and promote new growth."
      },
      {
        title: "Waste Removal",
        description: "Clear and dispose of trimmed branches and debris to keep the garden clean."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,

  },

  "irrigation-system-service": {
    header: {
      title: "Irrigation System Service",
      subtitle: "Complete watering solution setup – Starts at ₹1,899"
    },
    gardenImages: [
      { image: "/assets/images/irrigation1.jpg" },
      { image: "/assets/images/irrigation2.jpg" },

    ],
    steps: [
      {
        title: "System Inspection",
        description: "Check sprinklers, timers, and drip lines for leaks, clogs, or damage."
      },
      {
        title: "Component Maintenance",
        description: "Clean filters, adjust sprinkler heads to ensure even water flow."
      },
      {
        title: "Timer & Programming",
        description: "Set or replace timers, check, or optimize watering schedule."
      },
      {
        title: "Water Flow Testing",
        description: "Test proper water pressure and flow for efficient coverage."
      },
      {
        title: "System Optimization",
        description: "Calibrate timers and schedule to conserve water while ensuring proper plant hydration."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,

  },

  "garden-cleaning-waste-removal": {
    header: {
      title: "Garden Cleaning & Waste Removal",
      subtitle: "Complete garden cleanup service – Starts at ₹799"
    },
    gardenImages: [
      { image: "/assets/images/gardenClean.jpg" },
      { image: "/assets/images/garden-clean1.jpg" },

    ],
    steps: [
      {
        title: "Site Inspection",
        description: "Assess the garden for fallen leaves, debris, and unwanted vegetation."
      },
      {
        title: "Waste Collection",
        description: "Remove dead plants, fallen branches, and excess organic waste."
      },
      {
        title: "Lawn & Path Cleaning",
        description: "Clear pathways, lawns, and surrounding areas for a tidy appearance."
      },
      {
        title: "Composting Setup",
        description: "Organize collected waste in an eco-friendly manner."
      },
      {
        title: "Final Touch-Up",
        description: "Sweep the garden for clean, organized, and fresh look."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,

  },

  "indoor-balcony-gardening": {
    header: {
      title: "Indoor & Balcony Gardening",
      subtitle: "Space-optimized garden solutions – Starts at ₹1,299"
    },
    gardenImages: [
      { image: "/assets/images/balcony.jpg.jpg" },
      { image: "/assets/images/balcony.jpg.jpg" },
    ],
    steps: [
      {
        title: "Space Assessment",
        description: "Evaluate available space and suitable spots for plant placement."
      },
      {
        title: "Plant Selection",
        description: "Choose plants suited for indoor or balcony conditions based on light, environment, and preferences."
      },
      {
        title: "Container Setup",
        description: "Set up pots, soil, and arrangements for healthy plant growth."
      },
      {
        title: "Watering & Care Setup",
        description: "Set up a watering schedule and maintenance routine for the indoor garden."
      },
      {
        title: "Final Styling",
        description: "Arrange the space with decorative planters and finishing touches for an appealing look."
      }
    ],
    reviewBreakdown: baseReviewBreakdown,

  },
  // electrical fan
  "fan-installtion-repair": {
    header: {
      title: "Fan Installation/Repair",
      subtitle: "Secure and smooth fan operation – Starts at ₹249"
    },
    steps: [
      {
        title: "Assessment & Safety Check",
        description: "We inspect the fan or installation point and ensure all electrical connections are safe."
      },
      {
        title: "Installation or Fault Diagnosis",
        description: "For new fans, we mark and prepare mounting points. For repairs, we identify the issue."
      },
      {
        title: "Fixing & Wiring",
        description: "The fan is mounted or repaired, with proper wiring and secure connections."
      },
      {
        title: "Testing & Final Setup",
        description: "We test speed control, balance, and smooth operation before completing the job."
      }
    ],
    customerAdvisory: {
      description: "Our professional will install or repair your ceiling/wall fan with proper wiring, secure mounting, and smooth operation. During repair, faulty parts will be checked and replaced if necessary for safe performance.",
      note: "Required products (fan, spare parts, mounting accessories, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "smart-eco-friendly-fan": {
    header: {
      title: "Smart Eco-Friendly Fan",
      subtitle: "Energy-efficient smart fan installation – Starts at ₹349"
    },

    steps: [
      {
        title: "Site Survey & Power Check",
        description: "We inspect the installation area and ensure a safe power supply for your smart eco-friendly fan."
      },
      {
        title: "Mounting & Secure Fitting",
        description: "The fan is mounted with eco-friendly practices, ensuring minimal noise and perfect balance."
      },
      {
        title: "Smart Feature Setup",
        description: "We connect the fan to Wi-Fi/Bluetooth and configure remote or app controls."
      },
      {
        title: "Performance & Energy Test",
        description: "We test speed levels, energy efficiency, and smart functions to ensure optimal performance."
      }
    ],
    customerAdvisory: {

      description: "Our expert will set up your smart, energy-saving fan with proper wiring, secure fitting, and app/remote connectivity for hassle-free use. Post-installation, we ensure smooth operation and verify smart functions.",
      note: "Required products (fan, remote, mounting kit, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "exhaust-fan-ventilation-fan": {
    header: {
      title: "Exhaust Fan/Ventilation Fan",
      subtitle: "Efficient airflow setup – Starts at ₹299"
    },
    steps: [
      {
        title: "Site Assessment & Power Check",
        description: "We evaluate the installation spot and verify proper electrical connections for safe operation."
      },
      {
        title: "Mounting & Secure Fitting",
        description: "The fan is installed with firm hold, ensuring smooth airflow and minimal vibration."
      },
      {
        title: "Wiring & Functional Setup",
        description: "We connect the fan to the power source and set up switches or smart control if required."
      },
      {
        title: "Testing & Safety Check",
        description: "We test airflow efficiency, noise levels, and ensure all safety measures are met."
      }
    ],
    customerAdvisory: {

      icon1: bookOutline,
      description: "Our professional securely installs or repairs exhaust/ventilation fans to improve airflow and remove unwanted odors, heat, or moisture. We ensure safe wiring, proper fitting, and smooth functioning.",
      note: "Required products (fan, fittings, screws, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // switch board dta
  "modern-switchboard-and-plug-points-installation": {
    header: {
      title: "Modern switchboard and plug points installation",
      subtitle: "Secure and convenient installation – Starts at ₹299"
    },

    steps: [
      {
        title: "Requirement & Layout Planning",
        description: "We assess your needs and plan the best placement for switchboards and plug points for convenience and safety."
      },
      {
        title: "Wiring & Circuit Setup",
        description: "High-quality wiring is connected to the main power source, ensuring proper load distribution."
      },
      {
        title: "Installation & Secure Mounting",
        description: "Switchboards and plug points are fitted firmly with durable, modern materials."
      },
      {
        title: "Safety Testing & Power On",
        description: "We check voltage, grounding, and functionality before handing over a fully operational setup."
      }
    ],

    customerAdvisory: {

      description: "Our professional installs modern switchboards and plug points with secure wiring and proper alignment for safe and convenient usage. Every installation is done with precision to ensure durability and safety.",
      note: "Required products (switchboard, plug points, wiring, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  "switch-switch-board-repair-replace": {
    header: {
      title: "Switch/Switch Board Repair & Replace",
      subtitle: "Safe and reliable switchboard servicing – Starts at ₹249"
    },

    steps: [
      {
        title: "Problem Check & Safety Off",
        description: "We inspect the faulty switch or board and cut off the power supply for safety."
      },
      {
        title: "Fault Diagnosis",
        description: "Our expert identifies wiring issues, loose connections, or damaged parts."
      },
      {
        title: "Repair or Replacement",
        description: "Depending on the condition, we repair the switch/board or replace it with a new one."
      },
      {
        title: "Testing & Power Restore",
        description: "We test functionality, ensure safety compliance, and restore power for smooth usage."
      }
    ],

    customerAdvisory: {
      description: "Our professional inspects faulty switches or damaged switchboards and carries out safe repairs or complete replacement with proper wiring and secure fitting.",
      note: "Required products (switches, switchboard, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  "plug-point-replacement": {
    header: {
      title: "Plug point replacement",
      subtitle: "Safe and durable plug point servicing – Starts at ₹199"
    },
    steps: [
      {
        title: "Inspection & Safety Measures",
        description: "We check the plug point condition and switch off the power supply for safety."
      },
      {
        title: "Damage Assessment",
        description: "Our technician examines for burnt marks, loose wiring, or broken fittings."
      },
      {
        title: "Replacement with Quality Parts",
        description: "We remove the faulty plug point and install a high-quality, durable replacement."
      },
      {
        title: "Testing & Final Safety Check",
        description: "We test the new plug point, ensure proper wiring, and confirm safe operation."
      }
    ],
    customerAdvisory: {
      description: "Our professional safely replaces old or damaged plug points with secure wiring and proper fitting to ensure safe electricity usage.",
      note: "Required products (plug point, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // light data
  "light-installation": {
    header: {
      title: "Light Installation",
      subtitle: "Professional ceiling, wall, or decorative light setup – Starts at ₹299"
    },
    steps: [
      {
        title: "Requirement & Placement Check",
        description: "We discuss the type of light (LED, tube light, chandelier, etc.) and choose the best placement for illumination."
      },
      {
        title: "Power Supply Off",
        description: "The power is switched off to ensure complete safety during installation."
      },
      {
        title: "Secure Mounting & Wiring",
        description: "We mount the light fixture securely, connect wires properly, and ensure safe fittings."
      },
      {
        title: "Testing & Adjustment",
        description: "We turn on the power, check brightness, and make any necessary adjustments for perfect lighting."
      }
    ],

    customerAdvisory: {

      description: "Our professional safely installs ceiling, wall, or decorative lights with proper wiring and secure fittings to ensure long-lasting performance.",
      note: "Required products (lights, holders, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  "smart-light-installation": {
    header: {
      title: "Smart/Wi-Fi Light Installation",
      subtitle: "Seamless smart lighting setup with app & voice control – Starts at ₹399"
    },

    steps: [
      {
        title: "Requirement & Placement Check",
        description: "We discuss the type of smart/Wi-Fi light (bulb, strip, panel, etc.) and choose the best placement for coverage and connectivity."
      },
      {
        title: "Power Supply Off",
        description: "The power is switched off to ensure complete safety during installation."
      },
      {
        title: "Secure Mounting & Wiring",
        description: "We mount the smart light fixture securely, connect the wiring properly, and ensure safe fittings."
      },
      {
        title: "Connectivity & Setup",
        description: "We connect the light to your Wi-Fi network or hub, configure the mobile app, and pair it with voice assistants if required."
      },
      {
        title: "Testing & Adjustment",
        description: "We turn on the power, test brightness, color modes, and automation features, and make adjustments for smooth operation."
      }
    ],

    customerAdvisory: {

      description: "Our professional safely installs smart/Wi-Fi lights (bulbs, panels, or strips) with proper wiring, secure fittings, and app connectivity for seamless control and long-lasting performance.",
      note: "Required products (smart lights, holders, fittings, Wi-Fi access, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  // doorbell data
  "door-bell-installation-repair": {
    header: {
      title: "Door Bell Installation/Repair",
      subtitle: "Reliable and secure door bell setup or repair – Starts at ₹199"
    },

    steps: [
      {
        title: "Safety Precaution",
        description: "Switch off the power supply to avoid any electric shocks while working on the doorbell circuit."
      },
      {
        title: "Inspection",
        description: "Check the wiring, button switch, and bell unit to identify faults or confirm installation points for a new setup."
      },
      {
        title: "Installation/Repair",
        description: "For installation: Mount the doorbell button at a convenient location and connect wiring securely. For repair: Replace faulty parts and fix wiring issues."
      },
      {
        title: "Power On & Testing",
        description: "Turn on the power and press the doorbell button to ensure proper functionality without any delay or crackling noise."
      },
      {
        title: "Final Touch",
        description: "Secure loose wiring and ensure weatherproofing for outdoor components."
      }
    ],

    customerAdvisory: {

      description: "Our professional installs standard doorbells and repairs faulty ones with safe wiring and secure mounting. Proper placement ensures durability and reliable operation.",
      note: "Required products (doorbell, switch, wiring, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  "smart-wifi-doorbell-setup": {
    header: {
      title: "Smart (Wi-Fi) Door Bell Setup",
      subtitle: "Smart video/audio doorbell installation with app control – Starts at ₹349"
    },

    steps: [
      {
        title: "Safety Precaution",
        description: "Switch off the main power supply before starting installation. Use insulated tools and check for proper voltage levels for safety."
      },
      {
        title: "Inspection",
        description: "Check Wi-Fi connectivity strength at the installation point. Inspect mounting location for visibility, height, and power supply availability."
      },
      {
        title: "Installation/Setup",
        description: "Mount the smart doorbell camera unit at the chosen location and install the base frame. Connect wiring and configure the device with the mobile app."
      },
      {
        title: "Power On & Testing",
        description: "Turn on power and test live streaming – check for alerts, video feed, and two-way communication on the mobile app."
      },
      {
        title: "Final Touch",
        description: "Secure wiring neatly, ensuring a clean finish. Provide instructions to the user on using the app, setting up notifications, and maintaining the device."
      }
    ],

    customerAdvisory: {

      description: "Our professional installs your smart/Wi-Fi doorbell safely, connects it with the mobile app, and ensures proper live video/audio functionality.",
      note: "Required devices and accessories (smart doorbell, Wi-Fi access, mobile app, wiring, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  "video-audio-doorbell-installation": {
    header: {
      title: "Video/Audio Door Bell Installation",
      subtitle: "Secure communication with video/audio doorbell setup – Starts at ₹299"
    },
    steps: [
      {
        title: "Safety Precaution",
        description: "Switch off the main power supply before starting the installation. Use insulated tools to avoid electrical hazards."
      },
      {
        title: "Inspection",
        description: "Check Wi-Fi connectivity and power availability. Verify wiring (wired system) or battery status (for wireless models)."
      },
      {
        title: "Installation/Setup",
        description: "Mount the video/audio doorbell securely. For wired devices: connect wiring. For wireless: pair with Wi-Fi for connectivity."
      },
      {
        title: "Power On & Testing",
        description: "Test doorbell functionality – two-way communication, video clarity, and audio responsiveness. Configure alerts if app-enabled."
      },
      {
        title: "Final Touch",
        description: "Neatly conceal wires and finish the frame for a clean look. Provide instructions for usage and maintenance of camera components."
      }
    ],
    customerAdvisory: {
      description: "Our professional installs and sets up video/audio doorbells with proper wiring, secure mounting, and connectivity. We ensure reliable audio/video quality and durability.",
      note: "Required products (video/audio doorbell, Wi-Fi access, batteries, wiring, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // tv data
  // "tv-service-repair": {
  //   header: {
  //     title: "TV Service / Repair",
  //     subtitle: "Professional TV diagnosis and repair – Starts at ₹299"
  //   },
  //   steps: [
  //     {
  //       title: "Inspection & Cost Estimate",
  //       description: "We check your TV to identify the fault and provide a transparent repair cost for your approval."
  //     },
  //     {
  //       title: "Approval or Expert Advice",
  //       description: "Repairs start only after your go-ahead. If you’re unsure, our TV specialist can help you decide."
  //     },
  //     {
  //       title: "Repair & Genuine Parts",
  //       description: "If replacements are needed, we use authentic, high-quality components at fixed prices."
  //     },
  //     {
  //       title: "Warranty Coverage",
  //       description: "After the repair, your TV is protected under our 180-day service warranty for peace of mind."
  //     }
  //   ],
  //   customerAdvisory: {
  //     description: "Our professional technicians provide reliable TV repairs using genuine spare parts, safe handling, and expert guidance to restore your TV’s performance.",
  //     note: "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items."
  //   },
  //   reviewBreakdown: baseReviewBreakdown
  // },
  // "tv-installation": {
  //   header: {
  //     title: "TV Installation",
  //     subtitle: "Secure wall/stand mounting with warranty – Starts at ₹299"
  //   },
  //   steps: [
  //     {
  //       title: "Site Check & Quote",
  //       description: "We assess your wall or stand setup and provide a clear installation cost."
  //     },
  //     {
  //       title: "Approval or Expert Suggestion",
  //       description: "Work begins after your confirmation. Need placement guidance? Our installer will recommend the best viewing position."
  //     },
  //     {
  //       title: "Installation & Quality Accessories",
  //       description: "We install your TV securely using genuine brackets, mounts, and cables at fixed rates."
  //     },
  //     {
  //       title: "Warranty Assurance",
  //       description: "Your installation comes with a 180-day service warranty for secure and reliable setup."
  //     }
  //   ],
  //   customerAdvisory: {
  //     description: "Our professional securely installs TVs on walls or stands using quality accessories and safe mounting practices. Proper alignment ensures the best viewing experience.",
  //     note: "Required accessories (brackets, mounts, cables, etc.) must be provided by you. Our professional will not carry these items."
  //   },

  //   reviewBreakdown: baseReviewBreakdown
  // },

  // tv data
  "tv-service-repair": {
    header: {
      title: "TV Service / Repair",
      subtitle: "Professional TV diagnosis and repair – Starts at ₹299"
    },
    steps: [
      {
        title: "Inspection & Cost Estimate",
        description: "We check your TV to identify the fault and provide a transparent repair cost for your approval."
      },
      {
        title: "Approval or Expert Advice",
        description: "Repairs start only after your go-ahead. If you’re unsure, our TV specialist can help you decide."
      },
      {
        title: "Repair & Genuine Parts",
        description: "If replacements are needed, we use authentic, high-quality components at fixed prices."
      },
      {
        title: "Warranty Coverage",
        description: "After the repair, your TV is protected under our 180-day service warranty for peace of mind."
      }
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Display & Screen Issues",
          "Sound Issues",
          "Power & Boot Issues",
          "Connectivity & Signal Issues",
          "Physical Damage & Other Issues",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],

    customerAdvisory: {
      description: "Our professional technicians provide reliable TV repairs using genuine spare parts, safe handling, and expert guidance to restore your TV’s performance.",
      note: "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "tv-installation": {
    header: {
      title: "TV Installation",
      subtitle: "Secure wall/stand mounting with warranty – Starts at ₹299"
    },
    steps: [
      {
        title: "Site Check & Quote",
        description: "We assess your wall or stand setup and provide a clear installation cost."
      },
      {
        title: "Approval or Expert Suggestion",
        description: "Work begins after your confirmation. Need placement guidance? Our installer will recommend the best viewing position."
      },
      {
        title: "Installation & Quality Accessories",
        description: "We install your TV securely using genuine brackets, mounts, and cables at fixed rates."
      },
      {
        title: "Warranty Assurance",
        description: "Your installation comes with a 180-day service warranty for secure and reliable setup."
      }
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Display & Screen Issues",
          "Sound Issues",
          "Power & Boot Issues",
          "Connectivity & Signal Issues",
          "Physical Damage & Other Issues",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description: "Our professional securely installs TVs on walls or stands using quality accessories and safe mounting practices. Proper alignment ensures the best viewing experience.",
      note: "Required accessories (brackets, mounts, cables, etc.) must be provided by you. Our professional will not carry these items."
    }, reviewBreakdown: baseReviewBreakdown
  },
  // mcb data
  "mcb-installation-repair": {
    header: {
      title: "MCB Installation / Repair",
      subtitle: "Reliable installation and repair of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Safety First",
        description: "Turn off the main power supply to ensure safe handling during installation or repair."
      },
      {
        title: "Assessment",
        description: "Check the electrical load requirements and choose the correct MCB type and rating."
      },
      {
        title: "Installation/Replacement",
        description: "Mount the MCB securely in the distribution box and connect the input/output wires properly."
      },
      {
        title: "Repair/Adjustment",
        description: "For repairs, inspect for faults like tripping issues, loose wiring, or burnt contacts, and fix/replace as needed."
      },
      {
        title: "Testing & Verification",
        description: "Switch on the power, test the circuit for proper operation, and ensure the MCB trips only under fault conditions."
      }
    ],
    customerAdvisory: {

      description: "Our expert installs or repairs Miniature Circuit Breakers (MCB) to ensure safe and reliable electrical protection against overloads and short circuits. Proper fitting and secure wiring are carried out for long-lasting performance.",
      note: "Required products (MCBs, wires, accessories, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "mcb-replacement": {
    header: {
      title: "MCB Replacement",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },

    steps: [
      {
        title: "Safety First",
        description: "Switch off the main power supply before starting the replacement to prevent any electrical hazards."
      },
      {
        title: "Removal of Old MCB",
        description: "Carefully disconnect the wires and unmount the faulty MCB from the distribution box."
      },
      {
        title: "Selection of New MCB",
        description: "Choose an MCB with the correct amperage and specifications matching the circuit requirements."
      },
      {
        title: "Installation",
        description: "Securely fix the new MCB in place and connect the wires to the appropriate terminals."
      },
      {
        title: "Testing & Verification",
        description: "Turn the power back on, operate the circuit, and ensure the MCB operates and trips correctly under fault conditions."
      }
    ],

    customerAdvisory: {

      description: "Our professional safely removes the faulty Miniature Circuit Breaker (MCB) and installs a new one to restore proper electrical safety and performance. All connections are securely fitted to prevent hazards.",
      note: "The new MCB and required accessories must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },
  // wiring data
  "installation-wire-per-4-5-meter": {
    header: {
      title: "Installation Wire (per 4–5 meter)",
      subtitle: "Safe and reliable wiring setup – Starts at ₹___"
    },

    steps: [
      {
        title: "Requirement Assessment",
        description: "We measure and confirm the exact length of wire needed for the installation."
      },
      {
        title: "Power Supply Off",
        description: "Electric supply is switched off to ensure safe handling."
      },
      {
        title: "Wire Laying & Routing",
        description: "The wire is laid neatly through conduits or safe pathways to avoid damage and hazards."
      },
      {
        title: "Secure Connections",
        description: "Both ends are connected firmly to the respective points (switchboard, appliance, or fixture)."
      },
      {
        title: "Testing & Final Check",
        description: "We switch on the power, test connectivity, and ensure there are no loose connections."
      }
    ],

    customerAdvisory: {

      description: "Our professional installs high-quality wiring for safe power connections, ensuring proper insulation, neat alignment, and secure fittings for durability.",
      note: "Required products (wires, clips, conduits, etc.) must be provided by you. Our professional will not carry these items."
    },

    reviewBreakdown: baseReviewBreakdown
  },

  // plumbing data
  // commode
  "toilet-seat-fitting": {
    header: {
      title: "Toilet seat fitting",
      subtitle: "Professional Toilet seat fitting and repair – Starts at ₹299"
    },
    steps: [
      {
        title: "Site Assessment & Management",
        description: "We check the toilet area, take measurements, and confirm the type of        seat suitable for installation."
      },
      {
        title: "Approval & Material Readiness",
        description: "Once you approve the plan, we prepare all required tools and fittings for a smooth installation."
      },
      {
        title: "Repair & Genuine Parts",
        description: "Our experts securely installs and aligns the toilet seat for comfort and durability."
      },
      {
        title: "Final Check & Warranty",
        description: "we test for stability, ensure proper fitting, and provide a 180-day installation warranty."
      }
    ],
    customerAdvisory: {

      description: "Our professional will install the toilet seat securely, ensuring proper alignment and tight fittings for comfort and durability.",
      note: "Required products (toilet seat, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "flush-tank-repair": {
    header: {
      title: "Flush tank repair",
      subtitle: "– Starts at ₹299"
    },
    steps: [
      {
        title: "Problem Diagnosis",
        description: "We inspect the flush tank to identify leaks, blockages, or faulty parts."
      },
      {
        title: "Repair Plan & Cost Estimate",
        description: "We share a clear repair plan and price for your approval before starting."
      },
      {
        title: "Repair & Part Replacement",
        description: "Our technician fixes the issue, replacing damaged parts with quality components if required."
      },
      {
        title: "Testing & Warranty",
        description: "We test the flush system for smooth operation and provide a 180-day repair warranty."
      }
    ],
    customerAdvisory: {

      description: "Our expert will inspect and repair the flush tank to fix leakage, refill issues, or flushing problems, ensuring smooth and efficient operation.",
      note: "Required products (flush tank, spare parts, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // Tap & Shower Installation/Repair
  "tap-installation-repair": {
    header: {
      title: "Tap Installation",
      subtitle: "Reliable installation and repair of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Site Check & Requirements",
        description: "We assess the location, water line, and fittings needed for the new tap."
      },
      {
        title: "Cost Estimate & Approval",
        description: "Check the electrical load requirements and choose the correct MCB type and rating."
      },
      {
        title: "Installation & Sealing",
        description: "Our technician installs the tap securely and seals joints to prevent leaks."
      },
      {
        title: "Repair/Adjustment",
        description: "For repairs, inspect for faults like tripping issues, loose wiring, or burnt contacts, and fix/replace as needed."
      },
      {
        title: "Testing & Warranty",
        description: "We test water flow and functionality, then provide a 180-day installation warranty."
      }
    ],
    customerAdvisory: {

      description: "Our professional installs the tap with precision, ensuring secure fittings and proper sealing to prevent leaks and drips.",
      note: "Required products (tap, fittings, connectors, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "tap-replacement": {
    header: {
      title: "Tap Replacement",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Old Tap Inspection & Removal",
        description: "We check the existing tap, carefully remove it, and inspect the water line for any damage."
      },
      {
        title: "Fittings & Compatibility Check",
        description: "We ensure the new tap is compatible with existing connections and prepare the fittings."
      },
      {
        title: "Installation & Sealing",
        description: "Our technician installs the new tap securely, applies proper sealing, and ensures no leakage."
      },
      {
        title: "Testing & Warranty",
        description: "We test water flow and operation, then provide a 180-day installation warranty for peace of mind."
      },
    ],
    customerAdvisory: {

      description: "Our professional replaces your old tap with precision, ensuring secure fittings and proper sealing to prevent leaks and drips.",
      note: "Replacement tap, fittings, and necessary connectors must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // motor/puumpset
  "motor-installation-repair": {
    header: {
      title: "Motor Installation/Repair",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Assessment & Requirement Check",
        description: "We examine the motor type, location, and electrical connections needed."
      },
      {
        title: "Cost Estimate & Approval",
        description: "A clear installation or repair quote is provided, and work begins after your consent."
      },
      {
        title: "Installation/Repair Process",
        description: "Our technicians install the motor or fix existing issues, replacing parts if necessary."
      },
      {
        title: "Testing & Warranty",
        description: "The motor is tested for smooth operation, and a 180-day service warranty is provided."
      },
    ],
    customerAdvisory: {

      description: "Our expert ensures proper installation or repair of your motor with secure electrical and plumbing connections for safe and efficient performance. All work is carried out with thorough testing to ensure smooth operation.",
      note: "Required products (motor, pipes, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "clearing-air-from-pump-line": {
    header: {
      title: "Clearing Air from Pump Line",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: " Initial Inspection",
        description: "We check the pump, inlet, and outlet lines to locate the trapped air and identify possible causes."
      },
      {
        title: "Isolation & Safety Prep",
        description: "The pump is switched off, and necessary valves are closed to ensure safe handling."
      },
      {
        title: "Air Removal Process",
        description: "We carefully release trapped air from the line using priming methods or vent valves."
      },
      {
        title: "System Testing & Confirmation",
        description: "The pump is restarted, and water flow is tested to confirm smooth, air-free operation."
      },
    ],
    customerAdvisory: {

      description: "Our technician carefully removes trapped air from the pump line to restore smooth water flow and prevent damage to the pump. The process ensures proper priming and efficient operation of your water system.",
      note: " Required tools or spare parts (if any) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // drainage
  "drainage-blockage-removal": {
    header: {
      title: "Drainage Blockage Removal",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: " Problem Assessment",
        description: "We inspect the drainage system to locate the blockage and understand its severity."
      },
      {
        title: "Safety & Area Preparation",
        description: "Protective gear is worn, and the surrounding area is prepared to prevent mess."
      },
      {
        title: "Blockage Clearing",
        description: "We use suitable tools or high-pressure cleaning to remove the clog and restore flow."
      },
      {
        title: "Final Check & Cleanup",
        description: "The drainage is tested for smooth flow, and the work area is cleaned after completion."
      },
    ],
    customerAdvisory: {

      description: "Our expert will identify and clear blockages in your drainage system to restore smooth water flow. The process ensures hygienic and odor-free drainage, preventing future clogs and water logging.",
      note: "Any required spare parts, pipes, or chemicals must be provided by you. Our professional will not carry these items.."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "drainage-cover-installation": {
    header: {
      title: "Drainage Cover Installation",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Site Evaluation",
        description: "We inspect the drainage opening to measure and select the right cover size."
      },
      {
        title: "Surface Preparation",
        description: "The area is cleaned, and any old or damaged cover is removed."
      },
      {
        title: "Cover Placement & Fixing",
        description: "The new drainage cover is positioned and securely fixed to ensure stability."
      },
      {
        title: "Final Inspection",
        description: "We check alignment, fit, and durability for long-term safety and performance."
      },
    ],
    customerAdvisory: {

      description: "Our professional securely installs the drainage cover to ensure safety, prevent debris entry, and maintain proper water flow. The cover will be aligned and fitted firmly for long-lasting use.",
      note: "Required products (drainage cover, fittings, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // basin & sink data
  "sink-accessories-installation": {
    header: {
      title: "Sink Installation/",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Pre-Installation Check",
        description: "We inspect the space, plumbing lines, and fittings required for the sink."
      },
      {
        title: "Quote & Approval",
        description: "A clear cost estimate is shared, and work begins after your confirmation."
      },
      {
        title: "Installation & Sealing",
        description: "Our experts fix the sink securely, connect water lines, and seal all joints to avoid leaks."
      },
      {
        title: "Testing & Warranty",
        description: "We check water flow and drainage, then provide a 180-day installation warranty."
      },
    ],
    customerAdvisory: {

      description: "Our professional carefully installs the sink, ensuring proper alignment, secure fittings, and leak-proof connections to the water supply and drainage.",
      note: "Required products (sink, fittings, pipes, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "sink-installation-repair": {
    header: {
      title: "Sink Installation/repair",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Pre-Installation Check",
        description: "We assess the sink area and confirm fittings required for accessories like soap dispensers, strainers, faucets, or spray hoses."
      },
      {
        title: "Quote & Approval",
        description: "A clear cost estimate is shared, and work begins after your confirmation."
      },
      {
        title: "Installation & Sealing",
        description: "Our experts install the accessories securely, connect them properly, and seal joints to avoid leaks or loose fittings."
      },
      {
        title: "Testing & Warranty",
        description: "We test functionality (water flow, drainage, dispenser action, etc.) and provide a 180-day installation warranty."
      },
    ],
    customerAdvisory: {

      description: "Our professional carefully installs sink accessories such as soap dispensers, strainers, faucets, or spray hoses, ensuring secure fittings and leak-proof connections.",
      note: "Required products (accessories, fittings, connectors, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // pipe data
  "pipe-fitting": {
    header: {
      title: "Pipe Fitting",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Assessment & Requirement Check",
        description: "We inspect the site, measure pipe lengths, and check the type of fittings required for proper alignment."
      },
      {
        title: "Cost Estimate & Approval",
        description: "A clear installation or repair quote is provided, and work begins after your consent."
      },
      {
        title: "Installation/Repair Process",
        description: "Our technicians install new pipes or repair existing ones, ensuring proper joints, sealing, and alignment."
      },
      {
        title: "Testing & Warranty",
        description: "We test water flow and pressure, check for leaks, and provide a 180-day service warranty."
      },
    ],
    customerAdvisory: {

      description: "Our expert ensures proper installation or repair of pipes with secure joints, accurate alignment, and leak-proof sealing for safe and efficient water flow. All work is carried out with thorough testing to ensure smooth performance.",
      note: "Required products (pipes, fittings, connectors, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  "pipe-leakage": {
    header: {
      title: "Pipe Leakage",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Assessment & Requirement Check",
        description: "We inspect the leaking pipe, identify the source of leakage, and check the fittings and connections required for repair."
      },
      {
        title: "Cost Estimate & Approval",
        description: "A clear repair quote is shared, and work begins only after your approval."
      },
      {
        title: "Repair Process",
        description: "Our technicians fix the leakage by sealing joints, replacing damaged sections, or installing new fittings if necessary."
      },
      {
        title: "Testing & Warranty",
        description: "We test the water flow and pressure to ensure there are no further leaks, then provide a 180-day service warranty."
      },
    ],
    customerAdvisory: {

      description: "Our expert carefully repairs leaking pipes by sealing joints, replacing damaged sections, and ensuring accurate alignment for safe and efficient water flow. All work is thoroughly tested to confirm leak-proof performance.",
      note: "Required products (pipes, fittings, sealants, connectors, etc.) must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },
  // showeset data
  "shower-installation": {
    header: {
      title: "Shower Installation",
      subtitle: "Safe and secure replacement of Miniature Circuit Breakers – Starts at ₹299"
    },
    steps: [
      {
        title: "Old Shower Inspection & Removal",
        description: "We check the existing shower unit, carefully remove it, and inspect the water line for any leaks or damage."
      },
      {
        title: "Fittings & Compatibility Check",
        description: "We ensure the new shower is compatible with existing plumbing connections and prepare the necessary fittings."
      },
      {
        title: "Installation & Sealing",
        description: "Our technician installs the new shower securely, applies proper sealing, and ensures all joints are leak-free."
      },
      {
        title: "Testing & Warranty",
        description: "We test water pressure and shower operation, then provide a 180-day installation warranty for complete peace of mind."
      },
    ],
    customerAdvisory: {

      description: "Our professional replaces your old shower with precision, ensuring secure fittings, proper sealing, and smooth water flow without leaks.",
      note: "Replacement shower, fittings, and necessary connectors must be provided by you. Our professional will not carry these items."
    },
    reviewBreakdown: baseReviewBreakdown
  },

  // Appliace&Repair data
  "ac-service-repair": {
    header: {
      title: "AC Service / Repair",
      subtitle: "Professional AC diagnosis and repair – Starts at ₹299",
    },
    steps: [
      {
        title: "Inspection & Cost Estimate",
        description:
          "We assess your AC to detect the fault and provide a clear, upfront repair cost for your approval.",
      },
      {
        title: "Approval or Expert Advice",
        description:
          "Repairs begin only after your confirmation. If you’re unsure, our AC expert can guide you before you decide.",
      },
      {
        title: "Repair & Genuine Parts",
        description:
          "If replacement parts are required, we source and install authentic, high‑quality components at fixed rates.",
      },
      {
        title: "Warranty Protection",
        description:
          "Once repaired, your AC is covered under our 180‑day service warranty for worry‑free cooling.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "AC not cooling at all",
          "Airflow is weak or blocked",
          "Frequent tripping of MCB or fuse",
          "Remote Control not working",
          "Ice forming on coils due to gas problems",
          "I Don’t know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "Our professional technicians provide reliable AC repairs using safe procedures and genuine spare parts to restore performance.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  "ac-installation": {
    header: {
      title: "AC Installation",
      subtitle: "Professional wall/window/stand mounting – Starts at ₹299",
    },
    steps: [
      {
        title: "Site Survey & Quote",
        description:
          "We inspect the installation site, check mounting and electrical points, and provide a clear installation cost.",
      },
      {
        title: "Approval or Expert Suggestion",
        description:
          "Work begins only after your go‑ahead. Need help choosing placement? Our AC expert will guide you.",
      },
      {
        title: "Installation & Quality Materials",
        description:
          "We install your AC using genuine mounting kits, copper pipes, and accessories at fixed rates.",
      },
      {
        title: "Warranty Activation",
        description:
          "Your AC installation comes with a 180‑day service warranty for assured performance.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Display & Screen Issues",
          "Sound Issues",
          "Power & Boot Issues",
          "Connectivity & Signal Isssues",
          "Physical Damage & Other Issues",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "Our professional securely installs ACs with proper alignment and quality accessories for best performance.",
      note:
        "Required accessories (mounting kits, copper pipes, wiring, etc.) must be provided by you. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // laptop data
  "laptop-service-repair": {
    header: {
      title: "Laptop Service / Repair",
      subtitle: "Hardware and software diagnostics, genuine parts – Starts at ₹299",
    },
    steps: [
      {
        title: "Diagnosis & Cost Estimate",
        description:
          "We run a complete check on your laptop to identify hardware or software issues and share a transparent repair cost for your approval.",
      },
      {
        title: "Approval or Expert Consultation",
        description:
          "Repairs start only after your confirmation. If you’re unsure, our laptop specialist can guide you on the best solution.",
      },
      {
        title: "Repair & Genuine Parts",
        description:
          "If replacements are needed, we use authentic, high‑quality components (RAM, SSD, keyboard, screen, etc.) at fixed rates.",
      },
      {
        title: "Warranty Protection",
        description:
          "After the repair, your laptop is covered under our 180‑day service warranty for added peace of mind.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Hardware Issues",
          "Software Issues",
          "Network & Connectivity Issues",
          "Performance Issues",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "Professional laptop service with careful handling, proper ESD safety, and transparent guidance. Genuine components are used when parts need replacement.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // washing machine data
  "washing-machine": {
    header: {
      title: "Washing Machine Service / Repair",
      subtitle: "Expert diagnosis and repair – Starts at ₹299",
    },
    steps: [
      {
        title: "Inspection & Cost Estimate",
        description:
          "We examine your washing machine to identify the problem and provide a clear, upfront repair cost for your approval.",
      },
      {
        title: "Approval or Expert Advice",
        description:
          "Repairs begin only after your confirmation. If you’re unsure, our washing machine expert can guide you on the best fix.",
      },
      {
        title: "Repair & Genuine Parts",
        description:
          "If replacements are required, we install authentic, high‑quality components at fixed rates.",
      },
      {
        title: "Warranty Coverage",
        description:
          "After repair, your washing machine is covered under our 180‑day service warranty for worry‑free laundry days.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Power & Electrical Issues",
          "Water Supply & Drainage Problems",
          "Drum & Spinning Issues",
          "Washing Performance Problems",
          "Error Codes & Sensor Failures",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "Our technicians follow safe handling and use genuine spares to restore your washing machine’s performance with clear guidance at every step.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // geyser data
  "geyser-service-repair": {
    header: {
      title: "Geyser Service / Repair",
      subtitle: "Reliable hot‑water fixes – Starts at ₹299",
    },
    steps: [
      {
        title: "Initial Check & Estimate",
        description:
          "We thoroughly inspect your geyser to find the issue and provide a clear service or repair estimate for your approval.",
      },
      {
        title: "Approval or Expert Consultation",
        description:
          "Work begins only after your go‑ahead. Not sure about the issue? Our geyser specialist will explain the best repair options.",
      },
      {
        title: "Repair & Quality Parts",
        description:
          "If parts need replacement, we use only durable, high‑quality spares at fixed prices.",
      },
      {
        title: "Warranty Assurance",
        description:
          "Post‑repair, your geyser is protected under our 180‑day service warranty for uninterrupted hot water supply.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Heating Issues",
          "Electrical Problems",
          "Leakage Problems",
          "Pressure & Flow Issues",
          "Noise & Smell Problems",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      icon: "",
      description:
        "Certified pros repair geysers with proper safety and quality checks, using reliable components for long‑lasting performance.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // refrigerator data
  "refrigerator-service": {
    header: {
      title: "Refrigerator Service / Repair",
      subtitle: "Accurate assessment and quality fixes – Starts at ₹299",
    },
    steps: [
      {
        title: "Assessment & Estimate",
        description:
          "Our technician examines the appliance and provides a detailed cost estimate for your confirmation.",
      },
      {
        title: "Confirmation or Expert Consultation",
        description:
          "We proceed only after your go‑ahead. Need clarity? Speak directly with our specialist before deciding.",
      },
      {
        title: "Repair & Genuine Parts",
        description:
          "If replacements are required, we arrange high‑quality parts at standardised prices to complete the job.",
      },
      {
        title: "Warranty Coverage",
        description:
          "Post‑repair, your appliance enjoys a 180‑day service warranty for added peace of mind.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Power Issue",
          "Excess Cooling",
          "Not Cooling",
          "Water Leakage",
          "Less Cooling",
          "Door Issue",
          "I Don't know the issue"
        ]
      },
      {
        title: "Machine Type",
        options: [
          "Single Door",
          "Double Door",
          "Side by Side Door",
          "Smart Fridge"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      icon: "",
      description:
        "Technicians follow safe handling and use reliable spares to restore cooling performance with transparent guidance.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // microwave data
  "microwave-service": {
    header: {
      title: "Microwave Service / Repair",
      subtitle: "Diagnosis, component replacement – Starts at ₹299",
    },
    steps: [
      {
        title: "Diagnosis & Cost Estimate",
        description:
          "We carefully inspect your microwave to identify the fault and share a transparent repair cost for your review.",
      },
      {
        title: "Approval or Expert Guidance",
        description:
          "Repairs start only after you approve the quote. Not sure? Our experts are ready to guide you.",
      },
      {
        title: "Service & Quality Parts",
        description:
          "If the fix needs replacement parts, we source genuine, tested components at fixed rates.",
      },
      {
        title: "Warranty Protection",
        description:
          "Once repaired, your microwave is covered under our 180‑day service warranty for your confidence.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Not Working",
          "Not Heating",
          "Buttons not working",
          "Noise",
          "I Don't know the issue"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      icon: ":microwave:",
      description:
        "Professionals follow safety practices and use reliable parts to restore heating and control functions effectively.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // stove data
  "stove-service": {
    header: {
      title: "Stove Service / Repair",
      subtitle: "Safe gas and ignition fixes – Starts at ₹299",
    },
    steps: [
      {
        title: "Diagnosis & Cost Estimate",
        description:
          "We carefully inspect your stove to identify the issue and share a transparent repair cost for your review.",
      },
      {
        title: "Approval or Expert Guidance",
        description:
          "Repairs start only after you approve the quote. Not sure? Our experts are ready to guide you.",
      },
      {
        title: "Service & Quality Parts",
        description:
          "If the fix needs replacement parts, we source genuine, tested components at fixed rates.",
      },
      {
        title: "Warranty Protection",
        description:
          "Once repaired, your stove is covered under our 180‑day service warranty for your confidence.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "2 Burner",
          "3 Burner",
          "4 Burner",
          "5 Burner",
          "more"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "We follow gas‑safety procedures and use quality components for reliable ignition and flame control.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // chimney data
  "chimney-service": {
    header: {
      title: "Chimney Service / Repair",
      subtitle: "Motor, filter, duct fixes – Starts at ₹299",
    },
    steps: [
      {
        title: "Inspection & Price Estimate",
        description:
          "We examine your kitchen chimney to detect the issue and provide a clear service cost for your approval.",
      },
      {
        title: "Go‑Ahead or Expert Advice",
        description:
          "Work begins only after your confirmation. Unsure? Our specialists can guide you before you decide.",
      },
      {
        title: "Repair & Genuine Components",
        description:
          "If replacement parts are required, we supply authentic, high‑quality components at fixed prices.",
      },
      {
        title: "Warranty Assurance",
        description:
          "After repair, your chimney is backed by a 180‑day service warranty for worry‑free use.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Wall-Mounted",
          "Island Chimney",
          "4 Burner",
          "5 Burner",
          "more"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "We maintain proper electrical and grease‑handling safety and use reliable parts for smooth airflow and suction.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // water purifier data
  "water-purifier-service": {
    header: {
      title: "Water Purifier Service / Repair",
      subtitle: "RO/UV servicing and repairs – Starts at ₹299",
    },
    steps: [
      {
        title: "Check‑up & Cost Estimate",
        description:
          "We inspect your water purifier to find the problem and share a transparent repair cost for your review.",
      },
      {
        title: "Approval or Expert Support",
        description:
          "Repairs start only once you approve. Need clarity? Our water purifier expert can assist you before you decide.",
      },
      {
        title: "Service & Quality Parts",
        description:
          "If replacements are needed, we install genuine, certified parts at fixed rates.",
      },
      {
        title: "Warranty Coverage",
        description:
          "Your water purifier comes under our 180‑day service warranty after the repair is completed.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Not Working",
          "Water Leakage",
          "Low Water Flow",
          "filter Replacement",
          "Bad Taste Or Odor"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "Professionals handle RO/UV systems with hygiene and safety in mind, using certified components when needed.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
  // dish washer data
  "dish-washer-service": {
    header: {
      title: "Dish Washer Service / Repair",
      subtitle: "Trusted diagnostics and repairs – Starts at ₹299",
    },
    steps: [
      {
        title: "Diagnosis & Price Quote",
        description:
          "We examine your dishwasher, identify the issue, and provide a clear, upfront repair quote.",
      },
      {
        title: "Go‑Ahead or Expert Guidance",
        description:
          "Work starts after your approval. Unsure? Our dishwasher specialist is available to guide you.",
      },
      {
        title: "Repair & Authentic Parts",
        description:
          "If parts need replacing, we source original, high‑quality components at fixed prices.",
      },
      {
        title: "Warranty Guarantee",
        description:
          "Post‑repair, your dishwasher is covered with our 180‑day service warranty for peace of mind.",
      },
    ],
    providerDetails: [
      {
        title: "Issue Type",
        options: [
          "Water not draining",
          "Water Leakage",
          "Motor Issue",
          "Detergent Not getting Dispensing",
          "Error Codes on Display"
        ]
      },
      {
        title: "Request Type",
        options: ["Service", "Repair"]
      }
    ],
    customerAdvisory: {
      description:
        "We follow water‑safety and electrical best practices and use reliable parts to restore wash performance.",
      note:
        "Required parts (if replacements are needed) must be provided by you or purchased separately. Our professional will not carry these items.",
    },
    reviewBreakdown: baseReviewBreakdown,
  },
};


