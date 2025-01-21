export interface CourseList {
    success: boolean;
    message: string;
    instance: string;
    data: Data;
  }
  
  export interface Data {
    courses: Course[];
    total_count: number;
    limit: number;
  }
  
  export interface Course {
    id: string;
    name: string;
    description: string;
    img?: string;
    status: number;
    createdAt: string;
    updatedAt: string;
    details: Detail[];
  }
  
  export interface Detail {
    id: string;
    video_url: string;
    img: string;
    name: string;
    status: number;
    createdAt: string;
    course_id: string;
  }