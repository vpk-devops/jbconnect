import { StepConfig } from "./ConstructionReusableCards";

export const constructionOptionsData = [
  {
    title: "End-to-End Construction",
    btnLabel: "Start Now",
    img: "/assets/images/stagewise.jpg",
    link:"/construction/onBoardscreen"
  },
  {
    title: "Stage-Wise Construction",
    btnLabel: "Choose Stage",
    img: "/assets/images/roofing.jpg",
    link:"/construction/onBoardscreen"
  },
  {
    title: "Renovation",
    btnLabel: "Choose Stage",
    img: "/assets/images/stagewise.jpg",
    link:"/construction/onBoardscreen"
  },
];

export const constructionStagesData = [
  { title: "Foundation", img: "/assets/images/stage1.jpg" },
  { title: "Framing", img: "/assets/images/stagewise.jpg" },
  { title: "Roofing", img: "/assets/images/roofing.jpg" },
  { title: "Finishing", img: "/assets/images/finishing.jpg" },
];
export   const builders = [
    {
      name: "Apex Builders",
      experience: "10 Years of Experience",
      avatar: "https://i.pravatar.cc/100?img=1",
      projects: 62,
      rating: 4.5,
      priceRange: "₹3000 – ₹4500 / sq. ft.",
    },
    {
      name: "Sriteja Builders",
      experience: "10 Years of Experience",
      avatar: "https://i.pravatar.cc/100?img=2",
      projects: 62,
      rating: 4.5,
      priceRange: "₹3000 – ₹4500 / sq. ft.",
    },
  ];
  
export const offers = [
  {
    title: "15% Off Full Build Package",
    description: "Dream big, save big on your complete home construction.",
    timeLeft: "03:24:59",
    image: "/assets/images/sploff1.jpeg",
  },
  {
    title: "Free Interior Design Consultation",
    description: "Visualize your dream interiors with a professional consultation.",
    timeLeft: "05:08:15",
    image: "/assets/images/sploff2.jpeg",
  },
];

  export const steps = [
    {
      title: "Share Your Requirements",
      desc: "Provide detailed project specifications, including type, area, floors, and budget.",
      icon: "📋",
      button: "Get Started With Your Dream Home",
    },
    {
      title: "Get Builder Options",
      desc: "Receive a curated list of top-rated builders",
      icon: "🏗️",
    },
    {
      title: "Consult & Select Builder",
      desc: "Engage in direct consultations, select the best fit",
      icon: "🤝",
    },
    {
      title: "Sign Agreement",
      desc: "Finalize terms and securely pay the initial advance",
      icon: "💲",
    },
    {
      title: "Track Construction Progress",
      desc: "Monitor every phase of your project",
      icon: "📊",
    },
  ];


export const stepsConfig: StepConfig[] = [
  {
    step: 1,
    totalSteps: 6,
    title: "Tell Us About Your Project",
    subtitle: "Help us understand your requirements",
    fields: [
      { label: "Location", name: "location", placeholder: "Enter City, Area or Pin Code", type: "text" }
    ],
    button: "Next"
  },
  {
    step: 2,
    totalSteps: 6,
    title: "Tell Us About Your Dream Home",
    subtitle: "Help us understand your requirements",
    fields: [
      { label: "Plot Size", name: "plotSize", placeholder: "e.g., 1200", type: "number" }
    ],
    button: "Next"
  },
  {
    step: 3,
    totalSteps: 6,
    title: "Tell Us About Your Dream Home",
    subtitle: "Help us understand your requirements",
    fields: [
      { label: "Budget", name: "budget", placeholder: "Enter your budget", type: "number" }
    ],
    button: "Next"
  },
  {
    step: 4,
    totalSteps: 6,
    title: "Tell Us About Your Dream Home",
    subtitle: "Help us understand your requirements",
    fields: [
      { label: "Property Type", name: "propertyType", type: "radio", radioOptions: ["House", "Commercial Space", "Other"] }
    ],
    button: "Next"
  },
  {
    step: 5,
    totalSteps: 6,
    title: "Tell Us About Your Dream Space",
    subtitle: "Help us understand your requirements",
    fields: [
      { label: "Type of Commercial Space", name: "commercialType", placeholder: "Describe your commercial requirements", type: "textarea", rows: 5 }
    ],
    button: "Next"
  }
];
