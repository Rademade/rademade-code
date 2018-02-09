import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './public/public.module.ts#PublicModule?chunkName=PublicModule'
  },
  {
    path: 'sign',
    loadChildren: './sign/sign.module.ts#SignModule?chunkName=SignModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module.ts#UsersModule?chunkName=UsersModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { errorHandler: (error) => console.error("Routing error(app.routing.ts):", error) }
    )
  ],
  exports: [
    RouterModule
  ]})
export class AppRoutingModule {}