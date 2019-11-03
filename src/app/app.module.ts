import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { WlanAndServicesComponent } from './wlan-and-services/wlan-and-services.component';
import { ViewSpeedComponent } from './view-speed/view-speed.component';
import { UsersStatusComponent } from './users-status/users-status.component';
import { SecurityFormsComponent } from './security-forms/security-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    WlanAndServicesComponent,
    ViewSpeedComponent,
    UsersStatusComponent,
    SecurityFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
