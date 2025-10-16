
// date time 
export const formatDisplayDate = (dateString: string): string => {
  if (!dateString) return "";

  const d = new Date(dateString);
  if (isNaN(d.getTime())) return "";

  const day = d.getDate();
  const month = d.toLocaleString("en-US", { month: "short" });

  // add suffix (st, nd, rd, th)
  const getDaySuffix = (day: number) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  return `${month} ${day}${getDaySuffix(day)}`;
};


// cardUtils.ts
export const detectCardType = (number: string) => {
  const re = {
    visa: /^4/,
    mastercard: /^5[1-5]/,
    rupay: /^6/,
    amex: /^3[47]/,
  };

  if (re.visa.test(number)) return { type: "Visa", logo: "/assets/cards/visa.png" };
  if (re.mastercard.test(number)) return { type: "MasterCard", logo: "/assets/cards/mastercard.png" };
  if (re.rupay.test(number)) return { type: "RuPay", logo: "/assets/cards/rupay.png" };
  if (re.amex.test(number)) return { type: "Amex", logo: "/assets/cards/amex.png" };

  return { type: "Card", logo: "/assets/svg/cardlogo.svg" };
};


export const timeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return `${diff} sec ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
  return date.toLocaleDateString(); // fallback for older
};

// export const slugify = (text: string) => {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/[\/&]/g, "-")         // convert `/` and `&` to hyphen
//     .replace(/\s+/g, "-")           // spaces → hyphen
//     .replace(/[^a-z0-9-]/g, "")     // remove all other special chars
//     .replace(/-+/g, "-")            // collapse multiple hyphens
//     .replace(/^-|-$/g, "");         // trim leading/trailing hyphen
// };
export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\/&]/g, "-")      
    .replace(/[^a-z0-9]+/g, "-")  // replace ANY sequence of non a-z0-9 with "-"
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};




import AppliancesDetailPageWrapper from "../pages/HomeServices/DetailPages/AppliancesViewPage/AppliancesDetailPageWrapper";
import BathroomDetailPage from "../pages/HomeServices/DetailPages/CleaningViewPages/BathroomDetailPage";
import DeepCleanDetailPage from "../pages/HomeServices/DetailPages/CleaningViewPages/DeepCleanDetailPage";
import DetailPageWrapper from "../pages/HomeServices/DetailPages/CleaningViewPages/DetailPageWrapper";
import SofaMattersDetailPage from "../pages/HomeServices/DetailPages/CleaningViewPages/SofaMattersDetailPage";
import ElectricalDetailPageWrapper from "../pages/HomeServices/DetailPages/ElectricalViewPage/ElectricalDetailPageWrapper";
import GardenDetailPageWrapper from "../pages/HomeServices/DetailPages/GardeningViewPage/GardeningDetailPageWrapper";
import PlumbingDetailPageWrapper from "../pages/HomeServices/DetailPages/PlumbingViewPage/PlumbingDetailPageWrapper";



export const routeConfig: Record<string, React.FC<any>> = {
  // Cleaning
  "deep-clean": DeepCleanDetailPage,
  "sofa-mattress": SofaMattersDetailPage,
  "commercial-cleaning": SofaMattersDetailPage,
  "bathroom": BathroomDetailPage,
  "glass-windows": DetailPageWrapper,
  "disinfection-sanitization": DetailPageWrapper,
  "post-construction": DetailPageWrapper,
  "water-tank-sintex-cleaning": DetailPageWrapper, //not coming path
  "kitchen-chimney": DetailPageWrapper,

  // Plumbing
  "basin-sink": PlumbingDetailPageWrapper,
  "commode": PlumbingDetailPageWrapper,
  "drainage-pipes": PlumbingDetailPageWrapper,
  "motor-or-pump-set": PlumbingDetailPageWrapper,
  "pipe-leakage": PlumbingDetailPageWrapper,
  "pipes-fitting": PlumbingDetailPageWrapper,
  "shower-set-fix": PlumbingDetailPageWrapper,
  "tap-mixer": PlumbingDetailPageWrapper,
  "water-pipe": PlumbingDetailPageWrapper,

  // Electrical
  "fan": ElectricalDetailPageWrapper,
  "switch-board-sockets": ElectricalDetailPageWrapper,
  "door-bell": ElectricalDetailPageWrapper,
  "mcb-fuse": ElectricalDetailPageWrapper,
  // "tv": ElectricalDetailPageWrapper,
  "tube-light-bulb": ElectricalDetailPageWrapper,
  "wiring": ElectricalDetailPageWrapper,

  // Appliance & Repair
  "ac": AppliancesDetailPageWrapper,
  "tv": AppliancesDetailPageWrapper,
  "geyser": AppliancesDetailPageWrapper,
  "laptop": AppliancesDetailPageWrapper,
  "washing-machine": AppliancesDetailPageWrapper,
  "chimney-service": AppliancesDetailPageWrapper,
  "dish-washer-service": AppliancesDetailPageWrapper,
  "microwave-service": AppliancesDetailPageWrapper,
  "refrigerator-service": AppliancesDetailPageWrapper,
  "stove-service": AppliancesDetailPageWrapper,
  "water-purifier-service": AppliancesDetailPageWrapper,

  // Gardening
  "gardening-setup-landscaping": GardenDetailPageWrapper,
  "planting-transplanting": GardenDetailPageWrapper,
  "trimming-pruning": GardenDetailPageWrapper,
  'irrigation-system-service': GardenDetailPageWrapper,
  "garden-cleaning-waste-removal": GardenDetailPageWrapper,
  "indoor-balcony-gardening": GardenDetailPageWrapper,
}

