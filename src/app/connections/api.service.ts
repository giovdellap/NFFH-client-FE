import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user.service';
import { Areas, HomepageCardResponse, LoginRequest, LoginResponse, StoresListResponse } from './connectionTypes';
import { homepageCardsResponse } from './mockObjects/homepage';
import { loginResponse } from './mockObjects/login';
import { areasList, storeslistresponse1, storeslistresponse2 } from './mockObjects/storesList';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  /** SERVICE MODE
   * 1 : API (connected to server)
   * 2: Mock
   */
  serviceMode = 2;
  url = "";

  constructor(private http: HttpClient, private user: UserService) { }

  login(email: string, password: string) {
    if (this.serviceMode == 1) {
      const req: LoginRequest = {
        email: email,
        password: password
      }
      return this.http.post<LoginResponse>(this.url+'/login', req).pipe(
        tap(x => this.user.setUser(x.token, x.name))
      )
    }
    else {
      this.user.setUser(loginResponse.token, loginResponse.name)
      return new Observable<LoginResponse>(observer => {
        observer.next(loginResponse);
        observer.complete();
      })
    }
  }

  getHomepageCards() {
    if(this.serviceMode == 1) {
      return this.http.get<HomepageCardResponse>(this.url+'/hpcards');
    }
    else {
      return new Observable<HomepageCardResponse>(observer => {
        observer.next(homepageCardsResponse);
        observer.complete();
      })
    }
  }

  getLocationsList() {
    if(this.serviceMode == 1) {
      return this.http.get<Areas>(this.url+'/zones');
    } else {
      return new Observable<Areas>(observer => {
        observer.next(areasList);
        observer.complete();
      })
    }
  }

  getStoresList(page: number, area: string) {
    if(this.serviceMode == 1) {
      return this.http.get<StoresListResponse>(this.url+'/stores?zone='+area+'&page='+page);
    }
    else {
      return new Observable<StoresListResponse>(observer => {
        if(page === 1) observer.next(storeslistresponse1);
        if(page === 2) observer.next(storeslistresponse2);
        observer.complete();
      })
    }
  }
}
