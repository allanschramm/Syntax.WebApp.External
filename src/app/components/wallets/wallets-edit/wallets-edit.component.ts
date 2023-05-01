import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationUser } from 'src/app/models/application-user';
import { Portfolio } from 'src/app/models/portfolio';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-wallets-edit',
  templateUrl: './wallets-edit.component.html',
  styleUrls: ['./wallets-edit.component.css']
})
export class WalletsEditComponent {
  portfolioForm!: FormGroup;
  id!: string;
  portfolio!: Portfolio;
  user!: ApplicationUser;
  user$!: Observable<ApplicationUser>;

  constructor(
    private formBuilder: FormBuilder,
    private syntaxService: SyntaxService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
      this.portfolioForm = this.formBuilder.group({
        name: ['', Validators.required],
        description: ['', Validators.required]
      });
    }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;    

    this.user$ = this.authService.getUserById(this.authService.getUserId());
    this.user$.subscribe((user: ApplicationUser) => {
      this.user = user;
    });

    this.syntaxService.getPortfolio(parseInt(this.id)).subscribe((res) => {
      this.portfolio = res;
      this.portfolioForm = this.formBuilder.group({
        name: this.portfolio.name,
        description: this.portfolio.description
      });
    });
  }

  onSubmit() {
    const portfolio = new Portfolio();
    portfolio.id = parseInt(this.id);
    portfolio.name = this.portfolioForm.controls['name'].value;
    portfolio.description = this.portfolioForm.controls['description'].value;

    portfolio.idUser = this.authService.getUserId();

    portfolio.userNavigation = this.user;

    this.syntaxService.putPortfolio(portfolio)
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
