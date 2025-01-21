import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environment/environment';
import { Banners } from '../model/banners.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseURl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getBanners(page: any) {
    return this.http.get<Banners>(`${this.baseURl}/user/banner/list/${page}`)
  }
}
