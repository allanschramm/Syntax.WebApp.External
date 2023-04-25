import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/models/portfolio';
import { AuthService } from 'src/app/services/auth.service';
import { SyntaxService } from 'src/app/services/syntax.service';

@Component({
  selector: 'app-wallets-new',
  templateUrl: './wallets-new.component.html',
  styleUrls: ['./wallets-new.component.css']
})
export class WalletsNewComponent {
  portfolioForm!: FormGroup
  
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
  }

  onSubmit() {
    const portfolio = this.portfolioForm.value as Portfolio;

    portfolio.idUser = this.authService.getUserId();

    this.syntaxService.postPortfolio(portfolio)
    .subscribe(
      () => {
        this.router.navigate(['wallets/wallet']);
      }
    )
  }

  voltar() : void {
    this.router.navigate(['/wallets/wallet'])
  }
}