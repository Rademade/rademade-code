import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: 'components/views/public/public-home/public-home.module.ts#PublicHomeModule?chunkName=PublicHome',
      }
    ]
  }
];
