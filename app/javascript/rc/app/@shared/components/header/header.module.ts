import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { HeaderNavComponent } from '@shared/components/header/header-nav/header-nav.component';
import { HeaderUserComponent } from '@shared/components/header/header-user/header-user.component';
import { HeaderSignComponent } from '@shared/components/header/header-sign/header-sign.component';

import { AuthService } from '@shared/services/auth.service';
import { FormInputModule } from '@shared/components/form-input/form-input.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormInputModule
  ],
  declarations: [
    HeaderComponent,
    HeaderNavComponent,
    HeaderUserComponent,
    HeaderSignComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
