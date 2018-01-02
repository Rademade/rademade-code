import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from 'admin/users/users.component';
import { UsersResolver } from 'admin/users/users.resolver';
import { usersRoutes } from 'admin/users/users.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersResolver
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule { }
