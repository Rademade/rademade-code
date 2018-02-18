import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { HomeComponent } from 'home/home.component';
import { homeRoutes } from "home/home.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PublicHomeModule { }
