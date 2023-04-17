import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { last, tap } from 'rxjs/operators';
import { environment } from 'src/environment/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  apiUrl = environment.apiUrl;

  login(email: string, password: string): Observable<any> {
    const data = {
      Email: email,
      Password: password
    };
    return this.http.post<any>(`${this.apiUrl}/User/login`, data).pipe(
      tap(response => localStorage.setItem('SyntaxToken', response.token))
    );
  }

  loginWithGoogle(): Observable<void> {
    return this.http.get<void>('/api/Account/LoginWithGoogle');
  }

  loginWithLinkedIn(): Observable<void> {
    return this.http.get<void>('/api/Account/LoginWithLinkedIn');
  }

  register(name: string, lastname: string, email: string, password: string, reEntryPassword: string): Observable<any> {
    const data = {
      name: name,
      lastname: lastname,
      email: email,
      password: password,
      reEntryPassword: reEntryPassword
    };
    return this.http.post<any>(`${this.apiUrl}/User/register`, data).pipe(
      tap(response => console.log('Registro bem-sucedido:', response))
    );
  }
}
