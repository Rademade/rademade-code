import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { signRoutes } from 'sign/sign.routes';
import { SignComponent } from 'sign/sign.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(signRoutes),
  ],
  declarations: [
    SignComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class SignModule {
}
