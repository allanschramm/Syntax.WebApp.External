import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      reEntryPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const name = this.registerForm.get('name')?.value;
      const lastname = this.registerForm.get('lastname')?.value;
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      const reEntryPassword = this.registerForm.get('reEntryPassword')?.value;
      
      this.authService.register(name, lastname, email, password, reEntryPassword)
      .subscribe(
        response => {
          console.log('Registro bem-sucedido:', response);
          this.router.navigate(['/login']);
        },
        error => {
          console.log('Erro no registro:', error);          
        }
      )
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  login(){
    this.router.navigate(['/login/']);
  }
}
