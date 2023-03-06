import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<void> {
    const data = {
      Email: email,
      Password: password
    };
    return this.http.post<void>('/api/Account/Login', data);
  }

  loginWithGoogle(): Observable<void> {
    return this.http.get<void>('/api/Account/LoginWithGoogle');
  }

  loginWithLinkedIn(): Observable<void> {
    return this.http.get<void>('/api/Account/LoginWithLinkedIn');
  }
}

