import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/application-user';
import { Portfolio } from 'src/app/models/portfolio';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-wallets-new',
  templateUrl: './wallets-new.component.html',
  styleUrls: ['./wallets-new.component.css']
})
export class WalletsNewComponent {
  portfolioForm!: FormGroup;
  user!: ApplicationUser;
  user$!: Observable<ApplicationUser>;

  constructor(
    private formBuilder: FormBuilder,
    private syntaxService: SyntaxService,
    private authService: AuthService,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.portfolioForm = this.formBuilder.group({
      name: [''],
      description: ['']
    });

    this.user$ = this.authService.getUserById(this.authService.getUserId());
    this.user$.subscribe((user: ApplicationUser) => {
      this.user = user;
    });
  }

  onSubmit() {
    const portfolio = this.portfolioForm.value as Portfolio;

    portfolio.idUser = this.authService.getUserId();

    portfolio.userNavigation = this.user;

    this.syntaxService.postPortfolio(portfolio)
    .subscribe(
      () => {
        this.router.navigate(['wallets/wallet']);
      }
    )
  }

  back() : void {
    this.router.navigate(['/wallets/wallet'])
  }
}
