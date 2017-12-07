import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { signRoutes } from "./sign.routes";
import { SignComponent } from "./sign.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(signRoutes),
  ],
  declarations: [
    SignComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class SignModule {}
