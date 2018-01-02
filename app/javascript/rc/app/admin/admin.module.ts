import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from 'admin/admin.component';
import { adminRoutes } from 'admin/admin.routes';
import { SnippetsService, UserService, CurrentUserService } from 'services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    AdminComponent,
  ],
  providers: [
    UserService,
    SnippetsService,
    CurrentUserService
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule {}
