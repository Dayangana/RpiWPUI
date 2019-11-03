import { SecurityFormsComponent } from './security-forms/security-forms.component';
import { UsersStatusComponent } from './users-status/users-status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { WlanAndServicesComponent } from './wlan-and-services/wlan-and-services.component';


const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"wlan-service",component:WlanAndServicesComponent},
  {path:"user-status",component:UsersStatusComponent},
  {path:"security-form",component:SecurityFormsComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
