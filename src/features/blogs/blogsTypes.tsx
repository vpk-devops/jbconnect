export interface Blog {
  tags: any;
  publishedAt: string | number | Date;
  _id: string;
  title: string;
  author: string;
  description: string;
  images: string[];
  videos: string[];
  serviceType: "home-services" | "construction" | "management";
  categoryId?: string;
  subcategoryId?: string;
  serviceId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BlogFilters {
  page?: number;
  limit?: number;
  serviceType?: "home-services" | "construction" | "management";
  categoryId?: string;
  subcategoryId?: string;
  serviceId?: string;
}

export interface BlogResponse {
  success: boolean;
  blogs: Blog[];
  total: number;
  page: number;
  pages: number;
}
