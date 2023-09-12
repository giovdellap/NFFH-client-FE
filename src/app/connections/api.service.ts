import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user.service';
import { LoginRequest, LoginResponse } from './connectionTypes';
import { loginResponse } from './mockObjects';

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
      return this.http.post<LoginResponse>(this.url, req).pipe(
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
}
