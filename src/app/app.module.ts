import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MÓDULOS PADRÕES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { NgxPaginationModule } from 'ngx-pagination';

// MÓDULOS DE CHARTS
import { NgChartsModule } from 'ng2-charts';

// MÓDULOS DO SYNCFUSION
import { DialogModule } from '@syncfusion/ej2-angular-popups';

// MÓDULOS DO MATERIAL
import { MatSnackBarModule } from "@angular/material/snack-bar";

// SERVICES
import { SyntaxService } from './services/syntax.service';
import { AuthService } from './services/auth.service';
import { ComponentshowService } from './services/componentshow.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

// PIPES
import { FinanceEventTypePipe } from './pipes/finance-event-type.pipe';
import { PortfolioEventTypePipe } from './pipes/portfolio-event-type.pipe';

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
import { WalletsListComponent } from './components/wallets/wallets-list/wallets-list.component';
import { WalletsNewComponent } from './components/wallets/wallets-new/wallets-new.component';
import { WalletComponent } from './components/wallets/wallet/wallet.component';
import { ProfileEditComponent } from './components/profile/profile-edit/profile-edit.component';
import { FinanceTransactionEditComponent } from './components/finance/finance-transaction-edit/finance-transaction-edit.component';
import { FinanceTransactionDeleteComponent } from './components/finance/finance-transaction-delete/finance-transaction-delete.component';
import { PortfolioTransactionEditComponent } from './components/portfolio/portfolio-transaction-edit/portfolio-transaction-edit.component';
import { PortfolioTransactionDeleteComponent } from './components/portfolio/portfolio-transaction-delete/portfolio-transaction-delete.component';
import { ClassByUserComponent } from './components/charts/finance/class-by-user/class-by-user.component';
import { ClassByUserPercentageComponent } from './components/charts/finance/class-by-user-percentage/class-by-user-percentage.component';
import { AssetsByClassComponent } from './components/charts/portfolio/assets-by-class/assets-by-class.component';
import { AssetsByPortfolioComponent } from './components/charts/portfolio/assets-by-portfolio/assets-by-portfolio.component';
import { PortfolioEvolutionComponent } from './components/charts/portfolio/portfolio-evolution/portfolio-evolution.component';


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
    WalletsListComponent,
    WalletsNewComponent,
    WalletComponent,
    ProfileEditComponent,
    FinanceTransactionEditComponent,
    FinanceTransactionDeleteComponent,
    PortfolioTransactionEditComponent,
    PortfolioTransactionDeleteComponent,
    FinanceEventTypePipe,
    PortfolioEventTypePipe,
    ClassByUserComponent,
    ClassByUserPercentageComponent,
    AssetsByClassComponent,
    AssetsByPortfolioComponent,
    PortfolioEvolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

    // MATERIAL
    MatSnackBarModule,

    // EJ2 Modules
    DialogModule,
      NgChartsModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    JwtHelperService,
    SyntaxService,
    AuthService,
    ComponentshowService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
