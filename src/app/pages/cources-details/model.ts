export interface CourseObjective {
    id: string;
    name: string;
    description: string;
  }
  
  export interface Course {
    id: string;
    name: string;
    description: string;
    course_objective: string; // JSON string, should be parsed into CourseObjective[]
    img: string;
    pdf_url?: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface SubCourse {
    id: string;
    video_url: string;
    img: string;
    name: string;
    status: boolean;
    createdAt: string;
    updatedAt: string;
    completed: boolean;
  }
  
  export interface User {
    id: string;
    name: string;
    phone: string;
    code: string;
    status: boolean;
    email?: string;
    age?: string;
    blood_group?: string;
    education: string;
    pincode?: string;
    thaluk?: string;
    district?: string;
    state?: string;
    country?: string;
    otp: number;
    api_key: string;
    fcm_token?: string;
    profile_url?: string;
    address?: string;
    gender: string;
    date_of_birth?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Certificate {
    id: string;
    certificateId: string;
    paymentStatus: string;
    issuedAt: string;
    user: User;
    course: Course;
  }
  
  export interface EnrolledUser {
    id: string;
    createdBy: string;
    user_name: string;
    user_phone: string;
    joinDate: string;
    paymentStatus: string;
    CourseDetails: Course;
    subCourses: SubCourse[];
    certificateReady: boolean;
    userEnteredData:boolean;
    certificate: Certificate;
    certificateValid:boolean;
    quizProgress:Progress;

  }
  export interface Progress{
    score:number;
    score_get:number;
    completedAt:string;
  }
  export interface EnrollmentResponse {
    success: boolean;
    message: string;
    instance: string;
    data: {
      enrolled: EnrolledUser[];
      total_count: number;
      limit: number;
    };
  }
  