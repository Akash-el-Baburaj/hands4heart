import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  private baseURL = environment.apiUrl;

  getEventList(page: any) {
    return this.http.get<any>(`${this.baseURL}/user/events/list/${page}`)
  }

  getEventDetails() {
    return this.http.get<any>(`${this.baseURL}/user/events/view`)
  }

  getEventEnrollList(page: any) {
    return this.http.get<any>(`${this.baseURL}/user/events/get_enrolled_list_events/${page}`)
  }

  enrollToEvent(id: string) {
    return this.http.post<any>(`${this.baseURL}/user/events/enroll_to_event`, id)
  }
}
