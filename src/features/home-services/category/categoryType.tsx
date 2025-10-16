export interface Category {
  _id: string;
  name: string;
  title?: string;
  description?: string;
  image?: string;
  icon?: string;
  type: string; // "category" | "subcategory" | "service"
  parentId?: string | null;
  path?: string[];
  pathNames?: string[];
  depth?: number;
  rating?: number;
  reviewCount?: number;
  isActive?: boolean;
}

export interface CategoryState {
  categories: Category[];
  subcategories: Record<string, Category[]>; 
  loading: boolean;
  error: string | null;
}
