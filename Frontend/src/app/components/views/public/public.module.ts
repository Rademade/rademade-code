import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PublicComponent } from 'components/views/public/public.component';
import { PublicHomeModule } from 'components/views/public/public-home/public-home.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PublicHomeModule
  ],

  declarations: [
    PublicComponent
  ]
})

export class PublicModule {}
