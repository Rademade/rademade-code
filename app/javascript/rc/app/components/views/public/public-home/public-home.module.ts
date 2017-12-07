import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicHomeComponent } from 'components/views/public/public-home/public-home.component';
import { RouterModule } from "@angular/router";
import { publicHomeRoutes } from "./public-home.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicHomeRoutes)
  ],
  declarations: [
    PublicHomeComponent
  ],
  exports: [
    RouterModule
  ]
})
export class PublicHomeModule { }
