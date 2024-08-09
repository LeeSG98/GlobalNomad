export type GetActivitiesResponse = {
  cursorId?: number;
  totalCount: number;
  activities: Activity[];
};

export interface Activity {
  imageUrl: string;
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export type GetActivitiesParams = {
  method: "offset" | "cursor";
  cursorId?: number;
  category?: string;
  keyword?: string;
  sort?: "most_reviewed" | "price_asc" | "price_desc" | "latest";
  page?: number;
  size?: number;
};
