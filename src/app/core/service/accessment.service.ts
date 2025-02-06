import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessmentService {

  constructor(private http: HttpClient) { }

  private baseURL = environment.apiUrl;

  getQUizList(id: string, page: number){
    return this.http.get<any>(`${this.baseURL}/user/question/list/${page}?course_id=${id}&status&search`)
  }

  getQuiz(id: string, page: number) {
    return this.http.get<any>(`${this.baseURL}/user/question/question_list/${page}?quizId=${id}&status&search`)
  }

  getQuizResult(id: string) {
    return this.http.get<any>(`${this.baseURL}/user/question/getQuizResults??quizId=${id}`)
  }

  startResume(form: FormData) {
    return this.http.post<any>(`${this.baseURL}/user/question/status_quiz`, form)
  }

  submitAnswer(form: FormData) {
    return this.http.post<any>(`${this.baseURL}/user/question/submit_answer`, form)
  }

  markCompleted(form: FormData) {
    return this.http.post<any>(`${this.baseURL}/user/question/mark_completed`, form)
  }
}
