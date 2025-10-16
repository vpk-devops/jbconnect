interface ServiceItem {
  id: number;
  title: string;
  image: string;
  route: string;
}
interface RequirementSubPageData {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  mainTitle: string;
  services: ServiceItem[];
  exploreTitle: string;
  exploreServices: ServiceItem[];
  layoutType?: 'grid-2x4' | 'grid-3x2-plus-1';
}
export const requirementsData: RequirementSubPageData[] = [
  {
    // Hire Individual Professionals
    heroTitle: "Choose what kind of Individual Professionals you are looking for..",
    heroDescription: "pick your options and select the service",
    heroImage: "/assets/images/2.jpg",
    mainTitle: "What work need to be done ?",
    layoutType: 'grid-2x4',
    services: [
      {
        id: 1,
        title: "Architecture Designing's 2D 3D Designs",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 2,
        title: "Construction Planning and Civil Works",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 3,
        title: "Wall painting and Painting works",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 4,
        title: "Plumbing works",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 5,
        title: "Interior Works",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 6,
        title: "Electrical Works",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 7,
        title: "Hire Contractors",
        image: "/assets/images/2.jpg",
        route: ""
      },
      {
        id: 8,
        title: "Hire Labours",
        image: "/assets/images/2.jpg",
        route: ""
      }
    ],
    exploreTitle: "Explore Other Services",
    exploreServices: [
      {
        id: 2,
        title: "Hire Contractors",
        image: "/assets/images/2.jpgp2.jpg",
        route: "/hire-contractors"
      },
      {
        id: 3,
        title: "Choose Management Service",
        image: "/assets/images/2.jpgp3.jpg",
        route: "/management-service"
      },
      {
        id: 4,
        title: "Choose Small Home Need Services",
        image: "/assets/images/2.jpgp4.jpg",
        route: "/home-services"
      },
      {
        id: 5,
        title: "Legal Work Service",
        image: "/assets/images/2.jpgp4.jpg",
        route: "/legal-service"
      },
      {
        id: 6,
        title: "House Renovation Service",
        image: "/assets/images/2.jpgp5.jpg",
        route: "/renovation-service"
      }
    ],
  },
  {
    // Hire Contractors
    heroTitle: "Choose what kind of Hire Contractors you are looking for..",
    heroDescription: "pick your options and select the service",
    heroImage: "/assets/images/2.jpgexpert2.jpg",
    mainTitle: "What work need to be done ?",
    services: [
      {
        id: 1,
        title: "Construction Contractors",
        image: "/assets/images/2.jpgcon1.png",
        route: ""
      },
      {
        id: 2,
        title: "Renovation Contractors",
        image: "/assets/images/2.jpgcon6.png",
        route: ""
      },
      {
        id: 3,
        title: "Electrical Contractors",
        image: "/assets/images/2.jpgcon3.png",
        route: ""
      },
      {
        id: 4,
        title: "Plumbing Contractors",
        image: "/assets/images/2.jpgcon4.png",
        route: ""
      },
      {
        id: 5,
        title: "Painting Contractors",
        image: "/assets/images/2.jpgcon5.png",
        route: ""
      },
      {
        id: 6,
        title: "Roofing Contractors",
        image: "/assets/images/2.jpgcon6.png",
        route: ""
      },
      {
        id: 7,
        title: "End to End  Contractors",
        image: "/assets/images/2.jpgcon6.png",
        route: ""
      }
    ],
    exploreTitle: "Explore Other Services",
    exploreServices: [
      {
        id: 1,
        title: "Hire Individual Professional",
        image: "/assets/images/2.jpgp1.jpg",
        route: "/hire-professional"
      },
      {
        id: 3,
        title: "Choose Management Service",
        image: "/assets/images/2.jpgp3.jpg",
        route: "/management-service"
      },
      {
        id: 4,
        title: "Choose Small Home Need Services",
        image: "/assets/images/2.jpgp4.jpg",
        route: "/home-services"
      },
      {
        id: 5,
        title: "Legal Work Service",
        image: "/assets/images/2.jpgp5.jpg",
        route: "/legal-service"
      },
      {
        id: 6,
        title: "House Renovation Service",
        image: "/assets/images/2.jpgp6.jpg",
        route: "/renovation-service"
      }
    ],
  },


{
    // Management Service
    heroTitle: "Choose what kind of Management Service you are looking for..",
    heroDescription: "pick your options and select the service",
    heroImage: "/assets/images/2.jpgexpert3.jpg",
    mainTitle: "What work need to be done ?",
    services: [
      {
        id: 1,
        title: "Project Management",
        image: "/assets/images/2.jpgman1.png",
        route: ""
      },
      {
        id: 2,
        title: "Property Management",
        image: "/assets/images/2.jpgman2.png",
        route: ""
      },
      {
        id: 3,
        title: "Event Management",
        image: "/assets/images/2.jpgman3.png",
        route: ""
      },
      {
        id: 4,
        title: "Business Management",
        image: "/assets/images/2.jpgman4.png",
        route: ""
      },
      {
        id: 5,
        title: "Financial Management",
        image: "/assets/images/2.jpgman5.png",
        route: ""
      },
    ],
    exploreTitle: "Explore Other Services",
    exploreServices: [
      {
        id: 1,
        title: "Hire Individual Professional",
        image: "/assets/images/2.jpgp1.jpg",
        route: "/hire-professional"
      },
      {
        id: 2,
        title: "Hire Contractors",
        image: "/assets/images/2.jpgp2.jpg",
        route: "/hire-contractors"
      },
      {
        id: 4,
        title: "Choose Small Home Need Services",
        image: "/assets/images/2.jpgp4.jpg",
        route: "/home-services"
      },
      {
        id: 5,
        title: "Legal Work Service",
        image: "/assets/images/2.jpgp5.jpg",
        route: "/legal-service"
      },
      {
        id: 6,
        title: "House Renovation Service",
        image: "/assets/images/2.jpgp6.jpg",
        route: "/renovation-service"
      },
    ],
  },
  {
    // Small Home Need Services
    heroTitle: "Choose what kind of Home Services you are looking for..",
    heroDescription: "pick your options and select the service",
    heroImage: "/assets/images/2.jpgplumbing.png",
    mainTitle: "What work need to be done ?",
    services: [
      {
        id: 1,
        title: "House Cleaning",
        image: "/assets/images/2.jpghs1.png",
        route: ""
      },
      {
        id: 2,
        title: "Appliance Repair",
        image: "/assets/images/2.jpghs2.png",
        route: ""
      },
      {
        id: 3,
        title: "Garden Maintenance",
        image: "/assets/images/2.jpghs3.png",
        route: ""
      },
      {
        id: 4,
        title: "Home Security",
        image: "/assets/images/2.jpghs4.png",
        route: ""
      },
      {
        id: 5,
        title: "Pest Control",
        image: "/assets/images/2.jpghs5.png",
        route: ""
      },
    ],
    exploreTitle: "Explore Other Services",
    exploreServices: [
      {
        id: 1,
        title: "Hire Individual Professional",
        image: "/assets/images/2.jpgp1.jpg",
        route: "/hire-professional"
      },
      {
        id: 2,
        title: "Hire Contractors",
        image: "/assets/images/2.jpgp2.jpg",
        route: "/hire-contractors"
      },
      {
        id: 3,
        title: "Choose Management Service",
        image: "/assets/images/2.jpgp3.jpg",
        route: "/management-service"
      },
      {
        id: 5,
        title: "Legal Work Service",
        image: "/assets/images/2.jpgp5.jpg",
        route: "/legal-service"
      },
      {
        id: 6,
        title: "House Renovation Service",
        image: "/assets/images/2.jpgp6.jpg",
        route: "/renovation-service"
      },
    ],
  },
  {
    // Legal Work Service
    heroTitle: "Choose what kind of Legal Work  you are looking for..",
    heroDescription: "pick your options and select the service",
    heroImage: "/assets/images/2.jpgservice1.jpg",
    mainTitle: "What work need to be done ?",
    services: [
      {
        id: 1,
        title: "Legal Consultation",
        image: "/assets/images/2.jpgsub1.png",
        route: ""
      },
      {
        id: 2,
        title: "Document Preparation",
        image: "/assets/images/2.jpgsub1.png",
        route: ""
      },
      {
        id: 3,
        title: "Contract Review",
        image: "/assets/images/2.jpgexpert3.jpg",
        route: ""
      },
      {
        id: 4,
        title: "Property Legal",
        image: "/assets/images/2.jpgservice1.jpg",
        route: ""
      },
      {
        id: 5,
        title: "Business Legal",
        image: "/assets/images/2.jpgservice2.jpg",
        route: ""
      },
      {
        id: 6,
        title: "Family Legal",
        image: "/assets/images/2.jpgsub1.png",
        route: ""
      },
      {
        id: 7,
        title: "Criminal Defense",
        image: "/assets/images/2.jpgsub1.png",
        route: ""
      },
    ],
    exploreTitle: "Explore Other Services",
    exploreServices: [
      {
        id: 1,
        title: "Hire Individual Professional",
        image: "/assets/images/2.jpgp1.jpg",
        route: "/hire-professional"
      },
      {
        id: 2,
        title: "Hire Contractors",
        image: "/assets/images/2.jpgp2.jpg",
        route: "/hire-contractors"
      },
      {
        id: 3,
        title: "Choose Management Service",
        image: "/assets/images/2.jpgp3.jpg",
        route: "/management-service"
      },
      {
        id: 4,
        title: "Choose Small Home Need Services",
        image: "/assets/images/2.jpgp4.jpg",
        route: "/home-services"
      },
      {
        id: 6,
        title: "House Renovation Service",
        image: "/assets/images/2.jpgp6.jpg",
        route: "/renovation-service"
      }
    ],
  },
  {
    // House Renovation Service
    heroTitle: "Choose what kind of Renovation Service you are looking for..",
    heroDescription: "pick your options and select the service",
    heroImage: "/assets/images/2.jpgreno1.jpg",
    mainTitle: "What work need to be done ?",
    services: [
      {
        id: 1,
        title: "Kitchen Renovation",
        image: "/assets/images/2.jpgre1.png",
        route: ""
      },
      {
        id: 2,
        title: "Bathroom Renovation",
        image: "/assets/images/2.jpgre2.png",
        route: ""
      },
      {
        id: 3,
        title: "Living Room Renovation",
        image: "/assets/images/2.jpgre3.png",
        route: ""
      },
      {
        id: 4,
        title: "Bedroom Renovation",
        image: "/assets/images/2.jpgre4.png",
        route: ""
      },
      {
        id: 5,
        title: "Outdoor Renovation",
        image: "/assets/images/2.jpgre5.png",
        route: ""
      },
    ],
    exploreTitle: "Explore Other Services",
    exploreServices: [
      {
        id: 1,
        title: "Hire Individual Professional",
        image: "/assets/images/2.jpgp1.jpg",
        route: "/hire-professional"
      },
      {
        id: 2,
        title: "Hire Contractors",
        image: "/assets/images/2.jpgp2.jpg",
        route: "/hire-contractors"
      },
      {
        id: 3,
        title: "Choose Management Service",
        image: "/assets/images/2.jpgp3.jpg",
        route: "/management-service"
      },
      {
        id: 4,
        title: "Choose Small Home Need Services",
        image: "/assets/images/2.jpgp4.jpg",
        route: "/home-services"
      },
      {
        id: 5,
        title: "Legal Work Service",
        image: "/assets/images/2.jpgp5.jpg",
        route: "/legal-service"
      }
    ],
  }
];