import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FinanceComponent } from './components/finance/finance.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioDashboardComponent } from './components/portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioTransactionNewComponent } from './components/portfolio/portfolio-transaction-new/portfolio-transaction-new.component';
import { PortfolioTransactionComponent } from './components/portfolio/portfolio-transaction/portfolio-transaction.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';
import { FinanceDashboardComponent } from './components/finance/finance-dashboard/finance-dashboard.component';
import { FinanceTransactionComponent } from './components/finance/finance-transaction/finance-transaction.component';
import { FinanceTransactionNewComponent } from './components/finance/finance-transaction-new/finance-transaction-new.component';
import { HomeDashboardComponent } from './components/home/home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeDashboardComponent}
    ]
  },
  { 
    path: 'finances',
    component: FinanceComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: FinanceDashboardComponent },
      { path: 'transaction', component: FinanceTransactionComponent },
      { path: 'new', component: FinanceTransactionNewComponent },
    ],
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: PortfolioDashboardComponent },
      { path: 'transaction', component: PortfolioTransactionComponent },
      { path: 'new', component: PortfolioTransactionNewComponent},
    ],
  },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
