import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FinanceComponent } from './components/finance/finance.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioDashboardComponent } from './components/portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioTransactionComponent } from './components/portfolio/portfolio-transaction/portfolio-transaction.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'finances', component: FinanceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/dashboard', component: PortfolioDashboardComponent },
  { path: 'portfolio/transaction', component: PortfolioTransactionComponent},
  { path: 'about', component: AboutComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
