import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApplicationUser } from 'src/app/models/application-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  userForm: FormGroup;
  user!: ApplicationUser;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['']
    });
  }
  ngOnInit(): void {
    // obtém as informações do usuário logado
    this.authService.getUserById(this.authService.getUserId()).subscribe((user: ApplicationUser) => {
      // armazena o usuário em uma propriedade da classe
      this.user = user;
      // define os valores iniciais do formulário de edição com as informações do usuário
      this.userForm.setValue({
        email: user.email,
        name: user.name,
        lastName: user.lastName,
        role: user.role
      });
    });    
  }

  onSubmit(): void {
    const user = this.userForm.value as ApplicationUser;
    user.id = this.authService.getUserId();;
    this.authService.editUser(user).subscribe((user: ApplicationUser) => {
      // sucesso
    }, (error) => {
      // erro
    });
  }
  
}
