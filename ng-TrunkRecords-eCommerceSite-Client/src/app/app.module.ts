import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AvailabilityComponent } from './availability/availability.component';
import { ApparelComponent } from './apparel/apparel.component';
import { FooterComponent } from './footer/footer.component';
import { AppareldetailsComponent } from './appareldetails/appareldetails.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './admin/signup/signup.component';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { UpdateComponent } from './admin/update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AvailabilityComponent,
    ApparelComponent,
    FooterComponent,
    AppareldetailsComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ManageProductComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
