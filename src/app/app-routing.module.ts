import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { WalletsComponent } from './components/wallets/wallets.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WalletsNewComponent } from './components/wallets/wallets-new/wallets-new.component';
import { WalletComponent } from './components/wallets/wallet/wallet.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { FinanceTransactionEditComponent } from './components/finance/finance-transaction-edit/finance-transaction-edit.component';
import { FinanceTransactionDeleteComponent } from './components/finance/finance-transaction-delete/finance-transaction-delete.component';
import { PortfolioTransactionEditComponent } from './components/portfolio/portfolio-transaction-edit/portfolio-transaction-edit.component';
import { PortfolioTransactionDeleteComponent } from './components/portfolio/portfolio-transaction-delete/portfolio-transaction-delete.component';
import { WalletsEditComponent } from './components/wallets/wallets-edit/wallets-edit.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landing', component: LandingComponent },
  { 
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: ProfileEditComponent }
    ]
  },
  { 
    path: 'wallets',
    component: WalletsComponent,
    children: [
      { path: '', redirectTo: 'wallet', pathMatch: 'full' },
      { path: 'wallet', component: WalletComponent },
      { path: 'new', component: WalletsNewComponent },
      { path: 'edit/:id', component: WalletsEditComponent }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeDashboardComponent }
    ]
  },
  { 
    path: 'finances',
    component: FinanceComponent,
    children: [
      { path: '', redirectTo: 'transaction', pathMatch: 'full' },
      { path: 'transaction', component: FinanceTransactionComponent },
      { path: 'new', component: FinanceTransactionNewComponent },
      { path: 'edit/:id', component: FinanceTransactionEditComponent },
      { path: 'delete/:id', component: FinanceTransactionDeleteComponent },
    ],
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    children: [
      { path: '', redirectTo: 'transaction', pathMatch: 'full' },
      { path: 'transaction', component: PortfolioTransactionComponent },
      { path: 'new', component: PortfolioTransactionNewComponent },
      { path: 'edit/:id', component: PortfolioTransactionEditComponent },
      { path: 'delete/:id', component: PortfolioTransactionDeleteComponent },
    ],
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
