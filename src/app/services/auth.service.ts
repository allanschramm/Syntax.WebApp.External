import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { last, tap } from 'rxjs/operators';
import { environment } from 'src/environment/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'SyntaxToken';

  constructor(private http: HttpClient, private router: Router) { }
  apiUrl = environment.apiUrl;

  // Método para verificar se o token está presente no LocalStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  // Método para obter o token do LocalStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Método para salvar o token no LocalStorage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para remover o token do LocalStorage
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  login(email: string, password: string): Observable<any> {
    const data = {
      Email: email,
      Password: password
    };
    return this.http.post<any>(`${this.apiUrl}/User/login`, data).pipe(
      tap(response => localStorage.setItem(this.tokenKey, response.token))
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

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Remove o token do LocalStorage
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
