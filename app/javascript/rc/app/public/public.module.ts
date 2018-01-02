import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicComponent } from 'public/public.component';
import { publicRoutes } from 'public/public.routes';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  declarations: [
    PublicComponent
  ],
  exports: [
    RouterModule
  ]
})

export class PublicModule {}
