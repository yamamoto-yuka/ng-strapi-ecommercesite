import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { SignupComponent } from './admin/signup/signup.component';
import { UpdateComponent } from './admin/update/update.component';
import { ApparelComponent } from './apparel/apparel.component';
import { AppareldetailsComponent } from './appareldetails/appareldetails.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './auth/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'apparel', component: ApparelComponent },
  { path: 'apparel/:id', component: AppareldetailsComponent },
  { path: 'admin/signup', component: SignupComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/home', component: ManageProductComponent, canActivate:[LoginGuard]},
  { path: 'admin/update/:id', component: UpdateComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
