import { Routes } from '@angular/router';
import { PublicComponent } from 'public/public.component';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: 'public/home/home.module.ts#HomeModule?chunkName=PublicHome'
      },
      {
        path: 'snippets',
        loadChildren: 'public//snippets/snippets.module.ts#SnippetsModule?chunkName=PublicSnippets'
      }
    ]
  },

];
