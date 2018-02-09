import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PublicComponent } from 'public/public.component';
import { publicRoutes } from 'public/public.routes';
import { CommonModule } from '@angular/common';
import { HeaderModule } from 'public/@shared/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule.forChild(publicRoutes)
  ],
  declarations: [
    PublicComponent
  ],
  exports: [
    RouterModule
  ]
})

export class PublicModule {
}
