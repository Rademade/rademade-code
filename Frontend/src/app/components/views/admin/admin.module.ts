import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminSignInModule } from 'components/views/admin/admin-sign-in/admin-sign-in.module';
import { AdminUsersListModule } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.module';
import { AdminSnippetsListModule } from 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.module';

import { AdminComponent } from 'components/views/admin/admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminSignInModule,
    AdminUsersListModule,
    AdminSnippetsListModule
  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule {}
