import { Routes } from '@angular/router';

import { AuthGuard } from 'services';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      {
        path: 'users',
        loadChildren: 'admin/users/users.module.ts#AdminUsersModule?chunkName=AdminUsers'

      },
      {
        path: 'snippets',
        loadChildren: 'admin/snippets/snippets.module.ts#AdminSnippetsModule?chunkName=AdminSnippets'
      }
    ]
  }

];