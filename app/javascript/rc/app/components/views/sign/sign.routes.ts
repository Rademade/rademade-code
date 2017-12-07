import { Routes } from '@angular/router';

import { SignComponent } from 'components/views/sign/sign.component';


export const signRoutes: Routes = [
  {
    path: '',
    component: SignComponent,
    children: [
      {
        path: '',
        loadChildren: 'components/views/sign/sign-in/sign-in.module.ts#SignInModule?chunkName=SignIn',
      },
    ]
  },

];
