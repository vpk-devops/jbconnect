export interface ServiceTag {
  name: string;
  price: number;
}

export interface Service {
  variant: boolean | undefined;
  path: any;
  _id: string;
  name: string;
  description?: string;
  price?: number;
  basePrice?: number;
  image?: string;
  rating?: number;
  reviewCount?: number;
  pathNames?: string[];
  subcategoryId?: string;
  categoryId?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?:  ServiceTag[]; 
}


export interface ServiceState {
  services: Service[];
  selectedService: Service | null;
  loading: boolean;
  error: string | null;
}
