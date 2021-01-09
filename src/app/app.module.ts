import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponent } from './home/home.component';
import { PlaceSellRequestComponent } from './place-sell-request/place-sell-request.component';
import { LoginComponent } from './login/login.component';
import { ApplyForPolicyComponent } from './apply-for-policy/apply-for-policy.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FarmerWelcomeComponent } from './farmer-welcome/farmer-welcome.component';
import { BidderWelcomeComponent } from './bidder-welcome/bidder-welcome.component';
import { InsurancePageComponent } from './insurance-page/insurance-page.component';
import { ViewMarketPlaceComponent } from './view-market-place/view-market-place.component';
import { ViewSoldHistoryComponent } from './view-sold-history/view-sold-history.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerRegistrationComponent,
    BidderRegistrationComponent,
    LoginComponentComponent,
    HomeComponent,
    PlaceSellRequestComponent,
    LoginComponent,
    ApplyForPolicyComponent,
    ClaimInsuranceComponent,
    ContactComponent,
    HeaderComponent,
    FarmerWelcomeComponent,
    BidderWelcomeComponent,
    InsurancePageComponent,
    ViewMarketPlaceComponent,
    ViewSoldHistoryComponent,
    AdminDashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
