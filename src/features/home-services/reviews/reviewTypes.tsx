export interface Review {
  name: string;
  _id: string;
  user?: string;
  rating: number;
  comment: string;
  serviceId?: string;
  categoryId?: string;
  subCategoryId?: string;
  images?: string[];
  videos?: string[];
  createdAt: string;
  updatedAt: string;
}
export interface ReviewResponse {
  items: Review[];
  total: number;
  page: number;
  limit: number;
  average: number;
}
