export interface Services {
  _id: string;
  name: string;       // always required
  price?: number;
  rating?: number;
  reviewCount?: number;
  type: "service";
  image?: string;    
}

export interface ComboOffer {
  _id: string;
  name: string;
  subName:string;        
  description?: string; 
  price?: number;      
  discount?: string;  
  image?: string;      
  comboServices?: Services[]; 
  type: "combo";
}

