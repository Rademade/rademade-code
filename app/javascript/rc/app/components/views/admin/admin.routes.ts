import { Routes } from '@angular/router';

import { AuthGuard } from 'services';
import {AdminComponent} from "./admin.component";

export const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'users',
        loadChildren: 'components/views/admin/admin-users/admin-users-list/admin-users-list.module.ts#AdminUsersListModule?chunkName=AdminUsersList'

      },
      {
        path: 'snippets',
        loadChildren: 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.module.ts#AdminSnippetsListModule?chunkName=AdminSnippetsList'
      }
    ]
  }

];