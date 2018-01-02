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
        loadChildren: 'admin/users/users.module.ts#UsersModule?chunkName=Users'

      },
      {
        path: 'snippets',
        loadChildren: 'admin/snippets/snippets.module.ts#SnippetsModule?chunkName=Snippets'
      }
    ]
  }

];