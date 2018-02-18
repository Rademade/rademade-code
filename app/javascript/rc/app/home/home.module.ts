import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from 'home/home.component';
import { homeRoutes } from 'home/home.routes';
import { FormInputModule } from '@shared/components/form-input/form-input.module';
import { LinksApiService } from '@shared/services/api/links.api.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LinksApiService
  ]
})
export class PublicHomeModule { }
