import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
  userForm: FormGroup;
  user!: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.getUserById(this.authService.getUserId()).subscribe((response: any) => {
      this.user = response;
      this.userForm.setValue({
        email: this.user.email,
        name: this.user.name,
        lastName: this.user.lastName,
      });
    });
  }

  onSubmit(): void {    
    this.user.email = this.userForm.value.email;
    this.user.name = this.userForm.value.name;
    this.user.lastName = this.userForm.value.lastName;

    // user.id = this.authService.getUserId();
    this.authService.editUser(this.user).subscribe((user) => {
      // sucesso
    }, (error) => {
      // erro
    });
  }

}
