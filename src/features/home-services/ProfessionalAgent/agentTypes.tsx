interface Specialist {
  _id: string;
  name: string;
  experience: number;
  charge: number;
  description: string;
}
export interface Agent {
  _id: string;
  name: string;
  profession: string;
  phone: string;
  email?: string;
  rating?: number;
  categoryId: string;
  experience?: number;
  basicCharge: number;
  consultationFee: number;
  description?: string;
specialists: Specialist[];
  location?: {
    type: "Point";
    coordinates: number[]; 
    geohash?: string;
  };
  image?: string;
  createdAt?: string;
  updatedAt?: string;
}
interface AgentState {
  agents: Agent[];
  loading: boolean;
  error?: string;
}