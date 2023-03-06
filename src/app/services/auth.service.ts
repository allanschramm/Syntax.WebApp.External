import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async login(email: string, password: string): Promise<void> {
    const data = {
      Email: email,
      Password: password
    };
    await this.http.post('/api/Account/Login', data).toPromise();
  }

  async loginWithGoogle(): Promise<void> {
    await this.http.get('/api/Account/LoginWithGoogle').toPromise();
  }

  async loginWithLinkedIn(): Promise<void> {
    await this.http.get('/api/Account/LoginWithLinkedIn').toPromise();
  }
}
