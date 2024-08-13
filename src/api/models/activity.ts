export interface ActivityResponse {
  reviews(reviews: any): unknown;
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
  subImages: ImageResponse[];
  schedules: ScheduleResponse[];
}

export interface ImageResponse {
  id: number;
  imageUrl: string;
}

export interface ScheduleResponse {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
}

export interface ReviewResponse {
  name: string;
  date: string;
  review: string;
  image: string;
}
