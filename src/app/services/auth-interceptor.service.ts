import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private jwtHelper: JwtHelperService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if (token) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      const expirationDate = new Date(decodedToken.exp * 1000); // Converter para milissegundos
      const now = new Date();

      // Verificar se o token expirou
      if (now > expirationDate) {
        // Remover o token expirado do localstorage
        this.authService.logout();
        // Redirecionar o usuário para a página de login
        window.location.href = '/login';
        return throwError('Token expirado');
      }

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
