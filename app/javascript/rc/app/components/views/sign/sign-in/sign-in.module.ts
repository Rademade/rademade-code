import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from 'components/views/sign/sign-in/sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import {signInRoutes} from "./sign-in.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signInRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignInComponent
  ],
  exports: [
    RouterModule
  ]
})

export class SignInModule { }