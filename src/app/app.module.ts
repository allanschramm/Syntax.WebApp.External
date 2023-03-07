import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MÓDULOS PADRÕES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

// MÓDULOS DO MATERIALS

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
    PortfolioTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
