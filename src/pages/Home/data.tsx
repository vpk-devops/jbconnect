

import {
  personOutline,
  constructOutline,
  businessOutline,
  newspaperOutline,
  playOutline,
  documentTextOutline,
  flashOutline,
  waterOutline,
  brushOutline,
  hardwareChipOutline,
  leafOutline,
} from "ionicons/icons";

import expert1 from "/assets/images/expert1.jpg";
import expert2 from "/assets/images/expert2.jpg";
import serviceLogo from "/assets/images/service1.jpg";
import serviceLogo1 from "/assets/images/service2.jpg";
import profileImage from "/assets/images/D1.jpg";

export const services = [
  { label: "Hire Pro", icon: personOutline },
  { label: "Construction", icon: constructOutline },
  { label: "Management", icon: businessOutline },
  { label: "Blogs", icon: newspaperOutline, link: "/blogs" },
  { label: "Flips", icon: playOutline, link: "/flips" },
  { label: "Requirements", icon: documentTextOutline, link: "/post-requirements" },
  { label: "Home-services", icon: documentTextOutline, link: "/home-services/home" },
  { label: "Legal Assist", icon: documentTextOutline },
];

export const categories = [
  { name: "Electrical", icon: flashOutline },
  { name: "Plumbing", icon: waterOutline },
  { name: "Cleaning", icon: brushOutline },
  { name: "Appliance Service", icon: hardwareChipOutline },
  { name: "Gardening", icon: leafOutline },
];

export const subServices = [
  { label: "Switch board", img: serviceLogo },
  { label: "Ceiling Fan", img: serviceLogo1 },
  { label: "Tube Light", img: serviceLogo },
  { label: "MCB or Fuse", img: serviceLogo1 },
];

export const expertList = [
  { name: "Civil Engineer", image: expert2 },
  { name: "Architect", image: expert1 },
  { name: "Plumber", image: expert1 },
  { name: "Interior Designer", image: expert1 },
  { name: "Painter", image: expert2 },
  { name: "Electrician", image: expert1 },
  { name: "Contractor", image: expert2 },
  { name: "Carpentry", image: expert2 },
  { name: "Plumber", image: expert2 },
];

export const sliderData = [
  {
    title: "Hire a Professional",
    text: "Start your construction by hiring an expert everything is ready at your finger tap.",
    buttonText: "Hire Pro Now",
  },
  {
    title: "Construction Management",
    text: "Manage Vendors, Labor's, Materials,Attendance, and Budget.",
    buttonText: "Manage Now",
  },
  {
    title: "Start your Construction ",
    text: "Choose stages or END-END Process and start your construction now !!.",
    buttonText: "Get Started",
  },
];

export interface ExpertCardType {
  name: string;
  role: string;
  image: string;
  code: string;
  available?: boolean;
}

export const expertCards: ExpertCardType[] = [
  {
    name: "Abishek",
    role: "Architect",
    code: "223455",
    image: "/favicon.png",
    available: true,
  },
  {
    name: "Megha",
    role: "Civil Engineer",
    code: "786544",
    image: profileImage,
    available: true,
  },
  {
    name: "Suresh",
    role: "Interior Designer",
    code: "347812",
    image: profileImage,
    available: false,
  },
  {
    name: "Aisha",
    role: "Plumber",
    code: "987233",
    image: profileImage,
    available: true,
  },
];

