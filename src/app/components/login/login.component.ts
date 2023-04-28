import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.email, this.password)
      .pipe(
        catchError(error => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe(result => {
        if (result) {
          console.log('Logged in successfully!');
          this.router.navigate(['/home']);
        } else {
          console.error('Login failed');
        }
      });
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle()
      .pipe(
        catchError(error => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe(result => {
        if (result) {
          console.log('Logged in with Google!');
          this.router.navigate(['/home']);
        } else {
          console.error('Google login failed');
        }
      });
  }

  loginWithLinkedIn(): void {
    this.authService.loginWithLinkedIn()
      .pipe(
        catchError(error => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe(result => {
        if (result) {
          console.log('Logged in with LinkedIn!');
          this.router.navigate(['/home']);
        } else {
          console.error('LinkedIn login failed');
        }
      });
  }

  signup(){
    this.router.navigate(['/register']);
  }
  
}
