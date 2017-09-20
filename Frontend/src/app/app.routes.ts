import { RouterModule, Routes } from '@angular/router';

import { PublicComponent } from 'components/views/public/public.component';
import { AdminComponent } from 'components/views/admin/admin.component';

import { PUBLIC_ROUTES } from 'components/views/public/public.routes';
import { ADMIN_ROUTES } from 'components/views/admin/admin.routes';
import { NotFoundComponent } from 'components/views/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PublicComponent,
        children: PUBLIC_ROUTES
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: ADMIN_ROUTES
      }
    ],
  },

  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
