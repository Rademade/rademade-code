import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersListComponent } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.component';
import { AdminUsersListResolver } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.resolver';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { UsersService } from '@services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  declarations: [
    AdminUsersListComponent
  ],
  providers: [
    UsersService,
    AdminUsersListResolver
  ]
})
export class AdminUsersListModule { }
