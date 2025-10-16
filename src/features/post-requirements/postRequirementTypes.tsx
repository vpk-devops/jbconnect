export const RequirementStatus = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCEEDED: "succeeded",
  FAILED: "failed",
} as const;

export interface Location {
  address?: string;
  landmark?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

export type CategoryType =
  | "Hire Individual Professional"
  | "Hire Contractors"
  | "Choose Management Service"
  | "Choose Small Home Need Services"
  | "Legal Work Service"
  | "House Renovation Service"
  | "JBConx Direct";

export type ProjectType = "Small Project" | "Medium Project" | "Large Project" | "Custom Build";

export interface Requirement {
  _id?: string;
  categoryType: CategoryType;
  categoryId?: string;
  subCategoryId?: string;
  serviceId?: string;
  title: string;
  description?: string;
  projectType?: ProjectType;
  estimatedBudget?: number;
  location?: Location;
  images?: string[];
  createdBy: string;
  createdAt?: string;
  updatedAt?: string;
}

// Redux state type
export interface RequirementState {
  requirements: Requirement[];
  requirement: Requirement | null;
  categories: any[];       
  subcategories: any[];
  services: any[];
  status: typeof RequirementStatus[keyof typeof RequirementStatus];
  error?: string | null;
}
