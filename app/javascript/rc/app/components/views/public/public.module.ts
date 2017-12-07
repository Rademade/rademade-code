import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicComponent } from 'components/views/public/public.component';
import { publicRoutes } from 'components/views/public/public.routes';
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
