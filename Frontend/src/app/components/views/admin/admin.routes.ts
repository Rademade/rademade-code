import { Routes } from '@angular/router';

import { AdminSignInComponent } from 'components/views/admin/admin-sign-in/admin-sign-in.component';
import { AdminUsersListComponent } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.component';
import { AdminUsersListResolver } from 'components/views/admin/admin-users/admin-users-list/admin-users-list.resolver';

import { AdminSnippetsListComponent } from 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.component';
import { AdminSnippetsListResolver } from 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.resolver';


export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminSignInComponent
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: AdminUsersListComponent,
        resolve: { users: AdminUsersListResolver }
      }
    ]
  },
  {
    path: 'snippets',
    children: [
      {
        path: '',
        component: AdminSnippetsListComponent,
        resolve: { snippets: AdminSnippetsListResolver }
      }
    ]
  }
];
