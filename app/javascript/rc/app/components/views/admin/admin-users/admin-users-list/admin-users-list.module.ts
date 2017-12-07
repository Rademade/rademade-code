import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersListComponent } from './admin-users-list.component';
import { RouterModule } from '@angular/router';
import { adminUsersListRoutes } from "./admin-users-list.routes";
import {AdminUsersListResolver} from "./admin-users-list.resolver";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminUsersListRoutes),
  ],
  declarations: [
    AdminUsersListComponent
  ],
  providers: [
    AdminUsersListResolver
  ],
  exports: [
    RouterModule,
  ]
})
export class AdminUsersListModule { }
