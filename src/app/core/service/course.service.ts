import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CourseList } from '../model/course.model';

import { environment } from 'src/environment/environment';
import { EnrollmentResponse } from 'src/app/pages/cources-details/model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  private baseURL = environment.apiUrl;

  getCourseList(page: number) {
    return this.http.get<CourseList>(`${this.baseURL}/user/course/list/${page}`)
  }

  getMyCourseList(page: number) {
    return this.http.get<EnrollmentResponse>(`${this.baseURL}/user/course/get_course_list/${page}`)
  }

  courseEnroll(id: any) {
    return this.http.post<any>(`${this.baseURL}/user/course/create`, id)
  }

  courseDetails(id: string) {
    return this.http.get<any>(`${this.baseURL}/user/course/view?id=${id}`)
  }

  generateCertificate(id: FormData) {
    return this.http.post<any>(`${this.baseURL}/user/course/generate_certificate`, id)
  }

  updateProfile(form: FormData) {
    return this.http.post<any>(`${this.baseURL}/user/profile_update`, form)
  }
  markVideo(form: FormData) {
    return this.http.post<any>(`${this.baseURL}/user/course/mark-completed-courses`, form)
  }

}
