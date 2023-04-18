import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MÓDULOS PADRÕES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// MÓDULOS DO SYNCFUSION

// COMPONENTES DO PROJETO
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FinanceComponent } from './components/finance/finance.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioSidebarComponent } from './components/portfolio/portfolio-sidebar/portfolio-sidebar.component';
import { PortfolioDashboardComponent } from './components/portfolio/portfolio-dashboard/portfolio-dashboard.component';
import { PortfolioTransactionComponent } from './components/portfolio/portfolio-transaction/portfolio-transaction.component';
import { PortfolioTransactionListComponent } from './components/portfolio/portfolio-transaction-list/portfolio-transaction-list.component';
import { PortfolioTransactionNewComponent } from './components/portfolio/portfolio-transaction-new/portfolio-transaction-new.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FinanceSidebarComponent } from './components/finance/finance-sidebar/finance-sidebar.component';
import { FinanceDashboardComponent } from './components/finance/finance-dashboard/finance-dashboard.component';
import { FinanceTransactionComponent } from './components/finance/finance-transaction/finance-transaction.component';
import { FinanceTransactionListComponent } from './components/finance/finance-transaction-list/finance-transaction-list.component';
import { FinanceTransactionNewComponent } from './components/finance/finance-transaction-new/finance-transaction-new.component';
import { HomeSidebarComponent } from './components/home/home-sidebar/home-sidebar.component';
import { HomeDashboardComponent } from './components/home/home-dashboard/home-dashboard.component';
import { WalletsComponent } from './components/wallets/wallets.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FinanceComponent,
    PortfolioComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    PortfolioSidebarComponent,
    PortfolioDashboardComponent,
    PortfolioTransactionComponent,
    PortfolioTransactionListComponent,
    PortfolioTransactionNewComponent,
    LoginComponent,
    RegisterComponent,
    FinanceSidebarComponent,
    FinanceDashboardComponent,
    FinanceTransactionComponent,
    FinanceTransactionListComponent,
    FinanceTransactionNewComponent,
    HomeSidebarComponent,
    HomeDashboardComponent,
    WalletsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
