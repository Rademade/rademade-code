import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'public/@shared/header/header.component';
import { RouterModule } from '@angular/router';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { AuthService } from '@shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    HeaderNavComponent,
    HeaderUserComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
