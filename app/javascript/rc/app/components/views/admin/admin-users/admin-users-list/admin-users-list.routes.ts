import { Routes } from '@angular/router';

import { AdminUsersListComponent } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.component';

import { AdminUsersListResolver } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.resolver';


export const adminUsersListRoutes: Routes = [
  {
    path: '',
    component: AdminUsersListComponent,
    resolve: { users: AdminUsersListResolver }
  }
];
