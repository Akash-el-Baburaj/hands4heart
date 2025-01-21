export interface Banners {
    success: boolean;
    message: string;
    instance: string;
    data: Data;
  }
  
  export interface Data {
    banner: Banner[];
    total_count: number;
    limit: number;
  }
  
  export interface Banner {
    id: string;
    headline: string;
    paragraph: string;
    videoUrl: string;
    courseId: string;
    status: number;
    createdAt: string;
    bannerType: string;
    updatedAt: string;
  }