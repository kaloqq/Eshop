import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RegisterComponent} from "./components/register/register.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {LoginComponent} from "./components/login/login.component";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FaIconComponent,
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule {}
